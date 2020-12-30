package com.github.gmsdeveloper04.boundaries.database.mongodb;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado.TipoDeDadoDocument;

public interface TiposDeDadosMongoDao  extends MongoRepository<TipoDeDadoDocument, UUID> {

}
