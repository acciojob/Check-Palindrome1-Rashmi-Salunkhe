  function palindrome(str) {
            // Remove non-alphanumeric characters and convert to lowercase
            const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            // Reverse the cleaned string
            const reversedStr = cleanedStr.split('').reverse().join('');
            // Compare the cleaned string with the reversed version
            return cleanedStr === reversedStr;
        }

        // Add an event listener to the button to check for palindrome
        document.getElementById('checkPalindrome').addEventListener('click', function () {
            const input = document.getElementById('inputText').value;
            const isPalindrome = palindrome(input);
            document.getElementById('result').textContent = isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
        });

        // Export the function if needed for testing or other use cases
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = palindrome;
        }
