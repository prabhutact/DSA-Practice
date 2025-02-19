function recursivePalindrome(str,left=0,right=str.length-1){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if(left>=right) return true;
    return str[left]===str[right] ? recursivePalindrome(str,left+1,right-1) : false;
}
console.log(recursivePalindrome('malayalam'))