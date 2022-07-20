import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Delete, Read } from '../../services/crudServices';

const ListTable = () => {
  let [dataList, setDataList] = useState([]);

  useEffect(() => {
    Read().then((result) => {
      setDataList(result);
    });
  }, []);

  const DeleteItem = (id) => {
    Delete(id).then((result) => {
      if (result === true) {
        cogoToast.success('Delete Success');
        Read().then((result) => {
          setDataList(result);
        });
      } else {
        cogoToast.error('Delete Failed');
      }
    });
  };

  if (dataList.length > 0) {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.ProductName}</td>
                  <td>{item.ProductCode}</td>
                  <td>
                    <img
                      src={item.ProductImage}
                      alt="productimage"
                      style={{ width: '80px' }}
                    />
                  </td>
                  <td>{item.UnitPrice}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.TotalPrice}</td>
                  <td>
                    <button
                      onClick={() => DeleteItem(item._id)}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary m-1">
                      <Link
                        to={'/update/' + item._id}
                        className="link-light text-decoration-none"
                        state={{ objId: item._id }}
                      >
                        Update
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }
};

export default ListTable;
