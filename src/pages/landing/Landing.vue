<template>
  <div class="landing-page">
    <div class="page-title">
      <h2>Top Headlines</h2>
    </div>
    <div class="articles">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
</template>

<script>
import ArticleCard from '../../components/cards/ArticleCard.vue'
export default {
  components: {
    ArticleCard
  }
}
</script>


<style lang="scss" scoped>
.landing-page {
  padding: 40px 30px;

  .page-title {
    h2 {
      font-size: 24px;
    }
  }
}
</style>
