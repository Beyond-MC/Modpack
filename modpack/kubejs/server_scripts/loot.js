LootJS.modifiers(event => {
  event
    .addLootTableModifier(/^(the_bumblezone|thebumblezone):structures\/.*/)
    .randomChance(0.35)
    .addLoot("minecraft:netherite_upgrade_smithing_template")
    .apply((ctx) => {
      // 25% chance for a second template
      if (Math.random() < 0.25) {
        ctx.addLoot("minecraft:netherite_upgrade_smithing_template")
      }
      // 10% chance for a third template
      if (Math.random() < 0.10) {
        ctx.addLoot("minecraft:netherite_upgrade_smithing_template")
      }
    })
})