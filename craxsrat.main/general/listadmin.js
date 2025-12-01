const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **listadmin** 🚀')
	.setDescription("**Admin Server** \n`ADMIN server ** Developer : ROMEO **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['listadmin'],
  permLevel: 0
}

exports.help = {
  name: 'listadmin',
  description: 'Tank',
  usage: 'listadmin'
}
