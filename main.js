let quote = document.querySelector("#quote")
let char = document.querySelector("#char")
const image = document.querySelector("img")
let bee = document.querySelector("#bee")

const quotes = [
    {'char': 'x', 
     'quote': 'xx'
    },
    {'char': 'Ken', 
     'quote': 'When will this nightmare end?!'
    },
    {'char': 'Barry B. Benson', 
     'quote': 'How about a suicide pact?'
    },
    {'char': 'Ken', 
     'quote': 'For your information, I prefer sugar-free, artificial sweeteners MADE BY MAN! I know has an aftertaste! I like it!'
    },
    {'char': 'Layton T. Montgomery', 
     'quote': 'Will some angel of mercy come crawl to suck the poison from my heaving buttocks?'
    },
    {'char': 'Vanessa', 
     'quote': 'It is very hard to concentrate with that panicky tone in your voice.'
    },
    {'char': 'Grocery Worker 2', 
     'quote': 'The bee is here. I sense it.'
    },
    {'char': 'Vanessa', 
     'quote': 'Ken, I showed Barry your resume and he agrees with me that eating with chopsticks is not really a special skill.'
    },
    {'char': 'Bee Keeper 1', 
     'quote': 'They make the honey, and we take the MONEY. Heh heh heh!!'
    },
    {'char': 'Adam Flayman', 
     'quote': "That's so stingin' stripey!"
    },
    {'char': 'Barry B. Benson', 
     'quote': "Larry, bees have never afraid to change the world. I mean, what about Bee Columbus, Bee Ghandi, Bee-Jesus?"
    },
];

function getquote(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    quote.textContent = `\"${quotes[random].quote}\"`;
    char.textContent = `-${quotes[random].char}`;
}

function getimg(){
    image.style.display='block';
    document.body.appendChild(image);
    bee.textContent = `bee`
}

function getintro(){
    intro.textContent = `“According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.”`
}

document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
