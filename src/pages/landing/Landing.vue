<template>
  <div class="landing-page">
    <div class="group">
      <NewsBar />
      <div class="articles">
        <ArticleCard v-for="(article, index) in headlines" :key="index" :article="article" />
        
      </div>
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
    NewsBar
  },
  async mounted() {
    getHeadlines()
  },
  computed: {
    headlines() {
      if (this.$store.state.loaded) {
        return this.$store.getters.getSeries(this.page, 'headlines')
      }
      return []
    }
  }
}
</script>


<style lang="scss" scoped>
.landing-page {
  padding: 40px 20px;

  .group {
    .articles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
