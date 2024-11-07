function downloadFile(fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); 
    link.click();
  }
function openPage(pageUrl) {
    // You can use window.location to navigate to a different page.
    window.location.href = pageUrl; 
  }