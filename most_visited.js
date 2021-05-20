const travel_history = {
  "John": ["PAK", "USA", "MEX"],
  "Mark": ["UAE","UK", "DEN", "USA"],
  "Rite": ["PAK", "KSA", "PAK", "MEX", "USA"],
  "Jess": ["PAK", "UAE", "IND"]
}

function findMostVisited(history) {
  let historyHash = {};
  let maxCountryName = '';
  let maxCountryCount = 0;
  for (const [key, value] of Object.entries(history)) {
    for (let i=0; i<value.length; i++) {
      if (historyHash[value[i]] == undefined) {
        historyHash[value[i]] = 1;
      } else {
        historyHash[value[i]] += 1;
      }

      if (historyHash[value[i]] > maxCountryCount) {
        maxCountryName = value[i];
        maxCountryCount = historyHash[maxCountryName];
      }
    }
  }
  console.log(historyHash);
  return maxCountryName;
}

console.log(findMostVisited(travel_history));