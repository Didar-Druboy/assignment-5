function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getValueById(id){
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}
function pressButton(){
    const modal = document.getElementById('modal');
    modal.click();
    return;
}

