export default function GetFeetFromCm(centemeters) {
    let numEquivalent = parseInt(centemeters);
    if(centemeters && typeof numEquivalent == "number"){
        let inches = centemeters / 2.54;
        let feet = Math.floor(inches/12);
        let inchesRemaining = Math.ceil(((inches/12) - feet) * 12);
        let response = feet + ' ft, ' + inchesRemaining + ' in'
        if(inches || feet){
            return response;
        }  else return "Error";
    } else return "Error";
}
