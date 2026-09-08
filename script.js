/* =========================================================
   DATA
   Replace `emoji` with real photo URLs later, e.g.
   photos: ["images/quekiam-1.jpg", "images/quekiam-2.jpg"]
   and swap the emoji-rendering code below for <img> tags.
   ========================================================= */

const STORES = [{ id:"mfc",         name:"Malabon Food Cravings", emoji:"🏮", specialty:"Featured picks around Malabon", desc:"Our curated picks from sellers across Malabon — start here if you're not sure what to try.", isNew:false,
    history:"[Placeholder — replace with the client's write-up] Malabon Food Cravings started as a way to gather the best home cooks and small sellers around Malabon in one place, so neighbors could discover new dishes without leaving the group chat." },
  { id:"nanays",       name:"Nanay's Pancit Malabon", emoji:"🍜", specialty:"Pancit Malabon specialist", desc:"A home-run pancit stall serving the classic Malabon-style pancit passed down through the family.", isNew:false,
    history:"[Placeholder — replace with the client's write-up] Nanay's Pancit Malabon began in the family kitchen, cooking the same pancit recipe passed down for generations. What started as pancit for family gatherings turned into a small home-run stall once neighbors kept asking for orders of their own." },
  { id:"rodydays",     name:"RODY Days", specialty:"Home-style ulam, pancit & party trays",
    desc:"Everyday guisado, soup, fried ulam, and whole fried/buttered chicken, plus pancit (short order or bilao) and party trays for bigger groups.",
    image:"assets/stores/rodydays/store.jpg", isNew:false,
    history:"[Placeholder — replace with the client's write-up] RODY Days grew out of home-cooked ulam made for family meals — chopsuey, ampalaya, asado — the same dishes now packed fresh to order for Malabon households who want home-style cooking without the hassle." },
  { id:"alingpuring",  name:"Aling Puring's Kakanin",  emoji:"🍡", specialty:"Traditional kakanin",      desc:"Freshly made puto, bibingka, sapin-sapin, and more — a Malabon kakanin table for over a decade.", isNew:false,
    history:"[Placeholder — replace with the client's write-up] Aling Puring has been making kakanin for over a decade, starting with a small table outside her home. Her puto and sapin-sapin became a merienda staple in the neighborhood before the stall grew into what it is today." },
  { id:"kusinaniate",  name:"Kusina ni Ate",           emoji:"🥐", specialty:"Breads, pastries & desserts", desc:"Home-baked pandesal and empanada, plus classic Pinoy desserts made fresh every morning.", isNew:false,
    history:"[Placeholder — replace with the client's write-up] Kusina ni Ate opened as an early-morning bakery table — fresh pandesal and empanada baked before sunrise for neighbors on their way to work. It's since grown to include classic Pinoy desserts made in small batches." },
  { id:"aling-melys-carinderia", name:"ALING MELY'S CARINDERIA", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"armies-catering", name:"ARMIE'S CATERING", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"arny-dadings-peachy-peachy", name:"ARNY DADINGS PEACHY-PEACHY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"bcph-bacon-city", name:"BCPH BACON CITY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"bebettes-pancit-malabon", name:"BEBETTE'S PANCIT MALABON", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"bennys-lounge", name:"BENNY'S LOUNGE", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"betsys-cake-center", name:"BETSY'S CAKE CENTER", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"chef-rj-calamansi", name:"CHEF RJ CALAMANSI", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"chicken-emperor", name:"CHICKEN EMPEROR", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"chosen-fish-crackers", name:"CHOSEN FISH CRACKERS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"concepcion-bakery", name:"CONCEPCION BAKERY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"dimples-rice-crackers", name:"DIMPLES RICE CRACKERS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"dolors-kakanin", name:"DOLOR'S KAKANIN", specialty:"Philippines' Best! — Sapin-Sapin Specialist",
    desc:"Well-known Malabon kakanin maker (with branches across Metro Manila) specializing in Sapin-Sapin — regular, pure-sapin, and bite-size — in sizes from 8\" to 16\".",
    image:"assets/stores/dolors-kakanin/store.jpg", isNew:false,
    history:"Dolor's Kakanin is a long-running Malabon-based kakanin maker with multiple branches across Metro Manila, best known for their layered Sapin-Sapin — sold whole, bite-size, or pure (single-layer) — in sizes ranging from small 8\" trays good for 3-4 pax up to 16\" trays for 20-25 pax." },
  { id:"ellets-sweets", name:"ELLET'S SWEETS", specialty:"Bottled Sweets — Since 1975",
    desc:"Bottled Filipino sweets — white beans, garbanzos, kaong, macapuno, red monggo beans, nata de coco, ube halaya, and halo-halo mix — in small, medium, and large jars.",
    image:"assets/stores/ellets-sweets/store.jpg", isNew:false,
    history:"Ellet's Sweets has been bringing bottled Filipino sweets to Malabon homes since 1975, featured by the Department of Tourism Philippines. Best known for their halo-halo mix (red monggo, garbanzos, nata de coco, and white beans in one jar), plus individual bottled sweets like kaong, macapuno, and ube halaya — all made with no artificial sweetener." },
  { id:"emynoel-tinapa", name:"EMYNOEL TINAPA", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"ernies-peanut-butter", name:"ERNIE'S PEANUT BUTTER", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"fayenuts-peanut-butter", name:"FAYENUTS PEANUT BUTTER", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"fhelys-bagoong", name:"FHELY'S BAGOONG", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"hazels-special-puto", name:"HAZEL'S SPECIAL PUTO", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"jabeths-food-express", name:"JABETH'S FOOD EXPRESS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"jay-r-d-original-okoy", name:"JAY - R D' ORIGINAL OKOY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"jeju-ramyun", name:"JEJU RAMYUN", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"jmbs-lechon-manok-liempo", name:"JMBS LECHON MANOK & LIEMPO", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"josephines-palitaw", name:"JOSEPHINE'S PALITAW", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"judy-anns-crispy-pata", name:"JUDY ANN'S CRISPY PATA", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"la-ilustre-house-of-breads", name:"LA ILUSTRE HOUSE OF BREADS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"lola-marias-sukang-atsara", name:"LOLA MARIA'S SUKANG ATSARA", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mama-belens-kitchenette", name:"MAMA BELEN'S KITCHENETTE", emoji:"🍽️", specialty:"Pancit Malabon • Halal-certified", desc:"Formerly Rosy's Pancit Malabon — home-style ulam, lechon kawali, and the store's signature halal pancit Malabon, made to order.",
    image:"assets/stores/mama-belens-kitchenette/store.jpg", isNew:false,
    history:"Formerly known as Rosy's Pancit Malabon, Mama Belen's Kitchenette has been featured on Simpol.ph, FEATR, and News5 Frontline Weekend. Best known for its halal-certified Pancit Malabon (available in classic or pino noodles), the store also serves a full menu of home-style beef, pork, chicken, and seafood ulam, plus solo and combo meal sets." },
  { id:"mama-enas-special-home-made-recipes", name:"MAMA ENA'S SPECIAL HOME MADE RECIPES", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mary-jay-restaurant", name:"MARY JAY RESTAURANT", specialty:"Filipino-Chinese Restaurant, Since 1966",
    desc:"Long-running Malabon restaurant serving beef, pork, chicken, seafood, and vegetable dishes, sizzling plates, soups, noodles, and party trays.",
    image:"assets/stores/mary-jay-restaurant/store.jpg", isNew:false,
    history:"Mary Jay Restaurant has been serving Malabon since 1966, known for home-style Filipino-Chinese sharing dishes — beef, pork, chicken, and seafood mains, sizzling plates, soups, and noodles — plus party trays for bigger groups." },
  { id:"meishi-takoyaki", name:"MEISHI TAKOYAKI", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mflores-restaurant", name:"MFLORES RESTAURANT", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mom-yum-yums-jellies-in-a-bottle", name:"MOM YUM YUMS JELLIES IN A BOTTLE", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mommy-dolors-kitchen", name:"MOMMY DOLOR'S KITCHEN", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mr-ohki", name:"MR. OHKI", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"mylenes-pancit-malabon", name:"MYLENE'S PANCIT MALABON", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"naks-fish-shanghai", name:"NAKS FISH SHANGHAI", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"nanay-tessie-valencia-triangulo-butchi-munggo", name:"NANAY TESSIE VALENCIA TRIANGULO & BUTCHI MUNGGO", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"pareng-jimmys-bbq", name:"PARENG JIMMY'S BBQ", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"pastalicious", name:"PASTALICIOUS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"peachy-cakes", name:"PEACHY CAKES", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"raves-diner", name:"RAVES DINER", specialty:"Smoked Meats, Croffles & Desserts",
    desc:"Low-and-slow smoked beef belly, pork belly, ribs, and pulled pork, plus smoked-meat pasta, sandwiches, and party trays.",
    image:"assets/stores/raves-diner/store.jpg", isNew:false,
    history:"Raves Diner (Est. 2024) specializes in smoked meats — beef belly, pork belly, spare ribs, baby back ribs, pulled pork, and bacon — served as rice meals, party platters, pasta, sandwiches, or take-home vacuum-sealed slabs. Also known for their house-made BBQ sauce." },
  { id:"remillys-cake", name:"REMILLY'S CAKE", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"sapin-yema-kakanin-atbp", name:"SAPIN YEMA KAKANIN ATBP.", emoji:"🍮", specialty:"Sapin Yema Specialist — Est. 2020",
    desc:"Malabon's Sapin Yema — the viral layered kakanin topped with yema and latik, plus ube biko, biko langka, and cassava cake variants. Available in tubs, party sizes, and minis.",
    image:"assets/stores/sapin-yema-kakanin-atbp/store.jpg", isNew:false,
    history:"Est. 2020. Best known for their signature Sapin Yema — a twist on the classic sapin-sapin topped with yema and latik — featured on Featr by Erwan Heussaff and praised by several food personalities. Also makes ube biko macapuno, biko langka with niyog, cassava cake, yema cassava cheese, and buko cassava, all sold in tub, party-size (8\"), or mini form. Also open to resellers." },
  { id:"seafood-hub", name:"SEAFOOD HUB", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"siocolicious-oven-baked-ribs", name:"SIOCOLICIOUS OVEN BAKED RIBS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"super-chips", name:"SUPER CHIPS", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"tambobongs-lumpiang-sariwa", name:"TAMBOBONG'S LUMPIANG SARIWA", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"tambobongs-pasalubong", name:"TAMBOBONG'S PASALUBONG", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"tereese-bakeshop", name:"TEREESE BAKESHOP", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"tonys-okoy", name:"TONY'S OKOY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." },
  { id:"valerianos-eatery", name:"VALERIANO'S EATERY", emoji:"🍽️", specialty:"Partner Store", desc:"Menu details and store photos coming soon.", isNew:false,
    history:"Partner store of Malabon Food Cravings. Store details, menu, and photos will be added soon." }
];
/* To spotlight a store in the "New Partners" section, set isNew:true above.
   None are marked new by default — no real "new partner" data was supplied,
   so the homepage shows a clearly marked placeholder until the client
   confirms which stores should appear there. */

const CATEGORIES = [
  { id:"all",         label:"All" },
  { id:"kakanin",     label:"Kakanin" },
  { id:"pancit",      label:"Pancit" },
  { id:"guisado",     label:"Guisado" },
  { id:"meryenda",    label:"Meryenda" },
  { id:"tinapay",     label:"Tinapay" },
  { id:"panghimagas", label:"Panghimagas" },
  { id:"bote",        label:"Bote" },
  { id:"karne",       label:"Karne" },
  { id:"frozen",      label:"Frozen" },
  { id:"pasalubong",  label:"Pasalubong" }
];

const PRODUCTS = [
  {
    id:"quekiam", name:"Authentic Malabon Quekiam", store:"mfc", category:"meryenda", emoji:"🥟",
    description:"House-rolled quekiam, Malabon-style — crisp outside, savory pork-and-shrimp filling inside. Good for sharing or freezing for later.",
    photos:["🥟","🍢","🍽️"],
    pricing:[
      {label:"3 pcs", price:"₱235"}, {label:"4 pcs", price:"₱310"}, {label:"6 pcs", price:"₱430"},
      {label:"8 pcs", price:"₱560"}, {label:"10 pcs", price:"₱700"}, {label:"12 pcs", price:"₱820"},
      {label:"15 pcs", price:"₱1,025"}, {label:"20 pcs", price:"₱1,350"}, {label:"25 pcs", price:"₱1,620"}, {label:"30 pcs", price:"₱1,910"}
    ]
  },
  {
    id:"pancit-malabon", name:"Pancit Malabon", store:"nanays", category:"pancit", emoji:"🍜",
    description:"Thick rice noodles in a rich orange sauce, topped with shrimp, squid, pork, and boiled egg — the original Malabon comfort dish.",
    photos:["🍜","🍤"],
    pricing:[{label:"Regular", price:"₱180"}, {label:"Family size", price:"₱350"}, {label:"Party tray", price:"₱650"}]
  },
  {
    id:"pancit-guisado", name:"Pancit Guisado", store:"nanays", category:"pancit", emoji:"🍝",
    description:"A lighter, everyday pancit sauteed with mixed vegetables and pork — simple home-cooking flavor.",
    photos:["🍝"],
    pricing:[{label:"Regular", price:"₱150"}, {label:"Family size", price:"₱290"}]
  },
  {
    id:"puto-malabon", name:"Puto Malabon", store:"alingpuring", category:"kakanin", emoji:"🍥",
    description:"Soft, slightly sweet steamed rice cakes, made fresh daily. Best paired with dinuguan or hot choco.",
    photos:["🍥","🍡"],
    pricing:[{label:"Half dozen", price:"₱90"}, {label:"Dozen", price:"₱170"}]
  },
  {
    id:"bibingka", name:"Bibingka", store:"alingpuring", category:"kakanin", emoji:"🥮",
    description:"Baked rice cake topped with salted egg and cheese, wrapped in banana leaf for that classic aroma.",
    photos:["🥮"],
    pricing:[{label:"Regular", price:"₱75"}, {label:"With extra toppings", price:"₱95"}]
  },
  {
    id:"sapin-sapin", name:"Sapin-Sapin", store:"alingpuring", category:"kakanin", emoji:"🍡",
    description:"Layered sticky rice cake in ube, jackfruit, and coconut, topped with grated coconut.",
    photos:["🍡"],
    pricing:[{label:"Tray (8 slices)", price:"₱180"}]
  },
  {
    id:"kutsinta", name:"Kutsinta", store:"alingpuring", category:"kakanin", emoji:"🟤",
    description:"Chewy brown rice cakes served with fresh grated coconut on the side.",
    photos:["🟤"],
    pricing:[{label:"Dozen", price:"₱130"}]
  },
  {
    id:"biko", name:"Biko", store:"alingpuring", category:"kakanin", emoji:"🍮",
    description:"Sticky rice sweetened with brown sugar and coconut milk, topped with a golden latik crumble.",
    photos:["🍮"],
    pricing:[{label:"Tray", price:"₱160"}]
  },
  {
    id:"pandesal", name:"Malabon Pandesal", store:"kusinaniate", category:"tinapay", emoji:"🥐",
    description:"Freshly baked every morning — soft inside with a light crust, best eaten warm.",
    photos:["🥐"],
    pricing:[{label:"Pack of 10", price:"₱60"}, {label:"Pack of 20", price:"₱115"}]
  },
  {
    id:"empanada", name:"Baked Empanada", store:"kusinaniate", category:"tinapay", emoji:"🥧",
    description:"Flaky baked empanada filled with ground pork, potato, and carrots.",
    photos:["🥧","🍞"],
    pricing:[{label:"Single", price:"₱35"}, {label:"Box of 6", price:"₱195"}]
  },
  {
    id:"leche-flan", name:"Leche Flan", store:"kusinaniate", category:"panghimagas", emoji:"🍮",
    description:"Silky steamed custard with a rich caramel top — a classic Filipino dessert made in small batches.",
    photos:["🍮"],
    pricing:[{label:"Small (4 in)", price:"₱120"}, {label:"Large (8 in)", price:"₱280"}]
  },
  {
    id:"turon", name:"Turon", store:"kusinaniate", category:"panghimagas", emoji:"🍌",
    description:"Crispy banana spring rolls with jackfruit, rolled in caramelized sugar.",
    photos:["🍌"],
    pricing:[{label:"Pack of 5", price:"₱90"}, {label:"Pack of 10", price:"₱170"}]
  },

  /* ===== Added from the client's old/reference "What We Offer" page.
     These dish names come straight from the client's own reference —
     but the seller, exact description, photos, and pricing for each
     weren't in the source data we had, so those fields are clearly
     marked as placeholders below until the client sends the real details. */
  {
    id:"valencia", name:"Valencia", store:"mfc", category:"meryenda", emoji:"🥧",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🥧"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"longganisa", name:"Longganisa", store:"mfc", category:"guisado", emoji:"🌭",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🌭"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"lumpiang-sariwa", name:"Lumpiang Sariwa", store:"mfc", category:"meryenda", emoji:"🌯",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🌯"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"crispy-pata", name:"Crispy Pata", store:"mfc", category:"guisado", emoji:"🍗",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🍗"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"sapin-yema", name:"Sapin Yema", store:"mfc", category:"kakanin", emoji:"🍮",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🍮"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"relyeno", name:"Relyeno", store:"mfc", category:"guisado", emoji:"🐟",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🐟"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"broas", name:"Broas", store:"mfc", category:"panghimagas", emoji:"🍪",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🍪"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"okoy", name:"Okoy", store:"mfc", category:"meryenda", emoji:"🦐",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🦐"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },
  {
    id:"bagoong", name:"Bagoong", store:"mfc", category:"meryenda", emoji:"🫙",
    description:"[Placeholder — description to be provided by the client]",
    photos:["🫙"],
    pricing:[{label:"Ask us for pricing", price:"Message to inquire"}]
  },

  /* ===== MAMA BELEN'S KITCHENETTE (formerly Rosy's Pancit Malabon) —
     real dish names, photos, and pricing taken from the store's own
     menu graphics supplied by the client. ===== */
  {
    id:"mbk-pancit-malabon", name:"Pancit Malabon (Halal-certified)", store:"mama-belens-kitchenette", category:"pancit", emoji:"🍜",
    description:"Mama Belen's signature halal-certified Pancit Malabon — choice of classic or pino noodles, topped with shrimp, boiled egg, and toasted garlic. Sized from solo servings up to full party trays.",
    images:["assets/products/mama-belens-kitchenette/pancit-malabon.jpg"],
    photos:["🍜"],
    pricing:[
      {label:"Solo (1pax)", price:"₱250"}, {label:"Duo (2-3pax)", price:"₱350"},
      {label:"9\" (2-3pax)", price:"₱550"}, {label:"10\" (3-4pax)", price:"₱650"},
      {label:"11\" (4-5pax)", price:"₱750"}, {label:"12\" (5-7pax)", price:"₱950"},
      {label:"13\" (7-8pax)", price:"₱1,100"}, {label:"14\" (8-10pax)", price:"₱1,300"},
      {label:"15\" (10-15pax)", price:"₱1,600"}, {label:"16\" (25+pax)", price:"₱2,150"},
      {label:"Add-on: Hipon", price:"₱180"}, {label:"Add-on: Talaba", price:"₱180"}
    ]
  },
  {
    id:"mbk-beef-mechado", name:"Beef Mechado", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍖",
    description:"Slow-braised beef in a rich tomato sauce, topped with spring onions — a Mama Belen's bestseller.",
    images:["assets/products/mama-belens-kitchenette/beef-mechado.jpg"],
    photos:["🍖"],
    pricing:[
      {label:"Solo (1pax)", price:"₱200"}, {label:"Sharing (2-3pax)", price:"₱500"},
      {label:"Family Size (3-5pax)", price:"₱850"}, {label:"Half Tray (8-10pax)", price:"₱1,600"},
      {label:"Whole Tray (15-20pax)", price:"₱3,100"}
    ]
  },
  {
    id:"mbk-beef-morcon", name:"Beef Morcon", store:"mama-belens-kitchenette", category:"guisado", emoji:"🥩",
    description:"Rolled beef stuffed and simmered in savory sauce, sliced into hearty rounds.",
    images:["assets/products/mama-belens-kitchenette/beef-morcon.jpg"],
    photos:["🥩"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱850"}, {label:"Half Tray (8-10pax)", price:"₱1,950"},
      {label:"Whole Tray (15-20pax)", price:"₱3,800"}
    ]
  },
  {
    id:"mbk-beef-mushroom", name:"Beef with Mushroom", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍄",
    description:"Tender beef in a creamy mushroom sauce, finished with spring onions.",
    images:["assets/products/mama-belens-kitchenette/beef-mushroom.jpg"],
    photos:["🍄"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱500"}, {label:"Family Size (3-5pax)", price:"₱850"},
      {label:"Half Tray (8-10pax)", price:"₱1,600"}, {label:"Whole Tray (15-20pax)", price:"₱3,100"}
    ]
  },
  {
    id:"mbk-bistek-tagalog", name:"Bistek Tagalog", store:"mama-belens-kitchenette", category:"guisado", emoji:"🧅",
    description:"Classic beef bistek — thin-sliced beef braised in soy and calamansi, piled with sweet onions.",
    images:["assets/products/mama-belens-kitchenette/bistek-tagalog.jpg"],
    photos:["🧅"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱500"}, {label:"Family Size (3-5pax)", price:"₱850"},
      {label:"Half Tray (8-10pax)", price:"₱1,600"}, {label:"Whole Tray (15-20pax)", price:"₱3,100"}
    ]
  },
  {
    id:"mbk-chicken-cordon-bleu", name:"Chicken Cordon Bleu", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍗",
    description:"Breaded chicken roulade sliced into rounds, crisp outside and juicy inside.",
    images:["assets/products/mama-belens-kitchenette/chicken-cordon-bleu.jpg"],
    photos:["🍗"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱700"}, {label:"Half Tray (8-10pax)", price:"₱1,700"},
      {label:"Whole Tray (15-20pax)", price:"₱3,300"}
    ]
  },
  {
    id:"mbk-chicken-garlic-parmesan", name:"Chicken Garlic Parmesan", store:"mama-belens-kitchenette", category:"guisado", emoji:"🧄",
    description:"Crispy fried chicken bites tossed in garlic and parmesan seasoning.",
    images:["assets/products/mama-belens-kitchenette/chicken-garlic-parmesan.jpg"],
    photos:["🧄"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱425"}, {label:"Family Size (3-5pax)", price:"₱650"},
      {label:"Half Tray (8-10pax)", price:"₱1,300"}, {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-chicken-pastel", name:"Chicken Pastel", store:"mama-belens-kitchenette", category:"guisado", emoji:"🥘",
    description:"Creamy chicken stew with hotdog, potato, and carrots — home-style comfort food.",
    images:["assets/products/mama-belens-kitchenette/chicken-pastel.jpg"],
    photos:["🥘"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱450"}, {label:"Family Size (3-5pax)", price:"₱700"},
      {label:"Half Tray (8-10pax)", price:"₱1,400"}, {label:"Whole Tray (15-20pax)", price:"₱2,700"}
    ]
  },
  {
    id:"mbk-pork-dinuguan", name:"Pork Dinuguan", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍲",
    description:"Rich pork blood stew simmered with vinegar and chili — a Filipino classic.",
    images:["assets/products/mama-belens-kitchenette/pork-dinuguan.jpg"],
    photos:["🍲"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱450"}, {label:"Family Size (3-5pax)", price:"₱700"},
      {label:"Half Tray (8-10pax)", price:"₱1,300"}, {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-pork-bopis", name:"Pork Bopis", store:"mama-belens-kitchenette", category:"guisado", emoji:"🌶️",
    description:"Minced pork lungs and heart sautéed with carrots and chili — a spicy Malabon favorite.",
    images:["assets/products/mama-belens-kitchenette/pork-bopis.jpg"],
    photos:["🌶️"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱425"}, {label:"Family Size (3-5pax)", price:"₱700"},
      {label:"Half Tray (8-10pax)", price:"₱1,300"}, {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-pork-menudo", name:"Pork Menudo", store:"mama-belens-kitchenette", category:"guisado", emoji:"🥕",
    description:"Diced pork stewed with potato, carrots, and tomato sauce.",
    images:["assets/products/mama-belens-kitchenette/pork-menudo.jpg"],
    photos:["🥕"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱450"}, {label:"Family Size (3-5pax)", price:"₱750"},
      {label:"Half Tray (8-10pax)", price:"₱1,450"}, {label:"Whole Tray (15-20pax)", price:"₱2,800"}
    ]
  },
  {
    id:"mbk-pork-lengua", name:"Pork Lengua", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍅",
    description:"Braised pork tongue in a savory mushroom-tomato sauce.",
    images:["assets/products/mama-belens-kitchenette/pork-lengua.jpg"],
    photos:["🍅"],
    pricing:[
      {label:"Sharing (2-3pax)", price:"₱470"}, {label:"Family Size (3-5pax)", price:"₱775"},
      {label:"Half Tray (8-10pax)", price:"₱1,475"}, {label:"Whole Tray (15-20pax)", price:"₱2,850"}
    ]
  },
  {
    id:"mbk-pork-hamonado", name:"Pork Hamonado", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍯",
    description:"Sweet-savory braised pork rolls glazed in a pineapple-soy sauce.",
    images:["assets/products/mama-belens-kitchenette/pork-hamonado.jpg"],
    photos:["🍯"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱750"}, {label:"Half Tray (8-10pax)", price:"₱1,700"},
      {label:"Whole Tray (15-20pax)", price:"₱3,300"}
    ]
  },
  {
    id:"mbk-pork-shanghai", name:"Pork Shanghai", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🥢",
    description:"Crispy fried pork spring rolls, hand-rolled thin for extra crunch.",
    images:["assets/products/mama-belens-kitchenette/pork-shanghai.jpg"],
    photos:["🥢"],
    pricing:[
      {label:"Solo", price:"₱160"}, {label:"Sharing (2-3pax)", price:"₱425"},
      {label:"Family Size (3-5pax)", price:"₱700"}, {label:"Half Tray (8-10pax)", price:"₱1,300"},
      {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-lechon-kawali", name:"Lechon Kawali", store:"mama-belens-kitchenette", category:"guisado", emoji:"🐖",
    description:"Deep-fried crispy pork belly, chopped and served with a crackling crunch.",
    images:["assets/products/mama-belens-kitchenette/lechon-kawali.jpg"],
    photos:["🐖"],
    pricing:[
      {label:"Single order", price:"₱200"}, {label:"2 orders", price:"₱350"},
      {label:"3 orders", price:"₱480"}, {label:"4 orders", price:"₱640"}, {label:"5 orders", price:"₱800"}
    ]
  },
  {
    id:"mbk-tokwat-dila", name:"Tokwa't Dila ng Baboy", store:"mama-belens-kitchenette", category:"guisado", emoji:"🐷",
    description:"Sliced pork tongue and fried tofu tossed in a tangy soy-vinegar dressing.",
    images:["assets/products/mama-belens-kitchenette/tokwat-dila.jpg"],
    photos:["🐷"],
    pricing:[
      {label:"Single order", price:"₱200"}, {label:"2 orders", price:"₱350"},
      {label:"3 orders", price:"₱480"}, {label:"4 orders", price:"₱640"}, {label:"5 orders", price:"₱800"}
    ]
  },
  {
    id:"mbk-tokwat-lechon-kawali", name:"Tokwa't Lechon Kawali", store:"mama-belens-kitchenette", category:"guisado", emoji:"🧈",
    description:"Crispy fried tofu paired with chopped lechon kawali, garlic, and spring onions.",
    images:["assets/products/mama-belens-kitchenette/tokwat-lechon-kawali.jpg"],
    photos:["🧈"],
    pricing:[
      {label:"Single order", price:"₱200"}, {label:"2 orders", price:"₱350"},
      {label:"3 orders", price:"₱480"}, {label:"4 orders", price:"₱640"}, {label:"5 orders", price:"₱800"}
    ]
  },
  {
    id:"mbk-relyenong-pusit", name:"Relyenong Pusit", store:"mama-belens-kitchenette", category:"guisado", emoji:"🦑",
    description:"Whole squid stuffed and braised in its own ink sauce.",
    images:["assets/products/mama-belens-kitchenette/relyenong-pusit.jpg"],
    photos:["🦑"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱875"}, {label:"Half Tray (8-10pax)", price:"₱1,550"},
      {label:"Whole Tray (15-20pax)", price:"₱3,000"}
    ]
  },
  {
    id:"mbk-totsong-bangus", name:"Totsong Bangus", store:"mama-belens-kitchenette", category:"guisado", emoji:"🐟",
    description:"Milkfish braised in soy sauce, topped with crushed tofu and toasted garlic.",
    images:["assets/products/mama-belens-kitchenette/totsong-bangus.jpg"],
    photos:["🐟"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱700"}, {label:"Half Tray (8-10pax)", price:"₱1,300"},
      {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-lumpiang-hubad", name:"Lumpiang Hubad", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🥬",
    description:"\"Naked\" lumpia — sautéed vegetables and pork bits served unwrapped over lettuce.",
    images:["assets/products/mama-belens-kitchenette/lumpiang-hubad.jpg"],
    photos:["🥬"],
    pricing:[
      {label:"Family Size (3-5pax)", price:"₱700"}, {label:"Half Tray (8-10pax)", price:"₱1,300"},
      {label:"Whole Tray (15-20pax)", price:"₱2,500"}
    ]
  },
  {
    id:"mbk-triangle-veggie", name:"Triangle Veggie", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🥟",
    description:"Crispy triangle-folded vegetable lumpia, available cooked or frozen. Comes with a side of house vinegar.",
    images:["assets/products/mama-belens-kitchenette/triangle-veggie.jpg"],
    photos:["🥟"],
    pricing:[
      {label:"3pcs", price:"₱200"}, {label:"6pcs", price:"₱360"}, {label:"9pcs", price:"₱500"},
      {label:"12pcs", price:"₱650"}, {label:"15pcs", price:"₱800"}
    ]
  },
  {
    id:"mbk-atsarang-dampalit", name:"Atsarang Dampalit", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🥒",
    description:"Pickled dampalit (sea asparagus) with carrots — a tangy Malabon side dish, bottled.",
    images:["assets/products/mama-belens-kitchenette/atsarang-dampalit.jpg"],
    photos:["🥒"],
    pricing:[{label:"Per bottle", price:"₱180"}]
  },
  {
    id:"mbk-camachile-bread", name:"Camachile Bread", store:"mama-belens-kitchenette", category:"tinapay", emoji:"🥐",
    description:"Soft, slightly chewy camachile-shaped bread, packed 10 pieces per pack.",
    images:["assets/products/mama-belens-kitchenette/camachile-bread.jpg"],
    photos:["🥐"],
    pricing:[
      {label:"1 pack (10pcs)", price:"₱210"}, {label:"5 packs", price:"₱950"},
      {label:"10 packs & up (per pack)", price:"₱175"}
    ]
  },
  {
    id:"mbk-mamon-tustado", name:"Mamon Tustado", store:"mama-belens-kitchenette", category:"tinapay", emoji:"🍞",
    description:"Toasted mamon slices, 8 pieces per pack — crisp outside, soft inside.",
    images:["assets/products/mama-belens-kitchenette/mamon-tustado.jpg"],
    photos:["🍞"],
    pricing:[
      {label:"1 pack (8pcs)", price:"₱180"}, {label:"5 packs", price:"₱800"},
      {label:"10 packs & up (per pack)", price:"₱145"}
    ]
  },
  {
    id:"mbk-plain-rice", name:"Plain Rice", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🍚",
    description:"Steamed rice, packed in a safe travel container — order by the cup.",
    images:["assets/products/mama-belens-kitchenette/plain-rice.jpg"],
    photos:["🍚"],
    pricing:[
      {label:"1 cup", price:"₱55"}, {label:"4 cups", price:"₱200"},
      {label:"8 cups", price:"₱400"}, {label:"12 cups", price:"₱550"}
    ]
  },
  {
    id:"mbk-rufina-patis", name:"Rufina Patis", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🍶",
    description:"Bottled Rufina-brand fish sauce, a Malabon-made pantry staple.",
    images:["assets/products/mama-belens-kitchenette/rufina-patis.jpg"],
    photos:["🍶"],
    pricing:[{label:"325ml", price:"₱100"}, {label:"750ml", price:"₱180"}]
  },
  {
    id:"mbk-triangle-veggies-vinegar", name:"Triangle Veggies Vinegar", store:"mama-belens-kitchenette", category:"meryenda", emoji:"🍾",
    description:"House-made spiced vinegar, bottled — the same dip served with Triangle Veggie orders.",
    images:["assets/products/mama-belens-kitchenette/triangle-veggies-vinegar.jpg"],
    photos:["🍾"],
    pricing:[{label:"Per bottle (500ml)", price:"₱180"}]
  },
  {
    id:"mbk-solo-meal-set", name:"Solo Meal Set", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍱",
    description:"Single-serve rice meals in a safe travel container — pick your pairing.",
    images:["assets/products/mama-belens-kitchenette/solo-meal-set.jpg"],
    photos:["🍱"],
    pricing:[
      {label:"SM1: Rice + Garlic Parmesan", price:"₱285"}, {label:"SM2: Rice + Chicken Inasal", price:"₱285"},
      {label:"SM3: Rice + Pork Inasal", price:"₱290"}, {label:"SM4: Rice + Beef Mechado", price:"₱295"},
      {label:"SM5: Rice + Beef Tapa", price:"₱295"}
    ]
  },
  {
    id:"mbk-combo-meal-set", name:"Combo Meal Set", store:"mama-belens-kitchenette", category:"guisado", emoji:"🍛",
    description:"Rice + ulam + Pancit Malabon bundles, packed for one — the store's most popular sets.",
    images:["assets/products/mama-belens-kitchenette/combo-meal-set.jpg"],
    photos:["🍛"],
    pricing:[
      {label:"CM1: Chicken Ala Max + Pancit", price:"₱350"}, {label:"CM2: Triangle Veggie + Pancit", price:"₱330"},
      {label:"CM3: Lechon Kawali + Pancit", price:"₱350"}, {label:"CM4: Beef Mechado + Pancit", price:"₱350"},
      {label:"CM5: Relyenong Pusit + Pancit", price:"₱360"}, {label:"CM6: Tapang Baka + Pancit", price:"₱350"}
    ]
  },

  /* ===== RAVES DINER ===== */
  {
    id:"raves-party-plate", name:"Party Plate", store:"raves-diner", category:"guisado", emoji:"🍖",
    description:"Big smoked-meat party trays with beef belly, pork belly, ribs, pulled pork, chicken, and your choice of sides (mashed potato, mac 'n cheese, potato marble, coleslaw, or creamed corn) — sizes scale up for bigger groups.",
    images:[
      "assets/products/raves-diner/party-plate-1.jpg", "assets/products/raves-diner/party-plate-2.jpg",
      "assets/products/raves-diner/party-plate-3.jpg", "assets/products/raves-diner/party-plate-4.jpg"
    ],
    photos:["🍖"],
    pricing:[
      {label:"Party Plate 1 (150g Beef Belly, 150g Pork Belly, 1/2 Rack Baby Back Ribs, 1pc Chicken Leg Quarter, 150g Pulled Pork, 2 Sides)", price:"₱2,150"},
      {label:"Party Plate 2 (250g Beef Belly, 250g Pork Belly, 1/2 Rack Pork Spare Ribs, 150g Pulled Pork, 250g Bacon, 1pc Chicken Leg Quarter, 3 Sides)", price:"₱3,200"},
      {label:"Party Plate 3 (350g Beef Belly, 350g Pork Belly, 1/2 Rack Pork Spare Ribs, 250g Pulled Pork, 250g Bacon, 2pc Chicken Leg Quarter, 4 Sides)", price:"₱4,250"},
      {label:"Party Plate 4 (500g Beef Belly, 500g Pork Belly, 1 Rack Pork Spare Ribs, 250g Pulled Pork, 250g Bacon, 2pc Chicken Leg Quarter, 5 Sides)", price:"₱5,300"}
    ]
  },
  {
    id:"raves-smoked-sinigang", name:"Smoked Sinigang", store:"raves-diner", category:"guisado", emoji:"🍲",
    description:"Sour sinigang broth with smoked pork or beef belly, string beans, okra, and vegetables. Weekends only.",
    images:["assets/products/raves-diner/smoked-sinigang.jpg"],
    photos:["🍲"],
    pricing:[
      {label:"Pork Belly", price:"₱295"}, {label:"Pork Ribs", price:"₱295"}, {label:"Beef Belly", price:"₱325"},
      {label:"All In (Pork Belly, Pork Ribs & Beef Belly)", price:"₱585"}
    ]
  },
  {
    id:"raves-pasta-pesto", name:"Pasta Pesto with Smoked Bacon", store:"raves-diner", category:"guisado", emoji:"🍝",
    description:"Pesto pasta tossed with smoked bacon bits and parmesan, served with garlic bread on the side.",
    images:["assets/products/raves-diner/pasta-pesto.jpg"],
    photos:["🍝"],
    pricing:[{label:"Sharing", price:"₱525"}, {label:"Feast", price:"₱950"}, {label:"Party", price:"₱1,400"}]
  },
  {
    id:"raves-smoked-carbonara", name:"Smoked Carbonara", store:"raves-diner", category:"guisado", emoji:"🍝",
    description:"Creamy carbonara topped with smoked bacon bits and parmesan, served with garlic bread on the side.",
    images:["assets/products/raves-diner/pasta-carbonara.jpg"],
    photos:["🍝"],
    pricing:[{label:"Sharing", price:"₱495"}, {label:"Feast", price:"₱880"}, {label:"Party Size", price:"₱1,300"}]
  },
  {
    id:"raves-shrimp-scampi", name:"Shrimp Scampi", store:"raves-diner", category:"guisado", emoji:"🍤",
    description:"Garlic butter shrimp scampi pasta, served with garlic bread on the side.",
    images:["assets/products/raves-diner/pasta-scampi.jpg"],
    photos:["🍤"],
    pricing:[{label:"Sharing", price:"₱520"}, {label:"Feast", price:"₱920"}, {label:"Party", price:"₱1,350"}]
  },
  {
    id:"raves-bbq-sauce", name:"Raves BBQ Sauce", store:"raves-diner", category:"meryenda", emoji:"🍯",
    description:"Raves Diner's house-made smoky barbeque sauce, bottled — the same sauce used on their smoked meats.",
    images:["assets/products/raves-diner/bbq-sauce.jpg"],
    photos:["🍯"],
    pricing:[{label:"165ml", price:"₱135"}, {label:"365ml", price:"₱245"}]
  },
  {
    id:"raves-platter", name:"Smoked Meat Platter", store:"raves-diner", category:"guisado", emoji:"🍽️",
    description:"Smoked pork belly, pork ribs, chicken (and beef belly on the bigger sets), served with java rice and a side.",
    images:[
      "assets/products/raves-diner/platter-set-a.jpg", "assets/products/raves-diner/platter-set-b.jpg",
      "assets/products/raves-diner/platter-set-c.jpg"
    ],
    photos:["🍽️"],
    pricing:[
      {label:"Set A (Pork Belly, Pork Ribs, Chicken, 2 Rice & 1 Side)", price:"₱750"},
      {label:"Set B (Beef Belly, Pork Belly, Pork Ribs, Chicken, 3 Rice & 2 Sides)", price:"₱950"},
      {label:"Set C (Beef Belly, Pork Belly, Pork Ribs, Chicken, 5 Rice & 3 Sides)", price:"₱1,250"}
    ]
  },
  {
    id:"raves-smoked-slabs", name:"Smoked Slabs", store:"raves-diner", category:"guisado", emoji:"🥩",
    description:"Take-home smoked meats by the slab — available ready-to-eat or vacuum-sealed, perfect for freezing or your own cookouts.",
    images:["assets/products/raves-diner/smoked-slabs-1.jpg", "assets/products/raves-diner/smoked-slabs-2.jpg"],
    photos:["🥩"],
    pricing:[
      {label:"Pork Belly (1kg)", price:"₱1,800"}, {label:"Pork Belly (500g)", price:"₱975"}, {label:"Pork Belly (250g)", price:"₱570"},
      {label:"Beef Belly (1kg)", price:"₱2,050"}, {label:"Beef Belly (500g)", price:"₱1,095"}, {label:"Beef Belly (250g)", price:"₱625"},
      {label:"Pork Spare Ribs (per rack)", price:"₱1,650"}, {label:"Baby Back Ribs (per rack)", price:"₱1,350"},
      {label:"Pulled Pork (1kg)", price:"₱1,800"}, {label:"Pulled Pork (500g)", price:"₱975"}, {label:"Pulled Pork (250g)", price:"₱570"},
      {label:"Bacon (1kg)", price:"₱1,300"}, {label:"Bacon (500g)", price:"₱700"}, {label:"Bacon (250g)", price:"₱400"}
    ]
  },
  {
    id:"raves-smoked-sandwiches", name:"Smoked Sandwiches", store:"raves-diner", category:"meryenda", emoji:"🥪",
    description:"Sesame buns loaded with smoked meat — special BBQ sauce, honey mustard, lettuce, tomato, and cucumber (pulled pork comes with roasted sesame dressing and coleslaw instead).",
    images:["assets/products/raves-diner/smoked-sandwiches.jpg"],
    photos:["🥪"],
    pricing:[{label:"Pork Belly", price:"₱249"}, {label:"Pulled Pork", price:"₱249"}, {label:"Beef Belly", price:"₱249"}]
  },
  {
    id:"raves-smoked-meat-meals", name:"Smoked Meat Meals", store:"raves-diner", category:"guisado", emoji:"🍚",
    description:"Solo rice meals — smoked meat over java rice, finished with BBQ sauce.",
    images:["assets/products/raves-diner/rice-meals-1.jpg", "assets/products/raves-diner/rice-meals-2.jpg"],
    photos:["🍚"],
    pricing:[
      {label:"Pork Ribs (Smoked Pork Ribs, Java Rice, BBQ Sauce)", price:"₱279"},
      {label:"Pork Belly (Smoked Pork Belly, Java Rice, BBQ Sauce)", price:"₱279"},
      {label:"Chicken (Smoked Chicken, Java Rice, BBQ Sauce)", price:"₱259"},
      {label:"Beef Belly (Smoked Beef Belly, Java Rice, BBQ Sauce)", price:"₱279"}
    ]
  },
  {
    id:"rodydays-guisado", name:"Guisado Ulam", store:"rodydays", category:"guisado", emoji:"🍲",
    description:"Everyday home-style guisado — chopsuey, ampalaya, asado, torta, and menudencia guisado.",
    images:["assets/products/rodydays/guisado.jpg"],
    photos:["🍲"],
    pricing:[
      {label:"Chopsuey", price:"₱280"}, {label:"Ampalaya Hipon/Karne", price:"₱290"}, {label:"Asado", price:"₱290"},
      {label:"Tortang Ampalaya", price:"₱280"}, {label:"Tortang Alimasag", price:"₱270"}, {label:"Tortang Hipon", price:"₱270"},
      {label:"Tortang Karne", price:"₱270"}, {label:"Menudencia Guisado", price:"₱300"}
    ]
  },
  {
    id:"rodydays-soup", name:"Soup", store:"rodydays", category:"guisado", emoji:"🍜",
    description:"Home-style soups — hototay, pinsec soup, miswa, miki bihon soup, chicken mami, and chopsuey soup.",
    images:["assets/products/rodydays/soup.jpg"],
    photos:["🍜"],
    pricing:[
      {label:"Hototay", price:"₱290"}, {label:"Pinsec Soup", price:"₱290"}, {label:"Miswa Bola-bola", price:"₱290"},
      {label:"Miswa Pork", price:"₱290"}, {label:"Miki Bihon Soup", price:"₱290"}, {label:"Chicken Mami", price:"₱290"},
      {label:"Chopsuey Soup", price:"₱290"}
    ]
  },
  {
    id:"rodydays-additional-menu", name:"Additional Ulam", store:"rodydays", category:"guisado", emoji:"🍛",
    description:"Sinigang, adobo, beef veggie dishes, and sisig — additional home-style ulam options.",
    images:["assets/products/rodydays/additional-menu.jpg"],
    photos:["🍛"],
    pricing:[
      {label:"Sinigang na Baboy", price:"₱380"}, {label:"Sinigang na Hipon", price:"₱380"}, {label:"Adobong Manok", price:"₱390"},
      {label:"Adobong Baboy", price:"₱300"}, {label:"Beef Brocolli", price:"₱290"}, {label:"Beef Ampalaya", price:"₱290"},
      {label:"Sisig", price:"₱330"}
    ]
  },
  {
    id:"rodydays-fried-snacks", name:"Fried Snacks", store:"rodydays", category:"meryenda", emoji:"🥟",
    description:"Lumpiang Shanghai, calamares, camaron rebusado, pinsec frito, chulletas frito, and menudencia frito.",
    images:["assets/products/rodydays/fried-snacks.jpg"],
    photos:["🥟"],
    pricing:[
      {label:"Lumpiang Shanghai", price:"₱270"}, {label:"Calamares", price:"₱280"}, {label:"Camaron Rebusado", price:"₱280"},
      {label:"Pinsec Frito", price:"₱280"}, {label:"Chulletas Frito", price:"₱290"}, {label:"Menudencia Frito", price:"₱290"}
    ]
  },
  {
    id:"rodydays-fried-mains", name:"Fried Mains & Sweet and Sour", store:"rodydays", category:"guisado", emoji:"🍤",
    description:"Crispy ear, lechon kawali, and sweet and sour camaron, chulletas, meat balls, pork (choma), and fish fillet.",
    images:["assets/products/rodydays/fried-mains.jpg"],
    photos:["🍤"],
    pricing:[
      {label:"Crispy Ear", price:"₱290"}, {label:"Lechon Kawali", price:"₱290"}, {label:"Sweet & Sour Camaron", price:"₱290"},
      {label:"Sweet & Sour Chulletas", price:"₱290"}, {label:"Sweet & Sour Meat Balls", price:"₱290"},
      {label:"Sweet & Sour Pork (Choma)", price:"₱290"}, {label:"Sweet & Sour Fish Fillet", price:"₱290"}
    ]
  },
  {
    id:"rodydays-whole-chicken", name:"Whole Chicken & Crispy Pata", store:"rodydays", category:"guisado", emoji:"🍗",
    description:"Crispy pata, plus fried, buttered, and breaded chicken by whole, half, or quarter.",
    images:["assets/products/rodydays/whole-chicken.jpg"],
    photos:["🍗"],
    pricing:[
      {label:"Crispy Pata", price:"₱1,100"},
      {label:"Fried Chicken — Whole", price:"₱520"}, {label:"Fried Chicken — 1/2 (Half)", price:"₱320"},
      {label:"Buttered Chicken — Whole", price:"₱650"}, {label:"Buttered Chicken — 1/2 (Half)", price:"₱420"}, {label:"Buttered Chicken — 1/4 (One Fourth)", price:"₱320"},
      {label:"Breaded Chicken — Whole", price:"₱590"}, {label:"Breaded Chicken — 1/2 (Half)", price:"₱390"}, {label:"Breaded Chicken — 1/4 (One Fourth)", price:"₱290"}
    ]
  },
  {
    id:"rodydays-pancit-short-order", name:"Pancit (Short Order)", store:"rodydays", category:"pancit", emoji:"🍜",
    description:"Solo/short-order pancit — bihon, miki, miki bihon, canton, and lomi.",
    images:["assets/products/rodydays/pancit-short-order.jpg"],
    photos:["🍜"],
    pricing:[
      {label:"Bihon", price:"₱280"}, {label:"Miki", price:"₱280"}, {label:"Miki Bihon", price:"₱280"},
      {label:"Canton", price:"₱300"}, {label:"Lomi", price:"₱300"}
    ]
  },
  {
    id:"rodydays-pancit-bilao", name:"Pancit Bilao (Party Size)", store:"rodydays", category:"pancit", emoji:"🥡",
    description:"Bilao-size pancit for groups — bihon, miki bihon, and canton, in 4-5, 6-7, 8-9, or 10-12 person sizes.",
    images:["assets/products/rodydays/pancit-bilao.jpg"],
    photos:["🥡"],
    pricing:[
      {label:"Bihon — 4-5 Persons", price:"₱750"}, {label:"Bihon — 6-7 Persons", price:"₱1,000"}, {label:"Bihon — 8-9 Persons", price:"₱1,150"}, {label:"Bihon — 10-12 Persons", price:"₱1,250"},
      {label:"Miki Bihon — 4-5 Persons", price:"₱750"}, {label:"Miki Bihon — 6-7 Persons", price:"₱1,000"}, {label:"Miki Bihon — 8-9 Persons", price:"₱1,150"}, {label:"Miki Bihon — 10-12 Persons", price:"₱1,250"},
      {label:"Canton — 4-5 Persons", price:"₱850"}, {label:"Canton — 6-7 Persons", price:"₱1,100"}, {label:"Canton — 8-9 Persons", price:"₱1,150"}, {label:"Canton — 10-12 Persons", price:"₱1,400"}
    ]
  },
  {
    id:"rodydays-party-tray-guisado", name:"Party Trays — Guisado", store:"rodydays", category:"guisado", emoji:"🍱",
    description:"Party-size trays of guisado ulam — chopsuey, ampalaya, beef broccoli, torta, adobo, menudencia, and sisig.",
    images:["assets/products/rodydays/party-tray-guisado.jpg"],
    photos:["🍱"],
    pricing:[
      {label:"Chopsuey", price:"₱1,100"}, {label:"Ampalaya Hipon", price:"₱1,100"}, {label:"Ampalaya Karne", price:"₱1,100"},
      {label:"Beef Ampalaya", price:"₱1,100"}, {label:"Beef Brocolli", price:"₱1,100"}, {label:"Torta Alimasag", price:"₱1,100"},
      {label:"Torta Karne", price:"₱1,100"}, {label:"Adobong Baboy", price:"₱1,150"}, {label:"Adobong Manok", price:"₱1,550"},
      {label:"Menudencia Guisado", price:"₱1,150"}, {label:"Sisig", price:"₱1,300"}
    ]
  },
  {
    id:"rodydays-party-tray-fried", name:"Party Trays — Rice, Fried & Sweet and Sour", store:"rodydays", category:"guisado", emoji:"🍚",
    description:"Party-size trays of fried rice, sweet and sour dishes, and fried chicken/lumpia/camaron.",
    images:["assets/products/rodydays/party-tray-fried.jpg"],
    photos:["🍚"],
    pricing:[
      {label:"Fried Rice", price:"₱710"},
      {label:"Sweet & Sour Camaron", price:"₱1,000"}, {label:"Sweet & Sour Meat Balls (Bola-bola)", price:"₱1,150"},
      {label:"Sweet & Sour Pork (Choma)", price:"₱1,250"}, {label:"Sweet & Sour Fish Fillet", price:"₱1,000"},
      {label:"Fried Chicken", price:"₱1,000"}, {label:"Breaded Chicken", price:"₱1,150"}, {label:"Buttered Chicken", price:"₱1,250"},
      {label:"Lumpiang Shanghai", price:"₱1,000"}, {label:"Camaron", price:"₱1,050"}, {label:"Pinsec Frito", price:"₱1,100"}
    ]
  },
  {
    id:"maryjay-beef", name:"Beef (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🥩",
    description:"Sharing-size beef dishes — shredded beef with mixed vegetables, tapa, bistik, kaldereta, broccoli, kare-kare, and bulalo.",
    images:["assets/products/mary-jay-restaurant/beef.jpg"],
    photos:["🥩"],
    pricing:[
      {label:"Shredded Beef with Mixed Vegetables", price:"₱550"}, {label:"Beef Tapa", price:"₱520"},
      {label:"Bistik Tagalog", price:"₱520"}, {label:"Beef Caldereta", price:"₱550"}, {label:"Beef Brocolli", price:"₱550"},
      {label:"Kare-kare", price:"₱670"}, {label:"Bulalo", price:"₱825"}
    ]
  },
  {
    id:"maryjay-pork-1", name:"Pork — Pata & Asado (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍖",
    description:"Crispy pata, patatim, pork/halo asado, and lumpiang shanghai.",
    images:["assets/products/mary-jay-restaurant/pork-1.jpg"],
    photos:["🍖"],
    pricing:[
      {label:"Crispy Pata", price:"₱1,210"}, {label:"Patatim", price:"₱1,400"}, {label:"Pork Asado", price:"₱520"},
      {label:"Halo Asado", price:"₱520"}, {label:"Lumpiang Shanghai", price:"₱390"}
    ]
  },
  {
    id:"maryjay-pork-2", name:"Pork — Liempo & Sweet and Sour (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🐖",
    description:"Liempo, lechon macao, sweet and sour pork, sweet and sour meatballs, and salt and pepper pork.",
    images:["assets/products/mary-jay-restaurant/pork-2.jpg"],
    photos:["🐖"],
    pricing:[
      {label:"Liempo", price:"₱500"}, {label:"Lechon Macao", price:"₱530"}, {label:"Sweet & Sour Pork", price:"₱480"},
      {label:"Sweet & Sour Meatballs", price:"₱470"}, {label:"Salt & Pepper Pork", price:"₱540"}
    ]
  },
  {
    id:"maryjay-chicken", name:"Chicken (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍗",
    description:"Mary Jay fried chicken, breaded cutlets, spicy, buttered, garlic, hot & spicy, and chicken curry.",
    images:["assets/products/mary-jay-restaurant/chicken.jpg"],
    photos:["🍗"],
    pricing:[
      {label:"Mary Jay Fried Chicken", price:"₱470 / ₱760"}, {label:"Breaded Chicken Cutlets", price:"₱445"},
      {label:"Spicy Chicken", price:"₱480"}, {label:"Buttered Chicken", price:"₱480"}, {label:"Garlic Chicken", price:"₱480"},
      {label:"Hot & Spicy Chicken", price:"₱480"}, {label:"Chicken Curry", price:"₱540"}
    ]
  },
  {
    id:"maryjay-seafoods", name:"Seafoods (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🦐",
    description:"Shrimp with quail egg, sweet and sour fish fillet, camaron rebusado, tokwa, daing na bangus, mixed seafoods, garlic shrimp, and garlic squid.",
    images:["assets/products/mary-jay-restaurant/seafoods.jpg"],
    photos:["🦐"],
    pricing:[
      {label:"Shrimp with Quail Egg", price:"₱540"}, {label:"Sweet & Sour Fish Fillet", price:"₱500"},
      {label:"Camaron Rebusado", price:"₱520"}, {label:"Tokwa (Shrimp/Fish)", price:"₱520"}, {label:"Tokwa Rumble", price:"₱570"},
      {label:"Daing na Bangus", price:"₱520"}, {label:"Mixed Seafoods", price:"₱760"}, {label:"Garlic Shrimp", price:"₱570"},
      {label:"Garlic Squid", price:"₱570"}
    ]
  },
  {
    id:"maryjay-vegetables", name:"Vegetables (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🥦",
    description:"Mixed vegetables, chopsuey, ampalaya, and garlic broccoli.",
    images:["assets/products/mary-jay-restaurant/vegetables.jpg"],
    photos:["🥦"],
    pricing:[
      {label:"Mixed Vegetables", price:"₱410"}, {label:"Chopsuey (Pork/Chicken)", price:"₱395"},
      {label:"Ampalaya (Beef/Shrimp/Lechon)", price:"₱445"}, {label:"Garlic Brocolli", price:"₱520"}
    ]
  },
  {
    id:"maryjay-torta", name:"Torta (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍳",
    description:"Torta alimasag, pork, and shrimp — Mary Jay's signature omelet dishes.",
    images:["assets/products/mary-jay-restaurant/torta.jpg"],
    photos:["🍳"],
    pricing:[
      {label:"Torta Alimasag", price:"₱385"}, {label:"Torta Pork", price:"₱385"}, {label:"Torta Shrimp", price:"₱405"}
    ]
  },
  {
    id:"maryjay-sizzling", name:"Sizzling (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍤",
    description:"Gambas, pusit ala pobre, sisig, tanigue steak, buttered corn, mushroom buttons, and chicken gravy.",
    images:["assets/products/mary-jay-restaurant/sizzling.jpg"],
    photos:["🍤"],
    pricing:[
      {label:"Gambas", price:"₱575"}, {label:"Pusit Ala Pobre", price:"₱565"}, {label:"Sisig Pork", price:"₱465"},
      {label:"Sisig Bangus", price:"₱465"}, {label:"Tanigue Steak", price:"₱640"}, {label:"Buttered Corn w/ Cheese", price:"₱355"},
      {label:"Mushroom Buttons w/ Garlic", price:"₱355"}, {label:"Chicken Gravy", price:"₱555"}
    ]
  },
  {
    id:"maryjay-soup", name:"Soup (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍲",
    description:"Chicken asparagus, quail egg soup, crab & corn soup, lomi, hototay, sinigang, and bouillabaise soup.",
    images:["assets/products/mary-jay-restaurant/soup.jpg"],
    photos:["🍲"],
    pricing:[
      {label:"Chicken Asparagus", price:"₱435"}, {label:"Quail Egg Soup", price:"₱425"}, {label:"Crab & Corn Soup", price:"₱400"},
      {label:"Lomi", price:"₱390"}, {label:"Hototay", price:"₱390"}, {label:"Sinigang Baboy", price:"₱570"},
      {label:"Sinigang Hipon", price:"₱620"}, {label:"Sinigang Isda", price:"₱620"}, {label:"Bouillabaise Soup", price:"₱600"}
    ]
  },
  {
    id:"maryjay-noodles", name:"Noodles (Sharing)", store:"mary-jay-restaurant", category:"pancit", emoji:"🍜",
    description:"Pancit canton, bihon, miki bihon, miki guisado, sotanghon guisado, and crispy canton with chopsuey.",
    images:["assets/products/mary-jay-restaurant/noodles.jpg"],
    photos:["🍜"],
    pricing:[
      {label:"Pancit Canton", price:"₱385"}, {label:"Pancit Bihon", price:"₱345"}, {label:"Pancit Miki Bihon", price:"₱345"},
      {label:"Pancit Miki Guisado", price:"₱345"}, {label:"Sotanghon Guisado", price:"₱370"}, {label:"Crispy Canton with Chopsuey", price:"₱480"}
    ]
  },
  {
    id:"maryjay-rice", name:"Rice (Sharing)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍚",
    description:"Plain rice, fried rice, garlic rice, and yang chow rice.",
    images:["assets/products/mary-jay-restaurant/rice.jpg"],
    photos:["🍚"],
    pricing:[
      {label:"Plain Rice", price:"₱320"}, {label:"Fried Rice", price:"₱375"}, {label:"Garlic Rice", price:"₱375"}, {label:"Yang Chow Rice", price:"₱565"}
    ]
  },
  {
    id:"maryjay-beermates", name:"Beermates & Accompaniments (Sharing)", store:"mary-jay-restaurant", category:"meryenda", emoji:"🍢",
    description:"Tapang/adobong kabayo, fried tokwa, crispy tenga, kilawin tanigue, chicharong bulaklak, dinakdakan, and tuna sashimi.",
    images:["assets/products/mary-jay-restaurant/beermates.jpg"],
    photos:["🍢"],
    pricing:[
      {label:"Tapang Kabayo", price:"₱470"}, {label:"Adobong Kabayo", price:"₱480"}, {label:"Fried Tokwa", price:"₱285"},
      {label:"Fried Tokwa Baboy", price:"₱390"}, {label:"Crispy Tenga", price:"₱420"}, {label:"Kilawin Tanigue", price:"₱600"},
      {label:"Chicharong Bulaklak", price:"₱415"}, {label:"Dinakdakan", price:"₱480"}, {label:"Tuna Sashimi", price:"₱620"}
    ]
  },
  {
    id:"maryjay-dessert", name:"Dessert (Sharing)", store:"mary-jay-restaurant", category:"panghimagas", emoji:"🍮",
    description:"Maja Mais — Mary Jay's signature sharing dessert.",
    images:["assets/products/mary-jay-restaurant/dessert.jpg"],
    photos:["🍮"],
    pricing:[{label:"Maja Mais", price:"₱290"}]
  },
  {
    id:"maryjay-party-tray-beef", name:"Party Trays — Beef (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🥩",
    description:"Party-size beef trays for 10-12 pax — shredded beef with mushroom and beef caldereta. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-beef.jpg"],
    photos:["🥩"],
    pricing:[{label:"Shredded Beef with Mushroom", price:"₱1,935"}, {label:"Beef Caldereta", price:"₱1,955"}]
  },
  {
    id:"maryjay-party-tray-pork", name:"Party Trays — Pork (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍖",
    description:"Party-size pork trays for 10-12 pax — lumpiang shanghai, salt & pepper pork, sweet & sour pork, and bola-bola. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-pork.jpg"],
    photos:["🍖"],
    pricing:[
      {label:"Lumpiang Shanghai", price:"₱1,680"}, {label:"Salt & Pepper Pork", price:"₱2,080"},
      {label:"Sweet & Sour Pork", price:"₱1,705"}, {label:"Bola-bola Sweet & Sour", price:"₱1,620"}
    ]
  },
  {
    id:"maryjay-party-tray-chicken", name:"Party Trays — Chicken (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍗",
    description:"Party-size chicken trays for 10-12 pax — cutlets, buttered, spicy, and garlic. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-chicken.jpg"],
    photos:["🍗"],
    pricing:[
      {label:"Chicken Cutlets", price:"₱1,450"}, {label:"Buttered Chicken Cutlets", price:"₱1,555"},
      {label:"Spicy Chicken Cutlets", price:"₱1,555"}, {label:"Garlic Chicken Cutlets", price:"₱1,555"}
    ]
  },
  {
    id:"maryjay-party-tray-seafood", name:"Party Trays — Seafood (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🦐",
    description:"Party-size seafood trays for 10-12 pax — torta, tokwa, mixed seafood, shrimp with quail eggs, and sweet & sour fish. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-seafood.jpg"],
    photos:["🦐"],
    pricing:[
      {label:"Torta Alimasag / Shrimp", price:"₱1,555"}, {label:"Tokwa Fish", price:"₱1,830"}, {label:"Tokwa Rumble", price:"₱2,040"},
      {label:"Mixed Seafood", price:"₱2,205"}, {label:"Shrimp with Quail Eggs", price:"₱2,060"}, {label:"Sweet & Sour Fish", price:"₱1,725"}
    ]
  },
  {
    id:"maryjay-party-tray-vegetables", name:"Party Trays — Vegetables (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🥦",
    description:"Party-size vegetable trays for 10-12 pax — mixed vegetables and chopsuey. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-vegetables.jpg"],
    photos:["🥦"],
    pricing:[{label:"Mixed Vegetables", price:"₱1,470"}, {label:"Chopsuey", price:"₱1,450"}]
  },
  {
    id:"maryjay-party-tray-noodles", name:"Party Trays — Noodles (10-12pax)", store:"mary-jay-restaurant", category:"pancit", emoji:"🍜",
    description:"Party-size noodle trays for 10-12 pax — pancit canton guisado, mike bihon, bihon, and mike. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-noodles.jpg"],
    photos:["🍜"],
    pricing:[
      {label:"Pancit Canton Guisado", price:"₱1,260"}, {label:"Mike Bihon", price:"₱1,240"},
      {label:"Bihon", price:"₱1,240"}, {label:"Mike", price:"₱1,240"}
    ]
  },
  {
    id:"maryjay-party-tray-rice", name:"Party Trays — Rice (10-12pax)", store:"mary-jay-restaurant", category:"guisado", emoji:"🍚",
    description:"Party-size Yang Chow rice tray for 10-12 pax. Please order at least 2 days in advance.",
    images:["assets/products/mary-jay-restaurant/party-trays-rice.jpg"],
    photos:["🍚"],
    pricing:[{label:"Yang Chow", price:"₱1,600"}]
  },
  {
    id:"dolors-sapin-sapin", name:"Sapin-Sapin", store:"dolors-kakanin", category:"kakanin", emoji:"🍥",
    description:"Dolor's classic layered Sapin-Sapin — orange, red, black, and white layers around a latik center. Sizes from 8\" (3-4 pax) up to 16\" (20-25 pax).",
    images:["assets/products/dolors-kakanin/sapin-sapin-1.jpg","assets/products/dolors-kakanin/sapin-sapin-2.jpg"],
    photos:["🍥"],
    pricing:[
      {label:"8\" (3-4pax)", price:"₱400"}, {label:"9\" (5-6pax)", price:"₱460"}, {label:"11\" (8pax)", price:"₱550"},
      {label:"13\" (10pax)", price:"₱650"}, {label:"15\" (15pax)", price:"₱750"}, {label:"16\" (20-25pax)", price:"₱900"}
    ]
  },
  {
    id:"dolors-bite-size", name:"Bite Size Kakanin", store:"dolors-kakanin", category:"kakanin", emoji:"🍡",
    description:"Sapin-Sapin sliced into individually wrapped bite-size pieces, arranged on a tray. Sizes from 11\" (8 pax) up to 16\" (20-25 pax). At least 2 days pre-order.",
    images:["assets/products/dolors-kakanin/bite-size.jpg"],
    photos:["🍡"],
    pricing:[
      {label:"11\" (8pax)", price:"₱560"}, {label:"13\" (10pax)", price:"₱680"},
      {label:"15\" (15pax)", price:"₱850"}, {label:"16\" (20-25pax)", price:"₱995"}
    ]
  },
  {
    id:"dolors-pure-sapin", name:"Pure Sapin", store:"dolors-kakanin", category:"kakanin", emoji:"🍘",
    description:"Single-layer, all-white version of Dolor's Sapin-Sapin. Sizes from 8\" (3-4 pax) up to 16\" (20-25 pax). At least 2 days pre-order.",
    images:["assets/products/dolors-kakanin/pure-sapin.jpg"],
    photos:["🍘"],
    pricing:[
      {label:"8\" (3-4pax)", price:"₱460"}, {label:"9\" (5-6pax)", price:"₱525"}, {label:"11\" (8pax)", price:"₱610"},
      {label:"13\" (10pax)", price:"₱750"}, {label:"15\" (15pax)", price:"₱860"}, {label:"16\" (20-25pax)", price:"₱1,020"}
    ]
  },

  /* ===== SAPIN YEMA KAKANIN ATBP. — real dish names, photos, and
     pricing taken from the store's own menu graphics supplied by
     the client. ===== */
  {
    id:"sy-sapin-yema-tub", name:"Sapin Yema (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🍮",
    description:"Sapin Yema Kakanin Atbp's best-selling, viral layered kakanin — sapin-sapin topped generously with yema and latik. Featured on Featr by Erwan Heussaff.",
    images:["assets/products/sapin-yema-kakanin-atbp/sapin-yema-tub.jpg"],
    photos:["🍮"],
    pricing:[{label:"Regular", price:"₱150"}, {label:"Go Overload! (Extra Yema & Latik)", price:"₱170"}]
  },
  {
    id:"sy-sapin-yema-party", name:"Sapin Party Size 8\"", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🍮",
    description:"The best-selling Sapin Yema in an 8\" party size, good for 6-8pax — loaded with extra yema and latik.",
    images:["assets/products/sapin-yema-kakanin-atbp/sapin-yema-party.jpg"],
    photos:["🍮"],
    pricing:[{label:"8\" Go Overload! (6-8pax)", price:"₱550"}]
  },
  {
    id:"sy-minis-round", name:"Sapin Yema Minis (Round)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟠",
    description:"Bite-size round Sapin Yema minis with yema dip and extra latik per tub.",
    images:["assets/products/sapin-yema-kakanin-atbp/minis-round.jpg", "assets/products/sapin-yema-kakanin-atbp/minis-round-20.jpg", "assets/products/sapin-yema-kakanin-atbp/minis-round-25.jpg", "assets/products/sapin-yema-kakanin-atbp/minis-round-30.jpg"],
    photos:["🟠"],
    pricing:[
      {label:"10pcs/tub (min. 2 tubs) — per tub", price:"₱300"},
      {label:"20pcs Go Overload!", price:"₱580"},
      {label:"25pcs Go Overload!", price:"₱650"},
      {label:"30pcs Go Overload!", price:"₱840"}
    ]
  },
  {
    id:"sy-minis-heart", name:"Sapin Yema Minis (Heart)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"💜",
    description:"Heart-shaped Sapin Yema minis with yema dip and extra latik per tub — great for gifting.",
    images:["assets/products/sapin-yema-kakanin-atbp/minis-heart.jpg"],
    photos:["💜"],
    pricing:[{label:"10pcs/tub (min. 2 tubs) — per tub", price:"₱330"}]
  },
  {
    id:"sy-minis-flower", name:"Sapin Yema Minis (Flower)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🌼",
    description:"Flower-shaped Sapin Yema minis with yema dip and extra latik per tub.",
    images:["assets/products/sapin-yema-kakanin-atbp/minis-flower.jpg"],
    photos:["🌼"],
    pricing:[{label:"10pcs/tub (min. 2 tubs) — per tub", price:"₱330"}]
  },
  {
    id:"sy-ube-biko-macapuno-bilao", name:"Ube Biko Macapuno Bilao", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟣",
    description:"Ube biko topped with macapuno, served on a bilao. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/ube-biko-macapuno-bilao.jpg"],
    photos:["🟣"],
    pricing:[{label:"12\" (10-15pax)", price:"₱620"}, {label:"14\" (15-18pax)", price:"₱720"}]
  },
  {
    id:"sy-ube-biko-overload-bilao", name:"Ube Biko Macapuno Bilao Overload", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟣",
    description:"Ube biko macapuno bilao with extra macapuno topping. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/ube-biko-overload-bilao.jpg"],
    photos:["🟣"],
    pricing:[{label:"12\" Overload (10-15pax)", price:"₱700"}, {label:"14\" Overload (15-18pax)", price:"₱800"}]
  },
  {
    id:"sy-ube-biko-macapuno-tub", name:"Ube Biko Macapuno (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟣",
    description:"Ube biko topped with macapuno, in a tub. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/ube-biko-macapuno-tub.jpg"],
    photos:["🟣"],
    pricing:[{label:"Tub", price:"₱150"}]
  },
  {
    id:"sy-ube-biko-overload-tub", name:"Ube Biko Macapuno Overload (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟣",
    description:"Ube biko macapuno in a tub with extra macapuno topping. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/ube-biko-overload-tub.jpg"],
    photos:["🟣"],
    pricing:[{label:"Tub Overload", price:"₱170"}]
  },
  {
    id:"sy-biko-langka-bilao", name:"Biko Langka with Niyog Bilao", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟡",
    description:"Sticky rice biko with jackfruit and toasted coconut, served on a bilao. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/biko-langka-bilao.jpg"],
    photos:["🟡"],
    pricing:[{label:"12\" (10-15pax)", price:"₱620"}, {label:"14\" (15-18pax)", price:"₱720"}]
  },
  {
    id:"sy-biko-langka-tub", name:"Biko Langka with Niyog (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🟡",
    description:"Sticky rice biko with jackfruit and toasted coconut, in a tub. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/biko-langka-tub.jpg"],
    photos:["🟡"],
    pricing:[{label:"Tub", price:"₱150"}]
  },
  {
    id:"sy-cassava-cake-party", name:"Cassava Cake Party Size 8\"", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🧡",
    description:"Classic baked cassava cake, party size, good for 6-8pax. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/cassava-cake-party.jpg"],
    photos:["🧡"],
    pricing:[{label:"8\" (6-8pax)", price:"₱550"}]
  },
  {
    id:"sy-cassava-cake-tub", name:"Cassava Cake (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🧡",
    description:"Classic baked cassava cake, in a tub. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/cassava-cake-tub.jpg"],
    photos:["🧡"],
    pricing:[{label:"Tub", price:"₱150"}]
  },
  {
    id:"sy-yema-cassava-cheese-party", name:"Yema Cassava Cheese Party Size 8\"", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🧀",
    description:"Cassava cake topped with yema and grated cheese, party size, good for 6-8pax. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/yema-cassava-cheese-party.jpg"],
    photos:["🧀"],
    pricing:[{label:"8\" (6-8pax)", price:"₱550"}]
  },
  {
    id:"sy-yema-cassava-cheese-tub", name:"Yema Cheese Cassava (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🧀",
    description:"Cassava cake topped with yema and grated cheese, in a tub. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/yema-cassava-cheese-tub.jpg"],
    photos:["🧀"],
    pricing:[{label:"Tub", price:"₱150"}]
  },
  {
    id:"sy-buko-cassava-party", name:"Buko Cassava Party Size 8\"", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🥥",
    description:"Best-selling cassava cake topped with young coconut strips, party size, good for 6-8pax. Pre-order.",
    images:["assets/products/sapin-yema-kakanin-atbp/buko-cassava-party.jpg"],
    photos:["🥥"],
    pricing:[{label:"8\" (6-8pax)", price:"₱550"}]
  },
  {
    id:"sy-buko-cassava-tub", name:"Buko Cassava (Tub)", store:"sapin-yema-kakanin-atbp", category:"kakanin", emoji:"🥥",
    description:"Best-selling cassava cake topped with young coconut strips, in a tub. Pre-order, also open for resellers.",
    images:["assets/products/sapin-yema-kakanin-atbp/buko-cassava-tub.jpg"],
    photos:["🥥"],
    pricing:[{label:"Tub", price:"₱150"}]
  },

  /* ===== ELLET'S SWEETS — bottled sweets, since 1975. Product names,
     photos, and pricing taken from the store's own promo graphics
     supplied by the client. ===== */
  {
    id:"es-white-beans", name:"White Beans", store:"ellets-sweets", category:"panghimagas", emoji:"🫘",
    description:"Sweetened white beans in syrup, no artificial sweetener — a halo-halo classic.",
    images:["assets/products/ellets-sweets/white-beans.jpg"],
    photos:["🫘"],
    pricing:[{label:"Small", price:"₱190"}, {label:"Medium", price:"₱250"}, {label:"Large", price:"₱295"}]
  },
  {
    id:"es-garbanzos", name:"Garbanzos", store:"ellets-sweets", category:"panghimagas", emoji:"🟡",
    description:"Sweetened chickpeas in syrup, no artificial sweetener.",
    images:["assets/products/ellets-sweets/garbanzos.jpg"],
    photos:["🟡"],
    pricing:[{label:"Small", price:"₱200"}, {label:"Medium", price:"₱295"}, {label:"Large", price:"₱350"}]
  },
  {
    id:"es-garbanzos-macapuno", name:"Garbanzos at Macapuno", store:"ellets-sweets", category:"panghimagas", emoji:"🥥",
    description:"Sweetened chickpeas mixed with fresh macapuno strings, no artificial sweetener.",
    images:["assets/products/ellets-sweets/garbanzos-at-macapuno.jpg"],
    photos:["🥥"],
    pricing:[{label:"Small", price:"₱225"}, {label:"Medium", price:"₱330"}]
  },
  {
    id:"es-kaong", name:"Kaong", store:"ellets-sweets", category:"panghimagas", emoji:"🍯",
    description:"Sweetened sugar palm fruit in syrup, no artificial sweetener.",
    images:["assets/products/ellets-sweets/kaong.jpg"],
    photos:["🍯"],
    pricing:[{label:"Small", price:"₱175"}, {label:"Medium", price:"₱240"}, {label:"Large", price:"₱290"}]
  },
  {
    id:"es-macapuno", name:"Macapuno", store:"ellets-sweets", category:"panghimagas", emoji:"🥥",
    description:"Made from fresh macapuno strings (coconut sport), sweetened in syrup, no artificial sweetener.",
    images:["assets/products/ellets-sweets/macapuno.jpg"],
    photos:["🥥"],
    pricing:[{label:"Small", price:"₱260"}, {label:"Medium", price:"₱400"}, {label:"Large", price:"₱495"}]
  },
  {
    id:"es-red-monggo-beans", name:"Red Monggo Beans", store:"ellets-sweets", category:"panghimagas", emoji:"🟤",
    description:"Sweetened red mung beans in syrup, no artificial sweetener.",
    images:["assets/products/ellets-sweets/red-monggo-beans.jpg"],
    photos:["🟤"],
    pricing:[{label:"Small", price:"₱180"}, {label:"Medium", price:"₱250"}, {label:"Large", price:"₱295"}]
  },
  {
    id:"es-nata-de-coco", name:"Nata de Coco", store:"ellets-sweets", category:"panghimagas", emoji:"🧊",
    description:"Chewy coconut gel in syrup, no artificial sweetener.",
    images:["assets/products/ellets-sweets/nata-de-coco.jpg"],
    photos:["🧊"],
    pricing:[{label:"Small", price:"₱155"}, {label:"Medium", price:"₱205"}, {label:"Large", price:"₱250"}]
  },
  {
    id:"es-ube-halaya", name:"Ube Halaya", store:"ellets-sweets", category:"panghimagas", emoji:"🍠",
    description:"Home-style ube jam, thick and creamy.",
    images:["assets/products/ellets-sweets/ube-halaya.jpg"],
    photos:["🍠"],
    pricing:[{label:"Tub", price:"₱250"}]
  },
  {
    id:"es-halo-halo", name:"Halo Halo Mix (Red Monggo, Garbanzos, Nata de Coco, White Beans)", store:"ellets-sweets", category:"panghimagas", emoji:"🍧",
    description:"All-in-one halo-halo mix — red monggo, garbanzos, nata de coco, and white beans in one jar, no artificial sweetener.",
    images:["assets/products/ellets-sweets/halo-halo.jpg"],
    photos:["🍧"],
    pricing:[{label:"Small", price:"₱195"}, {label:"Medium", price:"₱265"}, {label:"Large", price:"₱320"}]
  }
];

