const TelegramApi = require('node-telegram-bot-api')
const fs = require('fs');
// const {gameOptions, againOptions} = require('./options')
// const sequelize = require('./db');
// const UserModel = require('./models');

const token = '5958688549:AAEdBQUROMEqFINzZEk_qL1KYl23JNvnadg'

const bot = new TelegramApi(token, {polling: true})

// const chats = {}


const startGame = async (chatId) => {
    await bot.sendMessage('Hello World');
    // const randomNumber = Math.floor(Math.random() * 10)
    // chats[chatId] = randomNumber;
    // await bot.sendMessage(chatId, 'Отгадывай', gameOptions);
}

const start = async () => {

    // try {
    //     await sequelize.authenticate()
    //     await sequelize.sync()
    // } catch (e) {
    //     console.log('Подключение к бд сломалось', e)
    // }

    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        // {command: '/info', description: 'Получить информацию о пользователе'},
        // {command: '/game', description: 'Игра угадай цифру'},
    ])


    bot.on('text', async msg => {

    try {

        if(msg.text == '/start') {

            await bot.sendMessage(msg.chat.id, `ваш айди ${msg.chat.id}`);

        }
        // else {

        //     await bot.sendMessage('353313805', msg.text);

        // }

    }
    catch(error) {

        console.log(error);

    }

})


// bot.on('photo', async img => {

//     try {

//         // const photoGroup = [];

//         // for(let index = 0; index < img.photo.length; index++) {

//             // const photoPath = await img.photo[0].file_id;

//             // photoGroup.push({

//                 // type: 'photo',
//                 // media: photoPath,
//                 // caption: `dasds`

//             // })

//         // }
//         // const a = await JSON.stringify({
//         //         type: 'photo',
//         //         media: photoPath,
//         //         caption: `${img.photo.caption}`
//         // })

//         // await bot.sendMediaGroup(img.chat.id, a);
//         await bot.sendMessage(img.chat.id, 'Photo');

//         // for(let index = 0; index < photoGroup.length; index++) {

//         //     fs.unlink(photoGroup[index].media, error => {

//         //         if(error) {

//         //             console.log(error);

//         //         }

//         //     })

//         // }

//     }
//     catch(error) {

//         console.log(error);

//     }

// })

// bot.on("video", async video => {

//     try {

//         // const thumbPath = await bot.downloadFile(video.video.thumbnail.file_id, './image');

//         await bot.sendMediaGroup(video.chat.id, [
            
//             JSON.stringify( {

//                 type: 'video',
//                 media: video.video.file_id,
//                 caption: `${video.video.caption}`

//             })]);
//             await bot.sendMessage(img.chat.id, JSON.stringify( {

//                 type: 'video',
//                 media: video.video.file_id,
//                 caption: `${video.video.caption}`

//             }));
//         // fs.unlink(thumbPath, error => {

//         //     if(error) {

//         //         console.log(error);

//         //     }

//         // })

//     }
//     catch(error) {

//         console.log(error);

//     }

// })

//     bot.on('message', async msg => {
//         const text = msg.text;
//         const photo = msg.photo;
//         const caption = msg.caption;
//         const video = msg.video;
//         const chatId = msg.chat.id;
//         try {
//              if (text === '/start') {
//                 // const user = await UserModel.findOne({chatId})
//                 bot.sendMessage(chatId,
// `Добрый день! Поздравьте выпускников со всей Республики!🎉
// Отправьте в одном сообщении 
// 1)Имя фамилию
// 2)Ваш город
// 3)Ваше поздравление`) 
                
                
//             }else{
//                 // await bot.sendMessage(chatId, `Спасибо! Самые яркие и креативные поздравления смотрите 23 июня в вечернем эфире телеканала "Беларусь 2". Не пропусти, будет очень интересно!😉`);
//                 // await bot.sendMessage('353313805', `${text}`)
//                 // await bot.sendPhoto('353313805', `${photo[0].file_id}`)
//                 bot.sendMessage('353313805', `${caption}`)

//                 if(text!==undefined){
//                     await bot.sendMessage('353313805', `${text}`)
//                 }
//                  if(photo!==undefined){
//                     await bot.sendMessage('353313805', `${text}`)
//                 }
              
//             }
//                 // await UserModel.create({chatId})
//                 // await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
              
           
//         } catch (e) {
//             return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
//         }


//         // try {
//         //     if (text === '/start') {
//         //         // await UserModel.create({chatId})
//         //         // await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
//         //         return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот автора ютуб канала ULBI TV`);
//         //     }
//         //     if (text === '/info') {
//         //         // const user = await UserModel.findOne({chatId})
//         //         return bot.sendMessage(chatId, `Тебя зовут ${msg.from.id} ${msg.from.last_name}`) 
                
                
//         //     }
            
//         //     return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
//         // } catch (e) {
//         //     return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
//         // }

//     })

//     // bot.on('callback_query', async msg => {
//     //     const data = msg.data;
//     //     const chatId = msg.message.chat.id;
//     //     if (data === '/again') {
//     //         return startGame(chatId)
//     //     }
//     //     const user = await UserModel.findOne({chatId})
//     //     if (data == chats[chatId]) {
//     //         user.right += 1;
//     //         await bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${chats[chatId]}`, againOptions);
//     //     } else {
//     //         user.wrong += 1;
//     //         await bot.sendMessage(chatId, `К сожалению ты не угадал, бот загадал цифру ${chats[chatId]}`, againOptions);
//     //     }
//     //     await user.save();
//     // })
}

start()
