

module.exports = {
    'ACESSO AO SISTEMA SMARTYENERGY CADASTRO OK': function (browser) {
        var userInfo = '.user .info span'
        browser
        .resizeWindow(1920, 1080)
        .url('http://187.72.82.243:3000')
        .waitForElementVisible('.MuiIconButton-edgeStart', 3000)
        .click('.MuiIconButton-colorSecondary')
       
        
         
           
           
            .end();
    }
}