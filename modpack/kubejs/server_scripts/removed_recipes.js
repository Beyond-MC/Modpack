////////////////////////////////////
//////     CONSTANTS       /////////
////////////////////////////////////
var GUNS = [
    "scguns:prima_materia",
    "scguns:sterilizer",
    "scguns:defender_pistol",
    "scguns:greaser_smg",
    "scguns:m3_carabine",
    "scguns:stigg",
    "scguns:minksy",
    "scguns:raygun",
    "scguns:rat_king_and_queen",
    "scguns:locust",
    "scguns:howler_conversion",
    "scguns:shard_culler",
    "scguns:lone_wonder",
    "scguns:dark_matter",
    "scguns:gattaler",
    "scguns:gauss_rifle",
    "scguns:spitfire",
    "scguns:flayed_god",
    "scguns:nervepinch",
    "scguns:astella",
    "scguns:big_bore",
    "scguns:ultra_knight_hawk"
];

var MEKANISM = [
    "mekanism:mekasuit_helmet",
    "mekanism:mekasuit_bodyarmor",
    "mekanism:mekasuit_pants",
    "mekanism:mekasuit_boots",
    "mekanism:meka_tool",
    "mekanism:atomic_disassembler",
    "mekanism:digital_miner",
    "mekanism:cardboard_box"
];

var ANIMAL_SEEDS = [
    "havenanimalseeds:axolotl_seed",
    "havenanimalseeds:bee_seed",
    "havenanimalseeds:cow_seed",
    "havenanimalseeds:villager_seed",
    "havenanimalseeds:sniffer_seed",
    "havenanimalseeds:glow_squid_seed"
];

var SWORDS = [
    "minecraft:diamond_sword",
    "minecraft:netherite_sword",
    "netherdungeons:piglin_sword",
    "netherdungeons:wither_skeleton_sword",
    "ae2:certus_quartz_sword",
    "ae2:fluix_sword",
    "ae2:nether_quartz_sword",
    "clanginghowl:advanced_chainsword",
    "clanginghowl:extraterrestrial_sword",
    "manors_bounty:headless_horsemans_cursed_sword",
    "deeperdarker:resonarium_sword",
    "deeperdarker:warden_sword",
    "sgjourney:naquadah_sword"
];

var CAGES = [
    "animal_pen:animal_cage",
    "animal_pen:water_animal_container"
];

var WIRES = [
  "create_new_age:copper_wire",
  "create_new_age:overcharged_iron_wire",
  "create_new_age:overcharged_golden_wire",
  "create_new_age:overcharged_diamond_wire",
  "create_new_age:electrical_connector"
]

var KEEPER = [
    "neonsentrykeeper:capture_system_changer",
    "neonsentrykeeper:keeper_spawn_egg",
    "neonsentrykeeper:sentry_spawner",
    "neonsentrykeeper:kee_pad",
    "neonsentrykeeper:plasma_cell",
    "neonsentrykeeper:capture_creature_chip_charged",
    "neonsentrykeeper:capture_monster_chip_charged",
    "neonsentrykeeper:capture_water_chip_charged",
    "neonsentrykeeper:capture_global_chip_charged"
]

var MISC = [
  "alexscaves:dreadbow",
  "cyberspace:terminal",
  "crc:portal_opener",
  "orbital_railgun:orbital_railgun",
  "deeperdarker:heart_of_the_deep",
  "alexscaves:tremorzilla_egg",
  /dimdoors:item_ag_dim_.*/,
  /scannable:.*/,
  /transmog:.*/,
  /frog_dweller:.*/
]

var CONSTANTS = [
    GUNS,
    MEKANISM,
    ANIMAL_SEEDS,
    SWORDS,
    CAGES,
    WIRES,
    KEEPER,
    MISC
];



////////////////////////////////////
//////  REMOVING  RECIPES  /////////
////////////////////////////////////
ServerEvents.recipes(event => {
    CONSTANTS.forEach(item => {
        event.remove({ output: item });
    });
})

//////////////////////////////////////////////////////
///////// HIDING ITEMS FROM RECIPE VIEWERS //////////
//////////////////////////////////////////////////////
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, CONSTANTS );

})

//////////////////////////////////////////////////////
/////////   REMOVING ITEMS FROM LOOTTABLES  //////////
//////////////////////////////////////////////////////
LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.BLOCK).removeLoot(CONSTANTS);
    event.addLootTypeModifier(LootType.ENTITY).removeLoot(CONSTANTS);
    event.addLootTypeModifier(LootType.CHEST).removeLoot(CONSTANTS);
})
