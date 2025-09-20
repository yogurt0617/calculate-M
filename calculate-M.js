
let inputans = document.getElementById("inputans")
let nothing = document.getElementById("nothing")
let inputarry = []
let nothingno = 0
let inputing = 0
let inputed = 0
let op = "none"

function squrt(numsqurt){
    return numsqurt * numsqurt
}
function power(numpowored,numpower){
    return numpowored ** numpower
}
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        const value = btn.dataset.val
        console.log(btn.dataset.val)
        
        if(value === "="){
            console.log(inputed)
            if(op === "power"){
                let powerin = inputarry.splice("^")
                inputed = powerin[0]
                inputing = powerin[1]
                var powerx = power(Number(inputed),Number(inputing))
                inputans.value = powerx
                inputarry = [powerx]
                op = "none"
            }

            else if (op === "squrt"){
                var squrtx = squrt(inputed)
                inputans.value = squrtx
                inputarry = [inputans.value]
                op = "none"
            }
        
            else {
                try{
                    inputans.value = eval(inputans.value)
                    inputarry = [inputans.value]
                }catch{
                    inputans.value = "錯誤"
                    inputarry = []
                }
        }
        }
        else if(value === "squrt"){
            inputed = inputans.value
            inputans.value = inputed + "²"
            op = "squrt"
        }
        else if(value === "power"){
            inputans.value += "^"
            op = "power"
        }
        else if(value === "AC"){
            inputans.value =""
            inputarry = []
        }
        else if(value === "bs"){
            inputarry.pop()
            inputans.value = inputarry.join("")
        }
        else {
            inputarry.push(value)
            inputans.value = inputarry.join("")
        }
    })
})

nothing.addEventListener("click",()=>{
    nothingno += 1
    console.log(nothingno)
    if(nothingno == 5){
    inputans.value = "就還沒開發是在按什麼"
    }
})