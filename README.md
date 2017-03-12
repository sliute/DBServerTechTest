# Database Server Tech Test

## The Brief

"Write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

Create a new git repository and write code to fulfil this brief to the best of your ability. We will be looking for clean, well tested code in your choice of technology. In addition, the last sentence of the brief implies that you should consider how the code could easily be extended to add an as-yet-unknown data store.

## How to Deploy and Test

I did this test in JavaScript using Node.js, Express.js for development and Mocha + Chai for testing. Provided that you have all these set up:

```
$ git clone https://github.com/sliute/DBServerTechTest.git
$ cd DBServerTechTest
$ npm test
$ npm start
$ open http://localhost:4000
```

## Progress and Issues

* At this stage, I only provided a minimal amount of testing that spearheaded the code for the two routes (POST and the GET).
* There is no testing and functionality to put the POST route to use in the browser yet.
