$(document).ready(() => {
				
    $('#flashcard').on('click', manageText)
    
})

function manageText() {
    let fc = $(this)
    let question = $('#question')
    let answer = $('#answer')
    
    fc.unbind('click')
        
    flipCard()
    
    if(fc.hasClass('flip-card-1')) {
        question.fadeToggle('slow', () => {
            answer.fadeToggle('slow')
        })	
    } else {
        answer.fadeToggle('slow', () => {
            question.fadeToggle('slow')
        })	
    }
    
    setTimeout(function(){
        fc.on('click', manageText)
    }, 1500);
}

function flipCard() {
    let fc = $('#flashcard')
    
    if(fc.hasClass('flip-card-1') || fc.hasClass('flip-card-2'))
    {
        fc.toggleClass('flip-card-1')
        fc.toggleClass('flip-card-2')	
    }
    else
        fc.addClass('flip-card-1')	
}