
document.getElementById('donate3').addEventListener('click', function(event){
    event.preventDefault();
    const donationAmount = getInputValueById('amount3');
    const addAmount = getTextFieldValueById('add-balance3');
    const initialBalance = getTextFieldValueById('initial-balance');
    const title = document.getElementById('title-quota').innerText;
    
    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Invalid Input');
        return;
    }

    if(initialBalance > 0 && donationAmount <= initialBalance){
        if(donationAmount > 0){
            const updateBalance = addAmount + donationAmount;
            document.getElementById('add-balance3').innerText = updateBalance;

            document.getElementById('amount3').value = '';
            const remainingBalance = initialBalance - donationAmount;
            document.getElementById('initial-balance').innerText = remainingBalance;
            document.getElementById('my_modal_3').showModal();
            addDonation(donationAmount, title);
        }else{
            alert('Failed to donate');
        }
        
    }
    else{
        alert('Insufficient Balance');
    }
    
})