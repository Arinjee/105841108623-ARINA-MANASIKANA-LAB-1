function myFunction() {
  var taehyungElement = document.getElementById('Taehyung');
  var randomChoice = Math.random() < 0.5 ? 'Pilih taehyung broww' : 'Pilih taehyung broww'
  taehyungElement.innerText = randomChoice;
}