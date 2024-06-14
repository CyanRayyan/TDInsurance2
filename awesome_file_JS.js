const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        mass: 1.008,
        reactivity: "7/10",
        state: "Gas",
        meltingPoint: -259.1,
        boilingPoint: -252.9,
        description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe."
    },
    {
        name: "Helium",
        symbol: "He",
        number: 2,
        mass: 4.0026,
        reactivity: "0/10",
        state: "Gas",
        meltingPoint: -272,
        boilingPoint: -268.9,
        description: "Helium is a colorless, odorless, tasteless, inert gas that heads the noble gas series in the periodic table."
    },
    {
        name: "Lithium",
        symbol: "Li",
        number: 3,
        mass: 6.94,
        reactivity: "8/10",
        state: "Solid",
        meltingPoint: 180.5,
        boilingPoint: 1342,
        description: "Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element."
    },
    {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        mass: 9.0122,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1287,
        boilingPoint: 2471,
        description: "Beryllium is a steel-gray, strong, lightweight and brittle alkaline earth metal."
    },
    {
        name: "Boron",
        symbol: "B",
        number: 5,
        mass: 10.81,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 2075,
        boilingPoint: 4000,
        description: "Boron is a metalloid that is essential for plant growth, and is used in glass and ceramics."
    },
    {
        name: "Carbon",
        symbol: "C",
        number: 6,
        mass: 12.011,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 3550,
        boilingPoint: 4827,
        description: "Carbon is a nonmetal that is the basis of organic chemistry and is found in all living organisms."
    },
    {
        name: "Nitrogen",
        symbol: "N",
        number: 7,
        mass: 14.007,
        reactivity: "1/10",
        state: "Gas",
        meltingPoint: -210.1,
        boilingPoint: -195.8,
        description: "Nitrogen is a colorless, odorless gas that makes up 78% of the Earth's atmosphere and is a component of all proteins."
    },
    {
        name: "Oxygen",
        symbol: "O",
        number: 8,
        mass: 15.999,
        reactivity: "10/10",
        state: "Gas",
        meltingPoint: -218.8,
        boilingPoint: -183.0,
        description: "Oxygen is a highly reactive nonmetal and an oxidizing agent that readily forms oxides with most elements."
    },
    {
        name: "Fluorine",
        symbol: "F",
        number: 9,
        mass: 18.998,
        reactivity: "10/10",
        state: "Gas",
        meltingPoint: -219.6,
        boilingPoint: -188.1,
        description: "Fluorine is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions."
    },
    {
        name: "Neon",
        symbol: "Ne",
        number: 10,
        mass: 20.180,
        reactivity: "0/10",
        state: "Gas",
        meltingPoint: -248.6,
        boilingPoint: -246.1,
        description: "Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air."
    },
    {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        mass: 22.989769,
        reactivity: "9/10",
        state: "Solid",
        meltingPoint: 97.72,
        boilingPoint: 883,
        description: "Sodium is a soft, silvery-white, highly reactive metal and is a member of the alkali metals within 'group 1'."
    },
   {
        name: "Magnesium",
        symbol: "Mg",
        number: 12,
        mass: 24.305,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 650,
        boilingPoint: 1091,
        description: "Magnesium is a shiny gray solid, used in many light-weight materials and is an essential element in biological systems."
    },
    {
        name: "Aluminium",
        symbol: "Al",
        number: 13,
        mass: 26.9815385,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 660.32,
        boilingPoint: 2519,
        description: "Aluminium is a silvery-white, soft, nonmagnetic, ductile metal in the boron group."
    },
    {
        name: "Silicon",
        symbol: "Si",
        number: 14,
        mass: 28.085,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1414,
        boilingPoint: 3265,
        description: "Silicon is a hard, brittle crystalline solid with a blue-grey metallic lustre; it is a tetravalent metalloid."
    },
   {
        name: "Phosphorus",
        symbol: "P",
        number: 15,
        mass: 30.973762,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 44.15,
        boilingPoint: 280.5,
        description: "Phosphorus is a multivalent nonmetal of the nitrogen group. It is found in nature in various compounds."
    },
    {
        name: "Sulfur",
        symbol: "S",
        number: 16,
        mass: 32.06,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 115.21,
        boilingPoint: 444.6,
        description: "Sulfur is a multivalent non-metal, abundant, tasteless, and odorless."
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        number: 17,
        mass: 35.45,
        reactivity: "10/10",
        state: "Gas",
        meltingPoint: -101.5,
        boilingPoint: -34.04,
        description: "Chlorine is a yellow-green gas under standard conditions, where it forms diatomic molecules."
    },
    {
        name: "Argon",
        symbol: "Ar",
        number: 18,
        mass: 39.948,
        reactivity: "0/10",
        state: "Gas",
        meltingPoint: -189.3,
        boilingPoint: -185.8,
        description: "Argon is a colorless, odorless, tasteless, non-toxic inert monatomic gas."
    },
    {
        name: "Potassium",
        symbol: "K",
        number: 19,
        mass: 39.0983,
        reactivity: "10/10",
        state: "Solid",
        meltingPoint: 63.5,
        boilingPoint: 759,
        description: "Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force."
    },
    {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        mass: 40.078,
        reactivity: "8/10",
        state: "Solid",
        meltingPoint: 842,
        boilingPoint: 1484,
        description: "Calcium is a soft gray alkaline earth metal, fifth most abundant element in the Earth's crust."
    },
    {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        mass: 44.955908,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1541,
        boilingPoint: 2830,
        description: "Scandium is a silvery-white metallic element, used in various industrial applications."
    },
    {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        mass: 47.867,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1668,
        boilingPoint: 3287,
        description: "Titanium is a lustrous transition metal with a silver color, low density, and high strength."
    },
    {
        name: "Vanadium",
        symbol: "V",
        number: 23,
        mass: 50.9415,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1910,
        boilingPoint: 3407,
        description: "Vanadium is a hard, silvery-grey, ductile, and malleable transition metal."
    },
    {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        mass: 51.9961,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1907,
        boilingPoint: 2671,
        description: "Chromium is a steely-grey, lustrous, hard, and brittle transition metal."
    },
    {
        name: "Manganese",
        symbol: "Mn",
        number: 25,
        mass: 54.938044,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1246,
        boilingPoint: 2061,
        description: "Manganese is a transition metal with important industrial alloy uses, particularly in stainless steels."
    },
    {
        name: "Iron",
        symbol: "Fe",
        number: 26,
        mass: 55.845,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1538,
        boilingPoint: 2862,
        description: "Iron is a metal in the first transition series. It is by mass the most common element on Earth."
    },
    {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        mass: 58.933194,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1495,
        boilingPoint: 2927,
        description: "Cobalt is a hard, lustrous, silver-gray metal, used in batteries and magnetic materials."
    },

    {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        mass: 58.6934,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1455,
        boilingPoint: 2730,
        description: "Nickel is a silvery-white lustrous metal with a slight golden tinge, used in many industrial applications."
    },
    {
        name: "Copper",
        symbol: "Cu",
        number: 29,
        mass: 63.546,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 1084.62,
        boilingPoint: 2562,
        description: "Copper is a soft, malleable, and ductile metal with very high thermal and electrical conductivity."
    },
    {
        name: "Zinc",
        symbol: "Zn",
        number: 30,
        mass: 65.38,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 419.53,
        boilingPoint: 907,
        description: "Zinc is a slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed."
    },
    {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        mass: 69.723,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 29.76,
        boilingPoint: 2204,
        description: "Gallium is a soft, silvery-blue metal, and elemental gallium is a liquid at temperatures greater than 29.76°C."
    },
    {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        mass: 72.63,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 938.25,
        boilingPoint: 2820,
        description: "Germanium is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon."
    },
    {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        mass: 74.921595,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 817,
        boilingPoint: 614,
        description: "Arsenic is a metalloid, found in many minerals, usually combined with sulfur and metals, and also as a pure elemental crystal."
    },
    {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        mass: 78.971,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 221,
        boilingPoint: 685,
        description: "Selenium is a nonmetal, with properties that are intermediate between the elements above and below in the periodic table."
    },
    { 

       name: "Selenium",
        symbol: "Se",
        number: 34,
        mass: 78.971,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 221,
        boilingPoint: 685,
        description: "Selenium is a nonmetal, with properties that are intermediate between the elements above and below in the periodic table."
      },
      { 
        name: "Bromine",
        symbol: "Br",
        number: 35,
        mass: 79.904,
        reactivity: "10/10",
        state: "Liquid",
        meltingPoint: -7.2,
        boilingPoint: 58.8,
        description: "Bromine is a reddish-brown liquid that evaporates quickly. It’s used in flame retardants and some medicines."
      },
      {
     name: "Krypton",
        symbol: "Kr",
        number: 36,
        mass: 83.798,
        reactivity: "0/10",
        state: "Gas",
        meltingPoint: -157.4,
        boilingPoint: -153.4,
        description: "Krypton is a colorless, odorless gas that’s used in lighting and photography. It’s a noble gas, so it’s very unreactive."
  },
  {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        mass: 85.4678,
        reactivity: "10/10",
        state: "Solid",
        meltingPoint: 39.3,
        boilingPoint: 688,
        description: "Rubidium is a soft, silvery-white metal that’s highly reactive. It’s used in research and electronics."
    },
    {
        name: "Strontium",
        symbol: "Sr",
        number: 38,
        mass: 87.62,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 777,
        boilingPoint: 1377,
        description: "Strontium is a soft, silvery metal that’s used in fireworks to create bright red colors. It’s also used in some types of glass."
    },
    {
        name: "Yttrium",
        symbol: "Y",
        number: 39,
        mass: 88.90584,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1526,
        boilingPoint: 3338,
        description: "Yttrium is a silvery-metallic element used in superconductors, LEDs, and lasers. It’s also found in some types of ceramics."
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        mass: 91.224,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 1855,
        boilingPoint: 4409,
        description: "Zirconium is a hard, grayish metal that’s resistant to corrosion. It’s used in nuclear reactors and some types of jewelry."
    },
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        mass: 92.90637,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 2477,
        boilingPoint: 4744,
        description: "Niobium is a shiny, white metal that’s used to make strong steel alloys. It’s also used in superconducting magnets."
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        mass: 95.95,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 2623,
        boilingPoint: 4639,
        description: "Molybdenum is a hard, silvery metal that’s used to make steel stronger. It’s also essential for life as it helps enzymes function."
    },
    {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        mass: 98,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 2157,
        boilingPoint: 4265,
        description: "Technetium is a silvery-gray metal that’s radioactive. It’s used in medical imaging and research."
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        mass: 101.07,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 2334,
        boilingPoint: 4150,
        description: "Ruthenium is a rare, hard metal that’s used in electronics and as a catalyst in chemical reactions."
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        mass: 102.90550,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 1964,
        boilingPoint: 3695,
        description: "Rhodium is a shiny, silvery metal that’s used to coat jewelry and mirrors. It’s also used in catalytic converters."
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        mass: 106.42,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 1554.9,
        boilingPoint: 2963,
        description: "Palladium is a soft, silvery-white metal that’s used in electronics, dentistry, and catalytic converters."
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        mass: 107.8682,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 961.8,
        boilingPoint: 2162,
        description: "Silver is a shiny, white metal that’s highly conductive. It’s used in jewelry, electronics, and photography."
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        mass: 112.414,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 321.1,
        boilingPoint: 767,
        description: "Cadmium is a soft, bluish-white metal that’s used in batteries and pigments. It’s toxic and must be handled with care."
    },
    {
        name: "Indium",
        symbol: "In",
        number: 49,
        mass: 114.818,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 156.6,
        boilingPoint: 2072,
        description: "Indium is a soft, silvery metal that’s used in electronics and semiconductors. It’s very malleable and can be easily shaped."
    },
    {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        mass: 118.710,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 231.9,
        boilingPoint: 2602,
        description: "Tin is a soft, silvery metal that’s used to coat other metals to prevent corrosion. It’s also used in alloys like bronze."
    },
    {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        mass: 121.760,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 630.6,
        boilingPoint: 1587,
        description: "Antimony is a brittle, silvery metalloid that’s used in flame retardants, batteries, and some types of glass."
    },
    {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        mass: 127.60,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 449.5,
        boilingPoint: 988,
        description: "Tellurium is a brittle, silvery-white metalloid that’s used in electronics and alloys to improve their strength and durability."
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        mass: 126.90447,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 113.7,
        boilingPoint: 184.3,
        description: "Iodine is a shiny, black non-metal that’s used in medicine and as a disinfectant. It turns purple when it’s heated."
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        mass: 131.293,
        reactivity: "1/10",
        state: "Gas",
        meltingPoint: -111.8,
        boilingPoint: -108.1,
        description: "Xenon is a colorless, odorless gas that’s used in lighting and anesthetics. It’s a noble gas and is very unreactive."
    },
    {
        name: "Cesium",
        symbol: "Cs",
        number: 55,
        mass: 132.90545196,
        reactivity: "10/10",
        state: "Solid",
        meltingPoint: 28.5,
        boilingPoint: 671,
        description: "Cesium is a soft, gold-colored metal that’s highly reactive. It’s used in atomic clocks and some types of electronics."
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        mass: 137.327,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 727,
        boilingPoint: 1845,
        description: "Barium is a soft, silvery metal that’s used in X-ray imaging and fireworks. It’s highly reactive and must be handled carefully."
    },
    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        mass: 138.90547,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 920,
        boilingPoint: 3464,
        description: "Lanthanum is a soft, silvery metal that’s used in camera lenses and lighting. It’s part of the lanthanide series of elements."
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        mass: 140.116,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 798,
        boilingPoint: 3443,
        description: "Cerium is a soft, silvery metal that’s used in catalytic converters and glass polishing. It’s the most abundant of the lanthanides."
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        mass: 140.90766,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 931,
        boilingPoint: 3520,
        description: "Praseodymium is a soft, silvery metal that’s used in magnets, lasers, and glass coloring. It’s one of the lanthanides."
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        mass: 144.242,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1024,
        boilingPoint: 3074,
        description: "Neodymium is a soft, silvery metal that’s used in powerful magnets and lasers. It’s part of the lanthanide series."
    },
    {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        mass: 145,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 1042,
        boilingPoint: 3000,
        description: "Promethium is a radioactive metal that glows in the dark. It's used in some types of batteries and luminous paints."
    },
    {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        mass: 150.36,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1072,
        boilingPoint: 1900,
        description: "Samarium is a silvery metal used in magnets and nuclear reactors. It’s also used in the treatment of cancer."
    },
    {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        mass: 151.964,
        reactivity: "8/10",
        state: "Solid",
        meltingPoint: 826,
        boilingPoint: 1529,
        description: "Europium is a soft, silvery metal that’s highly reactive. It’s used in TV screens and fluorescent lamps to create red and blue colors."
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        mass: 157.25,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1313,
        boilingPoint: 3273,
        description: "Gadolinium is a silvery-white metal used in MRI machines and as a contrast agent in medical imaging."
    },
    {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        mass: 158.92535,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 1356,
        boilingPoint: 3230,
        description: "Terbium is a silvery-gray metal used in solid-state devices and as a doping agent in semiconductors."
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        mass: 162.500,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1412,
        boilingPoint: 2562,
        description: "Dysprosium is a soft, bright silvery metal used in magnets and laser materials. It’s known for its high magnetic susceptibility."
    },
    {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        mass: 164.93033,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1474,
        boilingPoint: 2700,
        description: "Holmium is a soft, silvery metal that is highly magnetic. It’s used in magnets and some types of lasers."
    },
    {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        mass: 167.259,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1529,
        boilingPoint: 2868,
        description: "Erbium is a silvery-white metal used in fiber optics and some types of lasers. It’s known for its pink-colored salts."
    },
    {
        name: "Thulium",
        symbol: "Tm",
        number: 69,
        mass: 168.93422,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1545,
        boilingPoint: 1950,
        description: "Thulium is a soft, silvery metal that is used in portable X-ray devices and in some lasers."
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        mass: 173.045,
        reactivity: "5/10",
        state: "Solid",
        meltingPoint: 824,
        boilingPoint: 1196,
        description: "Ytterbium is a soft, silvery metal used in some lasers and nuclear medicine. It’s named after the Swedish village Ytterby."
    },
 {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        mass: 174.9668,
        reactivity: "4/10",
        state: "Solid",
        meltingPoint: 1652,
        boilingPoint: 3402,
        description: "Lutetium is a silvery-white metal used in some types of medical imaging and as a catalyst in petroleum refining."
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        mass: 178.49,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 2233,
        boilingPoint: 4602,
        description: "Hafnium is a shiny, silvery metal used in nuclear reactors and as an alloying agent. It’s very resistant to corrosion."
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        mass: 180.94788,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 3017,
        boilingPoint: 5458,
        description: "Tantalum is a hard, blue-gray metal used in electronics and surgical implants. It’s highly resistant to corrosion."
    },
    {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        mass: 183.84,
        reactivity: "1/10",
        state: "Solid",
        meltingPoint: 3422,
        boilingPoint: 5555,
        description: "Tungsten is a very hard, dense metal used in light bulb filaments and cutting tools. It has the highest melting point of any metal."
    },
    {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        mass: 186.207,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 3186,
        boilingPoint: 5596,
        description: "Rhenium is a dense, silvery-white metal used in high-temperature superalloys and jet engines. It’s very resistant to heat and wear."
    },
    {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        mass: 190.23,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 3033,
        boilingPoint: 5012,
        description: "Osmium is a very dense, bluish-white metal used in fountain pen tips and electrical contacts. It’s the densest naturally occurring element."
    },
    {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        mass: 192.217,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 2446,
        boilingPoint: 4130,
        description: "Iridium is a dense, silvery-white metal used in spark plugs and jewelry. It’s the most corrosion-resistant metal."
    },
    {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        mass: 195.084,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 1768.3,
        boilingPoint: 3825,
        description: "Platinum is a dense, malleable metal used in jewelry, catalytic converters, and laboratory equipment. It’s very resistant to corrosion."
    },
    {
        name: "Gold",
        symbol: "Au",
        number: 79,
        mass: 196.966569,
        reactivity: "2/10",
        state: "Solid",
        meltingPoint: 1064,
        boilingPoint: 2970,
        description: "Gold is a bright, yellow metal used in jewelry, electronics, and as a form of currency. It’s very malleable and ductile."
    },
    {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        mass: 200.592,
        reactivity: "4/10",
        state: "Liquid",
        meltingPoint: -38.83,
        boilingPoint: 356.7,
        description: "Mercury is a silvery liquid metal used in thermometers, barometers, and fluorescent lights. It’s the only metal that is liquid at room temperature."
    },
    {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        mass: 204.38,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 304,
        boilingPoint: 1473,
        description: "Thallium is a soft, gray metal used in electronics, glass manufacturing, and as a rat poison. It’s highly toxic."
    },
    {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        mass: 207.2,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 327.5,
        boilingPoint: 1749,
        description: "Lead is a heavy, soft metal used in batteries, radiation shielding, and some types of paint. It’s highly toxic if ingested."
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        mass: 208.98040,
        reactivity: "3/10",
        state: "Solid",
        meltingPoint: 271.4,
        boilingPoint: 1564,
        description: "Bismuth is a brittle, silvery metal with a pink tinge, used in cosmetics, pharmaceuticals, and low-melting alloys."
    },
    {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        mass: 209,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 254,
        boilingPoint: 962,
        description: "Polonium is a rare, highly radioactive metal used in nuclear batteries and as a heat source in space satellites."
    },
    {
        name: "Astatine",
        symbol: "At",
        number: 85,
        mass: 210,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 302,
        boilingPoint: 337,
        description: "Astatine is a very rare, highly radioactive element used in cancer treatment and as a tracer in medical studies."
    },
    {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        mass: 222,
        reactivity: "5/10",
        state: "Gas",
        meltingPoint: -71,
        boilingPoint: -61.7,
        description: "Radon is a radioactive, colorless gas used in cancer treatment and to study ventilation systems. It’s produced from the decay of uranium."
    },
    {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        mass: 223,
        reactivity: "10/10",
        state: "Solid",
        meltingPoint: 27,
        boilingPoint: 677,
        description: "Francium is an extremely rare, highly radioactive metal used in research and experiments. It’s the second rarest naturally occurring element."
    },
    {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        mass: 226,
        reactivity: "9/10",
        state: "Solid",
        meltingPoint: 700,
        boilingPoint: 1737,
        description: "Radium is a radioactive, silvery-white metal used in cancer treatment and luminous paints. It was discovered by Marie and Pierre Curie."
    },
    {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        mass: 227,
        reactivity: "8/10",
        state: "Solid",
        meltingPoint: 1050,
        boilingPoint: 3198,
        description: "Actinium is a radioactive, silvery metal used in cancer treatment and as a neutron source. It was the first non-primordial radioactive element to be isolated."
    },
    {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        mass: 232.0377,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1750,
        boilingPoint: 4788,
        description: "Thorium is a radioactive, silvery metal used in high-temperature ceramics and as a potential nuclear fuel."
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        mass: 231.03588,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 1572,
        boilingPoint: 4000,
        description: "Protactinium is a dense, radioactive metal used in scientific research and to study the behavior of actinides."
    },
    {
        name: "Uranium",
        symbol: "U",
        number: 92,
        mass: 238.02891,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1132.3,
        boilingPoint: 4131,
        description: "Uranium is a dense, radioactive metal used as fuel in nuclear reactors and in the production of nuclear weapons."
    },
    {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        mass: 237,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 640,
        boilingPoint: 3902,
        description: "Neptunium is a radioactive, silvery metal used in scientific research and in some types of nuclear reactors."
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        mass: 244,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 640,
        boilingPoint: 3235,
        description: "Plutonium is a dense, radioactive metal used in nuclear weapons and as a fuel in some nuclear reactors."
    },
    {
        name: "Americium",
        symbol: "Am",
        number: 95,
        mass: 243,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1176,
        boilingPoint: 2607,
        description: "Americium is a radioactive, silvery metal used in smoke detectors and in neutron sources for industrial gauging."
    },
    {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        mass: 247,
        reactivity: "6/10",
        state: "Solid",
        meltingPoint: 1345,
        boilingPoint: 3110,
        description: "Curium is a dense, radioactive metal used in space missions and as a heat source in radioisotope thermoelectric generators."
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        mass: 247,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 986,
        boilingPoint: 2627,
        description: "Berkelium is a radioactive, silvery metal used in scientific research. It was first synthesized in 1949."
    },
    {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        mass: 251,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 900,
        boilingPoint: 1470,
        description: "Californium is a highly radioactive metal used in neutron sources for cancer treatment and in detecting gold and silver ores."
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        mass: 252,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 860,
        boilingPoint: 996,
        description: "Einsteinium is a highly radioactive metal used in scientific research. It was discovered in the debris of a hydrogen bomb explosion."
    },
    {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        mass: 257,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 1527,
        boilingPoint: null,
        description: "Fermium is a highly radioactive metal used in scientific research. It was discovered in the debris of a hydrogen bomb explosion."
    },
  {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        mass: 258,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 827,
        boilingPoint: null,
        description: "Mendelevium is a highly radioactive metal used in scientific research. It was first synthesized in 1955."
    },
    {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        mass: 259,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 827,
        boilingPoint: null,
        description: "Nobelium is a highly radioactive metal used in scientific research. It was first synthesized in 1966."
    },
  {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        mass: 262,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: 1627,
        boilingPoint: null,
        description: "Lawrencium is a highly radioactive metal used in scientific research. It was first synthesized in 1961."
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        mass: 267,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Rutherfordium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1964."
    },
    {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        mass: 270,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Dubnium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1967."
    },
 {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        mass: 271,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Seaborgium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1974."
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        number: 107,
        mass: 270,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Bohrium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1981."
    },
    {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        mass: 277,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Hassium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1984."
    },
  {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        mass: 277,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Hassium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1984."
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        mass: 278,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Meitnerium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1982."
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        number: 110,
        mass: 281,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Darmstadtium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1994."
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        mass: 282,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Roentgenium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1994."
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        mass: 285,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Copernicium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1996."
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        mass: 286,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Nihonium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 2003."
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        mass: 289,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Flerovium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 1998."
    },
  {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        mass: 290,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Moscovium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 2003."
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        mass: 293,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Livermorium is a synthetic, radioactive metal used in scientific research. It was first synthesized in 2000."
    },
 {
        name: "Tennessine",
        symbol: "Ts",
        number: 117,
        mass: 294,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Tennessine is a synthetic, radioactive metal used in scientific research. It was first synthesized in 2010."
    },
  {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        mass: 294,
        reactivity: "7/10",
        state: "Solid",
        meltingPoint: null,
        boilingPoint: null,
        description: "Oganesson is a synthetic, radioactive metal used in scientific research. It was first synthesized in 2002."
    },

  
];

