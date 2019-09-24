var api_key = '9d9e3d0b51cb088b9905bacc4328c9c2';




async function getWeather(zip) {
    // let response = await fetch ('api.openweathermap.org/data/2.5/weather?zip=' + zip + 'APPID=' + api_key)
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&units=imperial&APPID=9d9e3d0b51cb088b9905bacc4328c9c2')
    if (!response.ok) {
        alert('Please enter a valid US zip code');
        throw new Error('Network response was not ok.');
      }
    let responseJSON = await response.json();
    // console.log(responseJSON);
    return responseJSON;
}

function mkCard(header, sub, body,iconURL) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    let cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-header');
    cardTitle.textContent = header;

    let cardIcon = document.createElement('img');
    cardIcon.setAttribute('src', `https://openweathermap.org/img/w/${iconURL}.png`);
    cardIcon.setAttribute('class', 'img-fluid');
    cardTitle.appendChild(cardIcon);

    card.appendChild(cardTitle);

    if (sub) {
        let cardSub = document.createElement('div');
        cardSub.setAttribute('class', 'card-subtitle mb-2 text-muted');
        cardBody.appendChild(cardTitle);
    }

    let cardText = document.createElement('div');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = body;
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    return card;
}


async function build() {
    let div = document.getElementById('pageBody');
    div.innerHTML = '';
    let row = document.createElement('div');
    row.setAttribute('class', 'row');

    var data = await getWeather(document.getElementById('zip').value);
    
    console.log(data);
    // console.log(document.getElementById('zip').value);

    // console.log({
    //     'City': data.name,
    //     'Temperature': data.main.temp,
    //     'Conditions': data.weather[0].description
    // })

    let dataKeys = ['City', 'Temperature', 'Conditions'];
    let dataVals = [data.name, data.main.temp, data.weather[0].description];

    for (let i = 0; i < dataKeys.length; i++) {
        let col4 = document.createElement('div');
        col4.setAttribute('class', 'col-lg-4 py-2');

        card = mkCard(dataKeys[i],false,dataVals[i],data.weather[0].icon);

        col4.appendChild(card);
        row.appendChild(col4);
    }
    div.appendChild(row);
}

document.getElementById("btn").addEventListener("click", build);
document.getElementById("zip").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn').click();
    }
});
