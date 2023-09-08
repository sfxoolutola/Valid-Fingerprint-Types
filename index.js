const isFingerprintTypesValid = (fingerPrintInputString) => { 
    if(fingerPrintInputString.length === 0) return true;
    
    const DIFFERENCE_BETWEEN_LEFT_AND_RIGHT = 5
    let rightFingerArray = []
    let leftFingerArray = []
    
    // Converting the string into an array and storing them in separate arrays for the right finger(s) and the left finger(s)
    // Sorting is done to make the check possible irrespective of the finger arrangements
    fingerPrintInputString.split(",").sort((a,b) => a - b).map((item) => {
        let num = parseInt(item)
        if (num <= 5) {
            // adding the difference to the right array to make it's values equal to the left array
            rightFingerArray.push(num  + DIFFERENCE_BETWEEN_LEFT_AND_RIGHT)
        } else {
            leftFingerArray.push(num)
        }
    });
    
    if (rightFingerArray.length !== leftFingerArray.length) return false
    
    if (JSON.stringify(rightFingerArray) === JSON.stringify(leftFingerArray)) return true
    
    return false
}