// Function to display element details
function showDetails(element) {
    document.getElementById('element-name').textContent = element.name;
    document.getElementById('element-symbol').textContent = element.symbol;
    document.getElementById('element-number').textContent = element.number;
    document.getElementById('element-mass').textContent = element.mass;
    document.getElementById('element-reactivity').textContent = element.reactivity;
    document.getElementById('element-state').textContent = element.state;
    document.getElementById('element-melting-point').textContent = element.meltingPoint + ' °C';
    document.getElementById('element-boiling-point').textContent = element.boilingPoint + ' °C';
    document.getElementById('element-description').textContent = element.description;
    document.getElementById('element-details').classList.remove('hidden');
    document.getElementById('element-details').style.display = 'block';
}

// Function to close element details
function closeDetails() {
    document.getElementById('element-details').classList.add('hidden');
    document.getElementById('element-details').style.display = 'none';
}

// Function to create element tiles
function createElementTiles() {
    const periodicTable = document.getElementById('periodic-table');
    elements.forEach(element => {
        const elementTile = document.createElement('div');
        elementTile.className = 'element';
        elementTile.innerHTML = `
            <p class="symbol">${element.symbol}</p>
            <p class="name">${element.name}</p>
            <p class="number">${element.number}</p>
        `;
        elementTile.addEventListener('click', () => showDetails(element));
        periodicTable.appendChild(elementTile);
    });
}

// Initialize the periodic table
createElementTiles();