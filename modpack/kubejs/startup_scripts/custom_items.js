StartupEvents.registry('item', e => {
  e.create('fun_fruit')
    .displayName('Fun Fruit')
    .tooltip('A very not suspicious fruit!')
    .food(food => {
      food
        .hunger(4)
        .saturation(1) 
        .alwaysEdible()
    })

  e.create('carrot_sword', 'sword')
    .tier('iron')
    .displayName('Carrot sword')

  e.create('golden_carrot_sword', 'sword')
    .tier('netherite')
    .displayName(Text.gold("Paypay's Sword"))
    .tooltip(Text.gold("⚠ Helian Leader Paypay's Sword Replica"))
    .tooltip(Text.gold("Helian archives classify this as a replica of a legendary warrior's blade."))
    .attackDamageBaseline(999)
    .maxDamage(-1)
})

ItemEvents.modification(event => {
    event.modify('kubejs:carrot_sword', item => {
        item.foodProperties = food => food
            .hunger(6)
            .saturation(5)
            .alwaysEdible(true)
            .effect('minecraft:jump_boost', 600, 5, 1)
            .effect('minecraft:speed', 200, 0, 1)
    })

    event.modify('kubejs:golden_carrot_sword', item => {
        item.foodProperties = food => food
            .hunger(10)
            .saturation(10)
            .alwaysEdible(true)
            .effect('minecraft:jump_boost', 1200, 7, 1)
            .effect('minecraft:speed', 1200, 2, 1)
            .effect('minecraft:strength', 600, 1, 1)
            .effect('minecraft:regeneration', 200, 2, 1)
            .effect('minecraft:resistance', 600, 1, 1)
            .effect('minecraft:fire_resistance', 1200, 0, 1)
    })
})
