const API_KEY = "dd0b1f710e97d9f2aee05855863dc2dc";

// Example live matches
let allLiveMatches = [
  {home:"Liverpool",away:"Man City",league:"Premier League",score:"2-1",date:"2026-01-16",stream:"#"},
  {home:"Real Madrid",away:"Barcelona",league:"La Liga",score:"1-1",date:"2026-01-16",stream:"#"},
  {home:"AC Milan",away:"Juventus",league:"Serie A",score:"0-0",date:"2026-01-16",stream:"#"}
];

const liveContainer = document.getElementById("liveMatches");
function displayMatches(matches){
  liveContainer.innerHTML="";
  if(matches.length===0){
    liveContainer.innerHTML="No matches found.";
    return;
  }
  matches.forEach(m=>{
    liveContainer.innerHTML+=`<div class="card">
      <div class="info">
        <h4>${m.home} ${m.score} ${m.away}</h4>
        <small>${m.league} • ${m.date}</small>
        <a href="${m.stream}" target="_blank">Watch Live</a>
      </div></div>`;
  });
}
displayMatches(allLiveMatches);

function applyFilters(){
  const league = document.getElementById("leagueFilter").value;
  let filtered = allLiveMatches.filter(m=> league==="" || m.league===league);
  displayMatches(filtered);
}
