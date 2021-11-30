<template>
  <div class="page-wrapper font-primary px-4">
    <PageHeader />
    <WelcomeSection />
    <AboutSection />
    <ExperienceSection />
    <KeywordsSection />
    <ProjectSection />
    <ContactSection />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import WelcomeSection from '@/components/WelcomeSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import KeywordsSection from '@/components/KeywordsSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components: {
    PageHeader,
    WelcomeSection,
    AboutSection,
    ExperienceSection,
    KeywordsSection,
    ProjectSection,
    ContactSection,
    PageFooter
  }
}
</script>

<style lang="scss">
body {
  background: #efefed;
}
hr {
  border-color: #000;
}
section {
  grid-template-columns: repeat(12, 1fr);

}

:root {
  --red: #f82013;
  --black: #000;
  --white: #fff;
}
</style>
