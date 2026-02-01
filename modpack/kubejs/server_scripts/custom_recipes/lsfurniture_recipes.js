ServerEvents.tags('item', event => {
  event.add('forge:chests/wooden', '#ls_furniture:chests');
  event.add('ls_furniture:barrels', 'minecraft:barrel');
})

ServerEvents.recipes(event => {
    event.replaceInput(
      { input: 'minecraft:barrel' }, // Arg 1: the filter
          'minecraft:barrel',            // Arg 2: the item to replace
          '#ls_furniture:barrels'         // Arg 3: the item to replace it with
      )
})