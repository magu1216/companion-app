// function heinz () {
//     const name1 = document.querySelector('#buddy1');
//     name1.innerText = buddiesList[0][0];
// }


// in this block the names for the BUDDIES are distributed to the respective divs

fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies') // continues in next line with .then
.then(res => res.json())
.then(buddies => buddiesFunc(buddies));


function buddiesFunc (buddiesList) {
    const name1 = document.querySelector('#buddy1');
    name1.innerText = buddiesList[0][0];        
    const name2 = document.querySelector('#buddy2');
    name2.innerText = buddiesList[0][1];

    const name3 = document.querySelector('#buddy3');
    name3.innerText = buddiesList[1][0];
    const name4 = document.querySelector('#buddy4');
    name4.innerText = buddiesList[1][1];

    const name5 = document.querySelector('#buddy5');
    name5.innerText = buddiesList[2][0];        
    const name6 = document.querySelector('#buddy6');
    name6.innerText = buddiesList[2][1];

    const name7 = document.querySelector('#buddy7');
    name7.innerText = buddiesList[3][0];
    const name8 = document.querySelector('#buddy8');
    name8.innerText = buddiesList[3][1];
}

fetch('https://muc-2020-w1-student-api.vercel.app/api/teams') // continues in next line with .then
.then(res => res.json())
.then(teams => teamsFunc(teams));



// in this block the names for the TEAMS are filled into the respective divs
function teamsFunc (teamsList) {
    const teamsMain = document.querySelector('section.teams main')
    teamsList.forEach((team, index) => {
        const teamHeadline = document.createElement('h2')
        teamHeadline.innerText = `Team ${index + 1}`;
        teamsMain.appendChild(teamHeadline);
        for (let i = 0; i < team.length; i++) {

            let teamMember = document.createElement('div');
            teamMember.classList.add('container__names')
            teamMember.innerText = team[i];

            if (i === 0) {
                teamMember.classList.add('container__first-child');
            } else if (i === team.length - 1) {
                teamMember.classList.add('container__last-child');
            };
            teamsMain.appendChild(teamMember);
        };
    });
    
};






const buttonHome = document.querySelector(".homebutton")
const buttonBuddies = document.querySelector(".buddiesbutton")
const buttonTeams = document.querySelector(".teamsbutton")
const buttonEnergy = document.querySelector(".energybutton")
const buttonJournal = document.querySelector(".journalbutton")
const indexPage = document.querySelector(".index")
const buddiesPage = document.querySelector(".buddies")
const teamsPage = document.querySelector(".teams")
const energyPage = document.querySelector(".energy")
const journalPage = document.querySelector(".journal")

// this part does the date functionality
const date = new Date();
const dayName = date.getDay();
const dd = date.getDate();
const mm = date.getMonth() + 1;
const yyyy = date.getFullYear();
const dayNames = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};
const dateToday = `${dd}.${mm}.${yyyy}`;
const writeDayNameAndDateToDocument = document.getElementById('date__dayname-date');
// const writeDateToDocument = document.getElementById('date__date');
const writeTodayDateToDocument = document.getElementById('date__today-date');

writeDayNameAndDateToDocument.innerText = `on ${dayNames[date.getDay()]} - ${dateToday}`;
// writeDateToDocument.innerText = dateToday;
// this site is yet to come!
// writeTodayDateToDocument.innerText = `Today, ${dateToday}`;
// 



buttonHome.addEventListener("click", () => {
    indexPage.classList.remove("hidden")
    buddiesPage.classList.add("hidden")
    teamsPage.classList.add("hidden")
    energyPage.classList.add("hidden")
    journalPage.classList.add("hidden")

    buttonHome.classList.add("active")
    buttonBuddies.classList.remove("active")
    buttonTeams.classList.remove("active")
    buttonEnergy.classList.remove("active")
    buttonJournal.classList.remove("active")
    
})

buttonBuddies.addEventListener("click", () => {
    indexPage.classList.add("hidden")
    buddiesPage.classList.remove("hidden")
    teamsPage.classList.add("hidden")
    energyPage.classList.add("hidden")
    journalPage.classList.add("hidden")

    buttonHome.classList.remove("active")
    buttonBuddies.classList.add("active")
    buttonTeams.classList.remove("active")
    buttonEnergy.classList.remove("active")
    buttonJournal.classList.remove("active")
    
})

buttonTeams.addEventListener("click", () => {
    indexPage.classList.add("hidden")
    buddiesPage.classList.add("hidden")
    teamsPage.classList.remove("hidden")
    energyPage.classList.add("hidden")
    journalPage.classList.add("hidden")

    buttonHome.classList.remove("active")
    buttonBuddies.classList.remove("active")
    buttonTeams.classList.add("active")
    buttonEnergy.classList.remove("active")
    buttonJournal.classList.remove("active")
    
})

buttonEnergy.addEventListener("click", () => {
    indexPage.classList.add("hidden")
    buddiesPage.classList.add("hidden")
    teamsPage.classList.add("hidden")
    energyPage.classList.remove("hidden")
    journalPage.classList.add("hidden")

    buttonHome.classList.remove("active")
    buttonBuddies.classList.remove("active")
    buttonTeams.classList.remove("active")
    buttonEnergy.classList.add("active")
    buttonJournal.classList.remove("active")
    
})

buttonJournal.addEventListener("click", () => {
    indexPage.classList.add("hidden");
    buddiesPage.classList.add("hidden");
    teamsPage.classList.add("hidden");
    energyPage.classList.add("hidden");
    journalPage.classList.remove("hidden");

    buttonHome.classList.remove("active");
    buttonBuddies.classList.remove("active");
    buttonTeams.classList.remove("active");
    buttonEnergy.classList.remove("active");
    buttonJournal.classList.add("active");
    
});

