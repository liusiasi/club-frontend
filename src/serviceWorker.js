export function register(){
    if('serviceWorker' in navigator){
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('../service-worker.js')
            .then(registration => {
                console.log('Server-worker registed');
            }).catch(error => {
                console.log('Server-worker register error');
            })
        })
    }else{
        console.log('no Service Worker');
    }
}