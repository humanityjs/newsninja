<template>
  <div class="landing-page">
    <div class="group">
      <NewsBar title="Top Headlines" :showSelect="true"/>
      <div class="articles">
        <Loader v-if="loading" />
        <ArticleCard v-else v-for="(article, index) in headlines" :key="index" :article="article" />
      </div>
      <Pagination name="headlines" :count="3" @pageChanged="getNewPage" />
    </div>
    <div class="group">
      <NewsBar title="Business Headlines" :showSelect="false"/>
      <div class="articles">
        <Loader v-if="businessLoading" />
        <ArticleCard v-else v-for="(article, index) in business" :key="index" :article="article" />
      </div>
      <Pagination name="business" :count="3" @pageChanged="getNewPage" />
    </div>
    <div class="group">
      <NewsBar title="Sports Headlines" :showSelect="false"/>
      <div class="articles">
        <Loader v-if="sportsLoading" />
        <ArticleCard v-else v-for="(article, index) in sports" :key="index" :article="article" />
      </div>
      <Pagination name="sports" :count="3" @pageChanged="getNewPage" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCard from '@/components/cards/ArticleCard.vue'
import NewsBar from '@/components/NewsBar.vue'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'
import { getHeadlines, getSources, getCategory } from '@/api/news'
export default {
  data() {
    return {
      headlinesPage: 1,
      pages: null,
      businessPage: 1,
      sportsPage: 1
    }
  },
  components: {
    ArticleCard,
    NewsBar,
    Pagination,
    Loader
  },
  async mounted() {
    await getHeadlines()
    await getSources()
    await getCategory('business')
    await getCategory('sports')
  },
  computed: {
    headlines() {
      if (!this.$store.state.loading) {
        return this.$store.getters.getSeries(this.headlinesPage, 'headlines')
      }
      return []
    },
    business() {
      if (!this.$store.state.businessLoading) {
        return this.$store.getters.getSeries(this.businessPage, 'business')
      }
      return []
    },
    sports() {
      if (!this.$store.state.sportsLoading) {
        return this.$store.getters.getSeries(this.sportsPage, 'sports')
      }
      return []
    },
    ...mapState({
      businessLoading: state => state.businessLoading,
      sportsLoading: state => state.sportsLoading,
      loading: state => state.loading
    })
  },
  methods: {
    getNewPage(value) {
      this[`${value.name}Page`] = value.value
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
