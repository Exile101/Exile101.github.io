(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = (-Math.random()*0.1)+Math.random()*0.8;
            _this.scale = 0.1+Math.random()*0.8;
            _this.velocity = Math.random();
        }
        
        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(256,256,256, '+ _this.alpha+')';
            ctx.fill();
        };
   
    }

})();


$(window).load(function(){


    $('.overlay').mouseover(function(){
        $(this).siblings('.worksimg').css('transform','scale(1.1)');
        $(this).siblings('.worksimg').css('-webkit-transform','scale(1.1)');
        $(this).siblings('.worksimg').css('-moz-transform','scale(1.1)');
        $(this).siblings('.worksimg').css('-o-transform','scale(1.1)');

    });

    $('.overlay').mouseout(function(){
        $(this).siblings('.worksimg').css('transform','scale(1)');
        $(this).siblings('.worksimg').css('-webkit-transform','scale(1)');
        $(this).siblings('.worksimg').css('-moz-transform','scale(1)');
        $(this).siblings('.worksimg').css('-o-transform','scale(1)');

    });



    $('.upbtn').hide();
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if (scrollTop>300) {
            $('.upbtn').show();
        }
        if (scrollTop<300) {
            $('.upbtn').hide();
        }
    });

    $('.upbtn').click(function(){
        var scrollTop=$(window).scrollTop();
        $('html,body').animate({scrollTop:0});
    });


// hides menu

function vanish() {
    var c=0;
    for (var i = 0; i < 9;i++) {
        var obj=$(".menucompo").eq(i);
        
        obj.delay(i*100).animate({'opacity':0},
             function() { 
                 obj.addClass("hideobj");
                 c++;
                 if (c==9) {
                    $('.menu').addClass("hideobj");
                 }
                });

                                };
    
};

function showmenu() {
    $('.menu').removeClass("hideobj");
    for (var i = 0; i < 9;i++) {
        var obj=$(".menucompo").eq(i);
        obj.removeClass("hideobj");
        obj.delay(i*100).animate({'opacity':1});
    };
};





$(".menubtn").click(function(){
    showmenu();
});


$('.closemenu').click(function(){
    vanish();
});



    var width=$(window).outerWidth();
    var percent=((width-500)*0.5)*100/width;
    $('.menu').css("left",percent+"%");




})