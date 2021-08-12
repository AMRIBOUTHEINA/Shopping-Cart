let btnsPlus=document.getElementsByClassName("butplus")
for(let i=0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(e){
        var cible=e.target
        let parent=cible.parentElement
        let qteElement=parent.getElementsByClassName('input-qte')[0]
        qteElement.value= parseInt(qteElement.value)+1 
        var unprix=this.parentElement.parentElement.querySelector('.card-body').querySelector('.prix').innerHTML.replace('dt','')
        var totalprix=document.getElementById('carte').innerHTML.replace('dt','')
        var newtotal=parseInt(totalprix)+parseInt(unprix)
        document.getElementById('carte').innerHTML=newtotal+'dt'
console.log(unprix)
    })
}

let btnsmoins=document.getElementsByClassName("butmoins")
for(let i=0;i<btnsmoins.length;i++){
    btnsmoins[i].addEventListener('click',function(e){
        var butt=e.target
        let parent=butt.parentElement
        
        let qteElement=parent.getElementsByClassName('input-qte')[0]
        if( qteElement.value>0){
        qteElement.value= parseInt(qteElement.value)-1 
        var unprix=this.parentElement.parentElement.querySelector('.card-body').querySelector('.prix').innerHTML.replace('dt','')
        var totalprix=document.getElementById('carte').innerHTML.replace('dt','')
        var newtotal=parseInt(totalprix)-parseInt(unprix)
        document.getElementById('carte').innerHTML=newtotal+'dt'
       
    }
      
    })
}

let btnreset=document.getElementsByClassName("butreset")
for(let i=0;i<btnreset.length;i++){
    btnreset[i].addEventListener('click',function(e){
        var cible=e.target
        let parent=cible.parentElement
        let qteElement=parent.getElementsByClassName('input-qte')[0]
        var unprix=this.parentElement.parentElement.querySelector('.card-body').querySelector('.prix').innerHTML.replace('dt','')
        var totalprix=document.getElementById('carte').innerHTML.replace('dt','')
        var newtotal=parseInt(totalprix)-(parseInt(unprix)*parseInt(qteElement.value) )
        document.getElementById('carte').innerHTML=newtotal+'dt'
        qteElement.value=0
        var product = parent.parentElement
        product.classList.add('supprimer')
        console.log(product.classList)
    })
}


var heart=document.querySelectorAll('.fa-heart')
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',function(e){
   this.classList.toggle('changecolor')
    })
}
