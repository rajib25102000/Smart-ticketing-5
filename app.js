const allSeat = document.getElementsByClassName('per-seat')
for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        // console.log(e.target)
        
        e.target.setAttribute("disabled",false)
        e.target.style.backgroundColor = "green";
        const totalSeat= document.getElementById('up-down-seat')
        const setCount = getInnerText('up-down-seat')
        const setCountMinus = setCount -1
        totalSeat.innerText=setCountMinus
        
        // seat count up
        const seatCountUp = document.getElementById('seatCountUp')
        const seatCountInt = getInnerText('seatCountUp')
        const seatCountPlus =seatCountInt + 1
        // console.log(seatCountPlus)
        seatCountUp.innerText= seatCountPlus;

    })
}

function buyTicketToTicketFild(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
function getInnerText(id){
    const getText = document.getElementById(id).innerText;
    const getInsText = parseInt(getText)
    return getInsText
}
