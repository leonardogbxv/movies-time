
const postData = async () => {
  const categoryName = document.querySelector('.input-text').value;
  const categoryDescription = document.querySelector('.input-textarea').value;
  
  if (!categoryName || !categoryDescription) {
    alert('Preencha todos os campos');
    return;
  }
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjgzNDAzLCJleHAiOjE2NjEyODcwMDN9.PDkDID9BllCORhhI1e01766TdRlu5Pm7hv8gkX46Kts";
  
  await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/categorias', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      titulo: categoryName,
      descricao: categoryDescription,
    })
  });
}