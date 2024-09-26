import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";
import { detailOptions } from "../constants";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";
import formatDate from "../utils/formatDate";

const Modal = ({ detailId, close }) => {
  const [itemId, setItemId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setItemId(null);
    axios.get(import.meta.env.VITE_API_URL + `/flights/detail?flight=${detailId}`, detailOptions).then((res) => {
      setItemId(res.data);
      dispatch(setPath(res.data.trail));
    });
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button onClick={close} className="text-white">
            X
          </button>
        </div>
        {!itemId ? (
          <div className="loader-wrapper">
            <div className="loader">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>{itemId.aircraft.model?.text}</h2>
            <h2>{itemId.aircraft.model?.code}</h2>
            <p>
              <span>Kuyruk Kodu: </span>
              <span>{itemId.aircraft.registration}</span>
            </p>
            {itemId.aircraft.images ? (
              <img
                src={
                  itemId.aircraft.images.large
                    ? itemId.aircraft.images.large[0].src
                    : itemId.aircraft.images.thumbnails[0].src
                }
              />
            ) : (
              <p>Fotoğraf Bulunamadı.</p>
            )}
            <p>
              <span>Şirket: </span>
              <span>{itemId.airline?.short}</span>
            </p>
            <p>
              <span>Kalkış: </span>
              <a href={itemId.airport?.origin?.website} target="_blank">
                {itemId.airport?.origin?.name}
              </a>
            </p>
            <p>
              <span>İniş: </span>
              <a href={itemId.airport?.destination?.website} target="_blank">
                {itemId.airport?.destination?.name}
              </a>
            </p>
            <p>
              <span>Kalkış Zamanı: </span>
              <span>
                {itemId.time?.scheduled?.departure > 0 ? formatDate(itemId.time?.scheduled?.departure) : "Bilinmiyor"}
              </span>
            </p>
            <p>
              <span>İniş Zamanı: </span>
              <span>
                {itemId.time?.scheduled?.arrival > 0 ? formatDate(itemId.time?.scheduled?.arrival) : "Bilinmiyor"}
              </span>
            </p>
            <p className={itemId.status?.icon}>
              <span>{itemId.status?.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
