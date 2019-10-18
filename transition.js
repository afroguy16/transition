initialIndex = 0;

idList = ['initialView','accountDetails', 'billingAddress', 'paymentDetails', 'completeOrder', 'close'];

let transitionNextView = function() {
    document.getElementById(idList[initialIndex]).classList.remove('active');
    initialIndex++
    document.getElementById(idList[initialIndex]).classList.add('active');
}


let closeModalFunction = function() {
    alert('Call the close modal function');
}
