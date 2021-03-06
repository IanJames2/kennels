import React from 'react';
import "./Customers.css"


export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__breed">{customer.animal.breed}</div>
    </section>
    )