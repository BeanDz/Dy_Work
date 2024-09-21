package com.dy.exceptions;

import com.dy.grace.result.GraceJSONResult;
import com.dy.grace.result.ResponseStatusEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 统一异常拦截处理
 * 可以针对异常的类型进行捕获，然后返回json信息到前端
 */
@Slf4j
@ControllerAdvice
public class GraceExceptionHandler {

    //自定义异常拦截统一处理
    @ExceptionHandler(MyCustomException.class)
    @ResponseBody
    public GraceJSONResult returnMyException(MyCustomException e) {
//        e.printStackTrace();
//        log.info("------------------------------------------");
        log.error("发生自定义异常", e);
        return GraceJSONResult.exception(e.getResponseStatusEnum());
    }

    //方法参数无效 异常拦截统一处理
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public GraceJSONResult returnMethodArgumentNotValid(MethodArgumentNotValidException e) {
        log.error("发生方法参数无效异常", e);
        BindingResult result = e.getBindingResult();
        Map<String, String> map = getErrors(result);
        return GraceJSONResult.errorMap(map);
    }
    //文件上传超过最大限制 异常拦截统一处理
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    @ResponseBody
    public GraceJSONResult returnMaxUploadSize(MaxUploadSizeExceededException e) {
//        e.printStackTrace();
        log.error("发生文件上传超过最大限制异常", e);
        return GraceJSONResult.errorCustom(ResponseStatusEnum.FILE_MAX_SIZE_2MB_ERROR);
    }

    public Map<String, String> getErrors(BindingResult result) {
        Map<String, String> map = new HashMap<>();
        List<FieldError> errorList = result.getFieldErrors();
        for (FieldError ff : errorList) {
            // 错误所对应的属性字段名
            String field = ff.getField();
            // 错误的信息
            String msg = ff.getDefaultMessage();
            map.put(field, msg);
        }
        return map;
    }
}
