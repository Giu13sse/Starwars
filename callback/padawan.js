
function apprentice(name,planet,age,height,rank){
    let padawan= {
        name: name,
        planet: planet,
        age: age,
        height: height
    }
    rank(padawan)
}
apprentice('Kane','Krig',14,180,function(kid){
    if(kid.edad<15){
        console.log('The apprentice can begin to learn the force')
    }
    else{
        console.log('The apprentice shall keep on trainning with the light saber')
    }
})