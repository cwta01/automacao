package paginas.loja;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginaConfirmacaoCadastroCliente {

    @FindBy(xpath = "/html/body/div[2]/div/div/h1")
    private WebElement textoConfirmacaoCadastro;

    public WebElement getTextoConfirmacaoCadastro() {
        return textoConfirmacaoCadastro;
    }
}
