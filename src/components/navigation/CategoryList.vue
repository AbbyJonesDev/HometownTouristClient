<template>
  <div id="CategoryList">
    <i @click="toggleCategories" class="fas fa-angle-left fa-2x" />
    <ul>
        <li v-for="(category) in categories" :key="category.text">
            <router-link :to="{ name: 'Category', params: { categoryName: category.linkTo }}">
                {{ category.text }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CategoryList',
  methods: {
    ...mapMutations('nav', [
      'toggleCategories',
    ]),
  },
  data() {
    return {
      categories: [
        {
          text: 'Art/Museums',
          linkTo: 'art-and-museums',
        },
        {
          text: 'Entertainment',
          linkTo: 'entertainment',
        },
        {
          text: 'Food and Drink',
          linkTo: 'food-and-drink',
        },
        {
          text: 'History',
          linkTo: 'history',
        },
        {
          text: 'Music',
          linkTo: 'music',
        },
        {
          text: 'Nature/Outdoors',
          linkTo: 'nature-and-outdoors',
        },
        {
          text: 'Neighborhoods',
          linkTo: 'neighborhoods',
        },
        {
          text: 'Shopping',
          linkTo: 'shopping',
        },
        {
          text: 'Sports',
          linkTo: 'sports',
        },
        {
          text: 'Theater',
          linkTo: 'theater',
        },
      ],
    };
  },
};
</script>

<style scoped>
  #CategoryList {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--blue);   
  }

  ul {
      list-style-type: none;
      padding: 0; 
      text-align: center;
  }

  li {
      padding: 1rem 0;
      font-weight: 700;
      font-size: 1.5rem;
  }

  li a {
    text-decoration: none;
    color: var(--white, white);      
  }

  i {
      color: var(--white);
      position: absolute;
      top: 10px;    
      left: 10px;    
      z-index: 1000;
  }

  @media screen and (min-width: 600px) { 
    #CategoryList {
        position: inherit;
        z-index: 1;
    }
  }
</style>
