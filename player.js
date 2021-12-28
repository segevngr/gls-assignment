function loadGuide() {
    const url = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=getJsonpGuide&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'
    $('head').append(
        '<script src=' + url + '></script>'
    )
}

function loadCSS() {
    const url = 'https://guidedlearning.oracle.com/player/latest/static/css/stTip.css'
    $('head').append(
        '<link rel="stylesheet" type="text/css" href=' + url + '></link>'
    )
}

function addGuideCss(css) {
    $('head').append('<style class="guide-css"></style>')
    $('.guide-css').html(css)
}

const getJsonpGuide = function(guide) {
    addGuideCss(guide.data.css)
    addTiplates(guide.data.tiplates)
    // showFirstTooltip(guide.data.structure.steps)
}

function addTiplates(tiplates) {
    console.log(tiplates)
    $('body').append(
        '<div  class="sttip">' +
        '<div class="tooltip in">' +
        '<div class="tooltip-arrow"></div>' +
        '<div class="tooltip-arrow second-arrow"></div>' +
        '<div class="popover-inner">' +
        '</div></div></div>')
    $('.popover-inner').html(tiplates.tip)
    //$('.popover-inner').append(tiplates.hoverTip)
}

window.runGls = function runGls() {
    loadCSS()
    loadGuide()
}