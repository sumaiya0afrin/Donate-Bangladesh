
document.getElementById('donate').addEventListener('click', function(event){
    event.preventDefault();
    const donationAmount = getInputValueById('amount');
    const addAmount = getTextFieldValueById('add-balance');
    const initialBalance = getTextFieldValueById('initial-balance');
    const title = document.getElementById('title').innerText;
    
    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Invalid Input');
        return;
    }

    if(initialBalance > 0 && donationAmount <= initialBalance){
        if(donationAmount > 0){
            const updateBalance = addAmount + donationAmount;
            document.getElementById('add-balance').innerText = updateBalance;

            const remainingBalance = initialBalance - donationAmount;
            document.getElementById('initial-balance').innerText = remainingBalance;
            document.getElementById('my_modal_1').showModal();
            document.getElementById('amount').value = "";
            addDonation(donationAmount, title);
        }else{
            alert('Failed to donate');
        }
    }
    else{
        alert('Insufficient Balance');
    }
    
})