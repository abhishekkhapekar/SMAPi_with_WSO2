package com.ak.smapi.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "week_52_low")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Week52Low {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String symbol;
    private String series;
    private Double ltp; // Last Traded Price
    @Column(name = "percent_change")
    private Double percentChange;
    @Column(name = "new_52w_low_price")
    private Double new52wLowPrice;
    @Column(name = "prev_low")
    private Double prevLow;
    @Column(name = "prev_low_date")
    private String prevLowDate; // Keep as String if CSV date format varies
}