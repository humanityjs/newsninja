<template>
  <div class="landing-page">
    <div class="group">
      <NewsBar />
      <div class="articles">
        <Loader v-if="loading" />
        <ArticleCard v-else v-for="(article, index) in headlines" :key="index" :article="article" />
      </div>
      <Pagination :count="3" @pageChanged="getNewPage" />
    </div>
    <div class="group">
      <NewsBar />
      <div class="articles">

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCard from '@/components/cards/ArticleCard.vue'
import NewsBar from '@/components/NewsBar.vue'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'
import { getHeadlines } from '@/api/news'
export default {
  data() {
    return {
      page: 1,
      pages: null
    }
  },
  components: {
    ArticleCard,
    NewsBar,
    Pagination,
    Loader
  },
  async mounted() {
    getHeadlines()
  },
  computed: {
    headlines() {
      if (!this.$store.state.loading) {
        return this.$store.getters.getSeries(this.page, 'headlines')
      }
      return []
    },
    loading() {
      return this.$store.state.loading
    }
  },
  methods: {
    getNewPage(value) {
      this.page = value
    }
  }
}
</script>


<style lang="scss" scoped>
.landing-page {
  padding: 40px 20px;

  .group {
    .articles {
      min-height: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
