module.exports.run = async (client, message, args) =>{

    let arg = args.join(" ");
    if(message.member.id == "298139759463890944") {
      if(arg == "off"){
        client.user.setStatus("invisible");
        message.reply("bot esta offline")
      }
      if(arg == "on"){
        client.user.setStatus("online");
        message.reply("bot esta online")
      }
   }       
}
