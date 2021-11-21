<template>
  <div class="page-wrapper">
    <WelcomeSection />
    <AboutSection />
    <ExperienceSection />
  </div>
</template>

<script>
import WelcomeSection from './components/WelcomeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'

export default {
  name: 'App',
  components: {
    WelcomeSection,
    AboutSection,
    ExperienceSection
  }
}
</script>

<style lang="scss">
body {
  background: #efefed;
  font-family: 'Karla', sans-serif;
}
hr {
  border-color: #000;
}
.font-secondary {
  font-family: 'Space Grotesk', sans-serif;
}

.page-wrapper {
  padding: 0 30px;
}
:root {
  --red: #f82013;
  --black: #000;
  --white: #fff;
}
</style>
