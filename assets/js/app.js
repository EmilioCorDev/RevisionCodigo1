const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
var $n = document.querySelector('#name');
const $b = document.querySelector('#blog');// se corrije en todos el #id
const $l = document.querySelector('.location');// este va en clase
// Agrego el async porque await es para funciones asincronicas 
async function displayUser(username) {
  //Se agrega try para la información de la API
  try{

  
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //convirtiendo a json
  const data = await response.json();
  
//Actualizando elementos 
//Comillas invertidas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;

}catch(error){
  handleError(error)
  //Cuando hay error llama a handleError
}

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}
//Llama a la funcion 
displayUser('stolinski');