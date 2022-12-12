import React from "react";
import Button from "../../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2>NotFoundPage</h2>
        <div className="py-4">
          <Button title="continue shopping" goLink="/product" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
