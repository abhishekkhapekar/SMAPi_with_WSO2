package com.ak.smapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // instead of @Controller
public class HomeController {

    @GetMapping("/home")
    @ResponseBody
    public String home() {
        return "Welcome to Home!"; // will return text response
    }
}