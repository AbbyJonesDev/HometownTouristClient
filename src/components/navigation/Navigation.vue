<template>
    <nav role="navigation">
        <img id="Logo" src="../../assets/Blue_Background.png" alt="The Hometown Tourist">
        <NavList />
  </nav>
</template>

<script>
import NavList from './NavList';

export default {
  name: 'Navigation',
  components: { NavList },
};
</script>


<style scoped>
    nav {
        background-color: var(--blue);        
    }

    #Logo {
        max-width: 80%;
        display: block;
        margin: 0 auto;
        /* grid-area: logo; */
    }

    @media screen and (min-width: 600px) { 
        #Logo {
            max-width: 100%;
        }
    }

</style>

