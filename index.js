const insertNewRow = (tableName, data) => {
  const table = document.getElementById(tableName);
  const tbody = table.getElementsByTagName('tbody')[0];
  const newRow = tbody.insertRow(table.length);

  let index = 0;
  for (let key in data) {
    const newCell = newRow.insertCell(index)
    newCell.innerHTML = data[key];
    index++;
  }
}


const barsIcon = document.getElementById('icon-bars')
const arrowIcon = document.getElementById('icon-arrow')
const filmes = document.getElementById('filmes')
const atores = document.getElementById('atores')
const categorias = document.getElementById('categorias')
barsIcon.addEventListener("click", () => {
  changeState('menu-lateral')
})
arrowIcon.addEventListener("click", () => {
  changeState('menu-logout')
})
filmes.addEventListener("click", () => {
  window.location.href = "/movies-time/filmes/index.html"
})
categorias.addEventListener("click", () => {
  window.location.href = "/movies-time/categorias/index.html"
})
atores.addEventListener("click", () => {
  window.location.href = "/movies-time/atores/atores.html"
})

function changeState(el) {
  var display = document.getElementById(el).style.display;
  if(display == "block") {
    document.getElementById(el).style.display = 'none';
  } else {
    document.getElementById(el).style.display = 'block';
  } 
}