const Twit = require("twit"); //twit node package
const config = require("./config.js"); //twitter account info

const T = new Twit(config); //make twit object to connect to twitter API

const exec = require("child_process").exec; // require child process for triggering Processing script
const fs = require('fs');

//the twitter bot 🤖🐬
const doStuff = () => {
  const cmd = "processing-java --sketch=/Users/sailorwinkelman/Code/twitter-bot/rainbow  --run";
  
  const processing = () => {
      const filename = "rainbow/output.png";
      const b64content = fs.readFileSync(filename, { encoding: "base64"}); // read file made by processing
      
      const uploaded = (err, data, response) => {
          const id = data.media_id_string;
          const tweet = {
              status:
              "this is a processing sketch posted using node.js #codingtrain ✏️",
              media_ids: [id]
            };
            T.post("statuses/update", tweet, tweeted);
        };
        
        const tweeted = (err, data, response) => {
            if (err) console.log(`👹 hi ${err}, i'm dad`);
            if (data) console.log(`Tweet worked, image ${id} uploaded`);
        };
        T.post("media/upload", { media_data: b64content }, uploaded); //upload file to twitter
        
    };
    exec(cmd, processing); //run the processing sketch
}
doStuff(); // run the bot



// get() --> search tweets !!!
// const params = {
//     q: 'codingtrain',
//     count: 2
// }

// const gotData = (err, data, response) => {
//     if (err) console.log("👹 hello error");
//     const tweets = data.statuses;
//     tweets.map((tweet, i) => console.log(`tweet ${i}: ${tweet.text}`))
// }

// T.get('search/tweets', params, gotData);
