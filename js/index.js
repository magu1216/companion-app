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
    indexPage.classList.add("hidden")
    buddiesPage.classList.add("hidden")
    teamsPage.classList.add("hidden")
    energyPage.classList.add("hidden")
    journalPage.classList.remove("hidden")

    buttonHome.classList.remove("active")
    buttonBuddies.classList.remove("active")
    buttonTeams.classList.remove("active")
    buttonEnergy.classList.remove("active")
    buttonJournal.classList.add("active")
    
})
