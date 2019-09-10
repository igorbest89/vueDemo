<template>
    <!-- totalinfo begin -->
    <div class="totalinfo">
        <div class="totalinfo__left">

            <button type="button" class="btn-custom totalinfo__btn" @click="redirection">

                <!-- icon -->
                <img src="/img/icons/arrow-left.svg" class="totalinfo__arrow" alt="<">
                <!-- icon -->

                Continue Shopping

            </button>
        </div>

        <div class="totalinfo__right">
            <ul class="carttotal">
                <li class="carttotal__item">
                    <span class="carttotal__bold text-left">Subtotal:</span>
                    <span class="text-right">${{ totalinfo.subtotal }}</span>
                </li>
                <li class="carttotal__item">
                    <span class="carttotal__bold text-left">Shipping:</span>
                    <span class="text-right">{{ totalinfo.shipping }}</span>
                </li>
                <li class="carttotal__item carttotal__item--topborder">
                    <span class="carttotal__bold text-left">Total:</span>
                    <span class="text-right">${{ totalinfo.total }}</span>
                </li>
            </ul>
        </div>
        <div class="terms">

            <p class="terms__title">
                Monthly Billing Terms & Conditions
            </p>

            <p class="terms__text">
                If you selected “subscribe and save” billing option, you will be immediately shipped a 30 day supply of Crave and charged $39.95 plus your selected shipping method.  You will be shipped an ongoing 30 day supply every thirty days after the purchase date and your card will automatically be charged $39.95 (plus free shipping), unless you cancel.  You can cancel your membership anytime by calling our customer care team at 541-209-0064 or emailing care@nulevelresearch.com.  Our Customer Care team is open M-F 8am to 5pm PST.
            </p>

        </div>
    </div>
    <!-- totalinfo end -->
</template>

<script>
    export default {
        data(){
            return{
                totalinfo: {
                    subtotal: 429.75,
                    shipping: 'Free',
                    total: 429.75
                }
            }
        },
        methods:{
            redirection(){
                window.location.href = '/'
            }
        }
    }
</script>

<style lang="sass" scoped>
.totalinfo
    font-size: 0px
    &__btn
        font-weight: 700
        position: relative
        padding: 10px 20px 10px 30px
        font-size: 17px
    &__arrow
        position: relative
        left: -10px
    &__left,
    &__right
        display: inline-block
        font-size: 16px
        vertical-align: top
    &__left
        float: left
    &__right
        max-width: 150px
        width: 100%
        float: right
.carttotal
    &__item
        margin-bottom: 10px
        &--topborder
            border-top: 1px solid #cecece
            padding-top: 5px
        .text-right
            float: right
    &__bold
        color: #363636
        font-size: 16px
        font-weight: 700
        line-height: 1

.terms
    font-size: 12px
    color: #363636
    clear: both
    &__title
        margin-bottom: 20px

</style>