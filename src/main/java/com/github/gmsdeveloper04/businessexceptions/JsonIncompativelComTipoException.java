package com.github.gmsdeveloper04.businessexceptions;

public class JsonIncompativelComTipoException extends RuntimeException {


	private static final long serialVersionUID = 1507039817539099397L;

	public JsonIncompativelComTipoException() {
		super("Json incompativel com o tipo");
	}

}
