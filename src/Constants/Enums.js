
const ResourceEnum = {
    BANK : "Bank",
    MINING: "Mining",
    SMITHING: 'Smithing',
    WOODCUTTING: 'Woodcutting',
    FISHING: 'Fishing',
    COOKING: 'Cooking'

}

 const MiningEnum={
    TIN : "Tin",
    COPPER: "Copper",
    IRON: "Iron",
    SILVER : "Silver",
    GOLD : "Gold",
    COAL: "Coal",
    MITHRIL: "Mithril",
    ADAMANTITE: "Adamantite",
    RUNITE: "Runite"
}

 const SmeltingEnum = {
     BRONZE : "Bronze",
     IRON: "Iron",
     SILVER : "Silver",
     GOLD: "Gold",
     STEEL: "Steel",
     MITHRIL: "Mithril",
     ADAMANTITE: "Adamantite",
     RUNITE: "Runite"
}

 const WoodcuttingEnum = {
     NORMAL : "Normal",
     OAK : "Oak",
     WILLOW : "Willow",
     MAPLE : "Maple",
     YEW : "Yew",
     TEAK : "Teak",
     MAHOGANY: "Mahogany",
     MAGIC: "Magic",
     REDWOOD: "Redwood"
}

 const FishingEnum = {
     SHRIMP : "Shrimp",
     HERRING: "Herring",
     SARDINE: "Sardine",
     TROUT: "Trout",
     SALMON: "Salmon",
     CRAB: "Crab",
     LOBSTER: "Lobster",
     SWORDFISH: "Swordfish"
}

 const CookingEnum = {
     COOKEDSHRIMP : "CookedShrimp",
     COOKEDHERRING: "CookedHerring",
     COOKEDSARDINE: "CookedSardine",
     COOKEDTROUT : "CookedTrout",
     COOKEDSALMON: "CookedSalmon",
     COOKEDCRAB: "CookedCrab",
     COOKEDLOBSTER: "CookedLobster",
     COOKEDSWORDFISH: "CookedSwordfish"

}

const Enums = {ResourceEnum, MiningEnum, SmeltingEnum, WoodcuttingEnum, FishingEnum, CookingEnum};

//Ended up not utilizing this as much as expected, it can be used to set a category and such in a
//more readable way for the programmer, but in terms of the actual program it is controlled by
//reading the property keys off the resource object for the most part.
export default Enums;