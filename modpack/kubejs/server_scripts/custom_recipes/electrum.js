ServerEvents.recipes(event => {
        event.custom({
            "type":"mekanism:purifying",
            "chemicalInput":{
                "amount":2,
                "gas":"mekanism:oxygen"
            },
            "itemInput":{
                "ingredient":{
                    "item":"create:brass_ingot"
                }
            },
            "output":{
                "count":1,
                "item":"createaddition:electrum_ingot"
            }
        })
})