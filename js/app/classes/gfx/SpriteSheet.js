/* nos ayuda  a pasar la imagen y luego especificr que parte de la imagen queremos usar*/


define([
    'Class'
], function(Class) {
    var SpriteSheet=  Class.extend({
        init:function(_sheet){
            this.sheet=_sheet;
        }
    });
    
    SpriteSheet.prototype.crop= function(_x,_y,_width,_height){
        return{"sheet":this.sheet,"x":_x,"y":_y,"width":_width,"height":_height};
    };

    return SpriteSheet;
});