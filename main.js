// reading element
const totalSelectedSit = document.getElementById('total-sit-selected');
const selectedSitCount = document.getElementById('select-sit-count');
const remainingSitCount = document.getElementById('remaining-sit-display');

const allSelectedSitName = [];
// set selection function
function handelSitSelect(event){
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
    totalSelectedSit.innerHTML = `
    <li class = "flex justify-between text-base font-normal">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>700</span>
    </li>
    
    `
}