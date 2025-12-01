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
	.setTitle('🚀 **HELP** 🚀')
	.setDescription("**DDOS ATTACK BY LIZNDYA** \n `.admin` \n `.listadmin` \n**Don't attack .gov.edu.fbi** \n `.methods` \n `.help` \n **Developer : ROMEO**")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Tank',
  usage: 'help'
}
