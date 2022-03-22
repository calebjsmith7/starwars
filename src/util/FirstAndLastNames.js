function FirstAndLastNames(name) {

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
}

export default FirstAndLastNames;