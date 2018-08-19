<template>
    <main>
    <h1>{{ categoryDisplayName }}</h1>
    <Preview />
    <div class="PreviewGroup">
        <Preview />
        <Preview />
        <Preview />
    </div>
    </main>
</template>

<script>
import Preview from '../components/Preview';

export default {
  name: 'Category',
  components: { Preview },
  computed: {
    categoryDisplayName() {
      return this.$route.params.categoryName.replace(/-/g, ' ');
    },
  },
};
</script>

<style scoped>
    .PreviewGroup > div {
        margin: 0 1% 0;
    }

    h1 {
        color: var(--dark-blue);
        text-transform: capitalize;
    }
</style>