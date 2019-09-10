<template>
  <div>
    <vue-numeric-input  v-model="value" :min="1" :max="10" :step="1"></vue-numeric-input>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input';
    export default {
        components: {
            VueNumericInput
        },
        data(){
            return{
                value: 1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>