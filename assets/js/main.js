const speakersSection = document.getElementById('speakers-section');
const $speakersSection = $(document.getElementById('speakers-section'));
const imageCarrouselDiv = document.getElementById('image-carousel');

const speakers = [
    { "name": "Dr. Silvio Tosatto", 'img': 'silvio.png', "filiation": "UNIPD - Italy" },
    { "name": "Dr. Francisco Melo", 'img': 'francisco.png', "filiation": "PUCD - Chile" },
    { "name": "Dr. Miguel Andrade", 'img': 'miguel.png', "filiation": "Mainz - Germany" },
    { "name": "Dr. Damian Devos", 'img': 'damian.png', "filiation": "CDB - Spain" },
    { "name": "Dr. Layla Hirsh", 'img': 'layla.png', "filiation": "PUCD - Chile" },
];


function renderSpeakersSection(){
    $speakersSection.empty();
   
    const speakersList = document.createElement('ul');
    const speakerSectionTitle = document.createElement('h2')
    
    speakersList.className = "speaker-list";
    speakerSectionTitle.innerHTML = "Speakers"

    speakers.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "speaker-figure";
        figcappurple.className = "speaker-caption";

        li.id = "speaker-list-item"
        li.className = "speaker-list-item active-img"
        
        img.src = "/assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);
        
        li.appendChild(figure);
        speakersList.appendChild(li);
    });

    speakersSection.appendChild(speakerSectionTitle)
    imageCarrouselDiv.appendChild(speakersList);
    speakersSection.appendChild(imageCarrouselDiv);
}

let counterMin = 0;

function active3FirstElements() {
    const speakresListFigures = document.getElementsByClassName('speaker-list-item');
    
    Array.from(speakresListFigures).forEach((element,index) => {
        if (counterMin < index) {
            element.classList.remove('active-img')
            element.classList.add('inactive-img')
            counterMin = counterMin + 3;
        }
    });
    
}

let carouselOffset = 0;

function changeFiguresShwon() {
    const speakresListFigures = Array.from(document.getElementsByClassName('speaker-list-item'));

    carouselOffset = (speakresListFigures.length + carouselOffset) % speakresListFigures.length

    speakresListFigures.forEach((elemento, indice) => {
        if ('inactive-img' in elemento.classList || indice < carouselOffset) {
            elemento.classList.remove('inactive-img');
            elemento.classList.add('active-img')
            carouselOffset = carouselOffset +1 
        } else {
            elemento.classList.add('active-img');
        }
    })
}

function activeCarousel(){
    active3FirstElements();
    setTimeout(changeFiguresShwon, 100);
}


window.onload = function() {
    renderSpeakersSection();

}
