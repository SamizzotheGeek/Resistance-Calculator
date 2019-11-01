
var cbands = [`black, brown, red, orange, yellow, green, blue, purple, grey, white`]
let calculate = () =>{
    let b1 = document.querySelector('#b1');
    let b2 = document.querySelector('#b2');
    let b3 = document.querySelector('#b3');
    let b4 = document.querySelector('#b4');
    let output = document.querySelector('.disbox');
    let upperl = document.querySelector('.upper');
    let lowerl = document.querySelector('.lower');
    let ohm = "&ohm;"

    band1 =b1.value.toLowerCase();
    band2  = b2.value.toLowerCase();
    band3 = b3.value.toLowerCase();
    band4 = b4.value.toLowerCase();
    
  

    //band1 an band2 represent values
    //cases for band1
    switch(band1){
        case 'black':
                band1 = '';
                   break;
                case 'brown':
                   band1 = '1';
                   break;
                case 'red':
                   band1 = '2';
                   break;
                case 'orange':
                   band1 = '3';
                   break;
                case 'yellow':
                   band1 = '4';
                   break;
                case 'green':
                   band1 = '5';
                   break;
                case 'blue':
                   band1= '6';
                   break;
                case 'purple':
                   band1= '7';
                   break;
                case 'grey':
                   band1 = '8';
                   break;
                case 'white':
                   band1 = '9';
                   break;
                default:
                   band1 = 0;
                   break;
    }

    //cases for band2
    switch(band2){
        case 'black':
            band2 = '0';
            break;
        case 'brown':
            band2 = '1';
            break;
        case 'red':
            band2 = '2';
            break;
        case 'orange':
            band2 = '3';
            break;
        case 'yellow':
            band2 = '4';
            break;
        case 'green':
            band2 = '5';
            break;
        case 'blue':
            band2 = '6';
            break;
        case 'purple':
            band2 = '7';
            break;
        case 'grey':
            band2 = '8';
            break;
        case 'white':
            band2 = '9';
            break;
        default:
            band2 = 0;
            break;
    }
    //band3 represents multiplier. i.e 10^bandn
    //switch case for band3
    switch(band3){
        case 'black':
             band3 = '';
                break;
            case 'brown':
                band3 = '0';
                break;
            case 'red':
                band3 = '00';
                break;
            case 'orange':
                band3 = '000';
                break;
            case 'yellow':
                band3 = '0000';
                break;
            case 'green':
                band3 = '00000';
                break;
            case 'blue':
                band3= '000000';
                break;
            case 'purple':
                band3= '0000000';
                break;
            case 'grey':
                band3 = '00000000';
                break;
            case 'white':
                band3 = '000000000';
                break;
            default:
                band3 = '';
                break;
    }

    
    //display results
    let result = band1 + band2 + band3 + band4;
    result = parseFloat(result);
    //calculate torelance
    upper = result;
    lower = result;
    //case for upper limits
    switch (band4) {
        case 'brown':
            upper = upper + (upper * 0.01);
            break;
        case 'red':
            upper = upper + (upper * 0.02);
            break;
        case 'gold':
            upper = upper + (upper * 0.05);
            break;
        case 'silver':
            upper = upper + (upper * 0.1);
            break;
        default:
            upper = result;
            break;
    }
    //case for lower limits
    switch (band4) {
        case 'brown':
            lower = lower - (lower * 0.01);
            break;
        case 'red':
            lower = lower - (lower * 0.02);
            break;
        case 'gold':
            lower = lower - (lower * 0.05);
            break;
        case 'silver':
            lower = lower - (lower * 0.1);
            break;
        default:
            lower = result;
            break;
    }
 
    //final result
    //convert to Kilo ohms and mega ohms
    if(result < 1000 ){
        result = result;
    } else if (result >= 1000 && result < 1000000){
        result = result/1000 + 'K';
        
    }else if(result >= 1000000){
        result = result/1000000 + 'M';
    }else{
        result = result;
    }
    let fresult = result + ohm;
    output.innerHTML = fresult;
    upperl.innerHTML = upper + ohm;
    lowerl.innerHTML = lower + ohm;
    

    } 

//colort guide
let cguide = document.querySelector('.cguide');
cguide.innerHTML = cbands;
for(i=0;i=cbands.length;){
    console.log(cbands);
    break;
}

