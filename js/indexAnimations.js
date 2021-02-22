window.onload = function() {
    textLoader();
    let timer = setInterval(textLoader, 500);

    function textLoader() {
        let hotBatata = document.querySelector("#hotbatata-text")
        let text = "HotBatata";
        let random = Math.floor(Math.random() * 4);
        let color;
        switch (random) {
            case 0:
                color = "#c38d9d"
                break;
            case 1:
                color = "#e8a87c"
                break;
            case 2:
                color = "#84cdca"
                break;
            case 3:
                color = "#e27d5f"
                break;
            default:
                color = "black"
                break;
        }
        console.log(random);
    
        if (hotBatata.textContent == text) {
            clearInterval(timer);
            hotBatata.style.color = "#c2887d";
        }else {
            hotBatata.style.color = color;
            hotBatata.textContent = hotBatata.textContent + text[hotBatata.textContent.length];
        }
    }
}
