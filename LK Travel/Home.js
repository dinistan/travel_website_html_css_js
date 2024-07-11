const videos = document.querySelectorAll('.background-video');

function changeVideo(index) {
    videos.forEach((video, i) => {
        video.classList.remove('active');
        if (i === index) {
            video.classList.add('active');
        }
    });
}

// Initialize the first video as active
changeVideo(0);