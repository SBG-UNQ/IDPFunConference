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
                <td>Workshop DisProt  <br><br><b class="speakers-names"> Victoria Nugnes (AR)</b> </b></td>
            </tr>
            <tr>
                <td>14:00 - 17:00</td>
                <td>Workshop</td>
                <td> RepeatsDB a Tandem Repeat Protein Database: General usage and Curation of entries
                <br><br><b class="speakers-names">Paula Arrias (AR)</b></td>
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
                <td> Pfam <br><br><b class="speakers-names"> Sara Chuguransky(UK)</b></td>
            </tr>
            <tr>
                <td>11:00  - 13:00</td>
                <td>Workshop</td>
                <td>MobiDB: 10 years annotating Intrinsically Disordered Proteins<br><br><b class="speakers-names">Alexander Monzon</b></td>
            </tr>
            <tr>
                <td>13:00  - 14:30</td>
                <td>Workshop</td>
                <td>CoDNaSQ and CoDNaS-RNA<br><br><b class="speakers-names">Nahuel Escobedo & Martin Gonzalez Buitron</b></td>
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
                <td>9:00 - 9:300 </td>
                <td>Keynote Talks</td>
                <td>Silvio Tosatto</td>
            </tr>
            <tr>
                <td>9:30 - 10:00 </td>
                <td>Keynote Talks</td>
                <td>Miguel Andrade</td>
            </tr>
            <tr>
                <td>9:30 - 10:00 </td>
                <td>Keynote Talks</td>
                <td>Diego Ferreiro</td>
            </tr>
            <tr>
                <td>12:30 - 14:00</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>
            <tr>
                <td>10:00 - 11:30</td>
                <td>Keynote Talks</td>
                <td>Layla Hirsh Martinez</td>
            </tr>
            <tr>
                <td>11:30 - 12:00</td>
                <td>Keynote Talks</td>
                <td>Alan Talevi</td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td>Andrej Kajava</td>
            </tr>

            <tr>
            <td>12:30 - 14:00</td>
            <td></td>
            <td><b>LUNCH</b></td>
            </tr>

            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td>Damien Devos</td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Keynote Talks</td>
                <td>Ember Martínez</td>
            </tr>
            <tr>
                <td>12:30 - 14:00</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>
            <tr>
                <td>12:00 - 12:30</td>
                <td>Invited Speakers</td>
                <td>ESR</td>
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
                <td>9:00 - 9:30 </td>
                <td>Keynote Talks</td>
                <td>Alexander Monzon</td>
            </tr>
            <tr>
                <td>9:30 - 10:00</td>
                <td>Keynote Talks</td>
                <td> Damien Devos</td>
            </tr>

            <tr>
                <td>10:00 - 10:30</td>
                <td>Keynote Talks</td>
                <td>Layla Hirsh</td>
            </tr>

            <tr>
                <td>10:30 - 11:00 </td>
                <td>Keynote Talks</td>
                <td>Denis Shields</td>
            </tr>
            <tr>
                <td>11:00 - 11:30</td>
                <td>Keynote Talks</td>
                <td>Cristina Marino Buslje</td>
            </tr>
            <tr>
                <td>11:30 - 12:00</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>

            <tr>
                <td>12:00 - 12:50 </td>
                <td>Invited Speakers</td>
                <td>ESR</td>
            </tr>
            <tr>
                <td>11:30 - 12:00</td>
                <td></td>
                <td><b>LUNCH</b></td>
            </tr>

            <tr>
                <td>14:00 - 14:30</td>
                <td>Keynote Talks</td>
                <td>Zsuzsanna Dosztányi</td>
            </tr>

            <tr>
                <td>14:30 - 15:00 </td>
                <td>Keynote Talks</td>
                <td>Lucia Chemes</td>
            </tr>
            <tr>
                <td>15:30 - 16:00</td>
                <td>Keynote Talks</td>
                <td>Francisco Melo</td>
            </tr>
            <tr>
                <td>16:00 - 16:30</td>
                <td></td>
                <td><b>COFFEE BREAK</b></td>
            </tr>

            <tr>
                <td>16:30 - 17:00</td>
                <td>Keynote Talks</td>
                <td>Daniel Guerra Giraldez</td>
            </tr>

            <tr>
                <td>17:00 - 17:30 </td>
                <td>Keynote Talks</td>
                <td>Sebastian Fernandez Alberti</td>
            </tr>
            <tr>
                <td>17:30 - 18:00</td>
                <td>Invited Speakers</td>
                <td>ESR</td>
            </tr>
            <tr>
                <td>18:00 - 20:00</td>
                <td></td>
                <td><b>WRAP-UP</b></td>
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