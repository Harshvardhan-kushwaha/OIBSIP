function appendEliment(value) {
  document.getElementById("display").value += value;
  
}
function deleteLast() {
  let deleteLast = document.getElementById("display").value;
  document.getElementById("display").value = deleteLast.slice(0, -1);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let result = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(result);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }

  }

