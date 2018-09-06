<template>
  <div class="newsbar">
    <div class="page-title">
      <h2>{{title}}</h2>
    </div>
    <div  v-if="showSelect" class="select-div">
      <span>Select a news source</span>
      <select @change="changeSource" v-model="source" class="selectpicker" data-style="btn btn-primary btn-round btn-block" title="Sources">
        <option selected>All Sources</option>
        <option v-for="(source, index) in sources" :key="index" :value="source.id">{{source.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { getHeadlines } from '@/api/news'
export default {
  mounted() {
    $('.selectpicker').selectpicker('refresh');
  },
  props: ['showSelect', 'title'],
  data() {
    return {
      source: ''
    }
  },
  computed: {
    sources() {
      if (!this.$store.state.sourceLoading) {
        return this.$store.state.sources
      }
    }
  },
  watch: {
    sources() {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 500)
    }
  },
  methods: {
    changeSource() {
      getHeadlines(this.source)
    }
  }
}
</script>


<style lang="scss" scoped>
.newsbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .page-title {
    h2 {
      font-size: 24px;
      margin-bottom: 0px;
    }
  }

  .select-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 300px;
  }

  @media only screen and (max-width: 430px) {
    flex-wrap: wrap;
  }
}
</style>
