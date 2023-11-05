// Replace 'FOLDER_ID' with the actual ID of your public Google Drive folder.
const folderId = '1snDaNtlDD4fSds5I0pLyRPgb7ew6P3ut';
const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=AIzaSyC6eDdkRcHK0CzkS8zVY5fdDHdKiKdYYzk`;

// Replace 'API_KEY' with your Google Drive API key.
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const images = data.files.filter(file => file.mimeType.startsWith('image/'));
        const carousel = document.getElementById('image-carousel');

        images.forEach(image => {
            const imageUrl = `https://drive.google.com/uc?id=${image.id}`;
            const img = document.createElement('img');
            img.src = imageUrl;
            carousel.appendChild(img);
        });

        // Initialize a simple image carousel (you can use a more advanced library).
        let currentIndex = 0;
        const imagesCount = images.length;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % imagesCount;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000); // Change image every 3 seconds
    })
    .catch(error => console.error('Error:', error));
