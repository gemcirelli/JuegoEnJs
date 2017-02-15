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
      "GameState": "app/classes/states/GameState",
      "SpriteSheet":"app/classes/gfx/SpriteSheet",
      "State":"app/classes/states/State" 
    }
    
    
      
  
});

require(['app/main']);       