$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(500, 290, 80, 20);
    createPlatform(650, 290, 80, 20);
    createPlatform(200, 610, 80, 140);
    createPlatform(590, 580, 25, 10);
    createPlatform(900, 580, 25, 10);
    createPlatform(1220, 580, 25, 10);
    createPlatform(1350, 500, 50, 50);
    createPlatform(1250, 370, 50, 20);
    createPlatform(1000, 300, 25, 10);
    createPlatform(590, 390, 30, 10);





    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 530, 0.5, 0.7);
    createCollectable("diamond", 1250, 55, 0.5, 0.7);
    createCollectable("diamond", 520, 240, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("top", 670, 2100);
    createCannon("top", 1100, 2800);
    createCannon("top", 300, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
