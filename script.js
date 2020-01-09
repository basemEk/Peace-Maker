const textElement = document.getElementById('text');
const optionsButtonsElement = document.getElementById('option-button');
const imgElement = document.getElementById("img");

function startGame() {
    showTextNode(9)
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode['text'];
    imgElement.setAttribute("src", textNode.imgPath)
    while(optionsButtonsElement.firstChild) {
        optionsButtonsElement.removeChild(optionsButtonsElement.firstChild);
    }
    while(document.getElementById("escalation").firstChild){
        document.getElementById("escalation").removeChild(document.getElementById("escalation").firstChild);
    }
    const warEscalation = document.createElement('div');
    warEscalation.innerText = textNode.warEscalation;
    document.getElementById("escalation").appendChild(warEscalation);
    textNode.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionsButtonsElement.appendChild(button)

    });
    setTimeout(responsiveVoice.speak(document.getElementById("text").textContent,"UK English Male"), 201);
    if(textNodeIndex == 5 || textNodeIndex == 7){
        document.querySelector('button').addEventListener("click" , () =>{
            let indexNumber = textNodeIndex-1;
            let rand = Math.random()
            if(rand > 0.5){
                textNodes[indexNumber].options["nextText"] = 4;
                showTextNode(4)
            }
            
            else {
                textNodes[indexNumber].options["nextText"]= 8;
                showTextNode(8);
            }
        });
    }
}

function selectOption(option) {
    if (option.nextText < 0)
        return startGame();
    showTextNode(option.nextText)
}

const textNodes = [
    {
        id: 1,
        text: `We are in 2020 finally, but the world is going mad and all signs refer to 
        unavoidable world war, your mission in this game is to find peace
         and prevent the near war. You have to join one of the Camps`,
        options: [
            {
                text: "USA camp",
                nextText: 2
            }
            , {
                text: " Russia camp",
                nextText: 3
            }
        ],
        imgPath: "img/intro.jpeg"
    },
    {
        id: 2,
        text: `you are now a military leader in the American Army, Donald trump
         ordered the forces to assassinate a general from the enemy camp, now
          Russia and its allies planning to have their revenge.`,
        warEscalation:"War Escalation = 2", 
        options: [
            {
                text: "War deceleration"
                , nextText: 4
            },
            {
                text: "voting with your allies"
                , nextText: 5
            }
        ]
        , imgPath: "img/trump.jpeg"
    },
    {
        id: 3,
        text: `you are now a military leader in the Russian Army, Donald trump
        ordered his forces to assassinate a general from your camp, now
         you have the choice either to attack or to calm down`,
         warEscalation:"War Escalation = 2",
        options: [
            {
                text: "Attack",
                nextText: 4
            },
            {
                text: "Calm Down"
                , nextText: 6
            }
        ],
        imgPath: "img/putine.jpeg"
    },
    {
        id: 4,
        text: "You decided to go to war, World War 3 started, GAME OVER!",
        warEscalation:"War Escalation = It's Over 9000 !!!",
        options: [
            {
                text: "Restart",
                nextText: 1
            }
        ],
        imgPath: "img/GmOver.jpeg"
    },
    {
        id: 5,
        text: "Your country will discuss if it wants to declare War against the enemy camp or not",
        warEscalation:"War Escalation = 1",
        options: [
            {
                text: "Take decision",
                nextText:null
            }
        ],
        imgPath: "img/usaAllies.jpg"
    },
    {
        id: 6,
        text: "Some forces from the army of USA, attacks an airport of one of your allies, what will you do?"
        , 
        warEscalation:" War Escalation = 5",
        options: [
            {
                text: "Attack",
                nextText: 4
            }, {
                text: "voting with your allies",
                nextText: 7
            }

        ],
        imgPath: "img/trumpLaugh.jpeg"
    },
    {
        id: 7,
        text: "Your country will discuss if it wants to declare a War against the enemy camp or not",
        warEscalation:"War Escalation = 1",
        options: [
            {
                text: "Take decision",
                nextText: null
            }
        ],
        imgPath: "img/russiaAllies.jpg"
    },
    {
        id : 8,
        text : "Your decision was to avoid the War, Congratulations you made peace.",
        warEscalation:"War Escalation = 0",
        options: [
            {
                text: "Restart",
                nextText: 1
            }
        ],
        imgPath: "img/peace.png"
    },
    {
        id : 9,
        text : "The best Interactive Story in the market, Peace Maker",
        options: [
            {
                text: "Start Game",
                nextText: 1,
            }
        ],
        imgPath: "img/begin.png"
    }
]
startGame()

