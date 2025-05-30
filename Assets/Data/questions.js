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
                img: "https://www.whitehouse.gov/wp-content/uploads/2025/01/Donald-J-Trump.jpg"
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
                img: "https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/harris-profile-21.png"
            },
            {
                text: "Mike Pence",
                weight: 0,
                info: "Served as Vice President from 2017 to 2021.",
                img: "https://trumpwhitehouse.archives.gov/wp-content/uploads/2017/11/VicePresidentPence-620x620.jpg"
            },
            {
                text: "JD Vance",
                weight: 1.0,
                info: "Current Vice President of the United States of America.",
                img: "https://www.whitehouse.gov/wp-content/uploads/2025/01/JD-Vance.jpg"
            },
            {
                text: "Dick Cheney",
                weight: 0,
                info: "Served as Vice President from 2001 to 2009.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/46_Dick_Cheney_3x4.jpg/500px-46_Dick_Cheney_3x4.jpg"
            }
        ]
    },
    {
        category: "Current Presidency",
        question: "What historical precedent was set by Donald Trump’s election as the 47th president in 2024?",
        options: [
            {
                text: "First president to serve three terms",
                weight: 0,
                info: "No president has served three terms due to the 22nd Amendment.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xPSshwVEaih12D3abxFppvZR9I7Nm9AUwQ&s"
            },
            {
                text: "Second president to serve non-consecutive terms",
                weight: 1.0,
                info: "Trump, like Grover Cleveland, was elected to non-consecutive terms (45th and 47th president).",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/db142cfa638846d88c071c9d48392c38.jpg"
            },
            {
                text: "First president elected after a felony conviction",
                weight: 0.1,
                info: "Trump was convicted in 2024 but faced no penalty upon election.",
                img: "https://static01.nyt.com/images/2024/05/09/multimedia/03evening-nl-trump-court/03evening-nl-trump-court-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
                text: "Youngest president elected",
                weight: 0,
                info: "At 78, Trump is the oldest president elected, not the youngest.",
                img: "https://www.whitehouse.gov/wp-content/uploads/2025/01/Donald-J-Trump.jpg"
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
        question: "What year did the United States enter World War 2?",
        options: [
            {
                text: "1939",
                weight: 0,
                info: "This is when WWII began, but the U.S. did not enter until later.",
                img: "https://placehold.co/1?text=1939"
            },
            {
                text: "1945",
                weight: 0,
                info: "This is the year WWII ended, not when the U.S. entered.",
                img: "https://placehold.co/1?text=1945"
            },
            {
                text: "1940",
                weight: 0.2,
                info: "Close, but the U.S. was still officially neutral at this time.",
                img: "https://placehold.co/1?text=1940"
            },
            {
                text: "1941",
                weight: 1.0,
                info: "The U.S. entered WWII after the attack on Pearl Harbor on December 7, 1941.",
                img: "https://placehold.co/1?text=1941"
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
                text: "Harry S. Truman",
                weight: 0.2,
                info: "Became president after FDR's death, near the end of the war.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/bac31b89ccef4da384a32c4691298523.jpg"
            },
            {
                text: "Franklin D. Roosevelt",
                weight: 1.0,
                info: "Served from 1933 until his death in 1945 during the majority of WWII.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/14c3a2f268a74a29b82fb763b9a49bb7.jpg"
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
        question: "Which U.S. president led the country during World War I?",
        options: [
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
                text: "Woodrow Wilson",
                weight: 1.0,
                info: "He was president from 1913–1921 and asked Congress to declare war in 1917.",
                img: "https://d1y822qhq55g6.cloudfront.net/fotoweb/2023/11/b737dd1e4f2f4e8394bd5550f9881ebd.jpg"
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
        category: "Civil War",
        question: "What year did the Civil War begin?",
        options: [
            {
                text: "1865",
                weight: 0.2,
                info: "This is when the Civil War ended, not when it started.",
                img: "https://placehold.co/1?text=1865"
            },
            {
                text: "1859",
                weight: 0.1,
                info: "This was before the war began, though tensions were rising (e.g., John Brown's raid).",
                img: "https://placehold.co/1?text=1859"
            },
            {
                text: "1863",
                weight: 0,
                info: "This year is notable for the Emancipation Proclamation, but the war started earlier.",
                img: "https://placehold.co/1?text=1863"
            },
            {
                text: "1861",
                weight: 1.0,
                info: "The Civil War began in April 1861 with the Confederate attack on Fort Sumter.",
                img: "https://placehold.co/1?text=1861"
            }
        ]
    },
    {
        category: "Civil Rights Movement",
        question: "Who delivered the 'I Have a Dream' speech?",
        options: [
            {
                text: "Malcolm X",
                weight: 0,
                info: "A major civil rights figure, but he did not give this speech.",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Malcolm_X_NYWTS_4.jpg"
            },
            {
                text: "Rosa Parks",
                weight: 0,
                info: "Known for her role in the Montgomery Bus Boycott, not for this speech.",
                img: "https://upload.wikimedia.org/wikipedia/en/1/17/Rosa_Parks_Portrait%2C_1955.jpg"
            },
            {
                text: "Martin Luther King Jr.",
                weight: 1.0,
                info: "He delivered the famous 'I Have a Dream' speech during the March on Washington in 1963.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/960px-Martin_Luther_King%2C_Jr..jpg"
            },
            {
                text: "John Lewis",
                weight: 0,
                info: "A key civil rights leader who spoke at the same march, but not this speech.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Lewis-2006_%28cropped%29.jpg/1200px-John_Lewis-2006_%28cropped%29.jpg"
            }
        ]
    },
    {
        category: "Civil Rights Movement",
        question: "Which Supreme Court case ended school segregation in 1954?",
        difficulty: 1,
        options: [
            {
                text: "Plessy v. Ferguson",
                weight: 0.2,
                info: "Upheld 'separate but equal' in 1896, overturned by Brown.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/plessy-v-ferguson-gettyimages-3428944?_a=BAVAZGDX0"
            },
            {
                text: "Brown v. Board of Education",
                weight: 1.0,
                info: "Ruled segregation in public schools unconstitutional in 1954.",
                img: "https://cdn.britannica.com/25/91825-050-6828171F/George-EC-Hayes-Thurgood-Marshall-court-James-May-17-1954.jpg"
            },
            {
                text: "Loving v. Virginia",
                weight: 0.1,
                info: "Legalized interracial marriage in 1967, not school segregation.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/loving-v-virginia-gettyimages-515036452?_a=BAVAZGDX0"
            },
            {
                text: "Roe v. Wade",
                weight: 0,
                info: "Concerned abortion rights in 1973, unrelated to segregation.",
                img: "https://landmarkcases.org/wp-content/uploads/Roe-v-Wade.jpg"
            }
        ]
    },
    {
        category: "Civil Rights Movement",
        question: "What was the significance of the Brown v. Board decision?",
        options: [
            {
                text: "Legalized voting rights",
                weight: 0.2,
                info: "Voting rights were expanded by the Voting Rights Act of 1965, not this case.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/voting-rights-gettyimages-889049900?_a=BAVAZGDX0"
            },
            {
                text: "Ended school segregation",
                weight: 1.0,
                info: "The 1954 Supreme Court case ruled that racial segregation in public schools was unconstitutional.",
                img: "https://ncnewsline.com/wp-content/uploads/2024/05/School-integration-Getty-1536x1181.jpg"
            },
            {
                text: "Banned discrimination in housing",
                weight: 0,
                info: "Housing discrimination was addressed later by the Fair Housing Act of 1968.",
                img: "https://www.aclunc.org/sites/default/files/Social_preview_1200x630.jpg"
            },
            {
                text: "Upheld Jim Crow laws",
                weight: 0,
                info: "Brown v. Board overturned the legal basis for segregation, directly challenging Jim Crow laws.",
                img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/77J6X7KZWRAWNDRS2C3EURNCH4.jpg&w=1800&h=1800"
            }
        ]
    },
    {
        category: "Slavery",
        question: "What year was the Emancipation Proclamation issued?",
        options: [
            {
                text: "1865",
                weight: 0.3,
                info: "This was the year the 13th Amendment was ratified, officially abolishing slavery.",
                img: "https://placehold.co/1?text=1865"
            },
            {
                text: "1861",
                weight: 0.1,
                info: "This is when the Civil War began, but the Emancipation Proclamation came later.",
                img: "https://placehold.co/1?text=1861"
            },
            {
                text: "1863",
                weight: 1.0,
                info: "President Abraham Lincoln issued the Emancipation Proclamation on January 1, 1863.",
                img: "https://placehold.co/1?text=1863"
            },
            {
                text: "1850",
                weight: 0,
                info: "This was the year of the Fugitive Slave Act, not the Emancipation Proclamation.",
                img: "https://placehold.co/1?text=1850"
            }
        ]
    },
    {
        category: "Slavery",
        question: "Which industry benefited the most from slavery in the United States?",
        options: [
            {
                text: "Tobacco",
                weight: 0.4,
                info: "Tobacco was an earlier major crop using slave labor, but by the 1800s, cotton dominated.",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/DunhillEarlyMorningPipeMurrays.jpg"
            },
            {
                text: "Iron and Steel",
                weight: 0,
                info: "This industry was not significantly tied to slavery in the U.S.",
                img: "https://steelfabservices.com.au/wp-content/uploads/2018/06/Pipes.jpg"
            },
            {
                text: "Agriculture",
                weight: 0.3,
                info: "Agriculture broadly benefited, but cotton was the most dominant crop tied to slavery.",
                img: "https://dp9eps5gd5xd0.cloudfront.net/images/Article_Images/ImageForArticle_751_17453071169997623.jpg"
            },
            {
                text: "Cotton",
                weight: 1.0,
                info: "The cotton industry relied heavily on slave labor and was the primary economic driver in the South.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cotton_field_kv17.jpg/1280px-Cotton_field_kv17.jpg"
            }
        ]
    },
    {
        category: "Slavery",
        question: "Who wrote the influential anti-slavery novel 'Uncle Tom's Cabin'?",
        options: [
            {
                text: "Frederick Douglass",
                weight: 0.2,
                info: "A powerful abolitionist writer and speaker, but he did not write this novel.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg/1200px-Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg"
            },
            {
                text: "Sojourner Truth",
                weight: 0.1,
                info: "An influential abolitionist and speaker, but not the author of 'Uncle Tom's Cabin'.",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Sojourner_Truth%2C_1870_%28cropped%2C_restored%29.jpg"
            },
            {
                text: "Harriet Beecher Stowe",
                weight: 1.0,
                info: "She wrote 'Uncle Tom's Cabin' in 1852, which exposed the horrors of slavery and fueled abolitionist support.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Beecher-Stowe.jpg/1200px-Beecher-Stowe.jpg"
            },
            {
                text: "Mark Twain",
                weight: 0,
                info: "He wrote about race and slavery in 'Huckleberry Finn', but not 'Uncle Tom's Cabin'.",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
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
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/civil-war-gettyimages-3427284?_a=BAVAZGDX0"
            }
        ]
    },
    {
        category: "Great Depression",
        question: "What year did the stock market crash, triggering the Great Depression?",
        options: [
            {
                text: "1933",
                weight: 0.2,
                info: "This year saw the peak of the Depression and major government responses, not the crash itself.",
                img: "https://placehold.co/1?text=1933"
            },
            {
                text: "1925",
                weight: 0.1,
                info: "An earlier economic boom year, but not when the crash happened.",
                img: "https://placehold.co/1?text=1925"
            },
            {
                text: "1939",
                weight: 0,
                info: "This year marks the start of WWII, not the stock market crash.",
                img: "https://placehold.co/1?text=1939"
            },
            {
                text: "1929",
                weight: 1.0,
                info: "The stock market crashed in October 1929, marking the start of the Great Depression.",
                img: "https://placehold.co/1?text=1929"
            }
        ]
    },
    {
        category: "Great Depression",
        question: "What was the Dust Bowl?",
        options: [
            {
                text: "Banking crisis",
                weight: 0.2,
                info: "While the banking crisis was a key part of the Great Depression, it was not the Dust Bowl.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/great-depression-stock-market-crash-gettyimages-515303204?_a=BAVAZGDX0"
            },
            {
                text: "Stock market crash",
                weight: 0.1,
                info: "The stock market crash in 1929 led to the Great Depression, but it is different from the Dust Bowl.",
                img: "https://www.investopedia.com/thmb/c8Nm2-aZTMxN_9iCOlPeij4xSSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wall-street-crash-78075346-08e95275110a4afd80681699e5d72bcb.jpg"
            },
            {
                text: "Severe drought and dust storms",
                weight: 1.0,
                info: "The Dust Bowl was a period of severe drought and dust storms in the 1930s, devastating the Great Plains.",
                img: "https://drought.unl.edu/Images/DustBowl/DB6.png"
            },
            {
                text: "Labor strike",
                weight: 0,
                info: "The Dust Bowl was related to environmental factors, not labor strikes.",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Strikers_during_the_Dressmakers%27_Strike_of_1933_gather_in_the_streets_and_urge_unionization._%285279081959%29.jpg"
            }
        ]
    },
    {
        category: "Great Depression",
        question: "What was the New Deal?",
        options: [
            {
                text: "FDR’s economic recovery programs",
                weight: 1.0,
                info: "The New Deal was a series of programs and reforms launched by Franklin D. Roosevelt to combat the Great Depression.",
                img: "https://dp.la/api/exhibits/files/fullsize/8fad7ed375199a458558cc13357a5fd0.jpg"
            },
            {
                text: "Hoover’s tax cuts",
                weight: 0.1,
                info: "Herbert Hoover did attempt economic measures, but the New Deal came under Roosevelt.",
                img: "https://s3.amazonaws.com/binary.taxnotes.com/image/etl/archive/tnt2008.nsf/A9F7598691FCB1CE8525773200237794-0.2CA.jpg"
            },
            {
                text: "Bank bailout plan",
                weight: 0.2,
                info: "Bank reform was part of the New Deal, but it was much broader than a bailout.",
                img: "https://www.thoughtco.com/thmb/baTdN_gUZ6Q0eaGFi1ccnixAK0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-640482151-b3840cb5e4034afcb2f58cdbddb97270.jpg"
            },
            {
                text: "Trade agreement",
                weight: 0,
                info: "The New Deal focused on domestic recovery, not international trade agreements.",
                img: "https://ustr.gov/sites/default/files/FDR-RTAA-Blog.jpg"
            }
        ]
    },
    {
        category: "Industrial Revolution",
        question: "Who invented the cotton gin?",
        options: [
            {
                text: "Eli Whitney",
                weight: 1.0,
                info: "Eli Whitney invented the cotton gin in 1793, revolutionizing cotton processing and impacting slavery in the South.",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Eli_Whitney_by_Samuel_Finley_Breese_Morse_1822.jpeg"
            },
            {
                text: "Samuel Morse",
                weight: 0,
                info: "Samuel Morse is known for inventing the telegraph and Morse code, not the cotton gin.",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Samuel_Morse.jpg"
            },
            {
                text: "Thomas Edison",
                weight: 0,
                info: "Thomas Edison is known for the phonograph and electric light bulb, not the cotton gin.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/960px-Thomas_Edison2.jpg"
            },
            {
                text: "Alexander Graham Bell",
                weight: 0,
                info: "Alexander Graham Bell invented the telephone, not the cotton gin.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexander_Graham_Bell.jpg/250px-Alexander_Graham_Bell.jpg"
            }
        ]
    },
    {
        category: "Industrial Revolution",
        question: "What was the primary power source for early Industrial Revolution factories?",
        options: [
            {
                text: "Steam engine",
                weight: 1.0,
                info: "The steam engine, improved by James Watt, powered factories and machinery during the Industrial Revolution.",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/JamesWattEngine.jpg"
            },
            {
                text: "Windmills",
                weight: 0,
                info: "Windmills were used before the Industrial Revolution but were not the primary factory power source.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/KinderdijkWindmills.jpg/1200px-KinderdijkWindmills.jpg"
            },
            {
                text: "Electricity",
                weight: 0,
                info: "Electricity became significant later; early factories relied on steam power.",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/84/NIGU_Strain_tower.JPG"
            },
            {
                text: "Horsepower",
                weight: 0,
                info: "Horses were used for transport, not as a primary factory power source.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFAUXmcAax6mh8M_v9QH0n7NeYDP00QE3cw&s"
            }
        ]
    },
    {
        category: "Industrial Revolution",
        question: "What transportation innovation connected markets during the Industrial Revolution?",
        options: [
            {
                text: "Railroads",
                weight: 1.0,
                info: "Railroads, powered by steam locomotives, revolutionized transport of goods and people in the 19th century.",
                img: "https://www.hoover.org/sites/default/files/research/images/istock-1168227195.jpeg"
            },
            {
                text: "Automobiles",
                weight: 0,
                info: "Automobiles were developed later, in the late 19th and early 20th centuries.",
                img: "https://images.nationalgeographic.org/image/upload/v1638892232/EducationHub/photos/packard-model-b-automobile.jpg"
            },
            {
                text: "Canals",
                weight: 0,
                info: "Canals were important but were overshadowed by railroads for speed and reach.",
                img: "https://westernliner.com/wp-content/uploads/2025/02/WesternEnvironmentalLiner-341497-Irrigation-Canals-Agriculture-blogbanner1.jpg"
            },
            {
                text: "Airplanes",
                weight: 0,
                info: "Airplanes were not invented until the 20th century.",
                img: "https://images.theconversation.com/files/578175/original/file-20240227-28-cejldv.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C7668%2C3828&q=45&auto=format&w=1356&h=668&fit=crop"
            }
        ]
    },
    {
        category: "Founding Documents",
        question: "What year was the Declaration of Independence signed?",
        options: [
            {
                text: "1783",
                weight: 0.3,
                info: "This is the year the Revolutionary War ended, not when the Declaration was signed.",
                img: "https://placehold.co/1?text=1783"
            },
            {
                text: "1775",
                weight: 0.2,
                info: "This was the start of the Revolutionary War, but not the signing of the Declaration.",
                img: "https://placehold.co/1?text=1775"
            },
            {
                text: "1776",
                weight: 1.0,
                info: "The Declaration of Independence was adopted on July 4, 1776.",
                img: "https://placehold.co/1?text=1776"
            },
            {
                text: "1789",
                weight: 0,
                info: "This year marks the start of the U.S. Constitution, not the Declaration of Independence.",
                img: "https://placehold.co/1?text=1789"
            }
        ]
    },
    {
        category: "Founding Documents",
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
        category: "Founding Documents",
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
        category: "Founding Documents",
        question: "Which document was written to persuade states to ratify the U.S. Constitution?",
        options: [
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
            },
            {
                text: "The Federalist Papers",
                weight: 1.0,
                info: "A series of essays promoting the ratification of the Constitution.",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Federalist_%281st_ed%2C_1788%2C_vol_I%2C_title_page%29_-_02.jpg"
            }
        ]
    },
    {
        category: "Founding Documents",
        question: "Which document served as the first constitution of the United States?",
        options: [
            {
                text: "U.S. Constitution",
                weight: 0.2,
                info: "Replaced the Articles in 1789 as the current governing document.",
                img: "https://www.archives.gov/files/founding-docs/constitution_1_of_4_630.jpg"
            },
            {
                text: "Articles of Confederation",
                weight: 1.0,
                info: "Adopted in 1781, it was the nation's first governing document.",
                img: "https://www.archives.gov/files/milestone-documents/images/doc-003-big.jpg"
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
    },
    {
        category: "Founding Documents",
        question: "How many amendments are in the Bill of Rights?",
        options: [
            {
                text: "27",
                weight: 0.2,
                info: "There are 27 total amendments, but only the first 10 make up the Bill of Rights.",
                img: "https://placehold.co/1?text=27"
            },
            {
                text: "15",
                weight: 0.1,
                info: "The 15th Amendment deals with voting rights, but the Bill of Rights only includes the first 10.",
                img: "https://placehold.co/1?text=15"
            },
            {
                text: "10",
                weight: 1.0,
                info: "The Bill of Rights consists of the first 10 amendments to the U.S. Constitution, ratified in 1791.",
                img: "https://placehold.co/1?text=10"
            },
            {
                text: "12",
                weight: 0,
                info: "The 12th Amendment came later and is not part of the Bill of Rights.",
                img: "https://placehold.co/1?text=12"
            }
        ]
    },
    {
        category: "Founding Documents",
        question: "What is the First Amendment about?",
        options: [
            {
                text: "Freedom of speech, religion, press",
                weight: 1.0,
                info: "The First Amendment protects freedoms concerning religion, expression, assembly, and the right to petition.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/first-amendment-gettyimages-1003130100?_a=BAVAZGDX0"
            },
            {
                text: "Right to bear arms",
                weight: 0,
                info: "This is protected by the Second Amendment, not the First.",
                img: "https://aderholt.house.gov/sites/evo-subsites/aderholt.house.gov/files/styles/evo_featured_image/public/featured_image/issues/2ndAmendment.jpg?h=0d333e94&itok=XPOpDlr-"
            },
            {
                text: "Quartering of soldiers",
                weight: 0,
                info: "This is covered under the Third Amendment.",
                img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/quartering-act-akfg1f?_a=BAVAZGDX0"
            },
            {
                text: "Search and seizure",
                weight: 0,
                info: "This is addressed in the Fourth Amendment.",
                img: "https://theleventhalfirm.com/wp-content/uploads/2017/01/fourthamendment.jpg"
            }
        ]
    }
];