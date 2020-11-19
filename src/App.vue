<template>

  <transition name="router-anim" mode="out-in" enter-active-class="animated fadeIn" >
    <!-- leave-active-class="animated fadeout" -->
   <router-view/>
</transition>
</template>

<script>
export default {
  name: 'app'

}
</script>
