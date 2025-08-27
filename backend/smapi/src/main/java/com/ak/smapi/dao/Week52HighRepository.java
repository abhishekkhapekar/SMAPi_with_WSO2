package com.ak.smapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ak.smapi.model.Week52High;

@Repository
public interface Week52HighRepository extends JpaRepository<Week52High, Long> {

}
