var favs=Array.from(document.querySelectorAll('.fa-heart'));
var deleteBtns=Array.from(document.querySelectorAll('.fa-trash'));
var plusBtns=Array.from(document.querySelectorAll(".card"));
var plusBtns=Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns=Array.from(document.querySelectorAll(".fa-minus-circle"));


/*LIke*/
for (let fav of favs)
(
    fav.addEventListener("click",
    function(){
        if (fav.style.color=="black"){
            fav.style.color="red"
        } else {
            fav.style.color="black"
        }
    }
    )
)

/*delete*/
for(let i in deleteBtns) {
    deletBtns [i].addEventListener("click",
    function(){
        cards[i].remove(),
        total()
    })
}



/*plus*/
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click",
    function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
}

/*minus*/
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click",
    function(){
         minusBtn.previousElementsSibling.innerHTML > 0 ?
         minusBtn.previousElementSibling.innerHTML-- :
         null,
         total()
    } )
}
function total(){
    let qte=Array.from(document.querySelectorAll(".qute"));
    let price=Array.from(document.querySelectorAll(".unitt-price"));
    let s=0
    for (let i=0 ; i<price.length ;i++
    )
        s=s+price[i].innerHTML*qte[i].innerHTML ;
    }
    document.getElementById("total-price").innerHTML= s
 