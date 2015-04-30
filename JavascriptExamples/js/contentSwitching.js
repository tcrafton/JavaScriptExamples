(function (){  //IIFE
    var selectaInput = document.getElementById('choose'),
        panels = document.querySelectorAll('.options'),
        currentSelect,
        i;

    function clearShow() {
        for (i = 0; i < panels.length; i++) {
            panels[i].classList.remove('show');
        }
    }

    function addShow(showThis) {
        var el = document.getElementsByClassName(showThis);
        for (i = 0; i < el.length; i++){
            el[i].classList.add('show');
        }
    }

    function vUpdate(){
        currentSelect = selectaInput.value;

        clearShow();

        addShow(currentSelect);
    }

    selectaInput.addEventListener('change', vUpdate);

})();  // close IIFE