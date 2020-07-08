<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'HomePage' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'WhyUsPage' }">Why Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OurProgramsPage' }">Our Programs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FacultyStaffPage' }">Faculty and Staff</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ContactUsPage' }">Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
</style>
