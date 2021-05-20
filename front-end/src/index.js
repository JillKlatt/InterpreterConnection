fetch("http://localhost:3000/api/v1/interpreters")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))