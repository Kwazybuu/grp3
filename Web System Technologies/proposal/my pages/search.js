const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const suggestions = [
      'Glorieta Park',
      'Caloocan City Peoples Park',
    ];
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (query.length < 1) {
        searchResults.style.display = 'none';
        return;
      }
      const matchingSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      if (matchingSuggestions.length > 0) {
        searchResults.innerHTML = '';
        matchingSuggestions.forEach(suggestion => {
          const li = document.createElement('li');
          li.textContent = suggestion;
          searchResults.appendChild(li);
        });
        searchResults.style.display = 'block';
      } else {
        searchResults.style.display = 'none';
      }
    });
    searchResults.addEventListener('click', event => {
      const li = event.target.closest('li');
      if (li) {
        const suggestion = li.textContent;
        if (suggestion === 'Caloocan City Peoples Park') {
          window.location.href = 'Parkpages/caloocancitypeoplespark.html';
        } else {
          
        }
      }
    });
    searchResults.addEventListener('click', event => {
        const li = event.target.closest('li');
        if (li) {
          const suggestion = li.textContent;
          if (suggestion === 'Glorieta Park') {
            window.location.href = 'Parkpages/GlorietaPark.html';
          } else {
            
          }
        }
      });
    
    document.addEventListener('click', event => {
      if (!event.target.closest('.search-container')) {
        searchResults.style.display = 'none';
      }
    });