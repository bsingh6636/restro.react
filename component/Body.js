import { Restrocard } from "./Restrocard";
import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [restrolist, setrestrolist] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  console.log(searchvalue);
  const filterestro = () => {
    let filteredlist = restrolist.filter((resti) => resti.info.avgRating > 4);
    setrestrolist(filteredlist);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1017167&lng=77.63482660000001"
    );
    const jsone = await data.json();
    setrestrolist(
      jsone.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsone.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  console.log(restrolist)
  return restrolist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterclass">
        <input
          type="text"
          className="searchtext"
          value={searchvalue}
          onChange={(e) => setsearchvalue(e.target.value)}
          placeholder="Enter text"
        ></input>
        <button
          onClick={() => {
            let searchedrestro = restrolist.filter((res) =>
              // res.name.includes(searchvalue)
              res.info.name && typeof res.info.name === 'string' && res.info.name.includes(searchvalue)
            );
            setrestrolist(searchedrestro);
          }}
        >
          Search
        </button>
        <button type="button" className="filterbutton" onClick={filterestro}>
          Filter restro
        </button>
      </div>
      <div className="appbody">
        {restrolist.map((restroo) => (
          <Restrocard restro={restroo} key={restroo.info.id} />
        ))}
      </div>
    </div>
  );
};