/* ========================================================= DEV SAFETY CHECK
   Runs once on load. Warns in the browser console (F12 → Console) if two
   stores or two products end up with the same `id` — this is what causes
   "conflicts" when adding more items later: wrong product opens in the
   modal, wrong store page loads, etc. Doesn't change anything on the page
   itself, just flags the problem early so you can rename before it goes
   live. Safe to leave in permanently. */
(function checkDuplicateIds(){
  function findDupes(list, label){
    const seen = new Set(), dupes = new Set();
    list.forEach(item => {
      if (seen.has(item.id)) dupes.add(item.id);
      seen.add(item.id);
    });
    if (dupes.size){
      console.warn(`⚠️ MFC: duplicate ${label} id(s) — fix before adding more: `, [...dupes]);
    }
  }
  findDupes(STORES, "store");
  findDupes(PRODUCTS, "product");
})();

const MESSENGER_LINK = "https://www.facebook.com/messages/t/101331155011408";

/* ===== About Malabon — client's write-up ===== */
const ABOUT_MALABON = {
  title:"What is Malabon Food Cravings?",
  emoji:"🏮",
  paragraphs:[
    "Malabon Food Cravings is your one-stop online shop for all your favorite Malabon dishes — from pancit, kakanin, puto, to fresh seafood and more!",
    "With over 200+ food choices from well-loved restaurants and talented home-based sellers, we offer a growing selection that highlights the rich culinary heritage of Malabon. We proudly support local small businesses by helping them reach more customers and promote their unique specialties.",
    "Ordering is super convenient and hassle-free — just a few clicks and your cravings are on the way! We also offer same-day delivery depende sa availability para mas satisfying ang kain mo, kaagad-kaagad!",
    "We deliver to nearby cities, bringing the authentic taste of Malabon right to your doorstep.",
    "Whether you're planning a feast or just want your comfort food fix, Malabon Food Cravings is here to serve you — masarap, mabilis, at maasahan!"
  ]
};

