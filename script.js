function refresh() {
    $.ajax({
        type: 'POST',
        url: "https://api.binary-coffee.dev/posts/feed/json1",
        headers: {
            'Authorization': 'Basic xxxxxxxxxxxxx',
            'X-CSRF-TOKEN': 'xxxxxxxxxxxxxxxxxxxx',
            'Content-Type': 'application/json'
        }
    }).done(function (data) {
        $('.loading').fadeOut(1000, function () {
            $('.loading').addClass('hidden')
            let number = 1
            data.items.forEach(element => {
                let post = $('<div>', {
                    class: 'post'
                })

                let post_number = $('<div>', {
                    class: 'post-number',
                    html: number++
                })
                post.append(post_number)

                let post_link = $('<a/>', {
                    class: 'post-link',
                    href: element.url,
                    target: 'blanck'
                })
                post.append(post_link)

                let post_name = $('<h3/>', {
                    class: 'post-name',
                    html: element.title
                })
                post_link.append(post_name)


                let post_data = ('<p>', {
                    class: 'post-data',
                    html: element.description,
                })
                post_link.append(post_data)

                if (number < 7) $('.post-container').append(post) //limit the number of post to 5
            })
            $('.post-container').hidde()
            $('.post-container').fadeIn(1000, function () {})
        });
    })
}
refresh();