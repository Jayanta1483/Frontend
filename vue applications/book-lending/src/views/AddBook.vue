<template>
  <!-- This is the form template for adding new book. Submit event has been attached to the form
   with prevent modifier to prevent the default submit event. Getting data of each field of the form
   by using two way data binding method(v-model). -->
   <transition name="fade" appear>
  <div class="book-form-container" @submit.prevent="bookSubmit">
    <form action="" class="book-form">
      <input type="text" class="" id="book-title" v-model="title" placeholder="Book Title" required autocomplete="off"/><br />
      <input type="text" class="" id="book-author" v-model="author" placeholder="Author Name" required autocomplete="off"/><br />
      <input type="text" class="" id="book-genre" v-model="genre" placeholder="Genre" required autocomplete="off"/><br />
      <textarea v-model="about" name="about-book" id="about-book" cols="30" rows="4" placeholder="Write something about the book" ></textarea>
      <br/>
      <button class="book-form-btn">Add Your Book</button>
    </form>
  </div>
  </transition>
</template>

<script>
export default {
  name: "AddBook",

  data() {
    return {

// Storing all the form data inside the following properites.

      title: "",
      author: "",
      genre: "",
      about: "",
    };
  },

  methods: {

// The submit event triggers this function which collects all the form data and send to 
// the specified end point to update json file and then redirecting with $router object to
// home page after successful update.

    bookSubmit() {
      let bookInfo = {
        title: this.title,
        details: {
          author: this.author,
          genre: this.genre,
          about: this.about,
        },
        available : true
      }

      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookInfo),
      }).then((response) => {
          if(response.ok){
              this.$router.push('/')
          }
      });
    },
  }


};
</script>

<style>

.book-form-container{
  width: 45rem;
  padding: 1.5rem;
  margin-top: 7rem;
  margin-inline: auto;
  border: 2px solid #fff;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;

}

.book-form{
  text-align: center;
  margin-block: 5rem;
}

.book-form input{
  width: 75%;
  padding: 1.3rem 3rem;
  margin-bottom: 3rem;
}

.book-form textarea{
  width: 88%;
  margin-bottom: 7rem; 
}

.book-form input,
 textarea{
  background-color: rgba(0, 0, 0, 0.001);
  border: none;
  border-bottom: 2px solid #817fff;
  font-size: 1.6rem;
  color: #fff;
}

.book-form input,
 textarea:focus{
  /* background-color: rgba(0, 0, 0, 0.001);
  border: none;
  border-bottom: 2px solid orangered;
  font-size: 1.6rem;
  color: #fff; */
  outline: none;
}

.book-form-btn{
  width: 70%;
  padding: 1rem;
  font-size: 2rem;
  border: none;
  color: #fff;
  background-color: #6461f0;
  cursor: pointer;
  transition: 0.4s;
}

.book-form-btn:hover{
  background-color: #7977f8;
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
</style>