const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   if(member) {
     
   const avatar = new Discord.RichEmbed()
      .setTitle("🖼 Foto de avatar de " + `${member.user.username}`)
      .setDescription(`**Clique [aqui](${member.user.avatarURL}) para baixar a imagem!**`)
      .setImage(member.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
   
   } else {
      
   const avatar = new Discord.RichEmbed()
      .setDescription(`**Clique [aqui](${message.author.avatarURL}) para baixar a imagem!**`)
      .setAuthor(`Foto de avatar de ${message.author.username}`)
      .setImage(message.author.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
      
   }
}
