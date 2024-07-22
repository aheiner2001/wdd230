document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/rentalPricing.json');
    const data = await response.json();
    const rentalOptions = data.maxRentalPricing;
    const rentalContainer = document.getElementById('rental-options');

    rentalOptions.forEach(rental => {
        const rentalCard = document.createElement('div');
        rentalCard.classList.add('rental-card');
        
        const rentalImage = document.createElement('img');
        rentalImage.src = rental.image;
        rentalImage.alt = rental.rentalType;
        rentalCard.appendChild(rentalImage);

        const rentalInfo = document.createElement('div');
        rentalInfo.classList.add('rental-info');

        rentalInfo.innerHTML = `
            <h2>${rental.rentalType}</h2>
            <p>Max Persons: ${rental.maxPersons}</p>
            <table>
                <tr>
                    <th>Pricing</th>
                    <th>Reservation</th>
                    <th>Walk-In</th>
                </tr>
                <tr>
                    <td>Half Day (3 hrs)</td>
                    <td>$${rental.reservation.halfDay}</td>
                    <td>$${rental.walkIn.halfDay}</td>
                </tr>
                <tr>
                    <td>Full Day</td>
                    <td>$${rental.reservation.fullDay}</td>
                    <td>$${rental.walkIn.fullDay}</td>
                </tr>
            </table>
        `;

        rentalCard.appendChild(rentalInfo);
        rentalContainer.appendChild(rentalCard);
    });
});
