// Funkcja, która pobiera informacje o klanie i wyświetla je na stronie
function fetchClanData(clanTag) {
    fetch(`/clan/${clanTag}`)
        .then(response => response.json())
        .then(data => {
            const clanInfo = document.getElementById('clan-info');
            if (data.name) {
                clanInfo.innerHTML = `
                    <h2>Clan Name: ${data.name}</h2>
                    <p>Clan Level: ${data.clanLevel}</p>
                    <p>Members: ${data.members}</p>
                    <p>Score: ${data.clanScore}</p>
                `;
            } else {
                clanInfo.innerHTML = `<p>Clan not found. Please check the tag and try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching clan data:', error);
            const clanInfo = document.getElementById('clan-info');
            clanInfo.innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
        });
}

// Obsługa przycisku do pobrania danych klanu
document.getElementById('fetch-clan-btn').addEventListener('click', () => {
    const clanTag = document.getElementById('clan-tag-input').value.trim().toUpperCase();
    if (clanTag) {
        fetchClanData(clanTag);
    } else {
        document.getElementById('clan-info').innerHTML = `<p>Please enter a valid clan tag.</p>`;
    }
});
