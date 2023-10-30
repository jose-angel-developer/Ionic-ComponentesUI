<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
              <ion-title>Header</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <h1>Content</h1>
          </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader,
             IonToolbar, IonTitle,
             IonContent
    } from '@ionic/vue'
    export default{
        name: 'Inicio',
        components:{
            IonPage, IonHeader,
             IonToolbar, IonTitle,
             IonContent
        }
    }
</script>

<style>

</style>
