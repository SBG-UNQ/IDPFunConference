const speakersSection = document.getElementById('speakers-section');
const $speakersSection = $(document.getElementById('speakers-section'));

const speakers = [
    { "name": "Dr. Silvio Tosatto", 'img': 'silvio.png', "filiation": "UNIPD - Italy" },
    { "name": "Dr. Francisco Melo", 'img': 'francisco.png', "filiation": "PUCD - Chile" },

];


function renderSpeakersSection(){
    $speakersSection.empty();
   
    const speakersList = document.createElement('ul');
    
    speakers.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "member";
        figcappurple.className = "name";
        
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

    speakersSection.appendChild(speakersList);
}


window.onload = function() {
    renderSpeakersSection()
}
