import React from 'react';
import { IonIcon } from '@ionic/react';
import { IonCard, IonCardContent } from '@ionic/react';
import './card.css';

const Card = ({ data }) => {
  return (
    <IonCard>
        <IonCardContent>
            {data.viewing && (
                <div className="cardViewing">Viewing Now</div>
            )}
            <div>
                <div className="cardTitle inlineText" style={{ color: data.viewing && '#000' }}>
                    {data.title}
                </div>
                <div className="inlineText cardAmount" style={{ color: data.viewing && '#000' }}>
                    {data.amount}
                </div>
            </div>
            <div className="tagCard" style={{ backgroundColor: data.tagColor }}>
                <IonIcon icon={data.tagIcon} />
                {data.tagNumber}
            </div>
        </IonCardContent>
    </IonCard>
  );
};

export default Card;