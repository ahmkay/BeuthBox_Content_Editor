var countBauchbinde = 0;
var countAdvert = 0;

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



