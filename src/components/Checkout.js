import React, { useState } from 'react'
import Listing from './checkout/Listing';
import Calculation from './checkout/Calculation';


export default function Checkout() {

    const [startDate, setStartDate] = useState(new Date());
    
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;

    const [endDate, setEndDate] = useState(new Date(startDate.getTime() + day));    

    const [guests, setGuests] = useState(1);
    const [children, setChildren] = useState(0);
    const [pets, setPets] = useState(false);

    const   nightCost   = 115,
            discount    = 33,
            cleaningFee = 12;

    const calculateDays = (start,end) => {
        let sYear   =   start.getFullYear(),
            sMonth  =   start.getMonth(),
            sDay    =   start.getUTCDate();
    
        let eYear   =   end.getFullYear(),
            eMonth  =   end.getMonth(),
            eDay    =   end.getUTCDate();
        
        let difference = 0;
    
        difference += (eMonth-sMonth)*30;
        difference += (eDay-sDay);    
    
        return difference;
    }

    // props for calculation
    const calculationProps = {
        startDate: startDate,
        setStartDate: setStartDate,
    
        endDate: endDate,
        setEndDate: setEndDate,
    
        guests: guests,
        setGuests: setGuests,
    
        children: children,
        setChildren: setChildren,
        pets: pets,
        setPets: setPets,
    
        nightCost: nightCost,
        discount: discount,
        cleaningFee: cleaningFee,

        calculateDays: calculateDays
    }
    
    // props for listing
    const listingProps = {
        guests: guests,
        startDate: startDate,
        endDate: endDate,
        calculateDays: calculateDays
    }

    return (
        <section className="checkoutBody">
            <div className="listing">
            <Listing {...listingProps} />
            </div>

            <div className="reservation">
            <Calculation {...calculationProps} />
            </div>
      </section>
    )
}
