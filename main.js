$("#myForm").submit(function(event) {
    event.preventDefault()

    $("#result").empty()

    search = $("#search").val()

    client_id = "SybKhkBu9CEek6qf16uG7Az1xEXfOyuY1972sWtiAaM"

    url = "https://api.unsplash.com/search/photos?query=" + search + "&client_id=" + client_id

    $.ajax({
        method: 'GET',
        url: url,
        success: function(data) {
            console.log(data)

            document.getElementById("about").innerHTML = "You have search about '" + search + "'"

            data.results.forEach(photo => {
                $("#result").append(`
                
                <img src="${photo.urls.regular}" class="img-responsive" />

                `)
            })
        }
    })
})