/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    const name = document.getElementById('shippingName').value;
    const zip = document.getElementById('shippingZip').value;

    if (document.getElementById('same').checked) {
        document.getElementById('billingName').value = name;
        document.getElementById('billingZip').value = zip;
    } else {
        document.getElementById('billingName').value = '';
        document.getElementById('billingZip').value = '';
    }    
}
