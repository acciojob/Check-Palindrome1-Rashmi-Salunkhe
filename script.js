// complete the given function
function palindrome(str) {
            const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            const reversedStr = cleanedStr.split('').reverse().join('');
            return cleanedStr === reversedStr;
        }

        document.getElementById('checkPalindrome').addEventListener('click', function () {
            const input = document.getElementById('inputText').value;
            const isPalindrome = palindrome(input);
            document.getElementById('result').textContent = isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
        });

module.exports = palindrome
