document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
});
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation').classList.remove('hidden');
});
// donate for noakhali
document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const balance = getValueById('balance');
    const amountNoakhali = getValueById('amount-noakhali');
    const donatedAmountNoakhali = getInputValueById('input-noakhali');
    const headingNoakhali = document.getElementById('heading-noakhali').innerText;

    if(isNaN(donatedAmountNoakhali)){
        alert('Invalid Donation amount');
        return;
    }else if(donatedAmountNoakhali <= 0){
        alert('Invalid Donation amount');
        return;
    }else if(balance < donatedAmountNoakhali){
        alert('Invalid Donation amount');
    }else{
        const innerHTML = `
        <div class="p-4 border-solid border-2 border-slate-100 rounded-xl">
            <h2 class="font-bold my-1">${donatedAmountNoakhali} Taka is Donated for ${headingNoakhali}</h2>
            <p class="bg-slate-100 p-2 rounded-md">Date: ${new Date().toLocaleString()}</p>
        </div>
    `
    document.getElementById('history').innerHTML += innerHTML;
        pressButton();
    }

    const newBalance = (balance - donatedAmountNoakhali).toFixed(2);
    const newAmountNoakhali = (amountNoakhali + donatedAmountNoakhali).toFixed(2);
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-2').innerText = newBalance;
    document.getElementById('amount-noakhali').innerText = newAmountNoakhali;

});

// donate for feni
document.getElementById('btn-donate-feni').addEventListener('click', function(){
    const balance = getValueById('balance');
    const amountFeni = getValueById('amount-feni');
    const donatedAmountFeni = getInputValueById('input-feni');
    const headingFeni = document.getElementById('heading-feni').innerText;

    if(isNaN(donatedAmountFeni)){
        alert('Invalid Donation amount');
        return;
    }else if(donatedAmountFeni <= 0){
        alert('Invalid Donation amount');
        return;
    }else if(balance < donatedAmountFeni){
        alert('Invalid Donation amount');
    }else{
        const innerHTML = `
        <div class="p-4 border-solid border-2 border-slate-100 rounded-xl">
            <h2 class="font-bold my-1">${donatedAmountFeni} Taka is Donated for ${headingFeni}</h2>
            <p class="bg-slate-100 p-2 rounded-md">Date: ${new Date().toLocaleString()}</p>
        </div>
    `
    document.getElementById('history').innerHTML += innerHTML;
        pressButton();
    }

    const newBalance = (balance - donatedAmountFeni).toFixed(2);
    const newAmountFeni = (amountFeni + donatedAmountFeni).toFixed(2);
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-2').innerText = newBalance;
    document.getElementById('amount-feni').innerText = newAmountFeni;

});

// donate for quota
document.getElementById('btn-donate-quota').addEventListener('click', function(){
    const balance = getValueById('balance');
    const amountQuota = getValueById('amount-quota');
    const donatedAmountQuota = getInputValueById('input-quota');
    const headingQuota = document.getElementById('heading-quota').innerText;

    if(isNaN(donatedAmountQuota)){
        alert('Invalid Donation amount');
        return;
    }else if(donatedAmountQuota <= 0){
        alert('Invalid Donation amount');
        return;
    }else if(balance < donatedAmountQuota){
        alert('Invalid Donation amount');
    }else{
        const innerHTML = `
        <div class="p-4 border-solid border-2 border-slate-100 rounded-xl">
            <h2 class="font-bold my-1">${donatedAmountQuota} Taka is Donated for ${headingQuota}</h2>
            <p class="bg-slate-100 p-2 rounded-md">Date: ${new Date().toLocaleString()}</p>
        </div>
    `
    document.getElementById('history').innerHTML += innerHTML;
        pressButton();
    }

    const newBalance = (balance - donatedAmountQuota).toFixed(2);
    const newAmountQuota = (amountQuota + donatedAmountQuota).toFixed(2);
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-2').innerText = newBalance;
    document.getElementById('amount-quota').innerText = newAmountQuota;

});