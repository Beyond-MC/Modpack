ServerEvents.recipes(event => {
  //Ostrum Ingot
        event.custom({
            "type": "create:mixing",
            "heatRequirement": "heated",
            "ingredients": [
              {
                "item": "the_bumblezone:royal_jelly_bottle"
              },
              {
                "item": "aquatica:hadium_ingot"
              }
            ],
            "results": [
              {
                "count": 2,
                "item": "ad_astra:ostrum_ingot"
              }
            ]
          })
        event.remove({ type: 'minecraft:smelting', output: 'ad_astra:ostrum_ingot' })
        event.remove({ type: 'minecraft:blasting', output: 'ad_astra:ostrum_ingot' })
  

  //Royal jelly Bottle
        event.custom({
            "type": "create:mixing",
            "heatRequirement": "heated",
            "ingredients": [
              {
                "item": "the_bumblezone:royal_jelly_bottle"
              },
              {
                "item": "the_bumblezone:honey_crystal_shards"
              }
            ],
            "results": [
              {
                "count": 2,
                "item": "the_bumblezone:royal_jelly_bottle"
              }
            ]
          })
})