/* ===== FAQ — replace/expand with the client's Q&A list ===== */
const FAQS = [
  {
    q: "Paano po mag-place ng order?",
    a: "Mag-message lamang sa aming Facebook Page o Instagram. Ipapadala namin ang order form na kailangan mong sagutan. Iche-check namin ang availability, magse-send ng confirmation, at pagkatapos ng payment ay ipoprocess na namin ang order sa supplier."
  },

  {
    q: "Pwede po ba ang same-day delivery?",
    a: "Yes! Available ang same-day delivery basta available ang food sa supplier. Depende sa preparation time ng items, kaya mas recommended na mag-order at least 1 day before, lalo na para sa bulk or party orders."
  },

  {
    q: "Ano po ang mga mode of payment?",
    a: "Payment first po tayo. Tumatanggap kami ng GCash, Maya, at UnionBank. No COD po. Pagkatapos magbayad, please send a screenshot or proof of payment para ma-verify namin."
  },

  {
    q: "Saan po kayo nagde-deliver?",
    a: "We deliver within Malabon and nearby cities, basta kayang abutin ng Lalamove, Grab, or other available courier. Fresh po ang karamihan ng food kaya hindi recommended ang masyadong malayong locations."
  },

  {
    q: "Magkano po ang delivery fee?",
    a: "Depende ang delivery fee sa exact location, demand, at date ng delivery. Maaari naming i-check ang estimated rate, or ikaw mismo ang pwedeng mag-check through Lalamove, Grab, or your preferred courier."
  },

  {
    q: "May extra charge po ba per store?",
    a: "Wala po. Kung ano ang price na nasa menu, iyon na po ang food price—no hidden charges. Ang additional payment lang ay ang delivery fee."
  },

  {
    q: "Pwede po ba akong mag-book ng rider or mag-pick up?",
    a: "Yes po! Pwede kayong mag-book ng sariling rider or mag-pick up. Please wait muna sa 'Food is ready' signal bago magpa-pick up. For self-pickup, motor lang po ang kasya sa street namin."
  },

  {
    q: "Kayo po ba ang nagde-deliver?",
    a: "Hindi po kami mismo ang nagde-deliver. Maaari kaming mag-book ng Lalamove para sa inyo, or maaari kayong mag-book ng sariling rider. Lalamove ang currently available na app namin."
  },

  {
    q: "Anong oras po ang order cut-off?",
    a: "For same-day delivery, tumatanggap kami ng orders hanggang 3:00 PM, with last dispatch at 5:00 PM. For next-day orders, usually hanggang 6:00 PM ang order cut-off."
  },

  {
    q: "Gaano katagal bago ma-dispatch ang order?",
    a: "Depende sa dami ng items, suppliers, at preparation time ng food. Minsan kaya within an hour or less, pero may orders na mas matagal. Iko-confirm namin ang estimated waiting time bago kayo magbayad."
  },

  {
    q: "Pwede po ba ang bulk or party orders?",
    a: "Yes po! Recommended na mag-order 2–3 days in advance para sa maraming items, party trays, handaan, or bulk orders dahil may food items at suppliers na nangangailangan ng pre-order."
  },

  {
    q: "Pwede po ba akong mag-order kahit nasa abroad ako?",
    a: "Yes po! Same process lang—fill out the order form and send payment after confirmation. Please provide at least 2 contact persons in the Philippines para may makontak kami if may changes or concerns sa order."
  },

  {
    q: "Pwede po bang mag-attach ng note para sa recipient?",
    a: "Oo naman! Maaari kayong mag-send ng letter or note para sa recipient, whether sweet, emotional, or fun. Kami na ang bahalang magpaabot nito kasama ng order."
  },

  {
    q: "May Senior Citizen or PWD discount po ba?",
    a: "Pasensya na po, pero wala kaming Senior Citizen or PWD discount dahil hindi rin kami nakakakuha ng discount mula sa aming suppliers."
  },

  {
    q: "Pwede po bang maging reseller ng products ninyo?",
    a: "Yes po! Tumatanggap kami ng resellers. Mag-message lamang sa aming page para ma-send namin ang listahan ng items na available for resale or rebranding."
  }
];

