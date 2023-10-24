let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')


    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget
      .querySelector('span').textContent = ` ${mode} mode ativado!`

    darkMode = !darkMode // essa é a maneira que fazemos uma troca entre true e false em uma variavel booleana.
})