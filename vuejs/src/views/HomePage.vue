<template>
  <div>
    <Slider />
    <ChooseArea />
    <CoursesArea />
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseArea from '@/components/ChooseArea.vue'
import CoursesArea from '@/components/CoursesArea.vue'
import Slider from '@/components/Slider.vue'

export default {
  title: 'San Lorenzo College of Davao, Inc.',
  components: {
    ChooseArea,
    CoursesArea,
    Slider
  }
}
</script>
