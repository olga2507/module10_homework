const wsUri = 'wss://echo-ws-service.herokuapp.com';


const inputMessage = document.querySelector('.message');
const btnMessage = document.querySelector('.btn-message');
const btnGeo = document.querySelector('.btn-geo');
const output = document.querySelector('.output');


function writeToScreen() {

    let websocket = new WebSocket(wsUri);

    websocket.onopen = function() {
        console.log("CONNECTED");
    };

    websocket.onmessage = (event) => {
        output.innerHTML += `<div class="response">${event.data}</div>`;
    }

    function sendMessage() {
        if (inputMessage.value) {
            websocket.send(inputMessage.value);
            output.innerHTML += `<div class="message">${inputMessage.value}</div>`;
        } else return;
    }


    btnMessage.addEventListener("click", sendMessage);


    btnGeo.addEventListener('click', () => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(getGeo, rejectGeo);
          } else {
            console.log('ERROR(geo)')
          }
    });

    const rejectGeo = () => {
        console.log('ERROR(geo)');
    }
    
    const getGeo = (position) => {
    
        output.innerHTML += `
        <div class='geo-div'>
         <button class='output-geo'>
           <a id='mapLink'>Гео-локация</a>
          </button>
        </div>
        `;
    
        const mapLink = document.querySelector('#mapLink');
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        mapLink.href = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=18&l=map`;
        mapLink.target = '_blank';
    }

};


document.addEventListener("DOMContentLoaded", writeToScreen);




