// Updated array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Output the total number of batteries
console.log(totalBatteries);