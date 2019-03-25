# TASK

## Scenario

As you are creating a website with the sole cause of rating restaurants and cafes in your neighborhood by their table size, several cafes approach you to find out whether you could advertize their etablissements.

Baited by the large amount of money they offer, you implement a function that recommends the advertized cafes for a rating, whenever a user clicks on the name `input` element of your website, thus possibly drawing attention to these specific cafes.

To hide the fact, that you are selling your soul for some ad money, from the user, you implement a poll that loads the cafes' names off your webserver and attaches them to your `input` element as subtle suggestions (cf. [`Inception`](https://www.imdb.com/title/tt1375666/?ref_=nv_sr_1)).

## Technical Requirements

- Create a `REST API` that enables you to both access this list of cafes and later add new ones, in case other cafes want to jump on the bandwagon.

- Use the [`datalist`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) HTML element to implement your recommendation service.

- Test your `REST API` from your console (in case it doesn't work try [this](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)). 

```
// This might help
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"id":"xyz","name":"hi", "rating":"3"}' \
localhost:5656/restaurants/0
```

- Rate your service by the `Richardson Maturity Model`. What could be enhanced to reach exactly one level higher within this model? Name one specific implementation.

## Tips
To fetch your missing node packages, use `npm install` or `yarn install`, as they are already all recorded in your `package.json` file.

To start your server use `node server.js` in your directory.

Maybe collapse other code, to be more challenged to come up with a solution yourself, especially concerning the `server.js` file.