import store from '@/store'

export async function getHeadlines() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
  const headlines = await response.json()
  store.commit('setHeadlines', headlines.articles)
  return headlines.articles;
}