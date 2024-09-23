function getInputValueById(id){
    const donation = document.getElementById(id).value;
    const donationAmount = Number(donation);
    return donationAmount;
}
function getTextFieldValueById(id){
    const amount = document.getElementById(id).innerText;
    const addAmount = Number(amount);
    return addAmount;
}

function showSection(id){
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function activeButton(id){
    if(id === 'donationBtn'){
        document.getElementById('donationBtn').classList.add('bg-[#b4f461]');
        document.getElementById('donationBtn').classList.remove('bg-transparent');
        document.getElementById('historyBtn').classList.add('bg-transparent');
        document.getElementById('historyBtn').classList.remove('bg-[#b4f461]');
    }else{
        document.getElementById('historyBtn').classList.add('bg-[#b4f461]');
        document.getElementById('historyBtn').classList.remove('bg-transparent');
        document.getElementById('donationBtn').classList.add('bg-transparent');
        document.getElementById('donationBtn').classList.remove('bg-[#b4f461]');
    }
}

function addDonation(amount, title){
    const newDonation = `
            <div class="hero border border-[#1111111A] rounded-2xl">
            <div class="hero-content flex-col lg:flex-row w-full h-full">
              <div>
                <h1 class="text-xl font-bold">
                    ${amount} Taka is Donated for ${title}
                  </h1>
                  <p class="py-2 text-desc">
                    Date : ${Date()}
                  </p>
              </div>
            </div>
          </div>`
          ;

    document.getElementById('history-list').insertAdjacentHTML('beforeend', newDonation);
}