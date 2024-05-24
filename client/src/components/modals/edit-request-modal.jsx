import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-request-modal.scss";

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import requestService from "../../services/request-service";

const EditRequestModal = ({ requestId, updateData }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDelete = () => {
    setShow(false);
    requestService.delete(requestId);
  };
  const handleSave = () => {
    setShow(false);
    const updatedRequest = {
      brand,
      model,
      year,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      deliveryDate,
      condition,
      status,
    };

    requestService.edit(requestId, updatedRequest);
    updateData({
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
  };

  useEffect(() => {
    requestService.getRequest(requestId).then((data) => {
      const {
        brand,
        model,
        year,
        pickupLocation,
        deliveryLocation,
        pickupDate,
        deliveryDate,
        condition,
        status,
      } = data;

      setBrand(brand);
      setModel(model);
      setYear(year);
      setPickupLocation(pickupLocation);
      setDeliveryLocation(deliveryLocation);
      setPickupDate(pickupDate);
      setDeliveryDate(deliveryDate);
      setCondition(condition);
      setStatus(status);
    });
  }, [requestId]);

  return (
    <>
      <button className="button button-primary request-btn" onClick={handleShow}>
        Edit
      </button>
      <Modal show={show} onHide={handleClose} className="edit-request-modal">
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="request-form edit-request-form">
            <form>
              <label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Brand"
                  required
                />
              </label>
              <label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  type="text"
                  name="model"
                  placeholder="Model"
                  required
                />
              </label>
              <label>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="number"
                  name="year"
                  placeholder="Year"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Pickup Location"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryLocation"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  placeholder="Delivery Location"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  placeholder="Pickup Date"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="deliveryDate"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  placeholder="Delivery Date"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  placeholder="Condition"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Status"
                  required
                />
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="button button-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="button button-primary" onClick={handleClose}>
            Close
          </button>
          <button className="button button-success" onClick={handleSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditRequestModal;
