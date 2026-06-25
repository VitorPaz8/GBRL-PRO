package com.gbrl.cartservice.adapters.input.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonAutoDetect
public class CardRequest {
    private final String type;
    private final String theme;
    private final String prompt;
    private final String tone;
    private final boolean includeHashtags;
    private final String therapeuticApproach;
    private final String targetAudience;

    @JsonCreator
    public CardRequest(
            @JsonProperty("type") String type,
            @JsonProperty("theme") String theme,
            @JsonProperty("prompt") String prompt,
            @JsonProperty("tone") String tone,
            @JsonProperty("includeHashtags") Boolean includeHashtags,
            @JsonProperty("therapeuticApproach") String therapeuticApproach,
            @JsonProperty("targetAudience") String targetAudience
    ) {
        this.type = type;
        this.theme = theme;
        this.prompt = prompt;
        this.tone = tone;
        this.includeHashtags = includeHashtags != null && includeHashtags;
        this.therapeuticApproach = therapeuticApproach;
        this.targetAudience = targetAudience;
    }
}
