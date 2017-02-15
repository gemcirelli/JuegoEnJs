requirejs.config({
    "baseUrl": "js",
    "paths":{
      "Class":"libs/class",
      "Jquery":"libs/jquery",

      //Classes 
      "ImageLoader":"app/classes/gfx/ImageLoader" ,
      "Launcher":"app/classes/Launcher" ,
      "Display":"app/classes/display/Display" ,
      "Game":"app/classes/Game" 
    }
    
    
      
  
});

require(['app/main']);       