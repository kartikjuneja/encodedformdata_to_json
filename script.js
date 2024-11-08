document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = document.getElementById('formData').value;
  const params = new URLSearchParams(formData);
  const jsonObject = {};

  params.forEach((value, key) => {
    jsonObject[key] = value;
  });

  const jsonOutput = JSON.stringify(jsonObject, null, 2);
  document.getElementById('jsonOutput').textContent = jsonOutput;
  document.getElementById('notification').style.display = 'none'; // Hide notification
});

// Copy JSON to clipboard
document.getElementById('copyButton').addEventListener('click', function() {
  const jsonOutput = document.getElementById('jsonOutput').textContent;
  
  navigator.clipboard.writeText(jsonOutput)
    .then(() => {
      const notification = document.getElementById('notification');
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
});
