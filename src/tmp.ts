export let tmp = {
    data: {
        tasks: [
            {
                id: "657315df034d76585f032e01",
                name: "Shooting Cans",
                taskImageLink:
                    "https://assets.tarkov.dev/657315df034d76585f032e01.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "657333fee3fbaa77d3b5cd7c",
                        description:
                            "Locate the Utyos machine gun on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573340403f471fb2bb12df1",
                        description:
                            "Locate the AGS grenade launcher on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657334311dbb8b7569bb83c4",
                        description: "Eliminate any target on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "657315e270bb0b8dba00cc48",
                name: "Burning Rubber",
                taskImageLink:
                    "https://assets.tarkov.dev/657315e270bb0b8dba00cc48.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "65733e571b7e7ed95fcd2f0c",
                        description:
                            "Use the paid vehicle extraction on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "657315e4a6af4ab4b50f3459",
                name: "Saving the Mole",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "6575a524a39d2be74e620546",
                        description:
                            "Locate the USEC PMC group at the parking lot of the TerraGroup complex on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6575a62a62028c6d5cb43cb7",
                        description: "Locate the lab scientist on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6575a64d3fc09bdfb38b713d",
                        description: "Access the scientist's office",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65817fbbb454159976c91917",
                        description:
                            "Locate and obtain the scientist's hard drive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "65817fc99a039ed2e97896e4",
                        description: "Hand over the hard drive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "657315ddab5a49b71f098853",
                name: "First in Line",
                taskImageLink:
                    "https://assets.tarkov.dev/657315ddab5a49b71f098853.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "65732ac3c67dcd96adffa3c7",
                        description:
                            "Locate the Emercom station on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65817bf31404f3565aef9fec",
                        description: "Hand over any medicine items",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c695186f7741e566b64a2",
                            name: "Augmentin antibiotic pills",
                            iconLink:
                                "https://assets.tarkov.dev/590c695186f7741e566b64a2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5936d90786f7742b1420ba5b",
                name: "Debut",
                taskImageLink:
                    "https://assets.tarkov.dev/5936d90786f7742b1420ba5b.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "5967379186f77463860dadd6",
                        description:
                            "Eliminate Scavs all over the Tarkov territory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "596737cb86f77463a8115efd",
                        description:
                            "Obtain and hand over MP-133 12ga shotguns",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "54491c4f4bdc2db1078b4568",
                            name: "MP-133 12ga pump-action shotgun",
                            iconLink:
                                "https://assets.tarkov.dev/54491c4f4bdc2db1078b4568-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5967733e86f774602332fc84",
                name: "Shortage",
                taskImageLink:
                    "https://assets.tarkov.dev/5967733e86f774602332fc84.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "5968edc086f77420d2328014",
                        description: "Find Salewa first aid kits in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb45d4bdc2dee738b4568",
                            name: "Salewa first aid kit",
                            iconLink:
                                "https://assets.tarkov.dev/544fb45d4bdc2dee738b4568-icon.webp",
                        },
                    },
                    {
                        id: "59689eb886f7740d137ebfc3",
                        description: "Hand over the first aid kits",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb45d4bdc2dee738b4568",
                            name: "Salewa first aid kit",
                            iconLink:
                                "https://assets.tarkov.dev/544fb45d4bdc2dee738b4568-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "657315e1dccd301f1301416a",
                name: "Luxurious Life",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 1,
                objectives: [
                    {
                        id: "6575aa67197bd678a0c3f552",
                        description: "Locate the liquor store on Ground Zero",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65817cabba2ba6ef71fc72ca",
                        description:
                            "Locate and obtain the wine bottle in the store",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "65817cd2881a7e07b3ec1249",
                        description: "Hand over the wine bottle",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5ac23c6186f7741247042bad",
                name: "Gunsmith - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac23c6186f7741247042bad.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5accd5e386f77463027e9397",
                        description:
                            "Modify an MP-133 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5936da9e86f7742d65037edf",
                name: "Background Check",
                taskImageLink:
                    "https://assets.tarkov.dev/5936da9e86f7742d65037edf.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5968ec9986f7741ddd6c1012",
                        description:
                            "Obtain the Bronze pocket watch on a chain on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5967920f86f77468d219d632",
                        description: "Hand over the pocket watch",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5975de1f86f7744ca53b7c82",
                        description: "Obtain the key to the fuel tanker truck",
                        optional: true,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5937ee6486f77408994ba448",
                            name: "Machinery key",
                            iconLink:
                                "https://assets.tarkov.dev/5937ee6486f77408994ba448-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25bfd086f77442734d3007",
                name: "The Survivalist Path - Zhivchik",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25bfd086f77442734d3007.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25c5a186f77443fe457661",
                        description:
                            "Survive for 5 minutes while suffering from complete dehydration (Excluding Factory)",
                        optional: false,
                        __typename: "TaskObjectiveExperience",
                    },
                    {
                        id: "5d9f035086f7741cac4a9713",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5eaaaa7c93afa0558f3b5a1c",
                name: "The Survivalist Path - Junkie",
                taskImageLink:
                    "https://assets.tarkov.dev/5eaaaa7c93afa0558f3b5a1c.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5eaaaa7c93afa0558f3b5a1f",
                        description:
                            "Eliminate Scavs while under any stimulant effect on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e2c386f77443e7549029",
                name: "The Huntsman Path - Trophy",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2c386f77443e7549029.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d26fd8886f77469f0445745",
                        description: "Locate and eliminate Reshala",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5d66741c86f7744a2e70f039",
                        description: "Find Reshala's Golden TT in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b3b713c5acfc4330140bd8d",
                            name: "TT-33 7.62x25 TT pistol (Golden)",
                            iconLink:
                                "https://assets.tarkov.dev/5b3b713c5acfc4330140bd8d-icon.webp",
                        },
                    },
                    {
                        id: "5d2710e686f7742e9019a6b2",
                        description: "Hand over Reshala's Golden TT pistol",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b3b713c5acfc4330140bd8d",
                            name: "TT-33 7.62x25 TT pistol (Golden)",
                            iconLink:
                                "https://assets.tarkov.dev/5b3b713c5acfc4330140bd8d-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25aed386f77442734d25d2",
                name: "The Survivalist Path - Unprotected but Dangerous",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25aed386f77442734d25d2.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25af3c86f77443ff46b9e7",
                        description:
                            "Eliminate Scavs without wearing any body armor on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e29d86f7740a22516326",
                name: "The Survivalist Path - Eagle-Owl",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e29d86f7740a22516326.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25fd8386f77443fe457cae",
                        description:
                            "Eliminate Scavs in the time period of 21:00-04:00 without using any NVGs or thermal sights (Excluding Factory)",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25d2c186f77443e35162e5",
                name: "The Survivalist Path - Cold Blooded",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25d2c186f77443e35162e5.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25d4e786f77442734d335d",
                        description:
                            "Eliminate PMC operatives with headshots while suffering from the tremor effect",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d24b81486f77439c92d6ba8",
                name: "Acquaintance",
                taskImageLink:
                    "https://assets.tarkov.dev/5d24b81486f77439c92d6ba8.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d24ba7886f77439c92d6baa",
                        description:
                            "Hand over the found in raid Iskra ration packs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5d4b86f774784e1b9c45",
                            name: "Iskra ration pack",
                            iconLink:
                                "https://assets.tarkov.dev/590c5d4b86f774784e1b9c45-icon.webp",
                        },
                    },
                    {
                        id: "5d24bb4886f77439c92d6bad",
                        description:
                            "Hand over the found in raid Packs of instant noodles",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "656df4fec921ad01000481a2",
                            name: "Pack of instant noodles",
                            iconLink:
                                "https://assets.tarkov.dev/656df4fec921ad01000481a2-icon.webp",
                        },
                    },
                    {
                        id: "5d24bb7286f7741f7956be74",
                        description:
                            "Hand over the found in raid Cans of beef stew (Large)",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347da92459774491567cf5",
                            name: "Can of beef stew (Large)",
                            iconLink:
                                "https://assets.tarkov.dev/57347da92459774491567cf5-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25e2cc86f77443e47ae019",
                name: "The Huntsman Path - Forest Cleaning",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2cc86f77443e47ae019.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d2701b586f77469f1599fe2",
                        description:
                            "Eliminate Scavs all over the Tarkov territory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d2495a886f77425cd51e403",
                name: "Introduction",
                taskImageLink:
                    "https://assets.tarkov.dev/5d2495a886f77425cd51e403.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "63ac18f4972364554162a25c",
                        description:
                            "Find Jaeger's camp at the specified spot on Woods",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5d249a6e86f774791546e952",
                        description: "Obtain Jaeger's encrypted message",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5d249aa286f77475e8376399",
                        description: "Hand over the message",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5d25c81b86f77443e625dd71",
                name: "The Survivalist Path - Wounded Beast",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25c81b86f77443e625dd71.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25c8c986f77443e47ad47a",
                        description:
                            "Eliminate Scavs while suffering from the pain effect",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25cf2686f77443e75488d4",
                name: "The Survivalist Path - Tough Guy",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25cf2686f77443e75488d4.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25d09286f77444001e284c",
                        description:
                            "Eliminate Scavs in a single raid without using any medicine on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e44386f77409453bce7b",
                name: "The Huntsman Path - Evil Watchman",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e44386f77409453bce7b.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d2733c586f7741dea4f3072",
                        description:
                            "Eliminate PMC operatives in the Dorms area on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e43786f7740a212217fa",
                name: "The Huntsman Path - Justice",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e43786f7740a212217fa.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d272bd386f77446085fa4f9",
                        description:
                            "Eliminate Scavs dressed in police uniform (Reshala's bodyguards)",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25b6be86f77444001e1b89",
                name: "The Survivalist Path - Thrifty",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25b6be86f77444001e1b89.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d25beca86f77409dd5cdbb3",
                        description:
                            "Stash an Iskra ration pack in the ZB-016 bunker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5d4b86f774784e1b9c45",
                            name: "Iskra ration pack",
                            iconLink:
                                "https://assets.tarkov.dev/590c5d4b86f774784e1b9c45-icon.webp",
                        },
                    },
                    {
                        id: "5d25beeb86f77443fe45765f",
                        description:
                            "Stash a Bottle of water (0.6L) in the ZB-016 bunker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5448fee04bdc2dbc018b4567",
                            name: "Bottle of water (0.6L)",
                            iconLink:
                                "https://assets.tarkov.dev/5448fee04bdc2dbc018b4567-icon.webp",
                        },
                    },
                    {
                        id: "5d2deedc86f77459121c3118",
                        description:
                            "Stash an Iskra ration pack in the ZB-014 bunker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5d4b86f774784e1b9c45",
                            name: "Iskra ration pack",
                            iconLink:
                                "https://assets.tarkov.dev/590c5d4b86f774784e1b9c45-icon.webp",
                        },
                    },
                    {
                        id: "5d2defc586f774591510e6b9",
                        description:
                            "Stash a Bottle of water (0.6L) in the ZB-014 bunker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5448fee04bdc2dbc018b4567",
                            name: "Bottle of water (0.6L)",
                            iconLink:
                                "https://assets.tarkov.dev/5448fee04bdc2dbc018b4567-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25e2a986f77409dd5cdf2a",
                name: "The Survivalist Path - Combat Medic",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2a986f77409dd5cdf2a.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d2605ef86f77469ef0f7622",
                        description: "Reach the required Vitality skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "5d25e2d886f77442734d335e",
                name: "The Huntsman Path - Controller",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2d886f77442734d335e.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d307fc886f77447f15f5b23",
                        description:
                            "Eliminate PMC operatives while they are suffering from the stun effect",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc4776586f774512d07cf05",
                name: "The Tarkov Shooter - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc4776586f774512d07cf05.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc850d186f7747213700892",
                        description:
                            "Eliminate Scavs from over 40 meters away while using a bolt-action rifle with iron sights",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc480a686f7741af0342e29",
                name: "The Tarkov Shooter - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc480a686f7741af0342e29.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "657b0567ec71635f16471dd2",
                        description:
                            "Eliminate PMC operatives from over 80 meters away while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc479e586f7747f376c7da3",
                name: "The Tarkov Shooter - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc479e586f7747f376c7da3.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bd983d886f7747ba73fc246",
                        description:
                            "Shoot any target in the legs from over 40 meters away while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5bd9944f86f774035c4877f3",
                        description:
                            "Shoot any target in the head from over 40 meters away while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc4826c86f774106d22d88b",
                name: "The Tarkov Shooter - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc4826c86f774106d22d88b.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc84f7a86f774294c2f6862",
                        description:
                            "Eliminate Scavs while using a bolt-action rifle in the time period of 21:00-05:00 on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc47dbf86f7741ee74e93b9",
                name: "The Tarkov Shooter - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc47dbf86f7741ee74e93b9.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc47e3e86f7741e6b2f3332",
                        description:
                            "Eliminate PMC operatives from less than 25 meters away while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc4856986f77454c317bea7",
                name: "The Tarkov Shooter - Part 7",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc4856986f77454c317bea7.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc485b586f774726473a858",
                        description:
                            "Eliminate PMC operatives from over 45 meters away while using a suppressed bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc4893c86f774626f5ebf3e",
                name: "The Tarkov Shooter - Part 8",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc4893c86f774626f5ebf3e.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc48aed86f77452c947ce67",
                        description:
                            "Eliminate PMC operatives with a headshot without dying while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5bc4836986f7740c0152911c",
                name: "The Tarkov Shooter - Part 6",
                taskImageLink:
                    "https://assets.tarkov.dev/5bc4836986f7740c0152911c.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5bc483ba86f77415034ba8d0",
                        description:
                            "Eliminate Sniper Scavs while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e2b486f77409de05bba0",
                name: "The Huntsman Path - Secured Perimeter",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2b486f77409de05bba0.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 2,
                objectives: [
                    {
                        id: "5d26143c86f77469ef0f894c",
                        description:
                            "Eliminate PMC operatives in the office area (any floor) on Factory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "59674cd986f7744ab26e32f2",
                name: "Shootout Picnic",
                taskImageLink:
                    "https://assets.tarkov.dev/59674cd986f7744ab26e32f2.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 3,
                objectives: [
                    {
                        id: "5cb31b6188a450159d330a18",
                        description: "Eliminate Scavs on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "59689ee586f7740d1570bbd5",
                name: "Sanitary Standards - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/59689ee586f7740d1570bbd5.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 4,
                objectives: [
                    {
                        id: "5ca6026286f77446d87abec3",
                        description:
                            "Gain access to the locked pumping station on Factory",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5cb6f32986f7746ef55e17a0",
                        description: "Find Gas analyzer in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3efd86f77437d351a25b",
                            name: "Gas analyzer",
                            iconLink:
                                "https://assets.tarkov.dev/590a3efd86f77437d351a25b-icon.webp",
                        },
                    },
                    {
                        id: "59689f7586f7740d14064726",
                        description: "Hand over the Gas analyzer",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3efd86f77437d351a25b",
                            name: "Gas analyzer",
                            iconLink:
                                "https://assets.tarkov.dev/590a3efd86f77437d351a25b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "596b36c586f77450d6045ad2",
                name: "Supplier",
                taskImageLink:
                    "https://assets.tarkov.dev/596b36c586f77450d6045ad2.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "597867e986f7741b265c6bd3",
                        description:
                            "Hand over the found in raid BNTI Module-3M body armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7635f86f7742cbf2c1095",
                            name: "BNTI Module-3M body armor",
                            iconLink:
                                "https://assets.tarkov.dev/59e7635f86f7742cbf2c1095-icon.webp",
                        },
                    },
                    {
                        id: "5ab8d44c86f7745b2325bd0c",
                        description:
                            "Hand over the found in raid TOZ-106 shotgun",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5a38e6bac4a2826c6e06d79b",
                            name: "TOZ-106 20ga bolt-action shotgun",
                            iconLink:
                                "https://assets.tarkov.dev/5a38e6bac4a2826c6e06d79b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5fd9fad9c1ce6b1a3b486d00",
                name: "Search Mission",
                taskImageLink:
                    "https://assets.tarkov.dev/5fd9fad9c1ce6b1a3b486d00.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "5fd9fad9c1ce6b1a3b486d03",
                        description: "Locate Prapor's missing convoy on Woods",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5fd9fad9c1ce6b1a3b486d05",
                        description: "Locate the temporary USEC camp",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5fd9fad9c1ce6b1a3b486d0d",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ac2426c86f774138762edfe",
                name: "Gunsmith - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac2426c86f774138762edfe.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "5accd9b686f774112d7173d1",
                        description:
                            "Modify an AKS-74U to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "59674eb386f774539f14813a",
                name: "Delivery from the Past",
                taskImageLink:
                    "https://assets.tarkov.dev/59674eb386f774539f14813a.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "5968929e86f7740d121082d3",
                        description:
                            "Obtain the secure folder in the Tarcone Director's office at the Customs terminal warehouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "59674fe586f7744f4e358aa2",
                        description:
                            "Stash the package in the Factory break room (2nd floor near Gate 3)",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5977784486f774285402cf52",
                        description: "Survive and extract from Factory",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "63a88045abf76d719f42d715",
                name: "The Delicious Sausage",
                taskImageLink:
                    "https://assets.tarkov.dev/63a88045abf76d719f42d715.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "63a98cfbc31b00242d28a95b",
                        description:
                            "Scout the Shestyorochka store at Nikitskaya street",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a98d24655ec5555b4aa9e7",
                        description: "Scout the Sparja store at Primorsky ave",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a98d39da7999196148ba3a",
                        description: "Scout the Sparja store in Pinewood hotel",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a98d60c0f61a5d8731cd9f",
                        description: "Scout the Goshan store in Concordia",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a98cdf655ec5555b4aa9e6",
                        description:
                            "Hand over the found in raid Salty Dog beef sausage",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "635a758bfefc88a93f021b8a",
                            name: "Salty Dog beef sausage",
                            iconLink:
                                "https://assets.tarkov.dev/635a758bfefc88a93f021b8a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "59c124d686f774189b3c843f",
                name: "BP Depot",
                taskImageLink:
                    "https://assets.tarkov.dev/59c124d686f774189b3c843f.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 5,
                objectives: [
                    {
                        id: "59c128b986f77415037680df",
                        description:
                            "Locate and mark the first fuel tank with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "59c128cc86f774189b3c84b5",
                        description:
                            "Locate and mark the second fuel tank with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "59c128d886f77414fe7f1a64",
                        description:
                            "Locate and mark the third fuel tank with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "59c128f386f774189b3c84bb",
                        description:
                            "Locate and mark the fourth fuel tank with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c92184386f7746afa2e7840",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "59689fbd86f7740d137ebfc4",
                name: "Operation Aquarius - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/59689fbd86f7740d137ebfc4.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 6,
                objectives: [
                    {
                        id: "5a3fb73b86f77458e0324376",
                        description:
                            "Locate the water stockpile hidden inside of the dorms on Customs",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5968a06486f7740d14064728",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5967530a86f77462ba22226b",
                name: "Bad Rep Evidence",
                taskImageLink:
                    "https://assets.tarkov.dev/5967530a86f77462ba22226b.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 6,
                objectives: [
                    {
                        id: "5a3fbdb086f7745a554f0c31",
                        description:
                            "Gain access to the locked room in the office hallway on the third floor on Factory",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5968941f86f7740d1570bbd2",
                        description: "Obtain the Portable bunkhouse key",
                        optional: true,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5938144586f77473c2087145",
                            name: "Portable bunkhouse key",
                            iconLink:
                                "https://assets.tarkov.dev/5938144586f77473c2087145-icon.webp",
                        },
                    },
                    {
                        id: "5968943f86f7740d137ebfc2",
                        description:
                            "Obtain Secure Folder 0031 in the bunkhouse on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5968948986f7740d121082d4",
                        description: "Hand over the folder",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "596762ec86f77426d3687a87",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5968eb3186f7741dde183a4d",
                name: "Operation Aquarius - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5968eb3186f7741dde183a4d.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 6,
                objectives: [
                    {
                        id: "5968eb9b86f7741ddb481543",
                        description: "Eliminate Scavs on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5ac2428686f77412450b42bf",
                name: "Gunsmith - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac2428686f77412450b42bf.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 7,
                objectives: [
                    {
                        id: "5accde3686f7740cea1b7ec2",
                        description:
                            "Modify an MP5 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "596b43fb86f77457ca186186",
                name: "The Extortionist",
                taskImageLink:
                    "https://assets.tarkov.dev/596b43fb86f77457ca186186.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 7,
                objectives: [
                    {
                        id: "596b44b686f77457cb50ecca",
                        description: "Obtain the valuable cargo on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "596b450986f7745a7e510b54",
                        description: "Hand over the valuable cargo",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a3fbabc86f774231d75afbe",
                        description: "Locate the messenger's body",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a3fbab086f77421593d9bf0",
                        description:
                            "Locate the place where the messenger hid the cargo",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "596a204686f774576d4c95de",
                name: "Sanitary Standards - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/596a204686f774576d4c95de.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 8,
                objectives: [
                    {
                        id: "5ec1398886f7561e047757a5",
                        description: "Find Gas analyzers in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3efd86f77437d351a25b",
                            name: "Gas analyzer",
                            iconLink:
                                "https://assets.tarkov.dev/590a3efd86f77437d351a25b-icon.webp",
                        },
                    },
                    {
                        id: "596a20ac86f7741ddf17dbf4",
                        description: "Hand over the gas analyzers",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3efd86f77437d351a25b",
                            name: "Gas analyzer",
                            iconLink:
                                "https://assets.tarkov.dev/590a3efd86f77437d351a25b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "596b455186f77457cb50eccb",
                name: "Stirrup",
                taskImageLink:
                    "https://assets.tarkov.dev/596b455186f77457cb50eccb.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 8,
                objectives: [
                    {
                        id: "5c9b5e3f86f7744aab7329b5",
                        description:
                            "Eliminate PMC operatives while using pistols",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5979ed3886f77431307dc512",
                name: "What’s on the Flash Drive?",
                taskImageLink:
                    "https://assets.tarkov.dev/5979ed3886f77431307dc512.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 8,
                objectives: [
                    {
                        id: "5979ee2986f7743ec214c7a4",
                        description: "Find Secure Flash drives in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c621186f774138d11ea29",
                            name: "Secure Flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/590c621186f774138d11ea29-icon.webp",
                        },
                    },
                    {
                        id: "5979ee4586f7743ec214c7a5",
                        description: "Hand over the Flash drives",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c621186f774138d11ea29",
                            name: "Secure Flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/590c621186f774138d11ea29-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5979eee086f774311955e614",
                name: "Golden Swag",
                taskImageLink:
                    "https://assets.tarkov.dev/5979eee086f774311955e614.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 8,
                objectives: [
                    {
                        id: "5979ef4586f77431307dc513",
                        description: "Find the Golden Zibbo lighter on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5979ef7986f77431307dc514",
                        description:
                            "Stash the lighter in the bunkhouse at the trailer parking lot on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5969f90786f77420d2328015",
                name: "Painkiller",
                taskImageLink:
                    "https://assets.tarkov.dev/5969f90786f77420d2328015.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 8,
                objectives: [
                    {
                        id: "5969f98286f774576d4c9542",
                        description: "Find Morphine injectors in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb3f34bdc2d03748b456a",
                            name: "Morphine injector",
                            iconLink:
                                "https://assets.tarkov.dev/544fb3f34bdc2d03748b456a-icon.webp",
                        },
                    },
                    {
                        id: "5969f99286f77456630ea442",
                        description: "Hand over the injectors",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb3f34bdc2d03748b456a",
                            name: "Morphine injector",
                            iconLink:
                                "https://assets.tarkov.dev/544fb3f34bdc2d03748b456a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a27c99a86f7747d2c6bdd8e",
                name: "Friend From the West - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27c99a86f7747d2c6bdd8e.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 9,
                objectives: [
                    {
                        id: "5be0198686f774595412d9c4",
                        description: "Eliminate USEC PMC operatives",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5ec137962d5b8510d548aef1",
                        description: "Obtain USEC PMC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                    {
                        id: "5ec137dcc367fc6781104613",
                        description: "Hand over the dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "59675d6c86f7740a842fc482",
                name: "Ice Cream Cones",
                taskImageLink:
                    "https://assets.tarkov.dev/59675d6c86f7740a842fc482.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 9,
                objectives: [
                    {
                        id: "5968ed3186f77420d2328013",
                        description:
                            "Find AK-74 5.45x39 6L31 60-round magazines in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "55d482194bdc2d1d4e8b456b",
                            name: "AK-74 5.45x39 6L31 60-round magazine",
                            iconLink:
                                "https://assets.tarkov.dev/55d482194bdc2d1d4e8b456b-icon.webp",
                        },
                    },
                    {
                        id: "59675e1d86f77414b07f137d",
                        description: "Hand over the magazines",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "55d482194bdc2d1d4e8b456b",
                            name: "AK-74 5.45x39 6L31 60-round magazine",
                            iconLink:
                                "https://assets.tarkov.dev/55d482194bdc2d1d4e8b456b-icon.webp",
                        },
                    },
                    {
                        id: "5967938c86f77468cf5f9f54",
                        description:
                            "Find the key to the bunker in the TerraGroup employee's dorm room",
                        optional: true,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "591afe0186f77431bd616a11",
                            name: "ZB-014 key",
                            iconLink:
                                "https://assets.tarkov.dev/591afe0186f77431bd616a11-icon.webp",
                        },
                    },
                    {
                        id: "5a3fbe3a86f77414422e0d9b",
                        description: "Locate the locked bunker on Woods",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5a27d2af86f7744e1115b323",
                name: "Friend From the West - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27d2af86f7744e1115b323.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 9,
                objectives: [
                    {
                        id: "5a27d34586f7744e1115b327",
                        description: "Hand over USD",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5696686a4bdc2da3298b456a",
                            name: "Dollars",
                            iconLink:
                                "https://assets.tarkov.dev/5696686a4bdc2da3298b456a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "639872f9decada40426d3447",
                name: "Gunsmith - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/639872f9decada40426d3447.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 9,
                objectives: [
                    {
                        id: "63987404e5163c24b3029356",
                        description:
                            "Modify an OP-SKS to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5ede55112c95834b583f052a",
                name: "The Bunker - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ede55112c95834b583f052a.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5ee8eea538ca5b3b4f3c4647",
                        description: "Locate the underground bunker on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee8eecc0b4ef7326256c660",
                        description:
                            "Locate the control room in the underground bunker on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee0e5a8c321a77fc55084d2",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639136e84ed9512be67647db",
                name: "Cease Fire!",
                taskImageLink:
                    "https://assets.tarkov.dev/639136e84ed9512be67647db.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "63929101744e452011470818",
                        description:
                            "Survive and extract from Streets of Tarkov through Klimov Street",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5979f9ba86f7740f6c3fe9f2",
                name: "Chemical - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5979f9ba86f7740f6c3fe9f2.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5979fc2686f77426d702a0f2",
                        description:
                            "Obtain information about the Deputy Chief’s past life on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5979fc7e86f77426d702a0f4",
                        description: "Hand over the information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5979fc5386f77426d702a0f3",
                        description:
                            "Obtain items that can help with the investigation",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5780cfa52459777dfb276eb1",
                            name: "Dorm room 220 key",
                            iconLink:
                                "https://assets.tarkov.dev/5780cfa52459777dfb276eb1-icon.webp",
                        },
                    },
                    {
                        id: "5979fc9286f77426d702a0f5",
                        description: "Hand over the items",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5780cfa52459777dfb276eb1",
                            name: "Dorm room 220 key",
                            iconLink:
                                "https://assets.tarkov.dev/5780cfa52459777dfb276eb1-icon.webp",
                        },
                    },
                    {
                        id: "5a3fbbfd86f77459d52a16a8",
                        description:
                            "Locate the sleeping place of the former Deputy Chief of Security on Customs",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5969f9e986f7741dde183a50",
                name: "Pharmacist",
                taskImageLink:
                    "https://assets.tarkov.dev/5969f9e986f7741dde183a50.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5969fa4886f7741ddb481544",
                        description:
                            "Obtain the case containing the device on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5969fa8986f7741ddc2d3154",
                        description: "Hand over the case",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a3fb8f686f7742384533f10",
                        description: "Locate the paramedic’s car on Customs",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a3fb92286f77422b46cdb18",
                        description:
                            "Find a way inside the two-story dorm room 114 on Customs",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5ae3267986f7742a413592fe",
                name: "Gunsmith - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae3267986f7742a413592fe.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5ae34b8b86f7741e5b1e5d48",
                        description:
                            "Modify a Remington Model 870 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5a27b75b86f7742e97191958",
                name: "Fishing Gear",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b75b86f7742e97191958.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5a3ba11786f7742c9d4f5d29",
                        description:
                            "Locate the boat hidden next to the breakwater on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a27d81a86f774472a6e0456",
                        description: "Stash the SV-98 sniper rifle in the boat",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "55801eed4bdc2d89578b4588",
                            name: "SV-98 7.62x54R bolt-action sniper rifle",
                            iconLink:
                                "https://assets.tarkov.dev/55801eed4bdc2d89578b4588-icon.webp",
                        },
                    },
                    {
                        id: "5a27d85286f77448d82084e7",
                        description: "Stash the multitool in the boat",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb5454bdc2df8738b456a",
                            name: "Leatherman Multitool",
                            iconLink:
                                "https://assets.tarkov.dev/544fb5454bdc2df8738b456a-icon.webp",
                        },
                    },
                    {
                        id: "5c93794086f7740a13567867",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "59675ea386f77414b32bded2",
                name: "Postman Pat - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/59675ea386f77414b32bded2.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "596895f986f7740d14064722",
                        description:
                            "Obtain the letter on the messenger's body on Factory",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5968962686f7740e7266d973",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "596896c386f7740d1570bbd4",
                        description: "Hand over the letter to Therapist",
                        optional: false,
                        __typename: "TaskObjectiveTaskStatus",
                    },
                ],
            },
            {
                id: "597a0b2986f77426d66c0633",
                name: "Chemical - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/597a0b2986f77426d66c0633.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "597a0be986f774273b74f673",
                        description:
                            "Find any evidence that could help with the investigation on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "597a0bf886f7742717106d13",
                        description: "Hand over the evidence",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "597a0bb486f77426d66c0634",
                        description:
                            "Find any information that could help with the investigation on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "597a0bdb86f7742717106d12",
                        description: "Hand over the info",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a27b7a786f774579c3eb376",
                name: "Tigr Safari",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b7a786f774579c3eb376.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5a27e73f86f7740fb275c94b",
                        description:
                            "Locate and mark the first Tigr vehicle with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a27e75886f7740aef4a9157",
                        description:
                            "Locate and mark the second Tigr vehicle with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a29653986f77406a3435b26",
                        description:
                            "Locate and mark the third Tigr vehicle with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c9394a986f7741228714be3",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27b7d686f77460d847e6a6",
                name: "Scrap Metal",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b7d686f77460d847e6a6.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5a37e8ae86f77415076b401d",
                        description:
                            "Locate and mark the first T-90 tank with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a27fc8186f7746371546243",
                        description:
                            "Locate and mark the second T-90 tank with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a27fc9686f774675744bb60",
                        description:
                            "Locate and mark the third T-90 tank with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c939d0e86f774185203c4c3",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5979f8bb86f7743ec214c7a6",
                name: "Polikhim Hobo",
                taskImageLink:
                    "https://assets.tarkov.dev/5979f8bb86f7743ec214c7a6.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5b0e766b86f7746bfa618964",
                        description: "Eliminate Scavs on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "596760e186f7741e11214d58",
                name: "Postman Pat - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/596760e186f7741e11214d58.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "5968975586f7740e7266d974",
                        description:
                            "Hand over the letter from Prapor's messenger",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "596a1e6c86f7741ddc2d3206",
                name: "General Wares",
                taskImageLink:
                    "https://assets.tarkov.dev/596a1e6c86f7741ddc2d3206.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "596a1f0486f77456630ea4d2",
                        description: "Find Cans of beef stew (Small) in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 15,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347d7224597744596b4e72",
                            name: "Can of beef stew (Small)",
                            iconLink:
                                "https://assets.tarkov.dev/57347d7224597744596b4e72-icon.webp",
                        },
                    },
                    {
                        id: "596a1f1586f77420d2328077",
                        description: "Hand over the cans",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 15,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347d7224597744596b4e72",
                            name: "Can of beef stew (Small)",
                            iconLink:
                                "https://assets.tarkov.dev/57347d7224597744596b4e72-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "596a218586f77420d232807c",
                name: "Car Repair",
                taskImageLink:
                    "https://assets.tarkov.dev/596a218586f77420d232807c.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 10,
                objectives: [
                    {
                        id: "596b46d886f77457ca186189",
                        description: "Find Car batteries in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5733279d245977289b77ec24",
                            name: "Car battery",
                            iconLink:
                                "https://assets.tarkov.dev/5733279d245977289b77ec24-icon.webp",
                        },
                    },
                    {
                        id: "596b46ec86f77457c7006f89",
                        description: "Find Spark plugs in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 8,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3c0a86f774385a33c450",
                            name: "Spark plug",
                            iconLink:
                                "https://assets.tarkov.dev/590a3c0a86f774385a33c450-icon.webp",
                        },
                    },
                    {
                        id: "596b470c86f77457ca18618a",
                        description: "Hand over the batteries",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5733279d245977289b77ec24",
                            name: "Car battery",
                            iconLink:
                                "https://assets.tarkov.dev/5733279d245977289b77ec24-icon.webp",
                        },
                    },
                    {
                        id: "596b472686f77457c7006f8a",
                        description: "Hand over the spark plugs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 8,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3c0a86f774385a33c450",
                            name: "Spark plug",
                            iconLink:
                                "https://assets.tarkov.dev/590a3c0a86f774385a33c450-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "597a0e5786f77426d66c0636",
                name: "Chemical - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/597a0e5786f77426d66c0636.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "597a15b386f774799e5cd152",
                        description:
                            "Obtain the chemical-filled syringe hidden in Factory",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "597a15c386f77405ba6887d2",
                        description: "Hand over the syringe",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a27b80086f774429a5d7e20",
                name: "Eagle Eye",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b80086f774429a5d7e20.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "5a3ba34286f7744eb240406a",
                        description:
                            "Locate the first UAV crash site on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a27ffb186f774192932b3d5",
                        description:
                            "Obtain the SAS disk from the first crashed drone",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a27ffc786f77415ca58ae47",
                        description: "Hand over the first SAS disk",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a3ba3b086f7745ab1081101",
                        description:
                            "Locate the second UAV crash site on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a294f1686f774340c7b7e4a",
                        description:
                            "Obtain the SAS disk from the second crashed drone",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a294f3386f77433e923f9cd",
                        description: "Hand over the second SAS disk",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "597a0f5686f774273b74f676",
                name: "Chemical - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/597a0f5686f774273b74f676.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "5a3fbc9586f77459d52a16c4",
                        description:
                            "Locate the transport with the chemicals on Customs",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "59b242ea86f7741e6e0e7a86",
                        description: "Mark the vehicle with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "59b95de686f77418457056ef",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "59c93e8e86f7742a406989c4",
                name: "Loyalty Buyout",
                taskImageLink:
                    "https://assets.tarkov.dev/59c93e8e86f7742a406989c4.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "596a10d886f7741ddf11dbf0",
                        description: "Hand over RUB",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1000000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5449016a4bdc2d6f028b456f",
                            name: "Roubles",
                            iconLink:
                                "https://assets.tarkov.dev/5449016a4bdc2d6f028b456f-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a27b87686f77460de0252a8",
                name: "Humanitarian Supplies",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b87686f77460de0252a8.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "5a28017786f77452f6318b1b",
                        description:
                            "Locate and mark the first truck with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a2801f986f774531b679875",
                        description:
                            "Locate and mark the second truck with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5cb5fd3d86f7746ef64ca33c",
                        description: "Obtain MRE ration packs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5f0d86f77413997acfab",
                            name: "MRE ration pack",
                            iconLink:
                                "https://assets.tarkov.dev/590c5f0d86f77413997acfab-icon.webp",
                        },
                    },
                    {
                        id: "5a28023f86f774528903dd1e",
                        description: "Hand over the ration packs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5f0d86f77413997acfab",
                            name: "MRE ration pack",
                            iconLink:
                                "https://assets.tarkov.dev/590c5f0d86f77413997acfab-icon.webp",
                        },
                    },
                    {
                        id: "5c939f2186f774122b6e7854",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c9a170386f77438c80164eb",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (MF-UNTAR body armor and UNTAR helmet) on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5a3ba47986f7744df8667505",
                        description:
                            "Locate the first truck that was holding the lost UN cargo on Shoreline",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a3ba4ba86f7744df759b1e5",
                        description:
                            "Locate the second truck that was holding the lost UN cargo on Shoreline",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "59ca1a6286f774509a270942",
                name: "No Offence",
                taskImageLink:
                    "https://assets.tarkov.dev/59ca1a6286f774509a270942.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "59ca1b1b86f7741b067dba42",
                        description: "Obtain M67 hand grenades",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "58d3db5386f77426186285a0",
                            name: "M67 hand grenade",
                            iconLink:
                                "https://assets.tarkov.dev/58d3db5386f77426186285a0-icon.webp",
                        },
                    },
                    {
                        id: "59ca1b4f86f774509a270943",
                        description: "Hand over the grenades",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "58d3db5386f77426186285a0",
                            name: "M67 hand grenade",
                            iconLink:
                                "https://assets.tarkov.dev/58d3db5386f77426186285a0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "597a171586f77405ba6887d3",
                name: "Big Customer",
                taskImageLink:
                    "https://assets.tarkov.dev/597a171586f77405ba6887d3.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "5a3fbec386f77413bd5fc20a",
                        description:
                            "Locate the transport with the chemicals on Customs",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5998360886f77456936817f3",
                        description: "Mark the vehicle with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "597a178786f774799e5cd155",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "597a160786f77477531d39d2",
                name: "Out of Curiosity",
                taskImageLink:
                    "https://assets.tarkov.dev/597a160786f77477531d39d2.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "5a3fc1f286f7744ccc15d643",
                        description:
                            "Locate the transport with the chemicals on Customs",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5998366886f77455853b2d9f",
                        description: "Mark the vehicle with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "597a166d86f774779c70e8a4",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "59c9392986f7742f6923add2",
                name: "Trust Regain",
                taskImageLink:
                    "https://assets.tarkov.dev/59c9392986f7742f6923add2.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 11,
                objectives: [
                    {
                        id: "59c93bdb86f7742a19140434",
                        description: "Obtain the Dorm room 303 key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "593aa4be86f77457f56379f8",
                            name: "Dorm room 303 key",
                            iconLink:
                                "https://assets.tarkov.dev/593aa4be86f77457f56379f8-icon.webp",
                        },
                    },
                    {
                        id: "59c93c1986f7742a424eaa33",
                        description: "Obtain the ZB-014 key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "591afe0186f77431bd616a11",
                            name: "ZB-014 key",
                            iconLink:
                                "https://assets.tarkov.dev/591afe0186f77431bd616a11-icon.webp",
                        },
                    },
                    {
                        id: "59c93cbb86f7742a19140435",
                        description: "Obtain the Military checkpoint key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5913915886f774123603c392",
                            name: "Military checkpoint key",
                            iconLink:
                                "https://assets.tarkov.dev/5913915886f774123603c392-icon.webp",
                        },
                    },
                    {
                        id: "59c93cea86f7742a08623162",
                        description: "Obtain the Gas station storage room key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5913877a86f774432f15d444",
                            name: "Gas station storage room key",
                            iconLink:
                                "https://assets.tarkov.dev/5913877a86f774432f15d444-icon.webp",
                        },
                    },
                    {
                        id: "59c93d4e86f774496b698953",
                        description: "Hand over the Dorm room 303 key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "593aa4be86f77457f56379f8",
                            name: "Dorm room 303 key",
                            iconLink:
                                "https://assets.tarkov.dev/593aa4be86f77457f56379f8-icon.webp",
                        },
                    },
                    {
                        id: "59c93d8086f7742a19140436",
                        description: "Hand over the ZB-014 key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "591afe0186f77431bd616a11",
                            name: "ZB-014 key",
                            iconLink:
                                "https://assets.tarkov.dev/591afe0186f77431bd616a11-icon.webp",
                        },
                    },
                    {
                        id: "59c93d9c86f7742f6923add3",
                        description: "Hand over the Military checkpoint key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5913915886f774123603c392",
                            name: "Military checkpoint key",
                            iconLink:
                                "https://assets.tarkov.dev/5913915886f774123603c392-icon.webp",
                        },
                    },
                    {
                        id: "59c93dbf86f7742a424eaa34",
                        description:
                            "Hand over the Gas station storage room key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5913877a86f774432f15d444",
                            name: "Gas station storage room key",
                            iconLink:
                                "https://assets.tarkov.dev/5913877a86f774432f15d444-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac345dc86f774288030817f",
                name: "Farming - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac345dc86f774288030817f.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5ac7a4ba86f77409f3423628",
                        description:
                            "Fix the first control board with a Toolset on Factory",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c2e1186f77425357b6124",
                            name: "Toolset",
                            iconLink:
                                "https://assets.tarkov.dev/590c2e1186f77425357b6124-icon.webp",
                        },
                    },
                    {
                        id: "5ac7a51a86f774738a4ffc96",
                        description:
                            "Fix the second control board with a Toolset on Factory",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c2e1186f77425357b6124",
                            name: "Toolset",
                            iconLink:
                                "https://assets.tarkov.dev/590c2e1186f77425357b6124-icon.webp",
                        },
                    },
                    {
                        id: "5ac7a5d586f774383111ee63",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ac3467986f7741d6224abc2",
                name: "Signal - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3467986f7741d6224abc2.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5ac5e0fa86f77431c305d243",
                        description:
                            "Locate the first signal source on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac5e13586f7746074388f93",
                        description:
                            "Locate the second signal source on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac5e18c86f7743ebd6c9575",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639135d89444fb141f4e6eea",
                name: "Population Census",
                taskImageLink:
                    "https://assets.tarkov.dev/639135d89444fb141f4e6eea.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "639135d89444fb141f4e6eeb",
                        description:
                            "Obtain the journal containing resident details on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639135d89444fb141f4e6eec",
                        description: "Hand over the journal",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a03153686f77442d90e2171",
                name: "Spa Tour - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a03153686f77442d90e2171.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5c9a17c686f7747dbe2da3c1",
                        description:
                            "Eliminate Scavs with headshots while using a 12ga shotgun on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5a27b9de86f77464e5044585",
                name: "The Cult - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27b9de86f77464e5044585.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a3ba51d86f7743af1475c3a",
                        description:
                            "Locate the missing informant on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a28051286f7740eb10bac04",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ac3460c86f7742880308185",
                name: "Farming - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3460c86f7742880308185.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5ac502a786f7740bde1b000c",
                        description: "Find Power cords in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e36c6f86f774176c10a2a7",
                            name: "Power cord",
                            iconLink:
                                "https://assets.tarkov.dev/59e36c6f86f774176c10a2a7-icon.webp",
                        },
                    },
                    {
                        id: "5ac5055a86f7745cae22b582",
                        description: "Hand over the cords",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e36c6f86f774176c10a2a7",
                            name: "Power cord",
                            iconLink:
                                "https://assets.tarkov.dev/59e36c6f86f774176c10a2a7-icon.webp",
                        },
                    },
                    {
                        id: "5ac505c386f7740be0424d19",
                        description: "Find T-Shaped Plugs in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347cd0245977445a2d6ff1",
                            name: "T-Shaped plug",
                            iconLink:
                                "https://assets.tarkov.dev/57347cd0245977445a2d6ff1-icon.webp",
                        },
                    },
                    {
                        id: "5ac505e186f7740bdf2ceabe",
                        description: "Hand over the plugs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347cd0245977445a2d6ff1",
                            name: "T-Shaped plug",
                            iconLink:
                                "https://assets.tarkov.dev/57347cd0245977445a2d6ff1-icon.webp",
                        },
                    },
                    {
                        id: "5ac5061386f77417e429ce7a",
                        description: "Find Printed circuit boards in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3b0486f7743954552bdb",
                            name: "Printed circuit board",
                            iconLink:
                                "https://assets.tarkov.dev/590a3b0486f7743954552bdb-icon.webp",
                        },
                    },
                    {
                        id: "5ac5062586f774587c327395",
                        description: "Hand over the PCBs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3b0486f7743954552bdb",
                            name: "Printed circuit board",
                            iconLink:
                                "https://assets.tarkov.dev/590a3b0486f7743954552bdb-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac3477486f7741d651d6885",
                name: "Scout",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3477486f7741d651d6885.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5ac61a8a86f7743a8d663c77",
                        description: "Locate the first Factory extraction",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac61ab986f7746e352cec8c",
                        description: "Locate the second Factory extraction",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac61adf86f774741c1bf096",
                        description: "Locate the third Factory extraction",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a865ce1943b749b5021f86",
                        description: "Locate the fourth Factory extraction",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac61b1486f7743a8f30fc84",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ac3475486f7741d6224abd3",
                name: "Bad Habit",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3475486f7741d6224abd3.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5ac5ee9986f7746e7a509a26",
                        description: "Find Malboro cigarettes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573476d324597737da2adc13",
                            name: "Malboro Cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/573476d324597737da2adc13-icon.webp",
                        },
                    },
                    {
                        id: "5ac5eee986f77401fd341c9e",
                        description: "Hand over the Malboro cigarettes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573476d324597737da2adc13",
                            name: "Malboro Cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/573476d324597737da2adc13-icon.webp",
                        },
                    },
                    {
                        id: "5ac5ef2a86f7741c5804f9f5",
                        description: "Find Strike cigarettes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734770f24597738025ee254",
                            name: "Strike Cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/5734770f24597738025ee254-icon.webp",
                        },
                    },
                    {
                        id: "5ac5ef5686f77416ca60f644",
                        description: "Hand over the Strike cigarettes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734770f24597738025ee254",
                            name: "Strike Cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/5734770f24597738025ee254-icon.webp",
                        },
                    },
                    {
                        id: "5ac5ef9886f7746e7a509a2d",
                        description: "Find Wilston cigarettes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573476f124597737e04bf328",
                            name: "Wilston cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/573476f124597737e04bf328-icon.webp",
                        },
                    },
                    {
                        id: "5ac5eff886f7740f43322559",
                        description: "Hand over the Wilston cigarettes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573476f124597737e04bf328",
                            name: "Wilston cigarettes",
                            iconLink:
                                "https://assets.tarkov.dev/573476f124597737e04bf328-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac346a886f7744e1b083d67",
                name: "Signal - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac346a886f7744e1b083d67.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5cb6f81d86f7740e9d452683",
                        description: "Find PC CPUs in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573477e124597737dd42e191",
                            name: "PC CPU",
                            iconLink:
                                "https://assets.tarkov.dev/573477e124597737dd42e191-icon.webp",
                        },
                    },
                    {
                        id: "5ac5e79986f7747398341847",
                        description: "Hand over the CPUs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573477e124597737dd42e191",
                            name: "PC CPU",
                            iconLink:
                                "https://assets.tarkov.dev/573477e124597737dd42e191-icon.webp",
                        },
                    },
                    {
                        id: "5cb6f88d86f7747d215f09c1",
                        description: "Find Rechargeable batteries in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a358486f77429692b2790",
                            name: "Rechargeable battery",
                            iconLink:
                                "https://assets.tarkov.dev/590a358486f77429692b2790-icon.webp",
                        },
                    },
                    {
                        id: "5ac5e88e86f7741c5804f9db",
                        description: "Hand over the batteries",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a358486f77429692b2790",
                            name: "Rechargeable battery",
                            iconLink:
                                "https://assets.tarkov.dev/590a358486f77429692b2790-icon.webp",
                        },
                    },
                    {
                        id: "5cb6f8de86f7740e9d452685",
                        description: "Find Printed circuit boards in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3b0486f7743954552bdb",
                            name: "Printed circuit board",
                            iconLink:
                                "https://assets.tarkov.dev/590a3b0486f7743954552bdb-icon.webp",
                        },
                    },
                    {
                        id: "5ac5e98886f77479bc6ca201",
                        description: "Hand over the PCBs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3b0486f7743954552bdb",
                            name: "Printed circuit board",
                            iconLink:
                                "https://assets.tarkov.dev/590a3b0486f7743954552bdb-icon.webp",
                        },
                    },
                    {
                        id: "5cb6f9c586f7740ace254c44",
                        description: "Find Broken GPhone smartphones in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "56742c324bdc2d150f8b456d",
                            name: "Broken GPhone smartphone",
                            iconLink:
                                "https://assets.tarkov.dev/56742c324bdc2d150f8b456d-icon.webp",
                        },
                    },
                    {
                        id: "5ac5ea0586f774609f36280c",
                        description: "Hand over the phones",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "56742c324bdc2d150f8b456d",
                            name: "Broken GPhone smartphone",
                            iconLink:
                                "https://assets.tarkov.dev/56742c324bdc2d150f8b456d-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "626bd75e47ea7f506e5493c5",
                name: "Broadcast - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/626bd75e47ea7f506e5493c5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "63ac232087413d64ae0ac23c",
                        description:
                            "Locate the hidden recording studio on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "626c3158a371ee3a7a3514cc",
                        description: "Place a Signal Jammer inside the studio",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: [
                            [
                                {
                                    id: "62987da96188c076bc0d8c51",
                                    name: "Operating room key",
                                    iconLink:
                                        "https://assets.tarkov.dev/62987da96188c076bc0d8c51-icon.webp",
                                },
                            ],
                        ],
                        item: {
                            id: "5ac78a9b86f7741cca0bbd8d",
                            name: "Signal Jammer",
                            iconLink:
                                "https://assets.tarkov.dev/5ac78a9b86f7741cca0bbd8d-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a27bb5986f7741dfb660900",
                name: "Cargo X - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bb5986f7741dfb660900.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a3ba7db86f7744f0e568c9c",
                        description:
                            "Locate the hidden TerraGroup cargo on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a37de5486f7741535394d69",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a0327ba86f77456b9154236",
                name: "Spa Tour - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5a0327ba86f77456b9154236.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a03282286f77456b91542ef",
                        description: "Find WD-40 (100ml) in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5bbd86f774785762df04",
                            name: "WD-40 (100ml)",
                            iconLink:
                                "https://assets.tarkov.dev/590c5bbd86f774785762df04-icon.webp",
                        },
                    },
                    {
                        id: "5a03289686f7745dbc6c5063",
                        description: "Hand over the WD-40",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5bbd86f774785762df04",
                            name: "WD-40 (100ml)",
                            iconLink:
                                "https://assets.tarkov.dev/590c5bbd86f774785762df04-icon.webp",
                        },
                    },
                    {
                        id: "5a0328b086f77457a7099ea5",
                        description: "Find Clin window cleaners in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e358a886f7741776641ac3",
                            name: "Clin window cleaner",
                            iconLink:
                                "https://assets.tarkov.dev/59e358a886f7741776641ac3-icon.webp",
                        },
                    },
                    {
                        id: "5a0328cb86f77456b91543b8",
                        description: "Hand over the cleaners",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e358a886f7741776641ac3",
                            name: "Clin window cleaner",
                            iconLink:
                                "https://assets.tarkov.dev/59e358a886f7741776641ac3-icon.webp",
                        },
                    },
                    {
                        id: "5a0328f586f774580168ced4",
                        description: "Find Corrugated hoses in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e35cbb86f7741778269d83",
                            name: "Corrugated hose",
                            iconLink:
                                "https://assets.tarkov.dev/59e35cbb86f7741778269d83-icon.webp",
                        },
                    },
                    {
                        id: "5a03290586f774584d1594c4",
                        description: "Hand over the hoses",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e35cbb86f7741778269d83",
                            name: "Corrugated hose",
                            iconLink:
                                "https://assets.tarkov.dev/59e35cbb86f7741778269d83-icon.webp",
                        },
                    },
                    {
                        id: "5a280b3c86f7741b16366337",
                        description: "Find Ox bleach in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3556c86f7741776641ac2",
                            name: "Ox bleach",
                            iconLink:
                                "https://assets.tarkov.dev/59e3556c86f7741776641ac2-icon.webp",
                        },
                    },
                    {
                        id: "5a280b5486f7741f751bfeea",
                        description: "Hand over the bleach",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3556c86f7741776641ac2",
                            name: "Ox bleach",
                            iconLink:
                                "https://assets.tarkov.dev/59e3556c86f7741776641ac2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a03173786f77451cb427172",
                name: "Spa Tour - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a03173786f77451cb427172.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a0317da86f77451cb427295",
                        description:
                            "Mark the helicopter with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a0325f286f7744384509230",
                        description:
                            "Mark the safe road with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a37d80986f774245c063b69",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27bb3d86f77411ea361a21",
                name: "Cargo X - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bb3d86f77411ea361a21.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a3ba76486f7744d39436da2",
                        description:
                            "Locate the room with reservoirs in the Health Resort",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a2819c886f77460ba564f38",
                        description:
                            "Obtain any information about the second part of the cargo shipment",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a2e966286f7742f6c4f27a6",
                        description: "Hand over the retrieved information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a03296886f774569778596a",
                name: "Spa Tour - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5a03296886f774569778596a.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a3ba62786f7742c9d4f5ee9",
                        description:
                            "Locate the generators in the east wing of the Health Resort",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a3ba65f86f7743af1475f11",
                        description:
                            "Locate the generators in the west wing of the Health Resort",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5c94f65286f77455185027ee",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27bb1e86f7741f27621b7e",
                name: "Cargo X - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bb1e86f7741f27621b7e.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a28183186f774398675d127",
                        description:
                            "Obtain the data in the computer room in the east wing of the Health Resort",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a28184c86f774376e43772a",
                        description: "Hand over the retrieved data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a27ba9586f7741b543d8e85",
                name: "Spa Tour - Part 6",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27ba9586f7741b543d8e85.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a28127b86f7743808504ecc",
                        description: "Hand over USD",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 8000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5696686a4bdc2da3298b456a",
                            name: "Dollars",
                            iconLink:
                                "https://assets.tarkov.dev/5696686a4bdc2da3298b456a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a27bafb86f7741c73584017",
                name: "Spa Tour - Part 7",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bafb86f7741c73584017.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a28151986f77466837984c9",
                        description: "Find Morphine injectors in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb3f34bdc2d03748b456a",
                            name: "Morphine injector",
                            iconLink:
                                "https://assets.tarkov.dev/544fb3f34bdc2d03748b456a-icon.webp",
                        },
                    },
                    {
                        id: "5a28152b86f7740ab40845fb",
                        description: "Hand over the injectors",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "544fb3f34bdc2d03748b456a",
                            name: "Morphine injector",
                            iconLink:
                                "https://assets.tarkov.dev/544fb3f34bdc2d03748b456a-icon.webp",
                        },
                    },
                    {
                        id: "5a28157486f77405822f36c1",
                        description:
                            "Find Alkaline cleaners for heat exchangers in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59faf98186f774067b6be103",
                            name: "Alkaline cleaner for heat exchangers",
                            iconLink:
                                "https://assets.tarkov.dev/59faf98186f774067b6be103-icon.webp",
                        },
                    },
                    {
                        id: "5a28159686f77405710b1e65",
                        description: "Hand over the cleaners",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59faf98186f774067b6be103",
                            name: "Alkaline cleaner for heat exchangers",
                            iconLink:
                                "https://assets.tarkov.dev/59faf98186f774067b6be103-icon.webp",
                        },
                    },
                    {
                        id: "5a2815c186f77405822f36ce",
                        description: "Find Corrugated hoses in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e35cbb86f7741778269d83",
                            name: "Corrugated hose",
                            iconLink:
                                "https://assets.tarkov.dev/59e35cbb86f7741778269d83-icon.webp",
                        },
                    },
                    {
                        id: "5a2815d786f774725a5893a6",
                        description: "Hand over the hoses",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e35cbb86f7741778269d83",
                            name: "Corrugated hose",
                            iconLink:
                                "https://assets.tarkov.dev/59e35cbb86f7741778269d83-icon.webp",
                        },
                    },
                    {
                        id: "5a28163686f7740ab4084611",
                        description: "Find Propane tanks (5L) in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59fafb5d86f774067a6f2084",
                            name: "Propane tank (5L)",
                            iconLink:
                                "https://assets.tarkov.dev/59fafb5d86f774067a6f2084-icon.webp",
                        },
                    },
                    {
                        id: "5a28164786f77405822f36d9",
                        description: "Hand over the tanks",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59fafb5d86f774067a6f2084",
                            name: "Propane tank (5L)",
                            iconLink:
                                "https://assets.tarkov.dev/59fafb5d86f774067a6f2084-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a0449d586f77474e66227b7",
                name: "Spa Tour - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/5a0449d586f77474e66227b7.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5a044a6c86f7747370402d91",
                        description:
                            "Obtain the key to the closed premises of the Sanatorium",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a280f8d86f774141b501756",
                        description: "Hand over the key",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "61958c366726521dd96828ec",
                name: "Cargo X - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/61958c366726521dd96828ec.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "61958d54aa0f643f9a0aed73",
                        description:
                            "Locate and mark the TerraGroup cargo with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "61958d69d14ece31007e2df4",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "64f731ab83cfca080a361e42",
                name: "Pets Won't Need It - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/64f731ab83cfca080a361e42.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "64f731fa39e45b527a7c4300",
                        description:
                            "Locate and scout the vet clinic on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "64f732240e186112c4455d84",
                        description:
                            "Locate and scout the x-ray technician's room on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "64f7325739e45b527a7c4302",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6573387d0b26ed4fde798de3",
                name: "Pets Won't Need It - Part 2",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "6573387d0b26ed4fde798de4",
                        description:
                            "Locate the first pharmacy on Primorsky Ave on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657338ded9b444e1fb07b1a8",
                        description:
                            "Locate the second pharmacy on Primorsky Ave on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657338ed8e8e3a05445b760d",
                        description:
                            "Locate the third pharmacy at Cardinal apartment complex on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "658009db6b313a8a4ed58851",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "60c0c018f7afb4354815096a",
                name: "The Huntsman Path - Factory Chief",
                taskImageLink:
                    "https://assets.tarkov.dev/60c0c018f7afb4354815096a.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "60c0d187938d68438757cda2",
                        description: "Locate and eliminate Tagilla",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60cfa590f81cc57f471718cc",
                        description: "Find Tagilla's BOSS cap in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60a7acf20c5cb24b01346648",
                            name: "BOSS cap",
                            iconLink:
                                "https://assets.tarkov.dev/60a7acf20c5cb24b01346648-icon.webp",
                        },
                    },
                    {
                        id: "60cfa5a85f9e6175514de2e3",
                        description: "Hand over the BOSS cap",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60a7acf20c5cb24b01346648",
                            name: "BOSS cap",
                            iconLink:
                                "https://assets.tarkov.dev/60a7acf20c5cb24b01346648-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac3479086f7742880308199",
                name: "Insider",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3479086f7742880308199.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 12,
                objectives: [
                    {
                        id: "5dbadfd186f77449467d1482",
                        description: "Reach level 3 loyalty with Prapor",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                ],
            },
            {
                id: "596a0e1686f7741ddf17dbee",
                name: "Supply Plans",
                taskImageLink:
                    "https://assets.tarkov.dev/596a0e1686f7741ddf17dbee.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 13,
                objectives: [
                    {
                        id: "596a0e7086f7741ddf17dbef",
                        description:
                            "Obtain Secure Folder 0052 in the sawmill cabin on Woods",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "596a0eaf86f774576d4c957f",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "596a0e8086f7741ddd6c104c",
                        description: "Hand over the folder",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "596a101f86f7741ddb481582",
                name: "Kind of Sabotage",
                taskImageLink:
                    "https://assets.tarkov.dev/596a101f86f7741ddb481582.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 13,
                objectives: [
                    {
                        id: "596a10d886f7741ddf17dbf0",
                        description: "Hand over Secure Folder 0052 to Skier",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5d25e2ee86f77443e35162ea",
                name: "The Huntsman Path - Woods Keeper",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2ee86f77443e35162ea.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 13,
                objectives: [
                    {
                        id: "5d27276886f7740701348578",
                        description: "Locate and eliminate Shturman",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5d2f464e498f71c8886f7656",
                        description: "Find Shturman's stash key in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d08d21286f774736e7c94c3",
                            name: "Shturman's stash key",
                            iconLink:
                                "https://assets.tarkov.dev/5d08d21286f774736e7c94c3-icon.webp",
                        },
                    },
                    {
                        id: "5d272a0b86f7745ba2701532",
                        description: "Hand over Shturman's stash key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d08d21286f774736e7c94c3",
                            name: "Shturman's stash key",
                            iconLink:
                                "https://assets.tarkov.dev/5d08d21286f774736e7c94c3-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae3270f86f77445ba41d4dd",
                name: "Gunsmith - Part 6",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae3270f86f77445ba41d4dd.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5ae3550b86f7741cf44fc799",
                        description:
                            "Modify an AKM to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "6086c852c945025d41566124",
                name: "Revision - Reserve",
                taskImageLink:
                    "https://assets.tarkov.dev/6086c852c945025d41566124.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "6087d553d79a2b4e943482bf",
                        description:
                            "Locate and inspect the first BMP-2 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6086c8ed1b0bb8063d5babb7",
                        description:
                            "Mark the first BMP-2 with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "60882695949eb1096c454fcd",
                        description:
                            "Locate and inspect the second BMP-2 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608826d0a3994358a0751cfc",
                        description:
                            "Mark the second BMP-2 with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "608826f3949eb1096c454fd0",
                        description:
                            "Locate and inspect the third BMP-2 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "60882714c18cfa2a4e2afe59",
                        description:
                            "Mark the third BMP-2 with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6088274a82e40b3c727fd164",
                        description:
                            "Locate and inspect the fourth BMP-2 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "60882779d241f77b8a49785d",
                        description:
                            "Mark the fourth BMP-2 with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "60892585b90d6f39cb74b114",
                        description:
                            "Locate and inspect the first LAV III on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608925d455f4ac386d7e7fc4",
                        description:
                            "Mark the first LAV III with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "60892590fa70fc097863b8e5",
                        description:
                            "Locate and inspect the second LAV III on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608930aa1124f748c94b801e",
                        description:
                            "Locate and inspect the T-90 tank on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5ac3462b86f7741d6118b983",
                name: "Farming - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3462b86f7741d6118b983.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5ac6240786f77417204ca2b9",
                        description:
                            "Locate the warehouse of seized goods on Customs",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ac6248586f77416781dd3a3",
                        description: "Obtain the package of graphics cards",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ac624b286f77416781dd3ac",
                        description: "Hand over the package",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6089736efa70fc097863b8f6",
                name: "Back Door",
                taskImageLink:
                    "https://assets.tarkov.dev/6089736efa70fc097863b8f6.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "608a94101a66564e74191fc3",
                        description:
                            "Find the unpowered secret exit on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608a94ae1a66564e74191fc6",
                        description: "Extract through that exit",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27bb8386f7741c770d2d0a",
                name: "Wet Job - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bb8386f7741c770d2d0a.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5c9de99286f7741ced54c902",
                        description:
                            "Eliminate Scavs while using a suppressed M4A1, ADAR, or TX-15 on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5ac3464c86f7741d651d6877",
                name: "Farming - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac3464c86f7741d651d6877.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5ac5081086f7740bde1b002f",
                        description: "Find Graphics cards in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347ca924597744596b4e71",
                            name: "Graphics card",
                            iconLink:
                                "https://assets.tarkov.dev/57347ca924597744596b4e71-icon.webp",
                        },
                    },
                    {
                        id: "5ac5082586f77418804f7d4c",
                        description: "Hand over the GPUs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57347ca924597744596b4e71",
                            name: "Graphics card",
                            iconLink:
                                "https://assets.tarkov.dev/57347ca924597744596b4e71-icon.webp",
                        },
                    },
                    {
                        id: "5ac5083d86f7740be2744eed",
                        description: "Find CPU Fans in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 15,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734779624597737e04bf329",
                            name: "CPU fan",
                            iconLink:
                                "https://assets.tarkov.dev/5734779624597737e04bf329-icon.webp",
                        },
                    },
                    {
                        id: "5ac5084d86f7740bde1b0031",
                        description: "Hand over the CPU Fans",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 15,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734779624597737e04bf329",
                            name: "CPU fan",
                            iconLink:
                                "https://assets.tarkov.dev/5734779624597737e04bf329-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6089732b59b92115597ad789",
                name: "Surplus Goods",
                taskImageLink:
                    "https://assets.tarkov.dev/6089732b59b92115597ad789.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "6092942fb0f07c6ea1246e3a",
                        description:
                            "Obtain the MBT Integrated Navigation System on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6092947635915c62b44fd05b",
                        description: "Hand over the navigation complex",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5c0bde0986f77479cf22c2f8",
                name: "A Shooter Born in Heaven",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bde0986f77479cf22c2f8.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5c0bdf2c86f7746f016734a8",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c137b8886f7747ae3220ff4",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c137ef386f7747ae10a821e",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c137f5286f7747ae267d8a3",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "629f10b114061f3074380298",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Lighthouse ",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63aec6f256503c322a190374",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64b694c8a857ea477002a408",
                        description:
                            "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5a27bc1586f7741f6d40fa2f",
                name: "Wet Job - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bc1586f7741f6d40fa2f.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5a3baa2586f7745b791b72fa",
                        description: "Find Artyom’s car on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a37db0c86f7745b8f4be68a",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27bbf886f774333a418eeb",
                name: "Wet Job - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bbf886f774333a418eeb.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5a3ba97386f77459df27d10e",
                        description:
                            "Locate the fishermen's dwelling on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a281efe86f7745bc42005cc",
                        description:
                            "Mark the fishing table with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a37dc0c86f77469da071ef2",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a27bc6986f7741c7358402b",
                name: "Wet Job - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bc6986f7741c7358402b.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5a2e958d86f77416be092111",
                        description:
                            "Obtain information on Artyom’s work on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a2822de86f7740a245249ce",
                        description: "Hand over the information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "60896888e4a85c72ef3fa300",
                name: "Classified Technologies",
                taskImageLink:
                    "https://assets.tarkov.dev/60896888e4a85c72ef3fa300.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "60929ad46342771d851b827a",
                        description:
                            "Obtain the package with T-90M Commander control panel on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60929afc35915c62b44fd05c",
                        description: "Hand over the package",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5a27bc3686f7741c73584026",
                name: "Wet Job - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bc3686f7741c73584026.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5a28221e86f7741d5b719624",
                        description:
                            "Obtain a list of the resort's tenants on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a28223786f7741c7a0b5401",
                        description: "Hand over the list of tenants",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5d6fbc2886f77449d825f9d3",
                name: "Mentor",
                taskImageLink:
                    "https://assets.tarkov.dev/5d6fbc2886f77449d825f9d3.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5d6fbf0f86f77449d97f738e",
                        description: "Hand over EUR",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 50000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "569668774bdc2da2298b4568",
                            name: "Euros",
                            iconLink:
                                "https://assets.tarkov.dev/569668774bdc2da2298b4568-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6179b4d1bca27a099552e04e",
                name: "Revision - Lighthouse",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b4d1bca27a099552e04e.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "61952308aa0f643f9a0ae20f",
                        description:
                            "Locate and mark the first BRDM with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6195231dd07bdc6de57b40a5",
                        description:
                            "Locate and mark the second BRDM with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "61952325aa0f643f9a0ae212",
                        description:
                            "Locate and mark the first Stryker with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6195232a1e972a652931edb6",
                        description:
                            "Locate and mark the second Stryker with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "5a27bc8586f7741b543d8ea4",
                name: "Wet Job - Part 6",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27bc8586f7741b543d8ea4.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 14,
                objectives: [
                    {
                        id: "5a28235e86f7741da250b438",
                        description:
                            "Reach the required Sniper Rifles skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "5ae448a386f7744d3730fff0",
                name: "Only Business",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae448a386f7744d3730fff0.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5ae44c6886f7744f1a7eb2b8",
                        description: "Reach level 2 loyalty with Ragman",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                ],
            },
            {
                id: "5967725e86f774601a446662",
                name: "Shaking up the Teller",
                taskImageLink:
                    "https://assets.tarkov.dev/5967725e86f774601a446662.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5968981986f7740d1648df42",
                        description:
                            "Obtain the valuable item in dorm room 203 on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5968988286f7740d14064724",
                        description: "Hand over the valuable item",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a3fc03286f77414d64f9941",
                        description: "Gain access to dorm room 214",
                        optional: true,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5ede567cfa6dc072ce15d6e3",
                name: "The Bunker - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ede567cfa6dc072ce15d6e3.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5ee8ec5ed72d953f5d2aabd1",
                        description:
                            "Locate the hermetic door leading to the hospital (White Bishop)",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee8ecd75eb3205dae135d17",
                        description:
                            "Locate one of the two hermetic doors leading to the academy building (Black Bishop)",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee8ed18d72d953f5d2aabd4",
                        description:
                            "Locate one of the two hermetic doors leading to barracks #1 (Black Pawn)",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee8eddde932d53763761b2c",
                        description:
                            "Locate one of the two hermetic doors leading to barracks #2 (White Pawn)",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee8edf1500391756d7498a7",
                        description:
                            "Locate the hermetic door leading to the building of the air control center (King)",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ee0e722c321a77fc55084d5",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "60896e28e4a85c72ef3fa301",
                name: "Disease History",
                taskImageLink:
                    "https://assets.tarkov.dev/60896e28e4a85c72ef3fa301.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "6091698a30bb620b3239874c",
                        description: "Obtain Medical record #1 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae12ffb809a474875907aa",
                        description: "Obtain Medical record #2 on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "609169cfeca522371e5725c5",
                        description: "Hand over the first journal",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae134cabb9675f0062cf6e",
                        description: "Hand over the second journal",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6391359b9444fb141f4e6ee6",
                name: "You've Got Mail",
                taskImageLink:
                    "https://assets.tarkov.dev/6391359b9444fb141f4e6ee6.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "6391359b9444fb141f4e6ee7",
                        description:
                            "Obtain the registered mail on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6391359b9444fb141f4e6ee8",
                        description: "Hand over the letter",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6089743983426423753cd58a",
                name: "Safe Corridor",
                taskImageLink:
                    "https://assets.tarkov.dev/6089743983426423753cd58a.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "608ab22755f4ac386d7e7fdc",
                        description:
                            "Eliminate Scavs in the underground warehouse on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5ac346cf86f7741d63233a02",
                name: "Signal - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac346cf86f7741d63233a02.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5ac7a7bf86f774132252a524",
                        description:
                            "Place the Signal jammer on the first specified place on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ac7a83b86f774665012340b",
                        description:
                            "Place the Signal jammer on the second specified place on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ac7a8d386f7741321499e3c",
                        description:
                            "Place the Signal jammer on the third specified place on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ac7a93286f774664f4cbd8c",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "63913715f8e5dd32bf4e3aaa",
                name: "Broadcast - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/63913715f8e5dd32bf4e3aaa.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "63a7d99804d3dc28a52a2106",
                        description:
                            "Locate the place of bloody broadcast inside the grocery store on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639da5ec8fe84d33a25a1435",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6179aff8f57fb279792c60a1",
                name: "Overpopulation",
                taskImageLink:
                    "https://assets.tarkov.dev/6179aff8f57fb279792c60a1.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "617bf4e152e86c73d372a95d",
                        description:
                            "Secure the cottage area from Scavs on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "63ab180c87413d64ae0ac20a",
                name: "Dangerous Road",
                taskImageLink:
                    "https://assets.tarkov.dev/63ab180c87413d64ae0ac20a.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "63ab184ff627f540861d1185",
                        description:
                            "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ac244eb86f7741356335af1",
                name: "Gunsmith - Part 7",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac244eb86f7741356335af1.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5accdfdb86f77412265cbfc9",
                        description:
                            "Modify an M4A1 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5ac346e886f7741d6118b99b",
                name: "Signal - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac346e886f7741d6118b99b.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "5ac5eb3286f7746e7a509a09",
                        description: "Reach the required Memory skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "64ee9df4496db64f9b7a4432",
                name: "The Door",
                taskImageLink:
                    "https://assets.tarkov.dev/64ee9df4496db64f9b7a4432.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "64ee9df4496db64f9b7a4433",
                        description:
                            "Locate the cause of the signal jamming on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "64ee9df4496db64f9b7a4435",
                        description: "Install a WI-FI Camera to watch the door",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "64eea6059878a0569d6ec98b",
                        description:
                            "Install a WI-FI Camera to watch the stairwell",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "64ee9df4496db64f9b7a4437",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6578ec473dbd035d04531a8d",
                name: "Steady Signal",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 15,
                objectives: [
                    {
                        id: "6578ec473dbd035d04531a92",
                        description:
                            "Mark the first weather station with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6578ec473dbd035d04531a93",
                        description:
                            "Mark the second weather station with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6578ec473dbd035d04531a94",
                        description:
                            "Mark the third weather station with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6578ed62da32cab3f79bb022",
                        description:
                            "Mark the fourth weather station with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6578ed7792685671c65edf07",
                        description:
                            "Mark the fifth weather station with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "639135e0fa894f0a866afde6",
                name: "Urban Medicine",
                taskImageLink:
                    "https://assets.tarkov.dev/639135e0fa894f0a866afde6.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "63a7d64710b7a13eb015961f",
                        description:
                            "Locate the chemical laboratory on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639135e0fa894f0a866afde7",
                        description: "Obtain the container with drug samples",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639135e0fa894f0a866afde8",
                        description: "Hand over the container",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6179b3bdc7560e13d23eeb8d",
                name: "Corporate Secrets",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b3bdc7560e13d23eeb8d.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "617bf6c70cf4a041de5b3972",
                        description:
                            "Find the data on the water pump operation on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "617bf77a3de8a6689b533a2a",
                        description: "Hand over the extracted data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "61951c30aa0f643f9a0ae1b7",
                        description:
                            "Find the data on the pumping station operation on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "61951c3e2e2805073c2d29db",
                        description: "Hand over the extracted data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "639135f286e646067c176a87",
                name: "Revision - Streets of Tarkov",
                taskImageLink:
                    "https://assets.tarkov.dev/639135f286e646067c176a87.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "63927f14744e452011470816",
                        description:
                            "Locate and mark the first LAV III with an MS2000 Marker on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "63927f2d8ba6894d155e77e6",
                        description:
                            "Locate and mark the Stryker with an MS2000 Marker on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "63927f349444fb141f4e6f24",
                        description:
                            "Locate and mark the second LAV III with an MS2000 Marker on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "639cebb78fe84d33a25a142b",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae448e586f7744dcf0c2a67",
                name: "Big Sale",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae448e586f7744dcf0c2a67.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae4508386f7741250488337",
                        description:
                            "Locate and check the AVOKADO store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ae450db86f7741250488359",
                        description:
                            "Locate and check the KOSTIN store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ae450ee86f7740f9307859d",
                        description:
                            "Locate and check the tRend store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ae4510786f7740fa614399f",
                        description:
                            "Locate and check the DINO CLOTHES store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ae4511d86f7740ffc31ccb5",
                        description:
                            "Locate and check the TOP BRAND store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5ae4514986f7740e915d218c",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae448bf86f7744d733e55ee",
                name: "Make ULTRA Great Again",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae448bf86f7744d733e55ee.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae44ecd86f77414a13c970e",
                        description: "Eliminate Scavs on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5ae3277186f7745973054106",
                name: "Gunsmith - Part 8",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae3277186f7745973054106.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae3570b86f7746efa6b4494",
                        description:
                            "Modify an AKS-74N to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "59c50a9e86f7745fef66f4ff",
                name: "The Punisher - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/59c50a9e86f7745fef66f4ff.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "59674d5186f00443b872d5f7",
                        description:
                            "Eliminate Scavs while using an AKM series weapon on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60896bca6ee58f38c417d4f2",
                name: "No Place for Renegades",
                taskImageLink:
                    "https://assets.tarkov.dev/60896bca6ee58f38c417d4f2.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "608bffeee0cc9c2d4d2ccb29",
                        description:
                            "Eliminate Raiders in the command bunker on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "6179ad56c760af5ad2053587",
                name: "Seaside Vacation",
                taskImageLink:
                    "https://assets.tarkov.dev/6179ad56c760af5ad2053587.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "617bf2a6f8e6c97ec70878b7",
                        description:
                            "Find the informant's briefcase on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "617bf29a52e86c73d372a917",
                        description: "Hand over the found package",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "638fcd23dc65553116701d33",
                name: "Audit",
                taskImageLink:
                    "https://assets.tarkov.dev/638fcd23dc65553116701d33.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "638fd070202cd55bee01ca11",
                        description:
                            "Obtain the financial records on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "638fd0805e5a195d2c443754",
                        description: "Hand over the journal",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "639135b04ed9512be67647d7",
                name: "Glory to CPSU - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/639135b04ed9512be67647d7.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "63a7db4a3e491955e65fb88b",
                        description:
                            "Locate the apartment of Prapor's friend on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639c8c875573fd6cc27d99bb",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae4490786f7744ca822adcc",
                name: "Dressed to Kill",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4490786f7744ca822adcc.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5fd89799c54dc00f463272d3",
                        description: "Find Kinda Cowboy hats in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5aa2b9ede5b5b000137b758b",
                            name: "Kinda cowboy hat",
                            iconLink:
                                "https://assets.tarkov.dev/5aa2b9ede5b5b000137b758b-icon.webp",
                        },
                    },
                    {
                        id: "5fd89729a8c881276c560433",
                        description: "Find Ushanka ear-flap hats in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7708286f7742cbd762753",
                            name: "Ushanka ear flap hat",
                            iconLink:
                                "https://assets.tarkov.dev/59e7708286f7742cbd762753-icon.webp",
                        },
                    },
                    {
                        id: "5ae4543686f7742dc043c903",
                        description: "Hand over the ushanka-hats",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7708286f7742cbd762753",
                            name: "Ushanka ear flap hat",
                            iconLink:
                                "https://assets.tarkov.dev/59e7708286f7742cbd762753-icon.webp",
                        },
                    },
                    {
                        id: "5ae454a086f7742be909a81a",
                        description: "Hand over the hats",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5aa2b9ede5b5b000137b758b",
                            name: "Kinda cowboy hat",
                            iconLink:
                                "https://assets.tarkov.dev/5aa2b9ede5b5b000137b758b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae4493d86f7744b8e15aa8f",
                name: "Database - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4493d86f7744b8e15aa8f.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae9b5bd86f774307c29df37",
                        description:
                            "Obtain the OLI cargo route documents on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b63286f774229110402d",
                        description: "Hand over the documents",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "608974af4b05530f55550c21",
                name: "Inventory Check",
                taskImageLink:
                    "https://assets.tarkov.dev/608974af4b05530f55550c21.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "608bd0a053b9dd01a116f474",
                        description:
                            "Check the first arsenal in the eastern barracks (Black Pawn) on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608bd2465e0ef91ab810f98a",
                        description:
                            "Check the duty room in the eastern barracks (Black Pawn) on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608bd0c20637f21f9934b6e4",
                        description:
                            "Check the second arsenal in the eastern barracks (Black Pawn) on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608bd136c61c4b541b381da3",
                        description:
                            "Check the first arsenal in the southern barracks (White Pawn) on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608bd149f597ad0a33574d74",
                        description:
                            "Check the second arsenal in the southern barracks (White Pawn) on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "608c187853b9dd01a116f480",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "608974d01a66564e74191fc0",
                name: "A Fuel Matter",
                taskImageLink:
                    "https://assets.tarkov.dev/608974d01a66564e74191fc0.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "60a4dc7e4e734e57d07fb335",
                        description:
                            "Mark the first group of fuel tanks with an MS2000 Marker on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "60b90232ec7c6f5eb510c195",
                        description:
                            "Mark the second group of fuel tanks with an MS2000 Marker on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "608bfe32c61c4b541b381da9",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "65802b627b44fa5e14638899",
                name: "Nothing Fishy About This",
                taskImageLink:
                    "https://assets.tarkov.dev/65802b627b44fa5e14638899.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "65802b627b44fa5e1463889a",
                        description: "Locate Ragman's SUV on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65802bfabac8c53c548fca2a",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "64e7b971f9d6fa49d6769b44",
                name: "The Huntsman Path - Big Game",
                taskImageLink:
                    "https://assets.tarkov.dev/64e7b971f9d6fa49d6769b44.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "64e7ba17220ee966bf425ecb",
                        description: "Locate and eliminate Kaban",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64e7ba4a6393886f74119f3d",
                        description:
                            "Eliminate Kaban's guards at the car dealership on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "64f3176921045e77405d63b5",
                name: "Ambulances Again",
                taskImageLink:
                    "https://assets.tarkov.dev/64f3176921045e77405d63b5.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "64f3176921045e77405d63ba",
                        description:
                            "Locate and obtain the ambulance paramedic's smartphone on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64f4fdfa67e11a7c6206de72",
                        description:
                            "Extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "64f3176921045e77405d63bb",
                        description: "Hand over the smartphone",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5ae4493486f7744efa289417",
                name: "Database - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4493486f7744efa289417.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae9b32486f7745bbc72275a",
                        description:
                            "Obtain the Goshan cargo manifests on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b34686f7743129512ccf",
                        description: "Hand over the Goshan cargo manifests",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b36c86f774307c29df04",
                        description:
                            "Obtain the OLI cargo manifests on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b38a86f77432c81e2ce3",
                        description: "Hand over the OLI cargo manifests",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b3b186f7745bbc722762",
                        description:
                            "Obtain the IDEA cargo manifests on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9b3c986f77432c81e2ce6",
                        description: "Hand over the IDEA cargo manifests",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5ae448f286f77448d73c0131",
                name: "The Blood of War - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae448f286f77448d73c0131.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae452c086f774336a397578",
                        description:
                            "Mark the first fuel tank with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ae452de86f77450595c4333",
                        description:
                            "Mark the second fuel tank with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ae452fa86f774336a39758e",
                        description:
                            "Mark the third fuel tank with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5ae4531986f774177033c3e6",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae449b386f77446d8741719",
                name: "Gratitude",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae449b386f77446d8741719.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 17,
                objectives: [
                    {
                        id: "5ae9e17c86f77440d37ce03c",
                        description:
                            "Stash Ghost balaclava in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8f4ff86f77431c60d91ba",
                            name: "Ghost balaclava",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8f4ff86f77431c60d91ba-icon.webp",
                        },
                    },
                    {
                        id: "5ae9e1c786f77403fb3f9674",
                        description:
                            "Stash Shemagh (Green) in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8f85d86f7745cd93a1cf5",
                            name: "Shemagh (Green)",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8f85d86f7745cd93a1cf5-icon.webp",
                        },
                    },
                    {
                        id: "5ae9e2a286f7740de4152a0a",
                        description:
                            "Stash RayBench Hipster Reserve sunglasses in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5aa2b9aee5b5b00015693121",
                            name: "RayBench Hipster Reserve sunglasses",
                            iconLink:
                                "https://assets.tarkov.dev/5aa2b9aee5b5b00015693121-icon.webp",
                        },
                    },
                    {
                        id: "5ae9e2e386f7740de4152a0d",
                        description:
                            "Stash Round frame sunglasses in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5aa2b923e5b5b000137b7589",
                            name: "Round frame sunglasses",
                            iconLink:
                                "https://assets.tarkov.dev/5aa2b923e5b5b000137b7589-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c1234c286f77406fa13baeb",
                name: "Setup",
                taskImageLink:
                    "https://assets.tarkov.dev/5c1234c286f77406fa13baeb.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "5c1fa9c986f7740de474cb3d",
                        description:
                            "Eliminate PMC operatives while wearing the specified gear on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5a27ba1c86f77461ea5a3c56",
                name: "The Cult - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a27ba1c86f77461ea5a3c56.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "5a2806e086f774291b084041",
                        description:
                            "Locate and mark the first ritual spot with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a2806b386f77420062f0fbd",
                        description:
                            "Locate and mark the ritual spot with an MS2000 Marker on Customs",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5fe0e9ed3f3a7d4169035e8e",
                        description:
                            "Locate and mark the second ritual spot with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a2806f886f774513d3e69f5",
                        description:
                            "Locate and mark the ritual spot with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "59c50c8886f7745fed3193bf",
                name: "The Punisher - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/59c50c8886f7745fed3193bf.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "59624d5386f77446b872d5f7",
                        description:
                            "Eliminate Scavs while using a suppressed weapon on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5cb5e2ff86f7746ef64c979b",
                        description: "Find Lower half-masks in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "572b7fa524597762b747ce82",
                            name: "Lower half-mask",
                            iconLink:
                                "https://assets.tarkov.dev/572b7fa524597762b747ce82-icon.webp",
                        },
                    },
                    {
                        id: "59c50f1686f77412ef2c01e7",
                        description: "Hand over the half-masks",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "572b7fa524597762b747ce82",
                            name: "Lower half-mask",
                            iconLink:
                                "https://assets.tarkov.dev/572b7fa524597762b747ce82-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "626bd75c71bd851e971b82a5",
                name: "Reconnaissance",
                taskImageLink:
                    "https://assets.tarkov.dev/626bd75c71bd851e971b82a5.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "63ac1b741b5c95746621ddb4",
                        description:
                            "Recon the roof of the first office building on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63ac1bd387413d64ae0ac22b",
                        description:
                            "Recon the roof of the second office building on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63ac1c56972364554162a25e",
                        description:
                            "Recon the roof of the third office building on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "62987d43b7bd956bd62a09b3",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6179ac7511973d018217d0b9",
                name: "Easy Job - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/6179ac7511973d018217d0b9.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "63ac1e0a87413d64ae0ac233",
                        description:
                            "Locate the helicopter at the water treatment plant on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6179b804bca27a099552e057",
                        description:
                            "Mark the helicopter with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "61abcc6379c3a477d0122457",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6179acbdc760af5ad2053585",
                name: "Easy Job - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/6179acbdc760af5ad2053585.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 18,
                objectives: [
                    {
                        id: "617bd94c5a52d2390a2630c7",
                        description:
                            "Eliminate any target around the helicopter area at the water treatment plant on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "639872fa9b4fb827b200d8e5",
                name: "Gunsmith - Part 9",
                taskImageLink:
                    "https://assets.tarkov.dev/639872fa9b4fb827b200d8e5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 19,
                objectives: [
                    {
                        id: "6398776f93ae507d5858c3a8",
                        description:
                            "Modify an P226R to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "60896b7bfa70fc097863b8f5",
                name: "Documents",
                taskImageLink:
                    "https://assets.tarkov.dev/60896b7bfa70fc097863b8f5.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 19,
                objectives: [
                    {
                        id: "60916aeac49cf53e4772cc3c",
                        description:
                            "Obtain Military documents #1 in the command bunker offices on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae0dfe2d6a8320983d19ba",
                        description:
                            "Obtain Military documents #2 in the command bunker offices on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae0e2c79e83a2cf96f35ce",
                        description:
                            "Obtain Military documents #3 in the command bunker offices on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60916b41b89a3c264d7296f9",
                        description: "Hand over the first documents",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae0f0586046842a754e21e",
                        description: "Hand over the second documents",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "60ae0f17b809a4748759078c",
                        description: "Hand over the third documents",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "59c512ad86f7741f0d09de9b",
                name: "The Punisher - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/59c512ad86f7741f0d09de9b.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 19,
                objectives: [
                    {
                        id: "59674d5186f77446b852d5f7",
                        description:
                            "Eliminate Scavs while using an AKS-74U on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c0d190cd09282029f5390d8",
                name: "Grenadier",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d190cd09282029f5390d8.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5c1b760686f77412780211a3",
                        description:
                            "Eliminate PMC operatives while using hand grenades",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e48186f77443e625e386",
                name: "Courtesy Visit",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e48186f77443e625e386.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5d357b6c86f774588d4d7e25",
                        description:
                            "Locate the chairman's house in the abandoned village on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5d357b9586f7745b422d653f",
                        description:
                            "Locate the fisherman's house in the abandoned village on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5d357bb786f774588d4d7e27",
                        description:
                            "Locate the priest's house in the abandoned village on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "629f4f080f57046e362e6e9e",
                        description:
                            'Survive and extract from Shoreline with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5d25e4d586f77443e625e388",
                name: "Reserve",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e4d586f77443e625e388.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5d8a05d086f77410b4225d10",
                        description:
                            "Locate the food storage location on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "629f1259422dff20ff234b4d",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6193850f60b34236ee0483de",
                name: "Long Road",
                taskImageLink:
                    "https://assets.tarkov.dev/6193850f60b34236ee0483de.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "6193dabd5f6468204470571f",
                        description:
                            "Eliminate Scavs along the main road on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e48d86f77408251c4bfb",
                name: "Shady Business",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e48d86f77408251c4bfb.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5d6949e786f774238a38d9e0",
                        description: "Find Secure Flash drives in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c621186f774138d11ea29",
                            name: "Secure Flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/590c621186f774138d11ea29-icon.webp",
                        },
                    },
                    {
                        id: "5d27491686f77475aa5cf5b9",
                        description: "Hand over the Flash drives",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c621186f774138d11ea29",
                            name: "Secure Flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/590c621186f774138d11ea29-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a68661a86f774500f48afb0",
                name: "Health Care Privacy - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5a68661a86f774500f48afb0.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5a6873bc86f7741f8d4589a3",
                        description:
                            "Locate and mark the first ambulance with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a6873d786f7743ad1151d6e",
                        description:
                            "Locate and mark the second ambulance with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5a6873ec86f7743cc55d8622",
                        description:
                            "Locate and mark the third ambulance with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "639136d68ba6894d155e77cf",
                name: "Green Corridor",
                taskImageLink:
                    "https://assets.tarkov.dev/639136d68ba6894d155e77cf.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63a7d53904d3dc28a52a2100",
                        description:
                            "Locate the cargo convoy on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7d58004d3dc28a52a2102",
                        description: "Determine the ambush spot",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639cee16f5765f47cc7f0ea1",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639282134ed9512be67647ed",
                name: "Road Closed",
                taskImageLink:
                    "https://assets.tarkov.dev/639282134ed9512be67647ed.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63a7d444f32fa1316250c3d5",
                        description:
                            "Locate the cargo convoy on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7d461f32fa1316250c3d7",
                        description: "Determine the ambush spot",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639cdf9aad9d7e3216668fd0",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639136fa9444fb141f4e6eee",
                name: "Watching You",
                taskImageLink:
                    "https://assets.tarkov.dev/639136fa9444fb141f4e6eee.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63a7d8665199ab1f7d4a7747",
                        description:
                            "Locate the surveillance spot on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639136fa9444fb141f4e6eef",
                        description: "Obtain the observation results",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639136fa9444fb141f4e6ef0",
                        description: "Hand over the data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "63a511ea30d85e10e375b045",
                name: "Broadcast - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/63a511ea30d85e10e375b045.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63ac22b8f627f540861d1b2d",
                        description:
                            "Locate the place of bloody broadcast inside the old house on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a511ea30d85e10e375b047",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639135a7e705511c8a4a1b78",
                name: "Ballet Lover",
                taskImageLink:
                    "https://assets.tarkov.dev/639135a7e705511c8a4a1b78.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63a7da6f5199ab1f7d4a774a",
                        description:
                            "Locate the balletmeister's apartment on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7daae04d3dc28a52a2109",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae327c886f7745c7b3f2f3f",
                name: "Gunsmith - Part 10",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae327c886f7745c7b3f2f3f.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5ae445f386f7744e87761331",
                        description:
                            "Modify an AK-105 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "59ca264786f77445a80ed044",
                name: "The Punisher - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/59ca264786f77445a80ed044.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "59674d5986f77446b872d5f7",
                        description:
                            "Eliminate Scavs while using a 12ga shotgun on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "59ca27f786f77445aa0ddc14",
                        description:
                            "Eliminate PMC operatives while wearing a balaclava and Scav vest on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "59ca293c86f91445a80ed047",
                        description: "Find Bars A-2607 95Kh18 knives in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57e26fc7245977162a14b800",
                            name: "Bars A-2607 95Kh18 knife",
                            iconLink:
                                "https://assets.tarkov.dev/57e26fc7245977162a14b800-icon.webp",
                        },
                    },
                    {
                        id: "59ca29ab86f77445ab431c86",
                        description: "Hand over the knives",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57e26fc7245977162a14b800",
                            name: "Bars A-2607 95Kh18 knife",
                            iconLink:
                                "https://assets.tarkov.dev/57e26fc7245977162a14b800-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "608a768d82e40b3c727fd17d",
                name: "Pest Control",
                taskImageLink:
                    "https://assets.tarkov.dev/608a768d82e40b3c727fd17d.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "608a8356fa70fc097863b8f8",
                        description:
                            "Eliminate Scavs in the barracks area on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "59ca29fb86f77445ab465c87",
                name: "The Punisher - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/59ca29fb86f77445ab465c87.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "59ca293c86f77445a80ed147",
                        description:
                            "Find a Kalashnikov AK-74N assault rifle in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5644bd2b4bdc2d3b4c8b4572",
                            name: "Kalashnikov AK-74N 5.45x39 assault rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5644bd2b4bdc2d3b4c8b4572-icon.webp",
                        },
                    },
                    {
                        id: "59ca29ab86f77445ab133c86",
                        description: "Hand over the AK-74N",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5644bd2b4bdc2d3b4c8b4572",
                            name: "Kalashnikov AK-74N 5.45x39 assault rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5644bd2b4bdc2d3b4c8b4572-icon.webp",
                        },
                    },
                    {
                        id: "59ca2bdc86f77445a80ed148",
                        description: "Find a Colt M4A1 assault rifle in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5447a9cd4bdc2dbd208b4567",
                            name: "Colt M4A1 5.56x45 assault rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5447a9cd4bdc2dbd208b4567-icon.webp",
                        },
                    },
                    {
                        id: "59ca2c3086f77445aa0ddc15",
                        description: "Hand over the M4A1",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5447a9cd4bdc2dbd208b4567",
                            name: "Colt M4A1 5.56x45 assault rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5447a9cd4bdc2dbd208b4567-icon.webp",
                        },
                    },
                    {
                        id: "59ca2c9e86f77428ea721232",
                        description: "Find Makarov PM pistols in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5448bd6b4bdc2dfc2f8b4569",
                            name: "Makarov PM 9x18PM pistol",
                            iconLink:
                                "https://assets.tarkov.dev/5448bd6b4bdc2dfc2f8b4569-icon.webp",
                        },
                    },
                    {
                        id: "59ca2cbe86f7740fe95c3e52",
                        description: "Hand over the pistols",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5448bd6b4bdc2dfc2f8b4569",
                            name: "Makarov PM 9x18PM pistol",
                            iconLink:
                                "https://assets.tarkov.dev/5448bd6b4bdc2dfc2f8b4569-icon.webp",
                        },
                    },
                    {
                        id: "5c922dde86f77438500a0fec",
                        description:
                            "Eliminate PMC operatives while wearing a PACA body armor and 6B47 helmet",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5a68667486f7742607157d28",
                name: "Health Care Privacy - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5a68667486f7742607157d28.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5a6878e886f7745e65687985",
                        description: "Reach the required Health skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "5a68663e86f774501078f78a",
                name: "Health Care Privacy - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5a68663e86f774501078f78a.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5a68760f86f7743cc55d8709",
                        description:
                            "Search the room in the Health Resort for any documents about TerraGroup's research",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a68763786f77474c33a40a1",
                        description: "Hand over the retrieved information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a68764c86f77474c4269f3c",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5a68665c86f774255929b4c7",
                name: "Health Care Privacy - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5a68665c86f774255929b4c7.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5a68770f86f774747d4b0d8b",
                        description:
                            "Locate the van of the Health Resort medical services director on Woods",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a68776786f774759f1f55f6",
                        description: "Take a sample of the blood",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a68777586f774747d4b0d9e",
                        description: "Hand over the blood sample",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5a68778c86f77423391f38f0",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5d6fb2c086f77449da599c24",
                name: "An Apple a Day Keeps the Doctor Away",
                taskImageLink:
                    "https://assets.tarkov.dev/5d6fb2c086f77449da599c24.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5d6fb8a886f77449db3db8b6",
                        description: "Hand over RUB",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 400000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5449016a4bdc2d6f028b456f",
                            name: "Roubles",
                            iconLink:
                                "https://assets.tarkov.dev/5449016a4bdc2d6f028b456f-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5a68669a86f774255929b4d4",
                name: "Health Care Privacy - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/5a68669a86f774255929b4d4.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5a6879be86f774284429b1bb",
                        description:
                            "Locate the drop spot on night-time Factory",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5a687a1c86f7745f2152168c",
                        description:
                            'Obtain 3 packs of Gunpowder "Kite" and stash them in the designated spot',
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590c5a7286f7747884343aea",
                            name: 'Gunpowder "Kite"',
                            iconLink:
                                "https://assets.tarkov.dev/590c5a7286f7747884343aea-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "61904daa7d0d857927447b9c",
                name: "The Hermit",
                taskImageLink:
                    "https://assets.tarkov.dev/61904daa7d0d857927447b9c.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "63ac22351b5c95746621ddc4",
                        description:
                            "Locate the hideout of Jaeger's friend on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "61904e76f62c89219a56e04c",
                        description: "Find and obtain the message for Jaeger",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "61904ebb22e6d82ee97ccbbe",
                        description: "Hand over the message",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5d25e44f86f77443e625e385",
                name: "The Huntsman Path - Eraser - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e44f86f77443e625e385.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 20,
                objectives: [
                    {
                        id: "5d27369586f774457411b264",
                        description: "Locate and eliminate Glukhar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5edab736cc183c769d778bc2",
                name: "Colleagues - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5edab736cc183c769d778bc2.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "5edab7d3cc183c769d778bc5",
                        description:
                            "Locate the group that was sent to the Health Resort",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5edab8890880da21347b3826",
                        description:
                            "Locate the group that was sent to the pier",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5edab8e216d985118871ba18",
                        description:
                            "Locate the group that was sent to the cottages",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5f03969a51823847c253afa0",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5eda19f0edce541157209cee",
                name: "Anesthesia",
                taskImageLink:
                    "https://assets.tarkov.dev/5eda19f0edce541157209cee.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "5eda1d6ec586607c09662d54",
                        description:
                            "Mark the first trading post with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5eda1da9a58a4c49c74165ee",
                        description:
                            "Mark the second trading post with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5eda1dd3317f6066993c1744",
                        description:
                            "Mark the third trading post with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5f0389268580cc37797e0026",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "59ca2eb686f77445a80ed049",
                name: "The Punisher - Part 6",
                taskImageLink:
                    "https://assets.tarkov.dev/59ca2eb686f77445a80ed049.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "59ca2fba86f77445e4732b25",
                        description:
                            "Eliminate PMC operatives while using an SVD rifle (Excluding Factory)",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5b05468f86f774030379eb74",
                        description: "Find BEAR PMC dogtags in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32bb586f774757e1e8442",
                            name: "Dogtag BEAR",
                            iconLink:
                                "https://assets.tarkov.dev/59f32bb586f774757e1e8442-icon.webp",
                        },
                    },
                    {
                        id: "5b0548e686f7740306753506",
                        description: "Hand over the BEAR dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32bb586f774757e1e8442",
                            name: "Dogtag BEAR",
                            iconLink:
                                "https://assets.tarkov.dev/59f32bb586f774757e1e8442-icon.webp",
                        },
                    },
                    {
                        id: "5cb3393888a4505d02042061",
                        description: "Find USEC PMC dogtags in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                    {
                        id: "5cb3397c88a450159a723d79",
                        description: "Hand over the USEC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 7,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5edabd13218d181e29451442",
                name: "Rigged Game",
                taskImageLink:
                    "https://assets.tarkov.dev/5edabd13218d181e29451442.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "5f071a9727cec53d5d24fe3b",
                        description:
                            "Mark the medical container at the Health Resort with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5991b51486f77447b112d44f",
                            name: "MS2000 Marker",
                            iconLink:
                                "https://assets.tarkov.dev/5991b51486f77447b112d44f-icon.webp",
                        },
                    },
                    {
                        id: "5f071ae396d1ae55e476abc4",
                        description:
                            "Mark the medical container by cottages with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5991b51486f77447b112d44f",
                            name: "MS2000 Marker",
                            iconLink:
                                "https://assets.tarkov.dev/5991b51486f77447b112d44f-icon.webp",
                        },
                    },
                    {
                        id: "5f071b2a8ca6db7f3b41215f",
                        description:
                            "Mark the medical container at the river pier with an MS2000 Marker on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5991b51486f77447b112d44f",
                            name: "MS2000 Marker",
                            iconLink:
                                "https://assets.tarkov.dev/5991b51486f77447b112d44f-icon.webp",
                        },
                    },
                    {
                        id: "5f039da057a46716b610b577",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5edaba7c0c502106f869bc02",
                name: "Colleagues - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5edaba7c0c502106f869bc02.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "5edabb0b0c502106f869bc03",
                        description:
                            "Obtain Sanitar's surgery kit marked with a blue symbol",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5edabb950c502106f869bc04",
                        description: "Hand over Sanitar's surgery kit",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5edabbff0880da21347b382b",
                        description: "Obtain Sanitar's ophthalmoscope",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5edabc2ca0055865214cb5a6",
                        description: "Hand over Sanitar's ophthalmoscope",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "64e7b99017ab941a6f7bf9d7",
                name: "Gendarmerie - Mall Cop",
                taskImageLink:
                    "https://assets.tarkov.dev/64e7b99017ab941a6f7bf9d7.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "64e7bc2c5e6d3e61ca2ca097",
                        description:
                            "Eliminate any target at the stylobate building while using Pistols on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "64e7b9a4aac4cd0a726562cb",
                name: "Gendarmerie - Tickets, Please",
                taskImageLink:
                    "https://assets.tarkov.dev/64e7b9a4aac4cd0a726562cb.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "64e7bd0c6393886f74119f41",
                        description:
                            "Eliminate any target at the Rodina cinema while using SMGs on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "64e7b9bffd30422ed03dad38",
                name: "Gendarmerie - District Patrol",
                taskImageLink:
                    "https://assets.tarkov.dev/64e7b9bffd30422ed03dad38.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "64e7bdd52d369a1c0172722f",
                        description:
                            "Eliminate any target at the Cardinal apartment complex while using Assault rifles or Assault carbines on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5edac020218d181e29451446",
                name: "Samples",
                taskImageLink:
                    "https://assets.tarkov.dev/5edac020218d181e29451446.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 21,
                objectives: [
                    {
                        id: "5edac0e02ddc9e4c802cd969",
                        description: "Find M.U.L.E. stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed51652f6c34d2cc26336a1",
                            name: "M.U.L.E. stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed51652f6c34d2cc26336a1-icon.webp",
                        },
                    },
                    {
                        id: "5edac1040880da21347b3845",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed51652f6c34d2cc26336a1",
                            name: "M.U.L.E. stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed51652f6c34d2cc26336a1-icon.webp",
                        },
                    },
                    {
                        id: "5edac13760bdcc7ff355811f",
                        description:
                            'Find "Obdolbos" cocktail injector in raid',
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed5166ad380ab312177c100",
                            name: '"Obdolbos" cocktail injector',
                            iconLink:
                                "https://assets.tarkov.dev/5ed5166ad380ab312177c100-icon.webp",
                        },
                    },
                    {
                        id: "5edac1530880da21347b3846",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed5166ad380ab312177c100",
                            name: '"Obdolbos" cocktail injector',
                            iconLink:
                                "https://assets.tarkov.dev/5ed5166ad380ab312177c100-icon.webp",
                        },
                    },
                    {
                        id: "5edac190cecc0069284c0ed2",
                        description: "Find Meldonin stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed5160a87bb8443d10680b5",
                            name: "Meldonin injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed5160a87bb8443d10680b5-icon.webp",
                        },
                    },
                    {
                        id: "5edac1b2930f5454f51dcac4",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed5160a87bb8443d10680b5",
                            name: "Meldonin injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed5160a87bb8443d10680b5-icon.webp",
                        },
                    },
                    {
                        id: "5edac1e116d985118871ba24",
                        description: "Find AHF1-M stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515f6915ec335206e4152",
                            name: "AHF1-M stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515f6915ec335206e4152-icon.webp",
                        },
                    },
                    {
                        id: "5edac1fccc183c769d778bd3",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515f6915ec335206e4152",
                            name: "AHF1-M stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515f6915ec335206e4152-icon.webp",
                        },
                    },
                    {
                        id: "5edac22860bdcc7ff3558124",
                        description: "Find P22 stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515ece452db0eb56fc028",
                            name: "P22 (Product 22) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515ece452db0eb56fc028-icon.webp",
                        },
                    },
                    {
                        id: "5edac2582ddc9e4c802cd970",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515ece452db0eb56fc028",
                            name: "P22 (Product 22) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515ece452db0eb56fc028-icon.webp",
                        },
                    },
                    {
                        id: "5edac2897869412e9c669c32",
                        description:
                            "Find L1 (Norepinephrine) stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515e03a40a50460332579",
                            name: "L1 (Norepinephrine) injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515e03a40a50460332579-icon.webp",
                        },
                    },
                    {
                        id: "5edac2a260bdcc7ff3558127",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515e03a40a50460332579",
                            name: "L1 (Norepinephrine) injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515e03a40a50460332579-icon.webp",
                        },
                    },
                    {
                        id: "5edac2cc16d985118871ba29",
                        description: "Find 3-(b-TG) stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515c8d380ab312177c0fa",
                            name: "3-(b-TG) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515c8d380ab312177c0fa-icon.webp",
                        },
                    },
                    {
                        id: "5edac2e10bb72a50635c2bf9",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515c8d380ab312177c0fa",
                            name: "3-(b-TG) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515c8d380ab312177c0fa-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6179ad0a6e9dd54ac275e3f2",
                name: "The Huntsman Path - Outcasts",
                taskImageLink:
                    "https://assets.tarkov.dev/6179ad0a6e9dd54ac275e3f2.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "617bf1e1d93d977d2452051f",
                        description: "Eliminate Rogues on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5b478eca86f7744642012254",
                name: "Vitamins - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5b478eca86f7744642012254.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "5b478f6886f774464201225a",
                        description:
                            "Obtain the first Chemical container on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b478f8886f7744d1b23c622",
                        description: "Hand over the first container",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c826b86f7743cc87bcee4",
                        description:
                            "Obtain the second Chemical container on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c832686f77419603eb8f0",
                        description: "Hand over the second container",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c82cd86f774170c6e4169",
                        description:
                            "Obtain the third Chemical container on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c836486f77417063a09dc",
                        description: "Hand over the third container",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "64f5aac4b63b74469b6c14c2",
                name: "Glory to CPSU - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/64f5aac4b63b74469b6c14c2.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "64f5aac4b63b74469b6c14c7",
                        description:
                            "Locate the place of work of Prapor's friend on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "64f5b876a2a5bb727b61c5ad",
                        description:
                            "Obtain any information on the fate of Prapor's friend",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64f5bbc967e11a7c6206e00e",
                        description: "Hand over the found data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "639872fc93ae507d5858c3a6",
                name: "Gunsmith - Part 11",
                taskImageLink:
                    "https://assets.tarkov.dev/639872fc93ae507d5858c3a6.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "63987860c8f8cc12a47b02a6",
                        description:
                            "Modify a KRISS Vector 9x19 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "639136f086e646067c176a8b",
                name: "Kings of the Rooftops",
                taskImageLink:
                    "https://assets.tarkov.dev/639136f086e646067c176a8b.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "63929224744e45201147081a",
                        description:
                            "Eliminate the snipers on the rooftops on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "639d00a28fe84d33a25a142f",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5b478ff486f7744d184ecbbf",
                name: "Vitamins - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5b478ff486f7744d184ecbbf.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "5b47905886f7746807461fe2",
                        description: "Hand over the respirators",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7715586f7742ee5789605",
                            name: "Respirator",
                            iconLink:
                                "https://assets.tarkov.dev/59e7715586f7742ee5789605-icon.webp",
                        },
                    },
                    {
                        id: "5cb5ffd986f7746ef55de2c7",
                        description: "Find Respirators in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7715586f7742ee5789605",
                            name: "Respirator",
                            iconLink:
                                "https://assets.tarkov.dev/59e7715586f7742ee5789605-icon.webp",
                        },
                    },
                    {
                        id: "5ec1388d83b69d213d3c2ee0",
                        description: "Find Medical bloodsets in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4335ba86f7744d2837a264",
                            name: "Medical bloodset",
                            iconLink:
                                "https://assets.tarkov.dev/5b4335ba86f7744d2837a264-icon.webp",
                        },
                    },
                    {
                        id: "5b4790a886f774563c7a489f",
                        description: "Hand over the bloodsets",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4335ba86f7744d2837a264",
                            name: "Medical bloodset",
                            iconLink:
                                "https://assets.tarkov.dev/5b4335ba86f7744d2837a264-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5edac34d0bb72a50635c2bfa",
                name: "Colleagues - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5edac34d0bb72a50635c2bfa.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "5f046f9825b2ad51bd275800",
                        description: "Do not kill Sanitar",
                        optional: false,
                        __typename: "TaskObjectiveTaskStatus",
                    },
                    {
                        id: "5f07025e27cec53d5d24fe25",
                        description:
                            "Find TerraGroup Labs access keycards in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c94bbff86f7747ee735c08f",
                            name: "TerraGroup Labs access keycard",
                            iconLink:
                                "https://assets.tarkov.dev/5c94bbff86f7747ee735c08f-icon.webp",
                        },
                    },
                    {
                        id: "5f04935cde3b9e0ecf03d864",
                        description: "Hand over the keycards",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c94bbff86f7747ee735c08f",
                            name: "TerraGroup Labs access keycard",
                            iconLink:
                                "https://assets.tarkov.dev/5c94bbff86f7747ee735c08f-icon.webp",
                        },
                    },
                    {
                        id: "5f070323d57aeb6e09253785",
                        description: "Find AHF1-M stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515f6915ec335206e4152",
                            name: "AHF1-M stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515f6915ec335206e4152-icon.webp",
                        },
                    },
                    {
                        id: "5f0495458654d20be3564f4c",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515f6915ec335206e4152",
                            name: "AHF1-M stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515f6915ec335206e4152-icon.webp",
                        },
                    },
                    {
                        id: "5f070350f6b5847ad975ceac",
                        description: "Find 3-(b-TG) stimulant injector in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515c8d380ab312177c0fa",
                            name: "3-(b-TG) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515c8d380ab312177c0fa-icon.webp",
                        },
                    },
                    {
                        id: "5f0495b8efefac7f7227de63",
                        description: "Hand over the injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ed515c8d380ab312177c0fa",
                            name: "3-(b-TG) stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5ed515c8d380ab312177c0fa-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "64f5e20652fc01298e2c61e3",
                name: "Beyond the Red Meat - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/64f5e20652fc01298e2c61e3.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "64f6a9e6dd44b6417729b535",
                        description:
                            "Locate and obtain information on culinary secrets at the Beluga restaurant on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64f6aa6cdd44b6417729b536",
                        description: "Hand over the found data",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6573397ef3f8344c4575cd87",
                name: "Properties All Around",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "6573397ef3f8344c4575cd88",
                        description:
                            "Locate the real estate fund on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6581676e7a18ff402fd23e68",
                        description:
                            "Locate and obtain the Tarkov real estate transactions document",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "658167a0e53c40116f8632fa",
                        description: "Hand over the obtained information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "64f6aafd67e11a7c6206e0d0",
                name: "Beyond the Red Meat - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/64f6aafd67e11a7c6206e0d0.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "64f6aafd67e11a7c6206e0d1",
                        description:
                            "Locate and obtain the secret ingredient at the TerraGroup office on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64f6aafd67e11a7c6206e0d2",
                        description: "Hand over the chemical additive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5f04886a3937dc337a6b8238",
                name: "Chemistry Closet",
                taskImageLink:
                    "https://assets.tarkov.dev/5f04886a3937dc337a6b8238.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "5f0488c590eea473df674002",
                        description:
                            "Locate Sanitar's office in the health resort",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5f04983ffbed7a08077b4367",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5edab4b1218d181e29451435",
                name: "The Huntsman Path - Sadist",
                taskImageLink:
                    "https://assets.tarkov.dev/5edab4b1218d181e29451435.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 22,
                objectives: [
                    {
                        id: "5edab5a6cecc0069284c0ec2",
                        description: "Locate and eliminate Sanitar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "639136df4b15ca31f76bc31f",
                name: "The Huntsman Path - Administrator",
                taskImageLink:
                    "https://assets.tarkov.dev/639136df4b15ca31f76bc31f.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 23,
                objectives: [
                    {
                        id: "639285879444fb141f4e6f25",
                        description:
                            "Eliminate any target at the Pinewood hotel on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63aaccae87413d64ae079631",
                        description:
                            "Shoot a yellow signal flare in the hotel's courtyard",
                        optional: false,
                        __typename: "TaskObjectiveUseItem",
                    },
                ],
            },
            {
                id: "5b47799d86f7746c5d6a5fd8",
                name: "Gunsmith - Part 12",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47799d86f7746c5d6a5fd8.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 23,
                objectives: [
                    {
                        id: "5b477b3b86f77401da02e6c4",
                        description:
                            "Modify a SIG MPX to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "6578eb36e5020875d64645cd",
                name: "The Huntsman Path - Crooked Cop",
                taskImageLink:
                    "https://assets.tarkov.dev/6578eb36e5020875d64645cd.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 23,
                objectives: [
                    {
                        id: "6578eb36e5020875d64645d0",
                        description:
                            "Locate and eliminate Kollontai on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "6580130847df99b0741919f0",
                        description:
                            "Eliminate Kollontai's guards on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "6582b05dc992d6dcc0a40c75",
                        description: "Hand over Kollontai's police baton",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "6540d2162ae6d96b540afcaf",
                            name: "PR-Taran police baton",
                            iconLink:
                                "https://assets.tarkov.dev/6540d2162ae6d96b540afcaf-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5edac63b930f5454f51e128b",
                name: "TerraGroup Employee",
                taskImageLink:
                    "https://assets.tarkov.dev/5edac63b930f5454f51e128b.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 23,
                objectives: [
                    {
                        id: "5eec9d054110547f1f545c99",
                        description: "Find Sanitar's workplace in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5eff5674befb6436ce3bbaf7",
                        description: "Obtain information about Sanitar's work",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5edac8483c809a44ef12b4d2",
                        description:
                            "Hand over the Flash drive marked with blue tape",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5b478d0f86f7744d190d91b5",
                name: "Minibus",
                taskImageLink:
                    "https://assets.tarkov.dev/5b478d0f86f7744d190d91b5.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 24,
                objectives: [
                    {
                        id: "5b478d8986f774563c7a4809",
                        description:
                            "Locate and mark the first yellow minibus with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5b478daf86f7744d1c35339b",
                        description:
                            "Locate and mark the second yellow minibus with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5b478dca86f7744d190d91c2",
                        description:
                            "Locate and mark the third yellow minibus with an MS2000 Marker on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5b478de086f7744d1c3533a1",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5b47926a86f7747ccc057c15",
                name: "Informed Means Armed",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47926a86f7747ccc057c15.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 24,
                objectives: [
                    {
                        id: "5b47932586f7747cc908b5dd",
                        description:
                            "Install a WI-FI Camera to watch the sawmill dock on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "5b47936686f77427fd044025",
                        description:
                            "Install a WI-FI Camera to watch the road to the port on Customs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "5b47938086f7747ccc057c22",
                        description:
                            "Install a WI-FI Camera to watch the Kiba Arms store entrance on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5b4795fb86f7745876267770",
                name: "Chumming",
                taskImageLink:
                    "https://assets.tarkov.dev/5b4795fb86f7745876267770.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 24,
                objectives: [
                    {
                        id: "5b47968e86f7745877352c28",
                        description:
                            "Stash Golden neck chains under the mattress next to BTR-82A in Generic Store on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734758f24597738025ee253",
                            name: "Golden neck chain",
                            iconLink:
                                "https://assets.tarkov.dev/5734758f24597738025ee253-icon.webp",
                        },
                    },
                    {
                        id: "5b4796c086f7745877352c2c",
                        description:
                            "Stash Golden neck chains in the microwave on the 3rd floor of the dorm on Customs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734758f24597738025ee253",
                            name: "Golden neck chain",
                            iconLink:
                                "https://assets.tarkov.dev/5734758f24597738025ee253-icon.webp",
                        },
                    },
                    {
                        id: "5b47971086f774587877ad34",
                        description:
                            "Stash Golden neck chains in the middle wooden cabin at the sawmill on Woods",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734758f24597738025ee253",
                            name: "Golden neck chain",
                            iconLink:
                                "https://assets.tarkov.dev/5734758f24597738025ee253-icon.webp",
                        },
                    },
                    {
                        id: "5c923d3d86f774556e08d7a5",
                        description:
                            "Eliminate PMC operatives in the time period of 22:00-10:00 on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "658027799634223183395339",
                name: "No Swiping",
                taskImageLink:
                    "https://assets.tarkov.dev/658027799634223183395339.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 24,
                objectives: [
                    {
                        id: "65802779963422318339533a",
                        description: "Locate the smugglers' base on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65802779963422318339533c",
                        description: "Eliminate any enemy in the base area",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5b4794cb86f774598100d5d4",
                name: "Lend-Lease - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5b4794cb86f774598100d5d4.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5b47952c86f774598100d5dc",
                        description:
                            "Obtain the first Motor Controller on Woods",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c764786f7746f3b494ee0",
                        description: "Hand over the first controller",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c742886f7745cef1d02f5",
                        description:
                            "Obtain the second Motor Controller on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c769686f7746e535a5c0e",
                        description: "Hand over the second controller",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c75a786f7747332534b52",
                        description:
                            "Obtain the third Motor Controller on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c76d886f77471d31735a3",
                        description: "Hand over the third controller",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b47958e86f774598100d5e2",
                        description:
                            "Obtain the first Single-axis Fiber Optic Gyroscope on Woods",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4795a586f774587a39506d",
                        description: "Hand over the first gyroscope",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c8e6586f77474396a5400",
                        description:
                            "Obtain the second Single-axis Fiber Optic Gyroscope on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5b4c7aec86f77459732b4b08",
                        description: "Hand over the second gyroscope",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5d4bec3486f7743cac246665",
                name: "Regulated Materials",
                taskImageLink:
                    "https://assets.tarkov.dev/5d4bec3486f7743cac246665.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5d4bfe4b86f7744a9d4fe032",
                        description:
                            "Find 6-STEN-140-M military battery in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d03794386f77420415576f5",
                            name: "6-STEN-140-M military battery",
                            iconLink:
                                "https://assets.tarkov.dev/5d03794386f77420415576f5-icon.webp",
                        },
                    },
                    {
                        id: "5d4bfe7c86f7744a9c66b316",
                        description: "Hand over the military battery",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d03794386f77420415576f5",
                            name: "6-STEN-140-M military battery",
                            iconLink:
                                "https://assets.tarkov.dev/5d03794386f77420415576f5-icon.webp",
                        },
                    },
                    {
                        id: "5d4c020a86f77449c463ced6",
                        description: "Find OFZ 30x160mm shells in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d0379a886f77420407aa271",
                            name: "OFZ 30x160mm shell",
                            iconLink:
                                "https://assets.tarkov.dev/5d0379a886f77420407aa271-icon.webp",
                        },
                    },
                    {
                        id: "5d4c028c86f774389001e027",
                        description: "Hand over the OFZ shells",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d0379a886f77420407aa271",
                            name: "OFZ 30x160mm shell",
                            iconLink:
                                "https://assets.tarkov.dev/5d0379a886f77420407aa271-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c0bd01e86f7747cdd799e56",
                name: "Insomnia",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bd01e86f7747cdd799e56.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5c1242fa86f7742aa04fed52",
                        description:
                            "Eliminate PMC operatives in the time period of 22:00-05:00 (Excluding Factory and The Lab)",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "6179b3a12153c15e937d52bc",
                name: "Energy Crisis",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b3a12153c15e937d52bc.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "617bf5860cf4a041de5b396b",
                        description:
                            "Find and mark the group of fuel tanks with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "61926522b0295324b5484459",
                        description:
                            "Find and mark the first tanker truck with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6192653d80c326298126aee1",
                        description:
                            "Find and mark the second tanker truck with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "61926544bb0c712ed42d583c",
                        description:
                            "Find and mark the third tanker truck with an MS2000 Marker on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "5ae4495086f77443c122bc40",
                name: "Sew it Good - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4495086f77443c122bc40.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5ae4559386f7742dc043c95e",
                        description: "Find Ski hat with holes for eyes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8f20c86f7745cdb629fb2",
                            name: "Ski hat with holes for eyes",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8f20c86f7745cdb629fb2-icon.webp",
                        },
                    },
                    {
                        id: "5ae455be86f7742dc043c969",
                        description: "Hand over the ski hat",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8f20c86f7745cdb629fb2",
                            name: "Ski hat with holes for eyes",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8f20c86f7745cdb629fb2-icon.webp",
                        },
                    },
                    {
                        id: "5ae455fb86f7744dd8242380",
                        description: "Find Pilgrim tourist backpack in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e763f286f7742ee57895da",
                            name: "Pilgrim tourist backpack",
                            iconLink:
                                "https://assets.tarkov.dev/59e763f286f7742ee57895da-icon.webp",
                        },
                    },
                    {
                        id: "5ae4562086f774498b05e0dc",
                        description: "Hand over the backpack",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e763f286f7742ee57895da",
                            name: "Pilgrim tourist backpack",
                            iconLink:
                                "https://assets.tarkov.dev/59e763f286f7742ee57895da-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25e46e86f77409453bce7c",
                name: "Ambulance",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e46e86f77409453bce7c.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5d27446f86f77475a86565a3",
                        description: "Hand over the defibrillator",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052e6986f7746b207bc3c9",
                            name: "Portable defibrillator",
                            iconLink:
                                "https://assets.tarkov.dev/5c052e6986f7746b207bc3c9-icon.webp",
                        },
                    },
                    {
                        id: "5ec1538a92e95f77ac7a2529",
                        description: "Find CMS surgical kits in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d02778e86f774203e7dedbe",
                            name: "CMS surgical kit",
                            iconLink:
                                "https://assets.tarkov.dev/5d02778e86f774203e7dedbe-icon.webp",
                        },
                    },
                    {
                        id: "5ec1504183b69d213d3c2ee8",
                        description: "Find Portable defibrillator in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052e6986f7746b207bc3c9",
                            name: "Portable defibrillator",
                            iconLink:
                                "https://assets.tarkov.dev/5c052e6986f7746b207bc3c9-icon.webp",
                        },
                    },
                    {
                        id: "5d7782c686f7742fa732bf07",
                        description: "Hand over the CMS kits",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d02778e86f774203e7dedbe",
                            name: "CMS surgical kit",
                            iconLink:
                                "https://assets.tarkov.dev/5d02778e86f774203e7dedbe-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac244c486f77413e12cf945",
                name: "Gunsmith - Part 13",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac244c486f77413e12cf945.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5acce11786f77411ed6fa6eb",
                        description:
                            "Modify an R11 RSASS to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5c0bbaa886f7746941031d82",
                name: "Bullshit",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bbaa886f7746941031d82.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5c50481c86f77410650e0521",
                        description:
                            "Obtain the False flash drive from the specified spot on Customs",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5c0bc32986f7743e4d1002d2",
                        description:
                            "Stash SV-98 sniper rifle in the trash opposite of stairs on the 3rd floor of the dorm",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "55801eed4bdc2d89578b4588",
                            name: "SV-98 7.62x54R bolt-action sniper rifle",
                            iconLink:
                                "https://assets.tarkov.dev/55801eed4bdc2d89578b4588-icon.webp",
                        },
                    },
                    {
                        id: "5c0bc43e86f7744794440ba5",
                        description:
                            "Stash Roler Submariner gold wrist watch in the trash opposite of stairs on the 3rd floor of the dorm",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59faf7ca86f7740dbe19f6c2",
                            name: "Roler Submariner gold wrist watch",
                            iconLink:
                                "https://assets.tarkov.dev/59faf7ca86f7740dbe19f6c2-icon.webp",
                        },
                    },
                    {
                        id: "5c12320586f77437e44bcb15",
                        description:
                            "Stash the False flash drive in the trash opposite of stairs on the 3rd floor of the dorm",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5ae4495c86f7744e87761355",
                name: "Sew it Good - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4495c86f7744e87761355.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5ae9b77f86f77432c81e3074",
                        description:
                            "Obtain BNTI Gzhel-K armor in 0-50% durability",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8e79e86f7742d8b372e78",
                            name: "BNTI Gzhel-K body armor",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-icon.webp",
                        },
                    },
                    {
                        id: "5ae9b7c886f774307c29df56",
                        description: "Hand over the armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8e79e86f7742d8b372e78",
                            name: "BNTI Gzhel-K body armor",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-icon.webp",
                        },
                    },
                    {
                        id: "5ae9b91386f77415a869b3f3",
                        description:
                            "Obtain BNTI Gzhel-K armor in 50-100% durability",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 50,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8e79e86f7742d8b372e78",
                            name: "BNTI Gzhel-K body armor",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-icon.webp",
                        },
                    },
                    {
                        id: "5ae9b93b86f7746e0026221a",
                        description: "Hand over the armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 50,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8e79e86f7742d8b372e78",
                            name: "BNTI Gzhel-K body armor",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae4496986f774459e77beb6",
                name: "Sew it Good - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4496986f774459e77beb6.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5ae9bb6986f77415a869b40b",
                        description:
                            "Obtain 6B43 6A Zabralo-Sh body armor in 0-50% durability",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "545cdb794bdc2d3a198b456a",
                            name: "6B43 Zabralo-Sh body armor (Digital Flora)",
                            iconLink:
                                "https://assets.tarkov.dev/545cdb794bdc2d3a198b456a-icon.webp",
                        },
                    },
                    {
                        id: "5ae9bc6e86f7746e0026222c",
                        description: "Hand over the armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "545cdb794bdc2d3a198b456a",
                            name: "6B43 Zabralo-Sh body armor (Digital Flora)",
                            iconLink:
                                "https://assets.tarkov.dev/545cdb794bdc2d3a198b456a-icon.webp",
                        },
                    },
                    {
                        id: "5ae9be7f86f7746c6337153d",
                        description:
                            "Obtain 6B43 6A Zabralo-Sh body armor in 50-100% durability",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 50,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "545cdb794bdc2d3a198b456a",
                            name: "6B43 Zabralo-Sh body armor (Digital Flora)",
                            iconLink:
                                "https://assets.tarkov.dev/545cdb794bdc2d3a198b456a-icon.webp",
                        },
                    },
                    {
                        id: "5ae9bea886f77468ab400e64",
                        description: "Hand over the armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 50,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "545cdb794bdc2d3a198b456a",
                            name: "6B43 Zabralo-Sh body armor (Digital Flora)",
                            iconLink:
                                "https://assets.tarkov.dev/545cdb794bdc2d3a198b456a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "65733403eefc2c312a759ddb",
                name: "Developer's Secrets - Part 1",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "65733403eefc2c312a759ddc",
                        description:
                            "Locate the IT firm office on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65801ad655315fdce2096bec",
                        description: "Unravel the secret of the firm's success",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65801b07a26e65a69c2fedd1",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae4497b86f7744cf402ed00",
                name: "Sew it Good - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4497b86f7744cf402ed00.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5ae45d7786f774178f237745",
                        description:
                            "Find WARTECH TV-109 + TV-106 chest rigs in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7643b86f7742cbf2c109a",
                            name: "WARTECH TV-109 + TV-106 chest rig (A-TACS FG)",
                            iconLink:
                                "https://assets.tarkov.dev/59e7643b86f7742cbf2c109a-icon.webp",
                        },
                    },
                    {
                        id: "5ae45d9386f774178f23774a",
                        description: "Hand over the chest rigs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e7643b86f7742cbf2c109a",
                            name: "WARTECH TV-109 + TV-106 chest rig (A-TACS FG)",
                            iconLink:
                                "https://assets.tarkov.dev/59e7643b86f7742cbf2c109a-icon.webp",
                        },
                    },
                    {
                        id: "5af079e486f77434693ad7f8",
                        description: "Find BlackRock chest rigs in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5648a69d4bdc2ded0b8b457b",
                            name: "BlackRock chest rig (Gray)",
                            iconLink:
                                "https://assets.tarkov.dev/5648a69d4bdc2ded0b8b457b-icon.webp",
                        },
                    },
                    {
                        id: "5af07a0286f7747dba10d8ac",
                        description: "Hand over the chest rigs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5648a69d4bdc2ded0b8b457b",
                            name: "BlackRock chest rig (Gray)",
                            iconLink:
                                "https://assets.tarkov.dev/5648a69d4bdc2ded0b8b457b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6573382e557ff128bf3da536",
                name: "Developer's Secrets - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/6573382e557ff128bf3da536.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "6573382e557ff128bf3da537",
                        description:
                            "Unravel the secret of the IT firm's employees' high morale on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65800413f41301adef3c9698",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "63a9b229813bba58a50c9ee5",
                name: "Worst Job in the World",
                taskImageLink:
                    "https://assets.tarkov.dev/63a9b229813bba58a50c9ee5.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "63a9b229813bba58a50c9ee6",
                        description:
                            "Eliminate any hostile from over 100 meters away while using AR-15 platform weapons",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "639135e8c115f907b14700aa",
                name: "Surveillance",
                taskImageLink:
                    "https://assets.tarkov.dev/639135e8c115f907b14700aa.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "639135e8c115f907b14700ab",
                        description:
                            "Obtain the data on vehicle movement at the Concordia residential complex parking lot on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639135e8c115f907b14700ac",
                        description: "Hand over the information",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5b47876e86f7744d1c353205",
                name: "The Blood of War - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47876e86f7744d1c353205.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5b47884886f7744d1c35327d",
                        description: "Find Fuel conditioners in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b43575a86f77424f443fe62",
                            name: "Fuel conditioner",
                            iconLink:
                                "https://assets.tarkov.dev/5b43575a86f77424f443fe62-icon.webp",
                        },
                    },
                    {
                        id: "5b47886986f7744d1a393e65",
                        description: "Hand over the Fuel conditioners",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b43575a86f77424f443fe62",
                            name: "Fuel conditioner",
                            iconLink:
                                "https://assets.tarkov.dev/5b43575a86f77424f443fe62-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae4499a86f77449783815db",
                name: "Charisma Brings Success",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4499a86f77449783815db.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "5ae9c29386f77427153c7fb0",
                        description: "Reach the required Charisma skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "63a9ae24009ffc6a551631a5",
                name: "Best Job in the World",
                taskImageLink:
                    "https://assets.tarkov.dev/63a9ae24009ffc6a551631a5.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "63a9ae63da7999196148ba5c",
                        description:
                            "Eliminate any hostile from over 100 meters away while using AK-74 series weapons",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "639135bbc115f907b14700a6",
                name: "Audiophile",
                taskImageLink:
                    "https://assets.tarkov.dev/639135bbc115f907b14700a6.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 25,
                objectives: [
                    {
                        id: "63a7d8f404d3dc28a52a2104",
                        description:
                            "Locate the musician gathering spot on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639135bbc115f907b14700a7",
                        description: "Obtain the engraved guitar pick",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639135bbc115f907b14700a8",
                        description: "Hand over the guitar pick",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6179afd0bca27a099552e040",
                name: "Lost Contact",
                taskImageLink:
                    "https://assets.tarkov.dev/6179afd0bca27a099552e040.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 26,
                objectives: [
                    {
                        id: "63ac0c99f83fd608393890bf",
                        description:
                            "Find the lost group in the chalet area on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6190464d74169a76c90aa230",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5ae4498786f7744bde357695",
                name: "The Key to Success",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae4498786f7744bde357695.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 26,
                objectives: [
                    {
                        id: "5ae9c0a686f774703201f143",
                        description:
                            "Obtain the Clothes design handbook - Part 1 on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9c0c986f77468ab400f88",
                        description: "Hand over the first book",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9c0e186f7746419683c5e",
                        description:
                            "Obtain the Clothes design handbook - Part 2 on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5ae9c10686f774703201f146",
                        description: "Hand over the second book",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5ae449a586f7744bde357696",
                name: "No Fuss Needed",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae449a586f7744bde357696.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 26,
                objectives: [
                    {
                        id: "5ae9c38e86f7743515398707",
                        description: "Reach level 3 loyalty with Therapist",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                ],
            },
            {
                id: "626bd75b05f287031503c7f6",
                name: "Drug Trafficking",
                taskImageLink:
                    "https://assets.tarkov.dev/626bd75b05f287031503c7f6.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 26,
                objectives: [
                    {
                        id: "63ac210b1287ef0b827d0cb8",
                        description: "Locate the hidden drug lab on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "626c3010a371ee3a7a3514cb",
                        description: "Stash a WI-FI Camera in the drug lab",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6391372c8ba6894d155e77d7",
                name: "Broadcast - Part 4",
                taskImageLink:
                    "https://assets.tarkov.dev/6391372c8ba6894d155e77d7.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 27,
                objectives: [
                    {
                        id: "63a7d6d61f06d111271f5aeb",
                        description:
                            "Locate the cultist meeting spot on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639da86bad9d7e3216668fd7",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639872fe8871e1272b10ccf6",
                name: "Gunsmith - Part 14",
                taskImageLink:
                    "https://assets.tarkov.dev/639872fe8871e1272b10ccf6.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 27,
                objectives: [
                    {
                        id: "639879addecada40426d3449",
                        description:
                            "Modify an HK 416A5 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "64ee99639878a0569d6ec8c9",
                name: "Broadcast - Part 5",
                taskImageLink:
                    "https://assets.tarkov.dev/64ee99639878a0569d6ec8c9.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 27,
                objectives: [
                    {
                        id: "64eea404a2a5bb727b61c31e",
                        description: "Locate and eliminate Priest",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64ee9a979878a0569d6ec8cb",
                        description:
                            "Locate the ritual spot on Chekannaya st. on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "64ee9b5a1a5f313cb144bf87",
                        description: "Stash a Cultist knife at the ritual spot",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fc64ea372b0dd78d51159dc",
                            name: "Cultist knife",
                            iconLink:
                                "https://assets.tarkov.dev/5fc64ea372b0dd78d51159dc-icon.webp",
                        },
                    },
                    {
                        id: "64ee9cc69a4f90510651507e",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5b47891f86f7744d1b23c571",
                name: "Living High is Not a Crime - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47891f86f7744d1b23c571.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 27,
                objectives: [
                    {
                        id: "5b47899386f77470315db7f3",
                        description: "Find Bronze lions in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3639286f7741777737013",
                            name: "Bronze lion figurine",
                            iconLink:
                                "https://assets.tarkov.dev/59e3639286f7741777737013-icon.webp",
                        },
                    },
                    {
                        id: "5b4789b586f7744d190d8f43",
                        description: "Hand over the Bronze lions",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3639286f7741777737013",
                            name: "Bronze lion figurine",
                            iconLink:
                                "https://assets.tarkov.dev/59e3639286f7741777737013-icon.webp",
                        },
                    },
                    {
                        id: "5b4789df86f77468074619d7",
                        description: "Find Horse figurines in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573478bc24597738002c6175",
                            name: "Horse figurine",
                            iconLink:
                                "https://assets.tarkov.dev/573478bc24597738002c6175-icon.webp",
                        },
                    },
                    {
                        id: "5b478a0986f7744d190d8f46",
                        description: "Hand over the Horse figurines",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "573478bc24597738002c6175",
                            name: "Horse figurine",
                            iconLink:
                                "https://assets.tarkov.dev/573478bc24597738002c6175-icon.webp",
                        },
                    },
                    {
                        id: "5b478a2186f77468074619da",
                        description: "Find Cat figurine in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3658a86f7741776641ac4",
                            name: "Cat figurine",
                            iconLink:
                                "https://assets.tarkov.dev/59e3658a86f7741776641ac4-icon.webp",
                        },
                    },
                    {
                        id: "5b478a3786f77470315db7fa",
                        description: "Hand over the Cat figurine",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e3658a86f7741776641ac4",
                            name: "Cat figurine",
                            iconLink:
                                "https://assets.tarkov.dev/59e3658a86f7741776641ac4-icon.webp",
                        },
                    },
                    {
                        id: "5b478a6c86f7744d190d8f4d",
                        description:
                            "Find Roler Submariner gold wrist watch in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59faf7ca86f7740dbe19f6c2",
                            name: "Roler Submariner gold wrist watch",
                            iconLink:
                                "https://assets.tarkov.dev/59faf7ca86f7740dbe19f6c2-icon.webp",
                        },
                    },
                    {
                        id: "5b478a8486f7744d1c35328b",
                        description: "Hand over the wrist watch",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59faf7ca86f7740dbe19f6c2",
                            name: "Roler Submariner gold wrist watch",
                            iconLink:
                                "https://assets.tarkov.dev/59faf7ca86f7740dbe19f6c2-icon.webp",
                        },
                    },
                    {
                        id: "62a7004c1c307729c3264f9a",
                        description: "Find Golden egg in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09cfe4f842e1bd12da3e4",
                            name: "Golden egg",
                            iconLink:
                                "https://assets.tarkov.dev/62a09cfe4f842e1bd12da3e4-icon.webp",
                        },
                    },
                    {
                        id: "62a70058ec21e50cad3b6709",
                        description: "Hand over the Golden egg",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09cfe4f842e1bd12da3e4",
                            name: "Golden egg",
                            iconLink:
                                "https://assets.tarkov.dev/62a09cfe4f842e1bd12da3e4-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5d25e4ad86f77443e625e387",
                name: "Nostalgia",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e4ad86f77443e625e387.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 28,
                objectives: [
                    {
                        id: "5d357e0e86f7745b3f307c56",
                        description:
                            "Locate Jaeger's Health Resort room with a view of the bay on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "5d357e8786f7745b5e66a51a",
                        description: "Obtain Jaeger's photo album",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "5d27522686f774304e316405",
                        description: "Hand over the photo album",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6572e876dc0d635f633a5714",
                name: "Pyramid Scheme",
                taskImageLink:
                    "https://assets.tarkov.dev/6572e876dc0d635f633a5714.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 28,
                objectives: [
                    {
                        id: "6573057d66de94c756a60472",
                        description:
                            "Locate the first ATM on Nizhnaya Sadovaya Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65730580123b33fa7bb1a9fc",
                        description:
                            "Locate the second ATM on Nizhnaya Sadovaya Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657305885511555648dbb952",
                        description:
                            "Locate the ATM on Razvedchikov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6572e876dc0d635f633a5718",
                        description:
                            "Locate the first group of ATMs on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65730579d50436e87723dae4",
                        description:
                            "Locate the first ATM on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573058b4e3f646b0e364add",
                        description:
                            "Locate the group of ATMs on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573058d6a542c099ce5d92b",
                        description:
                            "Locate the second ATM on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573058f5c2ba64444301c25",
                        description:
                            "Locate the fourth group of ATMs on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65730595fd5ec1426ebd5484",
                        description:
                            "Locate the fifth group of ATMs on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657305913186869491d7f5fd",
                        description:
                            "Locate the third ATM on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65730593d4b1bd9359203a74",
                        description:
                            "Locate the fourth ATM on Klimov Street on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573058510b6071846639907",
                        description:
                            "Locate the first ATM on Primorsky Ave on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "65730597d64537696cc661c6",
                        description:
                            "Locate the second ATM on Primorsky Ave on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "657305989d1d1fe81237e9e7",
                        description:
                            "Locate the third ATM on Primorsky Ave on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "6573059ace022903ee1e6b11",
                        description:
                            "Locate the ATM at the expo on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "5d25e4b786f77408251c4bfc",
                name: "Fishing Place",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e4b786f77408251c4bfc.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 28,
                objectives: [
                    {
                        id: "5d2f375186f7745916404955",
                        description:
                            "Find TerraGroup Labs access keycards in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c94bbff86f7747ee735c08f",
                            name: "TerraGroup Labs access keycard",
                            iconLink:
                                "https://assets.tarkov.dev/5c94bbff86f7747ee735c08f-icon.webp",
                        },
                    },
                    {
                        id: "5d8a09d386f77410b4225d13",
                        description: "Hand over the access keycards",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c94bbff86f7747ee735c08f",
                            name: "TerraGroup Labs access keycard",
                            iconLink:
                                "https://assets.tarkov.dev/5c94bbff86f7747ee735c08f-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5b478b1886f7744d1b23c57d",
                name: "Hot Delivery",
                taskImageLink:
                    "https://assets.tarkov.dev/5b478b1886f7744d1b23c57d.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 29,
                objectives: [
                    {
                        id: "5b478c4c86f7744d1a393fac",
                        description:
                            "Stash Peltor ComTac 2 in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5645bcc04bdc2d363b8b4572",
                            name: "Peltor ComTac 2 headset (OD Green)",
                            iconLink:
                                "https://assets.tarkov.dev/5645bcc04bdc2d363b8b4572-icon.webp",
                        },
                    },
                    {
                        id: "5b478c7386f7744d1a393fb1",
                        description:
                            "Stash 6B47 Helmets in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5a7c4850e899ef00150be885",
                            name: "6B47 Ratnik-BSh helmet (Olive Drab)",
                            iconLink:
                                "https://assets.tarkov.dev/5a7c4850e899ef00150be885-icon.webp",
                        },
                    },
                    {
                        id: "5b478cb586f7744d1a393fb5",
                        description:
                            "Stash BNTI Gzhel-K armor in the specified place",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ab8e79e86f7742d8b372e78",
                            name: "BNTI Gzhel-K body armor",
                            iconLink:
                                "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae3280386f7742a41359364",
                name: "Gunsmith - Part 15",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae3280386f7742a41359364.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 29,
                objectives: [
                    {
                        id: "5ae4479686f7744f6c79b7b3",
                        description:
                            "Modify an AS VAL to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5c112d7e86f7740d6f647486",
                name: "Scavenger",
                taskImageLink:
                    "https://assets.tarkov.dev/5c112d7e86f7740d6f647486.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 29,
                objectives: [
                    {
                        id: "5c112dc486f77465686bff38",
                        description: "Reach the required Search skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "64edbb1317ab941a6f7cc247",
                name: "Out of Time",
                taskImageLink:
                    "https://assets.tarkov.dev/64edbb1317ab941a6f7cc247.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 29,
                objectives: [
                    {
                        id: "64edbe9926cfa02c506f893f",
                        description: "Locate and obtain clock dial painting #1",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edbeae9878a0569d6ec747",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edce2d1a5f313cb144bf83",
                        description: "Locate and obtain clock dial painting #2",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edce599878a0569d6ec749",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edce90403fc9681a4b7d5e",
                        description: "Locate and obtain clock dial painting #3",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edce82496db64f9b7a442c",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcea1b63b74469b6c131a",
                        description: "Locate and obtain clock dial painting #4",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edceac67e11a7c6206dcd7",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcebb496db64f9b7a442d",
                        description: "Locate and obtain clock dial painting #5",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcec4a2a5bb727b61c25e",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcecd1a5f313cb144bf84",
                        description: "Locate and obtain clock dial painting #6",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edced69878a0569d6ec74a",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcee01180874bb93e857e",
                        description: "Locate and obtain clock dial painting #7",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcee7403fc9681a4b7d5f",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf0039e45b527a7c3fed",
                        description: "Locate and obtain clock dial painting #8",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf0932bed22c3e0c741d",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf27bf4c727e9c7bdb94",
                        description: "Locate and obtain clock dial painting #9",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf2f9a4f905106514fbe",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf48b63b74469b6c131b",
                        description:
                            "Locate and obtain clock dial painting #10",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf5067e11a7c6206dcd8",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf5c496db64f9b7a442e",
                        description:
                            "Locate and obtain clock dial painting #11",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf62a2a5bb727b61c25f",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf711a5f313cb144bf85",
                        description:
                            "Locate and obtain clock dial painting #12",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "64edcf7b496db64f9b7a442f",
                        description: "Hand over the painting",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6179b5eabca27a099552e052",
                name: "Counteraction",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b5eabca27a099552e052.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "61a61c085d06a344766f3a29",
                        description:
                            "Eliminate BEAR PMC operatives all over the Lighthouse territory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "617fc08b30ccff6c7c37fcd3",
                        description:
                            "Hand over the found in raid BEAR PMC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32bb586f774757e1e8442",
                            name: "Dogtag BEAR",
                            iconLink:
                                "https://assets.tarkov.dev/59f32bb586f774757e1e8442-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c1128e386f7746565181106",
                name: "Fertilizers",
                taskImageLink:
                    "https://assets.tarkov.dev/5c1128e386f7746565181106.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5ca719ef86f7740a78020783",
                        description: "Find Bundles of wires in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c06779c86f77426e00dd782",
                            name: "Bundle of wires",
                            iconLink:
                                "https://assets.tarkov.dev/5c06779c86f77426e00dd782-icon.webp",
                        },
                    },
                    {
                        id: "5ca71a1e86f7740f5a5b88a2",
                        description: "Find Capacitors in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c06782b86f77426df5407d2",
                            name: "Capacitors",
                            iconLink:
                                "https://assets.tarkov.dev/5c06782b86f77426df5407d2-icon.webp",
                        },
                    },
                    {
                        id: "5c1129ed86f7746569440e88",
                        description: "Hand over the wires",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c06779c86f77426e00dd782",
                            name: "Bundle of wires",
                            iconLink:
                                "https://assets.tarkov.dev/5c06779c86f77426e00dd782-icon.webp",
                        },
                    },
                    {
                        id: "5c112a1b86f774656777d1ae",
                        description: "Hand over the capacitors",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c06782b86f77426df5407d2",
                            name: "Capacitors",
                            iconLink:
                                "https://assets.tarkov.dev/5c06782b86f77426df5407d2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ae449c386f7744bde357697",
                name: "Sales Night",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae449c386f7744bde357697.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5bb60cbc88a45011a8235cc5",
                        description: "Survive and extract from Interchange",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5c0d0d5086f774363760aef2",
                name: "Athlete",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d0d5086f774363760aef2.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5c0d0dfd86f7747f482a89a5",
                        description: "Reach the required Health skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "6179b4f16e9dd54ac275e407",
                name: "Missing Cargo",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b4f16e9dd54ac275e407.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "63ac1a941b5c95746621ddb2",
                        description:
                            "Locate the crashed helicopter on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "61a00eff2d708d41a34f19b4",
                        description: "Find the informant's intelligence folder",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "61a00f3f177fb945751bbe92",
                        description: "Hand over the folder",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6179b5b06e9dd54ac275e409",
                name: "Our Own Land",
                taskImageLink:
                    "https://assets.tarkov.dev/6179b5b06e9dd54ac275e409.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "6193dc1e6623e330c82e0be9",
                        description:
                            "Eliminate USEC PMC operatives all over the Lighthouse territory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "6194fbf785a6d62c481a7aee",
                        description:
                            "Hand over the found in raid USEC PMC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c0bd94186f7747a727f09b2",
                name: "Test Drive - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bd94186f7747a727f09b2.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5c1b765d86f77413193fa4f2",
                        description:
                            "Eliminate PMC operatives from over 60 meters away while using an M1A rifle with Hybrid 46 suppressor and Schmidt & Bender PM II 1-8x24 scope",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e45e86f77408251c4bfa",
                name: "The Huntsman Path - Eraser - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e45e86f77408251c4bfa.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5d273a4d86f774457411b266",
                        description: "Eliminate Raiders",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c10f94386f774227172c572",
                name: "The Blood of War - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/5c10f94386f774227172c572.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5c10f94386f774227172c574",
                        description:
                            "Locate and mark the first fuel stash with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c10f94386f774227172c575",
                        description:
                            "Locate and mark the second fuel stash with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c10f94386f774227172c576",
                        description:
                            "Locate and mark the third fuel stash with an MS2000 Marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "5c10f94386f774227172c577",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5c0bc91486f7746ab41857a2",
                name: "Silent Caliber",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bc91486f7746ab41857a2.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5c0bc95086f7746e784f39ec",
                        description:
                            "Eliminate Scavs while using a suppressed 12ga shotgun",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c0bcc9c86f7746fe16dbba9",
                        description:
                            "Eliminate PMC operatives while using a suppressed 12ga shotgun",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c0d0f1886f77457b8210226",
                name: "Lend-Lease - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d0f1886f77457b8210226.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5ec13d45a1032866196c939b",
                        description:
                            "Find Virtex programmable processors in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05308086f7746b2101e90b",
                            name: "Virtex programmable processor",
                            iconLink:
                                "https://assets.tarkov.dev/5c05308086f7746b2101e90b-icon.webp",
                        },
                    },
                    {
                        id: "5ec13da983b69d213d3c2ee4",
                        description:
                            "Find Military COFDM Wireless Signal Transmitter in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                    {
                        id: "5c138c4486f7743b056e2943",
                        description: "Hand over the processors",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05308086f7746b2101e90b",
                            name: "Virtex programmable processor",
                            iconLink:
                                "https://assets.tarkov.dev/5c05308086f7746b2101e90b-icon.webp",
                        },
                    },
                    {
                        id: "5c138d4286f774276a6504aa",
                        description: "Hand over the transmitter",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5ac242ab86f77412464f68b4",
                name: "Gunsmith - Part 16",
                taskImageLink:
                    "https://assets.tarkov.dev/5ac242ab86f77412464f68b4.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5acce08b86f7745f8521fa64",
                        description:
                            "Modify a DVL-10 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5c0d4c12d09282029f539173",
                name: "Peacekeeping Mission",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d4c12d09282029f539173.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5c1fd66286f7743c7b261f7b",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c1b713486f77413bc250406",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c1b713986f77470d8650910",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5c1b713f86f774719c22e8a0",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63aec4fe6d6c3377e64b9f39",
                        description:
                            "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "63a5cf262964a7488f5243ce",
                name: "Test Drive - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/63a5cf262964a7488f5243ce.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "63a5cf262964a7488f5243d1",
                        description:
                            'Eliminate PMC operatives while using an SR-2M "Veresk" with a suppressor and KP-SR2 reflex sight on Streets of Tarkov',
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "64f5deac39e45b527a7c4232",
                name: "Test Drive - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/64f5deac39e45b527a7c4232.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "64f5deac39e45b527a7c4235",
                        description:
                            "Eliminate PMC operatives while using an AK-12 with a suppressor and Valday PS-320 1/6x scope on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e2e286f77444001e2e48",
                name: "The Huntsman Path - Sellout",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e2e286f77444001e2e48.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5d2719b186f7740701348573",
                        description: "Locate and eliminate Killa",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "5d667a8e86f774131e206b46",
                        description:
                            "Find Killa's Maska-1SCh bulletproof helmet in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0e874186f7745dc7616606",
                            name: "Maska-1SCh bulletproof helmet (Killa Edition)",
                            iconLink:
                                "https://assets.tarkov.dev/5c0e874186f7745dc7616606-icon.webp",
                        },
                    },
                    {
                        id: "5d271a3486f774483c7bdb12",
                        description: "Hand over Killa's helmet",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0e874186f7745dc7616606",
                            name: "Maska-1SCh bulletproof helmet (Killa Edition)",
                            iconLink:
                                "https://assets.tarkov.dev/5c0e874186f7745dc7616606-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5dc53acb86f77469c740c893",
                name: "The Stylish One",
                taskImageLink:
                    "https://assets.tarkov.dev/5dc53acb86f77469c740c893.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5dc53fd386f77469c87589a3",
                        description: "Locate and eliminate Killa",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c1141f386f77430ff393792",
                name: "Living High is Not a Crime - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5c1141f386f77430ff393792.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 30,
                objectives: [
                    {
                        id: "5ca7254e86f7740d424a2043",
                        description: "Find Antique teapots in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590de71386f774347051a052",
                            name: "Antique teapot",
                            iconLink:
                                "https://assets.tarkov.dev/590de71386f774347051a052-icon.webp",
                        },
                    },
                    {
                        id: "5ca7258986f7740d424a2044",
                        description: "Find Antique vases in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590de7e986f7741b096e5f32",
                            name: "Antique vase",
                            iconLink:
                                "https://assets.tarkov.dev/590de7e986f7741b096e5f32-icon.webp",
                        },
                    },
                    {
                        id: "62a700893e015d7ce1151d90",
                        description: "Find Axel parrot figurine in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a091170b9d3c46de5b6cf2",
                            name: "Axel parrot figurine",
                            iconLink:
                                "https://assets.tarkov.dev/62a091170b9d3c46de5b6cf2-icon.webp",
                        },
                    },
                    {
                        id: "62a700a37230237f257cac2d",
                        description: "Find Raven figurines in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f62086f774219b0f1937",
                            name: "Raven figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f62086f774219b0f1937-icon.webp",
                        },
                    },
                    {
                        id: "5c11427386f77430ff393793",
                        description: "Hand over the teapots",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590de71386f774347051a052",
                            name: "Antique teapot",
                            iconLink:
                                "https://assets.tarkov.dev/590de71386f774347051a052-icon.webp",
                        },
                    },
                    {
                        id: "5c122c5f86f77437e44bcb0e",
                        description: "Hand over the vases",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590de7e986f7741b096e5f32",
                            name: "Antique vase",
                            iconLink:
                                "https://assets.tarkov.dev/590de7e986f7741b096e5f32-icon.webp",
                        },
                    },
                    {
                        id: "62a70094ec21e50cad3b670b",
                        description: "Hand over the Axel parrot figurine",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a091170b9d3c46de5b6cf2",
                            name: "Axel parrot figurine",
                            iconLink:
                                "https://assets.tarkov.dev/62a091170b9d3c46de5b6cf2-icon.webp",
                        },
                    },
                    {
                        id: "62a700c2ec21e50cad3b670c",
                        description: "Hand over the Raven figurines",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f62086f774219b0f1937",
                            name: "Raven figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f62086f774219b0f1937-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "639dbaf17c898a131e1cffff",
                name: "Debtor",
                taskImageLink:
                    "https://assets.tarkov.dev/639dbaf17c898a131e1cffff.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 31,
                objectives: [
                    {
                        id: "63a7cd3aee7b4d0d5507baee",
                        description: "Find the debtor on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639dbba35b759c65a3476549",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "5b47749f86f7746c5d6a5fd4",
                name: "Gunsmith - Part 17",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47749f86f7746c5d6a5fd4.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 31,
                objectives: [
                    {
                        id: "5b47796686f774374f4a8bb1",
                        description:
                            "Modify an AK-102 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "600302d73b897b11364cd161",
                name: "Hunter",
                taskImageLink:
                    "https://assets.tarkov.dev/600302d73b897b11364cd161.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "600303250b79c6604058ce30",
                        description: "Locate and eliminate Shturman",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5d25e4ca86f77409dd5cdf2c",
                name: "Hunting Trip",
                taskImageLink:
                    "https://assets.tarkov.dev/5d25e4ca86f77409dd5cdf2c.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "5fd8aa3206fb3a6b8154a2c3",
                        description:
                            "Eliminate Shturman with a headshot from over 75 meters away while using an M700 sniper rifle with the specified scope",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "65734c186dc1e402c80dc19e",
                name: "Dandies",
                taskImageLink: "https://assets.tarkov.dev/unknown-task.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "65734c186dc1e402c80dc1a2",
                        description:
                            "Eliminate any enemy while wearing a Bomber beanie and Raybench Hipster Reserve sunglasses on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "657356c410becd24bc776f55",
                        description:
                            "Stash a Bomber beanie inside the barber shop on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60bf74184a63fc79b60c57f6",
                            name: "Bomber beanie",
                            iconLink:
                                "https://assets.tarkov.dev/60bf74184a63fc79b60c57f6-icon.webp",
                        },
                    },
                    {
                        id: "657356d0a95a1e7e1a8d8d99",
                        description:
                            "Stash Raybench Hipster Reserve sunglasses inside the barber shop on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5aa2b9aee5b5b00015693121",
                            name: "RayBench Hipster Reserve sunglasses",
                            iconLink:
                                "https://assets.tarkov.dev/5aa2b9aee5b5b00015693121-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5b477b6f86f7747290681823",
                name: "Gunsmith - Part 18",
                taskImageLink:
                    "https://assets.tarkov.dev/5b477b6f86f7747290681823.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "5b477f1486f7743009493232",
                        description:
                            "Modify an AKMN to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "639135c3744e452011470807",
                name: "House Arrest - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/639135c3744e452011470807.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "63a7d767f32fa1316250c3da",
                        description:
                            "Locate where the missing group was held captive on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63972c5d61b7754ff93bf3ba",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639135cd8ba6894d155e77cb",
                name: "House Arrest - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/639135cd8ba6894d155e77cb.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 33,
                objectives: [
                    {
                        id: "63a7dbc31943b749b5021ec3",
                        description:
                            "Locate the improvised jail warden's apartment on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7dbefee7b4d0d5507baf8",
                        description: "Find out what happened to the warden",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63972db222ea23711e21aaaa",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639135534b15ca31f76bc317",
                name: "Your Car Needs a Service",
                taskImageLink:
                    "https://assets.tarkov.dev/639135534b15ca31f76bc317.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "639135534b15ca31f76bc318",
                        description:
                            "Obtain the digital storage device from the car dealership manager's office on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639135534b15ca31f76bc319",
                        description: "Hand over the storage device",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "5c139eb686f7747878361a6f",
                name: "Import",
                taskImageLink:
                    "https://assets.tarkov.dev/5c139eb686f7747878361a6f.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5ec14003e16f6c41ee73525f",
                        description: "Find UHF RFID Reader in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052fb986f7746b2101e909",
                            name: "UHF RFID Reader",
                            iconLink:
                                "https://assets.tarkov.dev/5c052fb986f7746b2101e909-icon.webp",
                        },
                    },
                    {
                        id: "5ec14080c9ffe55cca300867",
                        description: "Find VPX Flash Storage Module in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05300686f7746dce784e5d",
                            name: "VPX Flash Storage Module",
                            iconLink:
                                "https://assets.tarkov.dev/5c05300686f7746dce784e5d-icon.webp",
                        },
                    },
                    {
                        id: "5c139eb686f7747878361a72",
                        description: "Hand over the reader",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052fb986f7746b2101e909",
                            name: "UHF RFID Reader",
                            iconLink:
                                "https://assets.tarkov.dev/5c052fb986f7746b2101e909-icon.webp",
                        },
                    },
                    {
                        id: "5c139eb686f7747878361a73",
                        description: "Hand over the storage module",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05300686f7746dce784e5d",
                            name: "VPX Flash Storage Module",
                            iconLink:
                                "https://assets.tarkov.dev/5c05300686f7746dce784e5d-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c0be13186f7746f016734aa",
                name: "Psycho Sniper",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0be13186f7746f016734aa.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5c0be2b486f7747bcb347d58",
                        description:
                            "Reach the required Sniper Rifles skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                    {
                        id: "64b67c6358b5637e2d71a655",
                        description:
                            "Eliminate PMC operatives without dying while using a bolt-action rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c12452c86f7744b83469073",
                name: "Perfect Mediator",
                taskImageLink:
                    "https://assets.tarkov.dev/5c12452c86f7744b83469073.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5c12470d86f77465ae27a8c0",
                        description: "Reach level 4 loyalty with Ragman",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                    {
                        id: "5c1247f386f77452db1d2b03",
                        description: "Reach level 4 loyalty with Skier",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                    {
                        id: "5c12484586f7744b83469074",
                        description: "Reach level 4 loyalty with Mechanic",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                    {
                        id: "5c12487386f7742a60324299",
                        description: "Reach level 4 loyalty with Peacekeeper",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                    {
                        id: "5c12489886f77452db1d2b05",
                        description: "Reach level 4 loyalty with Prapor",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                    {
                        id: "5c1248ef86f77428266184c2",
                        description: "Reach level 4 loyalty with Therapist",
                        optional: false,
                        __typename: "TaskObjectiveTraderLevel",
                    },
                ],
            },
            {
                id: "5c0be5fc86f774467a116593",
                name: "Private Clinic",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0be5fc86f774467a116593.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5fd892bc37b6e511a4734969",
                        description: "Find Ophthalmoscope in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5af0534a86f7743b6f354284",
                            name: "Ophthalmoscope",
                            iconLink:
                                "https://assets.tarkov.dev/5af0534a86f7743b6f354284-icon.webp",
                        },
                    },
                    {
                        id: "5fd8935b7dd32f724e0fe7ee",
                        description: "Find LEDX Skin Transilluminator in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0530ee86f774697952d952",
                            name: "LEDX Skin Transilluminator",
                            iconLink:
                                "https://assets.tarkov.dev/5c0530ee86f774697952d952-icon.webp",
                        },
                    },
                    {
                        id: "5c0be66c86f7744523489ab2",
                        description: "Hand over the Ophthalmoscope",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5af0534a86f7743b6f354284",
                            name: "Ophthalmoscope",
                            iconLink:
                                "https://assets.tarkov.dev/5af0534a86f7743b6f354284-icon.webp",
                        },
                    },
                    {
                        id: "5c0be69086f7743c9c1ecf43",
                        description: "Hand over the LEDX Skin Transilluminator",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0530ee86f774697952d952",
                            name: "LEDX Skin Transilluminator",
                            iconLink:
                                "https://assets.tarkov.dev/5c0530ee86f774697952d952-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c0bdb5286f774166e38eed4",
                name: "Flint",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0bdb5286f774166e38eed4.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5c0bdbb586f774166e38eed5",
                        description:
                            "Reach the required Stress Resistance skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                ],
            },
            {
                id: "63966faeea19ac7ed845db2c",
                name: "Information Source",
                taskImageLink:
                    "https://assets.tarkov.dev/63966faeea19ac7ed845db2c.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "6397a2eee5d9c6753c61e2d8",
                        description:
                            "Survive and extract from Woods through Bridge V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "6397a3b6f376f0344e45711b",
                        description:
                            "Survive and extract from Customs through Dorms V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "6397a47fe5d9c6753c61e2da",
                        description:
                            "Survive and extract from Interchange through Power Station V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "6397a5cbdcdd126fef173f36",
                        description:
                            "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "6397a6942e519e69d2139b25",
                        description:
                            "Locate and mark the first Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6397a7ce706b793c7d6094c9",
                        description:
                            "Locate and mark the second Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "625d7001c4874104f230c0c5",
                name: "Assessment - Part 3",
                taskImageLink:
                    "https://assets.tarkov.dev/625d7001c4874104f230c0c5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "6260295faa168e51321d69d9",
                        description: "Eliminate Raiders in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "62602aaff7308432be1d44c9",
                        description:
                            "Hand over the found in raid SJ1 TGLabs combat stimulant injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0e531286f7747fa54205c2",
                            name: "SJ1 TGLabs combat stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5c0e531286f7747fa54205c2-icon.webp",
                        },
                    },
                    {
                        id: "62602a37c4874104f230c0ca",
                        description:
                            "Hand over the found in raid SJ6 TGLabs combat stimulant injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 8,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0e531d86f7747fa23f4d42",
                            name: "SJ6 TGLabs combat stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5c0e531d86f7747fa23f4d42-icon.webp",
                        },
                    },
                    {
                        id: "62602a44e7578c305945c9c5",
                        description:
                            "Hand over the found in raid SJ9 TGLabs combat stimulant injector",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fca13ca637ee0341a484f46",
                            name: "SJ9 TGLabs combat stimulant injector",
                            iconLink:
                                "https://assets.tarkov.dev/5fca13ca637ee0341a484f46-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "625d7005a4eb80027c4f2e09",
                name: "Knock-Knock",
                taskImageLink:
                    "https://assets.tarkov.dev/625d7005a4eb80027c4f2e09.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63ab617b87413d64ae0ac210",
                        description:
                            "Check if the radio transmitter works near the Lighthouse peninsula",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "62602c89a4eb80027c4f2e0f",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "63966fe7ea74a47c2d3fc0e6",
                name: "Return the Favor",
                taskImageLink:
                    "https://assets.tarkov.dev/63966fe7ea74a47c2d3fc0e6.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "639914b61c712b1e1d4dafcb",
                        description:
                            "Eliminate PMC operatives around the mountain area on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "639915f339cb4711771bedc6",
                        description:
                            'Hide the TerraGroup "Blue Folders" materials folder inside the black SUV in the USEC camp',
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "6389c8c5dbfd5e4b95197e6b",
                            name: 'TerraGroup "Blue Folders" materials',
                            iconLink:
                                "https://assets.tarkov.dev/6389c8c5dbfd5e4b95197e6b-icon.webp",
                        },
                    },
                    {
                        id: "63991601deadb12b2d7c6027",
                        description:
                            'Hide the TerraGroup "Blue Folders" materials in the crates near the satellite antenna in the USEC camp',
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "6389c8c5dbfd5e4b95197e6b",
                            name: 'TerraGroup "Blue Folders" materials',
                            iconLink:
                                "https://assets.tarkov.dev/6389c8c5dbfd5e4b95197e6b-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "63966fd9ea19ac7ed845db30",
                name: "Payback",
                taskImageLink:
                    "https://assets.tarkov.dev/63966fd9ea19ac7ed845db30.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "6397ae22e301557ae24cbfe7",
                        description: "Locate and eliminate Glukhar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "6397ae672e519e69d2139b28",
                        description: "Eliminate Glukhar's guards",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9ad4cc31b00242d28a99d",
                        description:
                            "Shoot a yellow signal flare at the radar station",
                        optional: false,
                        __typename: "TaskObjectiveUseItem",
                    },
                    {
                        id: "6397af5cf376f0344e457120",
                        description:
                            "Survive and extract from Reserve through Cliff Descent",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "625d700cc48e6c62a440fab5",
                name: "Getting Acquainted",
                taskImageLink:
                    "https://assets.tarkov.dev/625d700cc48e6c62a440fab5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "6391e2f9e705511c8a4a1b85",
                        description: "Obtain the V3 Flash drive on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6391e31bfa894f0a866afdec",
                        description: "Reflash the Radio transmitter",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62e910aaf957f2915e0a5e36",
                            name: "Digital secure DSP radio transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/62e910aaf957f2915e0a5e36-icon.webp",
                        },
                    },
                    {
                        id: "6391e329c115f907b14700b1",
                        description: "Hand over the flash drive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "63ab727b1287ef0b827d0c95",
                        description: "Visit the Lighthouse building",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "63966fbeea19ac7ed845db2e",
                name: "Missing Informant",
                taskImageLink:
                    "https://assets.tarkov.dev/63966fbeea19ac7ed845db2e.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63a7ce31cc389e31a64596d8",
                        description:
                            "Locate the informant's hideout on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7cee004d3dc28a52a20f8",
                        description: "Locate the informant's backup hideout",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63990a1ddcdd126fef1771c1",
                        description: "Obtain the informant's journal",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "63990ae2dcdd126fef1771c2",
                        description: "Bring the information to Lightkeeper",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "63abf37987413d64ae0ac215",
                        description: "Obtain the key to the second hideout",
                        optional: true,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "6398fd8ad3de3849057f5128",
                            name: "Backup hideout key",
                            iconLink:
                                "https://assets.tarkov.dev/6398fd8ad3de3849057f5128-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "63966fccac6f8f3c677b9d89",
                name: "Snatch",
                taskImageLink:
                    "https://assets.tarkov.dev/63966fccac6f8f3c677b9d89.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63b33cd9862e1142130b610c",
                        description: "Extract from Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "6399b45d98e4ed53fa4632db",
                        description:
                            "Obtain the forged intelligence at the Rogue base on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6399c929d65735732c6ba766",
                        description:
                            "Obtain the original intelligence in the repair station on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6399ca5fe101160ce05706ac",
                        description:
                            "Stash the forged intelligence under the BMP-2 in place of the original",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6399cc30b5992f573c65782b",
                        description:
                            "Bring the original intelligence to Lightkeeper",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "625d6ffcaa168e51321d69d7",
                name: "Assessment - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/625d6ffcaa168e51321d69d7.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "625ed292c4874104f230c0c8",
                        description:
                            "Eliminate PMC operatives at the Lighthouse premises",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "625d70031ed3bb5bcc5bd9e5",
                name: "Key to the Tower",
                taskImageLink:
                    "https://assets.tarkov.dev/625d70031ed3bb5bcc5bd9e5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "62602b061ed3bb5bcc5bd9ea",
                        description:
                            "Hand over the found in raid Piece of plexiglass",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59e366c186f7741778269d85",
                            name: "Piece of plexiglass",
                            iconLink:
                                "https://assets.tarkov.dev/59e366c186f7741778269d85-icon.webp",
                        },
                    },
                    {
                        id: "62602b0ea4eb80027c4f2e0e",
                        description:
                            "Hand over the found in raid Insulating tape",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5734795124597738002c6176",
                            name: "Insulating tape",
                            iconLink:
                                "https://assets.tarkov.dev/5734795124597738002c6176-icon.webp",
                        },
                    },
                    {
                        id: "62602b17f7308432be1d44ca",
                        description:
                            "Hand over the found in raid Military circuit board",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d0376a486f7747d8050965c",
                            name: "Military circuit board",
                            iconLink:
                                "https://assets.tarkov.dev/5d0376a486f7747d8050965c-icon.webp",
                        },
                    },
                    {
                        id: "62602b1ec4874104f230c0cb",
                        description:
                            "Hand over the found in raid Military COFDM Wireless Signal Transmitter",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                    {
                        id: "62602b26e7578c305945c9c6",
                        description: "Hand over the found in raid Working LCD",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b304286f774253763a528",
                            name: "Working LCD",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b304286f774253763a528-icon.webp",
                        },
                    },
                    {
                        id: "633d8b5dbc99da1cf0685f36",
                        description:
                            "Obtain the Radio transmitter body on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "633d8b77f2ab4f3f095029d6",
                        description: "Hand over the Radio transmitter body",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "625d6ffaf7308432be1d44c5",
                name: "Network Provider - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/625d6ffaf7308432be1d44c5.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "625ecedaa4eb80027c4f2e0b",
                        description:
                            "Set up the retransmitter inside the MI-8 helicopter at the water treatment plant",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "625ecee6f7308432be1d44c7",
                        description:
                            "Set up the retransmitter inside the abandoned USEC cottage",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "625eceebc4874104f230c0c7",
                        description:
                            "Set up the retransmitter at a high elevation overlooking the lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6386410704a59f742a7a3b45",
                        description:
                            "Set up the retransmitter on the roof of the sunken building at the shore",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "625d6fff4149f1149b5b12c9",
                name: "Assessment - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/625d6fff4149f1149b5b12c9.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "62602852c48e6c62a440fab6",
                        description:
                            "Locate and mark the first bunker with an MS2000 marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "62602858efebc4442a7b3876",
                        description:
                            "Locate and mark the second bunker with an MS2000 marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "6260285c1ed3bb5bcc5bd9e8",
                        description:
                            "Locate and mark the third bunker with an MS2000 marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "638643e03674202b7d07c9e5",
                        description:
                            "Locate and mark the fourth bunker with an MS2000 marker on Woods",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                ],
            },
            {
                id: "626148251ed3bb5bcc5bd9ed",
                name: "Make Amends - Buyout",
                taskImageLink:
                    "https://assets.tarkov.dev/626148251ed3bb5bcc5bd9ed.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "62616a9ca4eb80027c4f2e12",
                        description: "Hand over RUB",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1000000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5449016a4bdc2d6f028b456f",
                            name: "Roubles",
                            iconLink:
                                "https://assets.tarkov.dev/5449016a4bdc2d6f028b456f-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6261482fa4eb80027c4f2e11",
                name: "Make Amends - Equipment",
                taskImageLink:
                    "https://assets.tarkov.dev/6261482fa4eb80027c4f2e11.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "62616b17e7578c305945c9c9",
                        description:
                            "Hand over the found in raid SVDS sniper rifles",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c46fbd72e2216398b5a8c9c",
                            name: "SVDS 7.62x54R sniper rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5c46fbd72e2216398b5a8c9c-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "6391d90f4ed9512be67647df",
                name: "Make Amends",
                taskImageLink:
                    "https://assets.tarkov.dev/6391d90f4ed9512be67647df.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "6391d9ba4b15ca31f76bc325",
                        description: "Obtain the V3 Flash drive on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "6391d9e7ee79ee703e3012e5",
                        description: "Reflash the Radio transmitter",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62e910aaf957f2915e0a5e36",
                            name: "Digital secure DSP radio transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/62e910aaf957f2915e0a5e36-icon.webp",
                        },
                    },
                    {
                        id: "6391d9fd8ba6894d155e77db",
                        description: "Hand over the flash drive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "63ab6a89e842787ad2135719",
                        description: "Visit the Lighthouse building",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                ],
            },
            {
                id: "63966ff54c3ef01b6f3ffad8",
                name: "Provocation",
                taskImageLink:
                    "https://assets.tarkov.dev/63966ff54c3ef01b6f3ffad8.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "639a76e3e4aa7349085cb6e3",
                        description:
                            "Eliminate any enemy around the Kiba Arms store while using an ASh-12 on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "639a77b97cb1a8023d49f683",
                        description:
                            "Stash a Salty Dog beef sausage inside the Kiba Arms store",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "635a758bfefc88a93f021b8a",
                            name: "Salty Dog beef sausage",
                            iconLink:
                                "https://assets.tarkov.dev/635a758bfefc88a93f021b8a-icon.webp",
                        },
                    },
                    {
                        id: "639a78046402c537c15d012f",
                        description:
                            "Stash a Bottle of Fierce Hatchling moonshine inside the secret secure hideout",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b376e86f774252519444e",
                            name: "Bottle of Fierce Hatchling moonshine",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b376e86f774252519444e-icon.webp",
                        },
                    },
                    {
                        id: "639a78c27cb1a8023d49f684",
                        description:
                            "Stash a Toilet paper inside the secret container stash",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c13cef886f774072e618e82",
                            name: "Toilet paper",
                            iconLink:
                                "https://assets.tarkov.dev/5c13cef886f774072e618e82-icon.webp",
                        },
                    },
                    {
                        id: "639a79785e3c9b787264d672",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "639670029113f06a7c3b2377",
                name: "Following the Bread Crumbs",
                taskImageLink:
                    "https://assets.tarkov.dev/639670029113f06a7c3b2377.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "639adf3edbf1d842d260cda6",
                        description: "Eliminate Raiders",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a7cf9f04d3dc28a52a20fa",
                        description:
                            "Search the weapon testing area in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "63a7cfe104d3dc28a52a20fc",
                        description:
                            "Search the human experiment room in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639ae49a5e3c9b787264d675",
                        description:
                            "Obtain the secured tape inside the manager's office in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "639ae5445b201a534f436ef3",
                        description: "Bring the tape to Lightkeeper",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "6396700fea19ac7ed845db32",
                name: "Spotter",
                taskImageLink:
                    "https://assets.tarkov.dev/6396700fea19ac7ed845db32.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63a7d2acee7b4d0d5507baf2",
                        description:
                            "Locate a good sniping position in Concordia overlooking the construction site",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639c359f0a20a7001f00c7a8",
                        description:
                            "Hide AI Tactical Sound Moderator .338 LM near the red table",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62811fa609427b40ab14e765",
                            name: "AI .338 LM Tactical Sound Moderator",
                            iconLink:
                                "https://assets.tarkov.dev/62811fa609427b40ab14e765-icon.webp",
                        },
                    },
                    {
                        id: "63a7d315f32fa1316250c3d2",
                        description:
                            "Locate a good sniping position at Primorsky overlooking the movie theater",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639c39807c1532d85b0162a9",
                        description:
                            "Hide Trijicon REAP-IR thermal scope under Makhors' bed",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5a1eaa87fcdbcb001865f75e",
                            name: "Trijicon REAP-IR thermal scope",
                            iconLink:
                                "https://assets.tarkov.dev/5a1eaa87fcdbcb001865f75e-icon.webp",
                        },
                    },
                    {
                        id: "639c3e21a1c5f814670c35e8",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "6396701b9113f06a7c3b2379",
                name: "Make an Impression",
                taskImageLink:
                    "https://assets.tarkov.dev/6396701b9113f06a7c3b2379.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "639a169e6cd47c525121a116",
                        description:
                            "Reach the required Sniper Rifles skill level",
                        optional: false,
                        __typename: "TaskObjectiveSkill",
                    },
                    {
                        id: "6397ac912e519e69d2139b26",
                        description:
                            "Eliminate Sniper Scavs from over 350 meters away",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "63967028c4a91c5cb76abd81",
                name: "Trouble in the Big City",
                taskImageLink:
                    "https://assets.tarkov.dev/63967028c4a91c5cb76abd81.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63bd64552803ffbfad0e3e48",
                        description:
                            "Locate the transport holding the cargo on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "639ae7423174277743234bb7",
                        description:
                            "Secure the area from hostile PMC operatives",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "639aea2228d8a21b593a3491",
                        description:
                            "Mark the cargo area with an MS2000 Marker",
                        optional: false,
                        __typename: "TaskObjectiveMark",
                    },
                    {
                        id: "63bd64ba3d34b0e64b0d0a17",
                        description:
                            "Launch a yellow flare near the armored convoy to confirm that the job is done",
                        optional: false,
                        __typename: "TaskObjectiveUseItem",
                    },
                    {
                        id: "639b002fda859817035a344b",
                        description: "Survive and extract from the location",
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "64f1cc571a5f313cb144bf90",
                name: "Overseas Trust - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/64f1cc571a5f313cb144bf90.webp",
                trader: {
                    name: "Lightkeeper",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "64f1cc571a5f313cb144bf91",
                        description: "Locate and eliminate Reshala",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64f1cc571a5f313cb144bf93",
                        description: "Locate and eliminate Glukhar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64f1cc571a5f313cb144bf95",
                        description: "Locate and eliminate Killa",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64f1cc571a5f313cb144bf97",
                        description: "Locate and eliminate Shturman",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64f1cc571a5f313cb144bf99",
                        description: "Locate and eliminate Sanitar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "64f1cc571a5f313cb144bf9b",
                        description: "Locate and eliminate Tagilla",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "64f1d6e732bed22c3e0c7423",
                name: "Overseas Trust - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/64f1d6e732bed22c3e0c7423.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "64f1d7bf32bed22c3e0c7425",
                        description: "Hand over USD",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 50000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5696686a4bdc2da3298b456a",
                            name: "Dollars",
                            iconLink:
                                "https://assets.tarkov.dev/5696686a4bdc2da3298b456a-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "626148334149f1149b5b12ca",
                name: "Make Amends - Security",
                taskImageLink:
                    "https://assets.tarkov.dev/626148334149f1149b5b12ca.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "62668b98ddc94657c21a1628",
                        description:
                            "Place a WI-FI Camera at the yellow bus on the southern bridge approaching the water treatment plant",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "62668ba11ed3bb5bcc5bd9ef",
                        description:
                            "Place a WI-FI Camera at the yellow bulldozer in the south-eastern part of the water treatment plant",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "62668ba4aa168e51321d69e0",
                        description:
                            "Place a WI-FI Camera at the police truck in the western part of the water treatment plant",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                    {
                        id: "62668ba9a4eb80027c4f2e16",
                        description:
                            "Place a WI-FI Camera at the army truck near the industrial zone in the northern part of the water treatment plant",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5b4391a586f7745321235ab2",
                            name: "WI-FI Camera",
                            iconLink:
                                "https://assets.tarkov.dev/5b4391a586f7745321235ab2-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "62614836f7308432be1d44cc",
                name: "Make Amends - Sweep Up",
                taskImageLink:
                    "https://assets.tarkov.dev/62614836f7308432be1d44cc.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "626171a0f7308432be1d44cd",
                        description: "Eliminate Raiders on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "626bdcc3a371ee3a7a3514c5",
                name: "Stray Dogs",
                taskImageLink:
                    "https://assets.tarkov.dev/626bdcc3a371ee3a7a3514c5.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "626c317e05f287031503c7fd",
                        description: "Locate and eliminate Knight",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "626c318147ea7f506e5493c7",
                        description: "Locate and eliminate Big Pipe",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "626c3183af14a41d9a1f4ea7",
                        description: "Locate and eliminate Birdeye",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5c0d1c4cd0928202a02a6f5c",
                name: "Decontamination Service",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d1c4cd0928202a02a6f5c.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "5c1b778286f774294438b536",
                        description:
                            "Eliminate Scavs from less than 60 meters away while wearing specific gear on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "626bd75d5bef5d7d590bd415",
                name: "Top Secret",
                taskImageLink:
                    "https://assets.tarkov.dev/626bd75d5bef5d7d590bd415.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "63ac19f9de609574d97adf78",
                        description:
                            "Locate the radar station commandant's office on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveBasic",
                    },
                    {
                        id: "62863b9ae5b4f5010e0d30c8",
                        description:
                            "Obtain the military HDD with archived flight routes",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                    {
                        id: "626c30c55bef5d7d590bd41b",
                        description: "Hand over the drive",
                        optional: false,
                        __typename: "TaskObjectiveQuestItem",
                    },
                ],
            },
            {
                id: "625d6ff5ddc94657c21a1625",
                name: "Network Provider - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/625d6ff5ddc94657c21a1625.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 35,
                objectives: [
                    {
                        id: "625eb7fe1ed3bb5bcc5bd9e6",
                        description:
                            "Hand over the found in raid Electronic components",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "6389c70ca33d8c4cdf4932c6",
                            name: "Electronic components",
                            iconLink:
                                "https://assets.tarkov.dev/6389c70ca33d8c4cdf4932c6-icon.webp",
                        },
                    },
                    {
                        id: "625eb80da4eb80027c4f2e0a",
                        description:
                            "Hand over the found in raid Military COFDM Wireless Signal Transmitters",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                    {
                        id: "625eb81df7308432be1d44c6",
                        description:
                            "Hand over the found in raid Gas analyzers",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "590a3efd86f77437d351a25b",
                            name: "Gas analyzer",
                            iconLink:
                                "https://assets.tarkov.dev/590a3efd86f77437d351a25b-icon.webp",
                        },
                    },
                    {
                        id: "625eb82ac4874104f230c0c6",
                        description:
                            "Hand over the found in raid Broken GPhone smartphones",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "56742c324bdc2d150f8b456d",
                            name: "Broken GPhone smartphone",
                            iconLink:
                                "https://assets.tarkov.dev/56742c324bdc2d150f8b456d-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "639873003693c63d86328f25",
                name: "Gunsmith - Part 19",
                taskImageLink:
                    "https://assets.tarkov.dev/639873003693c63d86328f25.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 36,
                objectives: [
                    {
                        id: "63987a4e3693c63d86328f27",
                        description:
                            "Modify an SVDS to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5b477f7686f7744d1b23c4d2",
                name: "Gunsmith - Part 20",
                taskImageLink:
                    "https://assets.tarkov.dev/5b477f7686f7744d1b23c4d2.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 37,
                objectives: [
                    {
                        id: "5b47824386f7744d190d8dd1",
                        description:
                            "Modify an M1A to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "63987301e11ec11ff5504036",
                name: "Gunsmith - Part 21",
                taskImageLink:
                    "https://assets.tarkov.dev/63987301e11ec11ff5504036.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 38,
                objectives: [
                    {
                        id: "63987b49cd51826f7a069b85",
                        description:
                            "Modify an M700 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                    {
                        id: "63987b9c05aa481907106505",
                        description:
                            "Modify an M1911 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5b47825886f77468074618d3",
                name: "Gunsmith - Part 22",
                taskImageLink:
                    "https://assets.tarkov.dev/5b47825886f77468074618d3.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 39,
                objectives: [
                    {
                        id: "5b4783ba86f7744d1c353185",
                        description:
                            "Modify an M4A1 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "64f83bcdde58fc437700d8fa",
                name: "Gunsmith - Part 24",
                taskImageLink:
                    "https://assets.tarkov.dev/64f83bcdde58fc437700d8fa.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 39,
                objectives: [
                    {
                        id: "64f83e9d52fc01298e2c857e",
                        description:
                            "Modify a KAC SR-25 to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "64f83bd983cfca080a362c82",
                name: "Gunsmith - Part 25",
                taskImageLink:
                    "https://assets.tarkov.dev/64f83bd983cfca080a362c82.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 39,
                objectives: [
                    {
                        id: "64f841199a4f905106515448",
                        description:
                            "Modify a PKP machine gun to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "64f83bb69878a0569d6ecfbe",
                name: "Gunsmith - Part 23",
                taskImageLink:
                    "https://assets.tarkov.dev/64f83bb69878a0569d6ecfbe.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 39,
                objectives: [
                    {
                        id: "64f83d0eed30ed471f49bcde",
                        description:
                            "Modify a CMMG Mk47 Mutant to comply with the given specifications",
                        optional: false,
                        __typename: "TaskObjectiveBuildItem",
                    },
                ],
            },
            {
                id: "5c0d4e61d09282029f53920e",
                name: "The Guide",
                taskImageLink:
                    "https://assets.tarkov.dev/5c0d4e61d09282029f53920e.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 40,
                objectives: [
                    {
                        id: "5c0e6876d09282029e2fffe0",
                        description:
                            'Survive and extract from Woods with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c0e687ad0928202b25db840",
                        description:
                            'Survive and extract from Customs with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c13979886f774251443c1a6",
                        description:
                            'Survive and extract from Interchange with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c13982286f774365a69cc4d",
                        description:
                            'Survive and extract from Shoreline with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c13989886f7747878361a50",
                        description:
                            'Survive and extract from Factory with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5c1931e686f7747ce71bcbea",
                        description:
                            'Survive and extract from The Lab with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "5dc984ae4b68b15f4825cea5",
                        description:
                            'Survive and extract from Reserve with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "629f08e7d285f377953b2af1",
                        description:
                            'Survive and extract from Lighthouse with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                    {
                        id: "63aec66556503c322a190372",
                        description:
                            'Survive and extract from Streets of Tarkov with the "Survived" exit status',
                        optional: false,
                        __typename: "TaskObjectiveExtract",
                    },
                ],
            },
            {
                id: "63a9b36cc31b00242d28a99f",
                name: "Slaughterhouse",
                taskImageLink:
                    "https://assets.tarkov.dev/63a9b36cc31b00242d28a99f.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 40,
                objectives: [
                    {
                        id: "63a9b3d7813bba58a50c9ee9",
                        description:
                            "Eliminate Scavs while using melee weapons on daytime Factory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b41dad5cc12f22162022",
                        description:
                            "Eliminate Scavs while using melee weapons on Streets of Tarkov",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b45bda7999196148ba5f",
                        description:
                            "Eliminate Scavs while using melee weapons on Lighthouse",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b52b009ffc6a551631a7",
                        description:
                            "Eliminate Scavs while using melee weapons on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b557da7999196148ba61",
                        description:
                            "Eliminate Scavs while using melee weapons on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b591da7999196148ba63",
                        description:
                            "Eliminate Scavs while using melee weapons on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b5b2813bba58a50c9eeb",
                        description:
                            "Eliminate Scavs while using melee weapons on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "63a9b5f064b9631d9178276b",
                        description:
                            "Eliminate Scavs while using melee weapons on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5ae449d986f774453a54a7e1",
                name: "Supervisor",
                taskImageLink:
                    "https://assets.tarkov.dev/5ae449d986f774453a54a7e1.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 40,
                objectives: [
                    {
                        id: "5ae9e55886f77445315f662a",
                        description: "Obtain the Goshan cash register key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ad7247386f7747487619dc3",
                            name: "Goshan cash register key",
                            iconLink:
                                "https://assets.tarkov.dev/5ad7247386f7747487619dc3-icon.webp",
                        },
                    },
                    {
                        id: "5ae9e58886f77423572433f5",
                        description: "Hand over the key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5ad7247386f7747487619dc3",
                            name: "Goshan cash register key",
                            iconLink:
                                "https://assets.tarkov.dev/5ad7247386f7747487619dc3-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71b9bbd90872cb85440f3",
                name: "Capturing Outposts",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71b9bbd90872cb85440f3.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 42,
                objectives: [
                    {
                        id: "60ec18b73b5f7d790a7ad034",
                        description:
                            "Eliminate PMC operatives at the Scav base on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec1e72d7b7cb55e94c1764",
                        description:
                            "Eliminate PMC operatives at the Scav base on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec2229fd1bf4491c4e4552",
                        description:
                            "Eliminate PMC operatives at the River Station on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "5e383a6386f77465910ce1f3",
                name: "Textile - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5e383a6386f77465910ce1f3.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 42,
                objectives: [
                    {
                        id: "5e383a6386f77465910ce1f4",
                        description: "Find Aramid fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4d286f7746d4159f07a",
                            name: "Aramid fiber fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4d286f7746d4159f07a-icon.webp",
                        },
                    },
                    {
                        id: "5e383a6386f77465910ce1f5",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4d286f7746d4159f07a",
                            name: "Aramid fiber fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4d286f7746d4159f07a-icon.webp",
                        },
                    },
                    {
                        id: "5e383a6386f77465910ce1f6",
                        description: "Find Ripstop fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4a786f7746d3f3c3400",
                            name: "Ripstop fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4a786f7746d3f3c3400-icon.webp",
                        },
                    },
                    {
                        id: "5e383a6386f77465910ce1f7",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4a786f7746d3f3c3400",
                            name: "Ripstop fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4a786f7746d3f3c3400-icon.webp",
                        },
                    },
                    {
                        id: "5e383a6386f77465910ce1f8",
                        description: "Find Paracords in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c12688486f77426843c7d32",
                            name: "Paracord",
                            iconLink:
                                "https://assets.tarkov.dev/5c12688486f77426843c7d32-icon.webp",
                        },
                    },
                    {
                        id: "5e383a6386f77465910ce1f9",
                        description: "Hand over the paracords",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c12688486f77426843c7d32",
                            name: "Paracord",
                            iconLink:
                                "https://assets.tarkov.dev/5c12688486f77426843c7d32-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5e381b0286f77420e3417a74",
                name: "Textile - Part 1",
                taskImageLink:
                    "https://assets.tarkov.dev/5e381b0286f77420e3417a74.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 42,
                objectives: [
                    {
                        id: "5e38261886f77429853af26c",
                        description: "Find Aramid fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4d286f7746d4159f07a",
                            name: "Aramid fiber fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4d286f7746d4159f07a-icon.webp",
                        },
                    },
                    {
                        id: "5e382fef86f7741e53790d40",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4d286f7746d4159f07a",
                            name: "Aramid fiber fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4d286f7746d4159f07a-icon.webp",
                        },
                    },
                    {
                        id: "5e382b6986f7741b72695045",
                        description: "Find Ripstop fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4a786f7746d3f3c3400",
                            name: "Ripstop fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4a786f7746d3f3c3400-icon.webp",
                        },
                    },
                    {
                        id: "5e38356d86f7742993306cac",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af4a786f7746d3f3c3400",
                            name: "Ripstop fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af4a786f7746d3f3c3400-icon.webp",
                        },
                    },
                    {
                        id: "5e382d6386f77429a01f82fb",
                        description: "Find Paracords in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c12688486f77426843c7d32",
                            name: "Paracord",
                            iconLink:
                                "https://assets.tarkov.dev/5c12688486f77426843c7d32-icon.webp",
                        },
                    },
                    {
                        id: "5e3835e886f77429910d4465",
                        description: "Hand over the paracords",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c12688486f77426843c7d32",
                            name: "Paracord",
                            iconLink:
                                "https://assets.tarkov.dev/5c12688486f77426843c7d32-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5e4d515e86f77438b2195244",
                name: "Textile - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5e4d515e86f77438b2195244.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 42,
                objectives: [
                    {
                        id: "5e4d515e86f77438b2195245",
                        description: "Find Fleece fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af47786f7746d404f3aaa",
                            name: "Fleece fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af47786f7746d404f3aaa-icon.webp",
                        },
                    },
                    {
                        id: "5e4d515e86f77438b2195246",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af47786f7746d404f3aaa",
                            name: "Fleece fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af47786f7746d404f3aaa-icon.webp",
                        },
                    },
                    {
                        id: "5e4d515e86f77438b2195247",
                        description: "Find Cordura polyamide fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af41e86f774755a234b67",
                            name: "Cordura polyamide fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af41e86f774755a234b67-icon.webp",
                        },
                    },
                    {
                        id: "5e4d515e86f77438b2195248",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af41e86f774755a234b67",
                            name: "Cordura polyamide fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af41e86f774755a234b67-icon.webp",
                        },
                    },
                    {
                        id: "5e4d515e86f77438b2195249",
                        description: "Find KEKTAPE duct tapes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af29386f7746d4159f077",
                            name: "KEKTAPE duct tape",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af29386f7746d4159f077-icon.webp",
                        },
                    },
                    {
                        id: "5e4d515e86f77438b219524a",
                        description: "Hand over the duct tapes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af29386f7746d4159f077",
                            name: "KEKTAPE duct tape",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af29386f7746d4159f077-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5e4d4ac186f774264f758336",
                name: "Textile - Part 2",
                taskImageLink:
                    "https://assets.tarkov.dev/5e4d4ac186f774264f758336.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 42,
                objectives: [
                    {
                        id: "5e4d4ac186f774264f758337",
                        description: "Find Fleece fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af47786f7746d404f3aaa",
                            name: "Fleece fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af47786f7746d404f3aaa-icon.webp",
                        },
                    },
                    {
                        id: "5e4d4ac186f774264f758338",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af47786f7746d404f3aaa",
                            name: "Fleece fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af47786f7746d404f3aaa-icon.webp",
                        },
                    },
                    {
                        id: "5e4d4ac186f774264f758339",
                        description: "Find Cordura polyamide fabrics in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af41e86f774755a234b67",
                            name: "Cordura polyamide fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af41e86f774755a234b67-icon.webp",
                        },
                    },
                    {
                        id: "5e4d4ac186f774264f75833a",
                        description: "Hand over the fabrics",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af41e86f774755a234b67",
                            name: "Cordura polyamide fabric",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af41e86f774755a234b67-icon.webp",
                        },
                    },
                    {
                        id: "5e4d4ac186f774264f75833b",
                        description: "Find KEKTAPE duct tapes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af29386f7746d4159f077",
                            name: "KEKTAPE duct tape",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af29386f7746d4159f077-icon.webp",
                        },
                    },
                    {
                        id: "5e4d4ac186f774264f75833c",
                        description: "Hand over the duct tapes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e2af29386f7746d4159f077",
                            name: "KEKTAPE duct tape",
                            iconLink:
                                "https://assets.tarkov.dev/5e2af29386f7746d4159f077-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71bb4e456d449cd47ca75",
                name: "Intimidator",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71bb4e456d449cd47ca75.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 45,
                objectives: [
                    {
                        id: "60e8650e5d67b234af3d3926",
                        description: "Eliminate Scavs with headshots",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71dc0a94be721b065bbfc",
                name: "Long Line",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71dc0a94be721b065bbfc.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 45,
                objectives: [
                    {
                        id: "60e73ee8b567ff641b129570",
                        description:
                            "Eliminate PMC operatives inside the ULTRA mall on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71c9ad54b755a3b53eb66",
                name: "The Cleaner",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71c9ad54b755a3b53eb66.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 45,
                objectives: [
                    {
                        id: "60e745d6479eef59b01b0bdc",
                        description: "Eliminate Raiders on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71d23c1bfa3050473b8e6",
                name: "Calibration",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71d23c1bfa3050473b8e6.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 47,
                objectives: [
                    {
                        id: "60e740b8b567ff641b129573",
                        description:
                            "Eliminate PMC operatives from over 100 meters away",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71c48c1bfa3050473b8e5",
                name: "Crisis",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71c48c1bfa3050473b8e5.webp",
                trader: {
                    name: "Therapist",
                },
                minPlayerLevel: 48,
                objectives: [
                    {
                        id: "60e8658571035f300c301ac6",
                        description: "Find Portable defibrillators in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052e6986f7746b207bc3c9",
                            name: "Portable defibrillator",
                            iconLink:
                                "https://assets.tarkov.dev/5c052e6986f7746b207bc3c9-icon.webp",
                        },
                    },
                    {
                        id: "60e865a60cef122b414a156a",
                        description: "Find Ophthalmoscopes in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5af0534a86f7743b6f354284",
                            name: "Ophthalmoscope",
                            iconLink:
                                "https://assets.tarkov.dev/5af0534a86f7743b6f354284-icon.webp",
                        },
                    },
                    {
                        id: "60e866175d67b234af3d392a",
                        description: "Find LEDX Skin Transilluminators in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0530ee86f774697952d952",
                            name: "LEDX Skin Transilluminator",
                            iconLink:
                                "https://assets.tarkov.dev/5c0530ee86f774697952d952-icon.webp",
                        },
                    },
                    {
                        id: "60f028ca86abc00cdc03ab89",
                        description: "Find Piles of meds in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b3a5d86f774252167ba22",
                            name: "Pile of meds",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b3a5d86f774252167ba22-icon.webp",
                        },
                    },
                    {
                        id: "62a701587230237f257cac30",
                        description:
                            "Find Bottles of OLOLO Multivitamins in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a0a043cf4a99369e2624a5",
                            name: "Bottle of OLOLO Multivitamins",
                            iconLink:
                                "https://assets.tarkov.dev/62a0a043cf4a99369e2624a5-icon.webp",
                        },
                    },
                    {
                        id: "60e866c50cef122b414a156c",
                        description: "Hand over the defibrillators",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052e6986f7746b207bc3c9",
                            name: "Portable defibrillator",
                            iconLink:
                                "https://assets.tarkov.dev/5c052e6986f7746b207bc3c9-icon.webp",
                        },
                    },
                    {
                        id: "60e866f926b88043510e0adf",
                        description: "Hand over the ophthalmoscopes",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5af0534a86f7743b6f354284",
                            name: "Ophthalmoscope",
                            iconLink:
                                "https://assets.tarkov.dev/5af0534a86f7743b6f354284-icon.webp",
                        },
                    },
                    {
                        id: "60e867265d67b234af3d392c",
                        description: "Hand over the LEDX",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c0530ee86f774697952d952",
                            name: "LEDX Skin Transilluminator",
                            iconLink:
                                "https://assets.tarkov.dev/5c0530ee86f774697952d952-icon.webp",
                        },
                    },
                    {
                        id: "60f028f85caf08029e0d6277",
                        description: "Hand over the Piles of meds",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b3a5d86f774252167ba22",
                            name: "Pile of meds",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b3a5d86f774252167ba22-icon.webp",
                        },
                    },
                    {
                        id: "62a70168eb3cb46d9a0bba7a",
                        description: "Hand over the multivitamins",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a0a043cf4a99369e2624a5",
                            name: "Bottle of OLOLO Multivitamins",
                            iconLink:
                                "https://assets.tarkov.dev/62a0a043cf4a99369e2624a5-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "5c51aac186f77432ea65c552",
                name: "Collector",
                taskImageLink:
                    "https://assets.tarkov.dev/5c51aac186f77432ea65c552.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 48,
                objectives: [
                    {
                        id: "5cb5ddd386f7746ef72a7e73",
                        description: "Find Old firesteel in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c377d4351e3bac12251b",
                            name: "Old firesteel",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c377d4351e3bac12251b-icon.webp",
                        },
                    },
                    {
                        id: "5c52da1086f7742fbb42a814",
                        description: "Hand over the Old firesteel",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c377d4351e3bac12251b",
                            name: "Old firesteel",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c377d4351e3bac12251b-icon.webp",
                        },
                    },
                    {
                        id: "5cb5dde786f7746ef451bd74",
                        description: "Find Antique axe in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c1e2d4351e00367fbcf0",
                            name: "Antique axe",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c1e2d4351e00367fbcf0-icon.webp",
                        },
                    },
                    {
                        id: "5c52da5886f7747364267a14",
                        description: "Hand over the Antique axe",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c1e2d4351e00367fbcf0",
                            name: "Antique axe",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c1e2d4351e00367fbcf0-icon.webp",
                        },
                    },
                    {
                        id: "5cb5de0086f7746ef82c17e4",
                        description: "Find Battered antique book in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c049d4351e44f824d360",
                            name: "Battered antique book",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c049d4351e44f824d360-icon.webp",
                        },
                    },
                    {
                        id: "5c51bed886f77478bb033461",
                        description: "Hand over the Battered antique book",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c049d4351e44f824d360",
                            name: "Battered antique book",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c049d4351e44f824d360-icon.webp",
                        },
                    },
                    {
                        id: "5cb5de1786f7747d215eca04",
                        description: "Find #FireKlean gun lube in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b355d4351e6d1509862a",
                            name: "#FireKlean gun lube",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b355d4351e6d1509862a-icon.webp",
                        },
                    },
                    {
                        id: "5c51bf8786f77416a11e5cb2",
                        description: "Hand over the #FireKlean gun lube",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b355d4351e6d1509862a",
                            name: "#FireKlean gun lube",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b355d4351e6d1509862a-icon.webp",
                        },
                    },
                    {
                        id: "5cb5de9c86f7746ef55dbc86",
                        description: "Find Golden rooster in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9bc53d4351e00367fbcee",
                            name: "Golden rooster figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9bc53d4351e00367fbcee-icon.webp",
                        },
                    },
                    {
                        id: "5c51bf9a86f77478bf5632aa",
                        description: "Hand over the Golden rooster",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9bc53d4351e00367fbcee",
                            name: "Golden rooster figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9bc53d4351e00367fbcee-icon.webp",
                        },
                    },
                    {
                        id: "5cb5deae86f7746ef451bd76",
                        description: "Find Silver Badge in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9bdb8d4351e003562b8a1",
                            name: "Silver Badge",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9bdb8d4351e003562b8a1-icon.webp",
                        },
                    },
                    {
                        id: "5c51bfb186f77478bd516d37",
                        description: "Hand over the Silver Badge",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9bdb8d4351e003562b8a1",
                            name: "Silver Badge",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9bdb8d4351e003562b8a1-icon.webp",
                        },
                    },
                    {
                        id: "5cb5debf86f7746ef72a7e78",
                        description: "Find Deadlyslob's beard oil in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b9ecd4351e3bac122519",
                            name: "Deadlyslob's beard oil",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b9ecd4351e3bac122519-icon.webp",
                        },
                    },
                    {
                        id: "5c51bfc286f77478bc7ae1d9",
                        description: "Hand over the Deadlyslob's beard oil",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b9ecd4351e3bac122519",
                            name: "Deadlyslob's beard oil",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b9ecd4351e3bac122519-icon.webp",
                        },
                    },
                    {
                        id: "5cb5ded886f7746ef451bd77",
                        description: "Find Golden 1GPhone smartphone in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b720d4351e450201234b",
                            name: "Golden 1GPhone smartphone",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b720d4351e450201234b-icon.webp",
                        },
                    },
                    {
                        id: "5c51c03186f7740ada3f2c3d",
                        description: "Hand over the Golden 1GPhone smartphone",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b720d4351e450201234b",
                            name: "Golden 1GPhone smartphone",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b720d4351e450201234b-icon.webp",
                        },
                    },
                    {
                        id: "5cb5dee986f7746ef82c17e7",
                        description: "Find Jar of DevilDog mayo in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b156d4351e00367fbce9",
                            name: "Jar of DevilDog mayo",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b156d4351e00367fbce9-icon.webp",
                        },
                    },
                    {
                        id: "5c51c04286f77478be4009f5",
                        description: "Hand over the Jar of DevilDog mayo",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9b156d4351e00367fbce9",
                            name: "Jar of DevilDog mayo",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9b156d4351e00367fbce9-icon.webp",
                        },
                    },
                    {
                        id: "5cb5df5586f7746ef82c17e8",
                        description: "Find Can of sprats in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c29cd4351e003562b8a3",
                            name: "Can of sprats",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c29cd4351e003562b8a3-icon.webp",
                        },
                    },
                    {
                        id: "5c51c23a86f77478bb033466",
                        description: "Hand over the Can of sprats",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9c29cd4351e003562b8a3",
                            name: "Can of sprats",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9c29cd4351e003562b8a3-icon.webp",
                        },
                    },
                    {
                        id: "5cb5df7186f7747d215eca08",
                        description: "Find Fake mustache in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bd073a586f7747e6f135799",
                            name: "Fake mustache",
                            iconLink:
                                "https://assets.tarkov.dev/5bd073a586f7747e6f135799-icon.webp",
                        },
                    },
                    {
                        id: "5c51c24c86f77416a11e5cb7",
                        description: "Hand over the Fake mustache",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bd073a586f7747e6f135799",
                            name: "Fake mustache",
                            iconLink:
                                "https://assets.tarkov.dev/5bd073a586f7747e6f135799-icon.webp",
                        },
                    },
                    {
                        id: "5cb5df8486f7746ef82c17ea",
                        description: "Find Kotton beanie in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bd073c986f7747f627e796c",
                            name: "Kotton beanie",
                            iconLink:
                                "https://assets.tarkov.dev/5bd073c986f7747f627e796c-icon.webp",
                        },
                    },
                    {
                        id: "5c51c25c86f77478bf5632af",
                        description: "Hand over the Kotton beanie",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bd073c986f7747f627e796c",
                            name: "Kotton beanie",
                            iconLink:
                                "https://assets.tarkov.dev/5bd073c986f7747f627e796c-icon.webp",
                        },
                    },
                    {
                        id: "5ec798b8254c431289542b90",
                        description: "Find Raven figurine in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f62086f774219b0f1937",
                            name: "Raven figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f62086f774219b0f1937-icon.webp",
                        },
                    },
                    {
                        id: "5ec7998dc1683c0db84484e7",
                        description: "Hand over the Raven figurine",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f62086f774219b0f1937",
                            name: "Raven figurine",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f62086f774219b0f1937-icon.webp",
                        },
                    },
                    {
                        id: "5ec79aaac1683c0db84484e8",
                        description: "Find Pestily plague mask in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f79686f7744022011103",
                            name: "Pestily plague mask",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f79686f7744022011103-icon.webp",
                        },
                    },
                    {
                        id: "5ec79b3ced84ad5ddb58e24c",
                        description: "Hand over the Pestily plague mask",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f79686f7744022011103",
                            name: "Pestily plague mask",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f79686f7744022011103-icon.webp",
                        },
                    },
                    {
                        id: "5ec79c2fed84ad5ddb58e24d",
                        description: "Find Shroud half-mask in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f76986f7740366043752",
                            name: "Shroud half-mask",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f76986f7740366043752-icon.webp",
                        },
                    },
                    {
                        id: "5ec79c5ac1683c0db84484eb",
                        description: "Hand over the Shroud half-mask",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f76986f7740366043752",
                            name: "Shroud half-mask",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f76986f7740366043752-icon.webp",
                        },
                    },
                    {
                        id: "5ec79f2c82a25876330cb232",
                        description:
                            "Find Can of Dr. Lupo's coffee beans in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f6af86f7742199090bf3",
                            name: "Can of Dr. Lupo's coffee beans",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f6af86f7742199090bf3-icon.webp",
                        },
                    },
                    {
                        id: "5ec79fb273279f683254baaa",
                        description:
                            "Hand over the Can of Dr. Lupo's coffee beans",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5e54f6af86f7742199090bf3",
                            name: "Can of Dr. Lupo's coffee beans",
                            iconLink:
                                "https://assets.tarkov.dev/5e54f6af86f7742199090bf3-icon.webp",
                        },
                    },
                    {
                        id: "5f75d3ab0e3df95a7f52b367",
                        description:
                            "Find 42 Signature Blend English Tea in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9be8fd4351e00334cae6e",
                            name: "42 Signature Blend English Tea",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9be8fd4351e00334cae6e-icon.webp",
                        },
                    },
                    {
                        id: "5f75d4558f70ca7a1d684dac",
                        description:
                            "Hand over the 42 Signature Blend English Tea",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5bc9be8fd4351e00334cae6e",
                            name: "42 Signature Blend English Tea",
                            iconLink:
                                "https://assets.tarkov.dev/5bc9be8fd4351e00334cae6e-icon.webp",
                        },
                    },
                    {
                        id: "5f75d4e79a479f5c16331352",
                        description: "Find Veritas guitar pick in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5f745ee30acaeb0d490d8c5b",
                            name: "Veritas guitar pick",
                            iconLink:
                                "https://assets.tarkov.dev/5f745ee30acaeb0d490d8c5b-icon.webp",
                        },
                    },
                    {
                        id: "5f75d521edb90b73913272a3",
                        description: "Hand over the Veritas guitar pick",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5f745ee30acaeb0d490d8c5b",
                            name: "Veritas guitar pick",
                            iconLink:
                                "https://assets.tarkov.dev/5f745ee30acaeb0d490d8c5b-icon.webp",
                        },
                    },
                    {
                        id: "60cfa1031bdece56c249cbf4",
                        description: "Find Evasion armband in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f988c4449e4cb624c1da",
                            name: "Armband (Evasion)",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f988c4449e4cb624c1da-icon.webp",
                        },
                    },
                    {
                        id: "60cfa136f81cc57f471718cb",
                        description: "Hand over the Evasion armband",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f988c4449e4cb624c1da",
                            name: "Armband (Evasion)",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f988c4449e4cb624c1da-icon.webp",
                        },
                    },
                    {
                        id: "60d06de320a6283a506aeb67",
                        description: "Find Can of RatCola soda in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f93284c20f0feb453da7",
                            name: "Can of RatCola soda",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f93284c20f0feb453da7-icon.webp",
                        },
                    },
                    {
                        id: "60d06e921bdece56c249cc0c",
                        description: "Hand over the Can of RatCola soda",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f93284c20f0feb453da7",
                            name: "Can of RatCola soda",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f93284c20f0feb453da7-icon.webp",
                        },
                    },
                    {
                        id: "60d06eef41fd1e14d71e2323",
                        description: "Find Loot Lord plushie in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f7057897d47c5b04ab94",
                            name: "Loot Lord plushie",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f7057897d47c5b04ab94-icon.webp",
                        },
                    },
                    {
                        id: "60d06f3420a6283a506aeb69",
                        description: "Hand over the Loot Lord plushie",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f7057897d47c5b04ab94",
                            name: "Loot Lord plushie",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f7057897d47c5b04ab94-icon.webp",
                        },
                    },
                    {
                        id: "60e827faf09904268a4dbc40",
                        description: "Hand over the Smoke balaclava",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fd8d28367cb5e077335170f",
                            name: "Smoke balaclava",
                            iconLink:
                                "https://assets.tarkov.dev/5fd8d28367cb5e077335170f-icon.webp",
                        },
                    },
                    {
                        id: "60e827a20c492412897c688e",
                        description: "Find Smoke balaclava in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fd8d28367cb5e077335170f",
                            name: "Smoke balaclava",
                            iconLink:
                                "https://assets.tarkov.dev/5fd8d28367cb5e077335170f-icon.webp",
                        },
                    },
                    {
                        id: "60d06f8cac6eb02bc726de99",
                        description: "Find WZ Wallet in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f6c058e0b0481a09ad11",
                            name: "WZ Wallet",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f6c058e0b0481a09ad11-icon.webp",
                        },
                    },
                    {
                        id: "60d074211bdece56c249cc13",
                        description: "Hand over the WZ Wallet",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f6c058e0b0481a09ad11",
                            name: "WZ Wallet",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f6c058e0b0481a09ad11-icon.webp",
                        },
                    },
                    {
                        id: "60d0748820a6283a506aebb1",
                        description: "Find LVNDMARK's rat poison in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f561c4449e4cb624c1d7",
                            name: "LVNDMARK's rat poison",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f561c4449e4cb624c1d7-icon.webp",
                        },
                    },
                    {
                        id: "60d074ef401d874962160aee",
                        description: "Hand over the LVNDMARK's rat poison",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "60b0f561c4449e4cb624c1d7",
                            name: "LVNDMARK's rat poison",
                            iconLink:
                                "https://assets.tarkov.dev/60b0f561c4449e4cb624c1d7-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff004de19a4c3422ea5d",
                        description:
                            "Hand over the found in raid item: Missam forklift key",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09ec84f842e1bd12da3f2",
                            name: "Missam forklift key",
                            iconLink:
                                "https://assets.tarkov.dev/62a09ec84f842e1bd12da3f2-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff141c307729c3264f96",
                        description:
                            "Hand over the found in raid item: Video cassette with the Cyborg Killer movie",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09e974f842e1bd12da3f0",
                            name: "Video cassette with the Cyborg Killer movie",
                            iconLink:
                                "https://assets.tarkov.dev/62a09e974f842e1bd12da3f0-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff203e015d7ce1151d8a",
                        description:
                            "Hand over the found in raid item: BakeEzy cook book",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09e73af34e73a266d932a",
                            name: "BakeEzy cook book",
                            iconLink:
                                "https://assets.tarkov.dev/62a09e73af34e73a266d932a-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff454de19a4c3422ea5e",
                        description:
                            "Hand over the found in raid item: JohnB Liquid DNB glasses",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09e410b9d3c46de5b6e78",
                            name: "JohnB Liquid DNB glasses",
                            iconLink:
                                "https://assets.tarkov.dev/62a09e410b9d3c46de5b6e78-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff633e015d7ce1151d8b",
                        description:
                            "Hand over the found in raid item: Baddie's red beard",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09dd4621468534a797ac7",
                            name: "Baddie's red beard",
                            iconLink:
                                "https://assets.tarkov.dev/62a09dd4621468534a797ac7-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff6b3e015d7ce1151d8c",
                        description:
                            "Hand over the found in raid item: DRD body armor",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09d79de7ac81993580530",
                            name: "DRD body armor",
                            iconLink:
                                "https://assets.tarkov.dev/62a09d79de7ac81993580530-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff7f1c307729c3264f97",
                        description:
                            "Hand over the found in raid item: Gingy keychain",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09d3bcf4a99369e262447",
                            name: "Gingy keychain",
                            iconLink:
                                "https://assets.tarkov.dev/62a09d3bcf4a99369e262447-icon.webp",
                        },
                    },
                    {
                        id: "62a6ff897230237f257cac2a",
                        description:
                            "Hand over the found in raid item: Golden egg",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09cfe4f842e1bd12da3e4",
                            name: "Golden egg",
                            iconLink:
                                "https://assets.tarkov.dev/62a09cfe4f842e1bd12da3e4-icon.webp",
                        },
                    },
                    {
                        id: "62a6ffaa7230237f257cac2c",
                        description:
                            "Hand over the found in raid item: Press pass (issued for NoiceGuy)",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09cb7a04c0c5c6e0a84f8",
                            name: "Press pass (issued for NoiceGuy)",
                            iconLink:
                                "https://assets.tarkov.dev/62a09cb7a04c0c5c6e0a84f8-icon.webp",
                        },
                    },
                    {
                        id: "62a6ffb4a9a0ea77981b57d5",
                        description:
                            "Hand over the found in raid item: Axel parrot figurine",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a091170b9d3c46de5b6cf2",
                            name: "Axel parrot figurine",
                            iconLink:
                                "https://assets.tarkov.dev/62a091170b9d3c46de5b6cf2-icon.webp",
                        },
                    },
                    {
                        id: "62a6ffbcec21e50cad3b6708",
                        description:
                            "Hand over the found in raid item: BEAR Buddy plush toy",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a08f4c4f842e1bd12d9d62",
                            name: "BEAR Buddy plush toy",
                            iconLink:
                                "https://assets.tarkov.dev/62a08f4c4f842e1bd12d9d62-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71c11d54b755a3b53eb65",
                name: "Night Sweep",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71c11d54b755a3b53eb65.webp",
                trader: {
                    name: "Skier",
                },
                minPlayerLevel: 50,
                objectives: [
                    {
                        id: "60e82c12fd1bf4491c4e4547",
                        description: "Find the unusual knives in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 12,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fc64ea372b0dd78d51159dc",
                            name: "Cultist knife",
                            iconLink:
                                "https://assets.tarkov.dev/5fc64ea372b0dd78d51159dc-icon.webp",
                        },
                    },
                    {
                        id: "60e82c5926b88043510e0ad7",
                        description: "Hand over the knives",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 12,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5fc64ea372b0dd78d51159dc",
                            name: "Cultist knife",
                            iconLink:
                                "https://assets.tarkov.dev/5fc64ea372b0dd78d51159dc-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60effd818b669d08a35bfad5",
                name: "The Choice",
                taskImageLink:
                    "https://assets.tarkov.dev/60effd818b669d08a35bfad5.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 50,
                objectives: [
                    {
                        id: "60effdac12fec20321367038",
                        description: "Hand over Secure container Epsilon",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59db794186f77448bc595262",
                            name: "Secure container Epsilon",
                            iconLink:
                                "https://assets.tarkov.dev/59db794186f77448bc595262-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e729cf5698ee7b05057439",
                name: "Swift One",
                taskImageLink:
                    "https://assets.tarkov.dev/60e729cf5698ee7b05057439.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 50,
                objectives: [
                    {
                        id: "60e729cf5698ee7b0505743c",
                        description:
                            "Eliminate PMC operatives without using any armor or helmets on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71dc67fcf9c556f325056",
                name: "Booze",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71dc67fcf9c556f325056.webp",
                trader: {
                    name: "Ragman",
                },
                minPlayerLevel: 50,
                objectives: [
                    {
                        id: "60e73333465ea8368012cc5b",
                        description:
                            "Find Bottles of Tarkovskaya vodka in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d40407c86f774318526545a",
                            name: "Bottle of Tarkovskaya vodka",
                            iconLink:
                                "https://assets.tarkov.dev/5d40407c86f774318526545a-icon.webp",
                        },
                    },
                    {
                        id: "60e733590367e10a450f7805",
                        description:
                            "Find Bottles of Dan Jackiel whiskey in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d403f9186f7743cac3f229b",
                            name: "Bottle of Dan Jackiel whiskey",
                            iconLink:
                                "https://assets.tarkov.dev/5d403f9186f7743cac3f229b-icon.webp",
                        },
                    },
                    {
                        id: "60f028268b669d08a35bfad8",
                        description:
                            "Find Canisters with purified water in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b33a686f7742523398398",
                            name: "Canister with purified water",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b33a686f7742523398398-icon.webp",
                        },
                    },
                    {
                        id: "62a700fb7230237f257cac2e",
                        description: "Find Bottles of Pevko Light beer in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09f32621468534a797acb",
                            name: "Bottle of Pevko Light beer",
                            iconLink:
                                "https://assets.tarkov.dev/62a09f32621468534a797acb-icon.webp",
                        },
                    },
                    {
                        id: "60e73397479eef59b01b0bd5",
                        description: "Hand over the vodka",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d40407c86f774318526545a",
                            name: "Bottle of Tarkovskaya vodka",
                            iconLink:
                                "https://assets.tarkov.dev/5d40407c86f774318526545a-icon.webp",
                        },
                    },
                    {
                        id: "60e733b80367e10a450f7807",
                        description: "Hand over the whiskey",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 10,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d403f9186f7743cac3f229b",
                            name: "Bottle of Dan Jackiel whiskey",
                            iconLink:
                                "https://assets.tarkov.dev/5d403f9186f7743cac3f229b-icon.webp",
                        },
                    },
                    {
                        id: "60f0284e8b669d08a35bfada",
                        description: "Hand over the superwater",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d1b33a686f7742523398398",
                            name: "Canister with purified water",
                            iconLink:
                                "https://assets.tarkov.dev/5d1b33a686f7742523398398-icon.webp",
                        },
                    },
                    {
                        id: "62a70110eb3cb46d9a0bba78",
                        description: "Hand over the beer",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a09f32621468534a797acb",
                            name: "Bottle of Pevko Light beer",
                            iconLink:
                                "https://assets.tarkov.dev/62a09f32621468534a797acb-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71d6d7fcf9c556f325055",
                name: "The Courier",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71d6d7fcf9c556f325055.webp",
                trader: {
                    name: "Mechanic",
                },
                minPlayerLevel: 52,
                objectives: [
                    {
                        id: "60e84ba726b88043510e0ad8",
                        description:
                            "Stash a Trijicon REAP-IR scope under the base of the yellow crane at the construction site on Customs",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5a1eaa87fcdbcb001865f75e",
                            name: "Trijicon REAP-IR thermal scope",
                            iconLink:
                                "https://assets.tarkov.dev/5a1eaa87fcdbcb001865f75e-icon.webp",
                        },
                    },
                    {
                        id: "60e85b2a26b88043510e0ada",
                        description:
                            'Stash a Trijicon REAP-IR scope behind the trash containers at the "new" gas station on Customs',
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5a1eaa87fcdbcb001865f75e",
                            name: "Trijicon REAP-IR thermal scope",
                            iconLink:
                                "https://assets.tarkov.dev/5a1eaa87fcdbcb001865f75e-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71ccb5688f6424c7bfec4",
                name: "Trophies",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71ccb5688f6424c7bfec4.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 55,
                objectives: [
                    {
                        id: "60e8174d0367e10a450f7818",
                        description:
                            "Find in raid and hand over BEAR PMC dogtags of level 50+",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 50,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32bb586f774757e1e8442",
                            name: "Dogtag BEAR",
                            iconLink:
                                "https://assets.tarkov.dev/59f32bb586f774757e1e8442-icon.webp",
                        },
                    },
                    {
                        id: "60e81795479eef59b01b0bdf",
                        description:
                            "Find in raid and hand over USEC PMC dogtags of level 50+",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 20,
                        foundInRaid: true,
                        dogTagLevel: 50,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71b62a0beca400d69efc4",
                name: "Escort",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71b62a0beca400d69efc4.webp",
                trader: {
                    name: "Prapor",
                },
                minPlayerLevel: 60,
                objectives: [
                    {
                        id: "60ec07bcd7b7cb55e94c1760",
                        description:
                            "Eliminate PMC operatives on daytime Factory",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec08fafd1bf4491c4e4550",
                        description: "Eliminate PMC operatives on Customs",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec09f05d67b234af3d392f",
                        description: "Eliminate PMC operatives on Shoreline",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec0a9571035f300c301acb",
                        description: "Eliminate PMC operatives on Reserve",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec0ad2ad25e3185465bbd0",
                        description: "Eliminate PMC operatives on Woods",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec0af8a664b027ab1441af",
                        description: "Eliminate PMC operatives on Interchange",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60ec0b1871035f300c301acd",
                        description: "Eliminate PMC operatives in The Lab",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "60e71ce009d7c801eb0c0ec6",
                name: "Special Equipment",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71ce009d7c801eb0c0ec6.webp",
                trader: {
                    name: "Peacekeeper",
                },
                minPlayerLevel: 60,
                objectives: [
                    {
                        id: "60e7434ed1a062318d3d2260",
                        description: "Find VPX Flash Storage Modules in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05300686f7746dce784e5d",
                            name: "VPX Flash Storage Module",
                            iconLink:
                                "https://assets.tarkov.dev/5c05300686f7746dce784e5d-icon.webp",
                        },
                    },
                    {
                        id: "60e7436675131b4e61703b7b",
                        description: "Find UHF RFID Readers in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052fb986f7746b2101e909",
                            name: "UHF RFID Reader",
                            iconLink:
                                "https://assets.tarkov.dev/5c052fb986f7746b2101e909-icon.webp",
                        },
                    },
                    {
                        id: "60e7439975131b4e61703b7c",
                        description:
                            "Find Virtex programmable processors in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05308086f7746b2101e90b",
                            name: "Virtex programmable processor",
                            iconLink:
                                "https://assets.tarkov.dev/5c05308086f7746b2101e90b-icon.webp",
                        },
                    },
                    {
                        id: "60e743cd0367e10a450f780e",
                        description:
                            "Find Military COFDM Wireless Signal Transmitters in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                    {
                        id: "62a70191a9a0ea77981b57d9",
                        description: "Find Military flash drives in raid",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a0a16d0b9d3c46de5b6e97",
                            name: "Military flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/62a0a16d0b9d3c46de5b6e97-icon.webp",
                        },
                    },
                    {
                        id: "60e74302d1a062318d3d225f",
                        description: "Hand over the flash storage modules",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05300686f7746dce784e5d",
                            name: "VPX Flash Storage Module",
                            iconLink:
                                "https://assets.tarkov.dev/5c05300686f7746dce784e5d-icon.webp",
                        },
                    },
                    {
                        id: "60e7432875131b4e61703b7a",
                        description: "Hand over the RFID readers",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052fb986f7746b2101e909",
                            name: "UHF RFID Reader",
                            iconLink:
                                "https://assets.tarkov.dev/5c052fb986f7746b2101e909-icon.webp",
                        },
                    },
                    {
                        id: "60e7449875131b4e61703b7e",
                        description: "Hand over the programmable processors",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c05308086f7746b2101e90b",
                            name: "Virtex programmable processor",
                            iconLink:
                                "https://assets.tarkov.dev/5c05308086f7746b2101e90b-icon.webp",
                        },
                    },
                    {
                        id: "60e744c9d1a062318d3d2262",
                        description: "Hand over the signal transmitters",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5c052f6886f7746b1e3db148",
                            name: "Military COFDM Wireless Signal Transmitter",
                            iconLink:
                                "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-icon.webp",
                        },
                    },
                    {
                        id: "62a7019ea9a0ea77981b57da",
                        description: "Hand over the flash drives",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 4,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "62a0a16d0b9d3c46de5b6e97",
                            name: "Military flash drive",
                            iconLink:
                                "https://assets.tarkov.dev/62a0a16d0b9d3c46de5b6e97-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "60e71e8ed54b755a3b53eb67",
                name: "The Huntsman Path - Relentless",
                taskImageLink:
                    "https://assets.tarkov.dev/60e71e8ed54b755a3b53eb67.webp",
                trader: {
                    name: "Jaeger",
                },
                minPlayerLevel: 65,
                objectives: [
                    {
                        id: "60e7259e465ea8368012cc45",
                        description: "Locate and eliminate Tagilla",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60e725d8b567ff641b129555",
                        description: "Locate and eliminate Killa",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60e72604a6e322250215f066",
                        description: "Locate and eliminate Reshala",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60e7261382576b5f4f21c495",
                        description: "Locate and eliminate Shturman",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60e7261eb567ff641b129557",
                        description: "Locate and eliminate Glukhar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                    {
                        id: "60e72629465ea8368012cc47",
                        description: "Locate and eliminate Sanitar",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "61e6e5e0f5b9633f6719ed95",
                name: "Compensation for Damage - Trust",
                taskImageLink:
                    "https://assets.tarkov.dev/61e6e5e0f5b9633f6719ed95.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 0,
                objectives: [
                    {
                        id: "61e6e679b350e406c823a205",
                        description:
                            "Hand over the found in raid BEAR PMC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32bb586f774757e1e8442",
                            name: "Dogtag BEAR",
                            iconLink:
                                "https://assets.tarkov.dev/59f32bb586f774757e1e8442-icon.webp",
                        },
                    },
                    {
                        id: "61e6e68db2728a406f4ad009",
                        description:
                            "Hand over the found in raid USEC PMC dogtags",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 5,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "59f32c3b86f77472a31742f0",
                            name: "Dogtag USEC",
                            iconLink:
                                "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "61e6e60223374d168a4576a6",
                name: "Compensation for Damage - Wager",
                taskImageLink:
                    "https://assets.tarkov.dev/61e6e60223374d168a4576a6.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 0,
                objectives: [
                    {
                        id: "61e6ed30d007ca50d54baae5",
                        description:
                            "Eliminate PMC operatives while using any AK-series assault rifle",
                        optional: false,
                        __typename: "TaskObjectiveShoot",
                    },
                ],
            },
            {
                id: "61e6e615eea2935bc018a2c5",
                name: "Compensation for Damage - Barkeep",
                taskImageLink:
                    "https://assets.tarkov.dev/61e6e615eea2935bc018a2c5.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 0,
                objectives: [
                    {
                        id: "61e703205ca3b3783662be2b",
                        description:
                            "Hand over the found in raid Bottle of Dan Jackiel whiskey",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5d403f9186f7743cac3f229b",
                            name: "Bottle of Dan Jackiel whiskey",
                            iconLink:
                                "https://assets.tarkov.dev/5d403f9186f7743cac3f229b-icon.webp",
                        },
                    },
                    {
                        id: "61e7034b95a8910716185486",
                        description:
                            "Hand over the found in raid Cans of TarCola soda",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 3,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "57514643245977207f2c2d09",
                            name: "Can of TarCola soda",
                            iconLink:
                                "https://assets.tarkov.dev/57514643245977207f2c2d09-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "61e6e621bfeab00251576265",
                name: "Compensation for Damage - Collection",
                taskImageLink:
                    "https://assets.tarkov.dev/61e6e621bfeab00251576265.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 0,
                objectives: [
                    {
                        id: "61e704a123374d168a4576a8",
                        description:
                            "Hand over the found in raid Colt M4A1 assault rifles",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 2,
                        foundInRaid: true,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5447a9cd4bdc2dbd208b4567",
                            name: "Colt M4A1 5.56x45 assault rifle",
                            iconLink:
                                "https://assets.tarkov.dev/5447a9cd4bdc2dbd208b4567-icon.webp",
                        },
                    },
                ],
            },
            {
                id: "61e6e60c5ca3b3783662be27",
                name: "Compensation for Damage - Wergild",
                taskImageLink:
                    "https://assets.tarkov.dev/61e6e60c5ca3b3783662be27.webp",
                trader: {
                    name: "Fence",
                },
                minPlayerLevel: 0,
                objectives: [
                    {
                        id: "61e6f5a1eea2935bc018a2c7",
                        description: "Hand over RUB",
                        optional: false,
                        __typename: "TaskObjectiveItem",
                        count: 1000000,
                        foundInRaid: false,
                        dogTagLevel: 0,
                        minDurability: 0,
                        maxDurability: 100,
                        requiredKeys: null,
                        item: {
                            id: "5449016a4bdc2d6f028b456f",
                            name: "Roubles",
                            iconLink:
                                "https://assets.tarkov.dev/5449016a4bdc2d6f028b456f-icon.webp",
                        },
                    },
                ],
            },
        ],
    },
};