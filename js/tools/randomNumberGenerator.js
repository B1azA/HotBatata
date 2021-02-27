class RndNumGenerator {
    constructor() {
    }
    
    Create() {
        
        this.toolWindow = document.querySelector("#tool-window")
        
        this.okBtn = document.createElement("button")
        this.okBtn.textContent = "OK"
        this.okBtn.classList.add("tools-btn")
        this.okBtn.style.top = "30%"
        
        this.toolWindow.appendChild(okBtn)
        
        let minP = document.createElement("p")
        minP.textContent = "Od"
        minP.style.left = "20%"
        minP.style.top = "10%"
        this.toolWindow.appendChild(minP)
        
        this.min = document.createElement("input")
        this.min.style.left = "10%"
        this.min.style.top = "20%"
        
        this.toolWindow.appendChild(min)
        
        let maxP = document.createElement("p")
        maxP.textContent = "Do"
        maxP.style.right = "20%"
        maxP.style.top = "10%"
        toolWindow.appendChild(maxP)
        
        this.max = document.createElement("input")
        this.max.style.right = "10%"
        this.max.style.top = "20%"
        
        this.toolWindow.appendChild(max)
        
        let answer = document.createElement("p")
        answer.textContent = "Odpověď:"
        answer.style.top = "40%"
        answer.classList.add("centered")
        this.toolWindow.appendChild(answer)
        
        this.output = document.createElement("p")
        this.output.textContent = "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        this.output.classList.add("section")
        this.output.style.left = "5%"
        this.output.style.top = "60%"
        this.output.style.fontSize = "20px"
        
        this.toolWindow.appendChild(output)
    }
}