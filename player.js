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

function addTipWrapper(tiplates) {
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

function loadTipContent(stepCount, steps) {
    currStep = steps[stepCount]
    if(currStep.action.type=="closeScenario")
        $(".sttip").hide()
    else {
        content = currStep.action.contents['#content']
        $("div[data-iridize-id=content]").html(content)
        $("span[data-iridize-role=stepCount]").text(stepCount+1)
        $("span[data-iridize-role=stepsCount]").text(steps.length-1)
        $(".next-btn").click( function() {
                loadTipContent(stepCount+1, steps)
        })
    }
}

const getJsonpGuide = function(guide) {
    addGuideCss(guide.data.css)
    addTipWrapper(guide.data.tiplates)
    loadTipContent(0, guide.data.structure.steps)
}

window.runGls = function runGls() {
    loadCSS()
    loadGuide()
}