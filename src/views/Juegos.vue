<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button>

                    </ion-back-button>
                </ion-buttons>
                <ion-title>Juegos</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-paddiong">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Juegos de {{ this.$route.params.consola }}</ion-card-title>
                    <ion-card-subtitle>Listado de video juegos</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list lines="none">
                        <template v-for="(juego, i) in juegos" :key="i">
                            <ion-item v-if="juego.consola===this.$route.params.consola">
                                <ion-thumbnail>
                                    <img :src="juego.imagen" alt="portada" />
                                </ion-thumbnail>
                                <ion-label>
                                    {{ juego.nombre }}
                                </ion-label>

                                <ion-button fill="clear" color="danger" @click="showAlert(true, i)">
                                    <ion-icon :icon="heart"></ion-icon>
                                </ion-button>

                                <ion-button fill="clear" color="warning" @click="showToast(true, i)">
                                    <ion-icon :icon="addCircle"></ion-icon>
                                </ion-button>
                            </ion-item>

                            <br />
                    

                            <ion-alert header="Notificación"
                            sub-header="Exito!"
                            message="Juego añadido a favoritos"
                            :is-open="alertState[i]"
                            @didDismiss="showAlert(false, i)"/>

                            <ion-toast header="Notificación" sub-header="Exito!"
                            message="Juego añadido a favoritos" :is-open="toastState[i]"
                            @didDismiss="showToast(false, i)" :duration="2000"/>

                        </template>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, 
    IonBackButton, IonTitle, IonContent, IonCard, 
    IonCardHeader, IonCardSubtitle, IonCardContent,
    IonList, IonThumbnail, IonLabel, IonItem, IonCardTitle, 
    IonIcon, IonAlert, IonButton, IonToast
} from '@ionic/vue'
import { heart, addCircle} from 'ionicons/icons'
export default {
    name: 'juego',
    components: {
        IonPage, IonHeader, IonToolbar, IonButtons, 
        IonBackButton, IonTitle, IonContent, IonCard, 
        IonCardHeader, IonCardSubtitle, IonCardContent,
        IonList, IonThumbnail, IonLabel, IonItem, IonCardTitle, 
        IonIcon, IonAlert, IonButton, IonToast
    },
    data(){
        return{
            heart, addCircle,

            alertState:[],
            toastState:[],

            juegos:[
                {
                    consola:'PlayStation', nombre:'assassins creed rogue', imagen:'/psjuego1.jpg'
                },
                {
                    consola:'PlayStation', nombre:'call of duty modern warfare', imagen:'/psjuego2.jpg'
                },
                {
                    consola:'PlayStation', nombre:'Counter-Strike 2', imagen:'/psjuego3.jpg'
                },
            ]
        }
    },
    methods:{
        showAlert(state, i){
            this.alertState[i] = state
        },

        showToast(state, i){
            this.toastState[i] = state
        }
    }
}
</script>

<style>

</style>