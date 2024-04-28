const car_data = [
  {
    company: "Maruti Suzuki",
    models: [
      {
        model_name: "Alto 800",
        price: "300000",
      },
      {
        model_name: "Swift",
        price: "700000",
      },
      {
        model_name: "Baleno",
        price: "825000",
      },
      {
        model_name: "Dzire",
        price: "775000",
      },
      {
        model_name: "Vitara Brezza",
        price: "1050000",
      },
      {
        model_name: "Ertiga",
        price: "1000000",
      },
      {
        model_name: "S-Presso",
        price: "500000",
      },
      {
        model_name: "Wagon R",
        price: "650000",
      },
      {
        model_name: "Ignis",
        price: "675000",
      },
      {
        model_name: "Celerio",
        price: "525000",
      },
    ],
  },
  {
    company: "Hyundai",
    models: [
      {
        model_name: "Grand i10",
        price: "675000",
      },
      {
        model_name: "Creta",
        price: "1400000",
      },
      {
        model_name: "Verna",
        price: "1250000",
      },
      {
        model_name: "Venue",
        price: "950000",
      },
      {
        model_name: "i20",
        price: "850000",
      },
      {
        model_name: "Santro",
        price: "500000",
      },
      {
        model_name: "Aura",
        price: "825000",
      },
      {
        model_name: "Alcazar",
        price: "1500000",
      },
      {
        model_name: "Kona Electric",
        price: "2600000",
      },
      {
        model_name: "Tucson",
        price: "2400000",
      },
    ],
  },
  {
    company: "Tata",
    models: [
      {
        model_name: "Tiago",
        price: "625000",
      },
      {
        model_name: "Nexon",
        price: "950000",
      },
      {
        model_name: "Altroz",
        price: "800000",
      },
      {
        model_name: "Safari",
        price: "1850000",
      },
      {
        model_name: "Harrier",
        price: "2000000",
      },
      {
        model_name: "Tigor",
        price: "625000",
      },
      {
        model_name: "Punch",
        price: "750000",
      },
      {
        model_name: "Nexon EV",
        price: "1650000",
      },
      {
        model_name: "Tigor EV",
        price: "1250000",
      },
      {
        model_name: "Altroz EV",
        price: "1350000",
      },
    ],
  },
  {
    company: "Mahindra",
    models: [
      {
        model_name: "Scorpio",
        price: "1500000",
      },
      {
        model_name: "XUV500",
        price: "1800000",
      },
      {
        model_name: "Thar",
        price: "1400000",
      },
      {
        model_name: "Bolero",
        price: "950000",
      },
      {
        model_name: "XUV300",
        price: "1050000",
      },
      {
        model_name: "Marazzo",
        price: "1250000",
      },
      {
        model_name: "KUV100 NXT",
        price: "725000",
      },
      {
        model_name: "TUV300",
        price: "1150000",
      },
      {
        model_name: "Bolero Neo",
        price: "925000",
      },
      {
        model_name: "XUV700",
        price: "1900000",
      },
    ],
  },
  {
    company: "Kia",
    models: [
      {
        model_name: "Seltos",
        price: "1400000",
      },
      {
        model_name: "Sonet",
        price: "1000000",
      },
      {
        model_name: "Carnival",
        price: "3300000",
      },
      {
        model_name: "Seltos EV",
        price: "2150000",
      },
      {
        model_name: "Carens",
        price: "1300000",
      },
      {
        model_name: "Soul EV",
        price: "1850000",
      },
      {
        model_name: "Niro EV",
        price: "1800000",
      },
      {
        model_name: "Stinger",
        price: "5500000",
      },
      {
        model_name: "Sportage",
        price: "2750000",
      },
      {
        model_name: "Telluride",
        price: "3750000",
      },
    ],
  },
  {
    company: "Honda",
    models: [
      {
        model_name: "City",
        price: "1300000",
      },
      {
        model_name: "Amaze",
        price: "825000",
      },
      {
        model_name: "WR-V",
        price: "1000000",
      },
      {
        model_name: "Jazz",
        price: "825000",
      },
      {
        model_name: "Civic",
        price: "2000000",
      },
      {
        model_name: "CR-V",
        price: "3250000",
      },
      {
        model_name: "HR-V",
        price: "1750000",
      },
      {
        model_name: "Brio",
        price: "600000",
      },
      {
        model_name: "BR-V",
        price: "1250000",
      },
      {
        model_name: "Accord Hybrid",
        price: "4750000",
      },
    ],
  },
  {
    company: "Toyota",
    models: [
      {
        model_name: "Innova Crysta",
        price: "1900000",
      },
      {
        model_name: "Fortuner",
        price: "3500000",
      },
      {
        model_name: "Glanza",
        price: "800000",
      },
      {
        model_name: "Urban Cruiser",
        price: "1050000",
      },
      {
        model_name: "Camry",
        price: "4250000",
      },
      {
        model_name: "Yaris",
        price: "1150000",
      },
      {
        model_name: "Corolla Altis",
        price: "2000000",
      },
      {
        model_name: "Vellfire",
        price: "8750000",
      },
      {
        model_name: "Land Cruiser",
        price: "8750000",
      },
      {
        model_name: "GR Yaris",
        price: "3250000",
      },
    ],
  },
  {
    company: "Ford",
    models: [
      {
        model_name: "EcoSport",
        price: "1000000",
      },
      {
        model_name: "Figo",
        price: "700000",
      },
      {
        model_name: "Endeavour",
        price: "3600000",
      },
      {
        model_name: "Aspire",
        price: "800000",
      },
      {
        model_name: "Freestyle",
        price: "800000",
      },
      {
        model_name: "Mustang",
        price: "7750000",
      },
      {
        model_name: "Territory",
        price: "1350000",
      },
      {
        model_name: "Escape",
        price: "2250000",
      },
      {
        model_name: "Mondeo",
        price: "3250000",
      },
      {
        model_name: "Edge",
        price: "5250000",
      },
    ],
  },
  {
    company: "Volkswagen",
    models: [
      {
        model_name: "Polo",
        price: "750000",
      },
      {
        model_name: "Vento",
        price: "1150000",
      },
      {
        model_name: "Tiguan",
        price: "3250000",
      },
      {
        model_name: "Taigun",
        price: "1450000",
      },
      {
        model_name: "T-Roc",
        price: "2250000",
      },
      {
        model_name: "Touareg",
        price: "8500000",
      },
      {
        model_name: "Amarok",
        price: "5250000",
      },
      {
        model_name: "Arteon",
        price: "4250000",
      },
      {
        model_name: "Jetta",
        price: "2250000",
      },
      {
        model_name: "ID.4",
        price: "4250000",
      },
    ],
  },
  {
    company: "Renault",
    models: [
      {
        model_name: "Kwid",
        price: "500000",
      },
      {
        model_name: "Duster",
        price: "1200000",
      },
      {
        model_name: "Triber",
        price: "750000",
      },
      {
        model_name: "Kiger",
        price: "800000",
      },
      {
        model_name: "Captur",
        price: "1200000",
      },
      {
        model_name: "Lodgy",
        price: "1050000",
      },
      {
        model_name: "Fluence",
        price: "1750000",
      },
      {
        model_name: "Scala",
        price: "1000000",
      },
      {
        model_name: "Pulse",
        price: "650000",
      },
      {
        model_name: "Wind",
        price: "750000",
      },
    ],
  },
  {
    company: "Nissan",
    models: [
      {
        model_name: "Magnite",
        price: "650000",
      },
      {
        model_name: "Kicks",
        price: "1250000",
      },
      {
        model_name: "GT-R",
        price: "20000000",
      },
      {
        model_name: "Micra",
        price: "800000",
      },
      {
        model_name: "Sunny",
        price: "850000",
      },
      {
        model_name: "Terra",
        price: "2250000",
      },
      {
        model_name: "X-Trail",
        price: "3250000",
      },
      {
        model_name: "Patrol",
        price: "20000000",
      },
      {
        model_name: "Navara",
        price: "2250000",
      },
      {
        model_name: "Juke",
        price: "1750000",
      },
    ],
  },
  {
    company: "Skoda",
    models: [
      {
        model_name: "Rapid",
        price: "1000000",
      },
      {
        model_name: "Octavia",
        price: "1850000",
      },
      {
        model_name: "Kushaq",
        price: "1350000",
      },
      {
        model_name: "Superb",
        price: "2850000",
      },
      {
        model_name: "Kodiaq",
        price: "3750000",
      },
      {
        model_name: "Karoq",
        price: "2750000",
      },
      {
        model_name: "Enyaq iV",
        price: "3750000",
      },
      {
        model_name: "Yeti",
        price: "2750000",
      },
      {
        model_name: "Citigo",
        price: "750000",
      },
      {
        model_name: "Scala",
        price: "1250000",
      },
    ],
  },
  {
    company: "MG",
    models: [
      {
        model_name: "Hector",
        price: "1800000",
      },
      {
        model_name: "ZS EV",
        price: "2250000",
      },
      {
        model_name: "Gloster",
        price: "3250000",
      },
      {
        model_name: "Astor",
        price: "1250000",
      },
      {
        model_name: "G10",
        price: "3250000",
      },
      {
        model_name: "Baojun 530",
        price: "1250000",
      },
      {
        model_name: "Hector Plus",
        price: "2100000",
      },
      {
        model_name: "Marvel R Electric",
        price: "3750000",
      },
      {
        model_name: "Marvel X",
        price: "4250000",
      },
      {
        model_name: "RX5",
        price: "1750000",
      },
    ],
  },
  {
    company: "Jeep",
    models: [
      {
        model_name: "Compass",
        price: "2250000",
      },
      {
        model_name: "Wrangler",
        price: "7250000",
      },
      {
        model_name: "Grand Cherokee",
        price: "8000000",
      },
      {
        model_name: "Renegade",
        price: "1250000",
      },
      {
        model_name: "Gladiator",
        price: "4250000",
      },
      {
        model_name: "Grand Commander",
        price: "4250000",
      },
      {
        model_name: "Patriot",
        price: "3750000",
      },
      {
        model_name: "Commander",
        price: "3750000",
      },
      {
        model_name: "Liberty",
        price: "2750000",
      },
      {
        model_name: "Grand Wagoneer",
        price: "11000000",
      },
    ],
  },
  {
    company: "BMW",
    models: [
      {
        model_name: "3 Series",
        price: "4600000",
      },
      {
        model_name: "5 Series",
        price: "6500000",
      },
      {
        model_name: "X1",
        price: "4250000",
      },
      {
        model_name: "X3",
        price: "6500000",
      },
      {
        model_name: "X5",
        price: "8500000",
      },
      {
        model_name: "7 Series",
        price: "13500000",
      },
      {
        model_name: "Z4",
        price: "9000000",
      },
      {
        model_name: "X4",
        price: "7500000",
      },
      {
        model_name: "8 Series",
        price: "15500000",
      },
      {
        model_name: "M3",
        price: "16500000",
      },
    ],
  },
];

