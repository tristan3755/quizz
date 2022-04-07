let quizz=[{

question:"Quelle est la capitale de la France ?  ",
rep:["Paris","Moscou","Marseille"]

},
{
question:" Comment surnomme t-on LouisIX ? ",
rep:["Louis le gros","Le roi soleil","Saint-Louis"]
}, 
{
question:"Php est un langage back-end ou front-End ? ",
rep:["Back-end","Front-end","Les deux"]

},
{   
question:"Comment déclare t-on une variable en javascript? ",
rep:["Let","Var","Les deux"]
},
]

let compteurQuestion=1
// console.log(quizz[0].rep[0])

let arrayReponses=[]
let point=0
let question1=document.querySelector('.question1')
let question2=document.querySelector('.question2')
let question3=document.querySelector('.question3')
let question4=document.querySelector('.question4')
let resultat=document.querySelector('.resultat')
/*question1*/

let questionCapitale=document.createElement("p")
questionCapitale.classList="questions"
questionCapitale.innerHTML=quizz[0].question
question1.appendChild(questionCapitale)
incrementQuestion()

for(let i in quizz[0].rep){
    console.log(quizz[0].rep[i])
    let repCapital=document.createElement('p')
    repCapital.innerHTML=quizz[0].rep[i]
    question1.appendChild(repCapital)
    repCapital.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    if(e.target.innerHTML=='Paris'){
        point ++
    }
    arrayReponses.push(e.target.innerHTML)
    question1.style.display="none"
    question2.style.display="flex"
    compteurQuestion ++
    incrementQuestion()
    console.log(point)
    console.log(arrayReponses)
    })
    repCapital.classList='reponseCapitale'
}
/*question1*/


/*question2*/

let questionRoi=document.createElement("p")
questionRoi.classList="questions"
questionRoi.innerHTML=quizz[1].question
question2.appendChild(questionRoi)


for(let i in quizz[1].rep){
    console.log(quizz[1].rep[i])
    let repRoi=document.createElement('p')
    repRoi.innerHTML=quizz[1].rep[i]
    question2.appendChild(repRoi)
    repRoi.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    if(e.target.innerHTML=='Saint-Louis'){
        point ++
    }
    arrayReponses.push(e.target.innerHTML)
    question2.style.display='none'
    question3.style.display="flex"
    compteurQuestion ++
    incrementQuestion()
    console.log(point)
    console.log(arrayReponses)
    
    })
    repRoi.classList='reponseCapitale'
}
/*question2*/

/*question3*/

let questionPhp=document.createElement("p")
questionPhp.classList="questions"
questionPhp.innerHTML=quizz[2].question
question3.appendChild(questionPhp)


for(let i in quizz[2].rep){
    console.log(quizz[2].rep[i])
    let questionPhp=document.createElement('p')
    questionPhp.innerHTML=quizz[2].rep[i]
    question3.appendChild(questionPhp)
    questionPhp.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    arrayReponses.push(e.target.innerHTML)
    question3.style.display="none"
    question4.style.display='flex'
    if(e.target.innerHTML=='Back-end'){
        point ++
    }
    compteurQuestion ++
    incrementQuestion()
    console.log(arrayReponses)
    console.log(point)
    })
    
    questionPhp.classList='reponseCapitale'
}
/*question3*/

/*question4*/

let questionVar=document.createElement("p")
questionVar.classList="questions"
questionVar.innerHTML=quizz[3].question
question4.appendChild(questionVar)


for(let i in quizz[3].rep){
    console.log(quizz[3].rep[i])
    let questionVar=document.createElement('p')
    questionVar.innerHTML=quizz[3].rep[i]
    question4.appendChild(questionVar)
    questionVar.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
    arrayReponses.push(e.target.innerHTML)
    question4.style.display="none"
    if(e.target.innerHTML=='Les deux'){
        point ++
    }
    result()
    console.log(arrayReponses)
    console.log(point)
    })
    
    questionVar.classList='reponseCapitale'
}
/*question4*/

function result(){
    let paragraphResultat=document.createElement('p')
    let repCandidats=document.createElement('p')
    let repAttendues=document.createElement('p')
    paragraphResultat.classList="repStyle"
    repCandidats.classList="repStyle"
    repAttendues.classList="repStyle"
    repCandidats.innerHTML='Vos réponses : ' + arrayReponses[0] + ' , ' + arrayReponses[1] + ' , ' + arrayReponses[2] + ' , ' + arrayReponses[3]
    repAttendues.innerHTML='Bonnes réponses: Paris ,Saint-Louis ,Back-End ,Les deux'
    paragraphResultat.innerHTML='Votre score est de '+ point + ' bonnes réponses'
    resultat.appendChild(paragraphResultat)
    resultat.appendChild(repAttendues)
    resultat.appendChild(repCandidats)
    
    resultat.style.display="flex"
}


for(let i in quizz){
    // console.log(quizz[i])
}
function incrementQuestion(){

    let lenghtQuizz=quizz.length
    let compteur=document.querySelector('.compteur')
    compteur.innerHTML= compteurQuestion+'/'+lenghtQuizz

}
/*compteur*/

/*start*/

let start=document.querySelector('.start')
let startContainer=document.querySelector('.startContainer')
start.addEventListener('click',()=>{
    startContainer.classList.add("animationfade")
})
/*restart*/
let restart=document.querySelector('.restart')
restart.addEventListener('click',()=>{
    location.reload()
})
////////////////////////////////////optimisé////////////////////////////////////////////////////////////

