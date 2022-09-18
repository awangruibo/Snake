package com.kob.backend.service.impl.user.account;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import com.kob.backend.service.user.account.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Map<String, String> register(String username, String password, String confirmedPassword) {


        Map<String,String> map = new HashMap<>();


        if(username==null){
            map.put("error_message","用户名不能为空");
            return map;
        }
        if(password ==null||confirmedPassword==null)
        {
            map.put("error_message","密码不能为空");
            return map;
        }
        username = username.trim();//将名字中的首尾空格回车之类的删去
        if(username.length()==0){
            map.put("error_message","用户名不能为空");
            return map;
        }
        if(password.length() ==0||confirmedPassword.length()==0)
        {
            map.put("error_message","密码不能为空");
            return map;
        }
        if(username.length()>=100){
            map.put("error_message","用户名长度不能大于100");
            return map;
        }
        if(password.length()>100||confirmedPassword.length()>100){
            map.put("error_message","密码长度不能大于100");
            return map;
        }
        if(!password.equals(confirmedPassword)){
            map.put("error_message","再次输入的密码不一致");
            return map;
        }

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username",username);
        List<User> users = userMapper.selectList(queryWrapper);
        if (!users.isEmpty()){
            map.put("error_message","用户名已存在");
            return map;
        }

        String encodePassword = passwordEncoder.encode(password);
        String photo = "https://img2.woyaogexing.com/2019/12/02/ff7ac89c171d42f6ac5469448c1959a8!400x400.jpeg";
        User user = new User(null,username,encodePassword,photo);
        userMapper.insert(user);

        map.put("error_message","success");
        return map;
    }
}