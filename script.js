const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let movieSection = document.querySelector(".movie-section") 
getMovie(APIURL);

async function getMovie(api){
    let response = await fetch(api);
    let data = await response.json();
    let movie = Math.floor(Math.random() * 10);
    let img = IMGPATH + data.results[movie].poster_path;
    console.log(img)
    showMovie(data)
}

const showMovie = (data)=>{
    movieSection.innerHTML = "";
    data.results.forEach(res => {
        let imagePath = IMGPATH +  res.poster_path
        let movieContainer = document.createElement("div");
        movieContainer.classList.add("movie");
        movieContainer.innerHTML = `
                    <img src="${imagePath}" alt="Movie 1" class="rounded-lg mb-4">
                    <h4 class="font-bold text-lg">${res.original_title}</h4>
                    <p class="text-sm text-gray-600">${res.release_date.split('-')[0]}</p>`;
        movieSection.appendChild(movieContainer);
    });
}

document.querySelector(".trending").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "trending")
    console.log("clicked")
})

document.querySelector(".action").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "action")
    console.log("clicked")
})

document.querySelector(".romance").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "romance")
    console.log("clicked")
})

document.querySelector(".animation").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "animation")
    console.log("clicked")
})

document.querySelector(".marvel").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "marvel")
    console.log("clicked")
})

document.querySelector(".special").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "special")
    console.log("clicked")
})

document.querySelector(".horror").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "horror")
    console.log("clicked")
})

document.querySelector(".english").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "english")
    console.log("clicked")
})

document.querySelector(".netflix").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "netflix")
    console.log("clicked")
})
document.querySelector(".disney").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "disney")
    console.log("clicked")
})

document.querySelector(".comedy").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "comedy")
    console.log("clicked")
})

document.querySelector(".mystery").addEventListener("click",()=>{
    getMovie(SEARCHAPI + "mystery")
    console.log("clicked")
})

document.querySelector("input").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovie(SEARCHAPI + event.target.value)
            console.log(event.target.value)
        }
    }
);