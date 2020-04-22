import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { arrowUp, arrowDown } from 'ionicons/icons';
import TopSection from '../components/topSection/index.topSection';
import Card from '../components/card/index.card';
import './Tab1.css';

const Tab1 = () => {
  const defaultCards = [
    {
      id: 1,
      viewing: true,
      title: 'Avg. Ticket Size',
      amount: '$6,571,367',
      tagColor: '#21B573',
      tagNumber: '453K',
      tagIcon: arrowUp,
    },
    {
      id: 2,
      viewing: false,
      title: 'Product revenue',
      amount: '$11,032,421',
      tagColor: '#E50000',
      tagNumber: '453K',
      tagIcon: arrowDown,
    },
    {
      id: 3,
      viewing: false,
      title: 'Avg. Invoice Value',
      amount: '$453,608',
      tagColor: '#9F9F9F',
      tagNumber: '453K',
      tagIcon: arrowDown,
    },
    {
      id: 4,
      viewing: false,
      title: 'Product Revenue',
      amount: '$6,571,367',
      tagColor: '#21B573',
      tagNumber: '453K',
      tagIcon: arrowUp,
    },
    {
      id: 5,
      viewing: false,
      title: 'Avg. Invoice Value',
      amount: '$453,608',
      tagColor: '#9F9F9F',
      tagNumber: '453K',
      tagIcon: arrowDown,
    },
    {
      id: 6,
      viewing: false,
      title: 'Product revenue',
      amount: '$11,032,421',
      tagColor: '#E50000',
      tagNumber: '453K',
      tagIcon: arrowDown,
    },
  ];

  const [cards, setCards] = useState(defaultCards);

  const setCurrentCard = (idCard) => {
    const tempCards = cards;
    tempCards[0].viewing = false;
    tempCards.forEach((item, index) => {
      if(item.id === idCard){
        tempCards.splice(index, 1);
        tempCards.unshift(item);
        tempCards[0].viewing = true;
      }
    });
    setCards([...tempCards]);
  }

  return (
    <IonPage>
      <IonContent>
        <TopSection currentCard={cards[0].id} />
        <div className="cardContainer">
          {
            cards.map(card => (
              <div  key={card.id} onClick={() => setCurrentCard(card.id)}>
                <Card data={card} />
              </div>
            ))
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
