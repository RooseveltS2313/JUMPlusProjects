

function createHistory(){
    
    var sessionString = sessionStorage.getItem("BoughtItems");
    var sessionString2 = sessionStorage.getItem("BoughtPrice");
    var orderedItems = JSON.parse(sessionString);
    var orderedPrice = JSON.parse(sessionString2);

    let cartBasket=document.querySelector('.order-content');
    if ( orderedItems == null ) {
        alert("No history to view.");
    } else {
        cartBasket.append(orderedItems + " for $" +orderedPrice);
    }

    sessionStorage.setItem("BoughtItems", null);
    sessionStorage.setItem("BoughtPrice", null);      
}
