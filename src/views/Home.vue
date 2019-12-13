<template>
  <div class="home">
    <Calendar msg="Landing page for Min Side"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/MinSide/Calendar/Calendar.vue'

export default {
  name: 'home',
  components: {
    Calendar
  }
}
</script>
