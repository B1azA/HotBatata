window.onload = function() {
    let rndNumGenBtn = document.querySelector("#rnd-btn-num-gen")
    let rndNumGenBtn2 = document.querySelector("#rnd-btn-num-gen2")

    let rndNumGenBtnClicked = false
    
    rndNumGenBtn.onclick = function() {
        if (!rndNumGenBtnClicked) {
            rndNumGenBtnClicked = true
            toolWindow = document.querySelector("#tool-window")
            
            okBtn = document.createElement("button")
            okBtn.textContent = "OK"
            okBtn.classList.add("tools-btn")
            okBtn.style.top = "30%"
            
            toolWindow.appendChild(okBtn)
            
            let minP = document.createElement("p")
            minP.textContent = "Od"
            minP.style.left = "20%"
            minP.style.top = "10%"
            toolWindow.appendChild(minP)
            
            min = document.createElement("input")
            min.style.width = "30%"
            min.style.left = "10%"
            min.style.top = "20%"
            
            toolWindow.appendChild(min)
            
            let maxP = document.createElement("p")
            maxP.textContent = "Do"
            maxP.style.right = "20%"
            maxP.style.top = "10%"
            toolWindow.appendChild(maxP)
            
            max = document.createElement("input")
            max.style.width = "30%"
            max.style.right = "10%"
            max.style.top = "20%"
            
            toolWindow.appendChild(max)
            
            let answer = document.createElement("p")
            answer.textContent = "Odpověď:"
            answer.style.top = "40%"
            answer.classList.add("centered")
            toolWindow.appendChild(answer)
            
            output = document.createElement("p")
            output.classList.add("section")
            output.style.left = "5%"
            output.style.top = "60%"
            output.style.fontSize = "30px"
            
            toolWindow.appendChild(output)
            
            okBtn.onclick = function() {
                let alright = false
                if (Number.isInteger(parseInt(min.value))) {
                    alright = true
                } else {
                    if (min.value == 0) {
                        min.value = 0
                        alright = true
                    } else {
                        alright = false
                    }
                }
                if (alright) {
                    if (Number.isInteger(parseInt(max.value))) {
                        alright = true
                    } else {
                        alright = false
                    }
                }
                
                if (alright) {
                    if (parseInt(min.value) < parseInt(max.value)) {
                        //actual content
                        let minimal = Math.ceil(min.value)
                        let maximal = Math.floor(max.value)
                        
                        output.textContent = (Math.floor(Math.random() * (maximal - minimal + 1)) + minimal)
                    } else {
                        alert("První číslo nesmí být větší nebo rovno druhému!!!")
                    }
                } else {
                    alert("Jeden nebo více vstupů nejsou čísla nebo jsou moc velká!!!")
                }

            }
            
        } else {

        }
    }
}