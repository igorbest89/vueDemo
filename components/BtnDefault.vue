<template>
    <button type="button" class="btn-custom def-btn">{{ text }}
        <img v-if="icon" :src="`${icon}`" class="def-btn-icon" alt=">">
    </button>
</template>

<script>
    export default {
        props: ['text', 'icon']
    }
</script>

<style lang="sass" scoped>
.def-btn
    color: #fff
    border-radius: 17px
    padding: 8px 65px
    box-shadow: 3px 5px 10px 0px rgba(54, 54, 54, 0.7)
    background: -moz-linear-gradient(90deg, #04b1ff 0%, #049fff 100%)
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049fff), color-stop(100%, #04b1ff))
    background: -webkit-linear-gradient(90deg, #04b1ff 0%, #049fff 100%)
    background: -o-linear-gradient(90deg, #04b1ff 0%, #049fff 100%)
    background: -ms-linear-gradient(90deg, #04b1ff 0%, #049fff 100%)
    background: linear-gradient(0deg, #04b1ff 0%, #049fff 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#049fff', endColorstr='#04b1ff',GradientType=0 )
    border: none
    border-bottom: 5px solid #1592e6
    text-transform: uppercase
    font-size: 26px
    font-weight: 700
    text-shadow: 1px 1px #0072BF
    text-align: center
    white-space: nowrap
    .def-btn-icon
        position: relative
        right: -20px
</style>