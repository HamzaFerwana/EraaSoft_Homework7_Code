
let acStatus = false;
let acTemp = 0;
let acSpeed = 0;

function acOnOff() {
    if (acStatus == false) {
        acStatus = true;
        acTemp = 16;
        acSpeed = 1;
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`;
    } else if (acStatus == true) {
        acStatus = false;
        acTemp = 0;
        acSpeed = 0;
        return ''; 
    }
}

function acIncreaseTemp() {
    if(acStatus == true  && (acTemp >= 16 && acTemp < 29)) {
        acTemp++;
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`
    }
    if(acStatus == false) {
        return '';
    } else {
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`;
    }
}

function acDecreaseTemp() {
    if(acStatus == true  && (acTemp > 16 && acTemp <= 29)) {
        acTemp--;
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`
    }
    if(acStatus == false) {
        return '';
    } else {
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`;
    }

}

function controlSpeed () {
    if(acStatus == true && acSpeed < 3) {
        acSpeed++;
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`
    } else if(acStatus == true && acSpeed == 3) {
        acSpeed = 1;
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`
    }
    if(acStatus == false) {
        return '';
    } else {
        return `AC Temp: ${acTemp} <br> AC Speed: ${acSpeed}`;
    }    
}




