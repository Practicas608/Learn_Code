window.onload=function(){
    $('#onload').fadeOut();
    $('#body').removeClass('hidden');
}

// sidebar toggle

const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});


 var c = 0;
                        function pop() {
                            if(c == 0){
                                document.getElementById("box").style.display = "block";
                                c = 1;
                            } else{
                                document.getElementById("box").style.display = "none";
                                c = 1;
                            }
                        }