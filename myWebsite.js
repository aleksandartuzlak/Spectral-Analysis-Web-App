const text = baffle(".data")
text.set({
    characters: '░░< ░▒<█> ░▒░<░ ▓█▓ ░<░▒█ █/▒▓ <▒▓ /▒▒/ █>>█',
    speed: 120
})

text.start()
text.reveal(4000)

// simple jQuery functions and webpage actions
$(document).ready(function() {
    $('.sidenav').sidenav()
    $('.tooltipped').tooltip()
})

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

