import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Hemanshu",
    lastName: "Pandey",
    initials: "HP", // the example uses first and last, but feel free to use three or more if you like.
    position: "AN ORDINARY HOMOSAPIEN",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {


            
            emoji: '🧊☕',
            text: 'fueled by Cold Coffee and appreciation'
        },
        {
            emoji: '🌎',
            text: 'based in INDIA'
        },
        {
            emoji: "💼",
            text: "MS-Research At IITK"
        },
        {
            emoji: "📧",
            text: "himanshupandey09876@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/pandey5283/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://in.linkedin.com/in/hemanshu-pandey-884015169",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am currently pursuing a Master of Science by Research at IIT Kanpur in the Department of Computer Science and Engineering. My educational journey began at Army Public School No.1, Jabalpur. I am driven by a passion for acquiring knowledge and an ambition to achieve financial success. I combine my academic pursuits with a keen interest in cutting-edge research and practical applications in the field of computer science.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3','express','mongodb','postgresql'],
            exposedTo: ['nodejs', 'python','c++','java']
        }
    ,
    hobbies: [
        {
            label: 'sometimes reading',
            emoji: '📖'
        },
        {
            label: 'coding',
            emoji: '👨‍💻'
        },
        {
            label: 'running',
            emoji: '🏃‍♂️'
        },
        {
            label: 'cycling',
            emoji: '🚴‍♂️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ARBITER/CAR-PUF EFFICIENT FEATURE SUMMARIZATION",
            live: "/",
            source: "/",
            image: mock3
        },
        {
            title: "CAR STEERING-COMPUTER VISION",
            live: "/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "INDIAN EDUCATION SYSTEM VISUALIZATION/ANALYSIS",
            live: "/",
            source: "/",
            image: mock5
        },
        {
            title: "MOVIE RECOMMENDATION SYSTEM",
            live: "/",
            source: "/",
            image: mock2
        },
       
        
        {
            title: "ESCAPING THE CAVES -BREAKING CIPHER TEXT",
            live: "/",
            source: "/",
            image: mock5
        }
    ]
}