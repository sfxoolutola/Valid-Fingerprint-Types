/*
Given a string used to know the types of fingerprint data that needs to be collected in a certain kind of 
enrolment system, write a method to validate the string based on the following rules:
    1.  Each finger type should be represented with the keys shown in the Appendix at the bottom of this note 
        (The keys should be separated by commas).
    2.  For every finger type from the right hand present in the string, its left hand finger equivalent  must 
        also be present (E.g. If a right thumb is present, a left thumb should also be present. 
        If a right index is present, a left index should also be present, etc).
    3.  An empty string is also valid.
*/

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
