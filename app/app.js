//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  
    var artistName = document.getElementById('artist').value;
    var element = document.getElementById('song-list');
    var elemCount = document.getElementById('song-count');
    
    element.innerHTML='';
    
    elemCount.innerHTML = "Showing " + songList.length + " results for <strong>" + artistName + "</strong>";
    
    for (var i = 0; i < songList.length; i++) {
    var currSong = songList[i];
    element.innerHTML +='<li class="list-group-item"><div class="row">'
    + '<div class="col-xs-2"><a target="_blank" href ="' + currSong.collectionUrl + '"><img src="' + currSong.albumArt + '"alt="album"></a></div>'
    + '<div class="col-xs-4">' + 'Title: '  + currSong.title + '<br>' + "Collection: " + currSong.collection + '</div>'
    + '<div class="col-xs-6" style= "margin-top: 15px"> <audio controls class="center-block"><source src="' + currSong.preview + '"type="audio/ogg"></audio> </div></div> </li>';
    }
    
}