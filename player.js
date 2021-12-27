function importJquery() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.6.0.js';
    document.head.appendChild(script);
}

function getJsonp() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867';
    document.head.appendChild(script);
}

const __5szm2kaj = function(data) {
    console.log(data);
} 

window.runGls = function runGls() {
    importJquery()
    getJsonp()
    __5szm2kaj()
}