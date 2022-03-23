export default function CapitalizeFirstLetter(word) {
    const regex = /[a-zA-Z]/;
    if(typeof word == "string" && regex.test(word.charAt(0))){
        let ans = word.charAt(0).toUpperCase() + word.slice(1)
        return ans;
    } else {
       return "Error";
    }
}