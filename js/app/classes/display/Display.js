

define( ['Jquery', 'Class'], function($,Class){
    //Private Variables
    var canvas, title, width, height, graphics ;

    var Display = Class.extend({
        init: function(_title,_width,_height ){
            title= _title;
             console.log("el titulo es",title);
            width=_width;
            height=_height;
            createDisplay();
        }

    });

    //Private method
    function createDisplay(){
        document.title=title;
        var body = document.body;
        body.innerHTML= ("<canvas id='canvas' width='"+width+"' height='"+height+"'></canvas>");
        graphics=document.getElementById("canvas").getContext("2d");

    }

    //Getters 
    //esto lo hago para que cuando cree una nueva clase que sea del tipo DIsplay, pueda acceder al valor
    //de las variables 
    Display.prototype.getTitle= function(){
        return title;
    };
    Display.prototype.getWidth= function(){
        return width;
    };

     Display.prototype.getHeight= function(){
        return height;
    };

     Display.prototype.getGraphics= function(){
        return graphics;
    };


/* Agregado por el gráfico, nos deja pasar el Asset, asignarle el ancho, tamaño A LA DRAWIMAGE function que 
cree anteriormente la que está en Game.js y en la función RENDER */

    CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y,_width,_height){
        this.drawImage(asset.sheet, asset.x,asset.y,asset.width,asset.height,_x,_y,_width,_height);
    };
    return Display;



});