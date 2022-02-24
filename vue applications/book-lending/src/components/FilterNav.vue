<template>
  <nav class="filter-nav">
      <ul>
          <li @click="filterStatus('all')" :class="{active : activeEl == 'all' }">All</li>
          <li @click="filterStatus('available')" :class="{active : activeEl == 'available'}">Available</li>
      </ul>
  </nav>
</template>

<script>
export default {
  name : 'FilterNav',
  data(){
    return{
        activeEl : 'all'
    }
  },

  methods:{

    // The following function will emit a custom event and a value
    // to the Home component for filtering book items
    
      filterStatus(value){
          this.activeEl = value
          return this.$emit('filterValue', value)
      }
  }
}
</script>

<style scoped>
.filter-nav ul li{
  position: relative;
  display: inline-block;
  margin-right: 4rem;
  margin-top: 10rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.filter-nav ul li.active::after{
position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  content: "";
  /* width: 0.625rem; */
  height: 0.3rem;
  border-radius: 5px;
  background-color: #fff;
}
</style>