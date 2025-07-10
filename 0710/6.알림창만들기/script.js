function showHide(state) {
  // JS 문법
  // document.getElementById('ab').style.display = state;
  // jQuery 문법
  $('#ab').css('display', state);
}

// function show2() {
//   document.getElementById("ab").style.display = "none";
// 

function show(name) {
  // JS문법
  // document.querySelector('.alert').innerHTML = name

  //jQuery문법
  $('.alert').html(name);
}