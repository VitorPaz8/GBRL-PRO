package com.gbrl.productservice.adapters.output.database.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.YearMonth;

@Data
@Builder
@Entity
@Table(name = "usages")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id", nullable = false)
    private String userId;
    @Column(name = "usage_month", nullable = false)
    @Convert(converter = YearMonthConverter.class)
    private YearMonth month;
    @Column(name = "used_generations")
    private int usedGenerations;
}