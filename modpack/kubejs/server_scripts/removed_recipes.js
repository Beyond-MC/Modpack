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
    "mekanism:basic_universal_cable",
    "mekanism:advanced_universal_cable",
    "mekanism:elite_universal_cable",
    "mekanism:ultimate_universal_cable",
    "mekanism:digital_miner"
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

var CONSTANTS = [
    GUNS,
    MEKANISM,
    ANIMAL_SEEDS,
    SWORDS
]

////////////////////////////////////
//////  REMOVING  RECIPES  /////////
////////////////////////////////////
ServerEvents.recipes(event => {
    CONSTANTS.forEach(item => {
        event.remove({ output: item });
    });
    event.remove({ output: "cyberspace:terminal" });
    event.remove({ output: "crc:portal_opener" });
})

//////////////////////////////////////////////////////
///////// HIDING ITEMS FROM RECIPE VIEWERS //////////
//////////////////////////////////////////////////////
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, CONSTANTS );
    event.add( `c:hidden_from_recipe_viewers`, "crc:portal_opener" );
    event.add( `c:hidden_from_recipe_viewers`, "cyberspace:terminal" );
})

//////////////////////////////////////////////////////
/////////   REMOVING ITEMS FROM LOOTTABLES  //////////
//////////////////////////////////////////////////////
LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.BLOCK).removeLoot(CONSTANTS);
    event.addLootTypeModifier(LootType.ENTITY).removeLoot('deeperdarker:heart_of_the_deep');
})