/* ===== MFC Events — replace with the client's event write-ups ===== */
const EVENTS = [
  { id:"event-1", emoji:"🎪", title:"[Placeholder event title]", date:"[Date]", excerpt:"[Placeholder — replace with the client's write-up] Short recap of the event MFC attended, who was there, and what was featured.", body:"[Placeholder — replace with the client's full write-up of this event.]" }
];

/* ===== Customer Reviews ===== */
const REVIEWS = [
  { name:"Ms. Cher (Makati)",       rating:5, img:"images/reviews/review1.jpg", text:"Sunday Lunch! Masarap lutong bahay ang lasa!" },
  { name:"Ms. Dothy (Quezon City)", rating:5, img:"images/reviews/review2.jpg", text:"Masarap yung mga naorder ko kay Aling Mely's parang luto ng nanay ko kaya umoorder ako pag miss ko sya and of course ang Nanay's pancit pa rin pag nagkecrave kami ng pancit malabon!" },
  { name:"Ms. Pia (Paranaque)",     rating:5, img:"images/reviews/review3.jpg", text:"Crispy pata ang crispy ng balat, pero ang juicy ng laman. Nakaka high blood lang talaga. Rellenong bangus manamis namis pero hindi nakaka umay. Malaman at wala mashadong extenders. Tapos hindi cya malansa. Saktong sakto. Pansit malabon ang sarap ng noodles, hindi tinipid ang sahog at sauce." },
  { name:"Ms. AP (Makati)",         rating:5, img:"images/reviews/review4.jpg", text:"Sarap! Cravings satisfied – thank you" },
  { name:"Ms. Hershey (Malabon)",   rating:4, img:"images/reviews/review5.jpg", text:"Yessss! Thank you & congrats sa service nyo, and highly appreciated yung reco mo na yerna sapin, grabe.. bitin pala yung 1 small order haha YUMMERZ!" },
  { name:"Ms. Tin (Quezon City)",   rating:5, img:"images/reviews/review6.jpg", text:"Sobrang sarap lahat from nanay's pancit malabon, arny dading pichi pichi and okay. Hindi na napicture, na excite masyado lahat matikman ulit yung food from malabon. The best pa din ang mechado from mama belen's. Next order ulit!" },
  { name:"Ms. Eden (Makati)",       rating:5, img:"images/reviews/review7.jpg", text:"Received the orders, thank you for satisfying our cravings!" },
  { name:"Ms. Jeanne (Quezon City)",rating:5, img:"images/reviews/review8.jpg", text:"We got our orders na. Ang sarap nang Broas. We inhaled everything in one sitting haha thank you for arranging this for us." },
];

