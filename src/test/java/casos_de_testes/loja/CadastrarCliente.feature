@Automacao @Loja @Clientes @CadastrarCliente @JonatasKirsch
Feature: Cadastrar cliente
  Cadastra um cliente no sistema

  Scenario Outline: Cliente válido
    Given o usuario acessou a pagina de cadastro
    When incluir o cliente de primeiro nome "<primeiro_nome>" sobrenome "<ultimo_nome>" email "<email>" telefone "<telefone>" senha "<senha>"
    Then o sistema deve salvar o cliente corretamente

    Examples:
      | primeiro_nome | ultimo_nome    | email                       | telefone   | senha  |
      | Teste         | Jônatas Kirsch | teste.jonatas2@mailcatch.com | 1185859696 | 159753 |