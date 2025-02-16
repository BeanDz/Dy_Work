package com.dy.mapper;

import com.dy.vo.IndexVlogVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface VlogMapperCustom {



    public List<IndexVlogVO> getMyLikedVlogList(@Param("paramMap")Map<String, Object> map);

    public List<IndexVlogVO> getMyFollowVlogList(@Param("paramMap")Map<String, Object> map);

    public List<IndexVlogVO> getMyFriendVlogList(@Param("paramMap")Map<String, Object> map);

    public List<IndexVlogVO> getIndexVlogList(@Param("paramMap")Map<String, Object> map);

    public List<IndexVlogVO> getVlogDetailById(@Param("paramMap")Map<String, Object> map);

}