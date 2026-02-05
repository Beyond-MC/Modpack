ServerEvents.recipes(event => {
    event.shaped({
            "key": {
                "C": {
                "item": "minecraft:carrot"
                },
                "T": {
                "item": "minecraft:stick"   
                }
            },
            "pattern": [
                "C",
                "C",
                "T"
            ],
            "result": {
                "item": "kubejs:carrot_sword"
            }
        }
    )
})