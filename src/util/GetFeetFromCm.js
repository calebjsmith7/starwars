export default function GetFeetFromCm(centemeters) {
    if(centemeters && typeof centemeters == "number"){
        let inches = centemeters / 2.54;
        let feet = Math.floor(inches/12);
        let inchesRemaining = Math.ceil(((inches/12) - feet) * 12);
        let response = feet + ' ft, ' + inchesRemaining + ' in'
        return response;
    } else return "Error";
}
