package com.dy.controller;

import com.dy.base.BaseInfoProperties;
import com.dy.grace.result.GraceJSONResult;
import com.dy.grace.result.ResponseStatusEnum;
import com.dy.pojo.Users;
import com.dy.service.FansService;
import com.dy.service.UserService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api(tags = "FansController 粉丝相关业务功能的接口") // 使用Swagger注解来描述这个控制器的功能
@RequestMapping("fans") // 设置控制器的路径前缀
@RestController // 表示这是一个RESTful风格的控制器
public class FansController extends BaseInfoProperties { // 继承BaseInfoProperties类
    @Autowired // 自动注入UserService
    private UserService userService;
    @Autowired // 自动注入FansService
    private FansService fansService;

    @PostMapping("follow") // 定义一个处理关注请求的POST方法
    public GraceJSONResult follow(@RequestParam String myId, // 用户ID
                                  @RequestParam String vlogerId) { // 要关注的博主ID

        // 判断两个myId、vlogerId不能为空
        if (StringUtils.isBlank(myId) || StringUtils.isBlank(vlogerId)) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_ERROR); // 如果为空，则返回系统错误
        }

        // 判断当前用户，自己不能关注自己
        if (myId.equalsIgnoreCase(vlogerId)) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO); // 如果是同一个用户，则返回无信息错误
        }

        // 判断两个id对应的用户是否存在
        Users vloger = userService.getUser(vlogerId); // 通过vlogerId获取用户信息
        Users myInfo = userService.getUser(myId); // 通过myId获取用户信息

        // 两个用户id的数据库查询后的判断
        if (myInfo == null || vloger == null) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO); // 如果任一用户不存在，则返回无信息错误
        }

        // 保存粉丝关系到数据库
        fansService.doFollow(myId, vlogerId); // 调用FansService保存关注关系

        // 我的关注+1、博主的粉丝+1
        redis.increment(REDIS_MY_FOLLOWS_COUNTS + ":" + myId, 1); // 增加我的关注数
        redis.increment(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1); // 增加博主的粉丝数

        // 我和博主的关联关系，依赖redis，不要存储数据库，避免db的性能瓶颈
        redis.set(REDIS_FANS_AND_VLOGGER_RELATIONSHIP + ":" + myId + ":" + vlogerId, "1"); // 设置关注关系

        return GraceJSONResult.ok(); // 返回成功结果
    }



    @GetMapping("queryMyFans") // 定义一个查询我的粉丝列表的GET方法
    public GraceJSONResult queryMyFans(@RequestParam String myId, // 用户ID
                                       @RequestParam Integer page, // 分页参数 - 当前页
                                       @RequestParam Integer pageSize) { // 分页参数 - 每页大小
        return GraceJSONResult.ok(
                fansService.queryMyFans(myId, page, pageSize)); // 查询并返回我的粉丝列表
    }
    @PostMapping("cancel") // 定义一个处理取消关注请求的POST方法
    public GraceJSONResult cancel(@RequestParam String myId, // 用户ID
                                  @RequestParam String vlogerId) { // 要取消关注的博主ID

        // 删除业务的执行
        fansService.doCancel(myId, vlogerId); // 调用FansService删除关注关系

        // 博主的粉丝-1，我的关注-1
        redis.decrement(REDIS_MY_FOLLOWS_COUNTS + ":" + myId, 1); // 减少我的关注数
        redis.decrement(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1); // 减少博主的粉丝数

        // 我和博主的关联关系，依赖redis，不要存储数据库，避免db的性能瓶颈
        redis.del(REDIS_FANS_AND_VLOGGER_RELATIONSHIP + ":" + myId + ":" + vlogerId); // 删除关注关系

        return GraceJSONResult.ok(); // 返回成功结果
    }

    @GetMapping("queryDoIFollowVloger") // 定义一个查询是否关注某个博主的GET方法
    public GraceJSONResult queryDoIFollowVloger(@RequestParam String myId, // 用户ID
                                                @RequestParam String vlogerId) { // 要查询的博主ID
        return GraceJSONResult.ok(fansService.queryDoIFollowVloger(myId, vlogerId)); // 查询并返回结果
    }

    @GetMapping("queryMyFollows") // 定义一个查询我的关注列表的GET方法
    public GraceJSONResult queryMyFollows(@RequestParam String myId, // 用户ID
                                          @RequestParam Integer page, // 分页参数 - 当前页
                                          @RequestParam Integer pageSize) { // 分页参数 - 每页大小
        return GraceJSONResult.ok(
                fansService.queryMyFollows(myId, page, pageSize)); // 查询并返回我的关注列表
    }
}
