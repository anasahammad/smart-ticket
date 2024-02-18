
// function setBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100] text-white')
    
// }


let seatSelect = 0;

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
        selectedSeat.innerText = seatSelect;

        
    })
}

