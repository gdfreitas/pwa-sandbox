# Progressive Web Apps (PWAs)

PWA é um termo que define aplicações web que utilizam um conjunto de tecnologias e técnicas com o intuito de aprimorar a experiência dos usuários, fazendo-os sentirem que estão utilizando aplicações nativas.

Por **aprimorar** entende-se que não deixará de funcionar em browers que ainda não tem suporte à alguma funcionalidade, mas sim, melhorará a experiência do usuário que utiliza browsers mais modernos, sem problemas de compatibilidade.

## Funcionalidades

- Acesso Offline
- Enviar _Push Notifications_
- Obter a localização geográfica do usuário
- Acesso ao hardware do dispotivo, como câmera
- Sincronização de dados em segundo plano
- "Instalação" do app na homescreen do dispositivo

## Principais características

- Devem ser **confiáveis**, carregar rápido e prover acesso a funcionalidades offline
- Devem ser **rápidas**, não apenas no carregamento, deve reagir à interações do usuário, deve fornecer animações, deve ser capaz de acessar recursos do dispositivo nativo de forma intuitiva
- Devem ser **atraentes**, oferecendo recursos como notifições por push, mesmo que o App esteja fechado.

## Web Apps vs Native Apps

### Qual é mais utilizada?

- Web Apps detém **13%** dos usuários
- Native Apps detém **87%** dos usuários

#### Por quê a preferência por nativo?

- Push Notifications trazem o usuário de volta ao app
- Ícone de acesso na homescreen facilita o acesso
- Possui acesso à funcionalidades nativas do dispositivo, como câmera
- Tem a possibilidade de trabalhar offline

_Plot twist: Todas essas funcionalidades estão disponíveis por meio de PWAs atualmente.._

_Fonte: _2015, comScore Mobile__

#### E agora? Você realmente quer desenvolver um App nativo?

- Aprender mais de uma linguagem? (Android/iOS), A soluçõa talvez seria React Native?
- 80% do tempo gasto de usuários em aplicativos nativos, estão nos 3 maiores Apps da sua Store (Google, Facebook, Whastapp, etc)
- Quantidade de instalações de novos apps por mês no celular de um usuário comum? Resposta: 0.

## Alcance de usuários

- Native Apps: **3.3 milhões de usuários**
- Web Apps: **8.9 milhões de usuários**

_Estatisticas providas pela comScore Mobile Metrix, com usuários maiores de 18 anos, na américa do norte em 2015._

### Quais são os "pros" de Web Apps?

- Não requer tempo gasto por instalação
- Busca por ela no google, encontre, e a use.
- Favorite, e você poderá voltar a hora que quiser.

### Native Apps vs Web Apps vs PWAs

||Capacidade|Alcance|
|---:|:----:|:----:|
|Native Apps|Acesso à recursos do dispositivo, capacidade de lidar com o sistema operacional|Top 3 Apps ganham, o restante perde|
|Web Apps|Acesso a recursos do dispositivo limitado|Alcance alto|
|Progressive Web Apps|**Acesso a recursos do dispositivo, capacidade de lidar com o sistema operacional**|**Alcance alto**|

## Showcases PWAs

### Twitter Lite Platform [Acessar](https://mobile.twitter.com)

O Twitter está aproveitando a tecnologia PWA para sua plataforma Twitter Lite. Essa se tornou a experiência mobile padrão em Abril de 2017 para qualquer usuário que fizer login no Twitter (e isso chega a aproximadamente 100 milhões por dia)

Os benefícios do uso do Twitter Lite sobre o aplicativo tradicional? Ocupa menos espaço para armazenamento, 3% a menos de espaço em disco para ser exato na versão para Android. Também confere grande economia de uso de dados. O Twitter creditou isso com um aumento de 75% no número de Tweets, um aumento de 65% nas páginas por sessão e uma redução de 20% nas taxas de rejeição.

