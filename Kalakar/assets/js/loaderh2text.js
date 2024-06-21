$(window).ready(function () {
    var generateWelcomeMessages = function (page) {
        var messages = [];

        // Define different messages based on the page
        if (page === 'index-2.html') {
            messages.push("Life is better with a side of memes.");
            messages.push("Memes: the original social media currency.");
            messages.push("Life is like a meme; its all about the timing.");
            messages.push("Memes: because therapy is expensive.");
            messages.push("Memes are the cultural DNA of the internet. ");
            messages.push("Loading laughter... Because a day without laughter is like a website without memes.");
            messages.push("Think big, act bigger");
            messages.push("Meme marketing is the language of the savvy generation.");
            messages.push("Crafting Memorable Moments");
            messages.push("Unlocking the homepage treasure chest... Spoiler: It's filled with meme wit.");
            // Add more messages specific to index.html
        } else if (page === 'about.html') {
            messages.push("Where innovation meets imagination, and every click unfolds a new story.");
            messages.push("Fueling innovation, one click at a time");
            messages.push("Creativefuel stands tall as your lighthouse, guiding your brand towards success.");
            messages.push("Each click tells a tale of innovation");
            messages.push("More than a team, we're the storytellers");
            messages.push("Where the art of code meets the magic of creativity");
            messages.push("Transforms virtual ideas into the pixel-perfect realities");
            messages.push("We're not just a team, we're digital storytellers.");
            messages.push("Where every click sparks a new chapter of  brand's story");
            messages.push("Creating a symphony of clicks that unfold brand's unique story");
            // Add more messages specific to about.html
        } else if (page === 'works.html') {
            messages.push("Turning big ideas into bigger realities.");
            messages.push("Where creativity meets functionality.");
            messages.push("Content is fire, social media is gasoline");
            messages.push("Don’t be afraid to get creative and experiment with your marketing.");
            messages.push("The best marketing doesn’t feel like marketing");
            messages.push("We don't just think outside the box, we redesign it.");
            messages.push("Ideas: where magic begins.");
            messages.push("Where every detail is a part of a bigger story.");
            messages.push("Building tomorrow's solutions, today.");
            messages.push("Infusing Innovation.");
            // Add more messages specific to about.html
        } else if (page === 'service.html') {
            messages.push("Imagine. Create. Inspire");
            messages.push('"Where quality service is our promise, not just a slogan."');
            messages.push('"Transforming challenges into solutions – every day."');
            messages.push('"Service so good, it feels like magic."');
            messages.push('"Crafting excellence in every service we deliver."');
            messages.push('Memes are the snackable content that fuels the hunger for engagement in the social media buffet.');
            messages.push('"We don\'t just meet standards; we set them."');
            messages.push('"Your satisfaction is our success story."');
            messages.push('"Beyond service – we deliver delight."');
            messages.push('"Bringing our best to every task, every time."');
            // Add more messages specific to about.html
        }  else if (page === 'contact.html') {
            messages.push("Got ideas brewing? So do we.");
            messages.push('Your questions, our playground. Contact us');
            messages.push('Wondering about marketing wonders? We\'ve got answers!');
            messages.push('Change is just a click');
            messages.push('No need to toss a coin. For marketing luck, just contact us');
            messages.push('You\'ve got questions; we\'ve got solutions.');
            messages.push('Let\'s weave success together');
            messages.push('Your ideas matter to us');
            messages.push('Together in every step');
            messages.push('Your journey, our commitment. Contact us to begin');
            // Add more messages specific to about.html
        }  else if (page === 'welcome.html') {
            messages.push("We're brewing up a storm of marketing opportunities. Join us for the ride");
            messages.push('Your marketing career is about to take flight. Prepare for liftoff!');
            messages.push('Innovation starts with you. Join the journey.');
            messages.push('Elevate your career. Join a culture of growth.');
            messages.push('Together, we redefine success. Join the revolution.');
            messages.push('Unleash your potential. Join the marketing revolution!');
            messages.push('Ready to make waves? Dive into the pool of marketing excellence.');
            messages.push('Ready to make a real impact on the marketing world? Join us');
            messages.push('We\'re decoding the marketing matrix. Are you ready to crack the code?');
            messages.push('Join us, where every role is a key player in our success story.');
            // Add more messages specific to about.html
        }

        return messages;
    };

    // index.html
    var welcome_messages = {};
    welcome_messages['index.html'] = generateWelcomeMessages('index-2.html');
    welcome_messages['contact.html'] = generateWelcomeMessages('contact.html')
    // about.html
    welcome_messages['about.html'] = generateWelcomeMessages('about.html');
    welcome_messages['works.html'] = generateWelcomeMessages('works.html');
    welcome_messages['service.html'] = generateWelcomeMessages('service.html');
    welcome_messages['welcome.html'] = generateWelcomeMessages('welcome.html');

    var current_page_name = window.location.pathname.split("index.html").pop();
    //alert(current_page_name);
    //console.log(welcome_messages[current_page_name]);
    var welcome_messages_current_page = welcome_messages[current_page_name];
    function getMessage() {
      return welcome_messages_current_page[Math.floor(Math.random() * welcome_messages_current_page.length)];
    }
    var get_message = getMessage();
    $(".Loaderh2").text(get_message);
});
