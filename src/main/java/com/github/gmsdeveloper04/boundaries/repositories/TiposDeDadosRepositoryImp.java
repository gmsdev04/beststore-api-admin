package com.github.gmsdeveloper04.boundaries.repositories;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.gmsdeveloper04.boundaries.database.mongodb.TiposDeDadosMongoDao;
import com.github.gmsdeveloper04.boundaries.database.mongodb.documents.tipodedado.TipoDeDadoDocument;
import com.github.gmsdeveloper04.boundaries.exceptions.DatabaseException;
import com.github.gmsdeveloper04.respositories.TiposDeDadosRespository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class TiposDeDadosRepositoryImp implements TiposDeDadosRespository{
	
	private final TiposDeDadosMongoDao tiposDeDadosDao;
	
	@Override
	public List<?> listarTodosOsTiposDeDados() {
		try {
			//throw new DatabaseException("Houve um erro ao listar todos os tipos de dados (MONGODB)");
			List<TipoDeDadoDocument> todosOsTipos = tiposDeDadosDao.findAll();
			
			return todosOsTipos;
		}catch(Exception e) {
			log.error("Houve um erro ao listar todos os tipos de dados (MONGODB) e={}",e.getMessage());
			throw new DatabaseException("Houve um erro ao listar todos os tipos de dados (MONGODB)");
		}
	}
	
}
