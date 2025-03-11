        // Mengakses kamera
        const video = document.getElementById('video');
        let stream;

        // Fungsi untuk menyalakan kamera
        function startCamera() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(s => {
                    stream = s;
                    video.srcObject = stream;
                    document.getElementById('startButton').disabled = true;
                    document.getElementById('stopButton').disabled = false;
                })
                .catch(err => {
                    console.error("Error accessing the camera: ", err);
                });
        }

        // Fungsi untuk mematikan kamera
        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                video.srcObject = null;
                document.getElementById('startButton').disabled = false;
                document.getElementById('stopButton').disabled = true;
            }
        }

        // Fungsi untuk menerapkan efek
        function applyEffect(effect) {
            video.className = effect;
        }

