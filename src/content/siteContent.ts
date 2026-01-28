export const homeContent = {
  heroTitle: "How do we know what happened millions of years ago?",
  heroSubtitle:
    "Geologists combine relative dating, fossils, radiometric clocks, and the geologic time scale to reconstruct Earth's story. Explore the tools they use and try them yourself.",
  ctas: [
    { label: "Start with relative dating", to: "/relative-dating" },
    { label: "Jump to the timeline", to: "/geologic-time-scale" }
  ],
  introCards: [
    {
      title: "Rocks record processes",
      text: "Layered rocks preserve order, deformation, and gaps that reveal sequence through time.",
      to: "/relative-dating"
    },
    {
      title: "Fossils provide clues",
      text: "Index fossils correlate layers across regions and mark bursts of evolution or extinction.",
      to: "/fossils"
    },
    {
      title: "Atoms keep time",
      text: "Radiometric clocks measure parent and daughter isotopes to calculate absolute ages.",
      to: "/radiometric-dating"
    }
  ],
  timelinePreview: [
    { label: "Precambrian", era: "4.6 Ga – 541 Ma", highlight: "Earliest crust, single-celled life" },
    { label: "Paleozoic", era: "541 – 252 Ma", highlight: "Explosion of marine life; first land plants" },
    { label: "Mesozoic", era: "252 – 66 Ma", highlight: "Age of reptiles; flowering plants emerge" },
    { label: "Cenozoic", era: "66 Ma – today", highlight: "Mammals diversify; humans appear very late" }
  ]
};

export const relativeDatingContent = {
  stenosLaws: [
    "Original horizontality: sediments are deposited flat.",
    "Superposition: younger layers sit atop older ones.",
    "Lateral continuity: layers extend until they thin or meet a barrier.",
    "Cross-cutting: features that cut layers are younger than the layers.",
    "Inclusions: fragments inside a rock are older than the host rock."
  ],
  unconformities: [
    { type: "Angular unconformity", description: "Tilted or folded layers overlain by flat sediments." },
    { type: "Disconformity", description: "Parallel layers separated by an erosional surface." },
    { type: "Nonconformity", description: "Sedimentary rocks resting on eroded igneous/metamorphic rocks." }
  ],
  takeaways: [
    "Relative dating establishes sequence, not numeric ages.",
    "Combining multiple principles reduces ambiguity.",
    "Unconformities mark missing time—often millions of years."
  ]
};

export const fossilContent = {
  topics: [
    {
      title: "Fossil succession",
      points: [
        "Fossil assemblages succeed one another in a predictable order.",
        "Unique species appear, thrive, and go extinct; their presence brackets time."
      ]
    },
    {
      title: "Index fossils",
      points: [
        "Geographically widespread, abundant, and short-lived species.",
        "Help correlate distant layers to the same narrow time window."
      ]
    },
    {
      title: "Correlation",
      points: [
        "Matching rock layers by fossil content is often more reliable than rock type alone.",
        "Correlation ties local sequences into a global framework."
      ]
    }
  ],
  fossilImages: [
    {
      src: "/images/placeholder-fossil.svg",
      caption: "Trilobite mold fossil showing detailed exoskeleton.",
      sourceLabel: "Placeholder image – replace with properly sourced figure",
      sourceUrl: "https://example.com/placeholder",
      alt: "Trilobite fossil placeholder",
      placeholder: true
    },
    {
      src: "/images/placeholder-index.svg",
      caption: "Index fossil range chart illustrating narrow time spans.",
      sourceLabel: "Placeholder image – replace with properly sourced figure",
      sourceUrl: "https://example.com/placeholder",
      alt: "Index fossil range chart placeholder",
      placeholder: true
    }
  ]
};

export const radiometricContent = {
  systems: [
    { name: "Uranium–Lead (U-Pb)", range: "Millions to billions of years", notes: "Zircon crystals lock in uranium at crystallization." },
    { name: "Potassium–Argon (K-Ar)", range: "Thousands to billions of years", notes: "Useful for volcanic rocks; argon gas accumulates after cooling." },
    { name: "Carbon-14 (C-14)", range: "Up to ~50,000 years", notes: "Dates young organic material; not for rocks." }
  ],
  sliderDefault: { isotope: "U-238 → Pb-206", halfLifeYears: 4_468_000_000 }
};

export const timeScaleContent = {
  eras: [
    {
      name: "Precambrian",
      range: "4.6 Ga – 541 Ma",
      highlights: ["Earth forms; first continents", "Photosynthetic microbes oxygenate atmosphere"]
    },
    {
      name: "Paleozoic",
      range: "541 – 252 Ma",
      highlights: ["Cambrian Explosion of marine life", "Plants and insects colonize land"]
    },
    {
      name: "Mesozoic",
      range: "252 – 66 Ma",
      highlights: ["Dinosaurs dominate", "First birds and flowering plants"]
    },
    {
      name: "Cenozoic",
      range: "66 Ma – today",
      highlights: ["Mammals diversify", "Humans appear very late (~300 ka)"]
    }
  ]
};

