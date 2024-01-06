function toggleContent(section) {
    var content = document.getElementById('content' + section);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  }