const images = document.getElementsByTagName("img")
    const imageLen = images.length
    document.getElementById("prev").addEventListener("click", () => {
        for (let i = 0; i < imageLen; i++) {
            if (images[i].className == "active") {

                if (i == 0) {
                    images[imageLen - 1].className = "active"
                    images[0].className = "";
                    break;
                } else {

                    images[i].className = ""
                    images[i - 1].className = "active"
                    break;
                }
            }
        }
    })
    document.getElementById("next").addEventListener("click", () => {
        for (let i = 0; i < imageLen; i++) {
            if (images[i].className == "active") {
                if (i == imageLen - 1) {
                    console.log("executed")
                    images[i].className = "";
                    images[0].className = "active"
                    break;
                } else {
                    images[i].className = ""
                    images[i + 1].className = "active"
                    break;
                }
            }
        }
    })