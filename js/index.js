$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "閱讀完整內容";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<div><a href="" class="play-button morelink small">' + moretext + '</a></div></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            ellipsestext = "";
            $(this).addClass("less");
            $(this).removeClass("play-button");
            $(this).html('');
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});