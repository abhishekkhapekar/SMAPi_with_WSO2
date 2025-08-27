package com.ak.smapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ak.smapi.model.VolumeGainer;

@Repository
public interface VolumeGainerRepository extends JpaRepository<VolumeGainer, Long> {

}
