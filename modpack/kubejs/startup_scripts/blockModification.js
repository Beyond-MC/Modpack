BlockEvents.modification(e => {
  e.modify('minecraft:bedrock', block => {
    block.explosionResistance = 1
  })
})

BlockEvents.modification(e => {
  e.modify('cyberspace:terminal', block => {
    block.destroySpeed = -1,
    block.lightEmission = 9
  })
})