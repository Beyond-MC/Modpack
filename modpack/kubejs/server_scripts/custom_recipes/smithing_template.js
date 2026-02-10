ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'minecraft:netherite_upgrade_smithing_template' },
        'minecraft:netherrack',
        'minecraft:honeycomb_block'
        )
    event.replaceInput(
        { output: 'minecraft:netherite_upgrade_smithing_template' },
        'minecraft:diamond',
        'minecraft:emerald'
        )
})