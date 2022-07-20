import cogoToast from 'cogo-toast';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from '../../helper/Validation';
import { Create } from '../../services/crudServices';
import FullScreenLoader from '../Common/FullScreenLoader';

const CreateForm = () => {
  const navigate = useNavigate();

  let ProductName,
    ProductCode,
    ProductImage,
    UnitPrice,
    Quantity,
    TotalPrice,
    Loader = useRef();

  const SaveData = (e) => {
    e.preventDefault();
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Image = ProductImage.value;
    let Unit_Price = UnitPrice.value;
    let Product_Qunatity = Quantity.value;
    let Total_Price = TotalPrice.value;

    if (isEmpty(Product_Name)) {
      cogoToast.error('Product Name required');
    } else if (isEmpty(Product_Code)) {
      cogoToast.error('Product Code required');
    } else if (isEmpty(Product_Image)) {
      cogoToast.error('Product Image required');
    } else if (isEmpty(Unit_Price)) {
      cogoToast.error('Unit Price required');
    } else if (isEmpty(Product_Qunatity)) {
      cogoToast.error('Product Quantity required');
    } else if (isEmpty(Total_Price)) {
      cogoToast.error('Total Price required');
    } else {
      Loader.classList.remove('d-none');
      Create(
        Product_Name,
        Product_Code,
        Product_Image,
        Unit_Price,
        Product_Qunatity,
        Total_Price
      ).then((result) => {
        Loader.classList.add('d-none');
        if (result === true) {
          cogoToast.success('Data Save success');
          navigate('/');
        } else {
          cogoToast.error('Data Save failed');
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-2">
          <label>Product Name</label>
          <input
            ref={(input) => (ProductName = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Product Code</label>
          <input
            ref={(input) => (ProductCode = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Product Image</label>
          <input
            ref={(input) => (ProductImage = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Unit Price</label>
          <input
            ref={(input) => (UnitPrice = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Quantity</label>
          <input
            ref={(input) => (Quantity = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Total Price</label>
          <input
            ref={(input) => (TotalPrice = input)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4 p-2">
          <button onClick={SaveData} className="btn btn-primary w-100">
            Save
          </button>
        </div>
      </div>
      <div ref={(div) => (Loader = div)} className="d-none">
        <FullScreenLoader />
      </div>
    </div>
  );
};

export default CreateForm;
