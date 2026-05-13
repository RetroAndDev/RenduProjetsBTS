// ===================================================================
// FICHIER CENTRALISÉ DE DONNÉES - CARTOUCHE STUDIO
// ===================================================================
// Ce fichier contient toutes les données produits pour les DevKits,
// Physical Media, et Workstation Configurations
// ===================================================================

// ===================================================================
// DEVKITS - DONNÉES COMPLÈTES (pour kits.html détail)
// ===================================================================
const kitsData = [
    {
        "id": "psone",
        "title": "PlayStation 1 DevKit",
        "subtitle": "Console modifiée avec kernel de développement intégré",
        "heroSubtitle": "Le classique incontournable pour le développement homebrew",
        "price": 699,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La PlayStation 1 reste une plateforme de choix pour les développeurs homebrew. Notre DevKit PS1 intègre des modifications professionnelles permettant l'exécution de code custom, le débogage avancé et le prototypage rapide de jeux indépendants.",
        "quickSpecs": [
            { "label": "CPU", "value": "MIPS R3000A 33.9 MHz" },
            { "label": "RAM", "value": "2 MB + 1 MB D-Cache" },
            { "label": "GPU", "value": "GeForce4 débloquée" },
            { "label": "Stockage", "value": "Lecteur CD-R modifié" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>MIPS R3000A</strong><br>33.9 MHz (overclockable)<br>Architecture RISC 32-bit<br>Débloquage complet des modes de développement"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>RAM Principale:</strong> 2 MB<br><strong>D-Cache:</strong> 1 MB<br><strong>VRAM:</strong> 1 MB (512×512)<br>Accès complet pour débogage"
            },
            {
                "icon": "🎨",
                "title": "GPU - Graphiques",
                "content": "<strong>GeForce4 MX débloquée</strong><br>Résolution max: 1024×768<br>Palettes 24-bit et alpha blending<br>Polygones jusqu'à 360K/sec"
            },
            {
                "icon": "🔊",
                "title": "Audio",
                "content": "<strong>SPU (Sound Processing Unit)</strong><br>24 canaux PCM 16-bit<br>44.1 kHz sample rate<br>ADPCM 4-bit compression"
            },
            {
                "icon": "💿",
                "title": "Stockage & Média",
                "content": "<strong>Lecteur CD-R modifié</strong><br>Support CD-R 700MB<br>Vitesse 2x-4x (customizable)<br>CD-DA audio support"
            },
            {
                "icon": "🔌",
                "title": "Connectivité",
                "content": "<strong>USB 2.0 High-Speed</strong><br><strong>Serial Debug Port</strong><br>Adaptateurs HDMI/Composite<br>Ethernet Network Adapter"
            }
        ],
        "modifications": "✓ Kernel de développement pré-installé | ✓ Déverrouillage du lecteur CD intégré | ✓ Ports de débogage actifs | ✓ Support multi-format CD-R/CD-RW",
        "includes": [
            "Console PlayStation 1 modifiée professionnellement",
            "Kernel de développement pré-configuré",
            "Câble SCART RGB haute qualité",
            "Adaptateur secteur et câbles de connexion",
            "1 Memory Card 1MB",
            "Manette DualShock originale (testée)",
            "Disques de test (démos homebrew)",
            "Documentation SDK complète",
            "Guide de démarrage rapide",
            "Support technique 6 mois"
        ],
        "options": [
            {
                "id": "scart",
                "icon": "🔌",
                "title": "SCART RGB",
                "description": "Câble haute qualité",
                "price": 25
            },
            {
                "id": "extra-cards",
                "icon": "💾",
                "title": "Memory Cards",
                "description": "2 cartes 1MB",
                "price": 30
            },
            {
                "id": "game-titles",
                "icon": "🎮",
                "title": "Pack Jeux",
                "description": "5 titres démo",
                "price": 50
            },
            {
                "id": "case-custom",
                "icon": "📦",
                "title": "Boîtier Custom",
                "description": "Branding perso",
                "price": 40
            }
        ]
    },
    {
        "id": "ps2",
        "title": "PlayStation 2 DevKit",
        "subtitle": "Console modifiée avec outils de développement",
        "heroSubtitle": "La console la plus vendue au monde, maintenant ouverte aux devs",
        "price": 599,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La PlayStation 2 représente l'âge d'or du jeu vidéo. Notre DevKit PS2 déverrouille tout son potentiel avec des outils professionnels de développement, permettant la création de jeux homebrew sophistiqués.",
        "quickSpecs": [
            { "label": "CPU", "value": "Emotion Engine 294 MHz" },
            { "label": "RAM", "value": "32 MB RDRAM" },
            { "label": "GPU", "value": "Graphics Synthesizer" },
            { "label": "Stockage", "value": "DVD-R + HDD 40GB" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>Emotion Engine</strong><br>294 MHz CPU principal<br>2x Vector Processing Units<br>Architecture 128-bit"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>RAM Principale:</strong> 32 MB RDRAM<br><strong>VRAM:</strong> 4 MB eDRAM<br><strong>IOP RAM:</strong> 2 MB"
            },
            {
                "icon": "🎨",
                "title": "GPU - Graphics Synthesizer",
                "content": "<strong>Fréquence:</strong> 147 MHz<br>Résolution max: 1280×1024<br>Fill rate: 2.4 Gpixels/sec<br>75 millions polygones/sec"
            },
            {
                "icon": "🔊",
                "title": "Audio",
                "content": "<strong>SPU2</strong><br>48 canaux ADPCM<br>Support Dolby Digital/DTS<br>Synthèse audio temps réel"
            },
            {
                "icon": "💿",
                "title": "Stockage",
                "content": "<strong>Lecteur DVD modifié</strong><br>Support DVD-R/DVD-RW<br>HDD 40GB intégré<br>Support USB 2.0"
            },
            {
                "icon": "🔌",
                "title": "Connectivité",
                "content": "<strong>Ethernet 10/100</strong><br><strong>USB 2.0 x2</strong><br>Port FireWire (i.LINK)<br>Ports Memory Card x2"
            }
        ],
        "modifications": "✓ FreeMCBoot pré-installé | ✓ Lecteur DVD multi-région | ✓ HDD avec outils de dev | ✓ Support réseau activé",
        "includes": [
            "Console PlayStation 2 modifiée (Fat ou Slim)",
            "FreeMCBoot Memory Card 8MB",
            "Disque dur 40GB avec SDK",
            "Adaptateur réseau Ethernet",
            "2 Manettes DualShock 2",
            "Câbles AV et alimentation",
            "DVD de démarrage et tests",
            "Documentation complète PS2",
            "Outils de développement",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "component",
                "icon": "📺",
                "title": "Câble Component",
                "description": "Qualité HD",
                "price": 30
            },
            {
                "id": "hdd-upgrade",
                "icon": "💽",
                "title": "HDD 120GB",
                "description": "Plus d'espace",
                "price": 60
            },
            {
                "id": "network-adapter",
                "icon": "🌐",
                "title": "Adaptateur Wifi",
                "description": "Connectivité sans fil",
                "price": 45
            },
            {
                "id": "controllers",
                "icon": "🎮",
                "title": "2 Manettes Extra",
                "description": "DualShock 2",
                "price": 50
            }
        ]
    },
    {
        "id": "ps3",
        "title": "PlayStation 3 DevKit",
        "subtitle": "Console modifiée CFW installé",
        "heroSubtitle": "La puissance du Cell, maintenant entre vos mains",
        "price": 1099,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La PlayStation 3 avec son processeur Cell révolutionnaire offre des possibilités uniques pour le développement. Notre DevKit PS3 est équipé d'un Custom Firmware complet permettant le développement homebrew avancé.",
        "quickSpecs": [
            { "label": "CPU", "value": "Cell Broadband Engine 3.2 GHz" },
            { "label": "RAM", "value": "256 MB XDR + 256 MB GDDR3" },
            { "label": "GPU", "value": "NVIDIA RSX 550 MHz" },
            { "label": "Stockage", "value": "HDD 500GB + Blu-ray" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur Cell",
                "content": "<strong>Cell Broadband Engine</strong><br>1x PPE 3.2 GHz<br>8x SPE (Synergistic Processing Elements)<br>Architecture 64-bit"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>System RAM:</strong> 256 MB XDR<br><strong>Video RAM:</strong> 256 MB GDDR3<br>Bande passante totale: 48 GB/s"
            },
            {
                "icon": "🎨",
                "title": "GPU - NVIDIA RSX",
                "content": "<strong>Fréquence:</strong> 550 MHz<br>Architecture basée G70<br>Full HD 1080p<br>Shader Model 3.0"
            },
            {
                "icon": "🔊",
                "title": "Audio",
                "content": "<strong>7.1 canaux</strong><br>Dolby TrueHD<br>DTS-HD Master Audio<br>LPCM jusqu'à 7.1"
            },
            {
                "icon": "💿",
                "title": "Stockage",
                "content": "<strong>Lecteur Blu-ray</strong><br>HDD SATA 500GB<br>Support USB 2.0<br>Card Reader intégré"
            },
            {
                "icon": "🔌",
                "title": "Connectivité",
                "content": "<strong>Gigabit Ethernet</strong><br><strong>WiFi 802.11 b/g</strong><br>Bluetooth 2.0<br>4x USB 2.0"
            }
        ],
        "modifications": "✓ Custom Firmware (CFW) pré-installé | ✓ Homebrew activé | ✓ Débogage temps réel | ✓ Accès FTP/réseau complet",
        "includes": [
            "Console PlayStation 3 avec CFW",
            "Disque dur 500GB",
            "2 Manettes DualShock 3 / SIXAXIS",
            "Câble HDMI premium",
            "Alimentation et câbles",
            "SDK et outils de développement",
            "Exemples de code homebrew",
            "Documentation PS3 DevKit",
            "Accès serveurs de dev",
            "Support technique premium 1 an"
        ],
        "options": [
            {
                "id": "hdd-1tb",
                "icon": "💽",
                "title": "HDD 1TB",
                "description": "Stockage massif",
                "price": 80
            },
            {
                "id": "controllers-extra",
                "icon": "🎮",
                "title": "2 Manettes DS3",
                "description": "Controllers extra",
                "price": 70
            },
            {
                "id": "move",
                "icon": "🕹️",
                "title": "PlayStation Move",
                "description": "Kit complet",
                "price": 90
            },
            {
                "id": "debug-station",
                "icon": "🛠️",
                "title": "Debug Station",
                "description": "Outils avancés",
                "price": 200
            }
        ]
    },
    {
        "id": "switch",
        "title": "Nintendo Switch DevKit",
        "subtitle": "Console modifiée avec CFW Atmosphère",
        "heroSubtitle": "La console hybride, maintenant ouverte aux développeurs",
        "price": 1499,
        "stock": "✓ Stock limité - Livraison 5-7 jours",
        "icon": "🎮",
        "description": "La Nintendo Switch combine portabilité et puissance. Notre DevKit Switch est équipé d'Atmosphère CFW et permet le développement homebrew complet avec accès aux fonctionnalités uniques de la console.",
        "quickSpecs": [
            { "label": "CPU", "value": "NVIDIA Tegra X1+ Custom" },
            { "label": "RAM", "value": "4 GB LPDDR4" },
            { "label": "GPU", "value": "NVIDIA Maxwell 768 MHz" },
            { "label": "Stockage", "value": "64GB + MicroSD 512GB" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur Tegra X1+",
                "content": "<strong>CPU ARM Cortex-A57</strong><br>4 cœurs @ 1.02 GHz<br>Architecture ARM v8-A 64-bit<br>Mode portable/docked"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>RAM:</strong> 4 GB LPDDR4<br>Bande passante: 25.6 GB/s<br>Stockage interne: 64GB<br>MicroSD jusqu'à 2TB"
            },
            {
                "icon": "🎨",
                "title": "GPU - NVIDIA Maxwell",
                "content": "<strong>256 CUDA cores</strong><br>Fréquence: 307-768 MHz<br>Résolution: 1080p/720p<br>API: OpenGL, Vulkan"
            },
            {
                "icon": "🔊",
                "title": "Audio",
                "content": "<strong>5.1 surround</strong><br>Haut-parleurs stéréo intégrés<br>Jack audio 3.5mm<br>Audio Bluetooth"
            },
            {
                "icon": "💿",
                "title": "Stockage",
                "content": "<strong>Flash NAND 64GB</strong><br>MicroSD 512GB incluse<br>Lecteur cartouche<br>Support exFAT"
            },
            {
                "icon": "🔌",
                "title": "Connectivité",
                "content": "<strong>WiFi 802.11ac</strong><br><strong>Bluetooth 4.1</strong><br>USB-C (charge/data)<br>Dock avec HDMI/USB"
            }
        ],
        "modifications": "✓ Atmosphère CFW installé | ✓ Homebrew Launcher | ✓ Debug via USB | ✓ Backup de jeux légal",
        "includes": [
            "Console Nintendo Switch modifiée",
            "Atmosphère CFW pré-configuré",
            "MicroSD 512GB avec homebrew",
            "2 Joy-Cons + Grip",
            "Dock TV officiel",
            "Câbles HDMI et alimentation USB-C",
            "RCM Jig et dongle",
            "SDK et documentation Switch",
            "Collection d'apps homebrew",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "pro-controller",
                "icon": "🎮",
                "title": "Pro Controller",
                "description": "Manette Pro officielle",
                "price": 70
            },
            {
                "id": "microsd-1tb",
                "icon": "💾",
                "title": "MicroSD 1TB",
                "description": "Stockage max",
                "price": 120
            },
            {
                "id": "joycons-extra",
                "icon": "🕹️",
                "title": "Joy-Cons Extra",
                "description": "Paire supplémentaire",
                "price": 80
            },
            {
                "id": "case",
                "icon": "💼",
                "title": "Mallette Transport",
                "description": "Protection complète",
                "price": 40
            }
        ]
    },
    {
        "id": "gamecube",
        "title": "Nintendo GameCube DevKit",
        "subtitle": "Gekko PowerPC 486 MHz - GCLoader ODE",
        "heroSubtitle": "Console rétro - Gekko PowerPC",
        "price": 699,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La GameCube est une console culte avec architecture PowerPC. Notre DevKit inclut GCLoader (ODE SD), Swiss boot loader, et full support Action Replay pour déboggage et développement homebrew.",
        "quickSpecs": [
            { "label": "CPU", "value": "Gekko 486 MHz" },
            { "label": "GPU", "value": "Flipper 162 MHz" },
            { "label": "RAM", "value": "24 MB 1T-SRAM" },
            { "label": "Résolution", "value": "480p progressive" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>IBM Gekko</strong><br>PowerPC 750CXe 486 MHz<br>Architecture 180nm<br>Cache 256KB L2"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>24 MB 1T-SRAM</strong><br>Splitter MEM1/MEM2<br>Latence 6.2ns<br>Bande passante 2.6 GB/s"
            },
            {
                "icon": "🎨",
                "title": "GPU",
                "content": "<strong>ATI Flipper</strong><br>162 MHz custom<br>TEV pipeline 4 stages<br>Embedded framebuffer"
            },
            {
                "icon": "🎮",
                "title": "Contrôles",
                "content": "<strong>4 ports manettes</strong><br>Analog triggers L/R<br>Rumble intégré<br>C-stick secondaire"
            },
            {
                "icon": "💿",
                "title": "GCLoader ODE",
                "content": "<strong>SD Card mod</strong><br>Swiss boot loader<br>256 GB microSD<br>ISOs backup loader"
            },
            {
                "icon": "🌐",
                "title": "Connectivité",
                "content": "<strong>Component HD output</strong><br>Serial Port 1/2<br>Broadband adapter<br>Hi-Speed Port"
            }
        ],
        "modifications": "✓ GCLoader ODE installé (SD replacement) | ✓ Swiss boot loader configuré | ✓ Action Replay pour debug | ✓ devkitPPC + SDK GameCube",
        "includes": [
            "Nintendo GameCube console violette",
            "GCLoader ODE installé (SD replacement)",
            "Swiss boot loader configuré",
            "256 GB microSD avec jeux",
            "1x Controller officiel",
            "Câbles A/V composite",
            "Alimentation secteur",
            "Action Replay pour debug",
            "devkitPPC + SDK GameCube",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "memory",
                "icon": "💾",
                "title": "2x Memory Cards",
                "description": "256 blocks each",
                "price": 40
            },
            {
                "id": "controllers",
                "icon": "🎮",
                "title": "2x Controllers Extra",
                "description": "Manettes officielles",
                "price": 55
            },
            {
                "id": "component",
                "icon": "📺",
                "title": "Câbles Component",
                "description": "480p progressive",
                "price": 45
            },
            {
                "id": "games",
                "icon": "💿",
                "title": "Pack Jeux GameCube",
                "description": "20 classiques",
                "price": 75
            }
        ]
    },
    {
        "id": "3ds",
        "title": "Nintendo 3DS DevKit",
        "subtitle": "Console portable avec système de développement homebrew complet",
        "heroSubtitle": "Le portable révolutionnaire avec affichage stéréoscopique 3D sans lunettes",
        "price": 799,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La Nintendo 3DS représente une avancée majeure dans le gaming portable avec son affichage auto-stéréoscopique révolutionnaire. Notre DevKit 3DS offre un accès complet au système, débogage réseau sans fil, développement homebrew et support des fonctionnalités 3D natives.",
        "quickSpecs": [
            { "label": "CPU", "value": "Dual ARM11 MPCore @ 804 MHz" },
            { "label": "GPU", "value": "PICA200 @ 268 MHz" },
            { "label": "RAM", "value": "128 MB FCRAM + 8 MB Cache" },
            { "label": "Écrans", "value": "3D Auto-stéréo + Tactile" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur Principal",
                "content": "<strong>Dual ARM11 MPCore</strong><br>Fréquence: 804 MHz (overclockable)<br>Architecture RISC 32-bit ARMv6<br>Co-processeur ARM9 @ 134 MHz"
            },
            {
                "icon": "💾",
                "title": "Système Mémoire",
                "content": "<strong>RAM Principale:</strong> 128 MB FCRAM<br><strong>L2 Cache:</strong> 8 MB dédié<br><strong>VRAM:</strong> 6 MB (128-bit)"
            },
            {
                "icon": "🎨",
                "title": "GPU PICA200",
                "content": "<strong>Digital Imaging Technician</strong><br>Horloge: 268 MHz<br>Vertex Shader programmable<br>Hardware anti-aliasing 4xMSAA"
            },
            {
                "icon": "📱",
                "title": "Système d'Affichage",
                "content": "<strong>Écran Supérieur:</strong> 3.53\" LCD<br>800×240 px (400×240 par œil)<br>3D auto-stéréoscopique<br><strong>Écran Inférieur:</strong> 3.02\" tactile 320×240 px"
            },
            {
                "icon": "🎮",
                "title": "Contrôles & Capteurs",
                "content": "<strong>Circle Pad analogique</strong><br>D-Pad + ABXY + L/R<br>Gyroscope 3-axes<br>Accéléromètre 3-axes"
            },
            {
                "icon": "🔌",
                "title": "Connectivité",
                "content": "<strong>WiFi 802.11 b/g/n</strong><br><strong>StreetPass & SpotPass</strong><br>Infrarouge<br>Slot SD Card (jusqu'à 32GB)"
            }
        ],
        "modifications": "✓ Firmware custom avec accès homebrew complet | ✓ Débogage réseau WiFi sans fil activé | ✓ Support développement 3D natif | ✓ Outils de profiling et monitoring intégrés",
        "includes": [
            "Console Nintendo 3DS débloquée professionnellement",
            "Firmware custom avec accès homebrew",
            "Chargeur secteur officiel",
            "Carte SD 32GB pré-configurée avec SDK",
            "2 Stylus officiels Nintendo",
            "Protection d'écran premium",
            "Câble USB pour transfert et débogage",
            "Kit de jeux démo homebrew (5 titres)",
            "Documentation SDK complète 3DS",
            "Support technique 6 mois"
        ],
        "options": [
            {
                "id": "xl-model",
                "icon": "📱",
                "title": "3DS XL",
                "description": "Écrans 90% plus grands",
                "price": 100
            },
            {
                "id": "circle-pad-pro",
                "icon": "🕹️",
                "title": "Circle Pad Pro",
                "description": "2ème stick + ZL/ZR",
                "price": 35
            },
            {
                "id": "extra-cards",
                "icon": "💾",
                "title": "Cartes SD Extra",
                "description": "2x 64GB haute vitesse",
                "price": 45
            },
            {
                "id": "game-pack",
                "icon": "🎮",
                "title": "Pack Jeux Démo",
                "description": "10 titres homebrew",
                "price": 60
            }
        ]
    },
    {
        "id": "vita",
        "title": "PS Vita DevKit",
        "subtitle": "ARM Cortex-A9 quad-core - OLED 960×544 écran tactile",
        "heroSubtitle": "Portable OLED - ARM quad-core SGX543MP4+",
        "price": 649,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "📱",
        "description": "La PS Vita est une console portable AAA avec écran OLED magnifique. Notre DevKit inclut HENkaku Ensō permanent, SD2Vita adapter, et accès complet au hardware pour développement homebrew.",
        "quickSpecs": [
            { "label": "CPU", "value": "ARM A9 Quad 2 GHz" },
            { "label": "GPU", "value": "SGX543MP4+ 222 MHz" },
            { "label": "RAM", "value": "512 MB LPDDR2" },
            { "label": "Écran", "value": "OLED 5\" tactile" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>ARM Cortex-A9 MPCore</strong><br>Dual-core 2.0 GHz<br>NEON SIMD engine<br>Accès complet débloqué"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>512 MB LPDDR2</strong><br>128 MB VRAM dédiée<br>Bande passante 12.8 GB/s<br>SD2Vita 256GB incluse"
            },
            {
                "icon": "🎨",
                "title": "GPU",
                "content": "<strong>SGX543MP4+</strong><br>Quad-core 222 MHz<br>OpenGL ES 2.0<br>Shaders programmables"
            },
            {
                "icon": "📱",
                "title": "Écran",
                "content": "<strong>OLED 5 pouces</strong><br>960×544 pixels<br>Tactile capacitif<br>Rear touchpad"
            },
            {
                "icon": "🔊",
                "title": "Audio",
                "content": "<strong>Stereo speakers</strong><br>Microphone intégré<br>Jack 3.5mm<br>Bluetooth audio"
            },
            {
                "icon": "🌐",
                "title": "Connectivité",
                "content": "<strong>WiFi 802.11n</strong><br>Bluetooth 2.1<br>USB debug cable<br>Near field comm"
            }
        ],
        "modifications": "✓ HENkaku Ensō CFW permanent installé | ✓ SD2Vita adapter + 256GB microSD | ✓ VitaShell + Homebrew Browser | ✓ SDK BrewEngine pour PS Vita",
        "includes": [
            "PS Vita OLED modèle PCH-1000 hackée",
            "HENkaku Ensō CFW permanent installé",
            "SD2Vita adapter + 256GB microSD",
            "Chargeur USB + câble propriétaire",
            "Étui de protection premium",
            "VitaShell + Homebrew Browser pré-installés",
            "SDK BrewEngine pour PS Vita",
            "Documentation développeur complète",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "sd-512",
                "icon": "💾",
                "title": "SD 512GB Upgrade",
                "description": "Double stockage",
                "price": 90
            },
            {
                "id": "grip",
                "icon": "🎮",
                "title": "L2/R2 Grip",
                "description": "Gâchettes arrière",
                "price": 45
            },
            {
                "id": "screen",
                "icon": "🛡️",
                "title": "Protection Écran",
                "description": "Verre trempé premium",
                "price": 35
            },
            {
                "id": "games",
                "icon": "🎮",
                "title": "Pack Homebrew",
                "description": "15 homebrews installés",
                "price": 80
            }
        ]
    },
    {
        "id": "wii",
        "title": "Nintendo Wii DevKit",
        "subtitle": "Broadway PowerPC 729 MHz - Motion Plus",
        "heroSubtitle": "Console motion gaming - Broadway PowerPC",
        "price": 449,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La Wii a révolutionné le gaming avec ses contrôles motion. Notre DevKit inclut Homebrew Channel pré-installé, USB Loader GX, et support complet pour développement homebrew avec devkitPro.",
        "quickSpecs": [
            { "label": "CPU", "value": "Broadway 729 MHz" },
            { "label": "GPU", "value": "Hollywood 243 MHz" },
            { "label": "RAM", "value": "88 MB total" },
            { "label": "Résolution", "value": "480p/1080i" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>IBM Broadway</strong><br>PowerPC 750CL 729 MHz<br>Architecture 90nm<br>Cache 256KB L2"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>88 MB total</strong><br>24 MB MEM1 1T-SRAM<br>64 MB MEM2 GDDR3<br>Bande passante 3.9 GB/s"
            },
            {
                "icon": "🎨",
                "title": "GPU",
                "content": "<strong>ATI Hollywood</strong><br>243 MHz custom<br>TEV pipeline<br>480p/1080i output"
            },
            {
                "icon": "🎮",
                "title": "Contrôles",
                "content": "<strong>Wiimote Motion Plus</strong><br>Gyroscope 3-axis<br>Accelerometer<br>IR pointing camera"
            },
            {
                "icon": "💿",
                "title": "Stockage",
                "content": "<strong>512 MB Flash NAND</strong><br>SD cards support<br>USB 2.0 x2<br>GameCube backward compat"
            },
            {
                "icon": "🌐",
                "title": "Connectivité",
                "content": "<strong>WiFi 802.11b/g</strong><br>Bluetooth 2.0<br>Ethernet via USB<br>A/V Multi Out"
            }
        ],
        "modifications": "✓ Homebrew Channel + BootMii installés | ✓ USB Loader GX configuré | ✓ 128 GB USB 3.0 pour jeux | ✓ devkitPro + SDK Wii",
        "includes": [
            "Nintendo Wii console blanche",
            "Homebrew Channel + BootMii installés",
            "USB Loader GX configuré",
            "Wiimote Motion Plus + Nunchuk",
            "Sensor bar filaire",
            "Câbles A/V composite",
            "Alimentation secteur",
            "128 GB USB 3.0 pour jeux",
            "devkitPro + SDK Wii",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "wiimotes",
                "icon": "🎮",
                "title": "2x Wiimotes Extra",
                "description": "+ Nunchuks",
                "price": 60
            },
            {
                "id": "classic",
                "icon": "🕹️",
                "title": "2x Classic Controllers",
                "description": "Style SNES",
                "price": 50
            },
            {
                "id": "component",
                "icon": "📺",
                "title": "Câbles Component",
                "description": "480p/1080i HD",
                "price": 40
            },
            {
                "id": "games",
                "icon": "💿",
                "title": "Pack Jeux Wii",
                "description": "15 jeux best-sellers",
                "price": 70
            }
        ]
    },
    {
        "id": "wiiu",
        "title": "Nintendo Wii U DevKit",
        "subtitle": "PowerPC Espresso tri-core - GamePad 6.2\" tactile",
        "heroSubtitle": "Console GamePad - PowerPC Espresso",
        "price": 899,
        "stock": "✓ En stock - Livraison 3-5 jours",
        "icon": "🎮",
        "description": "La Wii U introduit un GamePad innovant avec écran tactile et asymétrie gameplay. Notre DevKit inclut Tiramisu/Aroma CFW, Homebrew Launcher, et SDK complet pour développement avec multi-screen.",
        "quickSpecs": [
            { "label": "CPU", "value": "Espresso 1.24 GHz" },
            { "label": "GPU", "value": "AMD Radeon HD" },
            { "label": "RAM", "value": "2 GB DDR3" },
            { "label": "GamePad", "value": "6.2\" 854×480" }
        ],
        "detailedSpecs": [
            {
                "icon": "🔧",
                "title": "Processeur",
                "content": "<strong>IBM PowerPC Espresso</strong><br>Tri-core 1.24 GHz<br>Architecture 45nm<br>3 MB eDRAM cache"
            },
            {
                "icon": "💾",
                "title": "Mémoire",
                "content": "<strong>2 GB DDR3</strong><br>1 GB app memory<br>1 GB system OS<br>32 MB eDRAM GPU"
            },
            {
                "icon": "🎨",
                "title": "GPU",
                "content": "<strong>AMD Radeon HD</strong><br>550 MHz custom<br>320 shaders<br>1080p output"
            },
            {
                "icon": "🎮",
                "title": "GamePad",
                "content": "<strong>6.2\" touchscreen</strong><br>854×480 resistive<br>Accelerometer/Gyro<br>NFC reader intégré"
            },
            {
                "icon": "💿",
                "title": "Stockage",
                "content": "<strong>32 GB eMMC Flash</strong><br>USB storage support<br>SD cards<br>Optical disc drive"
            },
            {
                "icon": "🌐",
                "title": "Connectivité",
                "content": "<strong>WiFi 802.11n</strong><br>Bluetooth 4.0<br>Gigabit Ethernet<br>HDMI 1.4"
            }
        ],
        "modifications": "✓ Tiramisu/Aroma CFW installé | ✓ Homebrew Launcher configuré | ✓ 256 GB USB 3.0 storage | ✓ devkitPPC + SDK Wii U",
        "includes": [
            "Nintendo Wii U console 32 GB",
            "Tiramisu/Aroma CFW installé",
            "Homebrew Launcher configuré",
            "GamePad avec stylet et batterie",
            "Wii U Pro Controller",
            "Câbles HDMI et secteur",
            "Sensor bar sans fil",
            "256 GB USB 3.0 storage",
            "devkitPPC + SDK Wii U",
            "Support technique 1 an"
        ],
        "options": [
            {
                "id": "pro",
                "icon": "🎮",
                "title": "Pro Controller Extra",
                "description": "Manette Pro officielle",
                "price": 65
            },
            {
                "id": "gamepad-acc",
                "icon": "📱",
                "title": "GamePad Accessoires",
                "description": "Grip + screen protector",
                "price": 55
            },
            {
                "id": "hdd",
                "icon": "💾",
                "title": "HDD USB 1TB",
                "description": "Stockage externe",
                "price": 100
            },
            {
                "id": "games",
                "icon": "💿",
                "title": "Pack Jeux Wii U",
                "description": "12 exclusivités",
                "price": 80
            }
        ]
    }
];

