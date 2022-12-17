const speakersSection = document.getElementById('speakers-section');
const $speakersSection = $(document.getElementById('speakers-section'));
const imageCarrouselDiv = document.getElementById('image-carousel');

const speakers = [
    { "name": "Dr. Silvio Tosatto", 'img': 'silvio.png', "filiation": "UNIPD - Italy" },
    { "name": "Dr. Francisco Melo", 'img': 'francisco.png', "filiation": "PUCD - Chile" },
    { "name": "Dr. Miguel Andrade", 'img': 'miguel.png', "filiation": "Mainz - Germany" },
    { "name": "Dr. Damian Devos", 'img': 'damian.png', "filiation": "CDB - Spain" },
    { "name": "Dr. Layla Hirsh", 'img': 'layla.png', "filiation": "PUCD - Chile" },
    { "name": "Dr. Silvio Tosatto", 'img': 'silvio.png', "filiation": "UNIPD - Italy" },
    { "name": "Dr. Francisco Melo", 'img': 'francisco.png', "filiation": "PUCD - Chile" },
    { "name": "Dr. Miguel Andrade", 'img': 'miguel.png', "filiation": "Mainz - Germany" },
    { "name": "Dr. Damian Devos", 'img': 'damian.png', "filiation": "CDB - Spain" },
    { "name": "Dr. Layla Hirsh", 'img': 'layla.png', "filiation": "PUCD - Chile" },
];

function appendSpeaker(element, speakersList) {
    const li = document.createElement('li');
    const figure =  document.createElement('figure');
    const img =  document.createElement('img');
    const figcappurple =  document.createElement('figcapture');
    const figcapgray =  document.createElement('figcapture');
    
    figure.className = "speaker-figure";
    figcappurple.className = "speaker-caption";

    li.id = "speaker-list-item"
    li.className = "speaker-list-item"
    
    img.src = "./assets/img/" + element.img;
    img.alt = element.name + "-img";
    figcappurple.innerHTML = element.name;
    figcapgray.innerHTML = element.filiation;
    
    
    figure.appendChild(img);
    figure.appendChild(figcappurple);
    figure.appendChild(figcapgray);
    
    li.appendChild(figure);
    speakersList.appendChild(li);
}

function renderSpeakersSection(){
    $speakersSection.empty();
   
    const speakersList = document.createElement('ul');
    const speakerSectionTitle = document.createElement('h2')
    
    speakersList.className = "speaker-list";
    speakerSectionTitle.innerHTML = "Speakers"

    speakers.forEach((it) => appendSpeaker(it, speakersList));
    speakers.slice(0, 4).forEach((it) => appendSpeaker(it, speakersList))

    speakersSection.appendChild(speakerSectionTitle)
    imageCarrouselDiv.appendChild(speakersList);
    speakersSection.appendChild(imageCarrouselDiv);
}

let counter = 0;

function changeFiguresShwon() {
    const speakresListFigures = Array.from(document.getElementsByClassName('speaker-list-item'));
    const figuresCount = speakresListFigures.length;

    counter++;
    if (counter >= figuresCount - 4) {
        counter = 0;
    }

    speakresListFigures.forEach((figure, index) => {
        const $figure = $(figure);
        $figure.toggleClass("active-img", index >= counter && index < counter + 4);
    })
    console.log("cambiando")
}

function activateCarousel(){
    changeFiguresShwon();
    setInterval(changeFiguresShwon, 1000);
}


window.onload = function() {
    renderSpeakersSection();
    activateCarousel()
}
