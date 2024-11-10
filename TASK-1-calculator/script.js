function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast(){
    let currentvalue = document.getElementById('display').value;
    document.getElementById('display').value = currentvalue.slice(0,-1);   
}

function appedEliment(){
    document.getElementById('display').value += value;
}

function calculateResult() {
    let result = document.getElementById('display').value;
     try{
        document.getElementById('display').value = eval(result);

    } catch (error){
        document.getElementById('display').value  = 'Error';
    }
}