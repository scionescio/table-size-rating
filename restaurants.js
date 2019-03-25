document.addEventListener("DOMContentLoaded", () => {
  getRestaurants();
  getRecommendation();
});

const getRecommendation = () => {
  // TODO
  return;
};

// GET http://localhost:5656/restaurants
const getRestaurants = () => {
  const b = document.getElementById("appendRestaurantsHere");
  fetch("http://localhost:5656/restaurants")
    .then(response => response.json())
    .then(restaurants => {
      for (var i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        const htmlRestaurant = appendRestaurantElement(restaurant);
        b.appendChild(htmlRestaurant);
      }
    });
};

// POST http://localhost:5656/restaurants
const postRestaurants = () => {
  const a = document.getElementById("id").value;
  const b = document.getElementById("name").value;
  const c = document.getElementById("rating").value;
  fetch("http://localhost:5656/restaurants", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ id: a, name: b, rating: c })
  })
    .then(response => {
      if (response.status == 200) return response.json();
      else return Promise.reject(response.json());
    })
    .then(success => {
      appendRestaurantElement(success);
      document.location.reload();
    })
    .catch(err => {
      if (err.message) {
        alert(`Ein Fehler ist aufgetreten: ${err.message}`);
      }
    });
};

const appendRestaurantElement = restaurant => {
  const div = document.createElement("div");
  div.innerHTML = "id " + restaurant.id;
  const innerDiv = document.createElement("div");
  innerDiv.style.display = "block";
  innerDiv.innerHTML =
    "name " + restaurant.name + " rating " + restaurant.rating;
  div.appendChild(innerDiv);
  div.style.border = "black dotted";
  div.style.margin = "20px";
  return div;
};
