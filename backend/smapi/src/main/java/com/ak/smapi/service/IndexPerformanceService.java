package com.ak.smapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ak.smapi.dao.IndexPerformanceRepository;
import com.ak.smapi.model.IndexPerformance;

@Service
public class IndexPerformanceService {

    private final IndexPerformanceRepository repository;

    public IndexPerformanceService(IndexPerformanceRepository repository) {
        this.repository = repository;
    }

    public List<IndexPerformance> getAllIndexPerformances() {
        return repository.findAll();
    }
}