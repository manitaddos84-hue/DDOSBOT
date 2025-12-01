const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
if (message.channel.id != room) {
	return;
  }
var exec = require('child_process').exec
exec(`pkill 'go'`, (error, stdout, stderr) => {
});
console.log('Stop all attacks:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **LIZNDYA DDOS** 🚀')
	.setTimestamp()
	.setDescription("**► STOP NOW WITH FBI 💥**")
	.setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 0
}

exports.help = {
  name: 'stop',
  description: 'Tank',
  usage: 'stop'
}
