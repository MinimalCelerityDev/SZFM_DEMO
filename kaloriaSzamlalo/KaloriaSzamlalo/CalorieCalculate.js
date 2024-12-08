function calorieCalculate(nksz, goalType) {
    /**
     * Kalória módosítás különböző célokhoz:
     * - Gyors fogyás: -1000 kcal/nap (heti 1 kg).
     * - Lassú fogyás: -500 kcal/nap (heti 0.5 kg).
     * - Tömegnövelés: +400 kcal/nap (heti 0.25-0.5 kg izomnövekedés).
     */
    let calorieAdjustment = 0;

    if (goalType === 'quick') {
        calorieAdjustment = -1000;
    } 
    if (goalType === 'slow') {
        calorieAdjustment = -500;
    } 
    if (goalType === 'bulk') {
        calorieAdjustment = 400;
    }

    const adjustedCalorieIntake = nksz + calorieAdjustment;

    return adjustedCalorieIntake;
}

//Példa
const nksz = 2638;
const weightLossQuick = 'quick';
const weightLossSlow = 'slow';
const weightGainBulk = 'bulk';

const quickResult = calorieCalculate(nksz, weightLossQuick);
const slowResult = calorieCalculate(nksz, weightLossSlow);
const bulkResult = calorieCalculate(nksz, weightGainBulk);

console.log(`Kalória bevitel gyors fogyáshoz: ${quickResult.adjustedCalorieIntake} kcal`);

console.log(`Kalória bevitel lassú fogyáshoz: ${slowResult.adjustedCalorieIntake} kcal`);

console.log(`Kalória bevitel tömegnöveléshez: ${bulkResult.adjustedCalorieIntake} kcal`);
