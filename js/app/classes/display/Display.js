

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
    Display.prototype.getTilte= function(){
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

    return Display;



});