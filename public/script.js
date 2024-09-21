console.log('Loaded.');

// Funkcja do pobierania danych o Clan Wars (CW)
function fetchWarlog(clanTag) {
    fetch(`/clan/${clanTag}/warlog`)
        .then(response => response.json())
        .then(data => {
            const clanInfo = document.getElementById('clan-info');
            clanInfo.innerHTML = ''; // Wyczyść poprzednie dane

            if (data.length > 0) {
                let warDataHTML = '<h2>Clan War Results</h2>';
                data.forEach((war, index) => {
                    warDataHTML += `
                        <h3>War #${index + 1}</h3>
                        <p>Date: ${new Date(war.createdDate).toLocaleDateString()}</p>
                        <p>Participants: ${war.participants.length}</p>
                        <ul>
                            ${war.participants.map(participant => `
                                <li>
                                    <strong>${participant.name}</strong>:
                                    Battles Played: ${participant.battlesPlayed},
                                    Wins: ${participant.wins},
                                    Collection Day Battles: ${participant.collectionDayBattlesPlayed}
                                </li>
                            `).join('')}
                        </ul>
                    `;
                });
                clanInfo.innerHTML = warDataHTML;
            } else {
                clanInfo.innerHTML = `<p>No Clan Wars data available.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching warlog data:', error);
            const clanInfo = document.getElementById('clan-info');
            clanInfo.innerHTML = `<p>Failed to fetch warlog data. Please try again later.</p>`;
        });
}

// Zmiana w obsłudze inputu, aby także pobierać dane CW
document.getElementById('fetch-clan-btn').addEventListener('click', () => {
    const clanTag = document.getElementById('clan-tag-input').value.trim().toUpperCase();
    if (clanTag) {
        fetchClanData(clanTag);  // Pobieranie podstawowych danych klanu
        fetchWarlog(clanTag);    // Pobieranie danych o CW
    } else {
        document.getElementById('clan-info').innerHTML = `<p>Please enter a valid clan tag.</p>`;
    }
});
