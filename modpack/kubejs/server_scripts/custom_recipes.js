ServerEvents.recipes(event => {
        // Kyber Crystal is made with extraterrestrial crystal
        event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "clanginghowl:extraterrestrial_energy_crystal"
        },
        "result": {
            "item": "lightsabers:kyber_crystal"
        }
    })

    event.custom({
        "type": "manors_bounty_machine:cutting_board_single",
        "input": {
            "item": "lightsabers:kyber_crystal"
        },
        "output": {
            "count": 1,
            "item": "lightsabers:kyber_crystal_cracked"
        },
        "tool": {
            "tag": "minecraft:pickaxes"
        }
    })
})