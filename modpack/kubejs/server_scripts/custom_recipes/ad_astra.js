ServerEvents.recipes(event => {
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
                "item": "ad_astra:ostrum_ingot"
              }
            ]
          })

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