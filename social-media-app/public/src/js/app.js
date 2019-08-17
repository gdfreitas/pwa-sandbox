var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js'/*, { scope: '/help/ ' }*/)
    .then(function () {
      console.log('Service worker registered!')
    })
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
})
