export default function GetPoundsFromKilos(kilos) {
    let numEquivalent = parseInt(kilos);
    if(kilos && typeof numEquivalent == "number"){
        let ans = kilos * 2.205;
        return ans;
    } else return "Error"; 
}
