package com.dy.intercepter;

import com.dy.base.BaseInfoProperties;
import com.dy.exceptions.GraceException;
import com.dy.exceptions.MyCustomException;
import com.dy.grace.result.ResponseStatusEnum;
import com.dy.utils.IPUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class PassportInterceptor extends BaseInfoProperties implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) throws Exception {

        // 获得用户的ip
        String userIp = IPUtil.getRequestIp(request);

        // 得到是否存在的判断
        boolean keyIsExist = redis.keyIsExist(MOBILE_SMSCODE + ":" + userIp);

        if (keyIsExist) {
            log.info("短信发送频率太大！");
            GraceException.display(ResponseStatusEnum.SMS_NEED_WAIT_ERROR);
//            try {
//                GraceException.display(ResponseStatusEnum.SMS_NEED_WAIT_ERROR);
//            } catch (MyCustomException e) {
//                // 记录异常到日志文件
//                log.error("发生自定义异常", e);
//                // 根据实际情况决定是否需要再次抛出异常或者直接返回false
//                return false;
//            }
            return false;
        }

        /**
         * true: 请求放行
         * false: 请求拦截
         */
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }
}
