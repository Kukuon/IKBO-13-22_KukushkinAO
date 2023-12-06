function costCalculate() {

    // Скидки
    var loyaltyDiscount = document.getElementById('loyaltyDiscount').checked ? 0.9 : 1;
    var tradeInDiscount = document.getElementById('tradeInDiscount').checked ? 0.8 : 1;
    var promoCodeInput = document.getElementById('promoCode').value.toLowerCase();
    var validPromoCode = 'promocode123'; // Правильный промокод
    var promoCodeDiscount = promoCodeInput === validPromoCode ? 0.9 : 1;

    // Модель автомобиля
    var carModel = document.getElementById('carModel').value;

    var carModelCosts = {
        'cr-v': 2999990,
        'accord': 1999990,
        'civic': 1499990,
        'nsx': 3499990
    };

    var chosenModelCost = carModelCosts[carModel];

    // Тип КПП
    var transType = document.getElementById('transType').value;

    var transTypeCosts = {
        'automatic': 1.1,
        'manual': 1.05,
    };

    var transTypeCost = transTypeCosts[transType];

    // Двигатель
    var engineType = document.getElementById('engineType').value;

    var engineTypeCosts = {
        'var1': 1.03,
        'var2': 1.13,
        'var3': 1.23,
    };

    var chosenEngineTypeCost = engineTypeCosts[engineType];

    //Диски 
    var wheelType = document.getElementById('wheelType').value;

    var wheelTypeCosts = {
        'alloyWheel17': 1.04,
        'alloyWheel19': 1.05,
        'stampedWheel15': 1.00,
        'stampedWheel17': 1.02
    };

    var chosenWheelTypeCost = wheelTypeCosts[wheelType];
    // Дополнительные опции
    var leatherSeatsCost = document.getElementById('leatherSeats').checked ? 30999 : 0;
    var hatchfCost = document.getElementById('hatch').checked ? 29990 : 0;
    var navigationCost = document.getElementById('navigation').checked ? 8990 : 0;
    var leadHeadlightsCost = document.getElementById('ledHeadlights').checked ? 12990 : 0;
    var fogLightsCost = document.getElementById('fogLihts').checked ? 8990 : 0;
    var reflectorsCost = document.getElementById('reflectors').checked ? 3990 : 0;
    var keylessAccessCost = document.getElementById('keylessAccess').checked ? 5990 : 0;
    var reaViewCameraCost = document.getElementById('reaViewCamera').checked ? 7990 : 0;
    var parkingSensorsCost = document.getElementById('parkingSensors').checked ? 4990 : 0;

    // Рассчитать общую стоимость
    var totalCost = (chosenModelCost * transTypeCost * chosenEngineTypeCost * loyaltyDiscount * tradeInDiscount * promoCodeDiscount * chosenWheelTypeCost) +
        leatherSeatsCost + hatchfCost + navigationCost + leadHeadlightsCost + fogLightsCost + reflectorsCost + keylessAccessCost + reaViewCameraCost + parkingSensorsCost;

    // Отобразить общую стоимость
    document.getElementById('totalCost').innerHTML = `ИТОГОВАЯ СТОИМОСТЬ: $${totalCost.toFixed(2)} ₽`;
}