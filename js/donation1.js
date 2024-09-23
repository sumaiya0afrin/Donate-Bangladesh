
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

    if(inputField === null){
        alert('please field this form')
    }

    if(initialBalance > 0 && donationAmount <= initialBalance){
        if(donationAmount > 0){
            const updateBalance = addAmount + donationAmount;
            document.getElementById('add-balance').innerText = updateBalance;

            document.getElementById('amount').value = '';
            const remainingBalance = initialBalance - donationAmount;
            document.getElementById('initial-balance').innerText = remainingBalance;
            document.getElementById('my_modal_1').showModal();
            addDonation(donationAmount, title);
        }else{
            alert('Failed to donate');
        }
        
    }
    else{
        alert('Insufficient Balance');
    }
    
})