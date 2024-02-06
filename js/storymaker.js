/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");

const story = document.querySelector("#story");

// Variables for pre-defined arrays
const nounsArray = ["lion", "cake", "computer"];
const verbsArray = ["love", "agree", "feel", "am"];
const adjectivesArray = ["attractive", "bald", "beautiful", "chubby"];
const nouns2Array = ["man", "woman", "teacher", "John", "Mary"];
const settingsArray = ["Ontario", "simco", "Toronto"];

// Variables for count to grab array elements
let noun1count = 0;
let verbcount = 0;
let adjectivecount = 0;
let noun2count = 0;
let settingcount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = nounsArray[noun1count];

    // if-else to change count setting
    noun1count = (noun1count + 1) % nounsArray.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbsArray[verbcount];
    verbcount = (verbcount + 1) % verbsArray.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectivesArray[adjectivecount];
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2Array[noun2count];
}

function setting_on_click() {
    choosenSetting.textContent = settingsArray[settingcount];
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent =
        nounsArray[noun1count] + " " +
        verbsArray[verbcount] + " " +
        adjectivesArray[adjectivecount] + " " +
        nouns2Array[noun2count] + " " +
        settingsArray[settingcount];
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    story.textContent =
        getRandomElement(nounsArray ) + " " +
        getRandomElement(verbsArray ) + " " +
        getRandomElement(adjectivesArray ) + " " +
        getRandomElement(nouns2Array ) + " " +
        getRandomElement(settingsArray );
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
