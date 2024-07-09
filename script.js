const togglerSvg = document.getElementById('toggler-svg');
const button = togglerSvg.parentNode;

button.addEventListener('click', () => {
    if (togglerSvg.innerHTML.includes('rect')) {
        togglerSvg.innerHTML = `
            <line x1="7" y1="6" x2="23" y2="20" stroke="#baffa1" stroke-width="5" stroke-linecap="round" />
            <line x1="7" y1="20" x2="23" y2="6" stroke="#baffa1" stroke-width="5" stroke-linecap="round" />
        `;

    } else {
        togglerSvg.innerHTML = `
            <rect x="2.5" y="3" width="25" height="2" rx="1" fill="#baffa1" />
            <rect x="2.5" y="11" width="25" height="2" rx="1" fill="#baffa1" />
            <rect x="2.5" y="19" width="25" height="2" rx="1" fill="#baffa1" />
        `;
    }
});

if (screen.width<=800) {
    
}