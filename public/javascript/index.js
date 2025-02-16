const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    if(document.getElementById('onlyone')){document.getElementById('onlyone').remove()}
    // document.querySelectorAll('.operations')[0].appendChild(document.createElement('div')).innerHTML = charactersAPI.getFullList()[0].name
    const result = await charactersAPI.getFullList()
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    list.setAttribute('id', 'onlyone')
    result.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `ID: ${element.id}<br> Name: ${element.name} <br> Occupation: ${element.occupation} <br> Is a Cartoon: ${element.cartoon} <br> Character Weapon: ${element.weapon} <br><br>`;
      list.appendChild(div)
    });
    if(!document.getElementById('onlyone')){document.querySelector('body').prepend(list)}
    // const test = await charactersAPI.getFullList()
    // console.log(test[0].name)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    if(document.getElementById('onlyone')){document.getElementById('onlyone').remove()}
    const idQuery = document.getElementById('idsearch').value
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    list.setAttribute('id', 'onlyone')
    const result = await charactersAPI.getOneRegister(idQuery)
    const div = document.createElement('div');
    div.innerHTML = `Name: ${result.name} Occupation: ${result.occupation} Is a Cartoon: ${result.cartoon} Character Weapon: ${result.weapon}`;
    list.appendChild(div)
    if(!document.getElementById('onlyone')){document.querySelector('body').prepend(list)}
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('iddelete').value);
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    if(document.getElementById('onlyone')){document.getElementById('onlyone').remove()}
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

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    const nameItem = document.getElementById('namecreate').value;
    const occItem = document.getElementById('occcreate').value;
    const weapItem = document.getElementById('weapcreate').value;
    const checkItem = document.getElementById('checkcreate').checked;
    const collection = {
      "name": nameItem,
      "occupation": occItem,
      "weapon": weapItem,
      "cartoon": checkItem
    }
    await charactersAPI.createOneRegister(collection)
  });
});