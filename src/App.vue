<template>
  <Teleport to="body">
    <MenuModal v-if="menuModalOpen"/>
  </Teleport>
  <Teleport to="body">
    <transition name="fade">
      <NewsFeed v-if="newsFeedOpen"/>
    </transition>
  </Teleport>
  <div class="page-wrapper font-primary">
    <PageHeader />
    <WelcomeSection />
    <AboutSection id="about"/>
    <ExperienceSection id="experience"/>
    <KeywordsSection />
    <ProjectSection id="works"/>
    <BackgroundWrapper>
      <ContactSection id="contact"/>
      <PageFooter />
    </BackgroundWrapper>
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
import BackgroundWrapper from '@/components/BackgroundWrapper'
import NewsFeed from '@/components/NewsFeed'
import { mapState, mapActions } from 'pinia'
import { applicationStore } from '@/store/application'
import { screenStore } from '@/store/screen'

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
    PageFooter,
    NewsFeed,
    BackgroundWrapper
  },
  computed: {
    ...mapState(applicationStore, ['menuModalOpen', 'newsFeedOpen']),
    ...mapState(screenStore, ['breakpoints'])
  },
  methods: {
    ...mapActions(applicationStore, ['closeMobileMenu', 'closeNewsFeed'])
  },
  watch: {
    'breakpoints.md' (oldValue, newValue) {
      if (newValue) {
        this.closeNewsFeed()
      } else {
        this.closeMobileMenu()
      }
    }
  }
}
</script>

<style lang="scss" src="@/styles/app.scss" />
