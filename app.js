const http = require('http');

const request = require('request');
const port = 3000;
var express = require('express');

var app = express();
var myobj1 = {
  "_id": "5ca7426381155ca726da4438",
  "index": 2,
  "guid": "b7acf8f5-1700-4a9f-8f98-be98dd632171",
  "isActive": true,
  "balance": "$2,525.08",
  "picture": "http://placehold.it/32x32",
  "age": 33,
  "eyeColor": "green",
  "name": "Nadia Horn",
  "gender": "female",
  "company": "KIGGLE",
  "email": "nadiahorn@kiggle.com",
  "phone": "+1 (918) 498-3520",
  "address": "457 Clermont Avenue, Derwood, South Carolina, 1987",
  "about": "Labore occaecat et duis laborum ullamco sint nulla pariatur. Reprehenderit est cupidatat id adipisicing consectetur reprehenderit ad. Ea qui veniam non cupidatat deserunt voluptate ut. Labore sunt labore elit enim Lorem non.\r\n",
  "registered": "2018-10-23T10:25:35 -06:-30",
  "latitude": -12.154158,
  "longitude": 23.924449,
  "tags": [
    "et",
    "et",
    "deserunt",
    "id",
    "elit",
    "voluptate",
    "velit"
  ],
  "friends": [{
      "id": 0,
      "name": "Callahan Fischer"
    },
    {
      "id": 1,
      "name": "Jamie Jacobs"
    },
    {
      "id": 2,
      "name": "Celina Keith"
    }
  ],
  "greeting": "Hello, Nadia Horn! You have 4 unread messages.",
  "favoriteFruit": "apple"
}
var myobj2 = {
  "_id": "5ca74263070c5f1d5b5da17d",
  "index": 3,
  "guid": "630d2f0e-48d2-4ce4-8a64-05e62b557420",
  "isActive": true,
  "balance": "$3,065.32",
  "picture": "http://placehold.it/32x32",
  "age": 20,
  "eyeColor": "green",
  "name": "Roberson Camacho",
  "gender": "male",
  "company": "KIGGLE",
  "email": "nadiahorn@kiggle.com",
  "phone": "+1 (918) 498-3520",
  "address": "457 Clermont Avenue, Derwood, South Carolina, 1987",
  "about": "Aliqua mollit anim magna ipsum. Esse dolor sit ex commodo Lorem amet excepteur aute reprehenderit. Magna qui anim cupidatat mollit fugiat nulla do Lorem velit. Labore ullamco velit ea adipisicing duis fugiat tempor proident velit veniam duis culpa tempor. Officia culpa pariatur nostrud dolor.\r\n",
  "registered": "2017-03-09T08:34:04 -06:-30",
  "latitude": 4.937933,
  "longitude": -125.273615,
  "tags": [
    "consectetur",
    "enim",
    "elit",
    "ut",
    "aliqua",
    "sint",
    "sint"
  ],
  "friends": [{
      "id": 0,
      "name": "John Washington"
    },
    {
      "id": 1,
      "name": "Yolanda Griffin"
    },
    {
      "id": 2,
      "name": "Margo Cooper"
    }
  ],
  "greeting": "Hello, Roberson Camacho! You have 9 unread messages.",
  "favoriteFruit": "apple"


}

keyObj1 = Object.keys(myobj1);
keyObj2 = Object.keys(myobj2);
// find values
valueObj1 = Object.values(myobj1);
valueObj2 = Object.values(myobj2);

if(keyObj1.length > keyObj2.length) {
  var biggestKey = keyObj1.length;
} else {
  var biggestKey = keyObj2.length;
}
for(var i=0; i<biggestKey; i++) {
  if(keyObj1[i] == keyObj2[i] && valueObj1[i] == valueObj2[i]) {
    console.log(valueObj2[i]);	
  } else {
    // it prints keys have different values
    console.log('myObj1 value: '+ valueObj1[i] + '\nmyObj2 value: '+ valueObj2[i] +'\n');
  }
}	

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});