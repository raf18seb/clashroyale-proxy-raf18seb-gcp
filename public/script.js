const clanTag = 'YPJ0VRRR';

fetch(`/clan/${clanTag}`)
    .then(response => response.json())
    .then(data => {
        const clanInfo = document.getElementById('clan-info');
        clanInfo.innerHTML = `
            <h2>Clan Name: ${data.name}</h2>
            <p>Clan Level: ${data.clanLevel}</p>
            <p>Members: ${data.members}</p>
            <p>Score: ${data.clanScore}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching clan data:', error);
    });
