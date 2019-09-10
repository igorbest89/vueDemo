<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <a href="/"><img src="/img/NuLevel-Logo-White.png" class="footer__logo" alt="footer-logo"></a>
                <p>Studies covering the effects on</p>
            </div>

            <div class="footer__inner">

                <div class="footer__col">
                    <ul class="footer__list">
                        <li><a href="javascript:void(0)">Cocaine</a></li>
                        <li><a href="javascript:void(0)">Nicotine</a></li>
                        <li><a href="javascript:void(0)">Opiates</a></li>
                    </ul>
                </div>

                <div class="footer__col">
                    <ul class="footer__list">
                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                        <li><a href="javascript:void(0)">Terms & Conditions </a></li>
                        <li><a href="javascript:void(0)">Contact Us</a></li>
                        <li><a href="">Made with <img draggable="false" class="emoji" alt="❤️" src="https://s.w.org/images/core/emoji/11.2.0/svg/2764.svg"> in Oregon</a></li>
                    </ul>
                </div>

                <div class="footer__col">
                    <ul class="footer__payment">
                        <li><img src="/img/payment/MasterCard.svg" alt="Master Card"></li>
                        <li><img src="/img/payment/AmericaExpress.svg" alt="American Express"></li>
                        <li class="visa-icon"><img src="/img/payment/Visa.svg" alt="Visa"></li>
                        <li><img src="/img/payment/Maestro.svg" alt="Maestro"></li>
                    </ul>						
                </div>
            </div>
            <div class="footer__bottom">
                <p>Copyright © 2019 NuLevel. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
.footer
    background: #363636
    padding: 30px 0
    .emoji
        height: 1em
        width: auto
    ul
        height: 120px
    p,a
        color: #fff
        font-size: 17px
    p
        margin: 30px 0px 15px 0px
    &__col
        display: inline-block
        vertical-align: top
        width: 33%
    &__payment
        display: flex
        justify-content: flex-end
        align-items: flex-end
        padding-bottom: 15px
        li
            display: inline-block
            vertical-align: bottom
            max-width: 58px
            margin-right: 30px
            &:last-of-type
                margin-right: 0px
            img
                max-width: 60px
                width: 100%
        .visa-icon
            background: #fff
            border-radius: 4px
            height: 36px
            display: flex
            align-items: center
            justify-content: center
            padding: 0 5px
    &__bottom
        border-top: 1px solid #fff
        padding-top: 20px
        p
            font-size: 18px
            line-height: 1.5
            margin: 0
    &__logo
        max-width: 150px
</style>