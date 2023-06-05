document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = (value * fee * time);

    document.getElementById('total').innerHTML = ("R$ " + total);
});


document.getElementById('calculate2').addEventListener('click', function(){
    const desconto = document.getElementById('value2').value;
    const fee = (document.getElementById('fee2').value) / 100;
    const time = document.getElementById('time2').value;

    const total = desconto / (fee * time);

    document.getElementById('total2').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});


document.getElementById('calculate3').addEventListener('click', function(){
    const value = document.getElementById('value3').value;
    const desconto = (document.getElementById('fee3').value);
    const time = document.getElementById('time3').value;
 
    const anual = desconto / (value * time)
    const total = anual * 100

    document.getElementById('total3').innerHTML = total.toFixed(3) + "%";
});


document.getElementById('calculate4').addEventListener('click', function(){
    const value = document.getElementById('value4').value;
    const fee = (document.getElementById('fee4').value) / 100;
    const desconto = document.getElementById('time4').value;

    const total = desconto / (fee * (value - desconto))

    document.getElementById('total4').innerHTML = total.toFixed(0) + "m";
});