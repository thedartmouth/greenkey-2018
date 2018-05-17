var x = 0,
    titles = $('.titles'),
    items = titles.find('li'),
    containerHeight = 0,
    numberVisible = 5,
    intervalSec = 2000;

if(!titles.find('li:first').hasClass("first")){
  titles.find('li:first').addClass("first");
}

items.each(function(){
  if(x < numberVisible) {
    containerHeight = containerHeight + $(this).outerHeight();
    x++;
  }
});

titles.css({ height: containerHeight, overflow: "hidden" });

function vertCycle() {
  var firstItem = titles.find('li.first').html();

  titles.append('<li>'+firstItem+'</li>');
  firstItem = '';
  titles.find('li.first').animate({ marginTop: "-50px" }, 600, function(){  $(this).remove(); titles.find('li:first').addClass("first"); });
}

if(intervalSec < 700){
  intervalSec = 700;
}

var init = setInterval("vertCycle()",intervalSec);


// articles one
var y = 0,
    articles = $('.articles'),
    articleItems = articles.find('li'),
    articlesContainerHeight = 0,
    articlesNumVis = 1

if(!articles.find('li:first').hasClass("first")){
  articles.find('li:first').addClass("first");
}

articleItems.each(function(){
  if(y < articlesNumVis) {
    articlesContainerHeight = articlesContainerHeight + $(this).outerHeight();
    y++;
  }
});

articles.css({ height: articlesContainerHeight, overflow: "hidden" });

function articlesCycle() {
  var firstItem = articles.find('li.first').html();

  articles.append('<li>'+firstItem+'</li>');
  firstItem = '';
  articles.find('li.first').animate({ marginTop: "-50px" }, 600, function(){  $(this).remove(); articles.find('li:first').addClass("first"); });
}

var articlesInit = setInterval("articlesCycle()",intervalSec);

articles.hover(function(){
  clearInterval(articlesInit);
  clearInterval(init);
}, function(){
  init = setInterval("vertCycle()",intervalSec);
  articlesInit = setInterval("articlesCycle()",intervalSec);
});

titles.hover(function(){
  clearInterval(articlesInit);
  clearInterval(init);
}, function(){
  init = setInterval("vertCycle()",intervalSec);
  articlesInit = setInterval("articlesCycle()",intervalSec);
});