/* ===== Featured On / Vlogs — YouTube videos, Facebook videos, and other media
   features. Add entries below once real links are available:
   { type:"youtube",  title:"Malabon Food Crawl Ep. 1", date:"October 2026", url:"https://www.youtube.com/watch?v=XXXXXXXXXXX" }
   { type:"facebook", title:"MFC on someone's FB video", date:"...", url:"https://www.facebook.com/.../videos/..." }
   { type:"other",    title:"Featured on a food blog",   date:"...", url:"https://..." }
   Do NOT invent real URLs — leave this array empty (renders a clean
   embed-ready placeholder) until the client provides actual links. */
const FEATURED_ON = [
  { type:"youtube",  title:"Food Trip in Malabon City with Erwan", date:"October 2026", url:"https://youtu.be/zfaekw_AVcE?si=7rHh7xKH4sxjg5wd" },
  { type:"facebook",  title:"Malabon Food Cravings", date:"October 2026", url:"https://www.facebook.com/reel/994749430288678" },
  { type:"facebook", title:"Multiple brands, single delivery.", date:"...", url:"https://www.facebook.com/reel/1650157326831198" },
  
];

/* ===== Contact — replace with real MFC contact details ===== */
const CONTACT = {
  messenger: MESSENGER_LINK,
  facebook: "https://www.facebook.com/101331155011408",
  email: "[Placeholder — MFC email, optional]"
};

