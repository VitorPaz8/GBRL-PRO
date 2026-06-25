package com.gbrl.cartservice.adapters.output.database.mapper;

import com.gbrl.cartservice.adapters.output.database.entity.CartEntity;
import com.gbrl.cartservice.application.domain.model.Cart;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CartMapper {
    @Mapping(target = "id", ignore = true)
    CartEntity toEntity(Cart model);
    Cart toModel(CartEntity entity);
}
