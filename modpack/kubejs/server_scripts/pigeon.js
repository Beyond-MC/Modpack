PlayerEvents.tick(event => {
  if (event.player.level.isClientSide()) return

  const player = event.player
  const data = player.persistentData

  if (data.fartCooldown == null) data.fartCooldown = 0
  if (data.pendingDamage == null) data.pendingDamage = 0


  if (data.fartCooldown > 0)
    data.fartCooldown--

  if (data.pendingDamage > 0) {
    data.pendingDamage--

    if (data.pendingDamage == 0) {
      event.server.runCommandSilent(
        `damage ${player.name.string} 1 minecraft:generic`
      )
    }
  }

  if (!player.isCrouching()) return
  if (data.fartCooldown > 0) return

 
  const helmet = player.getItemBySlot("head")
  if (!helmet || helmet.empty) return
  if (helmet.id !== "minecraft:diamond_helmet") return


  event.server.runCommandSilent(
    `execute at ${player.name.string} run setblock ~ ~ ~ alexscaves:guano_layer`
  )

  event.server.runCommandSilent(
    `execute at ${player.name.string} run playsound beyond:fart player ${player.name.string} ~ ~ ~ 1 1`
  )

  data.pendingDamage = 7

  data.fartCooldown = 100
})