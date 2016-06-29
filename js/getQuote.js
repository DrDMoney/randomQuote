
$(document).ready(function(){


    function getQuote(){
        $.ajax({
            type:'GET',
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function(obj) {
                changeQuoteHTML(obj);
            },
            cache: !1
        }); //.ajax
    }//getQuote


    function changeQuoteHTML(obj){
        var array = obj.shift();
        $("#quote").html(array.content);
        $("#quoteTitle").html(array.title);
        
        
        
        //builds a twitter url
        var twitterUrl = "http://twitter.com/home?status="; // starting url
            console.log(array.content);
        var arrayToUrl = array.content.replace(/(<([^>]+)>)/gi, ""); // removes HTML element tags
            console.log(arrayToUrl);
        arrayToUrl = arrayToUrl.substring(0, 108); // chars to 108
            console.log(arrayToUrl);
       arrayToUrl = arrayToUrl.replace(new RegExp(" ", 'g'), "%20"); // Replaces all spaces with %20 "url sapce code"
            console.log(arrayToUrl);
        twitterUrl = twitterUrl + arrayToUrl;
        
        console.log(arrayToUrl);
        
    
        
        $("#twitter").attr("href", twitterUrl);
        
    }
    

    $("#get-new-quote").click(getQuote());
    
    
    
});




