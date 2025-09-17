
let inputans = document.getElementById("inputans")

document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        const value = btn.dataset.val
        console.log(btn.dataset.val)

        
        if(value === "="){
            try{
                inputans.value = eval(inputans.value)
            }catch{
                inputans.value = "錯誤"
            }
        }

        else if(value === "AC"){
            inputans.value =""
        }
        
        else {
        inputans.value += value;
        }

    })
})