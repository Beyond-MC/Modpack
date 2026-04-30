const BLOCKED_NAMESPACE = 'smokingstuff' // change this to the mod id

PlayerEvents.tick(event => {
  const player = event.player

  player.inventory.allItems.forEach(item => {
    if (!item || item.isEmpty()) return

    // Check if item belongs to the mod
    if (item.id.startsWith(BLOCKED_NAMESPACE + ':')) {

      // Remove enchantments if present
      if (item.nbt) {
        item.nbt.remove('Enchantments')
        item.nbt.remove('StoredEnchantments')
      }
    }
  })
})