/* ========================================================= STATE */
let state = { search:"", category:"all", store:"all" };
let galleryIndex = 0;
let activeProduct = null;
let lastFocusedEl = null;
let currentStoreId = null;

const storeById = id => STORES.find(s => s.id === id);
const priceRange = p => {
  if (p.pricing.length === 1) return p.pricing[0].price;
  const nums = p.pricing.map(x => parseInt(x.price.replace(/[^\d]/g,""), 10));
  const min = Math.min(...nums), max = Math.max(...nums);
  return `₱${min.toLocaleString()} – ₱${max.toLocaleString()}`;
};

/* ========================================================= ROUTER
   Simple hash router for dedicated pages: #/  #/menu  #/stores
   #/store/<id>  #/how  #/events. Anchor-only hashes like #contact or
   #faq are treated as in-page scrolls on the home page (keeps existing
   nav-dropdown / footer anchor behavior working). */
const PAGES = ["home","menu","stores","store","how","events"];

function showPage(name){
  PAGES.forEach(p=>{
    const el = document.querySelector(`.page[data-page="${p}"]`);
    if (el) el.hidden = (p !== name);
  });
  document.querySelectorAll('.nav-links [data-nav]').forEach(a=>{
    a.classList.toggle('current', a.dataset.nav === name);
  });
}

