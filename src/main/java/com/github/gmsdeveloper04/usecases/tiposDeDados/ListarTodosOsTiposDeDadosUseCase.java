package com.github.gmsdeveloper04.usecases.tiposDeDados;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.gmsdeveloper04.respositories.TiposDeDadosRespository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ListarTodosOsTiposDeDadosUseCase {
	
	private final TiposDeDadosRespository repository;
	
	public List<?> listar(){
		return repository.listarTodosOsTiposDeDados();
	}
}
