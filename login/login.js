const errorMsg = document.getElementById('error')
async function login (mail, pass) {
    if (mail === '' || pass === '') {
        setErrorMsg(true, 'Favor inserir email e senha')
    } else {
        setErrorMsg(false)
        const config = {
            method: 'POST',
            body: JSON.stringify({
                email: mail,
                password: pass
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const result = await fetch('https://wrl7ish9m1.execute-api.us-east-1.amazonaws.com/dev/login', config)
        const data = await result.json()

        if (data.message === 'Login realizado com sucesso') {
            localStorage.setItem('user', JSON.stringify({mail: mail, auth: data.token}))
            window.location.href = '../filmes/index.html'
        } else {
            setErrorMsg(true, data.message)
        }
    }   
}

function setErrorMsg(value, msg) {
    if (value) {
        errorMsg.innerText = msg
        errorMsg.style.display = 'flex'
    }
    else errorMsg.style.display = 'none'
}