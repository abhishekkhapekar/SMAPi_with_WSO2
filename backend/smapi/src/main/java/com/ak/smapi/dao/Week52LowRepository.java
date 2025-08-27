package com.ak.smapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ak.smapi.model.Week52Low;

@Repository
public interface Week52LowRepository extends JpaRepository<Week52Low, Long> {

}
