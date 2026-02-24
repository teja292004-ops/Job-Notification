// Sample job data
const sampleJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', experience: '5+ years', matchScore: 95, postedDaysAgo: 1 },
    { id: 2, title: 'Full Stack Engineer', company: 'StartupXYZ', location: 'New York', experience: '3-5 years', matchScore: 88, postedDaysAgo: 2 },
    { id: 3, title: 'React Developer', company: 'WebSolutions', location: 'San Francisco', experience: '2-4 years', matchScore: 92, postedDaysAgo: 1 },
    { id: 4, title: 'Backend Developer', company: 'DataCo', location: 'Remote', experience: '4+ years', matchScore: 85, postedDaysAgo: 3 },
    { id: 5, title: 'UI/UX Engineer', company: 'DesignHub', location: 'Austin', experience: '3+ years', matchScore: 90, postedDaysAgo: 1 },
    { id: 6, title: 'DevOps Engineer', company: 'CloudTech', location: 'Seattle', experience: '5+ years', matchScore: 82, postedDaysAgo: 4 },
    { id: 7, title: 'Mobile Developer', company: 'AppFactory', location: 'Remote', experience: '3-5 years', matchScore: 87, postedDaysAgo: 2 },
    { id: 8, title: 'Software Architect', company: 'Enterprise Inc', location: 'Boston', experience: '7+ years', matchScore: 94, postedDaysAgo: 1 },
    { id: 9, title: 'Frontend Lead', company: 'Innovation Labs', location: 'Remote', experience: '6+ years', matchScore: 91, postedDaysAgo: 2 },
    { id: 10, title: 'JavaScript Developer', company: 'CodeWorks', location: 'Chicago', experience: '2-4 years', matchScore: 86, postedDaysAgo: 3 },
    { id: 11, title: 'Python Developer', company: 'AI Solutions', location: 'Remote', experience: '4+ years', matchScore: 89, postedDaysAgo: 1 },
    { id: 12, title: 'Cloud Engineer', company: 'SkyNet', location: 'Denver', experience: '5+ years', matchScore: 83, postedDaysAgo: 5 }
];

// Initialize jobs in localStorage if not present
if (!localStorage.getItem('jobTrackerJobs')) {
    localStorage.setItem('jobTrackerJobs', JSON.stringify(sampleJobs));
}

function displayJobs() {
    const jobs = JSON.parse(localStorage.getItem('jobTrackerJobs') || '[]');
    const jobsList = document.getElementById('jobsList');
    
    if (jobs.length === 0) {
        jobsList.innerHTML = '<p>No jobs available.</p>';
        return;
    }

    jobsList.innerHTML = jobs.map(job => `
        <div class="job-card">
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">${job.company}</p>
            <div class="job-details">
                <span class="job-detail">📍 ${job.location}</span>
                <span class="job-detail">💼 ${job.experience}</span>
                <span class="job-detail">📅 ${job.postedDaysAgo} days ago</span>
            </div>
            <span class="match-score">${job.matchScore}% Match</span>
            <div style="margin-top: 1rem;">
                <button class="btn btn-primary" onclick="applyJob(${job.id})">Apply Now</button>
            </div>
        </div>
    `).join('');
}

function applyJob(jobId) {
    alert(`Application submitted for job ID: ${jobId}`);
}

displayJobs();
