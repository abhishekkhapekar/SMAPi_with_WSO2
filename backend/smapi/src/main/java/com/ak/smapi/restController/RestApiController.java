package com.ak.smapi.restController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ak.smapi.model.IndexPerformance;
import com.ak.smapi.service.IndexPerformanceService;

@RestController
@RequestMapping("/api")
public class RestApiController {

    private final IndexPerformanceService service;

    RestApiController(IndexPerformanceService service) {
        this.service = service;
    }

    @GetMapping(value = "/index-performance")
    public List<IndexPerformance> getAllIndexPerformances() {
        return service.getAllIndexPerformances();
    }

}
