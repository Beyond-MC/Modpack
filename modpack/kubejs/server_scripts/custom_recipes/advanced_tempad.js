ServerEvents.recipes(event => {
    event.custom({
            "type": "minecraft:smithing_transform",
            "addition": {
                "item": "minecraft:netherite_ingot"
            },
            "base": {
                "item": "tempad:tempad"
            },
            "result": {
                "item": "tempad:he_who_remains_tempad"
            },
            "template": {
                "item": "kubejs:calorite_upgrade_smithing_template"
            }
        })

    event.shaped('kubejs:calorite_upgrade_smithing_template', [
            'AAA',
            'ABA',
            'AAA'
        ],{
            A: 'ad_astra:calorite_ingot',
            B: 'deeperdarker:grime_brick',
        }
    )
})