function router(){
  const hash = location.hash || "#/";

  if (!hash.startsWith("#/")){
    // Anchor into a home-page section (e.g. #contact, #faq, #reviews, #featured)
    showPage("home");
    const id = hash.slice(1);
    requestAnimationFrame(()=>{
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:"smooth", block:"start"});
    });
    return;
  }

  const segments = hash.slice(2).split("/").filter(Boolean);
  window.scrollTo({top:0});

  if (segments.length === 0){
    showPage("home");
  } else if (segments[0] === "menu"){
    showPage("menu");
  } else if (segments[0] === "stores"){
    showPage("stores");
  } else if (segments[0] === "store" && segments[1]){
    const store = storeById(segments[1]);
    if (!store){ showPage("stores"); return; }
    currentStoreId = segments[1];
    renderStorePage(currentStoreId);
    showPage("store");
  } else if (segments[0] === "how"){
    showPage("how");
  } else if (segments[0] === "events"){
    showPage("events");
  } else {
    showPage("home");
  }
}
window.addEventListener("hashchange", router);

/* ========================================================= SHARED: IMAGE SYSTEM
   Stores/products may now carry a real photo:
     store.image          -> "assets/stores/store-slug/store.jpg"
     product.images        -> ["assets/products/store-slug/dish.jpg", ...]
   If image/images is missing, or the file fails to load, we fall back to
   the existing emoji (store.emoji / product.photos[i]) — nothing that
   already works changes. A broken <img> never shows: onerror swaps it
   for the shared placeholder graphic. */
const PLACEHOLDER_IMAGE = "assets/placeholder.svg";

function escapeAttr(str){
  return String(str).replace(/&/g,"&amp;").replace(/"/g,"&quot;");
}

/* Real photo <img> with built-in broken-image fallback. */
function imageTag(src, alt, extraClass){
  return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" class="${extraClass||''}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';this.classList.add('img-placeholder');">`;
}

/* Store logo: real photo if store.image is set, else the existing emoji. */
function storeLogoHTML(s){
  return s.image ? imageTag(s.image, s.name) : s.emoji;
}

/* Product's main/first photo for cards, offer tiles, etc: real photo if
   product.images is set, else the existing emoji (p.photos[0]). */
function productMainPhotoHTML(p){
  return (p.images && p.images.length) ? imageTag(p.images[0], p.name) : p.photos[0];
}

/* How many photos a product has, whichever system it's using — drives the
   "N photos" badge and the modal gallery/thumbnails. */
function productPhotoCount(p){
  return (p.images && p.images.length) ? p.images.length : p.photos.length;
}

/* ========================================================= SHARED: PRODUCT CARD */
function photoBg(cat){
  // All product photo containers (cards + modal) use a plain white
  // background, regardless of category, so real photos sit cleanly
  // without a colored tint behind them.
  return "#FFFFFF";
}

function productCardHTML(p, opts){
  opts = opts || {};
  const store = storeById(p.store);
  return `
    <button class="card" data-id="${p.id}">
      <div class="card-photo" style="background:${photoBg(p.category)};">
        <span class="badge">${CATEGORIES.find(c=>c.id===p.category).label}</span>
        ${productPhotoCount(p)>1 ? `<span class="count">${productPhotoCount(p)} photos</span>` : ""}
        ${productMainPhotoHTML(p)}
      </div>
      <div class="card-body">
        ${opts.hideStore ? "" : `<div class="card-store">${store.name}</div>`}
        <div class="card-title">~ ${p.name}</div>
        <div class="card-desc">${p.description}</div>
        <div class="card-foot">
          <span class="card-price">${priceRange(p)}</span>
          <span class="card-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </span>
        </div>
      </div>
    </button>`;
}

function bindProductCards(container){
  container.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click", ()=> openModal(card.dataset.id));
  });
}

/* Offer tiles behave like a category jump, not a single-item modal:
   tapping "Longganisa" should surface every Longganisa-type dish from
   every partner store on the Menu page — the same aggregated view as
   typing "Longganisa" into search. */
function bindOfferTiles(container){
  container.querySelectorAll(".offer-tile").forEach(tile=>{
    tile.addEventListener("click", ()=>{
      const product = PRODUCTS.find(p => p.id === tile.dataset.id);
      if (!product) return;
      goToMenuSearch(product.name);
    });
  });
}

/* ========================================================= RENDER: MENU PAGE FILTERS */
function countFor(catId){
  return PRODUCTS.filter(p => catId === "all" || p.category === catId).length;
}

function renderTabs(){
  const el = document.getElementById("categoryTabs");
  el.innerHTML = CATEGORIES.map(c =>
    `<button class="tab ${state.category===c.id?'active':''}" data-cat="${c.id}">${c.label}<span class="tab-count">(${countFor(c.id)})</span></button>`
  ).join("");
  el.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.category = btn.dataset.cat;

      renderTabs(); renderGrid();
      btn.scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"});
    });
  });
}

document.getElementById("tabsNext").addEventListener("click", ()=>{
  document.getElementById("categoryTabs").scrollBy({left:160, behavior:"smooth"});
});

/* Optional store filter — narrows the (already all-store) category view
   down to one seller. Defaults to "All Stores". */
function renderStoreFilterOptions(){
  const el = document.getElementById("storeFilterSelect");
  const sorted = [...STORES].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  el.innerHTML = `<option value="all">All Stores</option>` +
    sorted.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  el.value = state.store;
}
document.getElementById("storeFilterSelect").addEventListener("change", (e)=>{
  state.store = e.target.value;

  renderGrid();
});

/* ========================================================= RENDER: GENERAL MENU GRID
   Aggregates matching products from ALL partner stores — this is the
   "global category" behavior: clicking a category (e.g. Guisado) shows
   every guisado dish from every store, not just one seller's menu. */
function matchesFilters(p){
  const q = state.search.trim().toLowerCase();
  const store = storeById(p.store);
  const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.category.includes(q) || (store && store.name.toLowerCase().includes(q));
  const matchesCategory = state.category === "all" || p.category === state.category;
  const matchesStore = state.store === "all" || p.store === state.store;
  return matchesSearch && matchesCategory && matchesStore;
}

function renderGrid(){
  const el = document.getElementById("productGrid");
  const resultsCount = document.getElementById("productResultsCount");
  const results = PRODUCTS.filter(matchesFilters);

  if (!results.length){
    el.innerHTML = `<div class="empty-state">No dishes match that search — try a different keyword or category.</div>`;
    resultsCount.textContent = "";
    return;
  }

  el.innerHTML = results.map(p => productCardHTML(p)).join("");
  bindProductCards(el);

  resultsCount.textContent = `Showing all ${results.length} dish${results.length === 1 ? "" : "es"}`;
}

/* ========================================================= RENDER: HOME — WHAT WE OFFER
   Photo tiles with the dish name overlaid at the bottom, matching the
   client's reference layout — not full product cards (no price/desc
   here; tap a tile to jump to that dish across all stores on Menu).
   Shows ONLY the client's 12 curated picks — this section is meant to
   stay small and curated, not grow with the full catalog. */
const OFFER_PICKS = [
  "pancit-malabon", "quekiam", "sapin-yema", "relyeno", "broas", "okoy",
  "bagoong", "puto-malabon", "valencia", "longganisa", "lumpiang-sariwa", "crispy-pata"
];

function offerTileHTML(p){
  return `
    <button class="offer-tile" data-id="${p.id}" style="background:${photoBg(p.category)};">
      <span class="offer-tile-photo">${productMainPhotoHTML(p)}</span>
      <span class="offer-tile-name">${p.name}</span>
    </button>`;
}

function renderOfferPreview(){
  const el = document.getElementById("offerGrid");
  const picks = OFFER_PICKS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  el.innerHTML = picks.map(offerTileHTML).join("");
  bindOfferTiles(el);
}

/* ========================================================= RENDER: HOME — PARTNER STORE PREVIEW */
function storeCardHTML(s){
  return `
    <a class="store-card" href="#/store/${s.id}">
      <div class="store-cover">${storeLogoHTML(s)}</div>
      <div class="store-card-body">
        <h3>${s.name}</h3>
        <div class="store-specialty">${s.specialty}</div>
        <p class="store-desc">${s.desc}</p>
        <div class="store-card-actions">
          <span class="store-view">Visit store
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>
    </a>`;
}

function renderStorePreview(){
  const el = document.getElementById("storePreviewGrid");
  const picks = STORES.slice(0, 4);
  el.innerHTML = picks.map(storeCardHTML).join("");
}

/* ========================================================= RENDER: MEET OUR PARTNER STORES (full directory) */
function renderStores(){
  const el = document.getElementById("storeGrid");
  el.innerHTML = STORES.map(storeCardHTML).join("");
}

/* ========================================================= RENDER: NEW PARTNERS */
function renderNewPartners(){
  const el = document.getElementById("newPartnersGrid");
  const newOnes = STORES.filter(s => s.isNew);
  if (!newOnes.length){
    el.innerHTML = `<div class="empty-state">No new partners to announce just yet — this space is ready to go the moment a new seller joins.</div>`;
    return;
  }
  el.innerHTML = newOnes.map(storeCardHTML).join("");
}

/* ========================================================= RENDER: DEDICATED STORE PAGE
   Store-specific menu (only THIS store's products) + the store's own
   story/history, shown automatically — no separate "Read Their Story" click. */
function renderStorePage(storeId){
  const store = storeById(storeId);
  if (!store) return;

  const bannerMedia = document.getElementById("storePageBannerMedia");
  if (store.image){
    bannerMedia.style.backgroundImage = `url("${escapeAttr(store.image)}")`;
    bannerMedia.classList.add("has-photo");
  } else {
    bannerMedia.style.backgroundImage = "";
    bannerMedia.classList.remove("has-photo");
  }

  document.getElementById("storePageLogo").innerHTML = storeLogoHTML(store);
  document.getElementById("storePageSpecialty").textContent = store.specialty;
  document.getElementById("storePageName").textContent = store.name;
  document.getElementById("storePageTagline").textContent = store.desc;
  document.getElementById("storePageOrderBtn").href = MESSENGER_LINK;
  document.getElementById("storePageMenuHeading").textContent = `${store.name}'s Menu`;

  document.getElementById("storePageStory").innerHTML = `<p>${store.history}</p>`;

  const products = PRODUCTS.filter(p => p.store === storeId);
  const grid = document.getElementById("storePageGrid");
  if (!products.length){
    grid.innerHTML = `<div class="empty-state">This store hasn't listed any dishes yet — check back soon.</div>`;
  } else {
    grid.innerHTML = products.map(p => productCardHTML(p, {hideStore:true})).join("");
    bindProductCards(grid);
  }
}

/* ========================================================= RENDER: ABOUT MALABON */
function renderAbout(){
  // emoji replaced by history.png image
  document.getElementById("aboutTitle").textContent = ABOUT_MALABON.title;
  document.getElementById("aboutText").innerHTML = ABOUT_MALABON.paragraphs
    .map(para => `<p>${para}</p>`).join("");
}

/* ========================================================= RENDER: FAQ */
function renderFAQ(){
  const el = document.getElementById("faqList");
  el.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item">
      <button class="faq-q" data-i="${i}">
        <span>${f.q}</span>
        <svg class="faq-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");
  el.querySelectorAll(".faq-q").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btn.parentElement.classList.toggle("open");
    });
  });
}

