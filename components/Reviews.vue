<template>
    <div class="carousel">
        <carousel :items="1" :dots="false" :nav="false">

            <div class="carousel__item" v-for="item in slides" :key="`${item.index} ${item.user}`">
                <div class="carousel__img">
                    <img :src="`${item.img}`" :alt="`${item.user}`">
                </div>
                <div class="carousel__info">
                    <h3 class="carousel__user">{{ item.user }}</h3>
                    <p class="carousel__text">{{ item.text }}</p>
                </div>
            </div>

            <template slot="next">
                <svg version="1.1" class="carousel__next" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;"
                    xml:space="preserve">

                    <path fill="#e4e4e4" d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                </svg>
            </template>

            <template slot="prev">
                <svg version="1.1" class="carousel__prev" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;"
                    xml:space="preserve">

                    <path fill="#e4e4e4" d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                </svg>
            </template>


        </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    data(){
        return{
            slides: [
                {
                    user: 'Ariana | Teacher | Cocaine and Nicotine',
                    img: '../img/reviews/Ariana.png',
                    text: ' “I’m completely blown away by the effects of your product. Thank you so much for bringing something this important to the market. I only wish I had it earlier on!” '
                },
                {
                    user: 'Vanessa | Sales Director | Stimulants',
                    img: '../img/reviews/vanessa.png',
                    text: ' Crave™ has not only made me incredibly more productive at work but given me more motivation to push through the distractions and my "Monkey Mind.'
                },
                {
                    user: 'John | Rock Climber | Opiate Pain Killers',
                    img: '../img/reviews/vanessa.png',
                    text: ' "Crave™ is my secret weapon. I pop two every morning after my morning meditation and I just feel more at ease. The intensity of the cravings I get are way down. So happy. '
                }
            ]
        }
    }
}
</script>

<style lang="sass">
.carousel
    max-width: 820px
    margin: 0 auto
    &__img
        max-width: 250px
        margin-right: 45px
        img
            max-width: 100%
    &__img,
    &__info
        display: inline-block
        vertical-align: middle
    &__info
        max-width: 63%
    &__user
        display: inline-block
        font-size: 20px
        font-weight: 700
        color: #363636
        margin-bottom: 15px
    &__text
        font-size: 18px
        color: #363636

@media (max-width: 991px)
    .carousel
        &__img
            display: block
            margin: 50px auto 25px
        &__info
            max-width: 100%
            text-align: center

</style>