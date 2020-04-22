import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';

const Menu = () => {
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonItem button>
          <IonLabel>
            Option 1
      </IonLabel>
        </IonItem>
        <IonItem button>
          <IonLabel>
            Option 2
      </IonLabel>
        </IonItem>
        <IonItem detail>
            <IonLabel>
                Otion 3
            </IonLabel>
        </IonItem>
        <IonItem button>
          <IonLabel>
            Otion 4
      </IonLabel>
        </IonItem>
        <IonList>
          <IonItem lines="none" button color="secondary">
            <IonLabel>
              Alert Here
        </IonLabel>
          </IonItem>
          <IonItem button lines="full">
            <IonLabel>
              Another option
        </IonLabel>
          </IonItem>
        </IonList>
    </div >
  );
};

export default Menu;