const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
  
    // document.querySelectorAll('.operations')[0].appendChild(document.createElement('div')).innerHTML = charactersAPI.getFullList()[0].name
    const result = await charactersAPI.getFullList()
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    result.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `Name: ${element.name} Occupation: ${element.occupation} Is a Cartoon: ${element.cartoon} Character Weapon: ${element.weapon}`;
      list.appendChild(div)
    });
    document.querySelector('body').prepend(list)
    // const test = await charactersAPI.getFullList()
    // console.log(test[0].name)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const idQuery = document.getElementById('idsearch').value
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    const result = await charactersAPI.getOneRegister(idQuery)
    const div = document.createElement('div');
    div.innerHTML = `Name: ${result.name} Occupation: ${result.occupation} Is a Cartoon: ${result.cartoon} Character Weapon: ${result.weapon}`;
    list.appendChild(div)
    document.querySelector('body').prepend(list)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    const idItem = document.getElementById('idedit').value;
    const nameItem = document.getElementById('nameedit').value;
    const occItem = document.getElementById('occedit').value;
    const weapItem = document.getElementById('weapedit').value;
    const checkItem = document.getElementById('checkedit').checked;
    const collection = {
      "id": idItem,
      "name": nameItem,
      "occupation": occItem,
      "weapon": weapItem,
      "cartoon": checkItem
    }
    await charactersAPI.updateOneRegister(collection)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});