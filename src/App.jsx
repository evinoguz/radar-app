import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <div>
        <Header setIsMapView={setIsMapView} />
        <div className="view-buttons">
          {/* "bg-dark text-white" */}
          <button
            onClick={() => {
              setIsMapView(true);
              setDetailId(null);
            }}
            className={isMapView ? "active" : ""}
          >
            Harita Görünümü
          </button>
          <button
            onClick={() => {
              setIsMapView(false);
              setDetailId(null);
            }}
            className={isMapView ? "" : "active"}
          >
            Liste Görünümü
          </button>
        </div>
        {isMapView ? <MapView setDetailId={setDetailId} /> : <ListView setDetailId={setDetailId} />}
        {detailId && <Modal detailId={detailId} close={() => setDetailId(null)} />}
      </div>
    </>
  );
}

export default App;
