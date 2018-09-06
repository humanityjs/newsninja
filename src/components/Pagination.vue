<template>
  <div class="pagination-cont">
    <ul class="pagination pagination-primary">
      <li v-for="n in count" :class="`page-item ${n === currentPage ? 'active' : ''}`" :key="n">
        <a class="page-link" @click="onPageChange(n)">{{n}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['count', 'name'],
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    onPageChange(value) {
      this.$emit('pageChanged', { name: this.name, value})
      this.currentPage = value
    }
  }
}
</script>


<style lang="scss" scoped>
 .pagination-cont {
   display: flex;
   justify-content: center;
   width: 100%;
 }
</style>
