<template>
  <div class="book-container">
    <div class="book-name">
      <!-- Attached a click event to change the boolean value of 'showDetails' -->

      <h2 @click="showDetail = !showDetail">{{ book.title }}</h2>
      <div class="icons">
        <span
          class="material-icons available"
          v-if="book.available"
          @click="bookStatus"
          >check_circle</span
        >
        <span class="material-icons not-available" v-else @click="bookStatus"
          >highlight_off</span
        >
        <span class="material-icons edit" @click="redirect(book.id)">edit</span>

        <!-- The click event will trigger delBook function and also pass book id as an argument -->

        <span class="material-icons delete" @click="delBook(book.id)"
          >delete</span
        >
      </div>
    </div>

    <!-- Following div will only display when 'showDetails' is true -->
    <transition name="display">
      <div class="details" v-if="showDetail">
        <p>Author : {{ book.details.author }}</p>
        <p>Genre : {{ book.details.genre }}</p>
        <p>{{ book.details.about }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SingleBook",
  props: ["book"], // Registering the 'book' props send from the parent component

  data() {
    return {
      showDetail: false, // This value is false by default, if true then display details of book
      url: "http://localhost:3000/books/" + this.book.id,
    };
  },

  methods: {
    // The following function will delete the book item from json file and emit a custom event with
    // a parameter which is the id of the book to the parent component

    delBook(id) {
      fetch(this.url, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          this.$emit("deleteBook", id);
        }
      });
    },

    // This function when triggered will change the book available value locally first then send a
    // fetch -- PATCH request to upadet the json file

    bookStatus() {
      this.book.available = !this.book.available;
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ available: this.book.available }),
      }).then((response) => console.log(response));
    },

    redirect(id) {
      return this.$router.push({ name: "EditBook", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.book-container {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 2px solid #fff;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.book-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-name h2 {
  color: #817fff;
}

.details {
  color: #fff;
}

.book-name h2 {
  font-size: 2.2rem;
  cursor: pointer;
}

.details p {
  font-size: 1.6rem;
  letter-spacing: 0.15rem;
}

.icons span {
  font-size: 2rem;
  cursor: pointer;
}
.material-icons {
  margin-left: 2rem;
}

.available,
.not-available {
  font-size: 1.3rem;
}

.available {
  color: green;
}

.not-available {
  color: red;
}

.material-icons.edit {
  color: rgb(0, 174, 255);
}

.material-icons.delete {
  color: rgba(214, 5, 5, 0.664);
}

.display-enter-from,
.display-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.display-enter-active,
.display-leave-active {
  transition: 0.5s ease;
}
</style>