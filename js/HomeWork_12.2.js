const photoIds = [1, 3, 5, 7, 9]
let url = 'https://jsonplaceholder.typicode.com/photos'

function getPhoto(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function(event) {
      event.target.status === 200 ? resolve(JSON.parse(this.response)) : reject('Что-то пошло не так')
    }
  })
}

function getUserIds(responseFromServer, photoIds){
  let filtered = []
  for(let i = 0; i < photoIds.length; i++) {
    filtered.push(responseFromServer.find(item => item.id === photoIds[i]))
  }
  return filtered 
}
 
function getImages(filtered){
  let body = document.querySelector('body');
  for (let i = 0; i < filtered.length; i++) {
    let img = document.createElement('img');
    img.src = filtered[i].url
    body.appendChild(img);
  }
}
 
getPhoto(url).then((response) => {
  let filtered = getUserIds(response, photoIds)
  getImages(filtered)
 
}).catch((error) => console.log(error))