
let inputans = document.getElementById("inputans")

function squrt(numsqurt){
    return numsqurt * numsqurt
}

document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        const value = btn.dataset.val
        console.log(btn.dataset.val)

        
        if(value === "="){
            try{
                inputans.value = eval(inputans.value)
                console.log(inputans.value)
            }catch{
                inputans.value = "錯誤"
            }
        }
        else if(value === "squrt"){
            var squrtx = squrt(inputans.value)
            inputans.value = squrtx
        }
        else if(value === "AC"){
            inputans.value =""
        }
        else {
        inputans.value += value;
        }

    })
})