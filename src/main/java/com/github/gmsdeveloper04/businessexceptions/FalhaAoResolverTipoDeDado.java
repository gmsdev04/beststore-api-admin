package com.github.gmsdeveloper04.businessexceptions;

public class FalhaAoResolverTipoDeDado extends Exception {

	private static final long serialVersionUID = -2720648049513659005L;
	
	public FalhaAoResolverTipoDeDado(String json, Throwable t) {
		super("Falha ao resolver tipo de dado. json="+json,t);
	}
}
