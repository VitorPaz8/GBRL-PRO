package com.userservice.userservice.adapters.output.database.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.YearMonth;

@Data
@Builder
@Entity
@Table(name = "usages")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id", nullable = false)
    private String userId;
    @Column(name = "usage_month", nullable = false)
    private YearMonth month;
    @Column(name = "used_generations")
    private int usedGenerations;
}