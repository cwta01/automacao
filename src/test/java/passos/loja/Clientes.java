package passos.loja;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import paginas.loja.PaginaCadastroCliente;
import paginas.loja.PaginaConfirmacaoCadastroCliente;
import robo.Robo;

public class Clientes extends Robo {

    private PaginaCadastroCliente paginaCadastro;
    private PaginaConfirmacaoCadastroCliente paginaConfirmacaoCadastroCliente;
    protected Scenario cenario;

    public void carregarPaginaCadastroCliente() {
        this.paginaCadastro = new PaginaCadastroCliente();
        PageFactory.initElements(driver, this.paginaCadastro);
    }

    public void carregarPaginaConfirmacaoCadastroCliente() {
        this.paginaConfirmacaoCadastroCliente = new PaginaConfirmacaoCadastroCliente();
        PageFactory.initElements(driver, this.paginaConfirmacaoCadastroCliente);
    }

    @Before(value = "@Clientes")
    public void before(Scenario scenario){
        this.cenario = scenario;
    }

    @Given("o usuario acessou a pagina de cadastro")
    public void oUsuarioAcessouAPaginaDeCadastro() {
        acessarPagina("/index.php?route=account/register");
    }

    @When("incluir o cliente de primeiro nome {string} sobrenome {string} email {string} telefone {string} senha {string}")
    public void incluirOClienteDePrimeiroNomeSobrenomeEmailTelefoneSenha(String primeiroNome, String sobrenome, String email, String telefone, String senha) {
        carregarPaginaCadastroCliente();
        digitar(paginaCadastro.getCampoPrimeiroNome(), primeiroNome);
        digitar(paginaCadastro.getCampoSobrenome(), sobrenome);
        digitar(paginaCadastro.getCampoEmail(), email);
        digitar(paginaCadastro.getCampoTelefone(), telefone);
        digitar(paginaCadastro.getCampoSenha(), senha);
        digitar(paginaCadastro.getCampoConfirmarSenha(), senha);
        clicar(paginaCadastro.getCheckboxTermos());
        clicar(paginaCadastro.getBotaoContinuar());
    }

    @Then("o sistema deve salvar o cliente corretamente")
    public void oSistemaDeveSalvarOClienteCorretamente() {
        carregarPaginaConfirmacaoCadastroCliente();
        verificaConteudo(paginaConfirmacaoCadastroCliente.getTextoConfirmacaoCadastro(),"Your Account Has Been Created!");
    }
}
