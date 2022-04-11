# Sobre
Baseado no https://www.section.io/engineering-education/registration-form-react.js-firebase/ , eu modifiquei algumas partes do código que achei que estavam erradas, e utilizei do CSS para facilitar minha vida, nesse exemplo não tinha APIs de ViaCep nem a do Fetch, modifiquei isso como um jeito de aprender e relembrar react
## Instalação: 
Primeiro passo, utilize o comando npx create-react-app . dentro do diretório que está o app
![image](https://user-images.githubusercontent.com/79091246/162738134-92bb3e36-8f26-4c31-b6fa-2b84627f90de.png)
 <br> Após, dé um npm start.
<br> Se tudo estiver correto, irá abrir algo do tipo: 
<br> ![image](https://user-images.githubusercontent.com/79091246/162738778-fc2fd0db-fd82-4ccc-9c13-442c83efd7e3.png)

## Firebase 
É necessário acesso ao console do firebase para verificar os dados que são recebidos, veja mais em -> https://firebase.google.com/docs/web/setup?hl=pt-br
<br> Altere o código no firebase.js para o código que você receber.
<br> Após isso, a cada execução do app, ele irá guardar os dados 
<br>![image](https://user-images.githubusercontent.com/79091246/162739319-13198dfb-d36f-40cc-80e9-e8288971314c.png)

##Api
Ao enviar o Cep, configurei o código para que, com a API Fetch eu possa fazer requisições HTTP (usando GET,POST, e outros métodos)
<br>![image](https://user-images.githubusercontent.com/79091246/162739826-f50b3ba1-9231-4d0b-8ca0-58d4d5927a00.png)
