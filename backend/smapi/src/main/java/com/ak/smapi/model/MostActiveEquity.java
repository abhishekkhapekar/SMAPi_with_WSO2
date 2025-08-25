package com.ak.smapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "most_active_equities")
@Getter
@Setter
public class MostActiveEquity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "symbol", nullable = false)
    private String symbol;

    @Column(name = "open_price")
    private String openPrice;

    @Column(name = "high_price")
    private String highPrice;

    @Column(name = "low_price")
    private String lowPrice;

    @Column(name = "prev_close")
    private String prevClose;

    @Column(name = "ltp")
    private String ltp;

    @Column(name = "percent_change")
    private Double percentChange;

    @Column(name = "volume")
    private String volume;

    @Column(name = "value")
    private String value;

    @Column(name = "ca_date")
    private String caDate;
}