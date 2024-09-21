package com.dy.mapper;

import com.dy.my.mapper.MyMapper;
import com.dy.pojo.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersMapper extends MyMapper<Users> {
}