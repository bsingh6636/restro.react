import { restro } from "../restro";
import { Restrocard } from "./Restrocard";
import { useEffect, useState } from "react";
export const Body = () => {
  const [restrolist, setrestrolist] = useState(restro);
  const filterestro = () => {
    let filteredlist = restrolist.filter((resti) => resti.info.avgRating > 4);
    setrestrolist(filteredlist);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1017167&lng=77.63482660000001"
      );
      const jsone = await data.json();
      setrestrolist(
        jsone.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log(`Eroor is ${error}`)
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1017167&lng=77.63482660000001"
        );
        const jsone = await data.json();
        setrestrolist(
          jsone.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
  
      } catch (alterror) {
        console.log(`alit error is$ {alterror}`)
      }
    }
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1017167&lng=77.63482660000001"
    // );
    // const jsone = await data.json();
    // console.log(jsone);
    // setrestrolist(
    //   jsone.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  return (
    <div className="body">
      <div className="filterclass">
        <button type="button" className="filterbutton" onClick={filterestro}>
          Filter restro
        </button>
        <div className="appbody">
          {restrolist.map((restroo) => (
            <Restrocard restro={restroo} key={restroo.info.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
