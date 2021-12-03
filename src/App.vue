<template>
  <Teleport to="body">
    <MenuModal v-if="menuModalOpen"/>
  </Teleport>
  <div class="page-wrapper font-primary">
    <PageHeader />
    <WelcomeSection />
    <AboutSection id="about"/>
    <ExperienceSection id="experience"/>
    <KeywordsSection />
    <ProjectSection id="works"/>
    <ContactSection id="contact"/>
    <PageFooter />
  </div>
</template>

<script>
import MenuModal from '@/components/MenuModal'
import PageHeader from '@/components/PageHeader'
import WelcomeSection from '@/components/WelcomeSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import KeywordsSection from '@/components/KeywordsSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'
import PageFooter from '@/components/PageFooter'
import { mapState } from 'pinia'
import { applicationStore } from '@/store/application'

export default {
  name: 'App',
  components: {
    MenuModal,
    PageHeader,
    WelcomeSection,
    AboutSection,
    ExperienceSection,
    KeywordsSection,
    ProjectSection,
    ContactSection,
    PageFooter
  },
  computed: {
    ...mapState(applicationStore, ['menuModalOpen'])
  }
}
</script>

<style lang="scss">
:root {
  --red: #f82013;
  --black: #000;
  --white: #fff;
  --light-gray: #efefed;
  --padding-x: 1rem;
  @include md {
  --padding-x: 2rem;
  }
  @include xl {
  --padding-x: 3rem;
  }
}
body {
  background: var(--light-gray);
  &.no-scroll{
    position:fixed;
    overflow:hidden;
    padding-right: 17px;
  }
}
hr {
  border-color: #000;
}
section {
  // grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-columns: repeat(12, 1fr);
}
.page-wrapper {
  padding: 0 var(--padding-x);
  min-width: 300px;
  max-width: 1920px;
  margin: auto;
}
.stretch-to-edge {
  width: calc(100% + 2 * var(--padding-x));
  margin-left: calc(-1 * var(--padding-x));
}
.text-red {
  color: var(--red)
}

.fade-x-left-enter-from,
.fade-x-left-leave-to {
  opacity: 0;
  transform: translateX(-10px) ;
}

.fade-x-right-enter-from,
.fade-x-right-leave-to {
  opacity: 0;
  transform: translateX(10px) ;
}

.fade-x-left-enter-active,
.fade-x-left-leave-to,
.fade-x-right-enter-active,
.fade-x-right-leave-to {
  transition: opacity 0.3s, transform 0.5s;
}
</style>
