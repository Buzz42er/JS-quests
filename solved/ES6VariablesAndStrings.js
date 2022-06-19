//You need to make country cards for a school project.
//The given program takes the country and its capital name as input.
//Complete the function to return a string in the format you are given in the sample output:

//Sample Input
//Portugal
//Lisbon

//Sample Output
//Name: Portugal, Capital: Lisbon

//here is the simplafied concept of how it would work
//create function that creates tamplate for more readable output
function countryCard(){
    //values got form readLine()
    var country = prompt('Country');
    var capital = prompt('Capital');
    //var for tamplate
    let card = `Name: ${country}, Capital: ${capital}`
    //call tamplate
    return card
    //complete the function
    //use backtick (` `) for template literal
    
}
//execute function
countryCard()


//this was the answer, from the problem
function main() {
    var country = readLine();
    var capital = readLine();
    
    countryCard(country, capital);
}

function countryCard(country, capital){
    let card = `Name: ${country}, Capital: ${capital}`
    console.log(card)
    //complete the function
    //use backtick (` `) for template literal
    
}
main()
