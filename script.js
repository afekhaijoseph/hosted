const basicPrice = document.querySelector('.basic-price');
const professionalPrice = document.querySelector('.professional-price');
const masterPrice = document.querySelector('.master-price');

const handleChange = (checkbox) =>{
    if(checkbox.checked == true){
        basicPrice.innerHTML = "19.99";
        professionalPrice.innerHTML = "24.99";
        masterPrice.innerHTML = "39.99";
    }
    else{
        basicPrice.innerHTML = "199.99";
        professionalPrice.innerHTML = "249.99";
        masterPrice.innerHTML = "399.99";
    }
}


// const handleChange = (checkbox) => console.log(checkbox.checked);