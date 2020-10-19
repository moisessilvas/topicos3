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
