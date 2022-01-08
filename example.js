const mineflayer = require('mineflayer');
const autotem = require('mineflayer-autotem');

const bot = mineflayer.createBot({
	username: 'totem_bot',
	host: process.argv[2],
	port: process.argv[3]
})

bot.loadPlugin(autotem);

bot.on('physicTick', () => {
	bot.autotem.equip();
})

bot.on('chat', (username, message) => {
	if (message === 'totemCount') bot.chat(`I have ${bot.autotem.totemCount()} totems`);
})
