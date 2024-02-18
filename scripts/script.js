
// function setBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100] text-white')
    
// }


let seatSelect = 0;

let total = 0;
let grandTotal = 0;


// Select the seats
const seats = document.querySelectorAll('.seat');
for(const seat of seats){
    seat.addEventListener("click", function(event){
        
        seat.classList.add('bg-[#1DD100]');


        let setsLeft = document.getElementById('left-counter').innerText;
        let seatsLeftCount = parseInt(setsLeft);

        document.getElementById('left-counter').innerText = seatsLeftCount - 1;


        let selectedSeat = document.getElementById('selected-seat');
       
        seatSelect = seatSelect + 1;
        if(seatSelect > 4){
            alert("You Cannot Buy more than 5 Tickets at a Time!");
            seat.classList.remove('bg-[#1DD100]');
            return;
        }
        selectedSeat.innerText = seatSelect;

        // let get the seatname and price

        let seatName = event.target.innerText;
        let price = 550;

        // lets target the table element append seatname,  class and price

        let tbody = document.getElementById('table-body');
       
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.innerText = seatName;
        let tdClass = document.createElement('td');
        tdClass.innerText = 'Economy';
        let tdPrice = document.createElement('td');
        tdPrice.innerText = price;
        tr.appendChild(tdName);
        tr.appendChild(tdClass)
        tr.appendChild(tdPrice);
        tbody.appendChild(tr);


        // Total Pricing 
        const priceContainer = document.getElementById('total-price');
        total = total + price;
        priceContainer.innerText = total;

        // GrandTotal Pricing

        const grandTotalContainer = document.getElementById('grand-total');
       
        grandTotal = total;
        grandTotalContainer.innerText = grandTotal;

        // Coupon 
        const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener('click', function(){
    const inputField = document.getElementById('coupon-input').value;
     document.getElementById('coupon-field')
     
     if(inputField !== 'NEW15' && inputField !== 'Couple 20' ){
        alert("Invalid Coupon!")
        return;
     }
    if(inputField == 'NEW15'){
        let discount = total * 0.15;
        grandTotal = total - discount;
        grandTotalContainer.innerText = grandTotal;
        document.getElementById('coupon-field').classList.add('hidden');

    }
    else if(inputField == 'Couple 20'){
        let discount = total * 0.2;
        grandTotal = total - discount;
        grandTotalContainer.innerText = grandTotal;
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else{
        grandTotal = total;
        grandTotalContainer.innerText = grandTotal;
    }
    
   

})
        
    })
}

function next(){
    let modal = document.getElementById('modal');
        modal.classList.remove('hidden');
}

    // const nextBtn = document.getElementById('next-btn');
    // nextBtn.addEventListener('click', function(){

    //     let modal = document.getElementById('modal');
    //     modal.classList.remove('hidden');
    // })

const continueBtn = document.getElementById('continue').addEventListener('click', function(){
     let modal = document.getElementById('modal');
        modal.classList.add('hidden');
}
)