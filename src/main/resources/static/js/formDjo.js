var Selecionado = document.querySelector(".form-check-input");
var precatorioSim = document.querySelector("#radioPrecatorioSim");
var precatorioNao = document.querySelector("#radioPrecatorioNao");
var benef = document.querySelector("#radioBenef");
var repres = document.querySelector("#radioRepres");
var sisTrib = document.querySelector("#radioSisTrib");
var alvaraSim = document.querySelector("#radioAlvaraSim");
var alvaraNao = document.querySelector("#radioAlvaraNao");

document.getElementById("boxPrecatorioAlvara").style.display = "none";

function botoesForms(eventCall) {
//    console.log(eventCall)
    document.getElementById("btnPrcSemAlvBnf").style.display = "none";
    document.getElementById("btnPrcComAlvBnf").style.display = "none";
    document.getElementById("btnPrcSemAlvRpr").style.display = "none";
    document.getElementById("btnPrcComAlvRpr").style.display = "none";
    document.getElementById("btnPrcSisTrib").style.display = "none";
    document.getElementById("btnDmsDepJudBnf").style.display = "none";
    document.getElementById("btnDmsDepJudRpr").style.display = "none";
    document.getElementById("btnDepJudSisTrib").style.display = "none";
    if (benef.checked){
        document.getElementById("btnPrcSemAlvBnf").style.display = "block";
        document.getElementById("btnPrcComAlvBnf").style.display = "block";
        document.getElementById("btnDmsDepJudBnf").style.display = "block";
    }
    if (repres.checked){
        document.getElementById("btnPrcSemAlvRpr").style.display = "block";
        document.getElementById("btnPrcComAlvRpr").style.display = "block";
        document.getElementById("btnDmsDepJudRpr").style.display = "block";
    }
    if (sisTrib.checked){
        document.getElementById("btnPrcSisTrib").style.display = "block";
        document.getElementById("btnDepJudSisTrib").style.display = "block";
    }
    if (precatorioSim.checked){
        document.getElementById("btnDmsDepJudBnf").style.display = "none";
        document.getElementById("btnDmsDepJudRpr").style.display = "none";
        document.getElementById("btnDepJudSisTrib").style.display = "none";
        if (alvaraSim.checked){
            document.getElementById("btnPrcSemAlvBnf").style.display = "none";
            document.getElementById("btnPrcSemAlvRpr").style.display = "none";
        }
        if (alvaraNao.checked){
            document.getElementById("btnPrcComAlvBnf").style.display = "none";
            document.getElementById("btnPrcComAlvRpr").style.display = "none";
        }
    }
    if (precatorioNao.checked){
        document.getElementById("btnPrcSemAlvBnf").style.display = "none";
        document.getElementById("btnPrcComAlvBnf").style.display = "none";
        document.getElementById("btnPrcSemAlvRpr").style.display = "none";
        document.getElementById("btnPrcComAlvRpr").style.display = "none";
        document.getElementById("btnPrcSisTrib").style.display = "none";
    }

}

precatorioNao.addEventListener("change", function(evento){
        if (evento.target.checked){
            document.getElementById("boxPrecatorioAlvara").style.display = "none";
            document.getElementById("radioAlvaraSim").checked = false;
            document.getElementById("radioAlvaraNao").checked = false;
        }
        botoesForms(evento);
    }
)

precatorioSim.addEventListener("change", function(evento){
        if (evento.target.checked){
            document.getElementById("boxPrecatorioAlvara").style.display = "block";
        }
        botoesForms(evento);
    }
)

benef.addEventListener("change", function(evento){botoesForms(evento)})
repres.addEventListener("change", function(evento){botoesForms(evento)})
sisTrib.addEventListener("change", function(evento){botoesForms(evento)})
alvaraSim.addEventListener("change", function(evento){botoesForms(evento)})
alvaraNao.addEventListener("change", function(evento){botoesForms(evento)})