export type CaseStudy = {
  title: string;
  observations: string[];
  interpretations: string[];
  importance: string;
  questions: string[];
  images: {
    src: string;
    caption: string;
    sourceLabel: string;
    sourceUrl: string;
    alt: string;
    placeholder?: boolean;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Grand Canyon",
    observations: [
      "Flat-lying Paleozoic layers overlie tilted Proterozoic rocks.",
      "Prominent unconformity (Great Unconformity) spans over a billion years."
    ],
    interpretations: [
      "Erosion removed vast time before younger sediments were deposited.",
      "Horizontal layers reflect stable marine and coastal environments."
    ],
    importance: "Shows how unconformities record missing time and changing environments.",
    questions: [
      "How do we know the tilted rocks are older?",
      "What evidence marks the erosional surface?"
    ],
    images: [
      {
        src: "/images/placeholder-canyon.svg",
        caption: "View of layered canyon walls with distinct unconformity.",
        sourceLabel: "Placeholder image – replace with properly sourced figure",
        sourceUrl: "https://example.com/placeholder",
        alt: "Grand Canyon placeholder",
        placeholder: true
      }
    ]
  },
  {
    title: "Burgess Shale",
    observations: [
      "Exquisite preservation of soft-bodied Cambrian organisms.",
      "Thinly laminated mudstones with minimal disturbance."
    ],
    interpretations: [
      "Rapid burial in an oxygen-poor setting limited decay.",
      "Represents a snapshot of Cambrian marine ecosystem diversity."
    ],
    importance: "Reveals early animal body plans and evolutionary experimentation.",
    questions: [
      "Why are soft tissues rare in the fossil record?",
      "What conditions allow exceptional preservation?"
    ],
    images: [
      {
        src: "/images/placeholder-fossil.svg",
        caption: "Soft-bodied fossil impression from Burgess Shale.",
        sourceLabel: "Placeholder image – replace with properly sourced figure",
        sourceUrl: "https://example.com/placeholder",
        alt: "Burgess Shale fossil placeholder",
        placeholder: true
      }
    ]
  },
  {
    title: "Jurassic Seas",
    observations: [
      "Marine limestone with abundant ammonites and marine reptiles.",
      "Interbedded volcanic ash layers."
    ],
    interpretations: [
      "Warm, shallow seas with periodic ash falls enable radiometric dating of layers.",
      "Index fossils constrain age within Jurassic."
    ],
    importance: "Combines fossils and radiometric ages to tighten time constraints.",
    questions: [
      "How do ash beds improve dating precision?",
      "Which ammonites make good index fossils here?"
    ],
    images: [
      {
        src: "/images/placeholder-index.svg",
        caption: "Ammonite fossil spiral shell.",
        sourceLabel: "Placeholder image – replace with properly sourced figure",
        sourceUrl: "https://example.com/placeholder",
        alt: "Ammonite fossil placeholder",
        placeholder: true
      }
    ]
  },
  {
    title: "Miocene World",
    observations: [
      "Terrestrial sediments with fossil grasses and mammal remains.",
      "Paleosols indicating changing climate and seasonality."
    ],
    interpretations: [
      "Expansion of grasslands supported grazing mammals.",
      "Soil horizons record shifts between wetter and drier intervals."
    ],
    importance: "Links climate change to ecosystem evolution in the Neogene.",
    questions: [
      "What proxies in soils reveal past rainfall?",
      "How do mammal teeth reflect dietary shifts?"
    ],
    images: [
      {
        src: "/images/placeholder-strata.svg",
        caption: "Layered outcrop with fossiliferous bands.",
        sourceLabel: "Placeholder image – replace with properly sourced figure",
        sourceUrl: "https://example.com/placeholder",
        alt: "Miocene strata placeholder",
        placeholder: true
      }
    ]
  }
];

export const glossaryTerms = [
  { term: "Absolute age", definition: "Numeric age of a rock or event, determined through radiometric dating." },
  { term: "Angular unconformity", definition: "Erosional surface separating tilted older layers from younger flat layers." },
  { term: "Daughter isotope", definition: "Product isotope formed by radioactive decay of a parent isotope." },
  { term: "Half-life", definition: "Time required for half of the parent isotopes in a sample to decay." },
  { term: "Index fossil", definition: "Widespread fossil species that lived for a short time, useful for correlation." },
  { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
  { term: "Original horizontality", definition: "Principle that sediments are deposited in roughly horizontal layers." },
  { term: "Parent isotope", definition: "Radioactive isotope that decays into a daughter isotope." },
  { term: "Radiometric dating", definition: "Determining age based on measured parent/daughter isotope ratios." },
  { term: "Relative dating", definition: "Establishing order of events without numeric ages." },
  { term: "Stratigraphy", definition: "Study of rock layers and layering." },
  { term: "Superposition", definition: "In undisturbed sequences, the oldest layer is at the bottom." },
  { term: "Cross-cutting relationship", definition: "Feature that cuts another is younger than the rock it cuts." },
  { term: "Unconformity", definition: "Surface representing missing geologic time due to erosion or non-deposition." },
  { term: "Correlation", definition: "Matching rocks or events in different places to the same time interval." },
  { term: "Fossil succession", definition: "Orderly change of fossil assemblages through time." },
  { term: "Half-life slider", definition: "Interactive tool to visualize radioactive decay over time." },
  { term: "Geologic time scale", definition: "Chronologic framework dividing Earth's history into eons, eras, periods, epochs." },
  { term: "Paleosol", definition: "Ancient soil horizon preserved in the rock record." },
  { term: "Great Unconformity", definition: "Major gap in time between Precambrian rocks and overlying Phanerozoic strata." }
];

export const referenceContent = {
  course: [
    "GEO 201L course slides and lab handouts (University course materials).",
    "Instructor lecture notes on relative dating and radiometric methods."
  ],
  textbook: [
    "Marshak, S. (2023). Earth: Portrait of a Planet (7th ed.). W. W. Norton.",
    "Lutetkin, K. (2022). Essentials of Geology (6th ed.)."
  ],
  institutions: [
    "USGS (United States Geological Survey) resources on geologic time and dating methods.",
    "Smithsonian National Museum of Natural History fossil collections."
  ],
  imageSourcesNote:
    "All placeholder images in this site are locally generated and must be replaced with properly sourced figures that include author/organization and a link."
};
