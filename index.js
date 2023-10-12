let getQuote = async () => {
    await fetch('https://api.adviceslip.com/advice').then(res => res.json())
        .then(data => {
            $('.id').text(`Advice #${data.slip.id}`)
            $('.quote').html(`&#8220;${data.slip.advice}&#8221;`)
        })
    
}

$(document).ready(() => {
    getQuote()
    $('.change').on('click', () => {
        getQuote()
    })
})