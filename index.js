const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = ""; // Put your bot prefix into the "" symbols

client.on('ready', () => {
 console.log("Bot is ready!");

});

client.on('message', async message => {

  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

      if(command === 'add-key'){
    
      if(message.channel.type === 'dm') return;

      if (message.author.id !== '') // Put your user id into the '' symbols
      return message.channel.send("This command can only be used by dawey!")
      message.delete()

    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
    if(!args[0]) return message.channel.send("Write an argument to enter a new key.")
      if(db.tiene(`${args[0]}`)) return message.channel.send("This key already exists.")
    db.establecer(`${args[0]}.${message.author.id}`, {keys: args[0]})
    message.channel.send(`**Key added: **||${args[0]}||`)
  }
    if(command === 'delete-key'){

      if(message.channel.type === 'dm') return;
        if (message.author.id !== '') // Put your user id into the '' symbols
          return message.channel.send("This command can only be used by dawey!")
           message.delete()

    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene(`${args[0]}`)) return message.channel.send("There is no keys called like this.")
    if(db.tiene(`${args[0]}`)){
      db.eliminar(`${args[0]}`) 
    message.channel.send(`**Key removed:** ||${args[0]}||`)

  }
  
}

   if(command === 'redeem'){

    if(message.channel.type === 'dm') return;
    
  const Discord = require("discord.js")
  const megadb = require("megadb")
  const db = new megadb.crearDB("keys")
  let member = message.member;
  if(!db.tiene(`${args[0]}`)) return message.channel.send("You provided an wrong key!")
  
  const embed = new Discord.RichEmbed() 
    .setTitle("Redeem » Successfully!")
    .setColor(0x00AE86)
    .setDescription(`• ${message.author}, You got the **Diamond** role`)
    .setThumbnail("https://zdomenik.net/assets/gif.gif")
    .setFooter(`Redeem used by ${message.author.tag}`);
    member.addRole("") // Put the role id into the "" symbols
        
    message.channel.send(embed)
      if(db.tiene(`${args[0]}`)){
    db.eliminar(`${args[0]}`)
  
    }
  }



});

client.login("") // Put your bot token into the "" symbols
