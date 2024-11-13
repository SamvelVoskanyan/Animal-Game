
    let animals = [
        {
            id: 1,
            name: "Bee",
            thumbImg: "bee.png",
            sound: "bee.mp3"
        },
        {
            id: 2,
            name: "Getadzi",
            thumbImg: "getadzi.png",
            sound: "getadzi.mp3"
        },
        {
            id: 3,
            name: "Begemontik",
            thumbImg: "begemontik.png",
            sound: "begemontik.mp3"
        },
        {
            id: 4,
            name: "Bool",
            thumbImg: "bool.png",
            sound: "bool.mp3"
        },
        {
            id: 5,
            name: "Butfl",
            thumbImg: "butfl.png",
            sound: "butfl.mp3"
        },
        {
            id: 6,
            name: "Cat",
            thumbImg: "cat.png",
            sound: "cat.mp3"
        },
        {
            id: 7,
            name: "Cheep",
            thumbImg: "cheep.png",
            sound: "cheep.mp3"
        },
        {
            id: 8,
            name: "Chiken",
            thumbImg: "chiken.png",
            sound: "chiken.mp3"
        },
        {
            id: 9,
            name: "Chxchik",
            thumbImg: "chxchik.png",
            sound: "chxchik.mp3"
        },
        {
            id: 10,
            name: "Cocodalos",
            thumbImg: "cocodalos.png",
            sound: "cocodalos.mp3"
        },
        {
            id: 11,
            name: "Defin",
            thumbImg: "defin.png",
            sound: "defin.mp3"
        },
        {
            id: 12,
            name: "Dog",
            thumbImg: "dog.png",
            sound: "dog.mp3"
        },
        {
            id: 13,
            name: "Elefent",
            thumbImg: "elefent.png",
            sound: "elefent.mp3"
        },
        {
            id: 14,
            name: "Frogy",
            thumbImg: "frogy.png",
            sound: "frogy.mp3"
        },
        {
            id: 15,
            name: "Hosrs",
            thumbImg: "hosrs.png",
            sound: "hosrs.mp3"
        },
        {
            id: 16,
            name: "Kenguru",
            thumbImg: "kenguru.png",
            sound: "kenguru.mp3"
        },
        {
            id: 17,
            name: "Kow",
            thumbImg: "kow.png",
            sound: "kow.mp3"
        },
        {
            id: 18,
            name: "Kria",
            thumbImg: "kria.png",
            sound: "kria.mp3"
        },
        {
            id: 19,
            name: "Lion",
            thumbImg: "lion.png",
            sound: "lion.mp3"
        },
        {
            id: 20,
            name: "Monkey",
            thumbImg: "monkey.png",
            sound: "monkey.mp3"
        },
        {
            id: 21,
            name: "Mouse",
            thumbImg: "mouse.png",
            sound: "mouse.mp3"
        },
        {
            id: 22,
            name: "Panda",
            thumbImg: "panda.png",
            sound: "panda.mp3"
        },
        {
            id: 23,
            name: "Pig",
            thumbImg: "pig.png",
            sound: "pig.mp3"
        },
        {
            id: 24,
            name: "Rebbit",
            thumbImg: "rebbit.png",
            sound: "rebbit.mp3"
        },
        {
            id: 25,
            name: "Shark",
            thumbImg: "shark.png",
            sound: "shark.mp3"
        },
        {
            id: 26,
            name: "Snik",
            thumbImg: "snik.png",
            sound: "snik.mp3"
        },
        {
            id: 27,
            name: "Tiger",
            thumbImg: "tiger.png",
            sound: "tiger.mp3"
        },
        {
            id: 28,
            name: "Web",
            thumbImg: "web.png",
            sound: "web.mp3"
        },
        {
            id: 29,
            name: "Zebra",
            thumbImg: "zeber.png",
            sound: "zeber.mp3"
        },
        {
            id: 30,
            name: "Pilgrimage",
            thumbImg: "yndzuxt.png",
            sound: "yndzuxt.mp3"
        }
    ];

    for (let i = 0; i <40000 ; i++) {
        console.log('hi')
    }

const animalList = document.querySelector('.game-board');
    let myStart=document.querySelector('.myStart')
    let game_over=document.querySelector('.game-over');

 function MakeAnimals(){
     animals=animals.sort(()=>Math.random()-0.5)
     animalList.innerHTML = ``;
     animals.forEach(animal => {
         // Ստեղծում ենք նոր div տարր յուրաքանչյուր կենդանու համար
         let animalDiv = document.createElement('div');
         animalDiv.classList.add('animal-item');
         animalDiv.setAttribute('data-id', animal.id);

         // Պատկերը
         let img = document.createElement('img');
         img.src = 'animals/'+animal.thumbImg;
         img.alt = animal.name;

         // Անունը
         let name = document.createElement('h3');
         name.textContent = animal.name;

         // Ավելացնում ենք պատկերը և անունը div տարրում
         animalDiv.appendChild(img);
         animalDiv.appendChild(name);

         // Ավելացնում ենք կենդանու տարրը ցուցակի մեջ
         animalList.appendChild(animalDiv);

         animalDiv.onclick=function (){
             let id=+animalDiv.getAttribute('data-id');
             if(chooseAnswer.id===id){
                 scoreUpdate()
                 RandomAnswer()
             }
         }

     });
 }
    let chooseAnswer
    let score=0

    function scoreUpdate(val){
     let scoreteg=document.querySelector('.score')
      if(val===0){
          score=0
          scoreteg.innerHTML=score;
      }else {
          score+=10
          scoreteg.innerHTML=score;
          if(score===30){
              game_over.classList.remove('d-none');
              let over_score=document.querySelector('.over-score');
              over_score.innerHTML=score;
          }
      }
    }

    myStart.onclick=function (){

        scoreUpdate(0)
        game_over.classList.add('d-none');
        RandomAnswer()
        MakeAnimals()
    }

 function RandomAnswer(){
      chooseAnswer=animals[Math.floor(Math.random() * animals.length)];
     let currentImage=document.querySelector('.current-image');
     let currentTitle=document.querySelector('.current-title');
     currentImage.src=`./animals/${chooseAnswer.thumbImg}`;
     currentTitle.innerHTML=chooseAnswer.name;
 }

document.body.onload=function (){
     let loading=document.querySelector('.loading');
     loading.classList.add('d-none');
    MakeAnimals()
    RandomAnswer()
}
