const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/leagueMatches.json', 'utf8'));
const teteMatches = data.filter(m => m.Equipedom === 'TETE CRAMEE FC' || m.Equipeext === 'TETE CRAMEE FC');

console.log('Nombre total de matchs TETE CRAMEE FC:', teteMatches.length);
console.log('');

teteMatches.forEach((m, i) => {
  const opponent = m.Equipedom === 'TETE CRAMEE FC' ? m.Equipeext : m.Equipedom;
  const home = m.Equipedom === 'TETE CRAMEE FC' ? 'DOM' : 'EXT';
  const date = m.Date ? (m.Date.includes('/Date(') ? new Date(parseInt(m.Date.match(/\d+/)[0])).toLocaleString('fr-FR') : m.Date) : 'Pas de date';
  console.log(`${i+1}. ${m.JourneeName} - ${home} vs ${opponent}`);
  console.log(`   Date: ${date}`);
  console.log('');
});

