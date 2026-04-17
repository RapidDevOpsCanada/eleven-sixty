export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  variants?: { label: string; price: string }[];
  note?: string;
};

export type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
  footer?: string;
};

export type Menu = {
  slug: string;
  path: string;
  title: string;
  navLabel: string;
  kicker: string;
  tagline: string;
  subtitle?: string;
  sections: MenuSection[];
  pricingNote?: string;
};

export const MENUS: Menu[] = [
  {
    slug: 'lunch-menu',
    path: '/lunch-menu/',
    title: 'Lunch',
    navLabel: 'Lunch',
    kicker: 'Served Daily',
    tagline: '11:30am — 3:00pm',
    subtitle:
      'Shareables, salads, and handhelds from the same kitchen that cooks dinner. In and out in under an hour — or stay as long as you like.',
    sections: [
      {
        title: 'Shareables',
        items: [
          {
            name: 'Onion Summit',
            price: '$17.75',
            description:
              'A mountain of our hand-cut Spanish onions, dusted in spiced flour, deep-fried and served with chipotle ranch.'
          },
          {
            name: 'Chicken Wings 1lb',
            price: '$19.75',
            description:
              'Hand-tossed in our own seasoned flour and fried to perfection — then choose your spice or sauce.'
          },
          {
            name: 'Spinach & Artichoke Dip',
            price: '$19.75',
            description:
              'A blend of three cheeses with creamy spinach and artichokes, served with tortilla chips.'
          },
          {
            name: 'Lobster & Crab Dip',
            price: '$21.75',
            description:
              'Lobster and sweet crab blended with cream cheese, mushrooms, and mixed bell peppers. Served with grilled pita points.'
          },
          {
            name: 'Mozza Stix',
            price: '$14.75',
            description:
              'Hand-breaded mozzarella sticks, deep-fried to perfection for the perfect cheese pull.'
          },
          {
            name: 'Classic Potato Skins',
            price: '$14.75',
            description:
              'Potato skin wedges fried golden brown and topped with cheese, bacon bits, and green onions.'
          },
          {
            name: 'Sweet Potato Fries',
            price: '$10.75',
            description:
              'A hearty helping of sweet potato fries, sprinkled with parmesan and served with chipotle ranch.'
          }
        ]
      },
      {
        title: 'Salads',
        items: [
          {
            name: 'Classic Caesar Salad',
            price: '$16.75',
            description:
              'Crisp romaine tossed in Caesar dressing, topped with parmesan, bacon, and fresh in-house-made croutons.'
          },
          {
            name: 'House Greens',
            price: '$15.75',
            description:
              'Fresh mixed greens with cucumber, carrots, red onion, red cabbage, radicchio, radishes, grape tomatoes, and in-house croutons.'
          },
          {
            name: 'Steak Salad',
            price: '$20.75',
            description:
              'A 6oz certified AAA striploin, sliced and served on a bed of mixed greens with red peppers, red onions, cherry tomatoes, cucumbers, and feta. Served with fig dressing.'
          },
          {
            name: 'Chipotle Chicken Salad',
            price: '$20.25',
            description:
              'Fresh mixed greens with shredded cheddar, diced red peppers, red onion, and sunflower seeds. In-house southwest dressing on the side.'
          }
        ],
        footer:
          'Dressings: Balsamic Vinaigrette · Ranch · Bleu Cheese · Oil & Vinegar · Chipotle Ranch · Southwest Vinaigrette\n\nAdd-ons: Grilled or Crispy Chicken $8.75 · Grilled Shrimp $8.75 · Salmon $11.00'
      },
      {
        title: 'Soups',
        items: [
          {
            name: 'Loaded Potato Soup',
            price: '$9.75',
            description:
              "It's like a loaded baked potato, but creamier. Topped with cheddar, bacon bits, and green onion."
          },
          {
            name: 'Soup of the Day',
            price: '$9.75',
            description: "Whatever the chef feels like creating today."
          }
        ]
      },
      {
        title: 'Lunch Items',
        items: [
          {
            name: 'Steak Sandwich',
            price: '$18.75',
            description:
              'Open-faced 6oz certified AAA striploin on garlic homeloaf, topped with our peppercorn sauce and crispy onions.'
          },
          {
            name: 'Crispy Chicken Wrap',
            price: '$18.75',
            description:
              'Grilled chicken with lettuce, tomato, cheddar, and ranch sauce.'
          },
          {
            name: 'Classic Reuben',
            price: '$18.75',
            description:
              'Piled high with corned beef, sauerkraut, Swiss cheese, Russian dressing, and Dijon mustard. Served on toasted marble rye.'
          },
          {
            name: 'Jenny Chicken & Brie Sandwich',
            price: '$17.75',
            description:
              'Grilled chicken breast with brie, Granny Smith apple slices, fig jam, arugula, and balsamic glaze on a focaccia bun. Served with french fries.'
          },
          {
            name: 'Soup & Salad Combo',
            price: '$18.75',
            description:
              'A full house or Caesar salad with your choice of house soup or our potato soup.'
          }
        ]
      }
    ]
  },
  {
    slug: 'dinner-menus',
    path: '/dinner-menus/',
    title: 'Dinner',
    navLabel: 'Dinner',
    kicker: 'The Full Menu',
    tagline: 'Ribs, steaks & the full kitchen',
    subtitle:
      'The dinner menu is where the grill hits its stride. Slow-smoked ribs, AAA Canadian steaks, seafood, and the bowl-and-sandwich classics that keep the room full.',
    sections: [
      {
        title: 'Shareables',
        items: [
          {
            name: 'Onion Summit',
            price: '$17.75',
            description:
              'A mountain of hand-cut Spanish onions, dusted in spiced flour, deep-fried and served with chipotle ranch for dipping.'
          },
          {
            name: 'Chicken Wings',
            price: '$19.75',
            description:
              'Hand-tossed in our seasoned flour and fried to perfection — choose your spice or sauce. Traditional or boneless.'
          },
          {
            name: 'Lobster & Crab Dip',
            price: '$21.75',
            description:
              'Lobster and sweet crab blended with cream cheese, mushrooms, and mixed bell peppers. Served with grilled pita points.'
          },
          {
            name: 'Spinach & Artichoke Dip',
            price: '$19.75',
            description:
              'A blend of three cheeses with creamy spinach and artichokes, served with tortilla chips.'
          },
          {
            name: 'Mozza Stix',
            price: '$14.75',
            description:
              'Hand-breaded mozzarella fried golden with the perfect cheese pull. Served with chipotle ranch and in-house ranch for dipping.'
          },
          {
            name: 'Classic Potato Skins',
            price: '$14.75',
            description:
              'Potato wedges fried golden and topped with cheese, bacon bits, and green onions. Served with sour cream for dipping.'
          },
          {
            name: 'Sweet Potato Fries',
            price: '$10.75',
            description:
              'A hearty helping of sweet potato fries sprinkled with parmesan. Served with chipotle ranch for dipping.'
          }
        ]
      },
      {
        title: 'Salads',
        items: [
          {
            name: 'Classic Caesar Salad',
            price: '$16.75',
            description:
              'Crisp romaine tossed in Caesar dressing, topped with parmesan, bacon, and in-house croutons.'
          },
          {
            name: 'House Greens',
            price: '$15.75',
            description:
              'Fresh mixed greens with cucumber, carrots, red onion, red cabbage, radicchio, radishes, grape tomatoes, and in-house croutons.'
          },
          {
            name: 'Steak Salad',
            price: '$20.75',
            description:
              'A 6oz certified AAA striploin, sliced and served atop mixed greens with red peppers, red onion, cherry tomatoes, cucumber, and feta. Balsamic fig dressing on the side.'
          },
          {
            name: 'Chipotle Chicken Salad',
            price: '$20.25',
            description:
              'Fresh mixed greens with shredded cheddar, diced red peppers, red onion, and sunflower seeds. Chicken breast drizzled with chipotle butter. In-house southwest dressing on the side.'
          }
        ],
        footer:
          'Dressings: Balsamic Vinaigrette · Ranch · Bleu Cheese · Oil & Vinegar · Chipotle Ranch · Southwest Vinaigrette\n\nAdd-ons: Grilled or Crispy Chicken $8.75 · Grilled Shrimp $8.75 · Salmon $11.00'
      },
      {
        title: 'Soups',
        items: [
          {
            name: 'Loaded Potato Soup',
            price: '$9.75',
            description:
              'Like a loaded baked potato, but creamier. Topped with cheddar, bacon bits, and green onion.'
          },
          {
            name: 'Soup of the Day',
            price: '$9.75',
            description: 'What does the chef feel like creating today?'
          }
        ]
      },
      {
        title: 'Chicken',
        note: 'Served with rice and BBQ baked beans.',
        items: [
          {
            name: 'Blackened Chicken',
            price: '$28.50',
            description: 'Cajun-crusted chicken breasts topped with a creole sauce.'
          },
          {
            name: 'Chicken Tenders Platter',
            price: '$19.75',
            description:
              'Hand-breaded chicken tenders fried golden. Served with french fries, coleslaw, and in-house ranch. Dry or tossed in buffalo sauce.'
          },
          {
            name: 'Citrus Apple Chicken',
            price: '$28.50',
            description:
              'Two stacked grilled chicken breasts glazed with our apple glaze and topped with apple relish. Served with rice and seasonal vegetables.'
          }
        ],
        footer:
          'Signature Sauces (all prepared in-house): House BBQ · Honey BBQ · Chipotle BBQ · Smokey Apple'
      },
      {
        title: 'Ribs & Combos',
        note: 'All rib dishes served with french fries and coleslaw.',
        items: [
          {
            name: 'Baby Back Ribs',
            description:
              'Tender fall-off-the-bone ribs sauced in your choice of one of our four signature sauces.',
            variants: [
              { label: 'Half Rack', price: '$30.50' },
              { label: 'Full Rack', price: '$39.00' }
            ]
          },
          {
            name: 'Beef Ribs',
            price: '$47.75',
            description:
              'Meaty beef ribs cut from the prime rib, sauced in your choice of one of our four signature sauces.'
          },
          {
            name: 'Rib & Wing Combo',
            price: '$37.75',
            description:
              'Half rack of baby back ribs and a half pound of wings, each basted in your choice of our in-house BBQ sauces. Swap pork ribs for beef ribs, +$8.50.'
          },
          {
            name: '1160 Power Combo',
            price: '$50.75',
            description:
              'Half rack of baby back ribs, a grilled shrimp skewer, and an AAA top sirloin steak. Substitute a 12oz AAA NY striploin for +$11.75.'
          }
        ]
      },
      {
        title: 'Steaks',
        note:
          'All steaks are seasoned with our own spice blend, highlighting top-quality AAA Canadian cuts. Served with baked potato, seasonal vegetables, and 1160 bourbon cowboy butter.',
        items: [
          { name: '14oz Ribeye', price: '$44.75' },
          { name: '12oz NY Striploin', price: '$41.75' },
          { name: '8oz Sirloin', price: '$35.75' },
          { name: '10oz Sirloin', price: '$39.75' },
          {
            name: 'Ultimate Steak Combo',
            price: '$130.00',
            description:
              '14oz ribeye, 12oz NY striploin & 10oz sirloin, paired with a skillet of sautéed mushrooms, sautéed onions, chimichurri, and peppercorn sauce. Served with creamy garlic mashed potatoes and seasonal vegetables.'
          }
        ],
        footer:
          'Steak Toppers ($5.75 each): Sautéed Mushrooms · Sautéed Onions · Peppercorn Sauce · Chimichurri\n\nSurf & Turf Add-ons ($9.25 each): Grilled Shrimp · Sautéed Shrimp · Fried Shrimp'
      },
      {
        title: 'Sandwich Board',
        note: 'Served with french fries.',
        items: [
          {
            name: '1160 Crispy Beef Burger',
            price: '$20.75',
            description:
              'Lightly battered in panko and fried to a crispy finish. Brushed with bacon aioli and topped with lettuce, tomato, red onion, and pickles.'
          },
          {
            name: 'Classic Burger',
            price: '$18.75',
            description:
              '8oz hand-made burger with our own seasoning on a brioche bun. Garnished with lettuce, tomato, red onion, and pickle.'
          },
          {
            name: 'Black Bean Burger',
            price: '$20.75',
            description:
              'In-house blend of black beans, red onion, and sweet potato. Topped with lettuce, tomato, red onion, and pickles.'
          },
          {
            name: 'Chicken Bacon & Swiss',
            price: '$18.75',
            description:
              'Grilled chicken breast with melted swiss, crispy bacon, and ranch sauce drizzle. Topped with lettuce and tomato. Can be made buffalo chicken.'
          },
          {
            name: '1160 Crispy Chicken Sandwich',
            price: '$20.75',
            description:
              'Crispy breaded chicken with lettuce, tomato, and sundried tomato pesto aioli — grilled cheese and bacon as the buns.'
          }
        ]
      },
      {
        title: 'Seafood',
        note: 'Served with rice and seasonal vegetables.',
        items: [
          {
            name: 'Shrimp Platter',
            price: '$34.50',
            description: 'Platter of grilled, sautéed, and hand-battered fried shrimp.'
          },
          {
            name: 'Fish & Chip Dinner',
            price: '$23.25',
            description:
              'Two pieces of haddock hand-breaded in crispy panko. Served with french fries and coleslaw.'
          },
          {
            name: 'Salmon Done Your Way',
            price: '$31.75',
            description:
              'Grilled Atlantic salmon — naked, honey BBQ brushed, blackened, or with a creamy dill sauce. Add sautéed shrimp for $4.75.'
          }
        ]
      },
      {
        title: 'Served in a Bowl',
        items: [
          {
            name: '1160 Bowtie Chicken Pasta',
            price: '$27.75',
            description:
              'Sweet onions, sliced mushrooms, bacon, and grilled chicken tossed in a white-wine cream sauce with bowtie pasta.'
          },
          {
            name: 'Shanghai Stir Fry',
            price: '$22.75',
            description:
              'Seasoned rice with sautéed onions, seasonal vegetables, sliced mushrooms, red peppers, baby corn, and carrots.'
          }
        ],
        footer:
          'Add-ons: Garlic Toast $3.75 · Cheese Toast $4.75 · Grilled or Crispy Chicken $8.75 · Grilled Shrimp $8.75 · Salmon $10.75'
      },
      {
        title: 'Sides',
        note: 'Baked Potato · French Fries · Coleslaw · Rice · Seasonal Vegetable · BBQ Baked Beans · Garlic Mashed',
        items: [
          { name: 'Loaded Baked Potato', price: '$3.75' },
          { name: 'Loaded Mashed Potato', price: '$3.75' },
          { name: 'Sweet Potato Fries', price: '$4.75' },
          { name: 'Make Your Fries Poutine', price: '$4.75' }
        ]
      }
    ]
  },
  {
    slug: 'desserts',
    path: '/desserts/',
    title: 'Desserts',
    navLabel: 'Desserts',
    kicker: 'The Sweet End',
    tagline: 'Served tableside',
    subtitle:
      'Our dessert selection rotates seasonally and is presented at the table by your server. Ask about the nightly feature — and remember: on your birthday, dessert is on us.',
    sections: [
      {
        title: 'Ask Your Server',
        note:
          'The dessert list is presented tableside because the kitchen rotates features seasonally. Call ahead for the current menu — or sign up for our Birthday Club and let us surprise you.',
        items: []
      }
    ]
  },
  {
    slug: 'kids-menu',
    path: '/kids-menu/',
    title: 'Kids Menu',
    navLabel: 'Kids',
    kicker: 'For the Little Ones',
    tagline: 'For the Whole Table',
    subtitle:
      'Six named mains for the little ones, cooked the way we\u2019d cook them for the adult menu — no shortcuts, no frozen nuggets.',
    sections: [
      {
        title: 'Mains',
        items: [
          {
            name: "Nash's World Famous Hamburger",
            description: 'A juicy junior hamburger served with french fries.'
          },
          {
            name: "Beckham's Grilled Cheese Sandwich",
            description: 'A classic grilled cheese toasted to perfection. Served with french fries.'
          },
          {
            name: "Teaghan's Chicken Boneless Bites",
            description:
              'Chicken tenderloins, lightly breaded and perfectly seasoned. Plum sauce for dipping. Served with french fries.'
          },
          {
            name: "Sofia's Ribs",
            description: 'Tender fall-off-the-bone ribs served with french fries.'
          },
          {
            name: "Mateo's Grilled Chicken Breast",
            description: 'The healthy choice — grilled chicken breast, served with rice.'
          },
          {
            name: "Aylah's Pasta",
            description:
              'Penne noodles tossed in your choice of Alfredo, marinara, or butter. Topped with asiago cheese.'
          }
        ]
      },
      {
        title: 'Dessert',
        items: [
          { name: 'Old Fashioned Dirt Cup' },
          { name: 'Sliced Apples with Caramel for Dipping' },
          { name: 'Ring Pop' }
        ]
      }
    ],
    pricingNote: 'Prices available in-room.'
  },
  {
    slug: 'drinks-menu',
    path: '/drinks-menu/',
    title: 'Drinks',
    navLabel: 'Drinks',
    kicker: 'From the Bar',
    tagline: 'Beer · Wine · Cocktails · Caesars',
    subtitle:
      'The bar program at Eleven Sixty is built to live alongside the grill — a wide list for any dinner, a rotating specials board for anyone paying attention.',
    sections: [
      {
        title: 'From the Bar',
        items: [
          {
            name: 'Domestic Draft Beer',
            price: '$8.75',
            note: '18 oz',
            description:
              '1160 Lager · Coors Lite · Cowbell Shindig Lager · Rickards Red · Miller Lite · Mill St Organic'
          },
          {
            name: 'Craft & Imported Beers',
            price: '$9.75',
            note: '18 oz',
            description:
              '1160 IPA · Cowbell Hazy Dayz Juicy IPA · Blue Moon · Dos Equis'
          },
          {
            name: 'Bottled Beer — Domestic',
            price: '$7.75',
            note: '341 ml',
            description: 'Budweiser · Bud Light · Miller Genuine Draft'
          },
          {
            name: 'Bottled Beer — Import',
            price: '$8.75',
            description: 'Corona · Modelo Especial · Heineken'
          },
          {
            name: 'Coolers',
            price: '$8.75',
            note: '330 ml',
            description: 'Vodka Friday Coolers — seasonal flavours available.'
          }
        ]
      },
      {
        title: 'White Wine',
        items: [
          {
            name: 'Eleven Sixty Exclusive Pinot Grigio',
            note: 'VQA',
            variants: [
              { label: '5oz', price: '$11.75' },
              { label: '8oz', price: '$14.75' },
              { label: 'Bottle', price: '$38.75' }
            ]
          },
          {
            name: 'Peller Family Reserve Chardonnay',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$34.75' }
            ]
          },
          {
            name: 'Wayne Gretzky No. 99 Pinot Grigio',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$34.75' }
            ]
          },
          {
            name: 'Peller Family Reserve Rosé',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$34.75' }
            ]
          },
          {
            name: 'Nelson Te Mania Sauvignon Blanc',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$12.75' },
              { label: '8oz', price: '$16.75' },
              { label: 'Bottle', price: '$41.75' }
            ]
          },
          {
            name: 'Relax Riesling',
            note: 'Germany',
            variants: [
              { label: '5oz', price: '$11.75' },
              { label: '8oz', price: '$14.75' },
              { label: 'Bottle', price: '$38.75' }
            ]
          },
          {
            name: 'Santa Rita 120 Reserve Sauvignon Blanc',
            note: 'Chile',
            variants: [
              { label: '5oz', price: '$13.75' },
              { label: '8oz', price: '$17.75' },
              { label: 'Bottle', price: '$45.75' }
            ]
          },
          {
            name: 'Zonin Prosecco',
            note: 'Italy',
            variants: [{ label: 'Bottle', price: '$51.75' }]
          },
          {
            name: 'Peller Reserve Secco Sparkling',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: 'Bottle', price: '$45.00' }
            ]
          }
        ]
      },
      {
        title: 'Red Wine',
        items: [
          {
            name: 'Eleven Sixty Exclusive Cabernet / Nero',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$11.75' },
              { label: '8oz', price: '$14.75' },
              { label: 'Bottle', price: '$38.75' }
            ]
          },
          {
            name: 'Peller Family Reserve Cabernet / Merlot',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$34.75' }
            ]
          },
          {
            name: 'Gretzky Family Estates Merlot',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$34.75' }
            ]
          },
          {
            name: 'Smoky Bay Shiraz',
            note: 'South Africa',
            variants: [
              { label: '5oz', price: '$10.75' },
              { label: '8oz', price: '$13.75' },
              { label: 'Bottle', price: '$37.75' }
            ]
          },
          {
            name: 'Santa Rita 120 Reserve Cabernet Sauvignon',
            note: 'Chile',
            variants: [
              { label: '5oz', price: '$12.75' },
              { label: '8oz', price: '$17.75' },
              { label: 'Bottle', price: '$45.75' }
            ]
          },
          {
            name: 'Trius Distinction Cabernet Sauvignon',
            note: 'Niagara VQA',
            variants: [
              { label: '5oz', price: '$14.75' },
              { label: '8oz', price: '$20.75' },
              { label: 'Bottle', price: '$51.75' }
            ]
          },
          {
            name: 'Alamos Malbec',
            note: 'Argentina',
            variants: [
              { label: '5oz', price: '$12.75' },
              { label: '8oz', price: '$17.75' },
              { label: 'Bottle', price: '$45.75' }
            ]
          }
        ]
      },
      {
        title: 'Classic Cocktails',
        items: [
          {
            name: 'English Garden',
            price: '$8.75',
            note: '1 oz',
            description: 'Gin, St Germain, ginger ale, splash of lemonade.'
          },
          {
            name: 'Empress Shirley',
            price: '$9.75',
            note: '2 oz',
            description: 'Empress gin, grenadine, 7UP, splash of lemonade.'
          },
          {
            name: 'Bahama Mama',
            price: '$8.75',
            note: '1.5 oz',
            description:
              'Bacardi Black, Bacardi Coconut, banana liqueur, pineapple and orange juice, splash of grenadine.'
          },
          {
            name: 'Summer Fling',
            price: '$9.75',
            note: '2 oz',
            description: 'Empress gin, lemonade, strawberry purée.'
          },
          {
            name: 'Caribbean Cosmo',
            price: '$8.75',
            note: '1 oz',
            description: 'White rum, Galliano, Cointreau, splash of lime.'
          },
          {
            name: 'Pineapple Passion',
            price: '$8.75',
            note: '2 oz',
            description: 'Vodka, blue curaçao, pineapple juice, splash of piña colada purée.'
          },
          {
            name: 'Strawberry Pineapple Mimosa',
            price: '$8.75',
            note: '2 oz',
            description: 'Prosecco, pineapple juice, strawberry purée.'
          }
        ]
      },
      {
        title: '1160 Caesars',
        items: [
          {
            name: 'Classic Caesar',
            price: '$8.75',
            description: 'Vodka, Worcestershire, Tabasco.'
          },
          {
            name: 'Teremana Caesar',
            price: '$10.75',
            description:
              'Teremana tequila, lime juice, Clamato, Worcestershire, Tabasco, salt and pepper. Rimmed with chamoy and Tajín, lime garnish.'
          },
          {
            name: 'Empress Caesar',
            price: '$9.75',
            description:
              'Empress gin, Worcestershire, Tabasco, salt and pepper, olive garnish.'
          }
        ]
      }
    ]
  },
  {
    slug: 'daily-features',
    path: '/daily-features/',
    title: 'Daily Features',
    navLabel: 'Features',
    kicker: 'Every Week',
    tagline: 'Monday through Sunday',
    subtitle:
      'A rotating cast of weeknight specials plus our all-day happy hours. The card changes Monday mornings — these are the regulars.',
    sections: [
      {
        title: 'Monday',
        note: 'Kitchen & bar features.',
        items: [
          {
            name: 'Two Can Dine',
            price: '$75',
            description: 'A shared feature menu for two. Details in-room.'
          },
          { name: '1160 IPA', price: '$7', note: '18 oz pint' },
          {
            name: 'Wayne Gretzky Pinot Grigio or Merlot',
            description: '½ price on bottles.'
          }
        ]
      },
      {
        title: 'Tuesday',
        note: 'Bar features.',
        items: [
          {
            name: 'Mules',
            price: '$7',
            description: 'Your choice: 1160 · Irish · Canadian · Italian.'
          }
        ]
      },
      {
        title: 'Wednesday',
        note: 'Martini night.',
        items: [
          {
            name: 'Martinis',
            price: '$8',
            description:
              'Options: 1160 Pinetini · Espresso · Chocolate · Yuzu Lemon Drop.'
          }
        ]
      },
      {
        title: 'Thursday',
        note: 'Three-course evening.',
        items: [
          {
            name: 'Three-Course Prix Fixe',
            price: '$42 per person',
            description: 'A composed three-course feature. Details in-room.'
          },
          {
            name: 'Peller Chardonnay or Cab/Merlot',
            description: '½ price on bottles.'
          }
        ]
      },
      {
        title: 'Sunday',
        note: 'Family Meal Night.',
        items: [
          {
            name: 'Family Meal Night',
            description: 'Shared-table feature. Details in-room.'
          },
          { name: 'Classic Caesars', price: '$7' },
          {
            name: 'Mimosas',
            price: '$7',
            description: 'Classic orange juice with Peller Reserve Secco.'
          }
        ]
      },
      {
        title: 'Happy Hours — Every Day',
        note: '3pm — 5pm and 8pm — close.',
        items: [
          {
            name: 'Half-priced Appetizers',
            description: 'From our shareables list.'
          },
          { name: 'Domestic Draught', price: '$6', note: 'Pint' },
          { name: 'Bottles of Wine', description: '$10 off.' },
          { name: 'Tequila Shots', description: 'Half price.' }
        ]
      }
    ]
  }
];

export function getMenuBySlug(slug: string): Menu | undefined {
  return MENUS.find((m) => m.slug === slug);
}
