
        var windowObjectReference;
        var strWindowFeatures = "toolbar=0,toolbar=no,url=hide,menu=no,copyhistory=no,width=980,height=800";

           function openRequestedPopup() {
            windowObjectReference = window.open("/docpreview", "Documentos Vinculados", strWindowFeatures);
           }
