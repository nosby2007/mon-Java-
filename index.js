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

let firstName = "jepthe"
let lastName= "Nkwanmen"
let fullName= firstName + " " + lastName

function greating()
{
console.log("greatting" + " " + fullName + "!" )
}
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

function purcharge () {
  console.log("clic button")
}
purcharge()