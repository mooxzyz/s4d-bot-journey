
                (async()=>{
                //hello :) hehe
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
                    require('events').EventEmitter.defaultMaxListeners = 50;
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    logs(s4d.client);         
                    await s4d.client.login('OTA1MTYzMDkyODM5Nzc2MzM2.YYGE0g.2IXi8jG9-nVACVlFuPlBcc9Civ4').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping') {
    let embed = new Discord.MessageEmbed()
       embed.setColor('#333399');
      embed.setTitle('Bots Ping:');
      embed.setDescription(('' + String(s4d.client.ws.ping)));

    (s4dmessage.channel).send({embeds:[embed]});
  }

});

                    return s4d
                    })();
            