// Sometimes it’s very useful to set reminder to help you accomplish all of your tasks.
// The program you are given takes an event as input.
// Complete the function-reminder to take that event as argument and output the corresponding message.

function main() {
    var eventExample = readLine();
    // function call
    setReminder(eventExample)
}
//complete the function
function setReminder(eventExample) {
    console.log('You set a reminder about ' + eventExample)
};