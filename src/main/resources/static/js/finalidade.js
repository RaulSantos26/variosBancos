        function FinalidadeDiv(sel){
          var opt = sel.options[sel.selectedIndex];
          var elem = opt.dataset.final
        console.log(elem);
        if(elem == 0){
        document.getElementById('outros').style.display = "none";
        document.getElementById('bb').style.display = "none";
        document.getElementById('diversas').style.display = "none";
        } else if (elem == 1) {
        document.getElementById('outros').style.display = "block";
        document.getElementById('bb').style.display = "none";
        document.getElementById('diversas').style.display = "none";
        } else if (elem == 2) {
        document.getElementById('outros').style.display = "none";
        document.getElementById('bb').style.display = "block";
        document.getElementById('diversas').style.display = "none";
        } else if (elem == 3) {
        document.getElementById('outros').style.display = "none";
        document.getElementById('bb').style.display = "none";
        document.getElementById('diversas').style.display = "block";
        }

        }


//                function FinalidadeDiv(elem){
//                if(elem.value == 1){
//                document.getElementById('outros').style.display = "none";
//                document.getElementById('bb').style.display = "none";
//                document.getElementById('diversas').style.display = "none";
//                } else if (elem.value == 2) {
//                document.getElementById('outros').style.display = "block";
//                document.getElementById('bb').style.display = "none";
//                document.getElementById('diversas').style.display = "none";
//                } else if (elem.value == 3) {
//                document.getElementById('outros').style.display = "none";
//                document.getElementById('bb').style.display = "block";
//                document.getElementById('diversas').style.display = "none";
//                } else if (elem.value == 4) {
//                document.getElementById('outros').style.display = "none";
//                document.getElementById('bb').style.display = "none";
//                document.getElementById('diversas').style.display = "block";
//                }
//
//                }