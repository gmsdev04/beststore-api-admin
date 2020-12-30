package com.github.gmsdeveloper04.boundaries.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.gmsdeveloper04.usecases.tiposDeDados.ListarTodosOsTiposDeDadosUseCase;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v1/tipos-de-dados")
@RequiredArgsConstructor
public class TiposDeDadosController {

	private final ListarTodosOsTiposDeDadosUseCase listarTiposDeDados;

	@GetMapping()
	public ResponseEntity<?> listarTodosOsTiposDeDados() throws RuntimeException{

		try {
			List<?> tiposDeDados = listarTiposDeDados.listar();
			
			return ResponseEntity.ok(tiposDeDados);
		} catch (Exception e) {
			System.out.println("");
		}
		return null;

	}

}
