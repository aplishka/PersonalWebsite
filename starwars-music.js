/*
 * Sound copyright by The Walt Disney Company.
 * 
 *
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 * 
 */
(function() {  

  function StarWars() {
    // Audio to play the opening crawl
    var audio = $('audio').get(0);
    audio.play();
  }
  
  StarWars();

  $('.ball').click(function() {
    $("i").toggleClass("fa-pause fa-play");

    var audio = $('audio').get(0);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

}) ();