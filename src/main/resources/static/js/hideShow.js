        $(document).ready(function(){
//            $('#blocoCConta').hide();
//            $('#ConteudoDetalhe').hide();
//
//          $("#Tratar").click(function(){
//           $('#Parcelas').hide();
//            $('#DadosResgate').hide();
//            $('#blocoCConta').show();
//            $('#ConteudoDetalhe').show();
//            $('#blocoBusca').hide();
//            $('#DadosResgate').hide();
//            $('#Finalidade').hide();
//            $('#BotãoPagar').hide();
//
//          });
          $("#BotãoCadastrar").click(function(){
            $('#DadosCliente').hide();
            $('#PagAnterior').hide();
            $('#BotãoCadastrar').hide();
            $('#BotãoPagar').show();
            $('#Parcelas').show();
            $('#DadosResgate').show();
            $('#Finalidade').show();
          });

        });