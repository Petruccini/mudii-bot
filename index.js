require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

// Roles
const CODER = '768246303237865492';
const ARTIST = '768246617098420224';
const ENGLISH = '768246728419573801';

// Logear que el bot está listo
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// Mensaje de bienvenida
client.on('guildMemberAdd', member => {
  // Escoger el chat general:
  const channel = member.guild.channels.cache.find(ch => ch.name === '💬chat-general');
  // No hacer nada si no se encontró el chat
  if (!channel) return;
  // Enviar mensaje de bienvenida
  channel.send(`Bienvenido a la comunidad mudii, ${member}`);
});


// Unirse a una comunidad
client.on('message', msg => {
  // Verificar que el mensaje empiece con #unirme a: 
  if (msg.content.startsWith('#unirme a: ')) {
    // Guardar el rol en la variable role
    var role = msg.content.split('#unirme a: ')[1];
    
    // Asignar rol adecuado y dar un mensaje de bienvenida.
    if (role.toLowerCase() == 'coding') {
      msg.member.roles.add(CODER);
      msg.reply('Bienveni@ a la comunidad de Coding!');
    } else if (role.toLowerCase() == 'arts') {
      msg.member.roles.add(ARTIST);
      msg.reply('Bienveni@ a la comunidad de Arte!');
    } else if (role.toLowerCase() == 'english') {
      msg.member.roles.add(ENGLISH);
      msg.reply('Bienveni@ a la comunidad de Inglés!');
    }
  }
});

client.login(TOKEN);