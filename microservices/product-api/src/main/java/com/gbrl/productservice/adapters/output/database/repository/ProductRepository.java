package com.gbrl.productservice.adapters.output.database.repository;

import com.gbrl.productservice.adapters.output.database.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import java.time.YearMonth;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByUserIdAndMonth(String userId, YearMonth month);

    @Modifying
    @Transactional
    @Query("update UsageEntity u set u.usedGenerations = u.usedGenerations + 1 where u.userId = :userId and u.month = :month")
    void incrementUsage(@Param("userId") String userId, @Param("month") YearMonth month);
}