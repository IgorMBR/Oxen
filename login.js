        var senha = "9080";
        var nome = "igorpae";

        
        function login(){

            var tentativa = document.getElementById("password").value;
        
        if(tentativa == senha) 
            alert("Logado");
        else
            alert("Nome ou senha incorretos");
        }  