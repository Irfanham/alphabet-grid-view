(() => {
  const charListElement = document.querySelector("#charList");

  const templateCharItem = (char) => `
    <article tabindex="0" class="char-item">
        <h3 class="char"><span class="char-upper">${char.style.upper}</span>
            <span class="char-lower">${char.style.lower}</span>
        </h3>
        <div class="char__description">
            <div class="char__name">${char.name}</div>
            <div class="char__pronounce">${char.pronounce}</div>
        </div>
        <div class="char__example">
            <img src="${char.examples[0].img}" alt="${char.examples[0].title}" class="char__example-img">
            <p class="char__example-name">${char.examples[0].title}</p>
        </div>
    </article>
    
    `;
    charListElement.innerHTML = ''
    alphabets.forEach((char)=>{
        charListElement.innerHTML += templateCharItem(char);
    })
})();
