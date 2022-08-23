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