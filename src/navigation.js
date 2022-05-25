searchFormBtn.addEventListener("click", ()=>{
    location.hash= "#search="+searchFormInput.value;
});

trendingBtn.addEventListener("click", ()=>{
    location.hash= "#trends";
});

arrowBtn.addEventListener("click", ()=>{
    location.hash= "#home";
});


window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
    console.log({location})

    if (location.hash.startsWith("#trends")) {
        trendsPages();
    } else if (location.hash.startsWith("#search=")){
        serachPages();
    } else if (location.hash.startsWith("#movie=")){
        moviesPages();
    } else if (location.hash.startsWith("#category=")){
        categoriesPages();
    } else {
        homePage();
    }  
    
    document.documentElement.scrollTop = 0;
}

function homePage() {

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    //likedMoviesSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPages() {

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  //likedMoviesSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  //obsteniendo caegry id del hash
  const [_, categoryData] = location.hash.split("=");
  const [categoryId, categoryName] = categoryData.split("-");
  
  headerCategoryTitle.innerHTML = categoryName;
  
  getMoviesByCategory(categoryId);
    
}

function moviesPages() {

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  //likedMoviesSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');

  //obsteniendo id de la pelicula
  const [_, movieId] = location.hash.split("=");
  
  getMovieById(movieId);
 
}

function serachPages() {

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  //likedMoviesSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  //obsteniendo busqueda del hash
  const [_, query] = location.hash.split("=");

  getMoviesBySearch(query);
   
}

function trendsPages() {

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    //likedMoviesSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  
    headerCategoryTitle.innerHTML="Tendencias";
    
    getTrendingMovies();
   
}
