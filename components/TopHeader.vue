<template>
    <div class="topheader">
        <div class="topheader__inner">
          <a href="/" class="topheader__logo"><img src="/img/logo.png" alt="logo"></a>
          <header-steps></header-steps>
      </div>
    </div>
</template>

<script>    

  // This components will have the content for each stepper step.

  export default {
    data(){
      return{

      }
    }
  }
</script>

<style lang="sass" scoped>
.topheader
  position: relative
  background: #363636
  display: block
  padding: 20px 0
  margin-bottom: 40px
  &__logo
    max-width: 140px
    display: inline-block
    width: 100%
    img
      max-width: 100%
  &__inner
      max-width: 1370px
      width: 100%
      margin: 0 auto

</style>