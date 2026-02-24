function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD
}

function getFormattedDate() {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function generateDigest() {
    const preferences = JSON.parse(localStorage.getItem('jobTrackerPreferences') || 'null');
    
    if (!preferences) {
        showBlockingMessage('Set preferences to generate a personalized digest.');
        return;
    }
    
    const todayKey = `jobTrackerDigest_${getTodayDate()}`;
    const existingDigest = localStorage.getItem(todayKey);
    
    if (existingDigest) {
        displayDigest(JSON.parse(existingDigest));
        return;
    }
    
    const jobs = JSON.parse(localStorage.getItem('jobTrackerJobs') || '[]');
    
    // Sort by matchScore descending, then postedDaysAgo ascending
    const sortedJobs = jobs.sort((a, b) => {
        if (b.matchScore !== a.matchScore) {
            return b.matchScore - a.matchScore;
        }
        return a.postedDaysAgo - b.postedDaysAgo;
    });
    
    const top10 = sortedJobs.slice(0, 10);
    
    if (top10.length === 0) {
        showBlockingMessage('No matching roles today. Check again tomorrow.');
        return;
    }
    
    const digest = {
        date: getTodayDate(),
        formattedDate: getFormattedDate(),
        jobs: top10
    };
    
    localStorage.setItem(todayKey, JSON.stringify(digest));
    displayDigest(digest);
}

function showBlockingMessage(message) {
    const content = document.getElementById('digestContent');
    content.innerHTML = `
        <div class="blocking-message">
            <h3>⚠️ ${message}</h3>
            ${message.includes('preferences') ? '<p><a href="preferences.html" class="btn btn-primary">Go to Preferences</a></p>' : ''}
        </div>
    `;
}

function displayDigest(digest) {
    const content = document.getElementById('digestContent');
    
    const jobsHTML = digest.jobs.map(job => `
        <div class="digest-job">
            <div class="digest-job-title">${job.title}</div>
            <div class="digest-job-info">🏢 ${job.company}</div>
            <div class="digest-job-info">📍 ${job.location}</div>
            <div class="digest-job-info">💼 ${job.experience}</div>
            <div class="digest-job-score">${job.matchScore}% Match</div>
            <div class="digest-job-apply">
                <button class="btn btn-primary" onclick="applyJob(${job.id})">Apply Now</button>
            </div>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div class="digest-container">
            <div class="digest-header">
                <h2>Top 10 Jobs For You — 9AM Digest</h2>
                <p class="digest-date">${digest.formattedDate}</p>
            </div>
            <div class="digest-body">
                ${jobsHTML}
            </div>
            <div class="digest-footer">
                <p>This digest was generated based on your preferences.</p>
                <div class="digest-actions">
                    <button class="btn btn-secondary" onclick="copyDigestToClipboard()">Copy Digest to Clipboard</button>
                    <button class="btn btn-primary" onclick="createEmailDraft()">Create Email Draft</button>
                </div>
            </div>
        </div>
    `;
}

function copyDigestToClipboard() {
    const todayKey = `jobTrackerDigest_${getTodayDate()}`;
    const digest = JSON.parse(localStorage.getItem(todayKey));
    
    if (!digest) return;
    
    let text = `TOP 10 JOBS FOR YOU — 9AM DIGEST\n`;
    text += `${digest.formattedDate}\n\n`;
    
    digest.jobs.forEach((job, index) => {
        text += `${index + 1}. ${job.title}\n`;
        text += `   Company: ${job.company}\n`;
        text += `   Location: ${job.location}\n`;
        text += `   Experience: ${job.experience}\n`;
        text += `   Match Score: ${job.matchScore}%\n\n`;
    });
    
    text += `This digest was generated based on your preferences.`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Digest copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function createEmailDraft() {
    const todayKey = `jobTrackerDigest_${getTodayDate()}`;
    const digest = JSON.parse(localStorage.getItem(todayKey));
    
    if (!digest) return;
    
    let body = `TOP 10 JOBS FOR YOU — 9AM DIGEST%0D%0A`;
    body += `${digest.formattedDate}%0D%0A%0D%0A`;
    
    digest.jobs.forEach((job, index) => {
        body += `${index + 1}. ${job.title}%0D%0A`;
        body += `   Company: ${job.company}%0D%0A`;
        body += `   Location: ${job.location}%0D%0A`;
        body += `   Experience: ${job.experience}%0D%0A`;
        body += `   Match Score: ${job.matchScore}%25%0D%0A%0D%0A`;
    });
    
    body += `This digest was generated based on your preferences.`;
    
    const subject = 'My 9AM Job Digest';
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
}

function applyJob(jobId) {
    alert(`Application submitted for job ID: ${jobId}`);
}

document.getElementById('generateDigest').addEventListener('click', generateDigest);

// Auto-load digest if it exists for today
window.addEventListener('DOMContentLoaded', function() {
    const todayKey = `jobTrackerDigest_${getTodayDate()}`;
    const existingDigest = localStorage.getItem(todayKey);
    
    if (existingDigest) {
        displayDigest(JSON.parse(existingDigest));
    }
});
