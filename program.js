
let question = 
    { quiz: [{
        prompt: "Hvor gammel skal man være for at betragtes som voksen i Danmark? \n (a) 16 \n (b) 18 \n (c) 20",
        answer: "18"
    },
    {
        prompt: "Hvor gammel er en dansk kvinde i gennemsnit, når hun føder sit første barn? \n (a) 29 \n (b) 31 \n (c) 33",
        answer: "29"
    },
    {
        prompt: "Hvornår i livet virker de fleste af kroppens funktioner bedst? \n (a) 19 \n (b) 20 \n (c) 21",
        answer: "20"
    },
    {
        prompt: "Hvornår er det tidligst muligt at gå på folkepension i Danmark? \n (a) 63 \n (b) 64 \n (c) 65",
        answer: "65"
    },
    {
        prompt: "Hvor gammel skal man være, før man kan tage kørekort til hhv. stor bil og motorcykel? \n (a) 18 \n (b) 21 \n (c) 25",
        answer: "21"
    },
    {
        prompt: " Hvor mange muskler i ansigtet tages i brug, når man kysser? \n (a) 25 \n (b) 27 \n (c) 30",
        answer: "30"
   
    }]};

    
function Quiz(){
        let score = 0;

        for(let i = 0; i < question.quiz.length; i++){
             const response = window.prompt(question.quiz[i].prompt);
            if(response == question.quiz[i].answer) {
                alert("dit svar er rigtig!");
                score++;
            } else {
                alert(`dit svar er forkert men svar er: ${question.quiz[i].answer}`);
            }
        }
    let countPercentage = (score * 100) / question.quiz.length;

    alert("din score er: \n'" + score + " / " + question.quiz.length + " ' rigtigt ('" +  countPercentage.toFixed(2) + " '%)");
}

Quiz();
