let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 5
function increment() {
  count += 1
  countEl.innerText = count
}
increment()
increment()
increment()

//save button, function save
function save() {
  let countStr = count + ' - '
  //1. grab the save-el paragrah and store it ina variable saveEl
  //2.create a variable containt the count and dash separator ie : "12 - "
  //3. render the variable in the innerTextinnerText
  saveEl.innerText  += countStr
  countEl.innerText = 0
  count = 0
  //4. make sure not delete the content of the paragraph
}
save();
save();
save();
//concatenate exempl
let firstName = "jepthe"
let lastName= "Nkwanmen"
let fullName= firstName + " " + lastName

function greating()
{
console.log("greatting" + " " + fullName + "!" )
}
//addition and soustraction 
let point = 5
function add(){
  point+= 5
  console.log("add is" + " " + point)
}
add()
function remove(){
  let point = 7
  point -= 3
  console.log("remove is" + " " + point)
}
remove()

//use js to sent and error message using functio
let errorParagraph = document.getElementById("error")
function purcharge () {
  errorParagraph.textContent= "Something went wrong, please try again"
  console.log(errorParagraph)
}
purcharge()




//create a calculator with htlm and js

let num1 = 8
let num2 = 2

//create four function:add(), substract(), divide() , multiply()
//call the correct function when the user click on one of the buttons
//perdorm the given calculation using num1 and num2
//render the result of the calculation in the paragraph with id="sum-el"
//e.g if the used clicks on the "plus" button, you should render
//"Sum: 10" (since 8+2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add1() {
  let result = num1 + num2
  sumEl.textContent = ("sum is: " + " " + result )

}
add1()
function substract() {
  let reault = num1 - num2
  sumEl.textContent = ("sum is:" + " " + reault)

}
substract()

function divide() {
  let result = num1 / num2
sumEl.textContent = ("sum is: " + " " + result)
}
divide()

function multiply() {
  let result = num1 * num2
  sumEl.textContent = ("sum is: " + " " + result)
}
multiply()

