import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { peopleCircleOutline, navigateCircleOutline, calendar } from 'ionicons/icons';
import Chart from '../chart/index.chart';
import './topSection.css';
import 'react-calendar/dist/Calendar.css';

const TopSection = ({ currentCard }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const [date, setDate] = useState(moment());
    const [showChart, setShowChart] = useState(false);
    
    const changeDate = (data) => {
        setDate(moment(data));
        setShowCalendar(false);
    };

  return (
    <div className="topSection">
        <br />
        <div className="topHeader">
            <div className="topTitle">
                Your Business Name
                <span className="topTag">
                    45
                </span>
                <br />
                <span className="litleText">
                    Updated 1hr ago
                </span>
            </div>
            <br />
            <div className="topCircle">
                +/-
            </div>
        </div>
        <div>
            <span className="litleText">
                    Today
            </span>
            <br />
            <div className="dataBox">
                <div className="dataBoxInside dataBorder">
                    <div className="dataBoxText">REVENUE</div>
                    <br />
                    <div>$117,454</div>
                </div>
                <div className="dataBoxInside dataBorder">
                    <div className="dataBoxText">UTILIZATION</div>
                    <br />
                    <div>67%</div>
                </div>
                <div className="dataBoxInside dataBorder">
                    <div className="dataBoxText">FEEDBACK</div>
                    <br />
                    <div>4.7</div>
                </div>
                <div className="dataBoxInside">
                    <div className="dataBoxText">GUESTS</div>
                    <br />
                    <div>718</div>
                </div>
            </div>
        </div>
        {
            showChart && (
                <Chart date={date} currentCard={currentCard} />
            )
        }
        <div className="calendar">
            {
                showCalendar && (
                    <Calendar
                        onChange={changeDate}
                        value={new Date(date)}
                    />
                )
            }
        </div>
        <div className="elInline">
            <IonIcon className="iconTopSection" icon={peopleCircleOutline} />
        </div>
        <div className="elInline">
            <IonIcon className="iconTopSection" icon={navigateCircleOutline} />
        </div>
        <div className="dateArea">
            <div className="elInline iconCircle">
                4w
            </div>
            <div className="elInline areaDate" onClick={() => setShowCalendar(!showCalendar)}>
                {`${date.format("MMM Do YY")}  `}<IonIcon icon={calendar} />
            </div>
        </div>
        <div className="whiteBar" onClick={() => setShowChart(!showChart)} />
    </div>
  );
};

export default TopSection;
