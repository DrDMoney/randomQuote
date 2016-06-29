
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }


$(document).ready(function(){
    //runs getQuote funtuion at start of document
    var trigger = false;;
    getQuote();
    


    function getQuote(){
        $.ajax({
            type:'GET',
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function(obj) {
                if (trigger) {
                    changeColor(), changeQuoteHTML(obj), $("#box").fadeTo(250,1);

                } else {
                    trigger = true;
                    changeQuoteHTML(obj), $("#box").fadeTo(250,1);
                }
            },
            cache: !1
        }); //.ajax
    }//getQuote


    function changeQuoteHTML(obj){
        var array = obj.shift();
        $("#quote").html(array.content);
        $("#quoteTitle").html(array.title);

        
        
        
        //builds a twitter url
        var twitterUrl = "http://twitter.com/intent/tweet?hashtags=quotes&text="; // starting url with quote #
        var toUrl = $("#quote").text().replace(/(<([^>]+)>)/gi, ""); // removes HTML element tags
        toUrl = toUrl.substring(0, 108); // chars to 108
        twitterUrl+=encodeURIComponent(toUrl.trim())+ "...  "; // encodes to url format
        $("#twitter").attr("href", twitterUrl); //added url to target
    }
    
    
    
    
    //listener
    $("#get-new-quote").click(function(){
        $("#box").fadeTo(250, 0.0, getQuote());
    });
    
    
    
    function changeColor(){
        var randomColor = rgb(rand(50,200),rand(50,200),rand(50,200));
        
        $(".colorBG").animate({backgroundColor: randomColor}, 500 ),
        $(".colorTEXT").animate({color: randomColor}, 500 );
    }
    
    function animateQuoteHTML(){
    }
    
    
        //Random and rgb Functions
    function rgb(r, g, b){
      r = Math.floor(r); // floor set to whole value
      g = Math.floor(g);
      b = Math.floor(b);
      return ["rgb(",r,",",g,",",b,")"].join(""); //converts to striing
    }
    
    //creates a random numb from min and max
    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    
});




