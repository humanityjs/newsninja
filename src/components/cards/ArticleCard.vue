<template>
  <div class="card card-blog">
    <div class="card-image">
      <a href="#">
        <img class="img rounded" :src="article.urlToImage || defaultImg">
      </a>
    </div>

    <div class="card-body">
      <div style="max-height: 195px; overflow: hidden;">
        <h6 class="category text-primary">{{article.source.name}}</h6>

        <h5 class="card-title">
          <a target="_blank" id="news-link" :href="article.url">{{article.title}}</a>
        </h5>
        <p class="card-description">
          {{article.description}}
        </p>
      </div>
      <div class="card-footer">
        <div class="author">
          <img src="@/assets/img/ussr.png" alt="..." class="avatar img-raised">
          <span>{{article.author || 'Unkown Author'}}</span>
        </div>
          <div class="stats stats-right">
          <i class="now-ui-icons ui-2_favourite-28"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/img/default.jpg'
export default {
  data() {
    return {
      defaultImg
    }
  },
  props: {
    article: {
      type: Object
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  max-width: 300px;
  margin-right: 2px;
  margin-left: 2px;

  .card-image {
    img {
      height: 199px;
      width: 100%;
    }
  }

  .card-body {
    height: 255px;
    white-space: wrap; 
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;

    .card-description {
      max-height: 80px;
      overflow: hidden;
      word-wrap: ellipsis;
      white-space: wrap; 
      text-overflow: ellipsis;
      margin-bottom: 0px;
    }

    .card-footer {
      bottom: 10px;
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .author {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          width: 100px;
          height: 19px;
          word-wrap: wrap;
          overflow: hidden;
        }
      }
    }
  }
  #news-link:hover, #news-link:focus {
    border-bottom: none;
    opacity: .8;
  }

  @media only screen and (max-width: 430px) {
    max-width: 400px;
  }
}
</style>