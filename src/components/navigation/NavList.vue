<template>
<div>
    <i class="fas fa-bars fa-2x" @click="toggleMobileMenu"></i>
    <!-- <i class="fas fa-search fa-2x"></i> -->
    <ul :class="{ showMobile: showMobileMenu }">
        <li @click="toggleCategories">Categories</li>
        <li>Events</li>
        <li>Authors</li>
    </ul>
    <CategoryList v-if="showCategories" />
</div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import CategoryList from './CategoryList';

  export default {
    name: 'NavList',
    components: {
      CategoryList,
    },
    computed: {
      ...mapState('nav', {
        showMobileMenu: state => state.showMobileMenu,
        showCategories: state => state.showCategories,
      }),
    },
    methods: {
      ...mapMutations('nav', [
        'toggleMobileMenu',
        'toggleCategories',
      ]),
    },
  };
</script>

<style scoped>
    ul {
        display: none;
        list-style-type: none;
        padding: 0; 
        text-align: center;
        font-weight: 800;
        font-size: 1.5rem;
    }

    ul.showMobile {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--blue);
    }

    li {
        padding: 1rem 0;
        color: var(--white, white);
    }

    i {
        color: var(--white);
        position: absolute;
        top: 10px;        
        z-index: 10;
    }

    i.fa-bars {
        left: 10px;
    }

    i.fa-search {
        right: 10px;
    }

    @media screen and (min-width: 600px) { 
        i {
            display: none;
        }

        ul {
            display: inherit;
        }
    }
</style>


