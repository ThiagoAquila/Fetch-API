window.onload = function () {
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const excluir = document.querySelector("#excluir");

  cadastar.addEventListener("click", function(){
    let formdata = new FormData ();
    formdata.append('nome', `${nome.value}`);
    formdata.append('nome', `${curso.value}`);

    fetch ("https://www.jussimarleal.com.br/exemplo_api/pessoa",{
      body: formdata,
      method: "post",
      mode: 'cors',
      cache: 'default',

    }).then(()=>{
       alert("Registro efetuado com Sucesso");
       limparCampos();
        }
      );
  });
  //metodo que lista uma pessoa
  buscar.addEventListener("click", function(){
    fetch (`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      body: formdata,
      method: "get",
      mode: 'cors',
      cache: 'default',
    }).then(response => {
      nome.value = data['nome'];
      curso.value = data['curso'];
    })
  })

  //metodo para alterar os dados
  alterar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
  {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: json.stringify({'nome':`${nome.value}`,
    'curso':`${curso.value}`,
    }),
    mode: 'cors',
    cache: 'default'
    }
    ).then(alert("Registro alterado"));
  });

 // metodo para excluir os dados de uma pessoa
  excluir.addEventListener("click", function () {
    fetch (`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      method: "delete",
      mode: 'cors',
      cache: 'default',
    }).then(()=>{
    alert("Registro excluido com Sucesso");
    limparCampos();
    })
  })

  
  //metodo que limpa os campos
  function limparCampos (){
    nome.value = "";
    curso.value = "";
  }


}
