package com.ak.smapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ak.smapi.dao.Week52LowRepository;
import com.ak.smapi.model.Week52Low;

@Service
public class Week52LowService {

    private final Week52LowRepository repository;

    public Week52LowService(Week52LowRepository repository) {
        this.repository = repository;
    }

    public List<Week52Low> getAllWeek52Low() {
        return repository.findAll();
    }

}
