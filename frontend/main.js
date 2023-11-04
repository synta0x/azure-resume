window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementsByID("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}