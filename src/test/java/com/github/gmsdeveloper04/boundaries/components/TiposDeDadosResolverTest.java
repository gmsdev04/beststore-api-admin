package com.github.gmsdeveloper04.boundaries.components;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.gmsdeveloper04.businessexceptions.FalhaAoResolverTipoDeDado;
import com.github.gmsdeveloper04.businessexceptions.NomeTipoNaoEncontradoException;
import com.github.gmsdeveloper04.businessexceptions.TipoDesconhecidoException;
import com.github.gmsdeveloper04.domain.numero.Numero;
import com.github.gmsdeveloper04.domain.numero.ValorMaximo;
import com.github.gmsdeveloper04.domain.numero.ValorMinimo;
import com.github.gmsdeveloper04.domain.numero.ValorPadrao;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TiposDeDadosResolverTest {

	@Autowired
	private  TiposDeDadosResolver resolver;
	@Autowired
	private ObjectMapper mapper;

	@Test(expected = NomeTipoNaoEncontradoException.class)
	public void resolverTipo_sem_nome() throws TipoDesconhecidoException, FalhaAoResolverTipoDeDado {
		String json = "{}";
		resolver.resolverTipo(json);
	}

	@Test(expected = FalhaAoResolverTipoDeDado.class)
	public void resolverTipo_json_invalido() throws TipoDesconhecidoException, FalhaAoResolverTipoDeDado {
		String json = "{";
		resolver.resolverTipo(json);
	}

	@Test(expected = TipoDesconhecidoException.class)
	public void resolverTipo_tipo_desconhecido() throws TipoDesconhecidoException, FalhaAoResolverTipoDeDado {
		String json = "{\"nome\":\"tipoDesconhecido\"}";
		resolver.resolverTipo(json);
	}

	@Test()
	public void resolverTipo_tipo_numero() throws TipoDesconhecidoException, JsonProcessingException, FalhaAoResolverTipoDeDado {
		Numero numero = new Numero();
		ValorPadrao padrao = new ValorPadrao();
		padrao.setDescricao("Descricao padrao");
		padrao.setValor(10.5);
		ValorMinimo minimo = new ValorMinimo();
		minimo.setDescricao("Descricao minimo");
		minimo.setValor(1.4);
		ValorMaximo maximo = new ValorMaximo();
		maximo.setDescricao("Descricao maximo");
		maximo.setValor(99D);
		numero.setId("8453042f-18a0-4172-acb0-08214ba1f814");
		numero.setNome("NUMERO");
		numero.setAlias("Número");
		numero.setValorPadrao(padrao);
		numero.setValorMinimo(minimo);
		numero.setValorMaximo(maximo);

		String json = mapper.writeValueAsString(numero);

		Numero tipoResolvido = (Numero) resolver.resolverTipo(json);

		assertEquals(numero,tipoResolvido);

	}

}
