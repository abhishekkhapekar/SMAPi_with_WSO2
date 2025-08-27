package com.ak.smapi.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ak.smapi.dao.MostActiveEquityRepository;
import com.ak.smapi.model.MostActiveEquity;

@Service
public class MostActiveService {

    private final MostActiveEquityRepository repository;

    public MostActiveService(MostActiveEquityRepository repository) {
        this.repository = repository;
    }

    public List<MostActiveEquity> getAllMostActiveEquities() {
        return repository.findAll();
    }

}
