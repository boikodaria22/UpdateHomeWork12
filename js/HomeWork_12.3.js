function responseServer() {
  const requestURL = 'https://jsonplaceholder.typicode.com/todos'
  const xhr = new XMLHttpRequest
  xhr.open('GET', requestURL)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.responseType = 'json'
  xhr.send()
  xhr.onload = function(event) {
    if (this.status !== 200) {
      console.log('Провал')
    } else {
      console.log('Успешно')
    }
  }
  xhr.onerror = () => {
    console.log('Error')
  }
  xhr.onreadystatechange = function(event) {
    if (event.target.readyState === 4 &&
      event.target.status === 200) {
      let answersFromServer = xhr.response;
      let arrWithAnswer = []
      let toDoLists = [];
      for (let i = 0; i < answersFromServer.length; i++) {
        arrWithAnswer.push(answersFromServer[i])
      };
      toDoLists.push(arrWithAnswer.filter(item => item.userId === 2).slice(0, 5));
      toDoLists.push(arrWithAnswer.filter(item => item.userId === 4).slice(0, 5));
      toDoLists.push(arrWithAnswer.filter(item => item.userId === 6).slice(0, 5));
      (function() {
        let body = document.querySelector('body');
        for (let i = 0; i < toDoLists.length; i++) {
          let divListToDo = document.createElement('div');
          body.appendChild(divListToDo);
          let titleH2 = document.createElement('h2');
          divListToDo.appendChild(titleH2)
          titleH2.innerText = `To-Do List for user № ${toDoLists[i][0].userId}`
          let btn = document.createElement('button');
          divListToDo.appendChild(btn)
          btn.innerText = 'Add new Item'
          btn.className = 'button-new-item'
          let divForAddItem = document.createElement('div');
          divListToDo.appendChild(divForAddItem);
          divForAddItem.style.display = 'none';
          divForAddItem.className = 'row'
          let textForAddItem = document.createElement('textarea');
          divForAddItem.appendChild(textForAddItem);
          textForAddItem.className = 'col-10'
          let btnAdd = document.createElement('button');
          divForAddItem.appendChild(btnAdd);
          btnAdd.textContent = 'Add'
          btnAdd.className = 'col-2'
          btn.onclick = () => {
            if (divForAddItem.style.display == 'block')
              divForAddItem.style.display = 'none';
            else
              divForAddItem.style.display = 'block';
          }
          let list = document.createElement('ol');
          divListToDo.appendChild(list)
          for (let j = 0; j < toDoLists[i].length; j++) {
            let li = document.createElement('li');
            list.appendChild(li)
            let inp = document.createElement('input');
            inp.disabled = true
            li.appendChild(inp)
            inp.value = `${toDoLists[i][j].title}`
            let btnRemove = document.createElement('button');
            li.appendChild(btnRemove)
            btnRemove.textContent = 'Remove'
            let btnEdit = document.createElement('button');
            li.appendChild(btnEdit)
            btnEdit.textContent = 'Edit'
            btnEdit.onclick = () => {
              if (inp.disabled == true)
              inp.disabled = false
              else 
                 inp.disabled = true;
            }
          }
        }
      })()
      
    }
  }
}
responseServer()
