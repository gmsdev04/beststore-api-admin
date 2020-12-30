package com.github.gmsdeveloper04.domain.numero;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Numero {
	private String id;
	private String nome;
	private String alias;
	private ValorPadrao valorPadrao;
	private ValorMinimo valorMinimo;
	private ValorMaximo valorMaximo;
}
