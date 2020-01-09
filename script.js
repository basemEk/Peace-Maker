const textElement = document.getElementById('text');
const optionsButtonsElement = document.getElementById('option-button');
const imgElement = document.getElementById("img");
function startGame() {
    showTextNode(1)
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    
    textElement.innerText = textNode['text'];
    
    imgElement.setAttribute("src", textNode.imgPath)
    while (optionsButtonsElement.firstChild) {
        optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionsButtonsElement.appendChild(button)

    });

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
        unavoidable world war, your mission in this game is to find the peace
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
         order the forces to assassinate a general from the enemy camp, now
          the Russia and its allies planning to have their revenge.`
        , options: [
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
        order his forces to assassinate a general from your camp, now
         you have the choice either to revenge or to clam down`,
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
        text: "WW III started, GAME OVER!",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ],
        imgPath: "img/GmOver.jpeg"
    },
    {
        id: 5,
        text: "Your country will discuss if it wants to declare a War again the enemy camp or not",
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
        text: "Some forces from the army of USA, attack an airport for one of your allies, what you will do?"
        , options: [
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
        text: "Your country will discuss if it wants to declare a War again the enemy camp or not",
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
        text : "Your decision was to avoid the War, Congratulations you made the peace.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ],
        imgPath: "img/peace.png"
    }
]
startGame()

