var html = document.getElementById('article-template').innerHTML,
    template = Handlebars.compile(html),
    post = {
        images:[{source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p206x206/168253_525384974193137_347339759_n.jpg?oh=6652fee6ac0ed1db31e1eb4c19836576&oe=56A95F9C", dataInfo: 1},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/62606_525383544193280_283916271_n.jpg?oh=5d52ddcd9b2c5643bd148f8a04aed93d&oe=56A8921F", dataInfo: 2},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/947200_525383377526630_1324082348_n.jpg?oh=4451822ad009f2d44ec2f70f17b68f80&oe=566EADB1", dataInfo: 3},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11920_525383204193314_2115753715_n.jpg?oh=9e38902512a6d522dada22e023de1f74&oe=565F336F", dataInfo: 4},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/936846_525383137526654_1122375625_n.jpg?oh=60252ad1149bf1dfa67f0c72515196e0&oe=56724F5B", dataInfo: 5},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/942557_525383057526662_1362802199_n.jpg?oh=6f5f5d27dd85e93ab09a22b98caa7146&oe=56A94492", dataInfo: 6},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/577689_525382957526672_927340002_n.jpg?oh=a76b427ed0100d78d0f25708c79f13a2&oe=5661E0FB", dataInfo: 7},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/922844_522343437830624_745618700_n.jpg?oh=04399c194a562df0a981a3fa981a6b38&oe=5664B560", dataInfo: 8},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/923470_522341037830864_121172842_n.jpg?oh=3460d17ffdb84f05bbadade4564b8f67&oe=566BC715", dataInfo: 9},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/32425_522340717830896_67344627_n.jpg?oh=ccb2dfc5cf2bf7743595f7a1f750f255&oe=56706656", dataInfo: 10},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/551546_522340707830897_1096136955_n.jpg?oh=f2f5ad529a938fbbd9811586a9eae543&oe=5664B1CD", dataInfo: 11},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/58143_522340711164230_2140203306_n.jpg?oh=7b6db905fbb0b69ee8a323cb78c78786&oe=56A01F90", dataInfo: 12},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/164226_522340227830945_1507295191_n.jpg?oh=de2ab9f684d7301a7bb039830f4c51be&oe=5668D466", dataInfo: 13},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/37034_522340224497612_1541869086_n.jpg?oh=cab4c7d1a7a55671f8be13c4a56d7a76&oe=56656D71", dataInfo: 14},
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/400626_522339901164311_623693749_n.jpg?oh=7a738f11a6c2cbb6bbc978b57012161d&oe=56A918DA", dataInfo: 15},                
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/400626_522339901164311_623693749_n.jpg?oh=7a738f11a6c2cbb6bbc978b57012161d&oe=56A918DA", dataInfo: 16},                
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/525392_522339861164315_1021320783_n.jpg?oh=69d250b588869825d5e8f1378d4cd701&oe=5669FCC2", dataInfo: 17},                
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/317376_522339864497648_689196615_n.jpg?oh=6d8ba44be4c3fae32a9202672bdc1984&oe=56A96E9C", dataInfo: 18},                
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/528205_522339451164356_1231528527_n.jpg?oh=7725bfb23ad939c446e7fa05c95865d1&oe=5661DED9", dataInfo: 19},                
                {source:"https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/931379_522339447831023_682521662_n.jpg?oh=70839109e63ceaa6a1aa6bdeaab8ccf6&oe=56A15656", dataInfo: 20}]                
    },
    result = template(post);

document.getElementById('container').innerHTML = result;



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