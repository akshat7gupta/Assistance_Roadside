import "react-notifications/lib/notifications.css";
import "./request-form.scss";

import React, { useState, useContext } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import userService from "services/user-service";
import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";
import requestService from "../../../services/request-service";
import { AuthContext } from "../../../ContextWrapper";
import FormHeader from "../form-header/form-header";

const RequestForm = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2000);
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [condition, setCondition] = useState("");
  const { auth } = useContext(AuthContext);

  function handleFormSubmit(e) {
    e.preventDefault();

    const request = {
      brand,
      model,
      year,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      deliveryDate,
      condition,
      userId: auth,
    };

    requestService.add(request).then((data) => {
      const requestId = data._id;
      userService.getUser(auth).then((userData) => {
        const userWithRequest = userData;
        userWithRequest.requests.push(request);
        userService.edit(auth, userWithRequest);
      });

      return NotificationManager.success(
        "Your request has been successfully submitted and will be reviewed by the administrator!",
        "Congratulations!",
        9000
      );
    });
  }

  return (
    <PageContentWrapper className='request-form-wrapper'>
      <div className="request-form">
        <NotificationContainer />
        <FormHeader
          title="New Request"
          subtitle="Send a request for transportation of your vehicle"
        />
        <form onSubmit={handleFormSubmit}>
          <label>
            <input
              type="text"
              name="brand"
              onChange={(ev) => setBrand(ev.target.value)}
              value={brand}
              placeholder="Brand"
              required
            />
          </label>
          <label>
            <input
              onChange={(ev) => setModel(ev.target.value)}
              value={model}
              type="text"
              name="model"
              placeholder="Model"
              required
            />
          </label>
          <label>
            <input
              onChange={(ev) => setYear(ev.target.value)}
              value={year}
              type="number"
              name="year"
              placeholder="Year of manufacture"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="pickupLocation"
              onChange={(ev) => setPickupLocation(ev.target.value)}
              value={pickupLocation}
              placeholder="Pickup location"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="deliveryLocation"
              onChange={(ev) => setDeliveryLocation(ev.target.value)}
              value={deliveryLocation}
              placeholder="Delivery location"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="pickupDate"
              onChange={(ev) => setPickupDate(ev.target.value)}
              value={pickupDate}
              placeholder="Pickup date"
            />
          </label>
          <label>
            <input
              type="text"
              name="deliveryDate"
              onChange={(ev) => setDeliveryDate(ev.target.value)}
              value={deliveryDate}
              placeholder="Delivery date"
            />
          </label>
          <label>
            <input
              type="text"
              name="condition"
              onChange={(ev) => setCondition(ev.target.value)}
              value={condition}
              placeholder="Vehicle condition"
              required
            />
          </label>
          <input type="submit" value="SEND" />
        </form>
      </div>
    </PageContentWrapper>
  );
};

export default RequestForm;
