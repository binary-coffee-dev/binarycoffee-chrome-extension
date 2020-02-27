var url_site = "http://localhost:4200";
$('.header-name').attr('href', url_site);

function refresh() {
    $.get("http://localhost:1337/posts")
        .then(function (data) {
            $('.loading').fadeOut(1000, function () {
                $('.loading').addClass('hidden');
                let number = 1;
                data.forEach(element => {
                    let post = document.createElement('div');
                    post.className = "post"

                    let post_number = document.createElement('div');
                    post_number.className = "post-number"
                    post_number.innerHTML = number++;
                    post.appendChild(post_number);

                    let post_link = document.createElement('a');
                    post_link.className = "post-link"
                    post_link.target = 'blanck'
                    post_link.href = url_site + "/post/" + element.name
                    post.appendChild(post_link);

                    let post_name = document.createElement('h3');
                    post_name.className = "post-name"
                    post_name.innerHTML = element.title;
                    post_link.appendChild(post_name);


                    let post_data = document.createElement('p');
                    post_data.className = "post-data"
                    post_data.innerHTML = element.description;
                    post_link.appendChild(post_data);

                    if (number < 7) $('.post-container').append(post); //limit the number of post to 5
                });
                $('.post-container').hidde();
                $('.post-container').fadeIn(1000, function () {})
            });
        })
}
refresh();