export default function breakingRecords(scores, index) {
  // scores: [10, 5, 20, 20, 4, 5, 2, 25, 1]
  console.log('RUNNING FUNCTION');
  let highLowScores = [];
  let highScore = scores[0];
  let highScoreCount = 0;
  let lowScore = scores[0];
  let lowScoreCount = 0;
  let games = scores.length;
  let i = index;

  console.log(`score is: ${scores[i]}`);
  if (scores[i] > highScore) {
    highScore = scores[i];
    console.log(`'highScore: ${highScore}`);
    highScoreCount++;
  }

  console.log(`score is: ${scores[i]}`);
  if (scores[i] < lowScore) {
    lowScore = scores[i];
    console.log(`'lowScore: ${lowScore}`);
    lowScoreCount++;
  }

  highLowScores.push(highScoreCount);
  highLowScores.push(lowScoreCount);
  return highLowScores;
}
let scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];
