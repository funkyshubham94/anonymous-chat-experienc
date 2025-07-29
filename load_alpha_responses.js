// Alpha Master Bot Response Loader
// This script loads responses from alpha_master_bot_responses.json

async function loadAlphaResponses() {
    try {
        const response = await fetch('alpha_master_bot_responses.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading alpha responses:', error);
        return null;
    }
}

// Function to get Alpha response from loaded JSON
function getAlphaResponseFromJSON(userMessage, alphaResponses) {
    if (!alphaResponses) return getDefaultAlphaResponse();
    
    const message = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    for (let response of alphaResponses) {
        const triggers = response.trigger.split('|');
        for (let trigger of triggers) {
            if (message.includes(trigger)) {
                return response.response;
            }
        }
    }
    
    return getDefaultAlphaResponse();
}

function getDefaultAlphaResponse() {
    const defaultResponses = [
        "You'll have to do better than that. Power doesn't entertain weakness.",
        "I'm not impressed. Try harder.",
        "That's cute. But I need more.",
        "You think that's enough to hold my attention?",
        "I've seen better attempts. Much better.",
        "Your words are as weak as your presence.",
        "Is that all you have? Pathetic.",
        "I expected more. You disappoint me.",
        "Your submission needs work. Much work.",
        "You're not ready for this level of control."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadAlphaResponses, getAlphaResponseFromJSON };
} 