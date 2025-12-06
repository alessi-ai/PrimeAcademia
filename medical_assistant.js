document.getElementById('medical-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const symptoms = document.getElementById('symptoms').value.toLowerCase();
    const duration = parseInt(document.getElementById('duration').value, 10);
    const age = parseInt(document.getElementById('age').value, 10);
    const responseContainer = document.getElementById('response-container');

    let advice = '';
    let warnings = '';

    // Input validation
    if (symptoms.trim() === '') {
        advice = `<p>Veuillez décrire vos symptômes pour recevoir des informations.</p>`;
        responseContainer.innerHTML = advice;
        return;
    }

    if (isNaN(duration) || isNaN(age)) {
        advice = `<p>Veuillez entrer un âge et une durée valides.</p>`;
        responseContainer.innerHTML = advice;
        return;
    }

    // Rule-based logic for generating advice
    if (symptoms.includes('douleur thoracique') || symptoms.includes('difficulté à respirer') || symptoms.includes('perte de conscience')) {
        advice = `
            <p><strong>Urgence Médicale Potentielle :</strong> Les symptômes que vous décrivez, tels que la douleur thoracique, la difficulté à respirer, ou la perte de conscience, peuvent indiquer une condition médicale grave. Il est impératif de chercher une assistance médicale d'urgence immédiatement.</p>
            <p><strong>Appelez le 15 ou le 112, ou rendez-vous aux urgences les plus proches.</strong></p>
        `;
    } else if (symptoms.includes('fièvre') && symptoms.includes('toux')) {
        advice = `
            <p><strong>Informations Générales :</strong> Les symptômes de fièvre et de toux sont courants et peuvent être associés à diverses affections respiratoires, comme le rhume ou la grippe.</p>
            <ul>
                <li>Assurez-vous de bien vous reposer.</li>
                <li>Hydratez-vous en buvant beaucoup de liquides.</li>
                <li>Des médicaments en vente libre peuvent aider à gérer les symptômes, mais suivez toujours les instructions.</li>
            </ul>
        `;
    } else if (symptoms.includes('mal de tête')) {
        advice = `
            <p><strong>Informations Générales :</strong> Le mal de tête est un symptôme très courant. Il peut être causé par le stress, la fatigue, ou la déshydratation.</p>
            <ul>
                <li>Essayez de vous reposer dans un endroit calme et sombre.</li>
                <li>Buvez de l'eau pour vous réhydrater.</li>
                <li>Un analgésique en vente libre peut offrir un soulagement temporaire.</li>
            </ul>
        `;
    } else {
        advice = `
            <p><strong>Informations Générales :</strong> Il est important de surveiller vos symptômes.</p>
            <p>Pour toute préoccupation médicale, il est toujours préférable d'obtenir un avis professionnel.</p>
        `;
    }

    // Add advice based on duration and age
    if (duration > 7) {
        warnings += `<p><strong>Note :</strong> Puisque vos symptômes persistent depuis plus d'une semaine, il est fortement recommandé de consulter un médecin pour un diagnostic précis.</p>`;
    }

    if (age < 5 || age > 65) {
        warnings += `<p><strong>Note :</strong> En raison de l'âge, il est particulièrement important de surveiller attentivement les symptômes et de consulter un médecin si l'état ne s'améliore pas rapidement.</p>`;
    }


    // Disclaimer
    const disclaimer = `
        <hr>
        <p><strong>Avis de non-responsabilité :</strong> Ces informations sont fournies à titre éducatif uniquement et ne remplacent pas un avis médical professionnel, un diagnostic ou un traitement. Consultez toujours votre médecin ou un autre professionnel de la santé qualifié pour toute question que vous pourriez avoir concernant une condition médicale.</p>
    `;

    responseContainer.innerHTML = advice + warnings + disclaimer;
});
