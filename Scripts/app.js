var containerId = '#container';
var sammyApp = Sammy(containerId, function() {
    this.get('#/', function() {
        this.redirect('#/home');
    });

    this.get('#/home', function(){
    	renderHandlebars(templates.home)
    })

    this.get('#/gallery', function(){
    	var container = 'container';
    	renderHandlebars(templates.gallery)
    	gallery(4);
    })
});

sammyApp.run('#/');

function renderHandlebars(HBtemplate){
	var html = HBtemplate,
    	template = Handlebars.compile(html),    
    	result = template(post);    

		document.getElementById('container').innerHTML = result; 
}