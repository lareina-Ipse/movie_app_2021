
import React from "react";

function Food({name, picture}) {

  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2018/09/moms_best_kimchi_01-.jpg"
  },
  {
    name: "Bibimbap",
    image: "http://aeriskitchen.com/wp-content/uploads/2019/02/Stone_Bowl_Bibimbap_00-1-1.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
