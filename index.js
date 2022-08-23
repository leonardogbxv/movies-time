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
barsIcon.addEventListener("click", () => {
  changeState('menu-lateral')
})
arrowIcon.addEventListener("click", () => {
  changeState('menu-logout')
})

function changeState(el) {
  var display = document.getElementById(el).style.display;
  if(display == "block") {
    document.getElementById(el).style.display = 'none';
  } else {
    document.getElementById(el).style.display = 'block';
  } 
}