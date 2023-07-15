let btnsearch = document.querySelector('button');
let input = document.querySelector('input');
btnsearch.addEventListener('click', () => {
    window.open(input.value, '_blank');
});
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', handleInput);

function handleInput() {
    const searchText = searchInput.value.trim();

    if (searchText.length === 0) {
        suggestionsList.style.display = 'none';
        suggestionsList.innerHTML = '';
        return;
    }

    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=5`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                suggestionsList.innerHTML = '';
                data.items.forEach(item => {
                    const title = item.volumeInfo.title;
                    const li = document.createElement('li');
                    li.textContent = title;
                    li.addEventListener('click', () => {
                        searchInput.value = title;
                        suggestionsList.style.display = 'none';
                        suggestionsList.innerHTML = '';
                        // Trigger search function here
                        search();
                    });
                    suggestionsList.appendChild(li);
                });
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.style.display = 'none';
                suggestionsList.innerHTML = '';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to perform the actual search based on user input
function search() {
    // Retrieve the search input value and perform search operation
    const searchText = searchInput.value.trim();
    console.log('Performing search:', searchText);
    // Implement the logic to perform the search and display the search results
}
