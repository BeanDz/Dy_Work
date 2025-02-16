package com.dy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UsersVO {
    private String id;
    private String mobile;
    private String nickname;
    private String num;
    private String face;
    private Integer sex;
    private Date birthday;
    private String country;
    private String province;
    private String city;
    private String district;
    private String description;
    private String bgImg;
    private Integer canNumBeUpdated;
    private Date createdTime;
    private Date updatedTime;

    private String userToken;       // 用户token，传递给前端

    private Integer myFollowsCounts;
    private Integer myFansCounts;
//    private Integer myLikedVlogCounts;
    private Integer totalLikeMeCounts;

}