/* ========================================================= RENDER: MFC EVENTS */
function renderEvents(){
  const el = document.getElementById("eventsGrid");
  if (!EVENTS.length){
    el.innerHTML = `<div class="empty-state">No events posted yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = EVENTS.map(ev => `
    <div class="event-card">
      <div class="event-emoji">${ev.emoji}</div>
      <div class="event-body">
        <span class="event-date">${ev.date}</span>
        <h3>${ev.title}</h3>
        <p class="event-excerpt">${ev.excerpt}</p>
        <button class="event-read" data-id="${ev.id}">Read write-up
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  `).join("");
  el.querySelectorAll(".event-read").forEach(btn=>{
    btn.addEventListener("click", ()=> openEventModal(btn.dataset.id));
  });
}
function openEventModal(id){
  const ev = EVENTS.find(e=>e.id===id);
  if (!ev) return;
  lastFocusedEl = document.activeElement;
  document.getElementById("eventModalEmoji").textContent = ev.emoji;
  document.getElementById("eventModalDate").textContent = ev.date;
  document.getElementById("eventModalTitle").textContent = ev.title;
  document.getElementById("eventModalBody").textContent = ev.body;
  const overlay = document.getElementById("eventModalOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("eventModalCloseBtn").focus();
}
function closeEventModal(){
  document.getElementById("eventModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}
document.getElementById("eventModalCloseBtn").addEventListener("click", closeEventModal);
document.getElementById("eventModalOverlay").addEventListener("click", e=>{
  if (e.target.id === "eventModalOverlay") closeEventModal();
});
document.addEventListener("keydown", e=>{
  if (e.key === "Escape" && document.getElementById("eventModalOverlay").classList.contains("open")) closeEventModal();
});

/* ========================================================= RENDER: CUSTOMER REVIEWS */
function renderReviews(){
  const el = document.getElementById("reviewsGrid");
  if (!REVIEWS.length){
    el.innerHTML = `<div class="empty-state">No reviews posted yet — check back soon.</div>`;
    return;
  }
  el.innerHTML = REVIEWS.map(r => {
    const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
    const imgHTML = r.img
      ? `<div class="review-img"><img src="${r.img}" alt="Customer order photo" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`
      : "";
    return `
    <div class="review-card">
      ${imgHTML}
      <div class="review-stars">${stars}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-name">– ${r.name}</div>
    </div>`;
  }).join("");
}

/* ========================================================= RENDER: FEATURED ON / VLOGS
   Supports YouTube embeds, Facebook video embeds, and other media features.
   Videos play directly on the site whenever an embed is available; when no
   real URL/embed exists yet, a clearly-marked embed-ready placeholder is
   shown instead of a fake video. */
function youtubeId(url){
  const m = url && url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return m ? m[1] : null;
}

function featuredEmbedHTML(item){
  if (item.type === "youtube"){
    const id = youtubeId(item.url);
    return id
      ? `<iframe src="https://www.youtube.com/embed/${id}" title="${item.title}" frameborder="0" allowfullscreen loading="lazy"></iframe>`
      : `<a class="featured-fallback" href="${item.url}" target="_blank" rel="noopener">Watch on YouTube</a>`;
  }
  if (item.type === "facebook"){
    const encoded = encodeURIComponent(item.url);
    return `<iframe src="https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false" title="${item.title}" frameborder="0" allowfullscreen loading="lazy"></iframe>`;
  }

  // "other" media feature with a URL but no direct embed available
  return `<a class="featured-fallback" href="${item.url}" target="_blank" rel="noopener">View feature ↗</a>`;
}

function renderFeatured(){
  const el = document.getElementById("featuredGrid");
  if (!FEATURED_ON.length){
    el.innerHTML = `
      <div class="featured-card featured-placeholder">
        <div class="featured-embed featured-embed-placeholder">
          <span>🎬</span>
          <p>Embed-ready placeholder</p>
        </div>
        <div class="featured-body">
          <span class="featured-date">Coming soon</span>
          <h3>YouTube &amp; Facebook features will play right here</h3>
          <p class="featured-note">Once MFC's video features and vlogs are ready, they'll embed directly on this page — no redirect needed.</p>
        </div>
      </div>`;
    return;
  }
  el.innerHTML = FEATURED_ON.map(item => `
    <div class="featured-card">
      <div class="featured-embed">${featuredEmbedHTML(item)}</div>
      <div class="featured-body">
        <span class="featured-date">${item.date || ""}</span>
        <h3>${item.title}</h3>
      </div>
    </div>`).join("");
}

/* ========================================================= RENDER: CONTACT */
function renderContact(){
  document.getElementById("contactMessenger").href = CONTACT.messenger;
  document.getElementById("contactFacebook").textContent = CONTACT.facebook;
  document.getElementById("contactEmail").textContent = CONTACT.email;
}

/* ========================================================= PRODUCT MODAL */
function openModal(id){
  activeProduct = PRODUCTS.find(p => p.id === id);
  if (!activeProduct) return;
  galleryIndex = 0;
  lastFocusedEl = document.activeElement;

  const store = storeById(activeProduct.store);
  document.getElementById("modalStore").textContent = store.name;
  document.getElementById("modalName").textContent = "~ " + activeProduct.name;
  document.getElementById("modalCategory").textContent = CATEGORIES.find(c=>c.id===activeProduct.category).label;
  document.getElementById("modalDesc").textContent = activeProduct.description;
  document.getElementById("modalPhotoMain").style.background = photoBg(activeProduct.category);

  document.getElementById("resiboRows").innerHTML = activeProduct.pricing.map(row =>
    `<div class="resibo-row"><span>${row.label}</span><b>${row.price}</b></div>`
  ).join("");

  document.getElementById("orderBtn").href = MESSENGER_LINK;

  renderGallery();

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn").focus();
}

function renderGallery(){
  const photos = activeProduct.photos;
  const images = activeProduct.images;
  const mainEl = document.getElementById("modalPhotoEmoji");

  if (images && images.length){
    mainEl.innerHTML = imageTag(images[galleryIndex], activeProduct.name, "modal-photo-img");
  } else {
    mainEl.innerHTML = "";
    mainEl.textContent = photos[galleryIndex];
  }

  const count = productPhotoCount(activeProduct);
  const multi = count > 1;
  document.getElementById("galPrev").style.display = multi ? "flex" : "none";
  document.getElementById("galNext").style.display = multi ? "flex" : "none";

  const thumbsEl = document.getElementById("modalThumbs");
  if (!multi){ thumbsEl.innerHTML = ""; return; }
  if (images && images.length){
    thumbsEl.innerHTML = images.map((im, i) =>
      `<button class="thumb ${i===galleryIndex?'active':''}" data-i="${i}">${imageTag(im, activeProduct.name + " photo " + (i+1))}</button>`
    ).join("");
  } else {
    thumbsEl.innerHTML = photos.map((ph, i) =>
      `<button class="thumb ${i===galleryIndex?'active':''}" data-i="${i}">${ph}</button>`
    ).join("");
  }
  thumbsEl.querySelectorAll(".thumb").forEach(t=>{
    t.addEventListener("click", ()=>{ galleryIndex = parseInt(t.dataset.i,10); renderGallery(); });
  });
}

function closeModal(){
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e=>{
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", e=>{
  if (e.key === "Escape" && document.getElementById("modalOverlay").classList.contains("open")) closeModal();
  if (e.key === "ArrowLeft") stepGallery(-1);
  if (e.key === "ArrowRight") stepGallery(1);
});
function stepGallery(dir){
  if (!activeProduct || !document.getElementById("modalOverlay").classList.contains("open")) return;
  const len = productPhotoCount(activeProduct);
  if (len <= 1) return;
  galleryIndex = (galleryIndex + dir + len) % len;
  renderGallery();
}
document.getElementById("galPrev").addEventListener("click", ()=>stepGallery(-1));
document.getElementById("galNext").addEventListener("click", ()=>stepGallery(1));

/* ========================================================= SEARCH (Menu page) */
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
searchInput.addEventListener("input", ()=>{
  state.search = searchInput.value;
  searchClear.style.display = state.search ? "flex" : "none";

  renderGrid();
});
searchClear.addEventListener("click", ()=>{
  searchInput.value = ""; state.search = ""; searchClear.style.display = "none";
  renderGrid(); searchInput.focus();
});

/* Used by the "What We Offer" tiles on the homepage: jumps to the Menu
   page with a search query already applied, so results pull matching
   dishes from every partner store, not just one item. Menu-page search
   is the ONLY search entry point on the site — kept intentionally out
   of the homepage so there's just one place to look for it. */
function goToMenuSearch(query){
  state.search = query;
  state.category = "all";
  state.store = "all";

  location.hash = "#/menu";
  requestAnimationFrame(()=>{
    searchInput.value = query;
    searchClear.style.display = query ? "flex" : "none";
    document.getElementById("storeFilterSelect").value = "all";
    renderTabs();
    renderGrid();
    searchInput.focus();
  });
}

/* ========================================================= NAV (mobile) */
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");
const moreDropdown = document.getElementById("moreDropdown");
const moreToggle = document.getElementById("moreToggle");

burgerBtn.addEventListener("click", ()=> {
  navLinks.classList.toggle("mobile-open");
  if (!navLinks.classList.contains("mobile-open")) {
    moreDropdown.classList.remove("open");
    moreToggle.setAttribute("aria-expanded", "false");
  }
});

moreToggle.addEventListener("click", (event)=> {
  event.stopPropagation();
  const open = moreDropdown.classList.toggle("open");
  moreToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", ()=> {
  navLinks.classList.remove("mobile-open");
  moreDropdown.classList.remove("open");
  moreToggle.setAttribute("aria-expanded", "false");
}));

document.addEventListener("click", (event)=> {
  if (!moreDropdown.contains(event.target)) {
    moreDropdown.classList.remove("open");
    moreToggle.setAttribute("aria-expanded", "false");
  }
});

/* ========================================================= TOAST */
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove("show"), 2200);
}

/* ========================================================= INIT */
function init(){
  renderTabs();
  renderStoreFilterOptions();
  renderGrid();
  renderOfferPreview();
  renderStorePreview();
  renderStores();
  renderNewPartners();
  renderAbout();
  renderFAQ();
  renderEvents();
  renderReviews();
  renderFeatured();
  renderContact();
  router();
}
init();

/* ========================================================= PROMOTIONAL BANNER
   Demo setup for weekly/monthly promos. To update later, edit the PROMOS array
   below — the banner, CTA and date change together without touching the layout. */
const PROMOS = [
  {
    kicker: "WEEKEND SPECIAL",
    title: "Cravings worth sharing",
    text: "Enjoy selected local favorites with a special deal this weekend.",
    cta: "Browse Promo Items →",
    updated: "Updated Aug 23",
    sticker: "SPECIAL\nDEAL",
    href: "#/menu"
  },
  {
    kicker: "MONTHLY FEATURE",
    title: "Malabon favorites, all month long",
    text: "Discover featured dishes from local sellers and their current offers.",
    cta: "See Featured Dishes →",
    updated: "Updated Aug 23",
    sticker: "MONTHLY\nPICK",
    href: "#/menu"
  },
  {
    kicker: "LIMITED PROMO",
    title: "A little extra for your next order",
    text: "Check back from time to time — this space changes when a new promo is available.",
    cta: "Explore the Menu →",
    updated: "Updated Aug 23",
    sticker: "NEW\nPROMO",
    href: "#/menu"
  }
];

let promoIndex = 0;
function renderPromo(index){
  promoIndex = (index + PROMOS.length) % PROMOS.length;
  const promo = PROMOS[promoIndex];
  document.getElementById("promoKicker").textContent = promo.kicker;
  document.getElementById("promoTitle").textContent = promo.title;
  document.getElementById("promoText").textContent = promo.text;
  document.getElementById("promoCta").textContent = promo.cta;
  document.getElementById("promoCta").href = promo.href;
  document.getElementById("promoUpdated").textContent = promo.updated;
  document.getElementById("promoSticker").innerHTML = promo.sticker.replace("\\n", "<br>");

  document.getElementById("promoDots").innerHTML = PROMOS.map((_, i) =>
    `<button class="promo-dot ${i===promoIndex?'active':''}" data-promo="${i}" aria-label="Show promotion ${i+1}"></button>`
  ).join("");
  document.querySelectorAll(".promo-dot").forEach(dot => {
    dot.addEventListener("click", () => renderPromo(Number(dot.dataset.promo)));
  });

}

document.getElementById("promoPrev").addEventListener("click", () => renderPromo(promoIndex - 1));
document.getElementById("promoNext").addEventListener("click", () => renderPromo(promoIndex + 1));
renderPromo(0);

/* =========================================================
   CONTACT US WIDGET — MFC ORDER FORM -> MESSENGER
   ========================================================= */
const MFC_PAGE_ID = "101331155011408";

function getOrderMessage(){
  const fbName = document.getElementById("cwFbName").value.trim();
  const name = document.getElementById("cwName").value.trim();
  const address = document.getElementById("cwAddress").value.trim();
  const pin = document.getElementById("cwPin").value.trim();
  const contact = document.getElementById("cwContact").value.trim();
  const payment = document.getElementById("cwPayment").value;
  const dateRaw = document.getElementById("cwDate").value;
  const time = document.getElementById("cwTime").value.trim();
  const deliveryOption = document.getElementById("cwDeliveryOption").value;
  const orders = document.getElementById("cwOrders").value.trim();

  let deliveryDate = dateRaw;
  if (dateRaw) {
    const d = new Date(`${dateRaw}T00:00:00`);
    deliveryDate = d.toLocaleDateString("en-PH", {
      month: "long", day: "numeric", year: "numeric"
    });
  }

  return `Hello, Malabon Food Cravings! I would like to order:

Facebook/Instagram account name: ${fbName}
Name: ${name}
Complete address & landmark: ${address}
Pin location: ${pin || "N/A"}
Contact number: ${contact}
Mode of payment (GCash / Maya / UnionBank): ${payment}
Date of delivery: ${deliveryDate}
Delivery time (on drop-off): ${time}
Delivery option: ${deliveryOption}

Order list (please specify brand/flavor/quantity):
${orders}

Thank you!`;
}

function buildMessengerLink(message){
  // Try Messenger's text-prefill URL. If Messenger ignores the text,
  // the message is also copied to the clipboard before the chat opens.
  return `${MESSENGER_LINK}?text=${encodeURIComponent(message)}`;
}

async function copyOrderMessage(){
  const message = getOrderMessage();
  try {
    await navigator.clipboard.writeText(message);
    showToast("Order message copied! 💬");
    return true;
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = message;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast("Order message copied! Paste it in Messenger. 💬");
    return true;
  }
}

const cwFabBtn = document.getElementById("cwFabBtn");
const cwPanel = document.getElementById("cwPanel");
const cwCloseBtn = document.getElementById("cwCloseBtn");
const cwForm = document.getElementById("cwForm");
const cwTimestamp = document.getElementById("cwTimestamp");
const cwCopyBtn = document.getElementById("cwCopyBtn");

function cwOpen(){
  cwTimestamp.textContent = new Date().toLocaleTimeString("en-PH", { hour:"numeric", minute:"2-digit" });
  cwPanel.classList.add("open");
  cwFabBtn.classList.add("cw-hidden");
  cwFabBtn.setAttribute("aria-expanded", "true");
  setTimeout(()=> document.getElementById("cwFbName").focus(), 200);
}
function cwClose(){
  cwPanel.classList.remove("open");
  cwFabBtn.classList.remove("cw-hidden");
  cwFabBtn.setAttribute("aria-expanded", "false");
}
cwFabBtn.addEventListener("click", cwOpen);
cwCloseBtn.addEventListener("click", cwClose);
document.addEventListener("click",(e)=>{
  if (!cwPanel.classList.contains("open")) return;
  if (cwPanel.contains(e.target) || cwFabBtn.contains(e.target)) return;
  cwClose();
});
document.addEventListener("keydown",(e)=>{
  if (e.key === "Escape" && cwPanel.classList.contains("open")) cwClose();
});

cwCopyBtn.addEventListener("click", async ()=>{
  await copyOrderMessage();
});

cwForm.addEventListener("submit", async (e)=>{
  e.preventDefault();

  if (!cwForm.reportValidity()) return;

  const message = getOrderMessage();

  // Copy first as a guaranteed fallback, then open the direct MFC chat.
  await copyOrderMessage();

  const chatUrl = buildMessengerLink(message);
  window.open(chatUrl, "_blank", "noopener");

  showToast("MFC Messenger opened. If the message isn't prefilled, paste the copied order and Send. 💬");
});

// How to Order page — copy blank order form
const howCopyBtn = document.getElementById("howCopyBtn");
const howCopyStatus = document.getElementById("howCopyStatus");
if (howCopyBtn) {
  const blankOrderForm = `Hello, Malabon Food Cravings! I would like to order:\n\nFacebook/Instagram account name:\nName:\nComplete address & landmark:\nPin location:\nContact number:\nMode of payment (GCash / Maya / UnionBank):\nDate of delivery:\nDelivery time (on drop-off):\n\nOrders (please specify brand/flavor/quantity):\n\nThank you!`;
  howCopyBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(blankOrderForm); }
    catch (err) { const ta=document.createElement("textarea"); ta.value=blankOrderForm; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
    howCopyStatus.textContent = "Copied! Paste it in Messenger 💬";
    setTimeout(()=> howCopyStatus.textContent="", 3500);
  });
}
