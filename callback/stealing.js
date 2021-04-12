

function steal(idmap){
    if(idmap>0 && idmap<=10)
{
    let mensaje="You stole the plane number #"+idmap;
    despegar(null,message);

}
else{
    let error="HEY!!!!!! You haven't stolen any real plane";
    despegar(error);}
}

stealplane(5,function(error,messageok){
    if(error){
    console.log(error);
    console.log("You should keep on looking the real plane");
    }
    else{
        console.log(messageok);
        console.log("You have the plane.Great.Now you can take off");


    }
    
     
})