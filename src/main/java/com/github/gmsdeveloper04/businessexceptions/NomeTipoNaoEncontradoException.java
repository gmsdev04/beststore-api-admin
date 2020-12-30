package com.github.gmsdeveloper04.businessexceptions;

public class NomeTipoNaoEncontradoException extends RuntimeException {

	private static final long serialVersionUID = -7925222228414469839L;
	
	public NomeTipoNaoEncontradoException(String json) {
		super("Não foi encontrado o nome do tipo de dado, json="+json);
	}
}
