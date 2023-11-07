document.addEventListener('DOMContentLoaded', function () {
    // Get references to important elements
    const contentForm = document.getElementById('contentForm');
    const titleInput = document.getElementById('title');
    const contentTextarea = document.getElementById('content');
    
    // Add event listener for form submission
    contentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const title = titleInput.value;
        const content = contentTextarea.value;
        
        // Validate input (you can add more validation here)
        if (!title.trim() || !content.trim()) {
            alert('Please fill in both title and content fields.');
            return;
        }
        
        // Simulate an AJAX POST request (replace with your actual API endpoint)
        // This is just a placeholder for demonstration purposes
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        
        fetch('https://api.example.com/add_content', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server (e.g., show success message)
            console.log('Content added successfully:', data);
            
            // Reset the form
            contentForm.reset();
        })
        .catch(error => {
            console.error('Error adding content:', error);
        });
    });
    
    // You can add more JavaScript functionality here as needed
});
