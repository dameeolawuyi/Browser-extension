let wordBank = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const leadsFromStorage=JSON.parse(localStorage.getItem("wordBank"))
const tabBtn= document.getElementById("tab-btn")



if (wordsFromLocalStorage) {
    wordBank = wordsFromLocalStorage
    render(wordBank)

}

const tabs = [
    {string: "entwined"}
]


tabBtn.addEventListener("click", function){
console.log(tabs[0].string)
myLeads.push(tabs[0].string)
localStorage.setItem("wordBank", JSON.stringify(myLeads))
render(wordBank)
})



inputBtn.addEventListener("click", function(){
    wordBank.push(inputEl.value)
    inputEl.value=""
    
    localStorage.setItems("wordBank", JSON.stringify (wordBank))
    renderWords()
    console.log(localStorgae.getItem("wordBank") )

})

function renderWords(){ 
    let listItems = ""
    for (let i = 0; i < wordBank.length; i++) {
        
        
        listItems +="<li>" + wordBank[i] + " </li> " 
    
}

ulEl.innerHTML =listItems
} 