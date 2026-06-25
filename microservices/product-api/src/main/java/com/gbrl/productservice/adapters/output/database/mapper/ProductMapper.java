package com.gbrl.productservice.adapters.output.database.mapper;

import com.gbrl.productservice.adapters.output.database.entity.ProductEntity;
import com.gbrl.productservice.application.domain.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper {
    @Mapping(target = "id", ignore = true)
    ProductEntity toEntity(Product model);
    Product toModel(ProductEntity entity);
}
