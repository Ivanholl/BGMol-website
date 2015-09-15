var html = document.getElementById('article-template').innerHTML,
    template = Handlebars.compile(html),
    post = {
        images:[{source:"Pictures/1.jpg", dataInfo: 1},
    			{source:"Pictures/2.jpg", dataInfo: 2},
    			{source:"Pictures/3.jpg", dataInfo: 3},
    			{source:"Pictures/4.jpg", dataInfo: 4},
    			{source:"Pictures/5.jpg", dataInfo: 5},
    			{source:"Pictures/6.jpg", dataInfo: 6},
    			{source:"Pictures/7.jpg", dataInfo: 7},
    			{source:"Pictures/8.jpg", dataInfo: 8},
    			{source:"Pictures/9.jpg", dataInfo: 9},
    			{source:"Pictures/10.jpg", dataInfo: 10},
    			{source:"Pictures/11.jpg", dataInfo: 11},
    			{source:"Pictures/12.jpg", dataInfo: 12}]
    },
    result = template(post);
	document.getElementById('container').innerHTML = result;