**Artigo:** [https://developers.google.com/web/showcase/2017/twitter](https://developers.google.com/web/showcase/2017/twitter)

### Uber [Acessar](https://m.uber.com)

Quando você pensa sobre o Uber, você tende a pensar sobre a disrupção da tecnologia e, com certeza, eles também foram rápidos na adoção do PWA. A PWA da Uber, permite que você faça um passeio sem baixar e instalar o aplicativo móvel tradicional da Uber. É absolutamente pequeno, com o serviço principal ocupando apenas 50 kb, o que significa que ele é carregado rapidamente, mesmo nas conexões mais lentas. A tecnologia PWA que a Uber usou significa que ela pode carregar em apenas dois segundos, o que fará maravilhas em seus rankings do Google (já que o algoritmo do google adora um site de carregamento rápido).

**Mais no artigo:** [https://eng.uber.com/m-uber/](https://eng.uber.com/m-uber/)

### Instagram [Acessar](https://www.instagram.com/)

Se você visitar o Instagram no navegador do seu celular agora, estará acessando-o por meio de um PWA. Anteriormente, tínhamos a falta de funcionalidades, só podendo navegar na linha do tempo ou no perfil. Agora o PWA se parece com o aplicativo tradicional e também oferece algumas funcionalidades extras. Você pode fazer o upload de fotos como faria normalmente, mas não fornece tudo. Você não poderá marcar usuários ou usar histórias do Instagram. O Instagram ainda prefere que você faça o download do aplicativo.

### Financial Times [Acessar](http://app.ft.com)

Isso mesmo, um dos maiores sites de notícias aproveitou ao máximo as Progressive Web Apps. E eles fizeram isso para oferecer aos clientes uma experiência melhor. O Financial Times PWA se concentra nos recursos off-line da tecnologia para permitir que os clientes leiam artigos mesmo quando estão off-line. Eles também mantiveram a cor tradicional do papel. É instantaneamente reconhecível e a experiência é fantástica para os usuários.

_... Mais PWAs podem ser encontradas através deste site: [https://appsco.pe/](https://appsco.pe/)_

## Desenvolvimento

### Lighthouse

Lighthouse é uma ferramenta open-source para medir performance e qualidade de web apps por meio de testes sobre a página que geram um relatório no final com os indicadores que podem ser melhorados.

Página da extensão pode ser encontrada em: [Google Chrome Store - Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR)

### Principais Pilares

- [**Service Workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API): em sua essencia atua como um servidor de proxy, situando-se entre uma aplicação web, o browser e a rede (quando disponível). É usado principalmente para prover experiência _offline_, interceptando requisições à rede e tomando ações baseado se o usuário tem ou não acesso rede. Também provê acesso à _push notifications_ envio de notificações ao usuário e _background sync APIs_ (sincronização de dados em background) como enviar requisições assim que a conexão for reestabelecida.
- [**Application Manifest**](https://developer.mozilla.org/pt-BR/docs/Web/Manifest): permite que a aplicação se torne "instalável* na homescreen a partir da aplicação desta funcionalidade.
- **Responsive Design**: layouts atrativos/usáveis em todos os dispositivos
- **Geolocation API**: permite acessar a localização do usuário
- **Media API**: permite acessar dispositivo de câmera e microfone

### Web App Manifest

O manifest do web app fornece informações sobre o aplicativo em formato JSON, serve para que o web app seja apresentado ao usuário de forma semelhante a um aplicativo nativo, por exemplo, ser instalado na tela inicial de um dispositivo, fornecendo aos usuários acesso mais rápido e uma experiência mais rica.

Incluem informações como nome, autor, ícone(s), versão, descrição e lista de todos os recursos necessários, etc.

#### Compatibilidade

[Can I use Web App Manifest?](https://caniuse.com/#feat=web-app-manifest)

#### Properties em `manifest.json`

```js
{
  "name": "Swaty - Activity Tracker", // Nome completo do App (para Splashscreens)
  "short_name": "Sweaty", // Nome abreviado do App (para Ícones)
  "start_url": "/index.html", // Qual página carregar ao inicializar
  "scope": ".", // Quais páginas estão incluídas na "PWA", pode ser utilizado para especificar determinadas funcionalidades somente
  "display": "standalone", // Como deve ser exibida a App, com URL? sem URL? (ex: "minimal-ui") (default: standalone)
  "background_color": "#fff", // Cor que será exibida no background do App ou em Splashscreen durante o carregamento
  "theme_color": "#3F51B5", // Cor tema do App, aparece no toolbar, taskmanager, etc
  "description": "", // Descreve sua aplicação, é utilizado quando precisa descrever a App (ex: adicionar aos favoritos)
  "dir": "ltr", // Direção de leitura do App (ltr = left to right)
  "lang": "en-US", // Define a linguagem padrão do App
  "orientation": "portrait-primary", // Qual será a orientação padrão ao abrir a App (ex: "landscape")
  "icons": [ // Permite configurar um conjunto de ícones (Ex: homescreen)
    {
      "src": "/src/images/icons/app-icon-48x48.png", // Path do ícone
      "type": "image/png", // Image mymetype
      "sizes": "48x48" // Icon size, o navegador escolhe o melhor size para o dispositivo
    },
    {
      "src": "/src/images/icons/app-icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
  ],
  "related_applications": [ // Aplicações **nativas** que podem estar relacionadas, à exemplo, caso a web app em si possua alguma app nativa na store
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    }
  ]
}
```

_Mais detalhes sobre todas as propriedades podem ser vistas aqui: [Web App Manifest @ MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest)_

- [manifest.json @ Mozilla Developer](https://developer.mozilla.org/pt-BR/docs/Web/Manifest)
- [A detailed Web App Manifest Explanation by Google](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
- [MDN Article on the Web App Manifest (includes List of all Properties)](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Web App Manifest - Browser Support](http://caniuse.com/#feat=web-app-manifest)

### Install Banner

Este recurso ajuda a promover a instalação da web app no dispositivo do usuário através de um "pop up" do browser, fornecendo a possibilidade da instalação, em vez do  usuário ter que manualmente ir nas opções e clicar em "add to homescreen"

Alguns critérios são requeridos, como nome da aplicação configurado, ícones, start_url, service workers instalados, servidos sobre o protocolo `https`, etc.

- [Verificar requerimentos atualizados do Chrome](https://developers.google.com/web/fundamentals/app-install-banners/)
- [More about the "Web App Install Banner" (including Requirements)](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/)

### Service Workers

[Introdução a Service Workers @ Google Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=pt-br)

#### O que é?

Um service worker é um script que executa em background, separado da thread responsável pela página da web, possibilitando que instruções sejam executadas feitos em paralelo à interação do usuário.

Atualmente suporta recursos como [notificações de push](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web?hl=pt-br), [sincronização em background](https://developers.google.com/web/updates/2015/12/background-sync?hl=pt-br) e também tem a capacidade de interceptar e gerenciar requisições de rede podendo atuar com cache programático de respostas.

#### Características importantes

- É um [JavaScript Worker](https://www.html5rocks.com/en/tutorials/workers/basics/), portanto não consegue acessar o DOM diretamente. Em vez disso, um service worker se comunica através de mensagens enviadas através da interface `postMessage`;
- É um proxy de rede programável, o que permite controlar requisições;
- É encerrado quando ocioso e reiniciado quando necessário, ou seja, não se pode confiar em estado global destes workers. Para informações que devem ser mantidas entre reinicializações, deve ser utilizado [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
- Utiliza bastante o recurso de Promises, [leia mais sobre aqui](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=pt-br).

#### Eventos

![service worker events](./docs/service_worker_events.png)

- `fetch` o navegador ou a página faz requisições
- `push notifications` service worker recebe uma _web push notification_ de um servidor do browser
- `notification interaction` o usuário interage com a notificação
- `background sync` recebe um evento para de conexão com a internet reestabelecida, podendo efetuar uma sincrozanição de dados
- `service worker lifecycle events` há também eventos conforme o ciclo de vida do worker

#### Lifecycle

![service worker lifecycle](./docs/service_worker_lifecycle.png)

[Referências Developer Mozilla - Using Service Workers - Architecture](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers#Arquitetura_B%C3%A1sica)

#### Quais navegadores suportam? _Compatibilidade_

- [Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Getting Started with Service Workers (don't read too far, there's stuff in there we'll learn later ;-))](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
- [What's the difference between "service workers" and "web workers" in JavaScript?](https://www.quora.com/Whats-the-difference-between-service-workers-and-web-workers-in-JavaScript)

## Por quê suportar acesso offline?

Eventualmente o usuário pode ficar com a conexão ruim ou sem conexão nenhuma.

Exemplo 1: eventos de esportes em estádios, grande quantidade de pessoas no mesmo local.
Exemplo 2: elevadores ou estacionamentos subterrâneos não há conexão durante alguns segundos ou minutos.
Exemplo 3: _"lie-fie"_ conexões wi-fi conectadas, porém péssimas, como pode ser percebido em alguns Access Points publicos.

### Cache API

Pode ser acessado por service workers ou via scripts, permitindo que arquivos possam ser obtidos do cache ao invés da rede.

Formato: `Key: Request` e `Value: Response`

Documentação: [Cache API @ Mozilla Developer](https://developer.mozilla.org/pt-BR/docs/Web/API/Cache)

### Utilizando recursos de cache

- [Great overview over Strategies - the Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
- [Advanced Caching Guide](https://afasterweb.com/2017/01/31/upgrading-your-service-worker-cache/)
- [Mozilla Strategy Cookbook](https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html)

#### Static Caching (pre-caching)

São arquivos pré definidos, sendo eles triviais para a aplicação funcionar, são os que compõe o _app shell_, a base do webapp (index.html, estilos, fontes).

Em `sw.js`

```js
self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker...', event)

  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        console.log('[Service Worker] Pre Caching App Shell')

        // O método "add" obtém o arquivo do servidor e adiciona ao cache
        // (é simular ao combo de fetch + cache.put)
        cache.addAll([
          '/',
          '/index.html',
          '/help/index.html',
          '/src/js/app.js',
          '/src/js/feed.js',
          '/src/js/polyfills/fetch.js',
          '/src/js/polyfills/promise.js',
          '/src/js/material.min.js',
          '/src/css/app.css',
          '/src/css/feed.css',
          '/src/images/main-image.jpg',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ])

      })
      .catch(function (err) {
        console.log(`erro`, err)
      })
  )
})
```

```js
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {

        if (response) {
          console.log('[Service Worker] Found in cache', event.request.url);
          return response;
        }

        // Nota-se aqui que quando não encontra no cache não irá lançar erros (não irá cair num catch)
        console.log('[Service Worker] Fetching from origin', event.request.url);
        return fetch(event.request);
      })
  )
})
```

#### Dynamic Caching

Adiciona dinamicamente _responses_ ao cache, conforme utilização da webapp, via interceptação do `fetch`.

Algumas mudanças foram necessárias no service worker.

```js
var appVersion = 1;
var CACHE = {
  STATIC_NAME: `static-v${appVersion}`,
  DYNAMIC_NAME: `dynamic-v${appVersion}`
}

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker...', event)

  event.waitUntil(
    caches.open(CACHE.STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Pre Caching App Shell')

        // O método "add" obtém o arquivo do servidor e adiciona ao cache
        // (é simular ao combo de fetch + cache.put)
        cache.addAll([
          '/',
          '/index.html',
          '/help',
          '/help/index.html',
          '/src/js/app.js',
          '/src/js/feed.js',
          '/src/js/polyfills/fetch.js',
          '/src/js/polyfills/promise.js',
          '/src/js/material.min.js',
          '/src/css/app.css',
          '/src/css/feed.css',
          '/src/images/main-image.jpg',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ])

      })
      .catch(function (err) {
        console.log(`erro`, err)
      })
  )
})

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker.s..', event)
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE.STATIC_NAME && key !== CACHE.DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        }))
      })
  )
  return self.clients.claim();
})

self.addEventListener('fetch', function (event) {
  // console.log('[Service Worker] Intercepting request for something...', event.request.url);

  // Mantém o comportamento padrão
  // event.respondWith(fetch(event.request));

  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          console.log('[Service Worker] Found in cache', event.request.url);
          return response;
        }

        console.log('[Service Worker] Fetching from origin', event.request.url);
        return fetch(event.request)
          .then(function (originResponse) {
            caches.open(CACHE.DYNAMIC_NAME)
              .then(function (cache) {
                cache.put(event.request.url, originResponse.clone())
                return originResponse;
              })
          })
          .catch(function (err) {

          });
      })
  )
})
```

- [About Cache Persistence and Storage Limits](https://jakearchibald.com/2014/offline-cookbook/#cache-persistence)
- [Learn more about Service Workers](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API)
- [Google's Introduction to Service Workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)

#### Promises

- [Introduction to Promises (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Introduction to Promises (Google)](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

#### Fetch API

- [An Overview on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Detailed Usage Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Detailed Usage Guide (and comparison with XMLHttpRequest)](https://davidwalsh.name/fetch)
- [Introduction to Fetch (Google)](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)


### IndexedDB and Dynamic Data

Qual a diferença entre **Dynamic Caching** e **Caching Dynamic Content**?

- **Dynamic Caching** utiliza a [Cache API](https://developer.mozilla.org/pt-BR/docs/Web/API/Cache) para armazenar **Responses** (respostas) de requests assim que forem realizadas e interceptadas pelo service worker, seja por meio de pré-caching ou conforme solicitado durante o uso do app, os tipos de arquivos são geralmente arquivos de scripts, estilos e imagens.

- **Caching Dynamic Content** utiliza o [IndexedDB](https://developer.mozilla.org/pt-BR/docs/IndexedDB) para armazenar tipos de dados geralmente dinâmicos, que alteram frequentemente, sendo tipicamente no formato JSON, mas também pode ser XML.

- [IndexedDB Browser Support](http://caniuse.com/#feat=indexeddb)
- [IDB on Github](https://github.com/jakearchibald/idb)
- [IndexedDB explained on MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Alternative to IDB](http://dexie.org/)

### Responsive Design

- [Responsive Design Basics by Google](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)
- [Responsive Design Patterns (Google)](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns)
- [Responsive Images (Google)](https://developers.google.com/web/fundamentals/design-and-ui/responsive/images)
- [Using CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Responsive Images (MDN)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Responsive Images in CSS](https://css-tricks.com/responsive-images-css/)
- [Using CSS Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

### Background Synchronization

- [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)
- [A Basic Guide to Background Sync](https://ponyfoo.com/articles/backgroundsync)
- [More about Firebase Cloud Functions](https://firebase.google.com/docs/functions/)

### Web Push Notifications

- [More about Web Push by Google](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)
- [More about VAPID](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)
- [More about VAPID by Google](https://developers.google.com/web/updates/2016/07/web-push-interop-wins)
- [The web-push npm Package](https://github.com/web-push-libs/web-push)
- [More about showNotification (display Notifications from Service Workers)](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification)
- [The Notification API](https://developer.mozilla.org/en/docs/Web/API/notification)
- [The Push API](https://developer.mozilla.org/en/docs/Web/API/Push_API)

### Native Device Features

- [More about the Media Stream API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints)
- [More about getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [How to use geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)

### Service Worker Management with **Workbox**

- [Official webpage/ docs](https://workboxjs.org/)
- [Configuring Workbox](https://workboxjs.org/reference-docs/latest/module-workbox-build.html#.Configuration)
- [More about Workbox Strategies](https://workboxjs.org/reference-docs/latest/module-workbox-sw.Strategies.html#main)
- [Workbox Github page](https://github.com/GoogleChrome/workbox)
- [Workbox Overview by Google](https://developers.google.com/web/tools/workbox/)

## SPAs and PWAs

- [create-react-app Page](https://github.com/facebookincubator/create-react-app)
- [Angular CLI Github Page](https://github.com/angular/angular-cli)
- [Overview over Angular Service Worker Usage](https://fluin.io/blog/angular-service-worker)
- [PWAs with Angular](https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6)
- [Vue CLI PWA Template Page](https://github.com/vuejs-templates/pwa)
- [More about sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

## Projeto

Em `./social-media-app` está um projeto de webapp para postagens de fotos, assim como o Instagram, para aplicar técnicas de PWA.

Para simular em um dispositivo android, estarei utilizando o dispositivo `Pixel 2` através do Android Emulator do Android Studio. O IP para a máquina de dentro do dispositivo é `10.0.2.2`.

### Modo Desenvolvedor do Dispositivo

Para ativar o modo desenvolvedor no dispositivo Android, deve clicar 7x no "Build Number" que pode ser acessado via _Settings > About > Build Number_

- [Setting up Remote Debugging on Chrome](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)

## Referências

- [Mobile Web vs Native App](https://medium.com/@vivekmadurai/mobile-web-vs-native-app-2651b6b06f4d#targetText=There%20are%20two%20popular%20ways%20to%20build%20mobile%20application.&targetText=We%20all%20know%20users%20are,to%20browsing%20app%20via%20browsers.&targetText=Even%20though%20mobile%20web%20sees,them(right%20side%20graph))
- [The 2015 U.S. Mobile App Report @ comScore](https://www.comscore.com/Insights/Presentations-and-Whitepapers/2015/The-2015-US-Mobile-App-Report)
- [9 Examples of Brilliant Progressive Web Apps (PWAs)](https://www.biggerpicture.agency/insights/9-examples-of-brilliant-progressive-web-apps-pwas)
- [Progressive Web App - The Complete Guide](https://www.udemy.com/progressive-web-app-pwa-the-complete-guide)
