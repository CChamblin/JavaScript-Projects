// element selector
$(document).ready(function(){
    $("button1").click(function(){
        $("h3").hide();
    });
});

// #id selector
$(document).ready(function(){
    $("button2").click(function(){
        $("#test").hide();
    });
});

// .class selector
$(document).ready(function(){
    $("button3").click(function(){
        $(".test").hide();
    });
});

// $("ul li:first-child") selector
$(document).ready(function(){
    $("button4").click(function(){
        $("ul li:first-child").hide();
    });
});