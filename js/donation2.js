
document.getElementById('donate2').addEventListener('click', function(event){
    event.preventDefault();
    const donationAmount = getInputValueById('amount2');
    const addAmount = getTextFieldValueById('add-balance2');
    const initialBalance = getTextFieldValueById('initial-balance');
    const title = document.getElementById('title-feni').innerText;
    
    if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Invalid Input');
        return;
    }

    if(initialBalance > 0 && donationAmount <= initialBalance){
        if(donationAmount > 0){
            const updateBalance = addAmount + donationAmount;
            document.getElementById('add-balance2').innerText = updateBalance;

            document.getElementById('amount2').value = '';
            const remainingBalance = initialBalance - donationAmount;
            document.getElementById('initial-balance').innerText = remainingBalance;
            document.getElementById('my_modal_2').showModal();
            addDonation(donationAmount, title);
        }else{
            alert('Failed to donate');
        }
        
    }
    else{
        alert('Insufficient Balance');
    }
    
})