package com.dy.mapper;

import com.dy.my.mapper.MyMapper;
import com.dy.pojo.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentMapper extends MyMapper<Comment> {
}