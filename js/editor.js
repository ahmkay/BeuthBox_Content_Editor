var countBauchbinde = 0;
var countAdvert = 0;
var countLink = 0;
var countNote = 0;

function saveBauchbinde(){
    $('#bauchbindeModal').modal('toggle');
    var name = document.getElementById("bauchbindeName").value;
    if(name){
        countBauchbinde++;
        $( "<h4>" + countBauchbinde + ": " + name + "</h4>" ).insertBefore( "#placeBauchbinde" );
    }
}

function saveAdvert(){
    $('#advertModal').modal('toggle');
    var name = document.getElementById("advertName").value;
    if(name){
        countAdvert++;
        $( "<h4>" + countAdvert + ": " + name + "</h4>" ).insertBefore( "#placeBauchbindeAdvert" );
    }
}

function saveLink(){
    $('#linkModal').modal('toggle');
    var text = document.getElementById("linkText").value;
    if(text){
        countLink++;
        $( "<h4>" + countLink + ": " + text + "</h4>" ).insertBefore( "#placeLink" );
    }
}

function saveNote(){
    $('#noteModal').modal('toggle');
    var name = document.getElementById("noteText").value;
    if(name){
        countNote++;
        $( "<h4>" + countNote + ": " + name + "</h4>" ).insertBefore( "#placeNote" );
    }
}