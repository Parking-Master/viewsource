function getSource(url){var eframe = document.createElement('iframe');eframe.src='https://5e47-134-56-126-103.ngrok.io/view-source?url='+url;eframe.style.display='none';document.body.appendChild(eframe);window.addEventListener('message', function(e){window.newSource = decodeURIComponent(e.data);});return (window.newSource);}