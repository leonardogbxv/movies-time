// TODO: delete
window.addEventListener("load", async () => {
  const categories = await fetchCategories();

  if (categories.length) {
    categories.forEach((category) => insertNewRow('categories-table', {
      titulo: category.titulo,
      descricao: category.descricao,
      edit: `
        <a href="./edit/index.html?id=${category.id}&titulo=${category.titulo}&desc=${category.descricao}">
          <button class="edit">
            <span class="material-symbols-outlined">edit</span>
          </button>
        </a>
      `,
      delete: `
        <button class="delete" onclick="deleteCategory(${category.id})">
          <span class="material-symbols-outlined">delete</span>
        </button>
      `,
    }));
  } else {
    alert('Nenhuma categoria disponível...')
  }
});

const fetchCategories = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjgzNDAzLCJleHAiOjE2NjEyODcwMDN9.PDkDID9BllCORhhI1e01766TdRlu5Pm7hv8gkX46Kts";
  const request = await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/categorias', {
    method: 'GET',
    headers: new Headers({
      'Authorization': token
    }),
  })
    .then(async (response) => await response.json())
    .catch((err) => console.log(err));

  return request;
}

const deleteCategory = async (id) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjgzNDAzLCJleHAiOjE2NjEyODcwMDN9.PDkDID9BllCORhhI1e01766TdRlu5Pm7hv8gkX46Kts";

  try {
    await fetch(`https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/categorias/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': token
      }),
    });

    alert('Categoria deletada com sucesso!')
  } catch (error) {
    alert(error);
  }
}