import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ListView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flight);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(flights.length / itemsPerPage);
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % flights.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="p-4">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id ? flight.id : "-"}</td>
              <td>{flight.code ? flight.code : "-"}</td>
              <td>{flight.lat ? flight.lat : "-"}</td>
              <td>{flight.lng ? flight.lng : "-"}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination justify-content-center my-5"
        pageClassName="page-item"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakClassName="page-link"
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        activeClassName="active"
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ListView;
