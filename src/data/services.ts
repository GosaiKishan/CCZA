export interface ServiceItem {
  id: string;
  name: string;
  category: "wash" | "detail" | "ceramic" | "ppf" | "specialty";
  iconName: string; // Map to dynamic lucide-react icon rendering
  subtitle: string;
  description: string;
  pricing: {
    type: "tiered" | "starting";
    tiers?: {
      small: string;
      medium: string;
      large: string;
    };
    startingFrom?: string;
  };
  duration: string;
  finish: string;
  warranty: string;
  idealFor: string;
  includes: string[];
}

export const categories = [
  { id: "all", name: "All Services" },
  { id: "wash", name: "Wash & Care" },
  { id: "detail", name: "Paint & Detailing" },
  { id: "ceramic", name: "Ceramic Coatings" },
  { id: "ppf", name: "PPF & Wraps" },
  { id: "specialty", name: "Specialty & Styling" }
] as const;

export const servicesData: ServiceItem[] = [
  {
    id: "maintenance-wash",
    name: "Maintenance Wash",
    category: "wash",
    iconName: "Droplets",
    subtitle: "Premium wash to keep your vehicle in pristine condition",
    description: "A professional maintenance wash designed to keep your vehicle in pristine condition between major detailing services. Features strict two-bucket wash methods to avoid paint marring.",
    pricing: {
      type: "tiered",
      tiers: {
        small: "R400",
        medium: "R550",
        large: "R700"
      }
    },
    duration: "1.5 - 2.5 Hours",
    finish: "Clean & dressed",
    warranty: "N/A",
    idealFor: "Regular maintenance between major detailing services. Perfect for keeping your car presentable week to week.",
    includes: [
      "Thorough exterior wash and dry",
      "Wheel cleaning & brake dust removal",
      "Tyre cleaning and dressing",
      "Interior vacuuming (mats, carpets & seats)",
      "Window and mirror cleaning inside & out",
      "Dashboard, console & door card wipe down",
      "Door jamb inspection and clean"
    ]
  },
  {
    id: "wash-wax",
    name: "Wash & Wax",
    category: "wash",
    iconName: "Sparkles",
    subtitle: "Thorough wash with premium gloss wax preservation",
    description: "Enhance your vehicle’s shine and protection with a thorough wash followed by the application of a premium-quality wax. Ideal for preserving paintwork and maintaining a lasting gloss finish.",
    pricing: {
      type: "tiered",
      tiers: {
        small: "R400",
        medium: "R550",
        large: "R700"
      }
    },
    duration: "2 - 3 Hours",
    finish: "Wax high gloss",
    warranty: "Up to 3 months protection",
    idealFor: "Preserving paintwork and maintaining a lasting gloss finish with active hydrophobic wax protection.",
    includes: [
      "Full foam pre-wash decontamination",
      "Hand wash using premium high-lubricity shampoo",
      "Hand application of high-grade carnauba or spray wax",
      "Wheel, tyre, and fender well deep clean",
      "Interior vacuuming & surface wipe down",
      "Glass polished to streak-free clarity"
    ]
  },
  {
    id: "engine-detail",
    name: "Engine Detail",
    category: "wash",
    iconName: "CarFront",
    subtitle: "Meticulous engine bay cleaning & component dressing",
    description: "A meticulous engine bay cleaning and dressing service that removes dirt, dust, and grime while restoring a clean, well-maintained appearance. All sensitive electrical parts are safely masked.",
    pricing: {
      type: "starting",
      startingFrom: "R450"
    },
    duration: "1.5 - 2 Hours",
    finish: "Factory satin dress",
    warranty: "N/A",
    idealFor: "Car enthusiasts, show presentations, or preparing a vehicle for sale to present a pristine under-bonnet look.",
    includes: [
      "Sensitive electronics and intake masking",
      "Low-pressure degreasing wash of engine bay surfaces",
      "Detailing brush cleaning of intricate components",
      "Infrared blow drying to eliminate moisture",
      "Premium heat-resistant component dressing"
    ]
  },
  {
    id: "leather-booster",
    name: "Leather Booster Treatment",
    category: "ceramic",
    iconName: "Brush",
    subtitle: "Deep cleaning and conditioning for leather surfaces",
    description: "Clean, condition, and protect leather surfaces to restore their natural appearance, improve suppleness, and help prevent premature wear and cracking. Features deep conditioning to feed the pores of natural leather.",
    pricing: {
      type: "starting",
      startingFrom: "R600"
    },
    duration: "2 - 3 Hours",
    finish: "Satin non-greasy feed",
    warranty: "6 months preservation",
    idealFor: "Vehicles with premium leather interior showing signs of dryness or light soil buildup. Keeps leather supple and fresh.",
    includes: [
      "pH-balanced deep leather pore clean",
      "Agitation with specialized ultra-soft horsehair detailing brushes",
      "Nourishing leather conditioner cream massage",
      "Matte surface buff (eliminates shiny, greasy residues)",
      "UV block infusion to prevent color fading & cracking"
    ]
  },
  {
    id: "windscreen-ceramic",
    name: "Windscreen Ceramic Coating",
    category: "ceramic",
    iconName: "ShieldCheck",
    subtitle: "Hydrophobic shield for extreme wet weather visibility",
    description: "Improve visibility and driving safety with a durable hydrophobic coating that repels water, dirt, and road contaminants for enhanced performance in all weather conditions. Wipers operate flawlessly without chatter.",
    pricing: {
      type: "starting",
      startingFrom: "R800"
    },
    duration: "1 - 2 Hours",
    finish: "Water-shearing clarity",
    warranty: "1 Year / 20,000 km",
    idealFor: "Enhancing safety and clear sightlines during heavy seasonal rainstorms. Water beads off the screen automatically.",
    includes: [
      "Mechanical glass decontamination to remove road film & mineral spots",
      "Glass polishing for absolute optical flat clarity",
      "Isopropyl alcohol preparation wipe down",
      "Application of dual-layer professional glass ceramic coating",
      "Controlled curation of the hydrophobic film"
    ]
  },
  {
    id: "headlight-restoration",
    name: "Headlight Restoration",
    category: "detail",
    iconName: "Sun",
    subtitle: "Eliminate oxidation, haziness, and yellowing",
    description: "Restore clarity by removing oxidation, haze, and discoloration from headlights, improving both appearance and nighttime visibility. Includes UV protection sealant to prevent premature re-yellowing.",
    pricing: {
      type: "starting",
      startingFrom: "R500"
    },
    duration: "1.5 - 2.5 Hours",
    finish: "Crystal clear glass look",
    warranty: "1 Year protection",
    idealFor: "Vehicles with hazy, yellowed or foggy headlights which degrade light spread and ruin the vehicle's appearance.",
    includes: [
      "Surrounding body paint multi-layer masking",
      "Wet sanding progression (800 to 3000 grit) to shave oxidation",
      "Heavy cut rotary compound polishing pass",
      "Refinement polish to restore perfect transparency",
      "Application of heavy UV blocking nano sealant"
    ]
  },
  {
    id: "interior-valet",
    name: "Interior Valet",
    category: "wash",
    iconName: "Car",
    subtitle: "Comprehensive deep hygienic cabin rejuvenation",
    description: "A comprehensive interior detailing service that includes deep cleaning of carpets, seats, plastics, trim, leather surfaces, and hard-to-reach areas. Uses steam extraction to sanitize.",
    pricing: {
      type: "tiered",
      tiers: {
        small: "R800",
        medium: "R1000",
        large: "R1200"
      }
    },
    duration: "4 - 6 Hours",
    finish: "Deep sterilized & fresh",
    warranty: "N/A",
    idealFor: "Vehicles needing a deep, thorough interior cleanse. Eliminates odors, stains, grease, and bacteria.",
    includes: [
      "Upholstery, floor carpet, and mat hot-water extraction",
      "Roof lining soft cleaning & spot stain removal",
      "HVAC vents sanitization and dust blowout",
      "Deep cleaning of all console buttons, cup holders, and crevices",
      "Leather clean & condition or fabric protect treatment",
      "Deep window cleaning & cabin deodorization"
    ]
  },
  {
    id: "rim-ceramic",
    name: "Rim Ceramic Coating",
    category: "ceramic",
    iconName: "ShieldCheck",
    subtitle: "Extreme temperature barrier protecting custom wheels",
    description: "Protect your wheels with a high-performance ceramic coating that enhances gloss while making brake dust and road grime easier to remove. Highly resistant to high brake temperatures.",
    pricing: {
      type: "starting",
      startingFrom: "R1200"
    },
    duration: "3 - 5 Hours",
    finish: "Mirror gloss metallic slick",
    warranty: "Up to 2 Years",
    idealFor: "Vehicles with performance brake pads or custom gloss alloys. Prevents corrosive brake dust from embedding.",
    includes: [
      "Wheel-off full inner barrel and face decontamination",
      "Iron and tar spot chemical fallout removal",
      "Rim faces light polishing to clear micro-swirls",
      "Isopropyl panel prep wipe down",
      "Application of specialized high-temperature rim ceramic coating"
    ]
  },
  {
    id: "windscreen-polish",
    name: "Windscreen Polish",
    category: "detail",
    iconName: "Sun",
    subtitle: "Eliminate wiper trails, light scratches, and water spots",
    description: "Reduce light scratches, water spots, and surface contamination to improve glass clarity and overall driving visibility. Restores optical clarity to older windscreen glass.",
    pricing: {
      type: "starting",
      startingFrom: "R900"
    },
    duration: "2 - 3 Hours",
    finish: "Distortion-free clear view",
    warranty: "N/A",
    idealFor: "Vehicles with severe wiper scratch arcs, water spot mineral etching, or hazy glass glare under streetlights.",
    includes: [
      "Full surrounding rubber and paint trim protective masking",
      "Cerium oxide glass compound machining pass",
      "Rotary pad polishing to shave glass imperfections",
      "Chemical wipe down of compound residue",
      "Hydrophobic rain repellent topper sealant"
    ]
  },
  {
    id: "headlight-ppf",
    name: "Headlight PPF",
    category: "ppf",
    iconName: "Shield",
    subtitle: "Physical armor protection for headlight lenses",
    description: "Safeguard restored or brand-new headlights with premium paint protection film, providing long-term protection against stone chips, UV exposure, and oxidation.",
    pricing: {
      type: "starting",
      startingFrom: "R2000"
    },
    duration: "2 - 3 Hours",
    finish: "Invisible shield gloss",
    warranty: "10 Year Warranty",
    idealFor: "New cars or newly restored headlights to permanently halt road rock chipping, sandblast weathering, and yellowing.",
    includes: [
      "Headlight lens deep cleaning & isopropyl alcohol wipe down",
      "Custom computer pattern-cut TPU clear film template",
      "Squeegee application with professional slip solution",
      "Accurate heat edge-wrap framing",
      "Final optical inspection"
    ]
  },
  {
    id: "one-step-paint-correction",
    name: "1-Step Paint Correction",
    category: "detail",
    iconName: "Brush",
    subtitle: "Machine polishing to restore paint gloss & eliminate minor swirls",
    description: "Improve paint clarity and gloss by removing light swirl marks and minor imperfections through a professional machine polishing process. Perfect for newer cars or paint showing light wear.",
    pricing: {
      type: "starting",
      startingFrom: "R1800"
    },
    duration: "6 - 12 Hours",
    finish: "High reflections & clear depth",
    warranty: "N/A",
    idealFor: "Vehicles with light wash swirls, or paint looking dull and cloudy. Great pre-sale prep or annual paint pick-up.",
    includes: [
      "Full wash & intensive multi-stage decontamination",
      "Paint thickness gauge diagnostic check",
      "Single-stage machine polish with premium compound/polish",
      "Removal of up to 50-70% of light clearcoat defects",
      "Panel wipe down and application of high-grade sealant topper"
    ]
  },
  {
    id: "concours-detail",
    name: "Concours Detail",
    category: "detail",
    iconName: "CarFront",
    subtitle: "Show-level cleaning and extreme refinement detail",
    description: "An intensive detailing service tailored to achieve exceptional levels of cleanliness, refinement, and presentation for enthusiast and collector vehicles. Every panel, screw, and hinge is detailed.",
    pricing: {
      type: "starting",
      startingFrom: "Enquire Now"
    },
    duration: "3 - 5 Days",
    finish: "Pristine museum quality",
    warranty: "N/A",
    idealFor: "Collector vehicles, classic restoration entries, or preparation for elite automotive events and Concours d'Elegance.",
    includes: [
      "Multi-stage machine paint corrective jewel pass",
      "Full undercarriage and arch decontamination cleaning",
      "Engine bay hand detail to exhibition standards",
      "Intricate interior crevice vacuuming, steam, and leather care",
      "Exhaust tips, badges, chrome, and door hinge polish",
      "White-glove final multi-point LED light inspection"
    ]
  },
  {
    id: "multi-stage-paint-correction",
    name: "Multi-Stage Paint Correction",
    category: "detail",
    iconName: "Sparkles",
    subtitle: "Surgical scratch removal to restore flawless paintwork",
    description: "A comprehensive paint restoration process designed to eliminate deeper defects, swirl marks, and imperfections while maximizing gloss, depth, and clarity. This multi-pass machining shaves clearcoat flaws surgically.",
    pricing: {
      type: "starting",
      startingFrom: "R5000"
    },
    duration: "2 - 4 Days",
    finish: "Flawless mirror gloss finish",
    warranty: "N/A",
    idealFor: "Vehicles with heavy swirl marks, light scratches, water etchings, or dull oxidized paint needing complete clearcoat flat leveling.",
    includes: [
      "Triple decontamination wash (Iron fallout, tar, clay bar)",
      "Paint depth measurement across every single panel",
      "First pass: Heavy micro-abrasive cutting compound pass to shave defects",
      "Second pass: Refining polish pass to clear buffer trails",
      "Third pass: Jewel-finishing polish for extreme optical gloss reflections",
      "Total body panel wipe-down with IPA prep before sealer/coatings"
    ]
  },
  {
    id: "show-car-detail",
    name: "Show Car Detail",
    category: "detail",
    iconName: "CarFront",
    subtitle: "Premier exhibition and photography prep package",
    description: "Our premier detailing package, meticulously designed to prepare vehicles for exhibitions, competitions, photography, and collector-grade presentation. Focuses on ultimate visual pop.",
    pricing: {
      type: "starting",
      startingFrom: "R3500"
    },
    duration: "1.5 - 3 Days",
    finish: "Extreme visual pop reflections",
    warranty: "N/A",
    idealFor: "Preparations before professional photo shoots, launch displays, motor shows, or high-profile club meetings.",
    includes: [
      "Double gloss intensive enhancement polishing sweep",
      "Engine bay, wheels, exhaust, and door jambs high-gloss detail",
      "Cabin deep-clean and trim rejuvenation with zero-dust treatment",
      "Deep glass polish to ensure camera lenses see zero glare or haze",
      "Ultra-gloss hydrophobic showcase coating topper application"
    ]
  },
  {
    id: "body-kit-installation",
    name: "Body Kit Installation",
    category: "specialty",
    iconName: "Brush",
    subtitle: "Professional styling aero kit integration & styling parts",
    description: "Professional installation of aftermarket body kits, spoilers, splitters, and styling components with a focus on precision fitment and superior finish quality.",
    pricing: {
      type: "starting",
      startingFrom: "R1500"
    },
    duration: "1 - 3 Days",
    finish: "Perfect OEM flush fitment",
    warranty: "1 Year Fitment Guarantee",
    idealFor: "Adding carbon fiber splitters, spoilers, side skirts, diffusers, or full bumper aero conversions to high-performance cars.",
    includes: [
      "Professional bumper/trim disassembly with safe connector preservation",
      "Test-fitting and exact visual alignment marking",
      "Drilling and high-stress bolt/screw hardware anchoring",
      "High-bond polyurethane automotive adhesive sealing",
      "Panel gap leveling and final alignment verification"
    ]
  },
  {
    id: "windscreen-ppf",
    name: "Windscreen Protection Film (PPF)",
    category: "ppf",
    iconName: "Shield",
    subtitle: "Heavy duty defensive film against highway rock strikes",
    description: "A virtually invisible protective film applied to the windscreen to help minimize stone-chip damage and extend the lifespan of the glass. Safeguards against costly HUD windscreen cracks.",
    pricing: {
      type: "starting",
      startingFrom: "R4000"
    },
    duration: "4 - 8 Hours",
    finish: "Invisible crystal glass view",
    warranty: "10 Year Warranty",
    idealFor: "Performance daily drivers or cars driven frequently on highway routes. Keeps expensive modern windscreens safe.",
    includes: [
      "Intensive glass mechanical clean & oil strip prep",
      "Custom hand heat-molded thick protective PET film",
      "Wet slip alignment and squeegee application",
      "Accurate flush razor trim to the glass boundaries",
      "Thermal edge sealing and curation"
    ]
  },
  {
    id: "frontal-ppf",
    name: "Frontal Paint Protection Film (PPF)",
    category: "ppf",
    iconName: "Shield",
    subtitle: "Shielding high-impact areas from rock chips and road rash",
    description: "Protect high-impact areas, including the bumper, bonnet, fenders, and mirrors, from stone chips, scratches, and road debris. Made from high-density self-healing TPU.",
    pricing: {
      type: "starting",
      startingFrom: "R16500"
    },
    duration: "1 - 3 Days",
    finish: "Invisible mirror glass",
    warranty: "10 Year Warranty",
    idealFor: "A fundamental protection plan for any vehicle. Keeps front-facing paint flawless from highway gravel sandblasting.",
    includes: [
      "Full paint clay bar wash & iron decontamination sweep",
      "Comprehensive single-stage correction polish prep",
      "TPU film application on: Bumper, Bonnet, Fenders, Mirror caps",
      "Surgical tucking of film edges beneath panels where possible",
      "Self-healing glossy polyurethane clear topcoat cure"
    ]
  },
  {
    id: "color-change-wrap",
    name: "Colour Change Wrap",
    category: "ppf",
    iconName: "Brush",
    subtitle: "Complete visual transformation with high-grade cast vinyl",
    description: "Transform your vehicle’s appearance with a premium vinyl wrap available in a wide selection of colours and finishes while preserving the original paintwork. Styled with clean seamless edges.",
    pricing: {
      type: "starting",
      startingFrom: "R30000"
    },
    duration: "4 - 6 Days",
    finish: "Custom selected finish (Gloss, Satin, Matte, Chrome)",
    warranty: "3 Year Application Guarantee",
    idealFor: "Changing your car's aesthetic color without spraying permanent paint. Preserves and keeps the underlying factory paint brand new.",
    includes: [
      "Complete exterior wash and chemical decontamination",
      "Surgical removal of badges, handles, trims & lights for clean tucking",
      "Precise hand wrapping of individual panels using premium multi-cast vinyl",
      "Seamless folded borders and flawless edge corner tucking",
      "Thermal heat post-curing cycle to seal all adhesives"
    ]
  },
  {
    id: "full-vehicle-ppf",
    name: "Full Vehicle Paint Protection Film (PPF)",
    category: "ppf",
    iconName: "ShieldCheck",
    subtitle: "The ultimate 360-degree armor shield against all elements",
    description: "The ultimate solution in paint protection. A premium self-healing film is applied across the entire vehicle to preserve paintwork, maintain showroom-quality condition, and protect against everyday wear.",
    pricing: {
      type: "starting",
      startingFrom: "R39000"
    },
    duration: "3 - 5 Days",
    finish: "Ultimate glass gloss or stealth matte",
    warranty: "10 Year Warranty",
    idealFor: "Supercars, luxury exotics, collector cars, and demanding owners seeking complete immunity against scratches, door dings, and key damage.",
    includes: [
      "Deep triple wash & physical clay bar paint purification",
      "Aesthetic 1-stage machine polish correction for zero swirled paint",
      "Physical pre-cut templates applied to all exterior painted surfaces",
      "Full wrap on hood, bumper, roof, fenders, doors, trunk, rockers & panels",
      "Deep wrap edge tucks under trim lines for maximum invisible fitment"
    ]
  }
];
