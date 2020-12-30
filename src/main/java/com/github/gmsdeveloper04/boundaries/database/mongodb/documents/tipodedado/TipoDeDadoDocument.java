package com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado.numero.ValorMaximo;
import com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado.numero.ValorMinimo;
import com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado.numero.ValorPadrao;

import lombok.Data;

@Data
@Document(collection = "tiposDeDados")
public class TipoDeDadoDocument {
	//GERAL
	
	@Id
	private ObjectId id;
	private String nome;
	private String alias;
	
	//TIPO NUMERO
	private ValorPadrao valorPadrao;
	private ValorMinimo valorMinimo;
	private ValorMaximo valorMaximo;
}
