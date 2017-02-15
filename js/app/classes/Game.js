

define([ 'Class','Display', 'ImageLoader'], function(Class, Display, ImageLoader) {
    var _this ;
    var title, width,height,  display;
    var running= false;
    var g ;

    var Game = Class.extend({
        init: function(_title,_width,_height){
            _this= this;
            title= _title;
            width=_width;
            height=_height;
        }
    });
    function init(){
        display= new Display(title,width, height);
        g= display.getGraphics(); // OJO CON ESTA LINEA BUSCAR 
    }
    var x = 20;
    var y = 30;
var img = ImageLoader.loadImage("https://i.stack.imgur.com/OrOS9.png");
    function tick(_td){
        
    }
    function render (){
        console.log(g);
        g.clearRect(0,0,width,height); // BORRAR CANVAS 
        g.fillRect(x,y,200,50); // RELLENAR CANVAS 
        g.drawImage(img,20,20);
    }
    Game.prototype.run= function(){
        init();
        var fps =30;
        var timePerTick = 1000/fps;
        var delta = 0;
        var now;
        var lasTime= Date.now();
        var timer = 0;
        var ticks = 0;
        function loop(){
           if(running){
               now = Date.now();
               delta=now- lasTime;
               timer += delta;
               lasTime= now;
           }
           if(timer>=timePerTick){
               dt=  timer/1000;
               tick(dt);
               render();
               timer=0;
           }   
           window.requestAnimationFrame(loop);  
        }
        loop();
    }
    Game.prototype.start= function(){
        if(running) return;
        running=true;
        this.run();
    }
return Game; //para tener acceso a la clase Game 
});