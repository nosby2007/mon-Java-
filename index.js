let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let count = 0
 function increment() {
   count  += 1
   countEl.innerText = count
 }
 increment()

 //save button, function save
function save() {
  let countStr = count + " - "
  //1. grab the save-el paragrah and store it ina variable saveEl
//2.create a variable containt the count and dash separator ie : "12 - "
//3. render the variable in the innerTextinnerText
saveEl.innerText += countStr
//4. make sure not delete the content of the paragraph 
}
save()
