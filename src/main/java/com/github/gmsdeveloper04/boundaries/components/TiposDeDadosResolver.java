package com.github.gmsdeveloper04.boundaries.components;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.gmsdeveloper04.businessexceptions.FalhaAoResolverTipoDeDado;
import com.github.gmsdeveloper04.businessexceptions.JsonIncompativelComTipoException;
import com.github.gmsdeveloper04.businessexceptions.NomeTipoNaoEncontradoException;
import com.github.gmsdeveloper04.businessexceptions.TipoDesconhecidoException;
import com.github.gmsdeveloper04.domain.numero.Numero;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Component
@SuppressWarnings("rawtypes")
public class TiposDeDadosResolver {

	//ATRIBUTOS
	private final ObjectMapper mapper;
	
	private final Map<String,Class> tiposDeDados;
	
	public TiposDeDadosResolver(ObjectMapper mapper) {
		super();
		this.mapper = mapper;
		this.tiposDeDados = new HashMap<>();
		this.tiposDeDados.put("NUMERO", Numero.class);
		
	}
	
	//METODOS
	public Object resolverTipo(String json) throws TipoDesconhecidoException, FalhaAoResolverTipoDeDado {

		try {
			JsonNode node = mapper.readTree(json);

			if(node.get("nome") == null)
				throw new NomeTipoNaoEncontradoException(json);

			String tipo = node.get("nome").asText();
			switch (tipo) {
			case "NUMERO": return this.tryReadValues(json,Numero.class);

			default: throw new TipoDesconhecidoException(tipo);
			}

		} catch (JsonProcessingException e) {
			log.error("Falha ao resolverTipo, e={}",e.getMessage());
			throw new FalhaAoResolverTipoDeDado(json,e);
		}
	}
	
	public Class getClassByName(String name) {
		return  this.tiposDeDados.get(name);
	}
	
	public <T>T converterObjetoPara(Object objeto, Class<T> clazzDestino){
		return this.mapper.convertValue(objeto, clazzDestino);
	}
	
	private <T> T tryReadValues(String json, Class<T> clazz) {

		try {
			T convertedValue = mapper.readValue(json, clazz);
			return convertedValue;
		}catch(JsonProcessingException e) {
			throw new JsonIncompativelComTipoException();
		}
	}

}