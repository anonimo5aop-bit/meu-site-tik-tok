let score = JSON.parse(localStorage.getItem("liveScore") || '{"lula":0,"flavio":0}');

function render(){
  const total = score.lula + score.flavio;
  const lp = total ? (score.lula / total * 100) : 0;
  const fp = total ? (score.flavio / total * 100) : 0;

  document.getElementById("lulaCount").textContent = score.lula;
  document.getElementById("flavioCount").textContent = score.flavio;
  document.getElementById("lulaPct").textContent = lp.toFixed(1) + "%";
  document.getElementById("flavioPct").textContent = fp.toFixed(1) + "%";
  document.getElementById("total").textContent = total;
  document.getElementById("lulaBar").style.width = (total ? lp : 50) + "%";
  document.getElementById("flavioBar").style.width = (total ? fp : 50) + "%";
  localStorage.setItem("liveScore", JSON.stringify(score));
}

function addPoint(candidate){
  score[candidate]++;
  render();
}

function resetScore(){
  if(confirm("Zerar o placar?")){
    score = {lula:0, flavio:0};
    render();
  }
}

// Ponto de integração futuro:
// quando o servidor receber um presente da live, ele deverá atualizar
// score.lula ou score.flavio e chamar render().
render();
