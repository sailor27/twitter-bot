const Twit = require("twit");
const config = require("./config.js");

const T = new Twit(config);

// get() --> search tweets 
const params = {
    q: 'codingtk;kmrain',
    count: 2
}

const gotData = (err, data, response) => {
    if (err) console.log("👹 hello error");
    const tweets = data.statuses;
    tweets.map((tweet, i) => console.log(`tweet ${i}: ${tweet.text}`))
}

T.get('search/tweets', params, gotData);

// post() --> post tweets

const tweet = {
    status: "#codingrainbow from node.js 🌈☔️"
}

const tweeted = (err, data, response) => {
    if (err) console.log("👹 hello error");
    if (data) console.log(`Tweet ${data}`)
};

T.post('statuses/update', tweet, tweeted)


// post() --> post tweets
