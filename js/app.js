requirejs.config({
    "baseUrl": "js",
    "paths":{
      "Class":"libs/class",
      "Jquery":"libs/jquery",

      //Classes 
      "Assets":"app/classes/gfx/Assets",
      "ImageLoader":"app/classes/gfx/ImageLoader" ,
      "Launcher":"app/classes/Launcher" ,
      "Display":"app/classes/display/Display" ,
      "Game":"app/classes/Game",
      "SpriteSheet":"app/classes/gfx/SpriteSheet" 
    }
    
    
      
  
});

require(['app/main']);       