// ===================================================================
// DEVKITS - VUE SIMPLIFIÉE (pour devkits.html listing)
// ===================================================================
const devkitsOverview = [
    { id: 'psone', title: 'PlayStation 1', icon: '💿', subtitle: 'Modchip MM3 - Homebrew complet', price: 699 },
    { id: 'ps2', title: 'PlayStation 2', icon: '🎮', subtitle: 'Emotion Engine 294 MHz + HDD', price: 599 },
    { id: 'ps3', title: 'PlayStation 3', icon: '🎮', subtitle: 'Cell 8-cœurs - Graphismes AAA', price: 1099 },
    { id: 'vita', title: 'PS Vita', icon: '📱', subtitle: 'OLED 960×544 - Portable AAA', price: 649 },
    { id: 'switch', title: 'Nintendo Switch', icon: '🎮', subtitle: 'Tegra X1 - Portable/Dock', price: 1499 },
    { id: '3ds', title: 'Nintendo 3DS', icon: '📱', subtitle: 'Dual-écran 3D stéréo', price: 799 },
    { id: 'wiiu', title: 'Wii U', icon: '🎮', subtitle: 'GamePad tactile - GX2 GPU', price: 899 },
    { id: 'wii', title: 'Nintendo Wii', icon: '🎮', subtitle: 'Broadway PowerPC - Motion Plus', price: 449 },
    { id: 'gamecube', title: 'Nintendo GameCube', icon: '🎮', subtitle: 'Gekko CPU - Graphismes 32-bit', price: 699 }
];

