function gallery(images){
    var imgCount = images.length,
        screenDimer = document.getElementById('screen-dimer'),
        imgList = $("body").on("click", ".image-container", listOnClick),

        selected = document.getElementById('selected'),
        currentImage = document.getElementById('current-image'),
        prevImage = document.getElementById('previous-image'),
        nextImage = document.getElementById('next-image');    

    function showHideSelected(args){       
        if (args === true) {
            selected.style.visibility = "hidden";
        }
        else {
            selected.style.visibility = "visible";                
        }
    }

    showHideSelected(true); 


    function listOnClick(event){
        var target = event.target,
            currentImgDataInfo = target.getAttribute("data-info");
        switchImages(currentImgDataInfo);

        showHideSelected(false);
        screenDimer.classList.add("screen-dimmer")
    }

    function selectedOnClick(){

        showHideSelected(true);
        screenDimer.classList.remove("screen-dimmer")

    }

    function prevOnClick(event){
        var target = event.target,
            currentImgDataInfo = target.getAttribute("data-info") | 0;

        switchImages(currentImgDataInfo)
    }

    function nextOnClick(event){
        var target = event.target,
            currentImgDataInfo = target.getAttribute("data-info") | 0;

        switchImages(currentImgDataInfo)            
    }

    prevImage.addEventListener("click", prevOnClick, false);
    nextImage.addEventListener("click", nextOnClick, false);
    currentImage.addEventListener("click", selectedOnClick, false);

    function switchImages(currentImgDataInfo){
        var srcForCurrent,
            srcForPrev,
            srcForNext,
            prevDataInfo = getPrevImageDataInfo(currentImgDataInfo) | 0,
            nextDataInfo = getNextImageDataInfo(currentImgDataInfo) | 0;


        for (var i = 0; i < images.length; i++) {
            if (images[i].dataInfo == currentImgDataInfo) {
                srcForCurrent = images[i].source;

                if (i === 0) {
                    srcForPrev = images[images.length-1].source;
                    srcForNext = images[i+1].source
                }
                else if (i === images.length-1) {
                    srcForPrev = images[i-1].source;
                    srcForNext = images[0].source
                }
                else { 
                    srcForPrev = images[i-1].source;
                    srcForNext = images[i+1].source
               } 
                break;
            } 
        }
        currentImage.setAttribute("src", srcForCurrent)
        currentImage.setAttribute("data-info", currentImgDataInfo)

        prevImage.setAttribute("src", srcForPrev)
        prevImage.setAttribute("data-info", prevDataInfo)

        nextImage.setAttribute("src", srcForNext)
        nextImage.setAttribute("data-info", nextDataInfo)
    }

    function getPrevImageDataInfo(current) {
        var prev = current - 1;
        if (prev <= 0) {
            prev = imgCount;
        }
        return prev;
    }
 
    function getNextImageDataInfo(current) {
        var next = current + 1;
        if (next > imgCount) {
            next = 1;
        }
        return next;
    } 
}