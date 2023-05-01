import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
const ButtonPage = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <div>
        <Button success rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary>Buy now</Button>
      </div>
      <div>
        <Button rounded danger onMouseLeave={handleClick}>
          <GoDatabase />
          Add Cart
        </Button>
      </div>
      <div>
        <Button>
          <GoCloudDownload />
          Delete it
        </Button>
      </div>
    </div>
  );
};
export default ButtonPage;
