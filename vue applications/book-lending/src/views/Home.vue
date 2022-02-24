<template>
  <FilterNav @filterValue="filterBook" />

  <!-- In this template displaying each book item using the SingleBook component
 first checking if books has any item the looping through the items. In the SingleBook component tag
 binding the single book item data and sending to the child componet as props -->
  <div class="home" v-if="books.length">
    <transition-group name="fade" tag="div" appear mode="out-in">
    <!-- <div > -->
      <!-- deleteBook is the custom event which triggers deleteBook function  -->

      <SingleBook v-for="book in filteredBooks" :key="book.id" :book="book" @deleteBook="deleteBook" />
    <!-- </div> -->
    </transition-group>
  </div>
</template>

<script>
// Importing SingleBook object from the SingleBook component
import SingleBook from "../components/SingleBook.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  components: {
    SingleBook,
    FilterNav, // Registering the component
  },

  data() {
    return {
      books: [],      //    This is an empty array which will later store all the book data

      value: "all",   //    This is the default value hence after page load all categories of 
                      //     books will be displayed
    }
  },

  // Using the mounted life-cucle hook juster after mounting the component triggering
  // the fetch function to fetch json data on books then storing in books property

  mounted() {
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => this.books = data )
      .catch((err) => console.log(err.message))
  },

  methods: {
    // This function taking the id params will filter the books array and replace the array
    //with filterd value---- it will remove deleted item from the books array

    deleteBook(id) {
      this.books = this.books.filter((item) => {
        return item.id !== id;
      });
    },

    filterBook(value) { this.value = value},
  },


  // This computed function will filter displayed book items depending on the value
  // send from the filterNav component

  computed : {
    filteredBooks(){
      if(this.value === 'available'){
        return this.books.filter(item => item.available )
      }else{
         return this.books
      }

      
    }
  }
};
</script>
<style scoped>
 .home{
   margin-top: 5rem;
   position: relative;
 }


.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active{
  transition: all 0.5s ease;
}

.fade-leave-active{ position: absolute;}

.fade-move{
   transition: all 0.5s ease;
}
</style>
