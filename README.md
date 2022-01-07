# mineflayer-autotem

Auto totem plugin for Mineflayer bots.

Install and load the plugin.

`npm i mineflayer-autotem`

```js
const autotem = require('mineflayer-autotem');

// load the plugin after you created a bot
bot.loadPlugin(autotem);
```

## Functions

### equip

Equips a Totem of Undying to bot's off-hand.

```js
bot.autotem.equip();
```

### totemCount

Returns the number of totems in bot's inventory.

```js
bot.autotem.totemCount();
```

## Example

```js
const mineflayer = require('mineflayer');
const autotem = require('mineflayer-autotem');

const bot = mineflayer.createBot({
  host: 'localHost',      // server IP
  username: 'totem_bot'
})

bot.loadPlugin(autotem);

bot.on('physicTick' () => {
  bot.autotem.equip();
})

bot.on('chat', (username, message) => {
  if (message === 'totemCount') bot.chat(`I have ${bot.autotem.totemCount()} totems`);
})
```

## Contribute

If you spot a bug, or want to improve this module, please contact me.
