import autoReparingIcon from 'assets/icons/icon-repair.png';
import transmissionCheckupIcon from 'assets/icons/icon-tabs02.png';
import vehicleInspectionIcon from 'assets/icons/icon-tabs03.png';

import './vehicle-services.scss';

import React from 'react';
import {
  Tabs, Tab, TabPanel, TabList,
} from 'react-web-tabs';
import VehicleService from './vehicle-service/vehicle-service';
import VehicleServicesHeader from './header/vehicle-services-header';

const servicesData = [
  {
    key: 'autoRepairing',
    title: 'Road Assistance',
    description: 'Road assistance for people who have encountered disasters, road accidents, or breakdowns while traveling by car or other means of transportation. The specialized repair vehicle has the ability to: repatriate a damaged car, wheel lift (for transporting a vehicle with a damaged drive unit or missing wheels or tires), towing by truck, provision delivery, pulling out of ditches, snowdrifts, and more.',
    benefits: ['Repatriation of Vehicles', 'Power Supply', 'Tire Change', 'Transport of Vehicles to the Traffic Police Department', 'Delivery of Parts', 'Auto Repair Shop'],
  }, {
    key: 'transmissionCheckup',
    title: 'Repairing',
    description: 'The specialized repair vehicle (mobile workshop) has the ability to: repatriate a damaged car using special equipment, winch, crane, wheel lift (for transporting a vehicle with a damaged drive unit or missing wheels or tires), platform trailer, towing by a truck with a winch hook, delivery of consumables, auto parts, on-site vehicle repair, provision delivery, pulling out of ditches, snowdrifts, and more.',
    benefits: ['Tire Change', 'Transport of Vehicles to the Traffic Police Department', 'Repatriation of Vehicles', 'Power Supply'],
  }, {
    key: 'vehicleInspection',
    title: 'Auto Services',
    description: 'Mobile auto service activity to provide road assistance to people who have encountered disasters, road accidents, or breakdowns while traveling by car or other means of transportation. The specialized repair vehicle (mobile workshop) must be able to: deliver consumables, auto parts, on-site vehicle repair.',
    benefits: ['Power Supply', 'Tire Change', 'Delivery of Parts', 'Auto Repair Shop'],
  },
];

const Services = () => (
  <section className="vehicle-services">
    <VehicleServicesHeader title="Road Assistance" text="The best services in the country" />

    <article className="vehicle-services-tabs-wrapper">
      <Tabs
        vertical
        defaultTab="autoRepairing"
      >
        <TabList>
          <Tab tabFor="autoRepairing">
            <img className="vehicle-services-tabs-img" src={autoReparingIcon} alt="auto-repairing" />
            <p className="vehicle-services-tablist-title">Road Assistance</p>
          </Tab>
          <Tab tabFor="transmissionCheckup">
            <img className="vehicle-services-tabs-img" src={transmissionCheckupIcon} alt="transmission-checkup" />
            <p className="vehicle-services-tablist-title">Parts Delivery</p>
          </Tab>
          <Tab tabFor="vehicleInspection">
            <img className="vehicle-services-tabs-img" src={vehicleInspectionIcon} alt="vehicle-inspection" />
            <p className="vehicle-services-tablist-title">Auto Services</p>
          </Tab>
        </TabList>

        {servicesData.map(({
          key, title, description, benefits,
        }) => (
          <TabPanel tabId={key}>
            <VehicleService title={title} description={description} benefits={benefits} />
          </TabPanel>
        ))}
      </Tabs>
    </article>
  </section>
);

export default Services;
