
var timeCode = ["00:01", "00:04", "00:07", "00:11", "00:13", "00:17", "00:22", "00:26", "00:32", "00:34", "00:39",
"00:42", "00:46", "00:49", "00:53", "00:57"];

var timeSec = [ "1", "4", "7", "11", "13", "17", "22", "26", "32", "34", "39", "42", "46", "49", "53", "57"];

var spanCode = ["#par-1-1", "#par-1-2", "#par-1-3", "#par-1-4", "#par-2-1", "#par-2-2", "#par-2-3", "#par-2-4", "#par-2-5", "#par-2-6",
"#par-2-7", "#par-3-1", "#par-3-2", "#par-3-3", "#par-3-4", "#par-3-5"];

setInterval(function(){
  var vid = $('.mejs__currenttime').text();
  for (var i = 0; i < timeCode.length; i++){
    if (vid == timeCode[i]){
      $("span").css({"color": "black"});
      $(".mejs__duration").css({"color": "#f09b2b"});
      $(".mejs__currenttime").css({"color": "#f09b2b"});
      $(spanCode[i]).css({"color": "orange"});
    }
  }
}, 1000);

$('#video_player').mediaelementplayer({
  pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
  shimScriptAccess: 'always',
  features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
  startLanguage: 'en',
  videoWidth: 320,
  videoHeight: 180,
  stretching: "responsive",
  videoVolume: "vertical",
  alwaysShowControls: true,
  success: function(player) {
    $("span").click(function() {
      var ident = String(event.target.id);
      var conct = "#" + ident;
      var indx = spanCode.indexOf(conct);
      var vid2 = $('.mejs__currenttime').text();
      var impo = timeSec[indx];
      if (timeCode[indx] != vid2){
        player.currentTime = impo;
      }});
}});
