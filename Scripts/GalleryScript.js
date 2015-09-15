function gallery(cols){
    var columns = cols || 3,
        imgCount = post.images.length,
        screenDimer = document.getElementById('screen-dimer'),
        imgList = document.getElementsByClassName('image-container'),

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

    for (var i = 0; i < imgCount; i+= 1) {
        if (i % columns === 0) {
            imgList[i].classList.add('clearfix');
        }
    }

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

    for (i = 0; i < imgList.length; i++) {
        imgList[i].addEventListener("click", listOnClick, false);
    }

    function switchImages(currentImgDataInfo){
        var srcForCurrent,
            srcForPrev,
            srcForNext,
            prevDataInfo = getPrevImageDataInfo(currentImgDataInfo) | 0,
            nextDataInfo = getNextImageDataInfo(currentImgDataInfo) | 0;


        for (var i = 0; i < post.images.length; i++) {
            if (post.images[i].dataInfo == currentImgDataInfo) {
                srcForCurrent = post.images[i].source;

                if (i === 0) {
                    srcForPrev = post.images[post.images.length-1].source;
                    srcForNext = post.images[i+1].source
                }
                else if (i === post.images.length-1) {
                    srcForPrev = post.images[i-1].source;
                    srcForNext = post.images[0].source
                }
                else { 
                    srcForPrev = post.images[i-1].source;
                    srcForNext = post.images[i+1].source
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
            prev = imgList.length;
        }
        return prev;
    }
 
    function getNextImageDataInfo(current) {
        var cur = current | 0
            next = cur + 1;
        if (next > imgList.length) {
            next = 1;
        }
        return next;
    } 
} 