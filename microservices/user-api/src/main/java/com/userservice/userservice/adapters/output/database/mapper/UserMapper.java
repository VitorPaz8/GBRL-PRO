package com.userservice.userservice.adapters.output.database.mapper;

import com.userservice.userservice.adapters.output.database.entity.UserEntity;
import com.userservice.userservice.application.domain.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    @Mapping(target = "id", ignore = true)
    UserEntity toEntity(User model);
    User toModel(UserEntity entity);
}
