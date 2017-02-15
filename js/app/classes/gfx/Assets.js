
/* */
define([ 'Class', 'ImageLoader','SpriteSheet'], function(Class, ImageLoader, SpriteSheet ) {
    var DEFAULT_WIDTH=32, DEFAULT_HEIGHT=32;
    var assets={};

    var Assets = Class.extend({
        init:function(_name,_path,_width,_height){
            //creamos un nuevo objeto, este es el objeto con un nombre en específico 
            assets[_name]= this;
            this.name= _name;
            // en el futuro se cargará desde un archivo
            this.path=_path;
            this.width=_width;
            this.height=_height;
            this.sheet= new SpriteSheet(ImageLoader.loadImage(this.path));
        }
      });   
        Assets.DEFAULT_WIDTH=DEFAULT_WIDTH;
        Assets.DEFAULT_HEIGHT=DEFAULT_HEIGHT;
        // para tener el assets que queremos, los buscamos por el nombre 
        Assets.getAssets=function(_name){
            return assets[_name];
        }
    return Assets; 
});