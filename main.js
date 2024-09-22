// reading element
const totalSelectedSit = document.getElementById('total-sit-selected');
const selectedSitCount = document.getElementById('select-sit-count');
const remainingSitCount = document.getElementById('remaining-sit-display');
const couponInput = document.getElementById('coupon-input');
const couponSubmitBtn = document.getElementById('coupon-submit-btn');
const totalPriceDisplay = document.getElementById('total-price-display');
const totalPriceAfterDiscount = document.getElementById('grand-total-price');
const CouponContainer = document.getElementById('coupon-container');
const phoneNumber = document.getElementById('phone-number');
const confirmPurchase = document.getElementById('confirm-btn');

const allSelectedSitName = [];
let totalTicketPrice = 0;
// set selection function
function handelSitSelect(event) {
    // disallow to select same sit multiple time
    const selectedSit = event.innerText;
    if (allSelectedSitName.includes(selectedSit)) {
        return alert('This sit already been Booked');
    }
    if (allSelectedSitName.length > 3) {
        return alert('Maximum sit selected.');
    }
    // selecting seat and changing color
    event.classList.add('bg-primary_text');
    event.classList.add('text-white');
    allSelectedSitName.push(event.innerText);
    selectedSitCount.innerText = allSelectedSitName.length;

    // display remaining sit count
    const totalSitAvailable = Number(remainingSitCount.innerText);
    const remainingSitNumber = totalSitAvailable - 1;
    remainingSitCount.innerText = remainingSitNumber;

    // add sit name in list
    const noSit = document.getElementById('no-sit');
    noSit.classList.add("hidden");
    totalSelectedSit.innerHTML += `
    <li class = "flex justify-between text-base font-normal">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>700</span>
    </li>
    `
    // total sit price 
    totalTicketPrice += 700;
    totalPriceDisplay.innerText = totalTicketPrice;
    // adding coupon
    if (allSelectedSitName.length > 3) {
        couponInput.removeAttribute('disabled');
        couponSubmitBtn.removeAttribute('disabled');
    }
}

// add coupon function
couponSubmitBtn.addEventListener('click', function () {
    const couponValue = couponInput.value;
    let totalDiscount = 0;
    if (couponValue === "NEW15") {
        totalDiscount = totalTicketPrice * 0.15;
        const PriceAfterDiscount = totalTicketPrice - totalDiscount;
        totalPriceAfterDiscount.innerText = PriceAfterDiscount;
        couponInput.classList.add("hidden");
        couponSubmitBtn.classList.add("hidden");
        document.getElementById('coupon-label').classList.add("hidden");
        const discountSection = `
        <div class="flex justify-between border-b-2 border-y-slate-300 border-dashed py-2">
        <p class="font-semibold">Total Price</p>
        <p class="font-semibold flex justify-end">
        <span>Discount </span>
        <span id="total-price-display">${totalDiscount}</span>
        </p>
        </div>
        `
        CouponContainer.innerHTML = discountSection;

    }
    else if (couponValue === "Couple 20") {
        totalDiscount = totalTicketPrice * 0.20;
        const PriceAfterDiscount = totalTicketPrice - totalDiscount;
        totalPriceAfterDiscount.innerText = PriceAfterDiscount;
    }
    else {
        return alert("Your coupon is not active now.")
    }

})

// phone verify
phoneNumber.addEventListener("input", function(event){
    const phoneNumberInput = event.target.value;
    if (phoneNumberInput.length === 11) {
        confirmPurchase.removeAttribute('disabled')
    } 
})
// modal close
document.getElementById('btn-close').addEventListener('click',function(){
    window.location.reload();
})
