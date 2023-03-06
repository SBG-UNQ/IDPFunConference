const dayOneButton = document.getElementById('dayone');
const dayTwoButton = $('#daytwo');
const dayThreeButton = $('#daythree');
const dayFourButton = $('#dayfour');
const programTables = $('#program-tables');


function renderProgramSection() {
    const programSectionContent = $(`
    <table id="table-dayone" class="table_program">
        <col style="width: 20vw">
        <col style="width: 10vw">
        <col style="width: 70vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong class="day-text">6th March </strong> <br><br>Location: Room 60
            </td>
            
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            
            <td colspan="3"><b>Participants</b>: closed only to consortium members
            </td>
            <tr></tr>
            <td colspan="1">09:00 - 09:30
            </td>
            <td colspan="2"><b class="break-text">Registration & Welcome desk</b>
            </td>
            <tr></tr>
            
            
            <tr>
                <td>9:30 - 10:30 </td>
                <td>Workshop</td>
                <td><b class="speakers-names">Workshop - Biocuration in DisProt: the database of intrinsically disordered proteins</b> <br><br> Victoria Nugnes (University of Padua)   </td>
            </tr>
            
            <td colspan="1">10:30 - 11:00
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>

            <tr>
            <td>11:00 - 12:30 </td>
            <td>Workshop</td>
            <td><b class="speakers-names">Workshop - Biocuration in DisProt: the database of intrinsically disordered proteins</b> <br><br> Victoria Nugnes (University of Padua)   </td>
            </tr>
            
            <td colspan="1">10:30 - 11:00
            </td>
            <td colspan="2"><b class="break-text">LUNCH</b> (12.30 - 14.00 - on your own) 
            </td>
            <tr></tr>

            <tr>
                <td>14:00 - 15:30</td>
                <td>Workshop</td>
                <td><b class="speakers-names">Workshop - RepeatsDB a Tandem Repeat Protein Database: General usage and Curation of entries</b><br><br>Paula Arrias  (University of Padua)
                </td>
            </tr>

            <td colspan="1">15:30 - 16:00
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>

            <tr>
            <td>16:00 - 17:00</td>
            <td>Workshop</td>
            <td><b class="speakers-names">Workshop - RepeatsDB a Tandem Repeat Protein Database: General usage and Curation of entries</b><br><br>Paula Arrias  (University of Padua)
            </td>
        </tr>
        </tbody>
    </table>

    <table id="table-daytwo" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong class="day-text">7th March </strong> <br><br>Location: Room 60
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="4"> 
            </td>
            </tr>

            <td colspan="3"><b>Participants</b>: open doors
            </td>
            <tr>
                <td>9:30 - 11:00 </td>
                <td>Workshop</td>
                <td><b class="speakers-names">Workshop InterPro Database</b><br><br> Sara Chuguransky (European Bioinformatic Institute)</td>
            </tr>

            <td colspan="1">11:00 - 11:30
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b> 
            </td>
            <tr></tr>

            <tr>
                <td>11:00  - 13:00</td>
                <td>Workshop</td>
                <td><b class="speakers-names">MobiDB: 10 years annotating Intrinsically Disordered Proteins</b><br><br>Alexander Monzon (University of Padua)</td>
            </tr>
        </tbody>
    </table>
    
    </table>
    <table id="table-dayfour" class="disable table_program">
    <col style="width: 15vw">
    <col style="width: 10vw">
    <col style="width: 75vw">
    <thead>
    </thead>
    <tbody>
        <tr class="prog-tracks">
        <td colspan="3">Opening and Welcome Session
        </td>
        </tr>
        <tr>
            <td class="one-cell">
                <br><br><b>Location</b>: Salón auditorio
                <br><br><b>Time</b>: 17:00 GMT-3
                <br><br><b>Participants</b>: Open doors
            </td>
        </tr>
    </tbody>
    </table>

    </table>
    <table id="table-dayfour" class="disable table_program">
    <col style="width: 15vw">
    <col style="width: 10vw">
    <col style="width: 75vw">
    <thead>
    </thead>
    <tbody>
        <tr class="prog-tracks">
        <td colspan="3">Welcome Cocktail
        </td>
        </tr>
        <tr>
            <td class="one-cell">
                <br><br><b>Location</b>: Rectorado
                <br><br><b>Time</b>: 18:00 GMT-3
                <br><br><b>Participants</b>: Upon invitation
            </td>
        </tr>
    </tbody>
    </table>


    <table id="table-daythree" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong class="day-text">8th March </strong> <br><br>Salon Auditorio UNQ
            </td>
            </tr>

            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>        
            <td colspan="3"> <b class="speakers-names">Welcome Note</b> <br><br>Sebastian Fernandez Alberti
            </td>
            <tr></tr>
            <tr>
                <td>9:30 - 10:00 </td>
                <td>Keynote Talks</td>
                <td class="talks-titles"><b class="speakers-names">Non-globular proteins in the era of AlphaFoldDB</b><br><br> Silvio Tosatto (University of Padua)</td>
            </tr>
            <tr>
                <td>10:00 - 10:30 </td>
                <td>Keynote Talks</td>
                <td class="talks-titles"><b class="speakers-names">Computational characterization of repeats and low complexity regions in protein sequences</b> <br><br>Miguel Andrade (University of Mainz)</td>
            </tr>
            <tr>
                <td>10:30 - 11:00 </td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">From evolution to folding of repeat-proteins</b> <br><br>Diego Ferreiro (University of Buenos Aires)</td>
            </tr>

            <td colspan="1">11:00 - 11:30
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>
            
            <tr></tr>
            <td colspan="3">Chair: Maria Silvina Fornasari
            </td>

            <tr>
                <td>11:30 - 12:00</td>
                <td>Keynote Talks</td>
                <td>Layla Hirsh Martinez (Pontifical Catholic University of Peru)</td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">LIDeB tools: open-source web apps to assist virtual screening campaigns</b> <br><br>Alan Talevi (National University of La Plata)</td>
            </tr>
            <tr>
                <td>12:30 - 13:00</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Census of exposed aggregation-prone regions in proteomes</b><br><br>Andrey Kajava (Centre National de la Recherche Scientifique - CNRS)</td>
            </tr>

            <td colspan="1">13:00 - 14:30
            </td>
            <td colspan="2"><b class="break-text">LUNCH</b>
            </td>
            <tr></tr>
            <td colspan="3">Chair: Lucia Chemes
            </td>
            <tr>
                <td>14:30 - 15:00</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Conformational diversity: key residues and exploration</b><br><br>Sebastian Fernandez Alberti (University of Quilmes)</td>
            </tr>           
            
            <tr>
                <td>15:00 - 15:30</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Sometimes, size matters. Huge and repeat proteins in the tree of life</b><br><br>Damien Devos(Andalusian Center for Developmental Biology)</td>
            </tr>
            <tr>
                <td>15:30 - 16:00</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Clustering of tandem repeats in malaria parasite proteins</b><br><br>Ember Martínez (University of Cauca)</td>
            </tr>

            <td colspan="1">16:00 - 16:30
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>

            <td colspan="3">Chair: Cristina Marino Buslje
            </td>

            <tr>
                <td>16:30 - 16:45</td>
                <td>ESR talk</td>
                <td>Sofia Erdozain (University of La Plata)</td>
            </tr>
            <tr>
                <td>16:45 - 17:00</td>
                <td>ESR talk</td>
                <td>Nahuel Escobedo (University of Quilmes)</td>
            </tr>
            <tr>
                <td>17:00 - 17:15</td>
                <td>ESR talk</td>
                <td>Patricio Chinestrad (University of Quilmes)</td>
            </tr>
        </tbody>    
    </table>


    <table id="table-dayfour" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong class="day-text">9th March </strong> <br><br>Salon Auditorio UNQ
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>9:30 - 10:00 </td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Career Development talks for students of Bioinformatic</b><br><br>Alexander Monzon (University of Padua)</td>
            </tr>
            <tr>
                <td>10:00 - 10:30</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Career Development talks for students of Bioinformatic</b> <br><br>Damien Devos (Centro Andaluz de Biología del Desarrollo)</td>
            </tr>

            <tr>
                <td>10:30 - 10:00</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Career Development talks for students of Bioinformatic</b> <br><br>Layla Hirsh ((Pontifical Catholic University of Peru)</td>
            </tr>            
            
            <td colspan="1">10:00 - 11:30
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>
            <td colspan="3">Chair: Silvio Tosatto
            </td>

            <tr>
                <td>11:30 - 12:00 </td>
                <td>Keynote Talks</td>
                <td>Denis Shields (University College Dublin)</td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td>Cristina Marino Buslje (Fundación Leloir)</td>
            </tr>

            <tr>
                <td>12:30 - 13:00 </td>
                <td>Keynote Talks</td>
                <td>Daniel Guerra Giraldez (Cayetano Heredia University)</td>
            </tr>

            <td colspan="1">13:00 - 14:30
            </td>
            <td colspan="2"><b class="break-text">LUNCH</b>
            </td>
            <tr></tr>
            <td colspan="3">Chair: Damian Devos
            </td>
            <tr>
                <td>14:30 - 15:00</td>
                <td>Keynote Talks</td>
                <td>Zsuzsanna Dosztányi (Eotvos Lorand University)</td>
            </tr>

            <tr>
                <td>15:00 - 15:30 </td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Evolutionary constraints on intrinsically disordered regions performing tethering functions</b> <br><br> Lucia Chemes (National University of San Martin)</td>
            </tr>
            <tr>
                <td>15:30 - 16:00</td>
                <td>Keynote Talks</td>
                <td>Francisco Melo (Pontifical Catholic University of Chile)</td>
            </tr>

            <td colspan="1">16:00 - 16:30
            </td>
            <td colspan="2"><b class="break-text">COFFEE BREAK</b>
            </td>
            <tr></tr>
            <td colspan="3">Chair: Andrej Kajava
            </td>
            <tr></tr>

            <tr>
                <td>16:30 - 16:45</td>
                <td>ESR talk</td>
                <td><b class="speakers-names">A Molecular Dynamics Simulation Study of Hypoxia Inducible Factor a - Prolyl Hydroxylase Interaction</b> <br><br>Giorgia Francesca Camagni(University of Padua)</td>
            </tr>

            <tr>
                <td>16:45 - 17:00 </td>
                <td>ESR talk</td>
                <td>Nicolas Garrone (National University of San Martin)</td>
            </tr>
            <tr>
                <td>17:00 - 17:15</td>
                <td>ESR talk</td>
                <td><b class="speakers-names">Simulating cancer development: applications to the von Hippel-Lindau syndrome</b><br><br>Franco Pradelli (University of Padua)</td>
            </tr>
            <tr>
                <td>17:15 - 17:30</td>
                <td>ESR talk</td>
                <td><b class="speakers-names">Everything you always wanted to know about Cell Penetration Peptides</b><br><br>Gudrun Aldrian (Centre for Biochemical and Macromolecular Research)</td>
            </tr>
            
            <td colspan="1">17:30 - 18:30
            </td>
            <td colspan="2"><b class="break-text">WRAP-UP</b>
            </td>
            <tr></tr>
        </tbody>
    </table>


    <table id="table-dayfour" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong class="day-text">Friday 10 March</strong> <br><br>REFERACT Supervisory Board meeting
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="1"> 
            </td>
            </tr>

            <tr>
                <td class="one-cell">
                    <br><br><b>Location</b>: Room 102
                    <br><br><b>Time</b>: 10:00 GMT-3 || 13:00 UTC || 14:00 CET
                    <br><br><b>Format</b>: hybrid
                    <br><br><b>Duration</b>:1.5 hours
                    <br><br><b>Participants</b>: REFRACT Supervisory Board members 
                    <br><br><b>Agenda</b>: (shared with SB members)
                </td>
            </tr>
        </tbody>
    </table>
    <table id="table-dayfour" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3">IDPfun Supervisory Board meeting
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="1"> 
            </td>
            </tr>

            <tr>
                <td class="one-cell">
                    <br><br><b>Location</b>:  Room 102 
                    <br><br><b>Time</b>: 12:00 GMT-3 || 15:00 UTC || 16:00 CET
                    <br><br><b>Format</b>: hybrid
                    <br><br><b>Duration</b>: 1.5 hours
                    <br><br><b>Participants</b>: IDPfun Supervisory Board members 
                    <br><br><b>Agenda</b>: (shared with SB members)
                </td>
            </tr>
        </tbody>
    </table>
    `);


    programSectionContent.appendTo(programTables);

    const tableOne = $('#table-dayone');
    const tableTwo = $('#table-daytwo');
    const tableThree = $('#table-daythree');
    const tableFour = $('#table-dayfour');
}

renderProgramSection()
