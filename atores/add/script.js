var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjg0MzY1LCJleHAiOjE2NjEyODc5NjV9.a1a3LiFSCsjwrvRqw-IVzFMN-Nz_u5gcdeyDMQWD8dI';

const addActor = async () => {
  try {
    const nameInput = document.getElementById('actor-name').value;
    let birthInput = document.getElementById('actor-birth-date').value;

    if (!nameInput || nameInput.length < 3) {
      alert('Campo nome preenchido incorretamente!')
      return;
    }

    if (!birthInput || birthInput.length < 6) {
      alert('Campo data preenchido incorretamente!')
      return;
    }

    birthInput =  new Date(birthInput).toLocaleDateString('pt-br');

    const actorData = {
      nome: nameInput,
      dt_nascimento: birthInput
    };

    await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/atores', {
      method: 'POST',
      body: JSON.stringify(actorData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })

    window.location.href = '../index.html';
  } catch (error) {
    return false;
  }
}