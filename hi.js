$("a#ya").click(function(){
    event.preventDefault();
   if ($("div#dm,div#rule,div#marc, div#kith, div#icon, div#tarot, div#pprod, div#gender, div#thesis").hasClass("show")) {
    $("div#dm, div#rule, div#marc, div#kith, div#icon, div#tarot, div#pprod, div#gender, div#thesis").removeClass("show")
  }
  if ($("a#dm, a#rule, a#marc, a#kith, a#icon, a#tarot, a#pprod, a#gender, a#thesis").hasClass("active")) {
    $("a#dm, a#rule, a#marc, a#kith, a#icon, a#tarot, a#pprod, a#gender, a#thesis").removeClass("active")
  }
    $("div#ya").toggleClass("show");
  $("a#ya").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#kith").click(function(){
    event.preventDefault();
   if ($("div#dm, div#rule, div#marc, div#gender, div#icon, div#tarot, div#ya, div#pprod, div#thesis").hasClass("show")) {
    $("div#dm, div#rule, div#marc, div#gender, div#icon, div#tarot, div#ya, div#pprod, div#thesis").removeClass("show")
  }
  if ($("a#dm, a#rule, a#marc, a#gender, a#icon, a#tarot, a#ya, a#pprod, a#thesis").hasClass("active")) {
    $("a#dm, a#rule, a#marc, a#gender, a#icon, a#tarot, a#ya, a#pprod, a#thesis").removeClass("active")
  }
    $("div#kith").toggleClass("show");
  $("a#kith").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#gender").click(function(){
    event.preventDefault();
   if ($("div#dm, div#rule, div#marc, div#kith, div#icon, div#tarot, div#ya, div#pprod, div#thesis").hasClass("show")) {
    $("div#dm, div#rule, div#marc, div#kith, div#icon, div#tarot, div#ya, div#pprod, div#thesis").removeClass("show")
  }
  if ($("a#dm, a#rule, a#marc, a#kith, a#icon, a#tarot, a#ya, a#pprod, a#thesis").hasClass("active")) {
    $("a#dm, a#rule, a#marc, a#kith, a#icon, a#tarot, a#ya, a#pprod, a#thesis").removeClass("active")
  }
    $("div#gender").toggleClass("show");
  $("a#gender").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#thesis").click(function(){
    event.preventDefault();
   if ($("div#dm, div#rule, div#marc, div#kith, div#icon, div#tarot, div#ya, div#gender, div#pprod").hasClass("show")) {
    $("div#dm, div#rule, div#marc, div#kith, div#icon, div#tarot, div#ya, div#gender, div#pprod").removeClass("show")
  }
     if ($("a#dm, a#rule, a#marc, a#kith, a#icon, a#tarot, a#ya, a#gender, a#pprod").hasClass("active")) {
    $("a#dm, a#marc, a#rule, a#kith, a#icon, a#tarot, a#ya, a#gender, a#pprod").removeClass("active")
  }
    $("div#thesis").toggleClass("show");
  $("a#thesis").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#icon").click(function(){
    event.preventDefault();
   if ($("div#dm, div#marc, div#rule, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").hasClass("show")) {
    $("div#dm, div#marc, div#rule, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").removeClass("show")
  }
     if ($("a#dm, a#rule, a#marc, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").hasClass("active")) {
    $("a#dm, a#marc, a#rule, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").removeClass("active")
  }
    $("div#icon").toggleClass("show");
  $("a#icon").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#marc").click(function(){
    event.preventDefault();
   if ($("div#dm, div#rule, div#icon, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").hasClass("show")) {
    $("div#dm, div#rule, div#icon, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").removeClass("show")
  }
     if ($("a#dm, a#rule, a#icon, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").hasClass("active")) {
    $("a#dm, a#icon, a#rule, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").removeClass("active")
  }
    $("div#marc").toggleClass("show");
  $("a#marc").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("a#dm").click(function(){
    event.preventDefault();
   if ($("div#marc, div#rule, div#icon, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").hasClass("show")) {
    $("div#marc, div#rule, div#icon, div#kith, div#tarot, div#ya, div#gender, div#pprod, div#thesis").removeClass("show")
  }
     if ($("a#marc, a#rule, a#icon, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").hasClass("active")) {
    $("a#marc, a#icon, a#rule, a#kith, a#tarot, a#ya, a#gender, a#pprod, a#thesis").removeClass("active")
  }
    $("div#dm").toggleClass("show");
  $("a#dm").toggleClass("active");
  $("div.exit").addClass("exit-show");
  });

$("div.exit").click(function(){
  event.preventDefault();
  if ($("div#dm, div#rule, div#marc, div#kith, div#icon, div#pprod, div#tarot, div#ya, div#gender, div#thesis").hasClass("show")) {
    $("div#dm, div#rule, div#marc, div#kith, div#icon, div#pprod, div#tarot, div#ya, div#gender, div#thesis").removeClass("show")
  }
     if ($("a#dm, a#rule, a#marc, a#kith, a#icon, a#pprod, a#tarot, a#ya, a#gender, a#thesis").hasClass("active")) {
    $("a#dm, a#marc, a#rule, a#kith, a#icon, a#pprod, a#tarot, a#ya, a#gender, a#thesis").removeClass("active")
  }
   $("div.exit").removeClass("exit-show");
})

// var randomSkill = function() {
//   var skills = ["archiving analog media", "translating Latin", "risograph printing", "crafting headpieces", "conference planning", "registering an LLC in Oregon", "doodling", "basic Italian", "knitting", "reading tarot", "developing 35mm film", "Chicago style formatting", "culture criticism", "personal styling", "photo retouching", "making gifs", "buying more books when I have books to read", "Vogueing", "building a mechanical keyboard", "making a great playlist", "slinging merch at Warped Tour", "knowing what FERPA means", "creating websites on Angelfire", "cooking mac & cheese",]
  
//   var randomizer = Math.floor(Math.random()*skills.length);
//   var skill = skills[randomizer]
  
//   document.getElementById("skillz").innerHTML = skill;
// }
// randomSkill();

var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  // Your Last.fm Username
  user: "audiohearts",
  // Your API key
  api_key: "3028792843b82ef4a9451ed7ec09ec4f",
  additional: "&format=json&limit=1"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted =
        recentTrack.name;

      var artistFormatted =
        recentTrack.artist["#text"];
      
      var albumFormatted =
          recentTrack.album["#text"];
      
//       var playingFormatted =
//           formatted + " by " + artistFormatted;
      
      $("#nowplaying")
        .html(artistFormatted);

    },
    error: function(resp) {
      $("#nowplaying").html(
        "nothing"
      );
    }
  });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);