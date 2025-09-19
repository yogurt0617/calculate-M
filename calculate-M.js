
let inputans = document.getElementById("inputans")
let nothing = document.getElementById("nothing")
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
                var powerx = power(Number(inputed),Number(inputans.value))
                inputans.value = powerx
                op = "none"
            }
            
            else {
                try{
                    inputans.value = eval(inputans.value)

                }catch{
                    inputans.value = "錯誤"
            }
        }
        }
        else if(value === "squrt"){
            var squrtx = squrt(inputans.value)
            inputans.value = squrtx
        }
        else if(value === "power"){
            inputed = inputans.value
            inputans.value = ""
            op = "power"
        }
        else if(value === "AC"){
            inputans.value =""
        }
        else {
            inputans.value += value
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