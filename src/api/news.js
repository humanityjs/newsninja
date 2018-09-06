import store from '@/store'

export async function getHeadlines(source = '') {
  store.commit('setLoading')
  const response = await fetch(`https://newsapi.org/v2/top-headlines?${source ? `sources=${source}&` : 'country=us&'}pageSize=40&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
  const headlines = await response.json()
  store.commit('setHeadlines', headlines.articles)
  return headlines.articles;
}

export async function getSources() {
  const response = await fetch(`https://newsapi.org/v2/sources?&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
  const sources = await response.json()
  store.commit('setSources', sources.sources)
  return sources.sources;
}

export async function getCategory(category) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=40&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
  const headlines = await response.json()
  const result = { articles: headlines.articles, category}
  store.commit('setcategory', result)
  return headlines.articles;
}