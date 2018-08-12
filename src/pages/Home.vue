<template>
    <main>
    <Preview />
    <h2>Featured:</h2>
    <div class="featured">
        <Preview />
        <Preview />
        <Preview />
    </div>
    </main>
</template>

<script>
import Preview from '../components/Preview';

export default {
  name: 'Home',
  components: { Preview },

};
</script>

<style scoped>
    .featured > div {
        margin: 0 1% 0;
    }

    h2 {
        color: var(--dark-blue);
    }
</style>

