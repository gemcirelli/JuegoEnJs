
define( ['Class','Display'], function(Class, Display){

    var Launcher = Class.extend({
        init: function(_title,_width,_height){
             console.log("el titulacho es",_title);
            var display= new Display(_title,_width,_height);
           
        }
    }); //permite qyue launcher sea extendida
    return Launcher; 
});

