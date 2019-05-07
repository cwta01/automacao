package paginas.loja;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginaCadastroCliente {

    @FindBy(id = "input-firstname")
    private WebElement campoPrimeiroNome;

    @FindBy(id = "input-lastname")
    private WebElement campoSobrenome;

    @FindBy(id = "input-email")
    private WebElement campoEmail;

    @FindBy(id = "input-telephone")
    private WebElement campoTelefone;

    @FindBy(id = "input-password")
    private WebElement campoSenha;

    @FindBy(id = "input-confirm")
    private WebElement campoConfirmarSenha;

    @FindBy(name = "agree")
    private WebElement checkboxTermos;

    @FindBy(xpath = "/html/body/div[2]/div/div/form/div/div/input[2]")
    private WebElement botaoContinuar;

    public WebElement getCampoPrimeiroNome() {
        return campoPrimeiroNome;
    }

    public WebElement getCampoSobrenome() {
        return campoSobrenome;
    }

    public WebElement getCampoEmail() {
        return campoEmail;
    }

    public WebElement getCampoTelefone() {
        return campoTelefone;
    }

    public WebElement getCampoSenha() {
        return campoSenha;
    }

    public WebElement getCampoConfirmarSenha() {
        return campoConfirmarSenha;
    }

    public WebElement getCheckboxTermos() {
        return checkboxTermos;
    }

    public WebElement getBotaoContinuar() {
        return botaoContinuar;
    }
}
