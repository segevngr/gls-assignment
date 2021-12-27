function importJquery() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadJsonp() {
    var guideUrl = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'
    $.getJSON(guideUrl, function(data) {
        console.log(data)
    })
}

window.runGls = function runGls() {
    importJquery()
    loadJsonp()
}