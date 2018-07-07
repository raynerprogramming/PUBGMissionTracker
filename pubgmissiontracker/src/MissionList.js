export default function GetDefaultMissions  () {
    return [
      {
        Title: "NORMAL",
        "Missions": [
          CreateMission("[Linked Mission: 1/5] Deal at least 500 Damage and kill at least 1 player in a single game", 160),
          CreateMission("[Linked Mission: 2/5] Heal at least 200 HP 5 times in a single game", 160),
          CreateMission("[Linked Mission: 3/5] Locked", 160),
          CreateMission("[Linked Mission: 4/5] Locked", 160),
          CreateMission("[Linked Mission: 5/5] Locked", 320),
          CreateMission("Travel a total of 100km or more in vehicles", 400),
          CreateMission("Play 30 games on Erangel and Miramar", 400),
          CreateMission("Kill 100 players", 400),
          CreateMission("Reach the top 10 on Erangel 5 times", 300),
          CreateMission("Revive teammates 10 times", 300),
          CreateMission("Kill a player who's at least 300m away using an SR", 300),
          CreateMission("Play 5 Squad games where you survived for at least 30 minutes and killed at least 1 player", 300)
        ]
      },
      {
        Title: "SANHOK",
        "Missions": [
          CreateMission("[Linked Mission: 1/2] Play on Sanhok at least 10 times", 40),
          CreateMission("[Linked Mission: 2/2] Play on Sanhok at least 5 hours", 60),
          CreateMission("[Linked Mission: 1/4] Reach top 10 on Sanhok in Solos", 40),
          CreateMission("[Linked Mission: 2/4] Survive for 15 minutes in Solos without taking or dealing any damage on Sanhok", 40),
          CreateMission("[Linked Mission: 3/4] Reach top 10 without riding in a vehicle on Sanhok in solos", 40),
          CreateMission("[Linked Mission: 4/4] Win a Chicken Dinner in Solos on Sanhok", 60),
          CreateMission("[Linked Mission: 1/4] Kill a player with a QBZ", 40),
          CreateMission("[Linked Mission: 2/4] Play 3 games on Sanhok where you got a least 1 headshot kill in Solos", 40),
          CreateMission("[Linked Mission: 3/4] Locked", 40),
          CreateMission("[Linked Mission: 4/4] Locked", 60),
          CreateMission("[Linked Mission: 1/5] Kill a player with a punch on Sanhok", 40),
          CreateMission("[Linked Mission: 2/5] Kill a player using an SMG on Sanhok", 40),
          CreateMission("[Linked Mission: 3/5] Locked", 40),
          CreateMission("[Linked Mission: 4/5] Locked", 40),
          CreateMission("[Linked Mission: 5/5] Locked", 60),
          CreateMission("[Linked Mission: 1/1] Revive 10 teammates on Sanhok", 40),
          CreateMission("[Linked Mission: 2/2] Locked", 40),
          CreateMission("[Linked Mission: 3/3] Locked", 40),
          CreateMission("[Linked Mission: 4/4] Locked", 40),
          CreateMission("[Linked Mission: 5/5] Locked", 60)
        ]
      },
      {
        Title: "WEEK 1",
        "Missions": [
          CreateMission("Kill 10 players", 100),
          CreateMission("Drive 10km in any vehicle in FPP on Miramar", 100),
          CreateMission("Kill 3 players using handguns", 100),
          CreateMission("Travel 50km by any means", 100),
          CreateMission("Reach top 3 and kill less than 3 players in Solos", 100),
          CreateMission("Reach top 5 5 times", 100),
          CreateMission("Various ways to kill", 200),
          CreateMission("Get a kill using a melee weapon", 20),
          CreateMission("Get a kill with headshot", 20),
          CreateMission("Get a kill with a molotov", 20),
          CreateMission("Get a kill with a vehicle", 20),
          CreateMission("Get a kill with a frag grenade", 20)
        ]
      },
      {
        Title: "WEEK 2",
        "Missions": [
          CreateMission("Play on Miramar for 3 hours or more", 100),
          CreateMission("Heal for 300 HP total", 100),
          CreateMission("Kill 2 players using a pan in Solos", 100),
          CreateMission("Kill 3 players with vehicle", 100),
          CreateMission("Take at least 500 damage from the bluezone", 100),
          CreateMission("Refuel 10 times total", 100),
          CreateMission("Destroy helmets, vests, and vehicles 3 times each", 200),
          CreateMission("Destroy 3 helmets", 20),
          CreateMission("Destroy 3 vests", 20),
          CreateMission("Destroy 3 vehicles", 20)
        ]
      },
      {
        Title: "WEEK 3",
        "Missions": [
          CreateMission("Take 2,000 damage or more in games where you've played for 5 minutes or more (excluding the damage from the bluezone or teammates)", 100),
          CreateMission("Reach top 5 10 times in Squads", 100),
          CreateMission("Reach top 10 without using any healing items till the end of a match", 100),
          CreateMission("Knock down enemies 50 times", 100),
          CreateMission("Restore 200 health using any healing item", 100),
          CreateMission("Use a med kit", 100),
          CreateMission("Drive every vehicle type on Miramar", 200),
          CreateMission("Drive a Mirado", 20),
          CreateMission("Drive a van", 20),
          CreateMission("Drive a buggy", 20),
          CreateMission("Drive a pickup", 20),
          CreateMission("Drive a motorbike", 20),
          CreateMission("Drive a three-wheeled motorbike", 20),
          CreateMission("Drive a boat", 20),
          CreateMission("Drive an Aquarail", 20)
        ]
      },
      {
        Title: "WEEK 4",
        "Missions": [
          CreateMission("Locked", 100),
          CreateMission("Locked", 100),
          CreateMission("Locked", 100),
          CreateMission("Locked", 100),
          CreateMission("Locked", 100),
          CreateMission("Locked", 100),
          CreateMission("Locked", 200),
          CreateMission("Locked", 20),
          CreateMission("Locked", 20),
          CreateMission("Locked", 20)
        ]
      }
    ]
  }
  var CreateMission = (text, xp) => {
    return {
      "text": text,
      "xp": xp,
      "completed": true
    };
  }