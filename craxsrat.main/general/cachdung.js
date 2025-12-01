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
	.setTitle('🚀 **LIZNDYA** 🚀')
	.setDescription("**Created by ROMEO - and**\n`? .methods DDOS - .<methods> + <url>`\n`VD : .CF-UAM + <url>`\n `Subscribe LIZNDYA`")
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
