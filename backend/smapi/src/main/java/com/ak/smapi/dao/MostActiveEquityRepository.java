package com.ak.smapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ak.smapi.model.MostActiveEquity;

@Repository
public interface MostActiveEquityRepository extends JpaRepository<MostActiveEquity, Long> {

}
