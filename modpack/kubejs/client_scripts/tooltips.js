ItemEvents.tooltip(event => {
  event.add('tempad:tempad', [
    Text.darkPurple('[ Helian Transit & Comms Device ]'),
    Text.darkPurple('Experimental Helian Technology!!!'),
    Text.darkPurple('Used for Einstein-Rosen Bridges creation'),
    Text.darkPurple('and communication.'),
    Text.gold('PLANETARY RANGE ONLY')
  ])

  event.add('tempad:he_who_remains_tempad', [
    Text.darkPurple('[ Helian Transit & Comms Device ]'),
    Text.darkPurple('Enhanced Helian Technology'),
    Text.darkPurple('Used for Einstein-Rosen Bridges creation'),
    Text.darkPurple('and communication.'),
  ])

  event.add('beyondmod:ghost_tempad', [
    Text.darkPurple('[ Helian Transit & Comms Device ]'),
    Text.darkPurple('Enhanced Helian Technology'),
    Text.darkPurple('Used for Einstein-Rosen Bridges creation'),
    Text.darkPurple('and communication.')
  ])

  event.add('minecraft:netherite_upgrade_smithing_template', [
    Text.gold('[ Can be found in loot chests in Hivora ]')
  ])

  event.add('minecraft:ancient_debris', [
    Text.gold("[ Can be found in Nereid's abyssal biomes ]")
  ])

  event.add('minecraft:netherite_scrap', [
    Text.gold("[ Can be found in Nereid's abyssal biomes ]")
  ])

  event.add('aquatica:hadium_ore', [
    Text.gold("[ Can be found in Nereid's abyssal biomes ]")
  ])

  event.add('aquatica:raw_hadium', [
    Text.gold("[ Can be found in Nereid's abyssal biomes ]")
  ])

  event.add('ad_astra:venus_calorite_ore', [
    Text.gold("[ Can be found in Emberis ]")
  ])

  event.add('ad_astra:raw_calorite', [
    Text.gold("[ Can be found in Emberis ]")
  ])

  event.add('#minecraft:wool', [
    Text.gold("[ Sheeps do not spawn here!! ]"),
    Text.gold("[  You are in an alien planet  ]"),
    Text.gold("[   (You must cultivate them)  ]")
  ])

  event.add('minecraft:mutton', [
    Text.gold("[ Sheeps do not spawn here!! ]"),
    Text.gold("[  You are in an alien planet  ]"),
    Text.gold("[   (You must cultivate them)  ]")
  ])

  event.add('minecraft:chicken', [
    Text.gold("[ Chickens do not spawn here!! ]"),
    Text.gold("[   You are in an alien planet   ]"),
    Text.gold("[    (You must cultivate them)   ]")
  ])

  event.add('minecraft:beef', [
    Text.gold("[  Cows do not spawn here!!  ]"),
    Text.gold("[  You are in an alien planet ]"),
    Text.gold("[  (But they were abducted) ]")
  ])

  event.add('minecraft:leather', [
    Text.gold("[  Cows do not spawn here!!  ]"),
    Text.gold("[  You are in an alien planet ]"),
    Text.gold("[  (But they were abducted) ]")
  ])

  event.add('supplementaries:cage', [
    Text.gold("[  Cows do not spawn here!!  ]"),
    Text.gold("[  You are in an alien planet ]"),
    Text.gold("[  (But they were abducted) ]")
  ])

  event.add('supplementaries:jar', [
    Text.gold("[  Can't be used to capture animals!  ]"),
    Text.gold("[  Try a capture trap instead ]")
  ])

  event.add(/animal_pen:animal_pen.*/, [
    Text.gold("[  Input animal from a creature chip!  ]")
  ])

  event.add("animal_pen:aquarium_block", [
    Text.gold("[  Input animal from a water chip!  ]")
  ])
})