// ===================================================================
// PHYSICAL MEDIA - SUPPORTS PHYSIQUES
// ===================================================================
const physicalMediaData = {
    optical: {
        title: "💿 Supports optiques",
        items: [
            { id: "bluray-8", name: "Blu-Ray 8 Go", icon: "📀", price: 4, display: "Blu-Ray 8G - 4$" },
            { id: "bluray-25", name: "Blu-Ray 25 Go", icon: "📀", price: 5, display: "Blu-Ray 25G - 5$" },
            { id: "bluray-50", name: "Blu-Ray 50 Go", icon: "📀", price: 7, display: "Blu-Ray 50G - 7$" },
            { id: "dvd-5", name: "DVD 5 Go", icon: "📀", price: 3, display: "DVD 5G - 3$" },
            { id: "dvd-9", name: "DVD 9 Go", icon: "📀", price: 5, display: "DVD 9G - 5$" },
            { id: "cd-500", name: "CD 500 Mo", icon: "💿", price: 1, display: "CD 500M - 1$" },
            { id: "cd-750", name: "CD 750 Mo", icon: "💿", price: 2, display: "CD 750M - 2$" }
        ]
    },
    nintendo: {
        title: "🎮 Disques Nintendo",
        items: [
            { id: "nod-gc", name: "GameCube 1.5 Go", icon: "🎮", price: 5, display: "GCube 1.5G - 5$" },
            { id: "nod-wii5", name: "Wii 5 Go", icon: "🎮", price: 3.5, display: "Wii 5G - 3.5$" },
            { id: "nod-wii8", name: "Wii 8 Go", icon: "🎮", price: 5.5, display: "Wii 8G - 5.5$" },
            { id: "nod-wiiu", name: "Wii U 25 Go", icon: "🎮", price: 7, display: "Wii U 25G - 7$" }
        ]
    },
    cartridges: {
        title: "📱 Cartouches",
        items: [
            { id: "cart-vita2", name: "PS Vita 2 Go", icon: "📱", price: 3, display: "Vita 2G - 3$" },
            { id: "cart-vita4", name: "PS Vita 4 Go", icon: "📱", price: 5, display: "Vita 4G - 5$" },
            { id: "cart-switch2", name: "Switch 2 Go", icon: "🎮", price: 2, display: "Switch 2G - 2$" },
            { id: "cart-switch4", name: "Switch 4 Go", icon: "🎮", price: 3.5, display: "Switch 4G - 3.5$" },
            { id: "cart-switch8", name: "Switch 8 Go", icon: "🎮", price: 4, display: "Switch 8G - 4$" },
            { id: "cart-switch16", name: "Switch 16 Go", icon: "🎮", price: 5.5, display: "Switch 16G - 5.5$" },
            { id: "cart-3ds2", name: "3DS 2 Go", icon: "📱", price: 3, display: "3DS 2G - 3$" },
            { id: "cart-3ds4", name: "3DS 4 Go", icon: "📱", price: 4, display: "3DS 4G - 4$" }
        ]
    }
};

