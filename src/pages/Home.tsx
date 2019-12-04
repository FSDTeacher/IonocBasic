import { IonContent, IonHeader, IonPage, IonTitle, 
  IonToolbar, IonButton,IonImg } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
const { Camera } = Plugins;
const [photo, setPhoto] = useState();
const takePhoto = async () => {
const image = await Camera.getPhoto({
quality: 90,
allowEditing: true,
resultType: CameraResultType.Uri
});
setPhoto(image.webPath);
};
return (
<IonPage>
<IonHeader>
 <IonToolbar>
   <IonTitle>Ionic Blank</IonTitle>
 </IonToolbar>
</IonHeader>
<IonContent className="ion-padding">
 <IonImg src={photo} />
 <IonButton onClick={takePhoto}>Take Photo</IonButton>
</IonContent>
</IonPage>
);
};

export default Home;