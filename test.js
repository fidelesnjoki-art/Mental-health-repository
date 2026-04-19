
function getResponse(input) {
    const text = input.toLowerCase();

    if (text.includes("sad")) {
        return "I'm sorry to hear that.";
    } else if (text.includes("happy")) {
        return "That's great to hear!";
    } else if (text.includes("angry")) {
        return "I understand you're upset.";
    } else {
        return "Thanks for sharing.";
    }
}

function testGetResponse() {
    let result = getResponse("I feel sad");

    if (result.includes("sorry")) {
        console.log("Test Passed");
    } else {
        console.log("Test Failed");
    }
}
testGetResponse();

console.assert(
  getResponse("sad").includes("sorry"),
  "Test failed"
);