package com.ak.smapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ak.smapi.dao.Week52HighRepository;
import com.ak.smapi.model.Week52High;

@Service
public class Week52HighService {

    private final Week52HighRepository repository;

    public Week52HighService(Week52HighRepository repository) {
        this.repository = repository;
    }

    public List<Week52High> getAllWeek52Highs() {
        return repository.findAll();
    }

}
