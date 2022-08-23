const button = document.getElementById('button')
const atoresFilter = document.getElementById('atores-filter')
const categoriasFilter = document.getElementById('categorias-filter')
const filmesFilter = document.getElementById('filmes-filter')
const filterIcon = document.getElementById('filter-icon')
const films = document.getElementById('films')
button.addEventListener("click", () => {
  window.location.href = "/movies-time/categorias/index.html"
})

atoresFilter.addEventListener("click", () => {
  document.getElementById('filters').style.display = 'none'
  getFilms()
})

categoriasFilter.addEventListener("click", () => {
  document.getElementById('filters').style.display = 'none'
  getFilms()
})

filmesFilter.addEventListener("click", () => {
  document.getElementById('filters').style.display = 'none'
  getFilms()
})
filterIcon.addEventListener("click", () => {
  var display = document.getElementById('filters').style.display;
  if(display == "block") {
    document.getElementById('filters').style.display = 'none';
  } else {
    document.getElementById('filters').style.display = 'block';
  }
})

async function getFilms () {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdWNhc0Byb3RhZXhhdGEuY29tLmJyIiwiaWF0IjoxNjYxMjc2NjczLCJleHAiOjE2NjEyODAyNzN9.noXC9GOURp9uYWXufEZ3WbkXOmEdRuH1rtMWIh1B2mM'
  const response = await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/filmes', {
      method: 'GET',
      headers: new Headers({
        'Authorization': token
      }),
    });
     
    const retorno = await response.json()

    if (retorno) {
      console.log(retorno)
      retorno.forEach(item => {
        const image = document.createElement('img');
        image.setAttribute(
          'src',
          item.url_capa
        );

        image.setAttribute('height', 300)
        films.appendChild(image)
      })
    }
}
