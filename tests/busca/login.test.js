

module.exports = {
    'ACESSO AO SISTEMA SMARTYENERGY CADASTRO OKk': function (browser) {
        var userInfo = '.user .info span'
        browser
        .url('http://187.72.82.243:3000')
        .waitForElementVisible('.MuiIconButton-edgeStart', 3000)
        .click('.MuiIconButton-colorSecondary')
        .useXpath()
        .waitForElementVisible('//span[contains(.,"Contratos")]', 3000)
        .click('//span[contains(.,"Contratos")]')
        .useXpath()
        .waitForElementVisible('.//div/div/div/a/button/span', 3000)
        .click('.//div/div/div/a/button/span')
        .useXpath()
        .waitForElementVisible('//div[@id="select-use_contract_type.id_use_contract_type"]', 3000)
        .click('//div[@id="select-use_contract_type.id_use_contract_type"]')
        .useXpath()
        .waitForElementVisible('//li[contains(.,"Distribuição")]', 3000)
        .click('//li[contains(.,"Distribuição")]')
        .keys(browser.Keys.TAB)
        .useXpath()
        .waitForElementVisible('//div[@id="select-company.id_company"]', 5000)
        .keys(browser.Keys.ENTER)
        .useXpath()
        .waitForElementVisible('//li[contains(.,"Itabira")]', 2000)
        .click('//li[contains(.,"Itabira")]')
        .keys(browser.Keys.TAB)
        .useXpath()
        .waitForElementVisible('//div[@id="select-energy_dealer.id_company"]', 2000)
        .click('//div[@id="select-energy_dealer.id_company"]')
        
    
     
       
       
        .end();
    }
}