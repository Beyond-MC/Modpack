PlayerEvents.tick(event => {
  const player = event.player
  const item = player.getMainHandItem()

  if (item.id.startsWith("lightsabers:lightsaber_") && player.isUsingItem()) {
    player.stopUsingItem()
  }
})
