import React from "react";
import { useSelector } from "react-redux";

const Header = ({ setIsMapView }) => {
  const { isLoading, isError, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <div onClick={() => setIsMapView(true)}>
        <img src="/public/plane-logo.png" alt="" />
        <h3>Uçuş Radarı</h3>
      </div>
      <p>
        {isLoading
          ? "Uçuşlar hesaplanıyor..."
          : isError
          ? "Üzgünüz, bir hata oluştu."
          : flights.length + "  uçuş bulundu"}
      </p>
    </header>
  );
};

export default Header;
