const button = document.getElementById('button')
const atoresFilter = document.getElementById('atores-filter')
const categoriasFilter = document.getElementById('categorias-filter')
const filmesFilter = document.getElementById('filmes-filter')
const filterIcon = document.getElementById('filter-icon')
const films = document.getElementById('films')
const btnCadastro = document.getElementById('enviar')
const elementos = []
if (window.location.href.includes('id')) {
  let id = window.location.href.split('id=')[1]
  getFilm(id)
} else {
  getFilms()
}

button.addEventListener("click", () => {
  window.location.href = "/movies-time/filmes/cadastro.html"
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

btnCadastro.addEventListener("click", () => {
  enviaDados('cadastro')
})

async function getFilms () {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjg0NTM5LCJleHAiOjE2NjEyODgxMzl9.kXxCcBAkTMaQCVjor4dwztH6_uprKJ6PHhTxcYM6qPI'
  const response = await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/filmes', {
      method: 'GET',
      headers: new Headers({
        'Authorization': token
      }),
    });
     
    const retorno = await response.json()

    if (retorno) {
      retorno.forEach(item => {
        const image = document.createElement('img');
        image.setAttribute(
          'src',
          item.url_capa
        );

        image.setAttribute('height', 300)
        image.setAttribute('id', item.id)
        films.appendChild(image)
        console.log(image)
        image.addEventListener("click", () => {
          window.location.href = `/movies-time/filmes/editar.html?id=${image.id}`
        })
        
      })
    }
}

async function getFilm (id) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGV0ZXV6aW5ob0Byb3RhZXhhdGEuY29tIiwiaWF0IjoxNjYxMjg0NTM5LCJleHAiOjE2NjEyODgxMzl9.kXxCcBAkTMaQCVjor4dwztH6_uprKJ6PHhTxcYM6qPI'
  const response = await fetch(`https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/filmes/${id}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': token
      }),
    });
     
    const retorno = await response.json()

    if (retorno) {
      console.log(retorno)
      setaDados(retorno)
    }
}

function setaDados(retorno) {
  let categorias = ''
  let atores = ''
  retorno.categorias.forEach(categoria => {
    categorias += ` ${categoria.titulo}`
  })
  retorno.atores.forEach(ator => {
    atores += ` ${ator.nome}`
  })
  document.getElementById('titulo-edicao').value = retorno.titulo
  document.getElementById('capa-edicao').value = retorno.url_capa
  document.getElementById('sinopse-edicao').value = retorno.descricao
  document.getElementById('categorias-edicao').value = categorias
  document.getElementById('elenco-edicao').value = atores
  document.getElementById('imagem').src = retorno.url_capa
}
