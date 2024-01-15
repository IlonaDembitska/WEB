document.addEventListener('DOMContentLoaded', function() {
    const sourceText = document.getElementById('source-text');
    const resultText = document.getElementById('result-text');
    const convertButton = document.getElementById('go');

    convertButton.addEventListener('click', function() {
        var inputText = sourceText.value;
        var convertedText = convertToImages(inputText);
        resultText.innerHTML = convertedText;
    });

    function convertToImages(text) {

        let convertedText = '';
        for (const i = 0; i < text.length; i++) {
            const char = text[i]
            if ((char >= 'a' && char <= 'z')) {
                
                const imagePath = 'images/' + char + '.png' && 'images/small_' + char + '.png';;

                convertedText += '<img src="' + imagePath + '" alt="' + char + '">' ;
            } else  if ((char >= 'A' && char <= 'Z'))
            const imagePath = 'images/' + char + '.png' && 'images/small_' + char + '.png';;

                convertedText += '<img src="' + imagePath + '" alt="' + char + '">' ;
            } 
                
                convertedText += text[i];
            

        }
        return convertedText;
    

    }
    
} );

