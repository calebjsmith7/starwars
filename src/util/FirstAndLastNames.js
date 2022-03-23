export default function FirstAndLastNames(name) {
    if(typeof name == "string" && name){
        let ans = {
            first: null,
            last: null
        };
        let parts = name.split(" "),
            first = parts.shift(),
            last = parts.shift() || "";
        ans.first = first;
        ans.last = last;
        return ans;
    } else return "Error"; 
}
