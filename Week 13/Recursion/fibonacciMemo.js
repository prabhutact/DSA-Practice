function fibonacci(n,memo={}){
    if(n===0) return 0
    if(n===1) return 1
    if(memo[n]) return memo[n]
    
    return fibonacci(n-1, memo) + fibonacci(n-2, memo)
}

console.log(fibonacci(7))

// Time Complexity O(n) & SPace Complexity O(n)