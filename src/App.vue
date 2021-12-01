<template>
  <div class="page-wrapper font-primary">
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
:root {
  --red: #f82013;
  --black: #000;
  --white: #fff;
  --padding-x: 1rem;
}
body {
  background: #efefed;
}
hr {
  border-color: #000;
}
section {
  grid-template-columns: repeat(12, 1fr);

}
.page-wrapper {
  padding: 0 var(--padding-x);
}
.stretch-to-edge {
  width: calc(100% + 2 * var(--padding-x));
  margin-left: calc(-1 * var(--padding-x));
}
.text-red {
  color: var(--red)
}
</style>
