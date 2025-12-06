const medicalForm = document.getElementById('medical-form');
const adviceContainer = document.getElementById('advice-container');
const adviceText = document.getElementById('advice-text');

const SYSTEM_PROMPT = {
    disclaimer: "N'oubliez pas de consulter un professionnel de la santé agréé pour tout diagnostic ou traitement."
};

medicalForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const symptoms = document.getElementById('symptoms').value.toLowerCase();
    const duration = parseInt(document.getElementById('duration').value);
    const severity = document.getElementById('severity').value;

    const advice = generateAdvice(symptoms, duration, severity);

    adviceText.innerText = `${advice}\n\n${SYSTEM_PROMPT.disclaimer}`;
    adviceContainer.classList.remove('hidden');
});

function generateAdvice(symptoms, duration, severity) {
    if (severity === 'sévère') {
        return "Étant donné la nature sévère de vos symptômes, il est fortement recommandé de consulter immédiatement un médecin ou de vous rendre aux urgences les plus proches.";
    }

    if (symptoms.includes('douleur thoracique') || symptoms.includes('difficulté à respirer') || symptoms.includes('saignement abondant')) {
        return "D'après les symptômes que vous avez décrits, vous devriez consulter les services d'urgence immédiatement. Veuillez appeler votre numéro d'urgence local ou vous rendre à l'hôpital le plus proche.";
    }

    if (symptoms.includes('mal de tête')) {
        if (duration > 3) {
            return "Un mal de tête qui dure plusieurs jours, même s'il est modéré, devrait être évalué par un professionnel de la santé pour écarter tout problème sous-jacent. En attendant, assurez-vous d'être bien hydraté et de vous reposer suffisamment.";
        }
        return "Pour un mal de tête léger à modéré, il est souvent utile de se reposer dans une pièce calme et sombre, de rester hydraté et de gérer le stress. Les analgésiques en vente libre peuvent être une option, mais il est toujours préférable de consulter un pharmacien ou un médecin.";
    }

    if (symptoms.includes('fièvre')) {
        if (duration > 3) {
            return "Une fièvre qui persiste plus de trois jours devrait être discutée avec un médecin. Il est important de surveiller votre température et de rester bien hydraté en buvant beaucoup de liquides.";
        }
        return "En cas de fièvre, le plus important est de se reposer et de boire beaucoup de liquides pour éviter la déshydratation. Vous pouvez également utiliser une compresse fraîche pour soulager l'inconfort. Si la fièvre est élevée ou si vous vous sentez très mal, un avis médical est recommandé.";
    }

    if (duration > 7) {
        return "Tout symptôme qui persiste plus d'une semaine devrait motiver une consultation chez un professionnel de la santé. Il pourra évaluer correctement votre situation.";
    }

    return "Pour un bien-être général, il est important de se reposer suffisamment, de rester hydraté et d'avoir une alimentation équilibrée. Si vos symptômes vous inquiètent, il est toujours préférable de demander l'avis d'un professionnel de la santé.";
}
