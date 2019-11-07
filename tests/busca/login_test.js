module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
       

        browser.resizeWindow(1920, 1080)

        login.navigate()
            .waitForElementVisible('@menu', 3000)
            .click('@acessarMenu')
            .waitForElementVisible('@menuContratos', 3000)
            .click('@menuContratos')
            .waitForElementVisible('@adicionarContrato', 3000)
            .click('@adicionarContrato')
            .waitForElementVisible('@tipoContrato', 3000)
            .click('@tipoContrato')
            .useXpath()
            .waitForElementVisible('//li[contains(.,"Distribuição")]', 3000)
            .click('//li[contains(.,"Distribuição")]')
            .setValue('@pontoConexao', '123')

     
            
    }
}