# Sriscord
A Scratch Extension for interacting with Discord

## About
This was created for fun, as sort of a joke. It could definitely be a lot better, but I'm not really going to spend that much time on this.

This extension lets you receive/send messages, which is all you need to make a basic bot. It also allows you to access some basic message info, such as the author, channel, and guild. This uses the [`discord.js`](https://discord.js.org/) library.

The extension itself is in `scriscord-extension/index.js`, which is linked to `scratch-vm/src/extensions/scratch3_scriscord/index.js`. `scratch-gui` and `scratch-vm` are mods of the official Scratch gui/vm to load the custom extension.

## To Use
To receive messages, start with the `when I receive a Discord message` hat. You should probably use only one of these blocks at a time, I haven't really tested it with 2 of these blocks. After this hat triggers, message data will be available using the `message [PROP]` reporter until the `next message` block is triggered. If the message handling seems to be stuck, try running `next message` a couple times.

The `message [PROP]` reporter has different formats for the types of data.
* `message content` - The raw content of the message. No formatting.
* `message channel` - Channels are formatted as "`channel name` | `channel guild name` (`channel id`)"
* `message author` - Users are formatted as "`username`#`discriminator` (`user id`)"
* `message guild` - Guilds (servers) are formatted as "`guild name` (`guild id`)"

The `when I receive a Discord message` hat also triggers on messages the bot sends, so it's important to be careful not to go into a reply loop. To check if a message was sent by the bot, use the builtin `[TEXT] contains [ITEM]?` boolean in the `Operators` tab and check if `[message [author]] contains [bot user id]?`

## Thanks/Other Resources
Since the documentation for making these extensions aren't that great, I relied heavily on looking at what others did before me. Here are some of the resources that helped.
* Basically the only official documentation there is: [gh repo document](https://github.com/LLK/scratch-vm/blob/develop/docs/extensions.md)
* SheepTester's gui mod to allow extension loading: [gh repo](https://github.com/SheepTester/scratch-gui), [live website](https://sheeptester.github.io/scratch-gui/)
* SheepTester (Sheep_maker on Scratch)'s discussion post about the specific mods: [scratch discussion](https://scratch.mit.edu/discuss/topic/277217/?page=6#post-3445574)
* Posts on setting up the gui/vm stuff: [official scratch doc](https://github.com/LLK/scratch-gui/wiki/Getting-Started), [discussion post by PullJosh on Scratch](https://scratch.mit.edu/discuss/topic/336496/?page=1#post-3403291)
* Scratch Extension for interacting with hardware electronics: [gh repo](https://github.com/MrYsLab/s3onegpio/), [some extension code](https://raw.githubusercontent.com/MrYsLab/s3onegpio/master/scratch-vm/src/extensions/scratch3_onegpioCpx/index.js)
