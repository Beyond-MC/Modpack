//fucking meme
ItemEvents.modification(event => {
    function eatCandle(color){
        event.modify(`minecraft:${color}candle`, item => {
            item.foodProperties = food => food
                                            .hunger(3)
                                            .saturation(1)
                                            .alwaysEdible(true)
        })
    }
    eatCandle('');
    eatCandle('white');
    eatCandle('light_gray_');
    eatCandle('gray_');
    eatCandle('black_');
    eatCandle('brown_');
    eatCandle('red_');
    eatCandle('orange_');
    eatCandle('yellow_');
    eatCandle('lime_');
    eatCandle('green_');
    eatCandle('cyan_');
    eatCandle('light_blue_');
    eatCandle('blue_');
    eatCandle('purple_');
    eatCandle('magenta_');
    eatCandle('pink_');
})