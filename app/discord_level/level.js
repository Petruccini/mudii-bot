const Member = require('../mongoose_models/member.js');
const Discord = require('discord.js');

// Función para agregar mensajes a la base de datos
const addMessage = (msg) => {

  // Buscar al mensaje con el id
  Member.find({ id: msg.member.id}, function (err, member) {
    if (err) return console.error(err);
    if (member.length == 0) {

      // Definir el valor del mensaje
      var msgValue = 0
      if (msg.content.length >= 3 && msg.content.length < 20){
        msgValue = 1;
      } else if (msg.content.length >= 20) {
        msgValue = Math.floor(msg.content.length / 20);
      }

      // Si no existe un miembro con ese id en la base de datos lo crea
      let member = new Member({ id: msg.member.id, nickname: msg.member.displayName, messages: 1, messagesValue: msgValue });
      member.save(function (err, member) {
        if (err) return console.error(err);
      });
    } else {

      // Definir el valor del mensaje
      var msgValue = 0
      if (msg.content.length >= 3 && msg.content.length < 20){
        msgValue = 1;
      } else if (msg.content.length >= 20) {
        msgValue = Math.floor(msg.content.length / 20);
      }

      // Agregar el valor del mensaje a el contgador del usuario
      member[0].messages++;
      member[0].messagesValue += msgValue;
      member[0].save(function (err, member) {
        if (err) return console.error(err);
      });
    }
  });
};

module.exports.addMessage = addMessage;