const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const mySecret = process.env['ODcwMzQ4NTY1ODEyMjQ0NTIx.YQLdRA.X4Bmfi_BAs5MC8aE1z3fsKL9cfQ']


const prefix = '!';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

     if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`mining`, 'text').catch(e => { });

    }

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

        }, 000);

    }

});

client.on('ready', async () => {
    console.log('was gud!')

    let statuses = [
        `!gen`,
        `!start`,
        `${client.users.cache.size} FREE NITRÁT👀`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "STREAMING",
            url: "https://www.twitch.tv/istvanka123"
        })
    }, 4000)
})

client.login('ODcwMzQ4NTY1ODEyMjQ0NTIx.YQLdRA.sJZ1vXgoZONBnSJuh1LwYZo7MOc')

