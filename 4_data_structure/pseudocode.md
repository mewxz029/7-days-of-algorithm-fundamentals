# Challenge Problem 

isValid(s)
use stack to store the characters

1. iterate through the string
2. if the character is an opening bracket, push it to the stack
3. if the character is a closing bracket, check if the stack is empty; return false; else pop the stack
4. if last iteration, check if the stack is empty; return true; else return false
