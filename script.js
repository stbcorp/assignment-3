document.getElementById('submit').onclick = function(){
    let start = 100;
    start = calc(start);
    document.getElementById('priceValue').textContent = `Estimated Price: ${start}`;
    document.getElementById('calculatedPrice').style.display = 'block';
}

function calc(start){
    const edus = document.getElementById("education");
    switch(edus.value){
        case "bachelor":
            return net(start * 1.5);
            case "college":
                return net(start * 1.2);
            case "high_school":
                return net(start * 1.05);
            case "middle_school":
                return net(start * 0.9);
            default:
                return net(start);
    }
}

function net(start) {
    const select = document.getElementById("networth");
    const value = select.value;
    switch (value) {
        case "upper_class":
            return cas(start * 2);
        case "middle_class":
            return cas(start * 1.5);
        case "lower_class":
            return cas(start * 1.2);
        default:
            return cas(start);
    }
}

const castes = {
    bra: 100,
    ksh: 50,
    vai: 20,
    shu: 10,
    unt: -50
};

function cas(start){
    const caste = document.getElementById("caste").value;
    switch(caste){
        case "brahmin":
            start += castes.bra;
            break;
        case "kshatriya":
            start += castes.ksh;
            break;
        case "vaishya":
            start += castes.vai;
            break;
        case "shudra":
            start += castes.shu;
            break;
        case "untochable":
            start += castes.unt;
            break;
        default:
            start = start; 
    }
    return skills(start);
}

const skill = [
    { name: "musical", value: 10 },
    { name: "cooking", value: 20 },
    { name: "easygoing", value: 15 },
    { name: "sings", value: 10 }
];

function skills(start){
    const sel = document.querySelectorAll('input[type="checkbox"]'); 
    const arr = [];
    sel.forEach(sell => {
        if (sell.checked) {
            arr.push(sell.value);
        }
    });
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < skill.length; j++){
            if(arr[i] == skill[j].name){
                start += skill[j].value;
            }
            else{
                start *=1
            }
        }
    }
    console.log(arr);
    return age(start, arr);
}

function age(start, arr) {
    const selectedAge = document.querySelector('input[name="ages"]:checked');
    switch (selectedAge.value){
        case "young":
            return gossip(start * 1.5, arr);
        case "adult":
            return gossip(start * 1.2, arr);
        case "plus":
            return gossip(start * 0.95, arr);
        default:
            return gossip(start, arr);
    }
}

const gossips =[
    { name: "parent", value: -5 },  
    { name: "character", value: -10 }, 
    { name: "general", value: -15 }
];

function gossip(finish, arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < gossips.length; j++){
            if(arr[i] == gossips[j].name){
                finish += gossips[j].value;
            }
            else{
                finish *=1
            }
        }
    }
    return finish;
}
document.getElementById('reset').onclick = function() {
    document.getElementById("education").selectedIndex = 0;
    document.getElementById("networth").selectedIndex = 0;
    document.getElementById("caste").selectedIndex = 0;
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    const radio = document.querySelectorAll('input[name="agge"]');
    radio.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('calculatedPrice').style.display = 'none';
    document.getElementById('priceValue').textContent = '';
}