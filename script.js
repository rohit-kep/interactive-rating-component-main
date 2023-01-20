let ratingInput;

const container = Array.from(document.getElementsByClassName('container')),
submit = document.getElementById('submit'),
rating = document.getElementById("rating");


for(const element of Object.values(rating?.children)){ 
  element.onclick = ()=>{
    if(ratingInput !== element.textContent){
        for(const element2 of Object.values(rating?.children)){
            if(ratingInput === element2.textContent){
                element2.style.background ="var(--LightDarkBlue)";
                element2.style.color = 'var(--MediumGrey)';
            }
        }
    }
    ratingInput = element.textContent;
    element.style.background = 'var(--Orange)';
    element.style.color = "var(--White)";
  }
}


submit.onclick = ()=>{
    container[0].style.display = 'none';
    container[1].style.display = "flex";
    document.getElementById('ratingDialog').textContent = `You selected out ${ratingInput} of 5`;

}