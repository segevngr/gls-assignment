function loadGuide() {
    const url = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=guideCallback&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'
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
    $('head').append('<style class="guide-css"></style>');
    $('.guide-css').html(css);

    // For removing jQuery UI dialog default close btn
    $('head').append(
        '<style> .no-close .ui-dialog-titlebar-close {display: none;} </style>'
    )
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
    $("button[data-iridize-role='closeBt']").click(function () {
        $(".sttip").hide()
    });
}

function setTipLocation(step) {
    selector = $(step.action.selector);
    if( !selector.length) {
        selector = document.window;
    }

    $(".sttip").dialog({
        dialogClass: "no-close",
        position: { 
            my: "top",
            at: "bottom",
            of: selector 
        }
    });
}


function setTipData(stepId, stepCount, steps) {
    currStep = null;
    for(let i=0; i<steps.length; i++){
        if(steps[i].id == stepId) {
            currStep = steps[i];
        }
    }

    if (currStep.action.type == "closeScenario") {
        $(".sttip").hide();
        return;
    }

    content = currStep.action.contents['#content'];
    $("div[data-iridize-id=content]").html(content);
    $("span[data-iridize-role=stepCount]").text(stepCount);
    $("span[data-iridize-role=stepsCount]").text(steps.length - 1);

    setTipLocation(currStep);

    nextStepId = currStep.followers[0].next;

    $(".next-btn").unbind("click").click(function () {
        setTipData(nextStepId, stepCount+1, steps);
    });

    if(typeof currStep.next !== 'undefined'){
        nextSelector = currStep.next.selector
        $(nextSelector).unbind("click").click(function () {
            setTipData(nextStepId, stepCount+1, steps);
        });
    }
}

const guideCallback = function (guide) {
    addGuideCss(guide.data.css);
    addTipWrapper(guide.data.tiplates);
    firstStepId = guide.data.structure.steps[0].id;
    setTipData(firstStepId, 1, guide.data.structure.steps);
}

window.runGls = function runGls() {
    loadCSS();
    loadGuide();
}