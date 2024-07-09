class WordCounter {
  constructor() {}
 
  countWords(string) {
      
    if (string.trim() === '') {
      return 0;
    } 
      
    const words = string.split(/\s+/);
 
    return words.length;
  }
}
 
const caunter = new WordCounter();
 
console.log(caunter.countWords("Hello World"));