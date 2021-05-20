import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../../assets/css/checkoutCalculator.css';

// API CALL
// import axios from 'axios';
// useEffect ( () => {
//     axios.get('')
// }, []);

const calculatePrice = (nights, nightCost,discount,cleaningFee) => {
    let totalPrice = (nightCost*nights);
    totalPrice -= discount;
    totalPrice += cleaningFee;

    return totalPrice;
}

const Calculation = (props) => {    

    return (
        <div className="calculatorContainer">
        {/* Heading */}
            <div className="Heading">
                <div className="text">
                    <h3>Unique Cob Cottage</h3>
                    <h5>Mayne Island</h5>
                    <div className="reviews"></div>
                </div>

                <div className="preview"></div>
            </div>
        
        {/* Dates */}
            <div className="Dates">
                <div className="checkin"><DatePicker selected={props.startDate} onChange={date => props.setStartDate(date)} /></div>
                <div className="checkout"><DatePicker selected={props.endDate} onChange={date => props.setEndDate(date)} /></div>
            </div>
            

        <div className="infoLine">
            <h5>How many guests ?</h5>
            <div className="options">
                <input type="number" value={props.guests} />
            </div>
        </div>

        <div className="infoLine">
            <h5>How many children ?</h5>
            <div className="options">
                <input type="number" value={props.children} />
            </div>
        </div>

        <div className="infoLine">
            <h5>Do you have pets ?</h5>
            <div className="options">
                <input type="number" value="1" />
            </div>
        </div>

        <h4 className="title">Your reservation cost</h4>

            <div className="priceDetail">
                <h5>Stay duration</h5>
                <span> {props.calculateDays(props.startDate,props.endDate)} nights</span>
            </div>

            <div className="priceDetail">
                <h5>Night cost</h5>
                <span>{props.nightCost}$</span>
            </div>

            <div className="priceDetail">
                <h5>Discount</h5>
                <span>{props.discount}$</span>
            </div>

            <div className="priceDetail">
                <h5>Cleaning fees</h5>
                <span>{props.cleaningFee}$</span>
            </div>

            <div className="priceDetail">
                <h5>Your total</h5>
                <span>{calculatePrice(props.calculateDays(props.startDate,props.endDate),props.nightCost, props.discount, props.cleaningFee)}$</span>
            </div>
        </div>
    )
}

export default Calculation