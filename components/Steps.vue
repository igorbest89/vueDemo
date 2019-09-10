<template>
    <div class="steps">
        <ul class="steps__items">
            <li class="steps__item" :class="[activeStep === item.id || activeStep > item.id ? 'active' : '']" v-for="item in steps" :key="item.name">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            steps:[
                {name: 'Select Plan', id: 1},
                {name: 'SHIPPING INFO', id: 2},
                {name: 'BILLING INFO ', id: 3},
                {name: 'FINISH', id: 4}
            ]
        }
    },
    computed:{
        ...mapState({
            activeStep: state => state.activeStep
        })
    },
    methods: {
    } 
}
</script>

<style lang="sass" scoped>
.steps
    float: right
    color: #fff
    &__items
        margin-bottom: 0
        position: relative
        &::after
            content: ''
            position: absolute
            bottom: -60%
            left: 50px
            right: 25px
            height: 2px
            background: #fff
    &__item
        display: inline-block
        color: #fff
        text-transform: uppercase
        font-size: 17px
        font-weight: 700
        text-align: center
        position: relative
        &::after
            content: ""
            position: absolute
            bottom: -23px
            left: 47px
            width: 15px
            z-index: 9
            height: 15px
            border-radius: 50%
            background: #363636
            border: 1px solid #f4bc24
        &.active
            &::after
                background: #f4bc24!important
        &.active + li
            &::after
                background: #fff
        &:nth-child(4)
            padding-left: 25px
    &__item + li
        margin-left: 40px
</style>