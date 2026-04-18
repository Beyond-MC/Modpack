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

BlockEvents.modification(e => {
  e.modify('ls_furniture:chopping_board', block => {
    block.destroySpeed = 4
  }) 
})