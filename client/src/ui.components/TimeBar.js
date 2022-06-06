import React from "react";

function TimeBar() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const date = new Date();
    let monthname = month[date.getMonth()];
    let day = weekday[date.getDay()];
    const today = date.getDate();

    return (
        <div className="row hnavbar bg-light shadow-sm ">
            <div className="container-fluid py-2">
                <div className="col-md-6 dinline ">
                    <p className="dinline">
                        {monthname} {today}, {day}
                    </p>
                </div>

            </div>
        </div>
    );

}

export default TimeBar;