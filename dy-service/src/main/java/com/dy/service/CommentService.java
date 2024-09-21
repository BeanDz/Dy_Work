package com.dy.service;

import com.dy.bo.CommentBO;
import com.dy.pojo.Comment;
import com.dy.utils.PagedGridResult;
import com.dy.vo.CommentVO;

public interface CommentService {

    /**
     * 发表评论
     */
    public CommentVO createComment(CommentBO commentBO);

    /**
     * 查询评论的列表
     */
    public PagedGridResult queryVlogComments(String vlogId,
                                             String userId,
                                             Integer page,
                                             Integer pageSize);

    /**
     * 删除评论
     */
    public void deleteComment(String commentUserId,
                              String commentId,
                              String vlogId);

    /**
     * 根据主键查询comment
     */
    public Comment getComment(String id);
}
