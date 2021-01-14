
import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2018/09/moms_best_kimchi_01-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Bibimbap",
    image: "http://aeriskitchen.com/wp-content/uploads/2019/02/Stone_Bowl_Bibimbap_00-1-1.jpg",
    rating: 4.9
  }
]

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.PropTypes = {

}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
      <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}  
      />
      ))}
    </div>
  );
}

export default App;
