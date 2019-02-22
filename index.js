var TelegramBot = require('node-telegram-bot-api');

var token = '724843344:AAHTIVPLdpp9VGRaZ0nTcWXoRDHjaymoC0I';

var bot = new TelegramBot(token, {polling: true});


bot.onText(/Show/, function (msg) {
    setInterval(
        function(){
            var ToDayDate = new Date().getDay()
            if(ToDayDate === 5){
                bot.sendPhoto(msg.chat.id,"./static/friday.jpg" );
            }else if(ToDayDate === 3){
                bot.sendPhoto(msg.chat.id,"./static/Wednesday.jpg" );
            }
        }, 43200000
    )
});
