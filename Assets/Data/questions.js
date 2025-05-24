const questions = [
    {
        category: "Current Presidency",
        question: "Who is the current U.S. President (2025)?",
        options: [
            {
                text: "Joe Biden",
                weight: 0.1,
                info: "Former President, not current.",
                img: "https://www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/46-joe-biden.png"
            },
            {
                text: "Donald Trump",
                weight: 1.0,
                info: "Current president of the United States of America.",
                img: "https://www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/47-donald-trump.jpg"
            },
            {
                text: "Barack Obama",
                weight: 0,
                info: "Served from 2009 to 2017.",
                img: "https://www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/44-obama.jpg"
            },
            {
                text: "George W. Bush",
                weight: 0,
                info: "Served from 2001 to 2009.",
                img: "https://www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/43-bush.jpg"
            }
        ]
    },
    {
        category: "Current Presidency",
        question: "Who is the current U.S. Vice President (2025)?",
        options: [
            {
                text: "Kamala Harris",
                weight: 0.1,
                info: "Former Vice President, not current.",
                img: "https://bookstore.gpo.gov/sites/default/files/styles/product_page_image/public/covers/021-000-00232-1.png?itok=6_77Eaha"
            },
            {
                text: "JD Vance",
                weight: 1.0,
                info: "Current Vice President of the United States of America.",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/82/VancePortrait.jpg"
            },
            {
                text: "Mike Pence",
                weight: 0,
                info: "Served as Vice President from 2017 to 2021.",
                img: "https://trumpwhitehouse.archives.gov/wp-content/uploads/2017/11/Vice-President-Pence-Official-Portrait-620x775.jpg"
            },
            {
                text: "Dick Cheney",
                weight: 0,
                info: "Served as Vice President from 2001 to 2009.",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/88/46_Dick_Cheney_3x4.jpg"
            }
        ]
    },
    {
        category: "Political Parties",
        question: "Which U.S. political party is known as the Grand Old Party?",
        options: [
            {
                text: "Reform Party",
                weight: 0,
                info: "Founded in the 1990s, the Reform Party focuses on government reform and fiscal responsibility.",
                img: "https://reformparty.org/wp-content/uploads/2024/10/RP-logo-2024-371x328px.jpg"
            },
            {
                text: "Libertarian Party",
                weight: 0,
                info: "Known for advocating minimal government and individual liberties, the Libertarian Party is a modern third party.",
                img: "https://lp.org/wp-content/uploads/2024/11/cropped-lp-torch-logo-circle.png"
            },
            {
                text: "Democratic Party",
                weight: 0,
                info: "One of the two major U.S. parties, the Democratic Party was founded in the early 19th century and is not known as the GOP.",
                img: "https://democrats.org/wp-content/uploads/2024/09/DEMS_d66355.png"
            },
            {
                text: "Republican Party",
                weight: 1.0,
                info: "The Republican Party acquired the acronym GOP, widely understood as “Grand Old Party,” in the 1870s.",
                img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeyyZ0W3EmKt9fNQ6MH0gPaZvjsLTJvHikCru6W4thOJTUIeRL"
            }
        ]
    },
    {
        category: "Education",
        question: "Which of these is the oldest institution of higher learning in the United States?",
        options: [
            {
                text: "Harvard University",
                weight: 1.0,
                info: "Harvard University is the oldest institution of higher learning in the United States (founded 1636) and one of the nation’s most prestigious. It is one of the Ivy League schools.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
            },
            {
                text: "College of William & Mary",
                weight: 0.1,
                info: "Founded: February 8, 1693. It is the second-oldest institution of higher learning in the U.S.",
                img: "https://brand.wm.edu/wp-content/uploads/2022/06/Athletics-WM-Green-on-Gold-300x244.png"
            },
            {
                text: "Yale University",
                weight: 0,
                info: "Established: October 9, 1701. Known for its law school, it’s one of the Ivy League universities.",
                img: "https://m.media-amazon.com/images/I/61stPs8fNrL.jpg"
            },
            {
                text: "Princeton University",
                weight: 0,
                info: "Established: October 22, 1746. Known for its strong undergraduate focus and prestigious faculty.",
                img: "https://www.mladiinfo.eu/wp-content/uploads/2013/11/princeton-logo.jpg"
            }
        ]
    },
    {
        category: "World War 2",
        question: "What event led the United States to enter World War II?",
        options: [
            {
                text: "Attack on Pearl Harbor",
                weight: 1.0,
                info: "The surprise attack on December 7, 1941, prompted the U.S. to declare war.",
                img: "https://www.archives.gov/files/publications/prologue/2011/winter/images/ph-decklogs-westvirginia-l.jpg"
            },
            {
                text: "Bombing of Hiroshima",
                weight: 0.1,
                info: "Occurred later in the war, after the U.S. had already entered.",
                img: "https://www.archives.gov/files/news/images/atomic-cloud-nagasaki-535795-crop-b.png"
            },
            {
                text: "D-Day Invasion",
                weight: 0,
                info: "The U.S. participated but was not the trigger for entering the war.",
                img: "https://www.nationalww2museum.org/sites/default/files/styles/wide_large/public/2024-05/ddaylanding2.png?h=8c84ac64"
            },
            {
                text: "Zimmerman Telegram",
                weight: 0,
                info: "Was a factor in World War I, not World War II.",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Zimmermann_Telegram_as_Received_by_the_German_Ambassador_to_Mexico_-_NARA_-_302025.jpg"
            }
        ]
    },
    {
        category: "World War 2",
        question: "When did World War 2 end?",
        options: [
            {
                text: "1944",
                weight: 0.5,
                info: "D-Day was in 1944, but war continued.",
                img: "https://placehold.co/1?text=1944"
            },
            {
                text: "1945",
                weight: 1.0,
                info: "The war ended in 1945.",
                img: "https://placehold.co/1?text=1945"
            },
            {
                text: "1946",
                weight: 0.6,
                info: "Some treaties signed in 1946.",
                img: "https://placehold.co/1?text=1946"
            },
            {
                text: "1950",
                weight: 0.1,
                info: "Too late. The Korean War began in 1950.",
                img: "https://placehold.co/1?text=1950"
            }
        ]
    },
    {
        category: "World War 2",
        question: "Which U.S. president served during most of World War II?",
        options: [
            {
                text: "Franklin D. Roosevelt",
                weight: 1.0,
                info: "Served from 1933 until his death in 1945 during the majority of WWII.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/14c3a2f268a74a29b82fb763b9a49bb7.jpg"
            },
            {
                text: "Harry S. Truman",
                weight: 0.2,
                info: "Became president after FDR's death, near the end of the war.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/bac31b89ccef4da384a32c4691298523.jpg"
            },
            {
                text: "Dwight D. Eisenhower",
                weight: 0,
                info: "He was the Supreme Allied Commander but was not president during WWII.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/6fa02c5a53984a5aa485608a5c371dda.jpg"
            },
            {
                text: "Thomas Jefferson",
                weight: 0,
                info: "Was a president much earlier, not involved in WWII.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/9efe835d5a7d4fe689f0426433ec6ae3.jpg"
            }
        ]
    },
    {
        category: "World War 2",
        question: "What was the U.S. strategy for defeating Japan in World War II?",
        options: [
            {
                text: "Island Hopping",
                weight: 1.0,
                info: "A strategy of capturing key islands to get closer to Japan, bypassing others.",
                img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152844389/settings_images/3bbd6f-a840-a35e-b28a-381ca5f7edeb_world_war_2_battles_pacific.jpg"
            },
            {
                text: "Blitzkrieg",
                weight: 0,
                info: "This was a German strategy, not used by the U.S.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bundesarchiv_Bild_101I-218-0504-36%2C_Russland-S%C3%BCd%2C_Panzer_III%2C_Sch%C3%BCtzenpanzer%2C_24.Pz.Div._%28cropped%29.jpg/570px-Bundesarchiv_Bild_101I-218-0504-36%2C_Russland-S%C3%BCd%2C_Panzer_III%2C_Sch%C3%BCtzenpanzer%2C_24.Pz.Div._%28cropped%29.jpg"
            },
            {
                text: "Trench Warfare",
                weight: 0,
                info: "More common in World War I, not World War II.",
                img: "https://cdn.britannica.com/49/135149-050-D6B8878A/troops-British-trench-Western-Front-World-War.jpg"
            },
            {
                text: "Operation Overlord",
                weight: 0.2,
                info: "A successful D-Day invasion, but focused on Europe, not Japan.",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/66/NormandySupply_edit.jpg"
            }
        ]
    },
    {
        category: "World War 1",
        question: "What event led the United States to enter World War I?",
        options: [
            {
                text: "Sinking of the Lusitania",
                weight: 1.0,
                info: "A German U-boat sank a British ship with American passengers in 1915.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bundesarchiv_DVM_10_Bild-23-61-17%2C_Untergang_der_%22Lusitania%22.jpg/330px-Bundesarchiv_DVM_10_Bild-23-61-17%2C_Untergang_der_%22Lusitania%22.jpg"
            },
            {
                text: "Assassination of Archduke Franz Ferdinand",
                weight: 0.1,
                info: "This sparked the war but did not directly involve the U.S.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/960px-DC-1914-27-d-Sarajevo-cropped.jpg"
            },
            {
                text: "Invasion of Belgium",
                weight: 0.1,
                info: "Germany’s attack on Belgium angered many, but didn’t cause U.S. entry.",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/German_advance_through_Belgium%2C_August_1914.png"
            },
            {
                text: "Zimmermann Telegram",
                weight: 0.8,
                info: "Germany proposed a military alliance with Mexico against the U.S.",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Zimmermann_Telegram_as_Received_by_the_German_Ambassador_to_Mexico_-_NARA_-_302025.jpg"
            }
        ]
    },
    {
        category: "World War 1",
        question: "Which U.S. president led the country during World War I?",
        options: [
            {
                text: "Woodrow Wilson",
                weight: 1.0,
                info: "He was president from 1913–1921 and asked Congress to declare war in 1917.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/b737dd1e4f2f4e8394bd5550f9881ebd.jpg"
            },
            {
                text: "Theodore Roosevelt",
                weight: 0.1,
                info: "He was president earlier and supported U.S. involvement but was not in office.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/a438bc8da31f4ae291b5be4461b77c24.jpg"
            },
            {
                text: "Franklin D. Roosevelt",
                weight: 0.1,
                info: "He led the U.S. during World War II, not World War I.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/14c3a2f268a74a29b82fb763b9a49bb7.jpg"
            },
            {
                text: "Warren G. Harding",
                weight: 0.1,
                info: "He became president after the war, in 1921.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/b0260025d62446f29d4e6b2200eb10a1.jpg"
            }
        ]
    },
    {
        category: "World War 1",
        question: "How did World War 1 affect women in the United States?",
        options: [
            {
                text: "It expanded their roles in the workforce",
                weight: 1.0,
                info: "With men at war, women filled many jobs and gained visibility.",
                img: "https://www.striking-women.org/sites/default/files/MUNITION%20WORKERS.JPEG"
            },
            {
                text: "It allowed women to serve in combat roles",
                weight: 0,
                info: "Women did not serve in combat during World War 1.",
                img: "https://www.iwm.org.uk/sites/default/files/2018-06/1_1.jpg"
            },
            {
                text: "It led to the end of the women’s suffrage movement",
                weight: 0,
                info: "It actually strengthened the movement, leading to the 19th Amendment.",
                img: "https://tennesseeencyclopedia.net/wp-content/uploads/2017/11/W081a.jpg"
            },
            {
                text: "It restricted women to domestic work only",
                weight: 0,
                info: "Women entered many public sector and industrial jobs during the war.",
                img: "https://blog.bridgemanimages.com/hs-fs/hubfs/Imported_Blog_Media/woman-moreau-factory-work-1.jpeg?width=600&height=268&name=woman-moreau-factory-work-1.jpeg"
            }
        ]
    },
    {
        category: "World War 1",
        question: "What was the Selective Service Act of 1917?",
        options: [
            {
                text: "A law requiring men to register for military service",
                weight: 1.0,
                info: "It allowed the U.S. government to draft soldiers for WW1.",
                img: "https://veteran-voices.com/wp-content/uploads/2020/04/WWI-Draft-NARA-ID-45543491.jpg"
            },
            {
                text: "An act promoting voluntary enlistment",
                weight: 0.3,
                info: "While some volunteered, the act created a draft.",
                img: "https://images.theconversation.com/files/57505/original/f9mvp656-1409130771.jpg"
            },
            {
                text: "A program for hiring military contractors",
                weight: 0,
                info: "It focused on conscription, not contracting.",
                img: "https://www.usmcu.edu/Portals/218/Image%2011%20The%20U_S_%20Marines%20in%20WWI%20part%201%20Marine%20Corps%20History%20Vol_%201%20No_%202-2-4.jpg"
            },
            {
                text: "A law protecting soldiers' voting rights",
                weight: 0.2,
                info: "It didn’t address voting; it was about military service.",
                img: "https://news.va.gov/wp-content/uploads/sites/3/2023/10/WORLD-WAR-I-600x338-3.jpg?w=600"
            }
        ]
    },
    {
        category: "Civil War",
        question: "Which state seceded from Virginia in 1863?",
        options: [
            {
                text: "Maryland",
                weight: 0,
                info: "Maryland remained loyal to the Union during the Civil War.",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Seal_of_Maryland_%28reverse%29.svg"
            },
            {
                text: "West Virginia",
                weight: 1.0,
                info: "West Virginia seceded from Virginia in 1863 and became a state on June 20, 1863.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seal_of_West_Virginia.svg/1200px-Seal_of_West_Virginia.svg.png"
            },
            {
                text: "North Carolina",
                weight: 0,
                info: "North Carolina seceded from the Union in 1861, not in 1863.",
                img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Seal_of_North_Carolina.svg"
            },
            {
                text: "New York",
                weight: 0,
                info: "New York remained part of the Union during the Civil War.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Seal_of_New_York_%28state%29.svg/1200px-Seal_of_New_York_%28state%29.svg.png"
            }
        ]
    },
    {
        category: "Slavery",
        question: "What was the Underground Railroad?",
        options: [
            {
                text: "A secret network to help slaves escape to freedom",
                weight: 1.0,
                info: "It was a system of safe houses and guides for escaping slaves.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CsAxOmPPMoiTssEfcBwN-JbByC-J1HmGYQ&s"
            },
            {
                text: "A railroad built by enslaved workers",
                weight: 0,
                info: "It wasn’t a literal railroad.",
                img: "https://www.nps.gov/grsm/learn/historyculture/images/Convicts-front-1600x1200.jpg"
            },
            {
                text: "A Confederate supply line",
                weight: 0,
                info: "It had no connection to the Confederacy.",
                img: "https://www.battlefields.org/sites/default/files/styles/wysiwyg_original/public/thumbnails/image/reams-station-illustration_0_0.jpg"
            },
            {
                text: "A protest route during the Civil War",
                weight: 0.2,
                info: "It existed before the Civil War and focused on escape.",
                img: "https://sites.wp.odu.edu/primary-sources/wp-content/uploads/sites/9237/2018/09/alabama_400-300x231.jpg"
            }
        ]
    },
    {
        category: "Founding documents",
        question: "Which document declared the American colonies independent from Britain?",
        options: [
            {
                text: "Declaration of Independence",
                weight: 1.0,
                info: "Signed in 1776 to declare independence from Britain.",
                img: "https://www.archives.gov/files/founding-docs/declaration_of_independence_630.jpg"
            },
            {
                text: "U.S. Constitution",
                weight: 0.2,
                info: "Framework for U.S. government, signed in 1787.",
                img: "https://www.archives.gov/files/founding-docs/constitution_1_of_4_630.jpg"
            },
            {
                text: "Bill of Rights",
                weight: 0.1,
                info: "First 10 amendments to the Constitution, ratified in 1791.",
                img: "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg"
            },
            {
                text: "Mayflower Compact",
                weight: 0,
                info: "Early self-government agreement, signed in 1620.",
                img: "https://themayflowersociety.org/wp-content/uploads/2021/08/Mayflower_compact.jpg"
            }
        ]
    },
    {
        category: "Founding documents",
        question: "What is the supreme law of the United States?",
        options: [
            {
                text: "Declaration of Independence",
                weight: 0.2,
                info: "Declared independence but is not a governing law.",
                img: "https://www.archives.gov/files/founding-docs/declaration_of_independence_630.jpg"
            },
            {
                text: "Articles of Confederation",
                weight: 0.1,
                info: "America's first constitution, replaced in 1789.",
                img: "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg"
            },
            {
                text: "U.S. Constitution",
                weight: 1.0,
                info: "It is the highest law of the land, adopted in 1787.",
                img: "https://www.archives.gov/files/founding-docs/constitution_1_of_4_630.jpg"
            },
            {
                text: "Federalist Papers",
                weight: 0,
                info: "Essays supporting the Constitution, not a legal document.",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Federalist_%281st_ed%2C_1788%2C_vol_I%2C_title_page%29_-_02.jpg"
            }
        ]
    },
    {
        category: "Founding documents",
        question: "Which document was written to persuade states to ratify the U.S. Constitution?",
        options: [
            {
                text: "The Federalist Papers",
                weight: 1.0,
                info: "A series of essays promoting the ratification of the Constitution.",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Federalist_%281st_ed%2C_1788%2C_vol_I%2C_title_page%29_-_02.jpg"
            },
            {
                text: "Declaration of Independence",
                weight: 0.1,
                info: "Declared independence from Britain, not related to ratification.",
                img: "https://www.archives.gov/files/founding-docs/declaration_of_independence_630.jpg"
            },
            {
                text: "Bill of Rights",
                weight: 0.1,
                info: "The first 10 amendments added after ratification.",
                img: "https://www.archives.gov/files/founding-docs/bill-of-rights.jpg"
            },
            {
                text: "Articles of Confederation",
                weight: 0,
                info: "The original constitution replaced by the current one.",
                img: "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg"
            }
        ]
    },
    {
        category: "Founding documents",
        question: "Which document served as the first constitution of the United States?",
        options: [
            {
                text: "Articles of Confederation",
                weight: 1.0,
                info: "Adopted in 1781, it was the nation's first governing document.",
                img: "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg"
            },
            {
                text: "U.S. Constitution",
                weight: 0.2,
                info: "Replaced the Articles in 1789 as the current governing document.",
                img: "https://www.archives.gov/files/founding-docs/constitution_1_of_4_630.jpg"
            },
            {
                text: "Declaration of Independence",
                weight: 0.1,
                info: "Declared separation from Britain but was not a constitution.",
                img: "https://www.archives.gov/files/founding-docs/declaration_of_independence_630.jpg"
            },
            {
                text: "Magna Carta",
                weight: 0,
                info: "An English charter from 1215, not a U.S. document.",
                img: "https://www.nationalarchives.gov.uk/wp-content/uploads/2015/01/magna-carta-1215-salisbury-cathedral1.jpg"
            }
        ]
    }
];