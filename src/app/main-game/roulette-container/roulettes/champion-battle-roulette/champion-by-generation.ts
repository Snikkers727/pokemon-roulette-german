import { GymLeader } from "../../../../interfaces/gym-leader";

export const championByGeneration: Record<number, GymLeader[]> = {
    1: [
        {
            name: 'Blue',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/FireRed_LeafGreen_Blue.png",
            quotes: [
                "Mein Team kann jeden Pokémon-Typ besiegen.",
                "Und jetzt… bin ich der Pokémon-Liga-Champion!",
                "Ich sage dir: Ich bin der stärkste Trainer der Welt!"
            ]
        }
    ],
    2: [
        {
            name: 'Lance',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Masters_Lance_Dragonite_artwork.png",
            quotes: [
                "Als der stärkste Trainer und als Pokémon-Liga-Champion…",
                "Ich, Lance, der Drachenmeister, nehme deine Herausforderung an!"
            ]
        }
    ],
    3: [
        {
            name: 'Steven',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Omega_Ruby_Alpha_Sapphire_Steven.png",
            quotes: [
                "Das Reisen durch das reiche Land Hoenn… Hat es etwas in dir geweckt?",
                "Ich möchte, dass du mit allem antritts, was du gelernt hast."
            ]
        }
    ],
    4: [
        {
            name: 'Cynthia',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Diamond_Pearl_Cynthia.png",
            quotes: [
                "Ich bin so froh, dass ausgerechnet du mich heute herausforderst!",
                "Ich nehme deine Herausforderung mit allem, was ich habe, an!"
            ]
        }
    ],
    5: [
        {
            name: 'Alder',
            sprite:'https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Black_White_Alder.png',
            quotes: [
                "Ich habe mich wirklich darauf gefreut, herauszufinden, wer der stärkste Pokémon-Trainer in der Einall-Region ist! Kiai!"
            ]
        }
    ],
    6: [
        {
            name: 'Diantha',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/XY_Diantha.png",
            quotes: [
                "Ich kann es kaum erwarten zu sehen, wozu du und deine Pokémon in der Lage seid, jetzt wo ich genau weiß, was du bereits geleistet hast!"
            ]
        }
    ],
    7: [
        {
            name: 'Professor Kukui/Hau',
            sprite: [
                "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Sun_Moon_Professor_Kukui.png",
                "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/USUM_Hau.png"
            ],
            quotes: [
                "Ich will eigentlich nicht der Champion der Pokémon-Liga sein, die ich selbst gegründet habe, aber es ist doch nichts falsch daran, den stärksten Trainer aller Zeiten herausfordern zu wollen, oder?",
                "Ich möchte wirklich einen ernsthaften Kampf gegen dich! Ich will wirklich in der Lage sein, gegen dich zu gewinnen!"
            ]
        }
    ],
    8: [
        {
            name: 'Leon',
            sprite: "https://raw.githubusercontent.com/zeroxm/pokemon-roulette-trainer-sprites/refs/heads/main/sprites/Sword_Shield_Leon.png",
            quotes: [
                "Die Zeit ist gekommen, bis nur noch der größte Herausforderer übrig bleibt!",
                "Also, im Namen des Vorsitzenden darf ich sagen... mögen die Finalrunden beginnen!"
            ]
        }
    ]
}