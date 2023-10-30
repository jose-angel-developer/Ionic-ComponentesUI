<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar>

                <ion-tab-button tab="Inicio" href="/tabs/inicio">
                    <ion-icon :icon="home"></ion-icon>
                    <ion-label>Inicio</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="Consolas" href="/tabs/consolas">
                    <ion-icon :icon="gameController"></ion-icon>
                    <ion-label>Consolas</ion-label>
                </ion-tab-button>

            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
    import {
        IonPage, IonTabs,
        IonRouterOutlet,
        IonTabBar, IonTabButton,
        IonIcon, IonLabel

    } from '@ionic/vue'

    import { home, gameController} from 'ionicons/icons'

    export default{
        name: 'Tabs',
        components:{
            IonPage, IonTabs,
            IonRouterOutlet,
            IonTabBar, IonTabButton,
            IonIcon, IonLabel,
        },
        data(){
            return {
                home, gameController
            }
        }
    }
</script>

<style>

</style>
