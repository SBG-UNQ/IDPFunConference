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
            <td colspan="3"><strong>6th March </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>9:30 - 12:30 </td>
                <td>Workshop</td>
                <td><b class="speakers-names">Workshop - Biocuration in DisProt: the database of intrinsically disordered proteins</b> <br><br> Victoria Nugnes (University of Padua)   </td>
            </tr>
            <tr>
                <td>14:00 - 17:00</td>
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
            <td colspan="3"><strong>7th March </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="4"> 
            </td>
            </tr>
            <tr>
                <td>9:30 - 11:00 </td>
                <td>Workshop</td>
                <td><b class="speakers-names">Workshop InterPro Database</b><br><br> Sara Chuguransky (European Bioinformatic Institute)</td>
            </tr>
            <tr>
                <td>11:00  - 13:00</td>
                <td>Workshop</td>
                <td><b class="speakers-names">MobiDB: 10 years annotating Intrinsically Disordered Proteins</b><br><br>Alexander Monzon (University of Padua)</td>
            </tr>
            <tr>
                <td>13:00  - 14:30</td>
                <td>Workshop</td>
                <td><b class="speakers-names">CoDNaS*: An introduction to study conformational</b><br><br>Nahuel Escobedo & Martin Gonzalez Buitron (University of Quilmes)</td>
            </tr>
            <tr>
                <td>17:00  - 18:00</td>
                <td> Talk</td>
                <td> Opening and Welcome</td>
            </tr>
            <tr>
                <td>18:00 - 20:00</td>
                <td> Social Event</td>
                <td> Reception</td>
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
            <td colspan="3"><strong>8th March </strong> <br><br>Salon Auditorio UNQ
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>9:30 - 10:00 </td>
                <td>Keynote Talks</td>
                <td class="talks-titles">Silvio Tosatto (University of Padua)</td>
            </tr>
            <tr>
                <td>10:00 - 10:30 </td>
                <td>Keynote Talks</td>
                <td class="talks-titles"><b class="speakers-names">Computational characterization of repeats and low complexity regions in protein sequences</b> <br><br>Miguel Andrade (University of Mainz)</td>
            </tr>
            <tr>
                <td>10:30 - 11:00 </td>
                <td>Keynote Talks</td>
                <td>Diego Ferreiro (University of Buenos Aires)</td>
            </tr>
            <tr>
                <td>11:00 - 11:30</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>
            <tr>
                <td>11:30 - 12:00</td>
                <td>Keynote Talks</td>
                <td>Layla Hirsh Martinez (Pontifical Catholic University of Peru)</td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td>Alan Talevi (National University of La Plata)</td>
            </tr>
            <tr>
                <td>12:30 - 13:00</td>
                <td>Keynote Talks</td>
                <td><b class="speakers-names">Census of exposed aggregation-prone regions in proteomes</b><br><br>Andrey Kajava (Centre National de la Recherche Scientifique - CNRS)</td>
            </tr>

            <tr>
            <td>13:00 - 14:30</td>
            <td></td>
            <td><b>LUNCH</b></td>
            </tr>
            <tr>
                <td>14:30 - 15:00</td>
                <td>Keynote Talks</td>
                <td>Sebastian Fernandez Alberti (University of Quilmes)</td>
            </tr>           
            
            <tr>
                <td>15:00 - 15:30</td>
                <td>Keynote Talks</td>
                <td>Damien Devos (University of Sevilla)</td>
            </tr>
            <tr>
                <td>15:30 - 16:00</td>
                <td>Keynote Talks</td>
                <td>Ember Martínez (University of Cauca)</td>
            </tr>
            <tr>
                <td>16:00 - 16:30</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>
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
            <td colspan="3"><strong>9th March </strong> <br><br>Salon Auditorio UNQ
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
            
            <tr>
                <td>10:00 - 11:30</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>

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
            <tr>
                <td>13:00 - 14:30</td>
                <td></td>
                <td><b>LUNCH</b></td>
            </tr>

            <tr>
                <td>14:30 - 15:00</td>
                <td>Keynote Talks</td>
                <td>Zsuzsanna Dosztányi (ELTE University)</td>
            </tr>

            <tr>
                <td>15:00 - 15:30 </td>
                <td>Keynote Talks</td>
                <td>Lucia Chemes (National University of San Martin)</td>
            </tr>
            <tr>
                <td>15:30 - 16:00</td>
                <td>Keynote Talks</td>
                <td>Francisco Melo (Pontifical Catholic University of Chile)</td>
            </tr>
            <tr>
                <td>16:00 - 16:30</td>
                <td class="breaks"></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>

            <tr>
                <td>16:30 - 16:45</td>
                <td>ESR talk</td>
                <td>Giorgia Francesca Camagni</td>
            </tr>

            <tr>
                <td>16:45 - 17:00 </td>
                <td>ESR talk</td>
                <td>Nicolas Garrone</td>
            </tr>
            <tr>
                <td>17:00 - 17:15</td>
                <td>ESR talk</td>
                <td>Franco Pradelli</td>
            </tr>
            <tr>
                <td>17:15 - 17:30</td>
                <td>ESR talk</td>
                <td><b>Gudrun Adrian</b></td>
            </tr>
            <tr>
                <td>17:30 - 18:30</td>
                <td></td>
                <td><b>WRAP-UP</b></td>
            </tr

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
            <td colspan="3"><strong>Friday 10 March</strong> <br><br>REFERACT Supervisory Board meeting
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
