package com.example.yuetter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProfileEditController {


    @GetMapping("/profileEdit")
    public String getProfileEdit() {
        return "home/profileEdit";
    }
}

