// catagory Load funtion 
const Loadcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => Displaycatagory(data.categories))
    .catch(error=> console.error(Error,"error"));
}

// Display catagory funtion 
const Displaycatagory = (category) => {
    category.map(item => {
        console.log(item.category)

        const btn = document.getElementById("category-btn")
         const button =document.createElement("button")
         button.classList.add('style-btn')
         button.innerText = item.category;
         btn.append(button);
    })
}

// VideosLoad Funtion
const LoadVideo =() => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data=> DisplayVideos(data.videos))
    // .catch(error=>  console.error(Error,"error"));
}

// card demo
// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }

// get time funtion
const  getTimeString=(time)=>{
    const hour = parseInt(time/3600);
    let remainsec =(time%3600)
    const minute =parseInt(remainsec/60);
    const second = remainsec%60;
    return  `${hour}h ${minute} min ${second}sec ago`
}


// DisplayVideos Funtion
const DisplayVideos = videos => {
    videos.map(video => {
        console.log(video)
        const videoAdd =document.getElementById('videos')
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
LoadVideo();