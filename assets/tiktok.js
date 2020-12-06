$(document).ready(function () {

    $('#submitButton').on('click', function () {
        var username = $('#username').val()

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tiktok.p.rapidapi.com/live/user?username=" + username + "&fresh=1",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2de0bcf978msh2f4097242f24540p1c25fcjsnf675ab8676ad",
                "x-rapidapi-host": "tiktok.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);

            // Username
            $('#usernameDisplay').text('@' + username);
            console.log("Username: " + username)
            
            // Proflie Pic
            $("#profilePic").src = response.avatar_thumb;
            console.log(response.avatar_thumb)

            // NickName
            nickname = $("#nickname").text(response.nickname);
            console.log("Nickname: " + response.nickname)

            // Description
            signature = $("#signature").text(response.signature);
            console.log("Signature: " + response.signature)

            // Followers
            follower_count = $("#followers").text(response.follower_count);
            console.log("Followers: " + response.follower_count)

            // Following
            following_count = $("#following").text(response.following_count);
            console.log("Following: " + response.following_count)

            // Amount of Videos Posted
            video_count = $('#videoAmount').text(response.video_count);
            console.log("Total Videos Posted: " + response.video_count)

            // country of origin
            country = $('#country').text(response.country);
            console.log("Country of Origin: " + response.country)

            // Other Social Medias
            // instagram username
            instagram = $('#instagram').text(response.other_social_profiles.instagram_username);
            console.log("Instagram Username: " + response.other_social_profiles.instagram_username)

            // instagram username
            instagram = $('#youtube').text(response.other_social_profiles.youtube.youtube_channel_name);
            console.log("Youtube Name: " + response.other_social_profiles.youtube.youtube_channel_name)

            // Verified
            is_verified = ''
            if (is_verified === true) {
                console.log("Verified")
                is_verified = $('#verified').text("Verified");
            } else {
                (is_verified === false)
                console.log("Not Verified")
                is_verified = $('#verified').text("Not Verified");
            }
        });
    })
});

