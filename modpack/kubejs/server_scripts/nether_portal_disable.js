PlayerEvents.tick(event => {
    const {player,server,player: {username}} = event
    //only runs every 5 ticks
    if(!(player.age % 5 == 0)) return
    //cheeky message telling the player they cant enter the nether portal
    server.runCommandSilent(`execute as @a at ${username} run execute if block ~ ~ ~ minecraft:nether_portal run tellraw ${username} "§cNO STARGATES!!! Try a rocket, mate."`)
    //sets block to air if youre in the nether portal
    server.runCommandSilent(`execute as @a at ${username} run execute if block ~ ~ ~ minecraft:nether_portal run setblock ~ ~ ~ air`)
    //play glass breaking sound
    server.runCommandSilent(`execute as @a at ${username} run execute if block ~ ~ ~ minecraft:nether_portal run playsound minecraft:block.glass.break ambient @p`)
})