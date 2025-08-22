(function () {
  console.log("init.js loaded");

  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });
  overworld.init();
})();
