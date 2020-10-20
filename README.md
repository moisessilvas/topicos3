# Atividade 1


Essa atividade tem como finalidade abordar as funções básicas de registro, atualização, edição e exclusão de itens de um banco de dados não relacional. Para isso, é necessário que você tenha algumas ferramentas instaladas na sua máquina:

  - [Kitematic](https://kitematic.com/);
  - [Insomnia](https://insomnia.rest/download/);
  - [MongoDB](https://www.mongodb.com/);
  - IDE (preferencialmente [Visual Studio Code](https://code.visualstudio.com/))
  - [Docker Quickstart Terminal](https://docs.docker.com/toolbox/toolbox_install_windows/);
  - [VirtualBox](https://www.virtualbox.org/).

## Iniciando os trabalhos!

Com todos os itens instalados acima, abra o Kitematic e inicie o processo de criação de uma máquina virtual no VirtualBox. 

>Esse processo é automático após o clique, e costuma demorar alguns minutos nas porcentagens finais. Espere algo em torno de 5 minutos.

Para checar se tudo ocorreu bem, abra o VirtualBox e veja se há uma máquina chamada default e essa em execução. Tendo isso, essa primeira parte está concluída.

Agora, abra o Docker Quickstart Terminal e, quando carregado, digite o seguinte comando:

```sh
$ docker run --name trc3 -p 27017:27017 -d -t mongo
```

Com isso, haverá o download de algumas dependências. Aguarde um pouco e, com o processo finalizado, abra o Kitematic. Será exibido uma tela de login, mas não é necessário cadastro, você pode pular esse processo, mediante clique no botão indicado.

No menu lateral terá uma indicação `trc3`. Clique nele. Serão abertas algumas informações a respeito desse contêiner. O principal será o `access URL`. Usaremos essa informação posteriormente. Guarde-a, será importante.

Abra o MongoDB e, no local reservado, coloque o endereço `mongodb://accessURL/`, em que `accessURL` veio da penúltima configuração. Pronto, boa parte das nossas configurações iniciais estão prontas.

Abra a IDE preterida, e instale, na pasta reservada à aplicação, o `yarn` ou `npm`. Sugerimos o uso do `yarn` pois ele compila e instala as dependências e bibliotecas mais rapidamente.

> Certifique que o Node.js esteja instalado na máquina para que o comando `npm install` funcione.

Com isso feito, inicie a aplicação usando o comando `yarn dev`.

### O nosso banco de dados

O nosso banco de dados é formado por estes itens:

  - Código da disciplina, representado por `codigo`;
  - Nome da disciplina, representado por `nome`;
  - Departamento da disciplina, representado por `departamento`;
  - Quantidade de créditos da disciplina, representado por `QtdCreditos`;
  - Turma, representada por `turma`;
  - Professor da disciplina, representado por `professor`.

Todos eles são requeridos, e foram criadas regras para que, durante o cadastro, todas essas informações sejam realmente registradas. 

### Testando a aplicação

Agora é hora de testarmos a nossa aplicação. Para isso, usaremos os métodos `GET`, `POST`, `PUT` e `DELETE`. Primeiramente, vamos alimentar o nosso banco de dados usando o `POST`. 

#### POST

Clique no botão + presente ao lado da caixa de diálogo filter do Insomnia, e adicione uma nova requisição. Digite `Disciplina` e escolha por `POST`.

Feito isso, será aberta uma página. No campo de `URL`, digite `localhost:3000/disciplina`. Mais abaixo, em Body, clique na seta que nos mostra mais opções e escolha `JSON`. Há um exemplo de como preencher esse corpo, sem que haja erros, a seguir.

```javascript
[{
	"codigo": 394832,
	"nome": "Gerência de Redes",
	"professor": "Chefe",
	"departamento": "ENE",
	"QtdCreditos": 4,
	"turma": "A"
}]
```

Feito isso, clique em `Send`. 
>Atenção! Tome cuidado no preenchimento, principalmente com as aspas. Errar a formatação do JSON implicará em erros que não são provinientes do desenvolvimento.

#### GET

Clique no botão + presente ao lado da caixa de diálogo filter do Insomnia, e adicione uma nova requisição. Digite `Disciplina` e escolha por `GET`.

Feito isso, será aberta uma página. No campo de `URL`, digite `localhost:3000/disciplina`. Feito isso, clique em `Send`. Dessa forma, será mostrada uma janela com as seguintes informações. Note que ela condiz com o último registro feito, acrescidas de outras informações, como data de criação.

```javascript
[{
	"_id": "5f8e23fedfba3443448735bb",
    "codigo": 394832,
    "nome": "Gerência de Redes",
    "professor": "Chefe",
    "departamento": "ENE",
    "QtdCreditos": 4,
    "turma": "A",
    "createdAt": "2020-10-19T23:40:46.234Z",
    "updatedAt": "2020-10-19T23:40:46.234Z",
    "id": 7
}]
```

#### PUT

Clique no botão + presente ao lado da caixa de diálogo filter do Insomnia, e adicione uma nova requisição. Digite `Disciplina` e escolha por `PUT`.

Feito isso, será aberta uma página. No campo de `URL`, digite `localhost:3000/disciplina/id`, em que `id` é o identificador da disciplina. 

>Atenção! Este identificador não é o código da disciplina.

Mais abaixo, em Body, clique na seta que nos mostra mais opções e escolha `JSON`. Há um exemplo de como preencher esse corpo, sem que haja erros.

```javascript
[{
	"nome": "Circuitos Elétricos",
	"professor": "Rax"
}]
```

Feito isso, clique em `Send`. Volte para a requisição `GET` e note que as informações foram realmente atualizadas. Elas estarão mais ou menos assim:

```javascript
[{
	{
    "_id": "5f8e23fedfba3443448735bb",
    "codigo": 394832,
    "nome": "Circuitos Elétricos",
    "professor": "Rax",
    "departamento": "ENE",
    "QtdCreditos": 4,
    "turma": "A",
    "createdAt": "2020-10-19T23:40:46.234Z",
    "updatedAt": "2020-10-20T00:05:46.577Z",
    "id": 7
  }
}]
```

#### DELETE

Clique no botão + presente ao lado da caixa de diálogo filter do Insomnia, e adicione uma nova requisição. Digite `Disciplina` e escolha por `DELETE`.

Feito isso, será aberta uma página. No campo de `URL`, digite `localhost:3000/disciplina/id`, em que `id` é o identificador da disciplina. 

>Atenção! Este identificador não é o código da disciplina.

Feito isso, clique em `Send`. Volte para a requisição `GET` e note que as informações foram realmente apagadas. Elas não estarão mais lá.
