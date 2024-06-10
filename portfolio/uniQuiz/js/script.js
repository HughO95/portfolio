function getanswer(theanswer) {
    return (theanswer - 1) * 3 + 1;
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}


// Global variables
var quiz = new Array(); //quiz questions
var chosen = new Array();
var position = new Array();
var t = 0;
var low = 1;
var high = 15;
var q1 = 0;

quiz[1] = "Who is the Lead singer of Black Sabbath?"
quiz[2] = "Name The four original members of Black Sabbath"
quiz[3] = "Where Are Black Sabbath from?"
quiz[4] = "What was Iron Maiden’s first album called?"
quiz[5] = "What year did Iron Maiden Form?"
quiz[6] = "Iron Maiden’s Lead singer Bruce Dickinson is also:"
quiz[7] = "Motorhead’s well known song is:"
quiz[8] = "Who was Motorhead’s lead singer and Bass Guitarist until his death in December 2015?"
quiz[9] = "Motorhead’s Guitarist Phil Campbell is from where?"
quiz[10] = "What is Alice Cooper’s birth name?"
quiz[11] = "What is the most popular Mötley Crüe song?"
quiz[12] = "Name the current line-up of Metallica"
quiz[13] = "What is the name of the rock night club located at 8901 Sunset Boulevard on the Sunset Strip, L.A?"
quiz[14] = "When Dave Mustaine got kicked out of Metallica he formed which band?"
quiz[15] = "Kerry King is the Guitarist for which band?"

correctAns = new Array(); //correct answer list
correctAns[1] = "Ozzy Osbourne"
correctAns[2] = "John Osbourne,Anthony Iommi, Terence Butler, William Ward"
correctAns[3] = "Birmingham"
correctAns[4] = "Iron Maiden"
correctAns[5] = "1975"
correctAns[6] = "A Pilot"
correctAns[7] = "Ace of Spades"
correctAns[8] = "Lemmy"
correctAns[9] = "Pontypridd"
correctAns[10] = "Vincent Damon Furnier"
correctAns[11] = "Dr. Feelgood"
correctAns[12] = "James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo"
correctAns[13] = "Whisky a Go-Go"
correctAns[14] = "Megadeth"
correctAns[15] = "Slayer"

ans = new Array(); //other answer options
ans[1] = "Ronnie James Dio"
ans[2] = "Paul Di'Anno"
ans[3] = "Tony Iommi" // 1,2,3 for Q1
ans[4] = "Steven Butler, John Iommi, James Hetfield, Gareth Edwards"
ans[5] = "Ozzy Osbourne, Bill Iommi, Geezer Ward, Tony Butler"
ans[6] = "John Ward, Bill Iommi, Terry Butler, Ozzy Osbourne" //4,5,6 for Q2
ans[7] = "Los Angeles"
ans[8] = "New York"
ans[9] = "London" //7,8,9 for Q3
ans[10] = "The Number of the Beast"
ans[11] = "Killers"
ans[12] = "Trooper" // 10,11,12 for Q4
ans[13] = "1973"
ans[14] = "1977"
ans[15] = "1980" //13,14,15 for Q5
ans[16] = "A Doctor"
ans[17] = "A Vet"
ans[18] = "A Lawyer" //16,17,18 for Q6
ans[19] = "Aces High"
ans[20] = "Diamond Ace"
ans[21] = "Ace of Angels" // 19,20,21 for Q7
ans[22] = "Ozzy Osbourne"
ans[23] = "Ronnie James Dio"
ans[24] = "Alice Cooper" //22,23,24 for Q8
ans[25] = "Swansea"
ans[26] = "Cardiff"
ans[27] = "Anglesey" //25,26,27 for Q9
ans[28] = "Alice Cooper"
ans[29] = "David Vincent Furnier"
ans[30] = "Andrew Vincent Furnace" //28,29,30 for Q10
ans[31] = "Girls,Girls, Girls"
ans[32] = "Wild Side"
ans[33] = "Kickstart My Heart" //31,32,33 for Q11
ans[34] = "James Hetfield, Lars Ulrich, Dave Mustaine, Cliff Burton"
ans[35] = "James Hetfield, Lars Ulrich, Kirk Hammett, Cliff Burton"
ans[36] = "James Hetfield, Lars Ulrich, Kirk Hammett, Jason Newstead" //34, 35,36 for Q12
ans[37] = "The Rainbow"
ans[38] = "Roxy Theatre"
ans[39] = "Tequi-La-La" //37,38,39 for Q13
ans[40] = "Slayer"
ans[41] = "Van Halen"
ans[42] = "Guns n'Roses" //40,41,42 for Q14
ans[43] = "Def Leppard"
ans[44] = "Mötley Crüe"
ans[45] = "Judas Priest" //43,44,45 for Q15


function quizGenerate() {


    var q1 = document.getElementById("quiz1"); // Define q1 here
    var ans1 = document.getElementById("ans1");

    if (!q1) {
        console.error("Element with id 'quiz1' not found.");
        return;
    } else {
        q1.innerHTML = quiz[questionIndex]; // Assign the question text
    }
}




// Randomly select a question
const questionIndex = Math.floor(Math.random() * high) + low;
q1.innerHTML = quiz[questionIndex];
chosen[t] = questionIndex;
t++;
const stpoint = getanswer(questionIndex);

// Prepare answers array
const answers = [
    correctAns[questionIndex],
    ans[stpoint],
    ans[stpoint + 1],
    ans[stpoint + 2]
];

// Shuffle answer positions
const shuffledAnswers = shuffleArray(answers);

// Display shuffled answers
for (let i = 0; i < shuffledAnswers.length; i++) {
    const answerContainer = document.getElementById(`ans${i + 1}`);
    console.log(`Checking answer container #ans${i + 1}:`, answerContainer);
    const answerElement = answerContainer ? answerContainer.querySelector('.answer-text') : null;
    if (answerElement) {
        answerElement.textContent = shuffledAnswers[i];
    } else {
        console.error(`Answer text element for #ans${i + 1} not found`);
    }
}

// Assuming correctAns is the index of the correct answer in shuffledAnswers
for (let i = 0; i < shuffledAnswers.length; i++) {
    const answerValue = (shuffledAnswers[i] === correctAns[questionIndex]) ? "correct" : "incorrect";
    const answerElement = document.getElementById(`ans${i + 1}`);
    answerElement.innerHTML = `<label><input type='radio' name='quizAnswer' value='${answerValue}'> ${shuffledAnswers[i]}</label>`;
}

function checkAnswer() {
    const answers = document.querySelectorAll('input[name="quizAnswer"]:checked');
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === "correct") {
            score++;
        }
    });

    document.getElementById("scoreValue").textContent = score;
    document.getElementById("scoreDisplay").style.display = 'block';

    return false;
}
