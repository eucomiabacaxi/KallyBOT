const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   let mensg = args.join(" ");
   if(!mensg)
      return message.reply("por favor, digite a mensagem da votação!");
   const vote = new Discord.RichEmbed()
      .setAuthor("Votação")
      .setDescription(mensg)
      .setColor("#60d1f6")
      .setFooter("© Kally Votação")
   
   message.channel.send("@everyone", vote)
   client.message.react('👍')
   client.message.react('👎')
   client.message.react('❓')
}
