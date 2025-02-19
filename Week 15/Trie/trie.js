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
    startWith(prefix){
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
                traverse(node.children[char], currPrefix + char)
            }
        }
        traverse(node, prefix)
        return words
    }
}