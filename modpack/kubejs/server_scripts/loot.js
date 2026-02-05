LootJS.modifiers(event => {

  event
    .addLootTableModifier(/^(the_bumblezone|thebumblezone):.*/)
    .randomChance(0.35) // 35% of chests attempt to add loot
    .addLoot("minecraft:netherite_upgrade_smithing_template")
    .apply((ctx) => {
      // 25% chance to add a second one
      if (Math.random() < 0.25) {
        ctx.addLoot("minecraft:netherite_upgrade_smithing_template")
      }

      // 10% chance to add a third
      if (Math.random() < 0.10) {
        ctx.addLoot("minecraft:netherite_upgrade_smithing_template")
      }
    })

})
