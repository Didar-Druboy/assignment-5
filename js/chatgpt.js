document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
});
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation').classList.remove('hidden');
});

function handleDonation(balanceId, amountId, inputId, headingId) {
    const balance = getValueById(balanceId);
    const amount = getValueById(amountId);
    const donatedAmount = getInputValueById(inputId);
    const heading = document.getElementById(headingId).innerText;

    // Validate the donation amount
    if (isNaN(donatedAmount)) {
        alert('Invalid Donation amount');
        return;
    } else if (donatedAmount <= 0) {
        alert('Invalid Donation amount');
        return;
    } else if (balance < donatedAmount) {
        alert('Insufficient balance');
        return;
    }

    // Create the donation history HTML
    const innerHTML = `
        <div class="p-4 border-solid border-2 border-slate-100 rounded-xl">
            <h2 class="font-bold my-1">${donatedAmount} Taka is Donated for ${heading}</h2>
            <p class="bg-slate-100 p-2 rounded-md">Date: ${new Date().toLocaleString()}</p>
        </div>
    `;
    document.getElementById('history').innerHTML += innerHTML;
    
    // Trigger a button press function (if needed)
    
    pressButton();

    // Update the balance and donation amount
    const newBalance = (balance - donatedAmount).toFixed(2);
    const newAmount = (amount + donatedAmount).toFixed(2);
    document.getElementById(balanceId).innerText = newBalance;
    document.getElementById(amountId).innerText = newAmount;
}

// Event listeners for the buttons
document.getElementById('btn-donate-noakhali').addEventListener('click', function() {
    handleDonation('balance', 'amount-noakhali', 'input-noakhali', 'heading-noakhali');
});

document.getElementById('btn-donate-feni').addEventListener('click', function() {
    handleDonation('balance', 'amount-feni', 'input-feni', 'heading-feni');
});

document.getElementById('btn-donate-quota').addEventListener('click', function() {
    handleDonation('balance', 'amount-quota', 'input-quota', 'heading-quota');
});
