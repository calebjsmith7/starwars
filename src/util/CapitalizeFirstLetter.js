export default function CapitalizeFirstLetter(word) {
    let ans = word.charAt(0).toUpperCase() + word.slice(1)
    return ans;
}