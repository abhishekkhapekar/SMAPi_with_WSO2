package com.ak.smapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ak.smapi.dao.VolumeGainerRepository;
import com.ak.smapi.model.VolumeGainer;

@Service
public class VolumeGainerService {

    private final VolumeGainerRepository repository;

    public VolumeGainerService(VolumeGainerRepository repository) {
        this.repository = repository;
    }

    public List<VolumeGainer> getAllVolumeGainers() {
        return repository.findAll();
    }

}
