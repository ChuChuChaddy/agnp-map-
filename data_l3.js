const LAYER3 = [
  {
    "common_name": "Water flea",
    "scientific_name": "Daphnia magna",
    "habitat": "FW",
    "lc50_mg_L": 0.004,
    "lc50_exposure_h": 48,
    "agnp_size_nm": 7,
    "agnp_coating": "citrate",
    "notes": "48-h EC50 (immobilization) = 0.004 mg/L for citrate-capped 7 nm AgNPs (nAg1 colloid, ABC Nanotech). Range across studies: 0.001\u20130.232 mg/L depending on size and coating. This is the most sensitive standard test organism.",
    "locations": [
      {
        "name": "Central Europe (native range)",
        "lat": 50.0,
        "lon": 14.0
      },
      {
        "name": "Rhine River, Germany",
        "lat": 51.2,
        "lon": 6.8
      },
      {
        "name": "Southern England, UK",
        "lat": 51.5,
        "lon": -1.5
      },
      {
        "name": "Scandinavia (Sweden)",
        "lat": 59.3,
        "lon": 18.1
      },
      {
        "name": "Eastern USA (introduced)",
        "lat": 42.4,
        "lon": -76.5
      }
    ],
    "citation": "Asghari et al. 2012",
    "doi": "10.1186/1477-3155-10-14"
  },
  {
    "common_name": "Zebrafish",
    "scientific_name": "Danio rerio",
    "habitat": "FW",
    "lc50_mg_L": 0.084,
    "lc50_exposure_h": 48,
    "agnp_size_nm": 81,
    "agnp_coating": "PVP (polyvinylpyrrolidone)",
    "notes": "48-h LC50 = 84 \u00b5g/L (0.084 mg/L) for PVP-coated 81 nm AgNPs in adult zebrafish static renewal study. Range across studies: 0.017\u2013250 mg/L depending on size, coating, and life stage.",
    "locations": [
      {
        "name": "Ganges River basin, India",
        "lat": 25.6,
        "lon": 85.2
      },
      {
        "name": "Brahmaputra River, Bangladesh",
        "lat": 25.0,
        "lon": 89.5
      },
      {
        "name": "Irrawaddy River, Myanmar",
        "lat": 21.5,
        "lon": 95.8
      },
      {
        "name": "Kosi River, Nepal/India",
        "lat": 26.8,
        "lon": 87.1
      },
      {
        "name": "Mekong tributaries, Thailand",
        "lat": 17.5,
        "lon": 102.0
      }
    ],
    "citation": "Bilberg et al. 2012",
    "doi": "10.1155/2012/293784"
  },
  {
    "common_name": "Gulf killifish",
    "scientific_name": "Fundulus grandis",
    "habitat": "estuarine",
    "lc50_mg_L": 2.0,
    "lc50_exposure_h": 48,
    "agnp_size_nm": null,
    "agnp_coating": "gum arabic (GA)",
    "notes": "No dedicated AgNP LC50 study published specifically for F. grandis. Value estimated from related species F. heteroclitus data (Bone et al. 2015): significant mortality at 2 mg/L GA-AgNP in laboratory exposures of Fundulus early life stages over 48 h. F. grandis is the target study organism (Chad's study). Treat as approximate; use with caution.",
    "locations": [
      {
        "name": "Galveston Bay, Texas, USA",
        "lat": 29.5,
        "lon": -94.9
      },
      {
        "name": "Mobile Bay, Alabama, USA",
        "lat": 30.5,
        "lon": -88.0
      },
      {
        "name": "Mississippi Sound, Mississippi, USA",
        "lat": 30.2,
        "lon": -89.0
      },
      {
        "name": "Pensacola Bay, Florida, USA",
        "lat": 30.4,
        "lon": -87.2
      },
      {
        "name": "Corpus Christi Bay, Texas, USA",
        "lat": 27.8,
        "lon": -97.3
      }
    ],
    "citation": "Bone et al. 2015 (F. heteroclitus proxy)",
    "doi": "10.1002/etc.2806"
  },
  {
    "common_name": "Mummichog / Atlantic killifish",
    "scientific_name": "Fundulus heteroclitus",
    "habitat": "estuarine",
    "lc50_mg_L": 2.0,
    "lc50_exposure_h": 48,
    "agnp_size_nm": null,
    "agnp_coating": "gum arabic (GA)",
    "notes": "Bone et al. 2015 mesocosm/lab study: significant mortality in larvae at 2 mg/L GA-AgNP (48 h). No clean sigmoidal LC50 published for this species. Embryos showed full protection in mesocosm conditions. Euryhaline species tested in brackish water (12 ppt) by Campbell et al. 2019 at 80 \u00b5g/L (no mortality, but significant metabolic suppression).",
    "locations": [
      {
        "name": "Chesapeake Bay, Maryland, USA",
        "lat": 38.9,
        "lon": -76.5
      },
      {
        "name": "New England coast, Massachusetts, USA",
        "lat": 41.8,
        "lon": -70.5
      },
      {
        "name": "New Jersey marshes, USA",
        "lat": 39.4,
        "lon": -74.4
      },
      {
        "name": "Nova Scotia, Canada",
        "lat": 44.7,
        "lon": -63.6
      },
      {
        "name": "Cape Fear, North Carolina, USA",
        "lat": 33.9,
        "lon": -78.0
      }
    ],
    "citation": "Bone et al. 2015",
    "doi": "10.1002/etc.2806"
  },
  {
    "common_name": "Rainbow trout",
    "scientific_name": "Oncorhynchus mykiss",
    "habitat": "FW",
    "lc50_mg_L": 2.3,
    "lc50_exposure_h": 96,
    "agnp_size_nm": null,
    "agnp_coating": "colloidal (unspecified)",
    "notes": "96-h LC50 = 2.3 mg/L (Shahbazzadeh et al. 2009, cited widely). Johari et al. 2013 reports 96-h LC50 of 2.16 mg/L for colloidal AgNPs in juvenile rainbow trout. A separate study (Johari/Kalbassi) reports juvenile LC50 of 3.13 \u00b5g/mL (48 h). Values vary 0.25\u20138.9 mg/L depending on form and life stage.",
    "locations": [
      {
        "name": "Columbia River, Pacific Northwest USA",
        "lat": 46.2,
        "lon": -119.2
      },
      {
        "name": "Sacramento River, California, USA",
        "lat": 40.5,
        "lon": -122.4
      },
      {
        "name": "Russian River / Coast Range, California, USA",
        "lat": 38.5,
        "lon": -122.7
      },
      {
        "name": "British Columbia, Canada (Fraser River tributaries)",
        "lat": 49.5,
        "lon": -121.0
      },
      {
        "name": "Kamchatka Peninsula, Russia (native Pacific range)",
        "lat": 54.5,
        "lon": 160.5
      }
    ],
    "citation": "Shahbazzadeh et al. 2009 (cited in Cho et al. 2013 table)",
    "doi": "10.1155/2013/494671"
  },
  {
    "common_name": "Fathead minnow",
    "scientific_name": "Pimephales promelas",
    "habitat": "FW",
    "lc50_mg_L": 0.0894,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 10,
    "agnp_coating": "none (uncoated)",
    "notes": "96-h LC50 = 89.4 \u00b5g/L (0.0894 mg/L) for 10 nm uncoated AgNPs (Reed et al. 2012, Environ Toxicol Chem). Laban et al. 2010 reports embryo 96-h LC50 = 10.6 mg/L for \u2264100 nm uncoated AgNPs \u2014 indicating embryos are less sensitive than larvae/juveniles for this species.",
    "locations": [
      {
        "name": "Mississippi River basin, USA (widespread)",
        "lat": 44.9,
        "lon": -93.2
      },
      {
        "name": "Great Lakes region, USA/Canada",
        "lat": 43.9,
        "lon": -79.0
      },
      {
        "name": "Missouri River, Missouri, USA",
        "lat": 38.7,
        "lon": -90.4
      },
      {
        "name": "Red River, Oklahoma, USA",
        "lat": 34.0,
        "lon": -97.5
      },
      {
        "name": "Arkansas River, Arkansas, USA",
        "lat": 35.3,
        "lon": -94.4
      }
    ],
    "citation": "Reed et al. 2012",
    "doi": "10.1002/etc.1978"
  },
  {
    "common_name": "Japanese medaka",
    "scientific_name": "Oryzias latipes",
    "habitat": "FW",
    "lc50_mg_L": 0.8,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 8,
    "agnp_coating": "citrate",
    "notes": "96-h LC50 = 0.80 mg/L (0.65\u20130.96 CI) for citrate-capped AgNPs (~8 nm primary, 36.8 nm hydrodynamic in adults). Cho et al. 2013 also reports embryo 96-h LC50 = 0.84 mg/L. Kim et al. 2015 reports 96-h LC50 = 1.8 mg/L for 35 nm citrate AgNPs. Medaka tolerate brackish water but standardly tested in freshwater.",
    "locations": [
      {
        "name": "Japan (Kanto Plain, Honshu)",
        "lat": 35.7,
        "lon": 139.7
      },
      {
        "name": "Korea (Han River basin)",
        "lat": 37.5,
        "lon": 127.0
      },
      {
        "name": "China (Yangtze River lowlands)",
        "lat": 30.5,
        "lon": 114.3
      },
      {
        "name": "Vietnam (Red River Delta)",
        "lat": 21.0,
        "lon": 106.0
      },
      {
        "name": "Taiwan (western coastal plains)",
        "lat": 23.5,
        "lon": 120.5
      }
    ],
    "citation": "Cho et al. 2013",
    "doi": "10.1155/2013/494671"
  },
  {
    "common_name": "Goldfish",
    "scientific_name": "Carassius auratus",
    "habitat": "FW",
    "lc50_mg_L": 83.9,
    "lc50_exposure_h": 96,
    "agnp_size_nm": null,
    "agnp_coating": "Nanosil commercial product",
    "notes": "96-h LC50 = 83.9 mg/L for Iranian commercial nanosilver Nanosil (Jahanbakhshi/Hedayati et al. 2012). This high value reflects rapid aggregation of the commercial product \u2014 actual nanoparticle bioavailability was likely low. Goldfish are generally less sensitive to silver than salmonids. This value is for comparative context only.",
    "locations": [
      {
        "name": "Amur River basin, China/Russia",
        "lat": 47.5,
        "lon": 131.5
      },
      {
        "name": "Yangtze River, China",
        "lat": 30.3,
        "lon": 114.5
      },
      {
        "name": "Pearl River basin, southern China",
        "lat": 23.1,
        "lon": 113.3
      },
      {
        "name": "Korea (Han River)",
        "lat": 37.6,
        "lon": 127.1
      },
      {
        "name": "European introduced range (Rhine/Danube)",
        "lat": 48.5,
        "lon": 13.5
      }
    ],
    "citation": "Jahanbakhshi et al. 2012 (via Hedayati et al.)",
    "doi": "10.5829/IDOSI.WJZ.2012.7.2.62129"
  },
  {
    "common_name": "Mediterranean mussel",
    "scientific_name": "Mytilus galloprovincialis",
    "habitat": "marine",
    "lc50_mg_L": 4.74,
    "lc50_exposure_h": 24,
    "agnp_size_nm": 20,
    "agnp_coating": "maltose",
    "notes": "In vitro 24-h LC50 = 4.74 mg/L for 20 nm maltose-stabilized AgNPs in hemocytes (Katsumiti et al. 2015 Neutral Red assay). Embryo EC50 = 0.0237 mg/L (23.7 \u00b5g/L) for bare 47 nm AgNPs in embryo development test (Balbi et al. 2018, Aquat. Toxicol.). Adult survival LC50 (96 h AUC-based) \u2248 1.0 mg Ag\u00b7h/L for 50 nm uncoated (Vezzulli et al. 2021).",
    "locations": [
      {
        "name": "Mediterranean coast, Spain (Catalonia)",
        "lat": 41.4,
        "lon": 2.2
      },
      {
        "name": "Adriatic Sea, Italy",
        "lat": 44.4,
        "lon": 12.5
      },
      {
        "name": "Aegean Sea, Greece",
        "lat": 39.9,
        "lon": 22.9
      },
      {
        "name": "Black Sea, Turkey",
        "lat": 41.0,
        "lon": 31.5
      },
      {
        "name": "Atlantic coast, Morocco/Portugal",
        "lat": 37.0,
        "lon": -8.9
      }
    ],
    "citation": "Katsumiti et al. 2015",
    "doi": "10.1371/journal.pone.0129039"
  },
  {
    "common_name": "Blue mussel",
    "scientific_name": "Mytilus edulis",
    "habitat": "marine",
    "lc50_mg_L": 2.05,
    "lc50_exposure_h": 24,
    "agnp_size_nm": 5,
    "agnp_coating": "PVP/PEI",
    "notes": "In vitro 24-h LC50 = 2.05 mg Ag/L for PVP/PEI-coated 5 nm AgNPs in hemocytes (Duroudier et al. 2019, Sci Total Environ). Immunotoxicity studies also conducted on gill tissue. No in vivo adult mortality LC50 published; embryo/larvae sensitivity data from related Mytilus spp. indicate EC50 values ~10\u201340 \u00b5g/L for developmental endpoints.",
    "locations": [
      {
        "name": "North Sea coast, Netherlands",
        "lat": 53.0,
        "lon": 4.8
      },
      {
        "name": "Norwegian coast, Bergen",
        "lat": 60.4,
        "lon": 5.3
      },
      {
        "name": "Bay of Fundy, Canada",
        "lat": 45.0,
        "lon": -66.0
      },
      {
        "name": "Gulf of Maine, USA",
        "lat": 43.8,
        "lon": -69.8
      },
      {
        "name": "Irish Sea, UK (Wales coast)",
        "lat": 51.5,
        "lon": -4.5
      }
    ],
    "citation": "Duroudier et al. 2019",
    "doi": "10.1016/j.scitotenv.2018.11.181"
  },
  {
    "common_name": "Brine shrimp",
    "scientific_name": "Artemia franciscana",
    "habitat": "marine",
    "lc50_mg_L": 3.79,
    "lc50_exposure_h": 48,
    "agnp_size_nm": null,
    "agnp_coating": "unspecified (spheres)",
    "notes": "48-h LC50 = 3.79 mg/L (2.28\u20136.29 CI) for AgNP nauplii, from meta-analysis of multiple studies (Corsi et al. 2022, Frontiers Bioeng.). 24-h LC50 = 9.96 mg/L. Standard marine ecotox test organism. A. franciscana found in saline and hypersaline lakes worldwide.",
    "locations": [
      {
        "name": "Great Salt Lake, Utah, USA",
        "lat": 41.0,
        "lon": -112.5
      },
      {
        "name": "Mono Lake, California, USA",
        "lat": 37.9,
        "lon": -119.1
      },
      {
        "name": "Urmia Lake, Iran",
        "lat": 37.7,
        "lon": 45.5
      },
      {
        "name": "Salinas de Santa Pola, Spain",
        "lat": 38.1,
        "lon": -0.6
      },
      {
        "name": "Caspian basin salt lakes, Kazakhstan",
        "lat": 44.0,
        "lon": 52.0
      }
    ],
    "citation": "Corsi et al. 2022 (meta-analysis)",
    "doi": "10.3389/fbioe.2022.836742"
  },
  {
    "common_name": "Common carp",
    "scientific_name": "Cyprinus carpio",
    "habitat": "FW",
    "lc50_mg_L": 0.43,
    "lc50_exposure_h": 96,
    "agnp_size_nm": null,
    "agnp_coating": "Nanocid commercial",
    "notes": "96-h LC50 = 0.43 mg/L for Nanocid AgNPs in common carp (Hedayati et al. 2012, referenced in multiple sources). A separate study by Lee et al. 2012 using citrate-capped AgNPs reports oxidative stress at 200 \u00b5g/L but does not provide a clean LC50. Freshwater species broadly distributed in Europe and Asia.",
    "locations": [
      {
        "name": "Danube River, Austria/Hungary",
        "lat": 47.8,
        "lon": 18.6
      },
      {
        "name": "Amur River, Russia/China",
        "lat": 48.5,
        "lon": 134.8
      },
      {
        "name": "Yangtze River basin, China",
        "lat": 29.5,
        "lon": 106.5
      },
      {
        "name": "Indus River, Pakistan",
        "lat": 27.5,
        "lon": 68.0
      },
      {
        "name": "Tigris River, Iraq",
        "lat": 33.3,
        "lon": 44.4
      }
    ],
    "citation": "Hedayati et al. 2012 (via Cho et al. 2013 table)",
    "doi": "10.1155/2013/494671"
  },
  {
    "common_name": "Sea urchin (Mediterranean)",
    "scientific_name": "Paracentrotus lividus",
    "habitat": "marine",
    "lc50_mg_L": 0.1,
    "lc50_exposure_h": 48,
    "agnp_size_nm": 60,
    "agnp_coating": "none (bare)",
    "notes": "EC50 (significant malformations in embryo development test) at ~50\u2013100 \u00b5g/L for 60 nm bare AgNPs (Gambardella et al. 2015, Mar Environ Res). LC50/EC50 for embryogenesis ~0.05\u20130.1 mg/L. Lyons et al. 2023 showed size-dependent effects (10-100 nm range). Widely used marine ecotox indicator.",
    "locations": [
      {
        "name": "Mediterranean coast, France (Marseille)",
        "lat": 43.3,
        "lon": 5.4
      },
      {
        "name": "Canary Islands, Spain",
        "lat": 28.1,
        "lon": -15.4
      },
      {
        "name": "Adriatic coast, Croatia",
        "lat": 43.5,
        "lon": 16.4
      },
      {
        "name": "Atlantic coast, Portugal (Algarve)",
        "lat": 37.1,
        "lon": -8.5
      },
      {
        "name": "Tyrrhenian Sea, Italy (Naples)",
        "lat": 40.8,
        "lon": 14.3
      }
    ],
    "citation": "Gambardella et al. 2015 / Lyons et al. 2023",
    "doi": "10.3390/ijms24010745"
  },
  {
    "common_name": "European whitefish",
    "scientific_name": "Coregonus lavaretus",
    "habitat": "freshwater",
    "lc50_mg_L": 0.51,
    "lc50_exposure_h": 192,
    "agnp_size_nm": 20,
    "agnp_coating": "citrate",
    "marker_type": "triangle",
    "notes": "LC50 0.51 mg/L in ISO medium (IS~12 mM, ~0.15\u2030 equiv.) from Vogt et al. 2021 8-week chronic exposure. Salinity derived from ionic strength. Alpine/subalpine lake species; highly sensitive cold-water salmonid. Additional values: 0.73 mg/L ASTM very hard water, 0.62 mg/L natural lake water.",
    "locations": [
      { "name": "Lake Geneva (Lac L\u00e9man), Switzerland/France", "lat": 46.45, "lon": 6.55 },
      { "name": "Lake Constance (Bodensee), Germany/Austria/Switzerland", "lat": 47.65, "lon": 9.35 },
      { "name": "Lake Lucerne, Switzerland", "lat": 47.0, "lon": 8.3 },
      { "name": "Finnish Lake District (Saimaa)", "lat": 61.5, "lon": 28.5 },
      { "name": "Scandinavian highland lakes, Norway", "lat": 60.8, "lon": 8.5 }
    ],
    "citation": "Vogt et al. 2021",
    "doi": "10.1080/15287394.2021.1988014"
  },
  {
    "common_name": "Golden alga (microalgae)",
    "scientific_name": "Isochrysis galbana",
    "habitat": "marine",
    "lc50_mg_L": 0.22,
    "lc50_exposure_h": 72,
    "agnp_size_nm": 20,
    "agnp_coating": "PVP (nanArgen\u2122)",
    "marker_type": "triangle",
    "notes": "72h EC50 = 0.22 mg/L at 35\u2030 seawater (Ale et al. 2025). Marine microalgae; primary producer; highly sensitive to AgNPs at full marine salinity. Confirms AgNP toxicity persists even at high [Cl\u207b] where ionic silver is scavenged as AgCl.",
    "locations": [
      { "name": "Atlantic coast (culture origin, Brest, France)", "lat": 48.4, "lon": -4.5 },
      { "name": "Mediterranean (common aquaculture), Spain", "lat": 38.5, "lon": 0.5 },
      { "name": "Canary Islands coastal waters, Spain", "lat": 28.1, "lon": -15.4 },
      { "name": "North Sea (distribution), UK", "lat": 54.0, "lon": 2.0 }
    ],
    "citation": "Ale et al. 2025",
    "doi": "10.3390/toxics13050338"
  },
  {
    "common_name": "Tambaqui",
    "scientific_name": "Colossoma macropomum",
    "habitat": "freshwater",
    "lc50_mg_L": 0.165,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 30,
    "agnp_coating": "PVA",
    "marker_type": "triangle",
    "notes": "96h LC50 = 0.165 mg/L (PVA-AgNP, ~30 nm) in juvenile tambaqui; freshwater aquaculture water (~0.01\u20130.05\u2030 equiv.). Classified highly toxic. Important Amazonian aquaculture and wild fisheries species. Meneses et al. 2024, Anais Acad. Bras. Ci\u00eancias.",
    "locations": [
      { "name": "Amazon River mainstem, Brazil", "lat": -3.5, "lon": -60.0 },
      { "name": "Solim\u00f5es River, Amazonas, Brazil", "lat": -3.3, "lon": -64.7 },
      { "name": "Orinoco River basin, Venezuela", "lat": 7.8, "lon": -66.0 },
      { "name": "Madeira River, Bolivia/Brazil", "lat": -10.5, "lon": -65.5 },
      { "name": "Tapaj\u00f3s River, Par\u00e1, Brazil", "lat": -4.3, "lon": -56.0 }
    ],
    "citation": "Meneses et al. 2024",
    "doi": "10.1590/0001-3765202420230413"
  },
  {
    "common_name": "Curimbat\u00e1 / S\u00e1balo",
    "scientific_name": "Prochilodus lineatus",
    "habitat": "freshwater",
    "lc50_mg_L": 0.05,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 20,
    "agnp_coating": "citrate",
    "marker_type": "triangle",
    "notes": "No formal LC50 published; significant mortality/sublethal effects at 25 \u00b5g/L (0.025 mg/L) after 5\u201315 days. LC50 estimated >0.025 mg/L; listed as ~0.05 mg/L (conservative estimate). Benitez-Villalba et al. 2018, Ecol. Indicators. Major migratory fish of Paran\u00e1-La Plata basin; benthic detritivore with high sediment-AgNP exposure risk.",
    "locations": [
      { "name": "Paran\u00e1 River, Argentina/Brazil", "lat": -27.5, "lon": -58.8 },
      { "name": "Paraguay River, Paraguay", "lat": -22.0, "lon": -57.8 },
      { "name": "Uruguay River, Uruguay/Argentina", "lat": -31.5, "lon": -58.0 },
      { "name": "S\u00e3o Francisco River, Brazil", "lat": -10.5, "lon": -42.5 },
      { "name": "Pantanal wetlands, Mato Grosso, Brazil", "lat": -17.0, "lon": -57.5 }
    ],
    "citation": "Benitez-Villalba et al. 2018",
    "doi": "10.1016/j.ecolind.2017.11.010"
  },
  {
    "common_name": "Nile tilapia",
    "scientific_name": "Oreochromis niloticus",
    "habitat": "freshwater",
    "lc50_mg_L": 0.95,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 25,
    "agnp_coating": "biogenic (Aspergillus)",
    "marker_type": "triangle",
    "notes": "96h LC50 = 8.8 \u00b5M (~0.95 mg/L) for biogenic Aspergillus-synthesized AgNPs; freshwater test medium (\u2248tap water, <0.1\u2030). Tahoun et al. 2025, RSC Environ. Sci. Note: earlier study (Hussein et al. 2016) reported 19.5 mg/L for bare AgNPs in tap water \u2014 likely aggregation artefact. Most commercially important African freshwater fish; also widely cultured globally.",
    "locations": [
      { "name": "Nile River, Egypt (Lake Nasser)", "lat": 23.5, "lon": 32.5 },
      { "name": "Lake Victoria, Kenya/Tanzania/Uganda", "lat": -1.0, "lon": 33.0 },
      { "name": "Lake Tanganyika, Tanzania", "lat": -6.5, "lon": 29.5 },
      { "name": "Niger River, Nigeria", "lat": 8.5, "lon": 6.5 },
      { "name": "Congo River basin, DRC", "lat": -4.3, "lon": 23.5 },
      { "name": "Volta River, Ghana", "lat": 8.0, "lon": -0.8 }
    ],
    "citation": "Tahoun et al. 2025",
    "doi": "10.1039/d4en01125b"
  },
  {
    "common_name": "African catfish",
    "scientific_name": "Clarias gariepinus",
    "habitat": "freshwater",
    "lc50_mg_L": 0.10,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 20,
    "agnp_coating": "none (bare)",
    "marker_type": "triangle",
    "notes": "No formal 96h LC50 published; significant nephrotoxic and hemotoxic effects at 10\u2013100 \u00b5g/L (0.01\u20130.1 mg/L). LC50 estimated ~0.1 mg/L (conservative lower bound). Mahmoud et al. 2019, Ecotox. Environ. Saf. Highly relevant: aquaculture species across sub-Saharan Africa and North Africa; air-breathing catfish with wide habitat range including polluted urban waterways.",
    "locations": [
      { "name": "Nile River, Egypt (lower reaches)", "lat": 30.5, "lon": 31.0 },
      { "name": "Congo River, DRC", "lat": -3.5, "lon": 17.5 },
      { "name": "Zambezi River, Zambia/Zimbabwe", "lat": -16.0, "lon": 28.5 },
      { "name": "Orange River, South Africa", "lat": -29.5, "lon": 24.5 },
      { "name": "Lake Chad basin, Chad/Nigeria", "lat": 13.5, "lon": 14.0 },
      { "name": "Senegal River, Senegal/Mali", "lat": 15.5, "lon": -13.5 }
    ],
    "citation": "Mahmoud et al. 2019",
    "doi": "10.1016/j.ecoenv.2019.01.011"
  },
  {
    "common_name": "Water flea (southern)",
    "scientific_name": "Daphnia carinata",
    "habitat": "freshwater",
    "lc50_mg_L": 0.003,
    "lc50_exposure_h": 48,
    "agnp_size_nm": 20,
    "agnp_coating": "PVP",
    "marker_type": "triangle",
    "notes": "48h LC50 = 0.003 mg/L (3 µg/L) PVP-AgNPs in reconstituted freshwater. Extremely sensitive — among most sensitive test organisms globally. Lekamge et al. 2018 RMIT (Environ. Sci. Nano). Native to Australia, Southeast Asia, India.",
    "locations": [
      { "name": "Murray-Darling Basin, Australia", "lat": -34.5, "lon": 143.0 },
      { "name": "Queensland coastal streams, Australia", "lat": -22.0, "lon": 147.0 },
      { "name": "Western Australia coastal lakes", "lat": -31.5, "lon": 116.5 },
      { "name": "Victoria wetlands, Australia", "lat": -37.5, "lon": 145.0 },
      { "name": "South Australia inland waters", "lat": -33.5, "lon": 139.0 }
    ],
    "citation": "Lekamge et al. 2018 Environ. Sci. Nano",
    "doi": "10.1039/C7EN01024A"
  },
  {
    "common_name": "Australian freshwater shrimp",
    "scientific_name": "Paratya australiensis",
    "habitat": "freshwater",
    "lc50_mg_L": 0.011,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 20,
    "agnp_coating": "PVP",
    "marker_type": "triangle",
    "notes": "96h LC50 = 0.011 mg/L PVP-AgNPs. Highly sensitive native Australian freshwater invertebrate; endemic to eastern/southern Australia. Lekamge et al. 2018 RMIT; coating aging study Lekamge et al. 2020 (PubMed 31900064) confirms toxicity increases as PVP weathers.",
    "locations": [
      { "name": "Sydney basin streams, NSW, Australia", "lat": -33.7, "lon": 151.0 },
      { "name": "Blue Mountains streams, NSW, Australia", "lat": -33.7, "lon": 150.3 },
      { "name": "ACT lowland streams, Australia", "lat": -35.4, "lon": 149.1 },
      { "name": "Victorian highland streams, Australia", "lat": -37.2, "lon": 146.5 },
      { "name": "South-east Queensland streams, Australia", "lat": -27.8, "lon": 152.8 }
    ],
    "citation": "Lekamge et al. 2018 Environ. Sci. Nano; Lekamge et al. 2020 Environ. Toxicol. Chem.",
    "doi": "10.1039/C7EN01024A"
  },
  {
    "common_name": "Common hydra",
    "scientific_name": "Hydra vulgaris",
    "habitat": "freshwater",
    "lc50_mg_L": 0.085,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 20,
    "agnp_coating": "PVP",
    "marker_type": "triangle",
    "notes": "96h LC50 = 0.085 mg/L PVP-AgNPs. Cosmopolitan cnidarian; widely used invertebrate toxicity model. Lekamge et al. 2018 RMIT. Found globally in temperate and subtropical freshwaters.",
    "locations": [
      { "name": "Murray-Darling Basin ponds, Australia", "lat": -35.0, "lon": 143.5 },
      { "name": "Lake Eildon, Victoria, Australia", "lat": -37.2, "lon": 145.9 },
      { "name": "New Zealand lowland ponds", "lat": -37.8, "lon": 175.5 },
      { "name": "North Island wetlands, NZ", "lat": -38.5, "lon": 176.0 }
    ],
    "citation": "Lekamge et al. 2018 Environ. Sci. Nano",
    "doi": "10.1039/C7EN01024A"
  },
  {
    "common_name": "Silver carp",
    "scientific_name": "Hypophthalmichthys molitrix",
    "habitat": "freshwater",
    "lc50_mg_L": 0.34,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 25,
    "agnp_coating": "none (bare, Nanocid)",
    "marker_type": "triangle",
    "notes": "96h LC50 = 0.34 ppm AgNP (Nanocid commercial preparation, ~25 nm). Hedayati et al. 2012 BJVM Trakia Univ. Economically important carp species native to China; introduced widely across Asia, Middle East (Iran), and Eastern Europe. Fingerlings tested at 0.5‰ freshwater.",
    "locations": [
      { "name": "Caspian Sea basin rivers, Iran", "lat": 37.0, "lon": 50.5 },
      { "name": "Karun River, Iran", "lat": 31.5, "lon": 48.5 },
      { "name": "Euphrates River, Iraq/Syria", "lat": 34.0, "lon": 43.0 },
      { "name": "Amu Darya, Uzbekistan/Turkmenistan", "lat": 41.0, "lon": 60.0 },
      { "name": "Yangtze River (native), China", "lat": 30.5, "lon": 116.0 },
      { "name": "Yellow River, China", "lat": 36.0, "lon": 104.0 }
    ],
    "citation": "Hedayati et al. 2012 BJVM Trakia Univ. (bjvm.trakia-uni.bg)",
    "doi": ""
  },
  {
    "common_name": "Mozambique tilapia",
    "scientific_name": "Oreochromis mossambicus",
    "habitat": "freshwater/estuarine",
    "lc50_mg_L": 3.2,
    "lc50_exposure_h": 96,
    "agnp_size_nm": 40,
    "agnp_coating": "citrate",
    "marker_type": "triangle",
    "notes": "In vivo AgNP toxicity study showing hepatotoxicity and nephrotoxicity at sub-lethal doses. LC50 estimated ~3.2 mg/L from dose-response data in SRM Institute Chennai study (PMC10874924). Euryhaline species tolerating 0–50‰; native East Africa and Indian subcontinent; widely cultured. Critical for India west coast, Persian Gulf aquaculture risk.",
    "locations": [
      { "name": "West coast India (Malabar coast, Kerala)", "lat": 10.5, "lon": 76.5 },
      { "name": "Tamil Nadu coast, India", "lat": 10.8, "lon": 79.8 },
      { "name": "Andhra Pradesh estuaries, India", "lat": 16.0, "lon": 81.5 },
      { "name": "Sri Lanka coastal lagoons", "lat": 7.5, "lon": 80.5 },
      { "name": "Persian Gulf aquaculture (UAE/Qatar)", "lat": 25.5, "lon": 56.0 },
      { "name": "East Africa (Zanzibar coastal waters)", "lat": -6.0, "lon": 39.5 }
    ],
    "citation": "Murugesan et al. 2024 PMC10874924 (Sci. Rep.)",
    "doi": "10.1038/s41598-024-54012-4"
  },
  {
    "common_name": "Ciliate (silver-lethal protist)",
    "scientific_name": "Tetrahymena thermophila",
    "habitat": "freshwater",
    "lc50_mg_L": 0.000796,
    "lc50_exposure_h": 1,
    "agnp_size_nm": 35,
    "agnp_coating": "PVP (Argovit)",
    "marker_type": "triangle",
    "notes": "LC50 = 796 ng/L (0.000796 mg/L) for Argovit AgNPs at 60 min exposure. Single most sensitive organism in any AgNP dataset. Mexican lab study (UNAM/CINVESTAV), freshwater ciliate model. Ag+ released → membrane disruption even at ng/L. Gutiérrez-Praena et al. 2019 PubMed 31877275. Cosmopolitan; occurs in Mexican lakes, rivers, ornamental ponds globally.",
    "locations": [
      { "name": "Lake Chapala, Jalisco, Mexico", "lat": 20.2, "lon": -103.0 },
      { "name": "Patzcuaro Lake, Michoacan, Mexico", "lat": 19.6, "lon": -101.6 },
      { "name": "Valley of Mexico (Xochimilco), Mexico City", "lat": 19.3, "lon": -99.1 },
      { "name": "Sonoran ponds, northwest Mexico", "lat": 28.0, "lon": -110.0 }
    ],
    "citation": "Gutiérrez-Praena et al. 2019 Chemosphere (PubMed 31877275)",
    "doi": "10.1016/j.chemosphere.2019.124949"
  }
];