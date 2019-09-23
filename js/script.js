var api_key = '9d9e3d0b51cb088b9905bacc4328c9c2';


async function getWeather(zip) {
    // let response = await fetch ('api.openweathermap.org/data/2.5/weather?zip=' + zip + 'APPID=' + api_key)
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&APPID=9d9e3d0b51cb088b9905bacc4328c9c2')
    let responseJSON = await response.json();
    // console.log(responseJSON);
    return responseJSON;
}

function build() {
    let div = document.getElementById('pageBody');
    for (let i = 1; i < 4; i++) {
        let card = document.createElement('div');
        
    }
}

