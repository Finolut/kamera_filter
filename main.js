let videoStream;

function startCamera() {
    const video = document.getElementById('video');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const reflection = document.getElementById('reflection');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
            startButton.disabled = true;
            stopButton.disabled = false;
            reflection.classList.remove('hidden');
        })
        .catch(err => {
            console.error("Error accessing the camera: ", err);
        });
}

function stopCamera() {
    const video = document.getElementById('video');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const reflection = document.getElementById('reflection');

    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        startButton.disabled = false;
        stopButton.disabled = true;
        reflection.classList.add('hidden');
    }
}

function applyEffect(filter) {
    const video = document.getElementById('video');
    video.className = ''; // Reset kelas sebelumnya

    switch (filter) {
        case 'grayscale':
            video.classList.add('grayscale');
            break;
        case 'sepia':
            video.classList.add('sepia');
            break;
        case 'blur':
            video.classList.add('blur');
            break;
        case 'invert':
            video.classList.add('invert');
            break;
        case '60s':
            video.classList.add('effect-60s');
            break;
        case '15s':
            video.classList.add('effect-15s');
            break;
        default:
            // Normal (tidak ada efek)
            break;
    }
}