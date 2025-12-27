BlockEvents.modification(e => {
  e.modify('minecraft:bedrock', block => {
    block.explosionResistance = 1
  })
})