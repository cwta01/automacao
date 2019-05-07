package paginas.loja;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginaLogin {

    @FindBy(id = "input-email")
    private WebElement campoUsuario;

    @FindBy(id = "input-password")
    private WebElement campoSenha;

    @FindBy(id = "submit-form")
    private WebElement botaoFazerLogin;

    public WebElement getCampoUsuario() {
        return campoUsuario;
    }

    public WebElement getCampoSenha() {
        return campoSenha;
    }

    public WebElement getBotaoFazerLogin() {
        return botaoFazerLogin;
    }
}