// ===================================================================
// WORKSTATION - CONFIGURATIONS POSTE DE TRAVAIL
// ===================================================================
const workstationConfigs = [
    {
        id: "base",
        name: "Base",
        icon: "💻",
        badge: { text: "💡 Starter", gradient: "linear-gradient(135deg, #06b6d4, #0284c7)" },
        storage: {
            ssd: { size: "512 GB", type: "SSD NVMe Gen4" },
            hdd: { size: "1 TB", type: "HDD 7200rpm" }
        },
        price: 6299,
        featured: false,
        description: "Base: 512GB SSD + 1TB HDD"
    },
    {
        id: "pro",
        name: "Pro",
        icon: "💻",
        badge: { text: "⭐ Optimal", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
        storage: {
            ssd: { size: "1 TB", type: "SSD NVMe Gen4" },
            hdd: { size: "1 TB", type: "HDD 7200rpm" }
        },
        price: 6599,
        featured: false,
        description: "Pro: 1TB SSD + 1TB HDD"
    },
    {
        id: "pro-plus",
        name: "Pro+",
        icon: "💻",
        badge: { text: "🚀 POPULAIRE", gradient: "linear-gradient(135deg, var(--accent), #f59e0b)" },
        storage: {
            ssd: { size: "1 TB", type: "SSD NVMe Gen4" },
            hdd: { size: "2 TB", type: "HDD 7200rpm" }
        },
        price: 6799,
        featured: true,
        description: "Pro+: 1TB SSD + 2TB HDD"
    },
    {
        id: "ultimate",
        name: "Ultimate",
        icon: "💻",
        badge: { text: "👑 Premium", gradient: "linear-gradient(135deg, #a855f7, #7c3aed)" },
        storage: {
            ssd: { size: "2 TB", type: "SSD NVMe Gen4" },
            hdd: { size: "1 TB", type: "HDD 7200rpm" }
        },
        price: 6999,
        featured: false,
        description: "Ultimate: 2TB SSD + 1TB HDD"
    }
];
