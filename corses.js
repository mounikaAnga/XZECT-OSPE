document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language');
    const priceSelect = document.getElementById('price');
    const skillSelect = document.getElementById('skill');
    const cards = document.querySelectorAll('.card');

    function filterCards() {
        const selectedLanguage = languageSelect.value;
        const selectedPrice = priceSelect.value;
        const selectedSkill = skillSelect.value;

        cards.forEach(card => {
            const cardLanguage = card.getAttribute('data-language');
            const cardPrice = card.getAttribute('data-price');
            const cardSkill = card.getAttribute('data-skill');

            const languageMatch = selectedLanguage === 'all' || selectedLanguage === cardLanguage;
            const priceMatch = selectedPrice === 'all' || selectedPrice === cardPrice;
            const skillMatch = selectedSkill === 'all' || selectedSkill === cardSkill;

            if (languageMatch && priceMatch && skillMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    languageSelect.addEventListener('change', filterCards);
    priceSelect.addEventListener('change', filterCards);
    skillSelect.addEventListener('change', filterCards);
});
