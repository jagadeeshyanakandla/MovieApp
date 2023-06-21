
const API_URL=' https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c3cea3c89056335066fd69cb43ad88e8'

const IMG_PATH=' https://image.tmdb.org/t/p/w1280'


const SEARCH_API=' https://api.themoviedb.org/3/search/movie?api_key=c3cea3c89056335066fd69cb43ad88e8&query="" '

const main=document.getElementById("main");
const form=document.getElementById("form");
const search=document.getElementById("search");




  let getMovies=(url)=>{
      fetch(url).then(response => 
          response.json()
      ) .then((data)=>showMovies(data.results)) 

    
  }

getMovies(API_URL)
 
 function showMovies(movies){
    main.innerHTML=''

 movies.forEach((movie) => {
    const {title,poster_path,vote_average,overview} =movie

   const movieEl=document.createElement('div')
   movieEl.classList.add('movie')

   movieEl.innerHTML=`

   <div class="movie">
   <img src="${IMG_PATH + poster_path} " alt="${title}">
             
   <div class="movie-info">

    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
</div>
  <div class="overview">

   <h3>${overview}</h3>
   
  </div>
</div>`

 
    main.appendChild(movieEl)

 })
}

 function getClassByRate(vote){
    if(vote>=8){
        return 'yellow'
    }
    else if(vote>=6){
        return 'azure'

    }
    else{
        return 'red'
    }
 }

 form.addEventListener('submit',(e) =>{
    e.preventDefault()

    const searchTerm=search.value
    if(searchTerm && searchTerm!=''){
        getMovies(SEARCH_API + searchTerm)
        search.value=''
    }
    else{
        window.location.reload()
    }
 })