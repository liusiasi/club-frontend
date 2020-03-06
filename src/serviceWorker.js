export function register(){
    if('serviceWorker' in navigator){
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('../service-worker.js')
            .then(registration => {
                console.log('Server-worker registed'+ registration);
            }).catch(error => {
                console.log('Server-worker register error'+ error);
            })
        })
    }else{
        console.log('no Service Worker');
    }
}