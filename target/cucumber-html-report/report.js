$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/casos_de_testes/loja/CadastrarCliente.feature");
formatter.feature({
  "name": "Cadastrar cliente",
  "description": "  Cadastra um cliente no sistema",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@Clientes"
    },
    {
      "name": "@CadastrarCliente"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Cliente válido",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "o usuario acessou a pagina de cadastro",
  "keyword": "Given "
});
formatter.step({
  "name": "incluir o cliente de primeiro nome \"\u003cprimeiro_nome\u003e\" sobrenome \"\u003cultimo_nome\u003e\" email \"\u003cemail\u003e\" telefone \"\u003ctelefone\u003e\" senha \"\u003csenha\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "o sistema deve salvar o cliente corretamente",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "primeiro_nome",
        "ultimo_nome",
        "email",
        "telefone",
        "senha"
      ]
    },
    {
      "cells": [
        "Teste",
        "Jônatas Kirsch",
        "teste.jonatas2@mailcatch.com",
        "1185859696",
        "159753"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cliente válido",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@Clientes"
    },
    {
      "name": "@CadastrarCliente"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuario acessou a pagina de cadastro",
  "keyword": "Given "
});
formatter.match({
  "location": "Clientes.oUsuarioAcessouAPaginaDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "incluir o cliente de primeiro nome \"Teste\" sobrenome \"Jônatas Kirsch\" email \"teste.jonatas2@mailcatch.com\" telefone \"1185859696\" senha \"159753\"",
  "keyword": "When "
});
formatter.match({
  "location": "Clientes.incluirOClienteDePrimeiroNomeSobrenomeEmailTelefoneSenha(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve salvar o cliente corretamente",
  "keyword": "Then "
});
formatter.match({
  "location": "Clientes.oSistemaDeveSalvarOClienteCorretamente()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/casos_de_testes/loja/Login.feature");
formatter.feature({
  "name": "Logar cliente",
  "description": "  Loga um cliente no sistema",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@LoginLoja"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login valido",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "o usuario acessou a pagina de login",
  "keyword": "Given "
});
formatter.step({
  "name": "digitar o email \"\u003cemail\u003e\" e a senha \"\u003csenha\u003e\" no login",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ]
    },
    {
      "cells": [
        "teste.cadastro@mailcatch.com",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login valido",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Automacao"
    },
    {
      "name": "@Loja"
    },
    {
      "name": "@LoginLoja"
    },
    {
      "name": "@JonatasKirsch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuario acessou a pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.oUsuarioAcessouAPaginaDeLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar o email \"teste.cadastro@mailcatch.com\" e a senha \"123456\" no login",
  "keyword": "When "
});
formatter.match({
  "location": "Login.digitarOEmailEASenha(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"submit-form\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V1V643A\u0027, ip: \u0027192.168.15.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\jonat\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64745}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 2e2c238ed89381e6ea3c3d270124a4bf\n*** Element info: {Using\u003did, value\u003dsubmit-form}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat robo.Robo.clicar(Robo.java:105)\r\n\tat passos.loja.Login.digitarOEmailEASenha(Login.java:46)\r\n\tat ✽.digitar o email \"teste.cadastro@mailcatch.com\" e a senha \"123456\" no login(file:src/test/java/casos_de_testes/loja/Login.feature:7)\r\n",
  "status": "failed"
});
});