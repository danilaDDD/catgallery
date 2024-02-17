fetch('https://api.thecatapi.com/v1/images/search?limit=50')
  .then(response => response.json())
  .then(data => {
    const galleryElement = document.getElementById('gallery');

    data.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      const imgElement = document.createElement('img');
      imgElement.src = item.url;
      imgElement.alt = item.id;

      const captionElement = document.createElement('div');
      captionElement.classList.add('caption');
      captionElement.textContent = item.id;

      galleryItem.appendChild(imgElement);
      galleryItem.appendChild(captionElement);

      galleryElement.appendChild(galleryItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });