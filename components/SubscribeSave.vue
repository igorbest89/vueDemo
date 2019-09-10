<template>
<div class="subs_scribe">

    <p class="save_10">Subscribe &amp; Save $10!</p>

    <div class="subs_total">
        
        <div class="subs_one_time side_left one-time" :class="[isActive === 'One-Time' ? 'subs_selected' : '' ]" id="one-time" @click.prevent="choosePlan('One-Time')">
            
            <p class="hder_inner">One-Time</p>
            <p class="price">$49.95</p>
            <p class="list_price">List Price</p>
            
        </div>
        
        <div class="subs_one_time side_right  recurring" :class="[isActive === 'Subscribe' ? 'subs_selected' : '' ]" id="recurring" @click.prevent="choosePlan('Subscribe')">
            
            <p class="hder_inner">Subscribe</p>
            <p class="price">$39.95/mo</p>
            <p class="list_price">Save $10.00</p>
            
        </div>

    </div>

</div>
</template>

<script>
    export default {
        data(){
            return{
                isActive: 'One-Time'
            }
        },
        methods:{
            choosePlan(a){
                console.log(a);
                
                this.isActive = a;
            }
        }
    }
</script>

<style lang="sass" scoped>
.subs_scribe 
    background: #fffde6
    border: 2px dashed #fcf06e
    text-align: center
    display: block
    padding: 10px
    border-radius: 15px

p.save_10 
    font-size: 14px
    margin: 0 0 10px 0
    color: #000
    font-weight: 700

.subs_total 
    /* border: 1px solid #e2e2e2; */
    display: inline-block
    border-radius: 10px
    width: 100%
    cursor: pointer

.subs_total .side_left
    position: relative 
    float: left
    padding: 10px
    width: 50%
    border-top: 1px solid #e2e2e2
    border-bottom: 1px solid #e2e2e2
    border-right: 1px solid #e2e2e2
    border-left: 1px solid #e2e2e2
    border-top-left-radius: 5px
    border-bottom-left-radius: 5px
    background: white

.subs_total .side_right
    position: relative
    float: right
    padding: 10px
    width: 50%
    border-top: 1px solid #e2e2e2
    border-bottom: 1px solid #e2e2e2
    border-right: 1px solid #e2e2e2
    border-left: 1px solid #e2e2e2
    border-top-right-radius: 5px
    border-bottom-right-radius: 5px
    background: white

p.hder_inner 
    font-size: 12px
    color: #000
    font-weight: 700
    margin: 0 0

p.price 
    font-size: 12px
    color: #333
    margin: 0 0

p.list_price 
    font-size: 11px
    color: #666
    margin: 0 0

.subs_selected 
    background: #F7FEDD!important
    border: 1px solid #B6D52C!important
    position: relative


.subs_selected p.list_price 
    color: #C517E9!important

.subs_selected::before 
    content: ""
    position: absolute
    background: #B6D52C url("/img/icons/check.svg") no-repeat center/auto
    top: -10px
    left: 0
    right: 0
    margin-left: auto
    margin-right: auto
    width: 20px
    height: 20px
    border-radius: 100%

</style>