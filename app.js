import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <img
      id="logo"
      src="https://i.postimg.cc/65fgCPgN/Screenshot-152.png"
      alt="disappeared"
    ></img>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
  </div>
);

const Search = () => {
  return <h3>Search</h3>;
};
const Body = ({restro}) => {
  // const{ restro }= props;
  // const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime} =restro?.info;
  const {
    info: {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      sla: { deliveryTime },
    },
  } = restro;
  return (
    <div className="restro-card">
      <img
        className="restroimage"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>

      <div className="RestroDetails">
        <h3
          className="RestroName"
          style={{
            color: "black",
            marginTop: "2px",
            fontSize: "larger",
            fontFamily: "system-ui",
          }}
        >
          {name}
        </h3>
        <h4 style={{ marginTop: "-5px" }}>
          {avgRating} ⭐ ETA{deliveryTime} min
        </h4>
        <h5 style={{ color: "green", fontSize: "small" }}>
          {cuisines.join(", ")}
        </h5>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Search />
      <div className="appbody">
        {restro.map((restroo) => (
          <Body restro={restroo} key={restroo.info.id} />
        ))}
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
console.log(AppLayout);
