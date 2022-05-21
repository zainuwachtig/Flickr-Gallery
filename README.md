# Flickr Gallery

## Description

It is a simple application where you can search through photos from Flickr, a platform for sharing photos and videos. This is my first application made with React, so any kind of feedback is welcome!

## Features

- [x] List of photos from the Flickr API
- [x] Searchbar to look up a specific term

## Built with

- [Node](https://nodejs.org/en/), v18.0 to use the global fetch API by default without extra packages.
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- ❤️

## How to install

```
git clone https://github.com/zainuwachtig/miyagami_zain_butt.git
cd miyagami_zain_butt/server
npm install
cd ../client
npm install
```

## Flickr API

I used the [Flickr API](https://www.flickr.com/services/api/) with the package [flickr-sdk](https://www.npmjs.com/package/flickr-sdk) which does the API call from the backend.
To use flickr-sdk you will need a dotenv file (.env) in the server folder with your own API key (which can be requested [here](https://www.flickr.com/services/apps/create/apply/)).

```
API_KEY="your_api_key"
```
