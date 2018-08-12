<template>
  <div class="preview">
      <img class="featured-image" src="https://loremflickr.com/300/200/"/>
      <p class="preview-title dark-blue-text">Title</p>
      <p>You've got to learn to fight the temptation to resist these things. Just let them happen. I guess that would be considered a UFO. A big cotton ball in the sky. Talent is a pursued interest. That is to say, anything you practice you can do. Maybe there's a happy little bush that lives right there.</p>
  </div>
</template>

<script>
export default {
  name: 'Preview',
};
</script>

<style scoped>
.preview {
    /* width: 98%;
    margin: 0 auto; */
}

.preview-title {
    font-weight: 800;
}

.featured-image {
    width: 100%;
    display: block;
    margin: 0 auto;
}
</style>
