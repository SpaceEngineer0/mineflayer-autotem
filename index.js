"use strict";

module.exports = bot => {
	bot.autotem = {
		equip() {
			if (bot.inventory.slots[45] && bot.inventory.slots[45].name === 'totem_of_undying') return;
			const totem = bot.inventory.findInventoryItem('totem_of_undying', null, null);
			if (totem) {
				bot.inventory.requiresConfirmation = false;
				bot.equip(totem, 'off-hand');
			}
		},
		totemCount() {
			var count = 0;
			bot.inventory.slots.forEach(item => {
				if (item && item.name === 'totem_of_undying') count++;
			})
			return count;
		}
	}
}
