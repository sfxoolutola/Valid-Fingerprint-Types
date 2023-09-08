# VALID FINGERPRINT TYPES

Given a string used to know the types of fingerprint data that needs to be collected in a certain kind of enrolment system,
write a method to validate the string based on the following rules:

1.  Each finger type should be represented with the keys shown in the Appendix at the bottom of this note (The keys should be separated by commas).
2.  For every finger type from the right hand present in the string, its left hand finger equivalent must also be present
    (E.g. If a right thumb is present, a left thumb should also be present. If a right index is present, a left index should also be present, etc).
3.  An empty string is also valid.

## Examples

1.  Input fingerprintTypes = “1,2,6,7”<br />
    Output - true
2.  Input fingerprintTypes = “1,2,3,9”<br />
    Output - false
3.  Input fingerprintTypes = “”<br />
    Output - true
4.  Input fingerprintTypes = “6,7,8”<br />
    Output - false
5.  Input fingerprintTypes = “2,3,4,5,7,8,9,10”<br />
    Output - true
6.  Input fingerprintTypes = “left thumb and right thumb”<br />
    Output - false
7.  Input fingerprintTypes = “1,2,9,10”<br />
    Output - false
8.  Input fingerprintTypes = “1,6”<br />
    Output - true
