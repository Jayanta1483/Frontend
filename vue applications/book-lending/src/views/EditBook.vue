<template>
  <transition name="fade" appear>
  <div class="book-form-container" @submit.prevent="bookUpdate">
    <form action="" class="book-form">
      <input type="text" class="" id="book-title" v-model="title" placeholder="Book Title" autocomplete="off"  required/><br />
      <input type="text" class="" id="book-author" v-model="author" placeholder="Author Name" required autocomplete="off"/><br />
      <input type="text" class="" id="book-genre" v-model="genre" placeholder="Genre" required autocomplete="off"/><br />
      <textarea v-model="about" name="about-book" id="about-book" cols="30" rows="5" placeholder="Write something about the book"></textarea>
      <button class="book-form-btn">Edit Your Book</button>
    </form>
  </div>
  </transition>
</template>

<script>
export default {
  name: "EditBook",
  props: ["id"],

  data() {
    return {
      url: `http://localhost:3000/books/${this.id}`,

      title: "",
      author: "",
      genre: "",
      about: "",
    };
  },
// Just after mounting of this component the following function will fetch data and then
// display them using two way data binding

  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.author = data.details.author;
        this.genre = data.details.genre;
        this.about = data.details.about;
      })
      .catch((err) => console.log(err.message));
  },

  methods: {

// This method will update book info and then redirect to home page

    bookUpdate() {
      const bookData = {
        title: this.title,
        details: {
          author: this.author,
          genre: this.genre,
          about: this.about,
        },
      };

      let options = {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(bookData)
      };
      fetch(this.url, options)
      .then(response => {
          if(response.ok){
              this.$router.push('/')
          }
      })
      .catch(err => console.log(err.message))
    },
  },
};
</script>

<style>
</style>