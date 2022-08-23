window.addEventListener("load", async () => {
  const actors = await fetchActors();

  actors.forEach(({ id, nome, dt_nascimento }) => {
    const actionButtons = `
      <div class="action-buttons">
        <a class="edit" href="./edit/index.html?id=${id}" >
          <span class="material-symbols-outlined">edit</span>
        </a>
        <a class="delete">
          <span class="material-symbols-outlined">delete</span>
        </a>
      </div>
    `;

    insertNewRow('actors-table', {
      nome,
      dt_nascimento,
      buttons: actionButtons
    });

  });
});

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjg0MzY1LCJleHAiOjE2NjEyODc5NjV9.a1a3LiFSCsjwrvRqw-IVzFMN-Nz_u5gcdeyDMQWD8dI';

const fetchActors = async () => {
  try {    
    const response = await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/atores', {
      method: 'GET',
      headers: new Headers({
        'Authorization': token
      }),
    });

    const json = await response.json();

    return json;
  } catch (error) {
    return [];
  }
};
