class CaseUtil{

    constructor() {
    }
    toSnakeCase(s){
        return s.replaceAll(" ", "_");
    }

    toKebabCase(s){
        return s.replaceAll(" ", "-");
    }

    toCamelCase(s){
        while(s.indexOf(" ") !== -1){
            const idx = s.indexOf(" ");
            s = s.replace(" ", "");
            const capital = s.substring(idx, idx + 1).toUpperCase();
            s = s.substring(0, idx) + capital + s.substring(idx + 1, s.length);
        }
        return s;
    }

    // bonjour le monde --> bonjouRlEmondE
    toAlexandreCase(s){
        const ret = [];
        for(const word of s.split(" ")){
            const lastLetterCapitalized = word.substring(word.length - 1, word.length).toUpperCase();
            const wordWithLastLetterCapitalized = word.substring(0, word.length - 1) + lastLetterCapitalized;
            ret.push(wordWithLastLetterCapitalized)
        }
        return ret.join("");
    }

}



class CaseWord{
    constructor(underlyingText) {
        this.underlyingText = underlyingText;
    }

    kebebCase(){
        const caseUtil = new CaseUtil();
        return caseUtil.toKebabCase(this.underlyingText);
    }

    snakeCase(){
        const caseUtil = new CaseUtil();
        return caseUtil.toSnakeCase(this.underlyingText);
    }
}



const wasim = new CaseWord("wasim est cool");
const rachid = new CaseWord("rachid est cool");
alert(wasim.kebebCase()); // wasim-est-cool
alert(rachid.snakeCase()); // rachid_est_cool







