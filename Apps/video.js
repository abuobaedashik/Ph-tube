// catagory Load funtion 
const Loadcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => Displaycatagory(data.categories))
    .catch(error=> console.error(Error,"error"));
}

// class remove funtion 
const removeBg =()=> {
    const btnAll =document.getElementsByClassName('button-sr')
    console.log(btnAll)
    for (const btn of btnAll) {
        btn.classList.remove('btn-bg')
    }
}

// LoadCategoryVideos Funtion
 const LoadCategoryVideos = (id)=> {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data =>{
        //  all button active class remove
        removeBg();
        //  button active koro
        const Btnsingle =document.getElementById(`btn-${id}`) 
        Btnsingle.classList.add('btn-bg')
        DisplayVideos(data.category)})
    .catch(error=> console.error(Error,"error"));
 }

// Display catagory funtion 
const Displaycatagory = (category) => {
    category.map(item => {
        console.log(item.category)
        const btn = document.getElementById("category-btn")
         const buttonContainer =document.createElement("div")
         buttonContainer.innerHTML=`
         <button id="btn-${item.category_id}" onclick="LoadCategoryVideos(${item.category_id})" class="style-btn text-sm font-bold button-sr">${item.category}</button>
         `
         btn.append(buttonContainer);
    })
}

// VideosLoad Funtion
const LoadVideo =() => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data=> DisplayVideos(data.videos))
    .catch(error=>  console.error(Error,"error"));
}

const  getTimeString=(time)=>{
    const hour = parseInt(time/3600);
    let remainsec =(time%3600)
    const minute =parseInt(remainsec/60);
    const second = remainsec%60;
    return  `${hour}h ${minute} min ${second}sec ago`
}


// DisplayVideos Funtion
const DisplayVideos = videos => {
    const videoAdd =document.getElementById('videos')
    videoAdd.innerHTML=""; 
    if (videos.length===0) {
        videoAdd.classList.remove('grid')
        videoAdd.innerHTML = `
         <div class="min-h-[300px] flex flex-col gap-5 items-center justify-center">
            <img src="./Assets/Icon.png"/>
            <p class="text-3xl text-center text-[#171717] font-bold">Oops!! Sorry, There <br> is no content here</p>
         </div>
        `
        return;
    } else{videoAdd.classList.add('grid')}
    videos.map(video => {
        console.log(video)
        const card =document.createElement('div')
        card.innerHTML=`
            <figure class="h-[200px] relative">
                <img
                src="${video.thumbnail}"
                class="h-full w-full object-cover rounded-md"
                alt="video" />
                ${ video.others.posted_date == 0 ||  video.others.posted_date == 1672656000? "" : `<span class="bg-black text-white rounded-md right-2 bottom-2 absolute px-2 ">${getTimeString(video.others.posted_date)}</span>`}
            </figure>
            <div class="py-2 px-0 flex gap-4">
                <div>
                  <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" />
                </div>
                <div>
                 <h1 class="font-bold">${video.title}</h1>
                 <div class="flex items-center gap-2">
                    <p class="text-gray-500 text-sm">${video.authors[0].profile_name}</p>
                    ${
                      video.authors[0].verified === true ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>' :""
                    }
                 </div>
                 <p class="text-gray-500 text-sm">${video.others.views}</p>
                </div>
            </div>
        `
        videoAdd.append(card);
    })
}
Loadcatagory();
LoadVideo() 
