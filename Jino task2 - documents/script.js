
window.onload = function() {

        document.getElementById("cancelled1").style.visibility = "hidden";

        document.getElementById("cancelled2").style.visibility = "hidden";

        var button = document.getElementById('uploadButton1');

        button.onclick = function () {
            var uploader = document.getElementById('imageUpload1');
            uploader.click();
        };

        var button = document.getElementById('uploadButton2');

        button.onclick = function () {
            var uploader = document.getElementById('imageUpload2');
            uploader.click();
        };



        document.getElementById('imageUpload1').onchange = function() {
            document.getElementById("uploadFotoIcon").data = "images/wait.svg";
            setTimeout(function() {
                uploadResultFoto();
            }, 1000)
        };


        function uploadResultFoto() {
            let oneOrzero = Math.round(Math.random());
            if (oneOrzero === 1) {
                document.getElementById("uploadFotoIcon").data = "images/ok.svg"
            } else {
                document.getElementById("uploadFotoIcon").data = "images/upload.svg"
                document.getElementById("cancelled1").style.visibility = "visible"
            }
        };

        document.getElementById('imageUpload2').onchange = function() {
            document.getElementById("uploadAddressIcon").data = "images/wait.svg";
            setTimeout(function() {
                uploadResultAddress();
            }, 1000)
        };


        function uploadResultAddress() {
            let oneOrzero = Math.round(Math.random());
            if (oneOrzero === 1) {
                document.getElementById("uploadAddressIcon").data = "images/ok.svg"
            } else {
                document.getElementById("uploadAddressIcon").data = "images/upload.svg";
                document.getElementById("cancelled2").style.visibility = "visible"
            }
        };



    };


