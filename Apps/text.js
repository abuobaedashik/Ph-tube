const  getTimeString=(time)=>{
    const hour = parseInt(time/3600);
    let remainsec =(time%3600)
    const minute =parseInt(remainsec/60);
    const second = remainsec%60;
    return  `${hour}h ${minute} min ${second}sec ago`
}
 console.log(getTimeString(700))