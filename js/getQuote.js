
$(document).ready(function(){
    getQuote();
    


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
        var toUrl = $("#quote").text().replace(/(<([^>]+)>)/gi, ""); // removes HTML element tags
        toUrl = toUrl.replace(/'/g, "%27");
        toUrl = toUrl.replace(/"/g, "%22");
        
        toUrl = toUrl.substring(0, 108); // chars to 108
        twitterUrl+=toUrl;
        
        console.log(twitterUrl);
        


        $("#twitter").attr("href", twitterUrl);
    }
    
    $("#get-new-quote").click(function(){
        getQuote();
    });

});




