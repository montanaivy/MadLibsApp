"use strict";

// originalStory variable
//userInputs make an array

window.onload = () => {
    // Total questions used
    let questionTotal = 24;

    // Question Identifier (Which question are we at currently)
    let questionCounter = 0;

    // Test dynamic:
    let solicitation = `Please enter a`;
    let questionArray = [
        `${solicitation} friend's name`,
        `${solicitation} year ("2002", "2011" etc)`,
        `${solicitation} type of animal`,
        `${solicitation} verb (past tense)`,
        `${solicitation} pronoun`,
        `${solicitation} noun`,
        `${solicitation}n adjective`,
        `${solicitation} number`,
        `${solicitation} word with 4 letters`,
        `${solicitation} type of tool`,
        `${solicitation} verb (past tense)`,
        `${solicitation} number`,
        `${solicitation} name of a woman`,
        `${solicitation} title of a movie`,
        `${solicitation} noun`,
        `${solicitation} verb (past tense)`,
        `${solicitation} type of job`,
        `${solicitation} double digit number`,
        `${solicitation} name of a pet`,
        `${solicitation} month in the year`,
        `${solicitation} kind of fish`,
        `${solicitation} describing word`,
        `${solicitation} mother's name`,
        `${solicitation} verb (past tense)`,
        `${solicitation} type of greeting`,
    ];

    let userInputs = [];
    for (let i = questionTotal; i >= 0; i--) {
        
        console.log(
            questionArray[questionCounter] + `... (${questionTotal} questions left)`
        );
        userInputs.push(
            prompt(
                questionArray[questionCounter] + `... (${questionTotal} questions left)`
            )
        );
        console.log(userInputs);
        questionCounter++;
        // Current questions variable. This should increase
        questionTotal--;
        // questionsLeft = `; (${questions} questions left)`;
        // This questions variable should decrease, and match the next "i";
    }

    // The User's daily dose of adventure
    let originalStory = `<h2>For ${userInputs[0]} in ${userInputs[1]}, life was full of fun and exciting adventures. Just the other day, ${userInputs[0]} encountered a ${userInputs[2]} while ${userInputs[3]} home from work. Immediately, ${userInputs[4]} was startled and tripped on a ${userInputs[5]}. This ${userInputs[2]} had ${userInputs[6]} teeth and at least ${userInputs[7]} eyes that were a ${userInputs[8]} colour. A ${userInputs[9]} was seen and immediately grabbed for protection but while ${userInputs[10]} closer, an unknown woman with a badge reading ${userInputs[12]} stole the ${userInputs[9]} and disappeared, all within just ${userInputs[11]} seconds.</h2>
      <h2>After the shock wore off, ${userInputs[0]} laughed and realised if anyone heard this story, they would think it was the plot of ${userInputs[13]}. Just when ${userInputs[0]} was having a break, a ${userInputs[14]} ${userInputs[15]} straight past. With all this crazy stuff going on, maybe a career in ${userInputs[15]} would be appropriate. It had been at least ${userInputs[16]} minutes by now and ${userInputs[0]} had to go home to feed ${userInputs[17]}.${userInputs[17]} was grumpy because during the month of ${userInputs[18]}, the only food available was fish called ${userInputs[19]}.</h2>
      <h2And just as ${userInputs[0]} was done feeding ${userInputs[17]}, ${userInputs[4]} heard ${userInputs[21]} calling in the distance. As ${userInputs[0]} grew closer to the noise, it became a cluster of ${userInputs[20]} words. ${userInputs[4]} began ${userInputs[22]} closer and closer before everything went black. ${userInputs[0]}'s eyes snapped open and ${userInputs[4]} lunged forward only to hear a faint ${userInputs[23]} being shouted by ${userInputs[21]}. It appeared clear that ${userInputs[0]} had just been dreaming the whole time! Maybe life's biggest adventures happen whilst we sleep.</h2>`;
    console.log(originalStory);

    // Ending of userInputs
    alert(
        "We're all done! Ready to hear your extreme, thrill-packed, action adventure story???"
    );

    // Output
    console.log(originalStory);
    document.write(originalStory);
};

// In case of error/ de-bugging:
/* let userInputs = [
    "Chloe"
    "2011"
    "tiger"
    "running"
    "she"
    "stick"
    "enormous"
    "7"
    "blue"
    "chainsaw"
    "walking"
    "6"
    "Sarah"
    "Inception"
    "book"
    "sprinting"
    "secret agent"
    "25"
    "shouting"
    "yelling"
    "Snuggles"
    "July"
    "Trout"
    "cryptic"
    "Maree"
    "screaming"
    "Good Morning"
]; */




    

