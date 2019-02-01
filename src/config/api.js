function getCategories(){
    return new Promise((resolve, reject)=>{
        fetch('https://data.police.uk/api/crime-categories')
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
    });
}
function getForce(){
    return new Promise((resolve, reject)=>{
        fetch('https://data.police.uk/api/forces')
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
    });
}
function getCrime(valCategory, valForce){
    return new Promise((resolve, reject)=>{
        fetch('https://data.police.uk/api/crimes-no-location?category='+valCategory+'&force='+valForce)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e))
    });
}
export {getCategories, getForce, getCrime}