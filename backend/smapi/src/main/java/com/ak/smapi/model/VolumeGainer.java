package com.ak.smapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "volume_gainers")
public class VolumeGainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "symbol", nullable = false)
    private String symbol;

    @Column(name = "security", nullable = false)
    private String security;

    @Column(name = "today_volume")
    private Long todayVolume;

    @Column(name = "week1_avg_volume")
    private Long week1AvgVolume;

    @Column(name = "week1_change")
    private Double week1Change;

    @Column(name = "week2_avg_volume")
    private Long week2AvgVolume;

    @Column(name = "week2_change")
    private Double week2Change;

    @Column(name = "today_ltp")
    private Double todayLtp;

    @Column(name = "today_percent_change")
    private Double todayPercentChange;

    @Column(name = "today_turnover")
    private Long todayTurnover;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getSecurity() {
        return security;
    }

    public void setSecurity(String security) {
        this.security = security;
    }

    public Long getTodayVolume() {
        return todayVolume;
    }

    public void setTodayVolume(Long todayVolume) {
        this.todayVolume = todayVolume;
    }

    public Long getWeek1AvgVolume() {
        return week1AvgVolume;
    }

    public void setWeek1AvgVolume(Long week1AvgVolume) {
        this.week1AvgVolume = week1AvgVolume;
    }

    public Double getWeek1Change() {
        return week1Change;
    }

    public void setWeek1Change(Double week1Change) {
        this.week1Change = week1Change;
    }

    public Long getWeek2AvgVolume() {
        return week2AvgVolume;
    }

    public void setWeek2AvgVolume(Long week2AvgVolume) {
        this.week2AvgVolume = week2AvgVolume;
    }

    public Double getWeek2Change() {
        return week2Change;
    }

    public void setWeek2Change(Double week2Change) {
        this.week2Change = week2Change;
    }

    public Double getTodayLtp() {
        return todayLtp;
    }

    public void setTodayLtp(Double todayLtp) {
        this.todayLtp = todayLtp;
    }

    public Double getTodayPercentChange() {
        return todayPercentChange;
    }

    public void setTodayPercentChange(Double todayPercentChange) {
        this.todayPercentChange = todayPercentChange;
    }

    public Long getTodayTurnover() {
        return todayTurnover;
    }

    public void setTodayTurnover(Long todayTurnover) {
        this.todayTurnover = todayTurnover;
    }
}