// Selector

// Element Selector
$(document).ready(function(){
    $("#element").click(function(){
        $("#elementTest").hide();
    });
});

// Id Selector
$(document).ready(function(){
    $("#idSelector").click(function(){
        $("#idTest").hide();
    });
});

// Class Selector
$(document).ready(function(){
    $("#classTest").click(function(){
        $(".testA").hide();
    });
});

// $("ul li:first-child") selector
$(document).ready(function(){
    $("#firstChild").click(function(){
        $("ul li:first-child").hide();
    });
});

// Selector


// Events

/*  Document Ready Event

$(document).ready(function(){
    jQuery method goes here
});

This prevents jQuery code from running before the
document is finished loading.

    Document Ready Event */

// Click Method
$(document).ready(function(){
    $(".click").click(function(){
      $(this).hide();
    });
  });

$(document).ready(function(){
    $(".dblclick").dblclick(function(){
      $(this).hide();
    });
  });
// Click Method

// Hover Method - combination of mouseeneter() and mouseleave() methods
$(document).ready(function(){
    $("#hover").hover(function(){
      alert("You entered hover paragraph!");
    },
    function(){
      alert("Bye! You now left hover paragraph!")
    });
});
// Hover Method

// Focus & Blur Method - functions are executed when form gains and loses focus
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "blue");
    });
    $("input").blur(function(){
        $(this).css("background-color", "purple");
    });
});
// Focus & Blur Method

// Events

// Methods

// Hide & Show
$(document).ready(function(){
    $("#hide").click(function(){
        $("#hs").hide("slow");
    });
    $("#show").click(function(){
        $("#hs").show("fast");
    });
});
// Hide & show

// Toggle
$(document).ready(function(){
    $("#toggle").click(function(){
        $("#t").toggle(1700);
    });
});
// Toggle

// Methods

// Effects

// Fade Out - using on() method for both mouseeneter() and click()
$(document).ready(function(){
    $("#fadeout").click(function(){
       $("#box1").fadeOut();
       $("#box2").fadeOut("slow");
       $("#box3").fadeOut(3000);
    });
});
// Fade Out

// Slide Down & Stop Animation
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(1500);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
});
// Slide Down & Stop Animation

// Animate
$(document).ready(function(){
    $("#animate").click(function(){
        var animation = $("#animation");
        animation.animate({left: '100px'}, "slow");
        animation.animate({fontSize: '3em'}, "fast", function(){
            alert("The animation is finished");
        });
    });
});
// Animate

// Chaining
$(document).ready(function(){
    $("#chain").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
// Chaining

// Effects

// DOM Manipulation

// Get Content - Text & HTML
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test1").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test1").html());
    });
});
// Get Content - Text & HTML

// Get Content - Attribute
$(document).ready(function(){
    $("#attr").click(function(){
        alert($("#w3s").attr("href"));
    });
});
// Get Content - Attribute

// Set Content - Text & HTML & Value
$(document).ready(function(){
    $("#btn3").click(function(){
        $("#test3").text("Hello world!");
    });
    $("#btn4").click(function(){
        $("#test4").html("<b>Hello world!</b>");
    });
    $("#btn5").click(function(){
        $("#test5").val("Dolly Duck");
    });
})
// Set Content - Text & HTML & Value

// Set Content - Attribute
$(document).ready(function(){
    $("#setattr").click(function(){
        $("#w3s2").attr("href", "https://www.w3schools.com/jquery/");
    });
});
// Set Content - Attribute

// DOM Manipulation