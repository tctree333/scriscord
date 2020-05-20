const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const Discord = require('discord.js');
const client = new Discord.Client();

const console = require('../../util/log');

// eslint-disable-next-line max-len
const blockIconUri = 'data:image/png;base64,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';

let botReady = false;
let loggedIn = false;
const botMessages = [];
let currentMessage = null;

client.on('ready', () => {
    console.log('Ready!');
    botReady = true;
});

client.on('message', message => {
    botMessages.unshift(message);
    console.log(botMessages);
});

class ScratchDiscordBot {

    getInfo () {
        return {
            id: 'scratchDiscord',
            color1: '#7289DA',
            color2: '#7289DA',
            name: 'Scriscord',
            blockIconURI: blockIconUri,
            blocks: [{
                opcode: 'hatOnReady',
                blockType: BlockType.HAT,
                text: 'when bot is ready'
            },
            {
                opcode: 'hatOnMessage',
                blockType: BlockType.HAT,
                text: 'when I receive a Discord message'
            },


            {
                opcode: 'reporterMessage',
                blockType: BlockType.REPORTER,
                text: 'message [PROP]',
                arguments: {
                    PROP: {
                        type: ArgumentType.STRING,
                        defaultValue: 'content',
                        menu: 'messageMenu'
                    }
                }
            },
            {
                opcode: 'reporterInvite',
                blockType: BlockType.REPORTER,
                text: 'bot invite link'
            },
            {
                opcode: 'reporterId',
                blockType: BlockType.REPORTER,
                text: 'bot user id'
            },


            {
                opcode: 'commandSendMessage',
                blockType: BlockType.COMMAND,
                text: 'send message [TEXT] to channel [CHANNEL]',

                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: 'hello'
                    },
                    CHANNEL: {
                        type: ArgumentType.STRING,
                        menu: 'botChannelsMenu'
                    }
                }
            },
            {
                opcode: 'commandNextMessage',
                blockType: BlockType.COMMAND,
                text: 'next message',
                terminal: true
            },
            {
                opcode: 'commandLogin',
                blockType: BlockType.COMMAND,
                text: 'start bot [TOKEN]',
                terminal: true,

                arguments: {
                    TOKEN: {
                        type: ArgumentType.STRING,
                        defaultValue: 'user token'
                    }
                }
            },
            {
                opcode: 'commandLogout',
                blockType: BlockType.COMMAND,
                text: 'logout bot',
                terminal: true
            }

            ],
            menus: {

                messageMenu: {
                    items: ['content', 'channel', 'author', 'guild']
                },
                botChannelsMenu: {
                    acceptReporters: true,
                    items: 'getBotChannelsMenu'
                }

            }
        };
    }

    getBotChannelsMenu () {
        const output = [];
        if (loggedIn) {
            client.channels.cache.each(channel => {
                output.push(`${channel.id} (${channel.name} | ${channel.guild.name})`);
            });
            return output;
        }
        return ['not logged in'];

    }

    // The block handlers

    // command blocks

    hatOnReady () {
        if (botReady) {
            botReady = false;
            return true;
        }
        return false;
    }

    hatOnMessage () {
        if (botMessages.length > 0 && (currentMessage === null || currentMessage.author.id === client.user.id)) {
            currentMessage = botMessages.pop();
            return true;
        }
        return false;
    }

    reporterMessage (args) {
        if (loggedIn) {
            if (currentMessage !== null) {
                const channel = currentMessage.channel;
                const author = currentMessage.author;
                const guild = currentMessage.guild;
                switch (args.PROP.toLowerCase()) {
                case 'content':
                    return currentMessage.content;
                case 'channel':
                    return `${channel.name} | ${channel.guild.name} (${channel.id})`;
                case 'author':
                    return `${author.username}#${author.discriminator} (${author.id})`;
                case 'server':
                case 'guild':
                    return `${guild.name} (${guild.id})`;
                }
            }
            return null;
        }
        return 'Not logged in';
    }

    reporterInvite () {
        if (loggedIn) {
            return client.generateInvite(['SEND_MESSAGES']);
        }
        return 'Not logged in';
    }

    reporterId () {
        if (loggedIn) {
            return client.user.id;
        }
        return 'Not logged in';
    }

    commandSendMessage (args) {
        const content = args.TEXT;
        const channelString = args.CHANNEL;
        const channelId = channelString.substring(channelString.lastIndexOf('(') + 1, channelString.lastIndexOf(')'));
        client.channels.fetch(channelId)
            .then(channel => {
                channel.send(content);
            })
            .catch(console.error);
    }

    commandNextMessage () {
        currentMessage = null;
    }

    commandLogin (args) {
        const token = args.TOKEN;
        loggedIn = true;
        client.login(token);
    }

    commandLogout () {
        loggedIn = false;
        botReady = false;
        client.destroy();
    }

    // end of block handlers

}

module.exports = ScratchDiscordBot;
