<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
              <ion-title>Consolas</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col size="12" v-for="(consola, i) in consolas" :key="i">
                    
                        <ion-card>
                            <img :src="consola.imagen" >
                            <ion-card-header>
                                <ion-card-title>
                                    {{ consola.nombre }}
                                </ion-card-title>
                                <ion-card-subtitle>Juegos de {{consola.nombre }}</ion-card-subtitle>
                            </ion-card-header>
                            <ion-card-content>
                                {{ consola.descripcion }}
                            </ion-card-content>
                            <ion-button size="small" expand="full" :router-link="`/tabs/juego/${consola.nombre}/${consola.id}`" color="dark">Explorar Juegos</ion-button>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
          </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader,
             IonToolbar, IonTitle,
             IonContent, IonGrid,
             IonRow, IonCol,
             IonCard, IonCardTitle,
             IonCardHeader, IonCardSubtitle,
             IonCardContent, IonButton
    } from '@ionic/vue'
    export default{
        name: 'Consola',
        components:{
            IonPage, IonHeader,
             IonToolbar, IonTitle,
             IonContent, IonGrid,
             IonRow, IonCol,
             IonCard, IonCardTitle,
             IonCardHeader, IonCardSubtitle,
             IonCardContent, IonButton
        },
        data(){
            return{
                consolas: [
                    {
                        id:1, nombre:'PlayStation',
                        descripcion:'Juegos Excclusivos para PlayStation',
                        imagen:'/logo_psp.jpg'
                    },
                    {
                        id:2, nombre:'Xbox Une',
                        descripcion:'Juegos Excclusivos para Xbox Une',
                        imagen:'/logo_xbox.jpg'
                    },
                    {
                        id:2, nombre:'Nintendo',
                        descripcion:'Juegos Excclusivos para Nintendo',
                        imagen:'/nintendo.png'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>
