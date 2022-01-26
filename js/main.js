let btnRef=document.querySelectorAll('.button-option')
let poppup=document.querySelector('.poppup')
let message=document.getElementById('message')
let btnNewGame=document.getElementById('newGame')
let btnRestar=document.getElementById('restar')
//sequence of winner
let winStage=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// X is first
let XTurn=true
let count=0
//Function EndisabledBtn
const EndisabledBtn=()=>{
    btnRef.forEach((element)=>{
        element.innerText=''
        element.disabled=false
    })
    poppup.classList.add('hide')
}
//Function restar new game
btnRestar.addEventListener('click',()=>{
    count=0
    EndisabledBtn()
})
btnNewGame.addEventListener('click',()=>{
    count=0
    EndisabledBtn()
})
//Function disabledBtn
const disabledBtn=()=>{
    count=0
    poppup.classList.remove('hide')
}


//Function winner
const winFunction=(letter)=>{
  if(letter=='x'){
      message.innerHTML=`&#x1F389; <br> 'x' is Wins!`
  }else{
    message.innerHTML=`&#x1F389; <br> 'o' is Wins!`
  }
  disabledBtn()
}
//Function draw
const drawFunction=()=>{
    disabledBtn()
    message.innerHTML=`&#x1F60E;; <br> Draw`
    }
//Function for check position of winner
const winnerCheck=()=>{
    for(let i of winStage){
        let [element1,element2,element3]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ]
        if(element1!=''&&(element2!='')&&(element3!='')){
            if(element1==element2&& element2==element3){
                winFunction(element1)
            }
        }
    }
}
//display x/o
btnRef.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(XTurn){
            XTurn=false
            element.innerText='x'
            element.disabled=true
        }else{
            XTurn=true
            element.innerText='o'
            element.disabled=true
        }
        count+=1
        if(count==9){
         drawFunction()
        }
        winnerCheck(element)
    })
})
window.onload=EndisabledBtn