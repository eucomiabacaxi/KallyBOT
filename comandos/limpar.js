const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   if(!args < "2") return message.reply("! :x:");
   if(!args[0]) return message.reply("por favor, digite o número maior que 2 para deletar as mensagens.");
   message.channel.bulkDelete(args[0]).then(() => {
   message.channel.send(`Chat limpo! Limpado **${args[0]}** mensagens por ${message.author}.`).then(msg => msg.delete(5000));
});
   
}
