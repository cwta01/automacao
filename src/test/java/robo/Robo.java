package robo;

import navegador.SeleniumDriver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class Robo {

    protected static WebDriver driver;

    /**
     * Inicia o robô
     */
    public Robo() {
        iniciarWebdriver();
    }

    /**
     * Inicia o Selenium Webdriver
     */
    public void iniciarWebdriver() {
        try {
            driver = SeleniumDriver.getDriver();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Busca uma propriedade salva na pasta propriedades do projeto de automação
     * @param arquivo
     * @param propriedade
     * @return
     */
    public String getPropriedade(String arquivo, String propriedade) {
        Properties properties = new Properties();
        String value = null;

        try {
            properties.load(new FileInputStream("propriedades/" + arquivo));
            value = properties.getProperty(propriedade);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return value;
    }

    /**
     * Acessa a url atual + a url de complemento. Exemplo: /cadastro acessará minhaUrlAtual.com/cadastro
     * @param urlComplemento
     */
    public void acessarPagina(String urlComplemento) {
        String urlPrincipal = getPropriedade("sistema", "url");
        driver.get(urlPrincipal + urlComplemento);
        aguardar();
    }

    /**
     * Faz uma espera implícita de até 30 segundos. O robô reconhece quando a
     * tela carregou. Se a tela não carregar em até 30 segundos, o robô falha o
     * passo.
     */
    public void aguardar() {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    /**
     * Aguarda um determinado número de segundos.
     * @param segundos
     */
    public void aguardarSegundosComThreadSleep(int segundos) {
        long milisegundos = segundos * 1000;
        try {
            Thread.sleep(milisegundos);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * Digita em um elemento de tela (página)
     * @param elemento
     * @param informacao
     */
    public void digitar(WebElement elemento, String informacao) {
        elemento.sendKeys(informacao);
    }

    /**
     * Clica em um elemento de tela (página)
     * @param elemento
     */
    public void clicar(WebElement elemento) {
        elemento.click();
    }

    private void carregarComponente(WebElement elemento) {
        PageFactory.initElements(getDriver(), elemento);
    }

    /**
     * Utilizado internamente na classe Robo para retornar o Selenium Webdriver
     * @return
     */
    private WebDriver getDriver() {
        return driver;
    }

    /**
     * Verifica se um elemento de tela contém a informação esperada.
     * @param esperado
     * @param elementoRecebido
     */
    public void verificaConteudo(WebElement elementoRecebido, String esperado){
        carregarComponente(elementoRecebido);
        Assert.assertEquals(esperado, elementoRecebido.getText());
    }

    public void fecharDriversAbertos() {
        try {
            Runtime.getRuntime().exec("taskkill -f -im chromedriver.exe").waitFor();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
