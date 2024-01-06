let partMovies =  movies.slice(0,52)
let elMovList = document.querySelector('.movie__list')
fnRender(partMovies)

function fnRender(data){
  elMovList.innerHTML = ''
data.forEach((item)=>{
  console.log(item);
  let newLi = document.createElement('li')
  newLi.innerHTML = ` 
  <div class="card" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.Categories}</p>
    <p class="card-text">${item.movie_year}</p>
    <p class="card-text">${item.imdb_rating}⭐</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-warning"  target="_blank">watch movie</a>
  </div>
</div>  ` 
  elMovList.appendChild(newLi)
})
}


function fnYear(value){
 if(value == 'new'){
   fnRender(partMovies.sort((a,b)=> b.movie_year - a.movie_year));
 } else if(value == 'old'){
  fnRender(partMovies.sort((a,b)=> a.movie_year - b.movie_year));
}
}

function fnRating(value){
  if(value == 'max'){
    fnRender(partMovies.sort((a,b)=> b.imdb_rating - a.imdb_rating));
  } else if(value == 'min'){
   fnRender(partMovies.sort((a,b)=> a.imdb_rating - b.imdb_rating));
 }
 }

 function fnCategory(value){
  if(value == 'comedy'){
    fnRender(partMovies.sort((a,b)=> b.Categories - a.Categories));
  } else if(value == 'family'){
   fnRender(partMovies.sort((a,b)=> a.Categories - b.Categories));
 }
 }

 function fnSearch(event){
  event.preventDefault()
  let  val = event.target.search.value
  fnRender(partMovies.filter((item) => item.Title.toString().
  toLowerCase(  ).includes(val.toLowerCase())));
 }

 function fnReset(value){
 if(value == ''){
  fnRender(partMovies)
 }
 }
