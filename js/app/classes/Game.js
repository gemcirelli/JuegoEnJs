

define([ 'Class','Display', 'ImageLoader','Assets'], function(Class, Display, ImageLoader,Assets) {
    var _this ;
    var title, width,height,  display;
    var running= false;
    var g ;
    //para crear un assets
    //le damos nombre, una ruta, el tamñao del asset 
    var ast= new Assets("test","res/textures/mario.png",Assets.DEFAULT_WIDTH,Assets.DEFAULT_HEIGHT);
    // Y CREO LA IMAGEN LA RECORTO DESDE EL ASSET CREADO
    //cortamos la pieza del asset
    var img = ast.sheet.crop(0,0,32,32);

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
        
        g.clearRect(0,0,width,height); // BORRAR CANVAS 
       
       // g.drawImage(img,20,20);
       //le pasamos la imagen recortada
       g.myDrawImage(img, 10, 15, 32,32);
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