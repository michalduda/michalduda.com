<template>
  <div class="contact-status">
    <div class="contact-status__indicator"></div>
    <span class="font-xs">
      Available for freelance projects
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contact-status {
  display: flex;
  align-items: center;
}
.contact-status__indicator {
  background: var(--red);
  width: .5em;
  height: .5em;
  border-radius: 50%;
  margin-right: .5em;
}
</style>
