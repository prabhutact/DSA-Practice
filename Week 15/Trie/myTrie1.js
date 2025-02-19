class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }
    print(){
        let words = []
        let traverse = (node, prefix)=>{
            if(node.isEndOfWord){
                words.push(prefix)
            }
            for(let char in node.children){
                traverse(node.children[char], prefix + char)
            }
        }
        traverse(this.root, "")
        return words
    }
    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return "No Suggestions"
            }
            node = node.children[char]
        }
        return this.printWordsWithPrefix(node, prefix)
    }
    printWordsWithPrefix(node, prefix){
        let words = []
        let traverse = (node, currPrefix)=>{
            if(node.isEndOfWord){
                words.push(currPrefix)
            }
            for(let char in node.children){
                traverse(node.children[char], currPrefix+char)
            }
        }
        traverse(node, prefix)
        return words
    }
}

let trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("bat");
trie.insert("batman");
trie.insert("batmobile");

// Search for words
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("batman")); // true
console.log(trie.search("bat")); // true
console.log(trie.search("batman123")); // false

// Check if words start with a prefix
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("bat")); // true
console.log(trie.startsWith("bana")); // true
console.log(trie.startsWith("xyz")); // false

// Auto-complete suggestions for a given prefix
console.log(trie.autoComplete("bat")); // ["bat", "batman", "batmobile"]
console.log(trie.autoComplete("app")); // ["apple", "app"]
console.log(trie.autoComplete("banana")); // ["banana"]
console.log(trie.autoComplete("xyz")); // "No Suggestions"

// Print all words stored in the trie
console.log(trie.print()); // ["apple", "app", "banana", "bat", "batman", "batmobile"]