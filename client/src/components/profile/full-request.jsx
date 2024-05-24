import "bootstrap/dist/css/bootstrap.min.css";
import "../administration/request/request.scss";
import "./full-request.scss";

import React, { useState } from "react";
import EditRequestModal from "components/modals/edit-request-modal";

const FullRequest = ({
  _id,
  brand,
  condition,
  model,
  year,
  pickupLocation,
  deliveryLocation,
  pickupDate,
  deliveryDate,
  status
}) => {
  const [requestData, setRequestData] = useState({
    brand,
    model,
    year,
    pickupLocation,
    deliveryLocation,
    pickupDate,
    deliveryDate,
    condition,
    status,
  });

  return (
    <div className="request full-request">
      <section className="request-main">
        <article>
          <h3 className="request-heading">Brand:</h3>
          <span className="request-content">{requestData.brand}</span>
        </article>
        <article>
          <h3 className="request-heading">Condition:</h3>
          <span className="request-content">{requestData.condition}</span>
        </article>
        <article>
          <h3 className="request-heading">Model:</h3>
          <span className="request-content">{requestData.model}</span>
        </article>
        <article>
          <h3 className="request-heading">Year:</h3>
          <span className="request-content">{requestData.year}</span>
        </article>
      </section>
      <section className="request-main">
        <article>
          <h3 className="request-heading">Pickup Location:</h3>
          <span className="request-content">{requestData.pickupLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Delivery Location:</h3>
          <span className="request-content">{requestData.deliveryLocation}</span>
        </article>
        <article>
          <h3 className="request-heading">Pickup Date:</h3>
          <span className="request-content">{requestData.pickupDate}</span>
        </article>
        <article>
          <h3 className="request-heading">Delivery Date:</h3>
          <span className="request-content">{requestData.deliveryDate}</span>
        </article>
      </section>
      <EditRequestModal requestId={_id} updateData={setRequestData} />
    </div>
  );
};

export default FullRequest;
