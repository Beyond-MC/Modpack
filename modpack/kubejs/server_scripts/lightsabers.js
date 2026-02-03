PlayerEvents.tick(event => {
  const player = event.player

  if (!player.isUsingItem()) return

  const main = player.getMainHandItem()
  const off = player.getOffHandItem()

  if (
    main.id.startsWith("lightsabers:lightsaber_") ||
    off.id.startsWith("lightsabers:lightsaber_")
  ) {
    player.stopUsingItem()
  }
})