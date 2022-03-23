export default function GetPoundsFromKilos(kilos) {
    if(kilos && typeof kilos == "number"){
        let ans = kilos * 2.205;
        return ans;
    } else return "Error"; 
}