const bike_data = [
  {
    company: "Hero",
    models: [
      {
        model_name: "Splendor Plus",
        price: "70000",
      },
      {
        model_name: "HF Deluxe",
        price: "60000",
      },
      {
        model_name: "Passion Pro",
        price: "75000",
      },
      {
        model_name: "Glamour",
        price: "80000",
      },
      {
        model_name: "Xtreme 160R",
        price: "100000",
      },
      {
        model_name: "Xpulse 200",
        price: "120000",
      },
      {
        model_name: "Super Splendor",
        price: "75000",
      },
      {
        model_name: "Maestro Edge",
        price: "80000",
      },
      {
        model_name: "Pleasure Plus",
        price: "65000",
      },
      {
        model_name: "Destini 125",
        price: "70000",
      },
    ],
  },
  {
    company: "Bajaj",
    models: [
      {
        model_name: "Pulsar 150",
        price: "90000",
      },
      {
        model_name: "Pulsar NS200",
        price: "120000",
      },
      {
        model_name: "Dominar 400",
        price: "200000",
      },
      {
        model_name: "CT 100",
        price: "50000",
      },
      {
        model_name: "Platina 100",
        price: "55000",
      },
      {
        model_name: "Avenger Cruise 220",
        price: "120000",
      },
      {
        model_name: "Avenger Street 160",
        price: "100000",
      },
      {
        model_name: "Discover 125",
        price: "65000",
      },
      {
        model_name: "Chetak Electric",
        price: "150000",
      },
    ],
  },
  {
    company: "TVS",
    models: [
      {
        model_name: "Apache RTR 160",
        price: "95000",
      },
      {
        model_name: "Apache RTR 200",
        price: "110000",
      },
      {
        model_name: "Jupiter",
        price: "75000",
      },
      {
        model_name: "NTorq 125",
        price: "85000",
      },
      {
        model_name: "Radeon",
        price: "60000",
      },
      {
        model_name: "Star City Plus",
        price: "70000",
      },
      {
        model_name: "XL100",
        price: "50000",
      },
      {
        model_name: "Scooty Pep Plus",
        price: "55000",
      },
      {
        model_name: "Victor",
        price: "80000",
      },
      {
        model_name: "Zeppelin",
        price: "130000",
      },
    ],
  },
  {
    company: "Honda",
    models: [
      {
        model_name: "Activa 6G",
        price: "80000",
      },
      {
        model_name: "CB Shine",
        price: "75000",
      },
      {
        model_name: "SP 125",
        price: "85000",
      },
      {
        model_name: "Unicorn",
        price: "95000",
      },
      {
        model_name: "Hornet 2.0",
        price: "120000",
      },
      {
        model_name: "Dio",
        price: "70000",
      },
      {
        model_name: "Livo",
        price: "70000",
      },
      {
        model_name: "Grazia",
        price: "85000",
      },
      {
        model_name: "X-Blade",
        price: "90000",
      },
      {
        model_name: "CB500X",
        price: "500000",
      },
    ],
  },
  {
    company: "Yamaha",
    models: [
      {
        model_name: "FZS-FI",
        price: "100000",
      },
      {
        model_name: "R15 V3",
        price: "160000",
      },
      {
        model_name: "FZ25",
        price: "130000",
      },
      {
        model_name: "MT-15",
        price: "140000",
      },
      {
        model_name: "Fascino",
        price: "70000",
      },
      {
        model_name: "RayZR 125",
        price: "75000",
      },
      {
        model_name: "Saluto RX",
        price: "60000",
      },
      {
        model_name: "SZ-RR",
        price: "85000",
      },
      {
        model_name: "Aerox 155",
        price: "120000",
      },
    ],
  },
  {
    company: "Suzuki",
    models: [
      {
        model_name: "Access 125",
        price: "80000",
      },
      {
        model_name: "Burgman Street 125",
        price: "90000",
      },
      {
        model_name: "Gixxer SF",
        price: "110000",
      },
      {
        model_name: "Gixxer",
        price: "100000",
      },
      {
        model_name: "Intruder",
        price: "120000",
      },
      {
        model_name: "Hayate",
        price: "60000",
      },
      {
        model_name: "V-Strom 650XT",
        price: "600000",
      },
      {
        model_name: "GSX-S750",
        price: "800000",
      },
      {
        model_name: "GSX-R1000",
        price: "2000000",
      },
    ],
  },
  {
    company: "Royal Enfield",
    models: [
      {
        model_name: "Classic 350",
        price: "180000",
      },
      {
        model_name: "Bullet 350",
        price: "160000",
      },
      {
        model_name: "Meteor 350",
        price: "190000",
      },
      {
        model_name: "Himalayan",
        price: "220000",
      },
      {
        model_name: "Continental GT 650",
        price: "280000",
      },
      {
        model_name: "Interceptor 650",
        price: "270000",
      },
      {
        model_name: "Bullet 500",
        price: "170000",
      },
      {
        model_name: "Thunderbird 350",
        price: "175000",
      },
      {
        model_name: "Classic 500",
        price: "190000",
      },
    ],
  },
  {
    company: "Kawasaki",
    models: [
      {
        model_name: "Ninja 300",
        price: "300000",
      },
      {
        model_name: "Z650",
        price: "600000",
      },
      {
        model_name: "Ninja 650",
        price: "650000",
      },
      {
        model_name: "Versys 650",
        price: "700000",
      },
      {
        model_name: "Z900",
        price: "900000",
      },
      {
        model_name: "Vulcan S",
        price: "750000",
      },
      {
        model_name: "Ninja 1000SX",
        price: "1200000",
      },
      {
        model_name: "Versys 1000",
        price: "1400000",
      },
      {
        model_name: "Z H2",
        price: "2500000",
      },
    ],
  },
  {
    company: "Harley-Davidson",
    models: [
      {
        model_name: "Street 750",
        price: "500000",
      },
      {
        model_name: "Iron 883",
        price: "1000000",
      },
      {
        model_name: "Forty-Eight",
        price: "1100000",
      },
      {
        model_name: "Fat Bob",
        price: "1500000",
      },
      {
        model_name: "Fat Boy",
        price: "2000000",
      },
      {
        model_name: "Street Rod",
        price: "800000",
      },
      {
        model_name: "Roadster",
        price: "900000",
      },
      {
        model_name: "Pan America",
        price: "1700000",
      },
      {
        model_name: "LiveWire",
        price: "2500000",
      },
    ],
  },
];

export { car_data, bike_data };
