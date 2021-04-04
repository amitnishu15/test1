var lengthLongestSubstring = function(s) {
    if(s.length < 2) {
        return s.length;
    }
    const map = {};
    let front = 0;
    let back = 0;
    let maxLength = 0;
    for(let front = 0; front < s.length; front++) {
        const exist = map[s[front]];
        if(exist !== undefined && back <= exist) {
            back = exist+1;
        }
        map[s[front]] = front;
        maxLength = Math.max(front-back+1, maxLength);
    }
    return maxLength;
}

console.log(lengthLongestSubstring("abcda"));