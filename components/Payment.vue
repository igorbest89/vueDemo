<template>
<div class="payment-wrap" v-if="billingInfoStep && activeStep === 3">
    <h4 class="step-title">Billing Info</h4>
    <input type="checkbox" id="payment" v-model="ischecked">
    <label for="payment" class="payment__label">Credit Card Payment</label>
    <!-- payment begin -->
    <div class="payment">
        <div class="payment__inner">
            <input type="text" class="base-input" placeholder="•••• •••• •••• ••••" autocomplete="off">
            <div class="payment__bottom">
                <input type="text" class="base-input" placeholder="MM / YYYY" autocomplete="off">
                <input type="text" class="base-input" placeholder="CVC" autocomplete="off">
            </div>
        </div>
    </div>
    <!-- payment end -->
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            ischecked: true
        }
    },
    computed:{
        ...mapState({
            billingInfoStep: 'billingInfoStep',
            activeStep: 'activeStep'
        })
    }
}
</script>

<style lang="sass" scoped>
.payment
    padding: 30px
    background: #eee
    font-size: 16px
    margin-bottom: 30px
    &__inner
        background: #f6f6f6
        padding: 30px
    &__bottom
        font-size: 0px
        input
            margin-bottom: 0px
            display: inline-block
            width: 48.5%
            margin-right: 15px
            &:nth-child(2)
                margin-right: 0
    input
        font-size: 16px
        &::placeholder
            color: #333
    &__label
        font-weight: 700
        color: #000
        position: relative
        &::before
            content: ""
            display: inline-block
            width: 16px
            height: 16px
            border: 2px solid #fff
            box-shadow: 0 0 0 2px #000
            background: #fff
            margin-left: 4px
            margin-right: .5em
            border-radius: 100%
            -webkit-transform: translateY(2px)
            -ms-transform: translateY(2px)
            transform: translateY(2px)
        &:hover
            cursor: pointer

#payment
    display: none
    &:checked
        + label
            &::before
                background: #000

</style>