$(document).ready(function(){
    var set=1;
    function switchHeader()
    {
        var curenthead="#testheader-"+ parseInt(set);
        set++;
        if (set>4)
        {
            set=1;
        }
        var nexthead="#testheader-"+ parseInt(set);
        $(curenthead).fadeOut(100);
        $(nexthead).delay(100).fadeIn(500);

    };
    function switchHeaderPrev()
    {
        var curenthead="#testheader-"+ parseInt(set);
        set--;
        if (set<1)
        {
            set=4;
        }
        var nexthead="#testheader-"+ parseInt(set);
        $(curenthead).fadeOut(100);
        $(nexthead).delay(100).fadeIn(500);

    };
    setInterval(function(){
        var test1=switchHeader();
    },10000);

    $(".next").click(function(){
        var next=switchHeader();
    });
    $(".prev").click(function(){
        var next=switchHeaderPrev();
    });
    

});