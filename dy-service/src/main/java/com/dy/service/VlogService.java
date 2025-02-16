package com.dy.service;

import com.dy.bo.VlogBO;
import com.dy.pojo.Vlog;
import com.dy.utils.PagedGridResult;
import com.dy.vo.IndexVlogVO;

public interface VlogService {



    /**
     * 用户点赞/喜欢视频
     */
    public void userLikeVlog(String userId, String vlogId);

    /**
     * 用户取消点赞/喜欢视频
     */
    public void userUnLikeVlog(String userId, String vlogId);

    /**
     * 获得用户点赞视频的总数
     */
    public Integer getVlogBeLikedCounts(String vlogId);

    /**
     * 查询用户点赞过的短视频
     */
    public PagedGridResult getMyLikedVlogList(String userId,
                                           Integer page,
                                           Integer pageSize);

    /**
     * 查询用户关注的博主发布的短视频列表
     */
    public PagedGridResult getMyFollowVlogList(String myId,
                                              Integer page,
                                              Integer pageSize);

    /**
     * 新增vlog视频
     */
    public void createVlog(VlogBO vlogBO);


    /**
     * 查询首页/搜索的vlog列表
     */
    public PagedGridResult getIndexVlogList(String userId,
                                            String search,
                                            Integer page,
                                            Integer pageSize);

    /**
     * 根据视频主键查询vlog
     */
    public IndexVlogVO getVlogDetailById(String userId, String vlogId);

    /**
     * 用户把视频改为公开/私密的视频
     */
    public void changeToPrivateOrPublic(String userId,
                                        String vlogId,
                                        Integer yesOrNo);

    /**
     * 查询用的公开/私密的视频列表
     */
    public PagedGridResult queryMyVlogList(String userId,
                                           Integer page,
                                           Integer pageSize,
                                           Integer yesOrNo);
    /**
     * 查询朋友发布的短视频列表
     */
    public PagedGridResult getMyFriendVlogList(String myId,
                                               Integer page,
                                               Integer pageSize);

    /**
     * 根据主键查询vlog
     */
    public Vlog getVlog(String id);
}
