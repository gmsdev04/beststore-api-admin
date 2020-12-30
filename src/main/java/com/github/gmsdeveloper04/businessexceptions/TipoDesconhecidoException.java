package com.github.gmsdeveloper04.businessexceptions;

public class TipoDesconhecidoException extends Exception{

	private static final long serialVersionUID = 7191600611374812659L;
	
	public TipoDesconhecidoException(String tipo) {
		super("Tipo de dado desconhecido, tipo = "+tipo);
	}
}
