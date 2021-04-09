$("input[type='submit']").on('click', function () {
    const movies = $('#movie').val();
    const rating = $('#rating').val();
    $('.movieList').append(`<li>${movies} <span>${rating}/5</span> <button class="remove">Remove</button></li>`);
})

$('.remove').on('click', function () {
    $('.movieList').remove('li');
})