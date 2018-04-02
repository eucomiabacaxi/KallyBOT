const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{

console.log('O Bot foi iniciado com sucesso.'.green);
console.log(`O meu prefixo é ${prefix}`);
  
client.user.setPresence({ game: { name: 'minha criação', type: 3 } });
  
  
});

client.on("guildCreate", guild => {
   const entrei = new Discord.RichEmbed()
      .setAuthor(`${guild.name} | Entrei`)
      .setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
      .addField("Membros", `Com **${guild.memberCount}** membros`)
      .addField("Dono", guild.owner)
      .setThumbnail(client.guild.iconURL)
      .setColor("00e7ff")
  
  
  
  
  client.channels.get("429844744110211072").send(entrei);
});

client.on("guildDelete", guild => {
  console.log(`Fui removido do servidor: ${guild.name} (id: ${guild.id})`);
  
  const entrei = new Discord.RichEmbed()
     .setAuthor(`${guild.name} | Removido`)
     .setDescription(`Fui removido do servidor **${guild.name}** (id: ${guild.id})!`)
     .addField("Dono", guild.owner)
     .setThumbnail(guild.iconURL)
     .setColor("ff0000")
  
  
  
  
  client.channels.get("429844744110211072").send(entrei);
});
client.on('guildMemberAdd', member => require('./eventos/novo-membro.js')(client, member));

client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
   } catch (err) {
    console.log(`[ERRO] ${message.author.tag} digitou um comando que não esta no meu banco de dado.`);
    const erro = new Discord.RichEmbed()
     .setAuthor(`Ops, deu erro! Executado por ${message.author.tag}`)
     .setDescription("```js\n" + err + "```")
     .setColor("ff0000")
    
     .setTimestamp()
     .setFooter(`Servidor: ${message.guild.name}`, message.author.avatarURL)
  
    client.channels.get("429844583766294530").send(erro);
   }
  
});
