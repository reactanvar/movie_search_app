let SearchInput = document.querySelector("input");
let Searchbtn = document.querySelector("button");
let value = SearchInput.value
let Results = document.querySelector('.results')
let apiKey = `157206e8`;
let body = document.querySelector('body')

async function searchMovie(){
   
        if(SearchInput.value != ''){
            let res = await fetch(`https://omdbapi.com/?s=${SearchInput.value}&page=1&apikey=fc1fef96`);
        let jsonApi = await res.json();
        Results.innerHTML = " "
        jsonApi.Search.forEach(movie => {
            console.log(movie);
            let div = document.createElement('div');

            div.innerHTML = `
           <div class=" card overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
           <!-- Image -->
                <figure class="relative">
                    <img src=${movie.Poster} alt="card image"
                        class="aspect-video w-full" />
                    <figcaption class="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-slate-900">
                        <h3 class="text-lg font-medium ">${movie.Title}</h3>
                        <p class="text-sm opacity-75"> ${movie.Type} ${movie.Year}</p>
                    </figcaption>
                </figure>
            </div>
           `
            Results.append(div);
        });
        }
    
}

SearchInput.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        searchMovie()
    }
})

Searchbtn.addEventListener("click", function(){
    searchMovie()
})