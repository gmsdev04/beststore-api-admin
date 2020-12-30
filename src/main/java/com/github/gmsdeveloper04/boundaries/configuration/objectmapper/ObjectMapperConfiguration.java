package com.github.gmsdeveloper04.boundaries.configuration.objectmapper;

import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

@Configuration
public class ObjectMapperConfiguration {

	@Bean
	public ObjectMapper createMapper() {
		ObjectMapper mapper = new ObjectMapper();
		
		SimpleModule module = new SimpleModule("ObjectIdmodule");
        module.addSerializer(ObjectId.class, new ObjectIdSerializer());
        mapper.registerModule(module);
        mapper.setSerializationInclusion(Include.NON_NULL);
        
        return mapper;
	}
	
}
