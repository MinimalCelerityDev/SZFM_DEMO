function calorieNeed(weight, height, age, activityLevel, gender) {
    //Harris-Benedict képlet alapján anyagcsere számítása (anyagcsere = acs)
    let acs;
    if (gender === 'férfi') {
        acs = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        acs = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    //Tevékenység szorzó (1-10-es skálát átkonvertáljuk 1.2 - 2.0 közötti értékre)
    const activityMultiplier = 1.2 + (activityLevel - 1) * (0.08);

    //Napi kalória szükséglet (nksz)
    const nksz = acs * activityMultiplier;

    //Kerekítés
    return Math.round(nksz);
}

//Példa
const weight = 70;
const height = 175;
const age = 30;
const activityLevel = 6;
const gender = 'férfi';

const neededCalories = calorieNeed(weight, height, age, activityLevel, gender);
console.log(`Napi szükséges kalóriabevitel: ${neededCalories} kcal`);