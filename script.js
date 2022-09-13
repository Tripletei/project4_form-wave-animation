const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
      .split('')
      .map((letter, idk) => `<span
      style=transition-delay:${idk * 50}">${letter}</span>`)
      .join('')
})