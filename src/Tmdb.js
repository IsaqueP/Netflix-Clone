const API_KEY = '40177fee0a61fa0eb32664724149acbb'
const API_BASE = 'https://api.themoviedb.org/3'

async function basicFetch(endpoint){

  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default{
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213`)
      },
      {
        slug: 'trending',
        title: 'Recomendado para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ] 
  },
  getMovieInfo: async (movieId, type) => {
    /*
      let info = {}

      if(movieId){
        switch(type){
          case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
          default:
        }
      }
    */

    let info = await basicFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`)

    return info
  }
}
