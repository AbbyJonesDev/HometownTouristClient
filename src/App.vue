<template>
  <div id="app" class="wrapper">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import './styles/global.css';
import Navigation from './components/navigation/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>
