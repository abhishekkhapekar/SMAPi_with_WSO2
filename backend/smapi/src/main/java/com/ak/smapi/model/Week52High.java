package com.ak.smapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "week52_high")
@Getter
@Setter
public class Week52High {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String symbol;

    private String series;

    @Column(name = "ltp")
    private Double ltp;

    @Column(name = "percent_change")
    private Double percentChange;

    @Column(name = "new_52wh_price")
    private Double new52whPrice;

    @Column(name = "prev_high")
    private Double prevHigh;

    @Column(name = "prev_high_date")
    private String prevHighDate;
}