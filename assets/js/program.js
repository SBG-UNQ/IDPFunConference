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
                <td>9:00 - 12:00 </td>
                <td>Workshop</td>
                <td>To be confirmed</b></td>
            </tr>
            <tr>
                <td>14:00 PM</td>
                <td>Workshop</td>
                <td> Hands on workshop <br><br><b class="speakers-names">Paula Arrias (AR)</b></td>
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
                <td>9:00 - 12:00 </td>
                <td>Workshop</td>
                <td> Pfam <br><br><b class="speakers-names"> Sara Chuguransky(UK)</b></td>
            </tr>
            <tr>
                <td>14:00  - 17:00 PM</td>
                <td>Workshop</td>
                <td> Hands on workshop <br><br><b class="speakers-names">Victoria Nugnes </b></td>
            </tr>
            <tr>
                <td>17:00  - 18:00 PM</td>
                <td> Talk</td>
                <td> Opening and Welcome</td>
            </tr>
            <tr>
                <td>18:00 PM</td>
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
            <td colspan="3"><strong>8th March </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>9:00 - 12:00 </td>
                <td>Keynote Talks</td>
                <td> Invited Speakers</td>
            </tr>
            <tr>
                <td>14:00 - 18:00 PM</td>
                <td>Keynote Talks</td>
                <td> Invited Speakers</td>
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
            <td colspan="3"><strong>9th March </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>9:00 - 12:00 </td>
                <td>Keynote Talks</td>
                <td> Invited Speakers</td>
            </tr>
            <tr>
                <td>14:00 - 18:00 PM</td>
                <td>Keynote Talks</td>
                <td> Invited Speakers</td>
            </tr>
        </tbody>
    </table>
    `);


    programSectionContent.appendTo(programTables);

    const tableOne = $('#table-dayone');
    const tableTwo = $('#table-daytwo');
    const tableThree = $('#table-daythree');
    const tableFour = $('#table-dayfour');

    dayOneButton.addEventListener('click', () => {
        $(dayOneButton).addClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.removeClass("disable");
        tableTwo.addClass("disable");
        tableThree.addClass("disable");
        tableFour.addClass("disable");
    });


    dayTwoButton.on('click', () => {
        $(dayTwoButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableTwo.removeClass("disable");
        tableThree.addClass("disable");
        tableFour.addClass("disable");
    });    

    dayThreeButton.on('click', () => {
        $(dayThreeButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableThree.removeClass("disable");
        tableFour.addClass("disable");
        tableTwo.addClass("disable");
    });

    dayFourButton.on('click', () => {
        $(dayFourButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        tableFour.removeClass("disable");
        tableThree.addClass("disable");
        tableTwo.addClass("disable");
        tableOne.addClass("disable");
    });
}

renderProgramSection()