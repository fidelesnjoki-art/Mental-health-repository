function testGetResponse() {
    let result = getResponse("I feel sad");

    if (result.includes("sorry")) {
        console.log("Test Passed");
    }
    else {
        console.log("Test Failed");
    }
}
