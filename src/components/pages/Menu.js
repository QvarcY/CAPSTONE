import React from "react";

const Menu = () => {
  return (
    <div>
      <h1>Menu Page</h1>
      <img
        src={require("../../assets/assets/menu.png").default}
        alt="Menu"
        style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
      />
    </div>
  );
};

export default Menu;
