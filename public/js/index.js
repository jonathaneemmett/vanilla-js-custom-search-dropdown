(function(){
    let searchInput = document.getElementById("myInput");
    let button = document.querySelector('.dropbtn');
    let div = document.getElementById('myDropdown');

    button.addEventListener('click', () => {
        console.log('test')
        div.classList.toggle('show');
    });

    searchInput.addEventListener('keyup', () => {
        filterFunction();
    })

    function filterFunction(){
        let filter = searchInput.value.toUpperCase();
        console.log(filter);

        let a = div.getElementsByTagName("a");

        for(let i = 0; i < a.length; i++){
            let txtValue = a[i].textContent || a[i].innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }
})()
