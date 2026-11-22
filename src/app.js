const projects = [
  { title: 'ECG Myocardial Infarction Detection', role: 'Biomedical system · Paper-based implementation', year: '2026', description: 'An ECG-based myocardial infarction classifier, from data preprocessing and feature extraction to machine learning model evaluation.', tags: ['Python', 'C', 'Machine Learning'], url: 'https://github.com/FechL/ecg-myocardial-infarction-detection' },
  { title: 'SAUVC 2026 World Simulation', role: 'Underwater world & mission simulation', year: '2026', description: 'An underwater world in Gazebo / Ignition for simulating sensors, vehicle dynamics, and SAUVC 2026 mission scenarios.', tags: ['Gazebo', 'Ignition', 'Simulation'], url: 'https://github.com/FechL/sauvc26-world' },
  { title: 'Cloud-Based Attendance Management', role: 'Team lead · AWS infrastructure', year: '2026', description: 'A real-time attendance system built with a five-member team. Led the team and managed its AWS infrastructure across compute, networking, and databases.', tags: ['AWS', 'EC2', 'RDS', 'VPC', 'IAM'], url: 'https://github.com/wildanaziz/astrodance/tree/main' },
  { title: 'Air Quality & ISPA Analysis Pipeline', role: 'Data engineering & dashboard development', year: '2025', description: 'A Python / PostgreSQL ETL pipeline and Streamlit dashboard exploring Indonesian air quality trends and their relationship with ISPA prevalence.', tags: ['Python', 'PostgreSQL', 'Streamlit', 'ETL'], url: 'https://github.com/iqqy-x/PID-Air-Quality' },
  { title: 'ROS 2 Learning', role: 'Learning materials & mentoring', year: '2024', description: 'Hands-on learning materials covering ROS 2 fundamentals, communication patterns, and development workflows for fellow robotics programmers.', tags: ['ROS 2', 'Robotics', 'Mentorship'], url: 'https://github.com/FechL/ros2-learning' }
];
const experience = [
  { company: 'PT Pertamina Patra Niaga', logo: 'pertamina.png', role: 'Procurement Transformation Intern', dates: 'Sep 2026 — Present', location: 'Balikpapan, East Kalimantan', current: true, items: ['Supporting ContractGuard 360: digitizing contracts and amendments, guarantees, persons in charge, due dates, evidence, and early warnings.', 'Developing TKDN monitoring concepts and supporting Emergency Procurement workflows through requirements analysis, business rule validation, and test datasets.'] },
  { company: 'CV. Gumelar', logo: 'gumelar.png', role: 'Software Engineer Intern', dates: 'Jul 2026 — Aug 2026', location: 'Surakarta, Central Java', items: ['Built the company profile website from page structure through implementation, then integrated it with a cloud server and prepared the deployment environment.'] },
  { company: 'Singapore AUV Challenge 2026', logo: 'sauvc.png', role: 'Programmer Core Team', dates: 'Dec 2025 — Jun 2026', location: 'Sanya, China', items: ['Developed and integrated autonomous underwater vehicle software for navigation, mission execution, and sensor processing.', 'Coordinated technical tasks, reviewed code, mentored programmers, and optimized algorithms during testing and competition preparation.'] },
  { company: 'AITF Komdigi 2025', logo: 'komdigi.png', role: 'Data Engineer & AI Researcher Intern', dates: 'Aug 2025 — Dec 2025', location: 'Komdigi, Jakarta', items: ['Led AI research and data-driven experiments for a digital monitoring system in the PRD use case.', 'Built data pipelines and database structures, collaborating on LLM-based analysis workflows for reliable and scalable system performance.'] },
  { company: 'Kontes Robot Indonesia 2024', logo: 'kri-2024.png', role: 'Programming Support Team', dates: 'Mar 2024 — May 2024', location: 'UMS, Central Java', items: ['Supported motion control development, testing, and optimization for reliable underwater navigation in the Indonesian Autonomous Submarine Robot Contest (KRBAI).'] }
];
const overviewGrid = document.querySelector('.overview-grid');
const readmeColumn = document.querySelector('.readme-column');
const sidebar = document.querySelector('.sidebar');
const profileCard = document.querySelector('#profile-info');
const stackedOverview = window.matchMedia('(max-width: 900px)');
// Keep the reading and keyboard order aligned with the stacked layout.
function syncOverviewLayout() {
  if (stackedOverview.matches) {
    readmeColumn.prepend(profileCard);
    overviewGrid.append(sidebar);
  } else {
    sidebar.prepend(profileCard);
    overviewGrid.prepend(sidebar);
  }
}
stackedOverview.addEventListener('change', syncOverviewLayout);
syncOverviewLayout();

document.querySelector('#project-list').innerHTML = projects.map(project => `<article class="project-entry"><div class="entry-heading"><h2><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a></h2><span class="entry-date">${project.year}</span></div><p>${project.description}</p><p class="entry-meta">${project.role}<br>${project.tags.join(' · ')}</p></article>`).join('');
document.querySelector('#selected-projects').innerHTML = projects.map(project => `<li><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a></li>`).join('');
document.querySelector('#overview-experience').innerHTML = experience.map(item => `<li><a href="#experience">${item.company}</a></li>`).join('');
document.querySelector('#experience-list').innerHTML = experience.map(item => `<article class="timeline-item${item.current ? ' current' : ''}"><div class="timeline-meta"><span>${item.dates}</span>${item.current ? '<span class="current-label">CURRENT</span>' : ''}</div><div class="organization-heading"><img class="organization-logo${item.logo === 'komdigi.png' ? ' organization-logo-dark' : ''}" src="img/organizations/${item.logo}" alt="" width="44" height="44" decoding="async"><div class="organization-summary"><h2>${item.company}</h2><p class="role-label">${item.role}</p></div></div><p class="work-location">${item.location}</p><ul>${item.items.map(text => `<li>${text}</li>`).join('')}</ul></article>`).join('');

const preferences = window.portfolioPreferences;
for (const mode of ['dark', 'light']) {
  document.querySelector(`#${mode}-themes`).innerHTML = preferences.themes.filter(theme => theme.mode === mode).map(theme => `<button class="option" data-preference="theme" data-value="${theme.id}" type="button" aria-pressed="false"><span class="swatches" aria-hidden="true">${[6, 7, 8].map(index => `<i style="background:${theme.colors[index]}"></i>`).join('')}</span><span>${theme.name}</span><span class="check" aria-hidden="true">✓</span></button>`).join('');
}
document.querySelector('#font-options').innerHTML = preferences.fonts.map(([id, name]) => `<button class="option" data-preference="font" data-value="${id}" type="button" aria-pressed="false"><span>${name}</span><span class="font-sample" style="font-family:'${name}', ${id === 'geist' || id === 'ibm' ? 'monospace' : 'sans-serif'}">Aa 0123</span><span class="check" aria-hidden="true">✓</span></button>`).join('');
document.querySelector('#size-options').innerHTML = preferences.sizes.map((size, i) => `<button class="option" data-preference="size" data-value="${size}" type="button" aria-pressed="false"><span>${['Small', 'Default', 'Large', 'Extra large', 'Maximum'][i]}</span><span class="size-sample">${size}%</span><span class="check" aria-hidden="true">✓</span></button>`).join('');
function syncPreferences() {
  document.querySelectorAll('[data-preference]').forEach(button => { const selected = preferences.state[button.dataset.preference] === button.dataset.value; button.setAttribute('aria-pressed', String(selected)); button.classList.toggle('active', selected); });
}
document.querySelectorAll('[data-preference]').forEach(button => button.addEventListener('click', () => {
  preferences.set(button.dataset.preference, button.dataset.value);
  syncPreferences();
  const name = button.dataset.preference === 'theme' ? preferences.themes.find(theme => theme.id === button.dataset.value).name : button.dataset.preference === 'font' ? preferences.fonts.find(font => font[0] === button.dataset.value)[1] : `${button.dataset.value}%`;
  document.querySelector('#preferences-status').textContent = `${name} applied.${preferences.storageAvailable ? ' Preference saved.' : ' Browser storage is unavailable.'}`;
}));
document.querySelector('#reset-preferences').addEventListener('click', () => {
  Object.entries(preferences.defaults).forEach(([key, value]) => preferences.set(key, value));
  syncPreferences();
  document.querySelector('#preferences-status').textContent = 'Default preferences restored.';
});
syncPreferences();
const pageIds = ['overview', 'projects', 'experience', 'configuration'];
const pageTitles = { overview: 'Robotics, AI & Cloud', projects: 'Projects', experience: 'Experience', configuration: 'Configuration' };
const menuButton = document.querySelector('.mobile-menu');
function navigate(focus = false) {
  const requested = location.hash.slice(1);
  // Preserve the old portfolio's inbound anchors.
  const aliases = { portfolio: 'projects', contact: 'overview', about: 'overview', home: 'overview' };
  const anchorIds = { about: 'education', contact: 'contact-info', 'technical-skills': 'toolbox' };
  const candidate = document.getElementById(anchorIds[requested] || requested);
  const anchor = candidate && candidate.id !== 'overview' && document.querySelector('#overview').contains(candidate) ? candidate : null;
  const page = pageIds.includes(requested) ? requested : aliases[requested] || 'overview';
  document.querySelectorAll('.page').forEach(section => { section.hidden = section.id !== page; });
  document.querySelectorAll('.nav-link').forEach(link => { const active = link.hash === `#${page}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  document.title = `Fawwas Aliy | ${pageTitles[page]}`;
  menuButton.setAttribute('aria-expanded', 'false');
  document.querySelector('.navigation').classList.remove('menu-open');
  document.querySelector('#mobile-page').textContent = page === 'overview' ? 'README.md' : pageTitles[page];
  if (focus) document.querySelector('#main').focus({ preventScroll: true });
  if (anchor) {
    if (anchor.hasAttribute('tabindex')) anchor.focus({ preventScroll: true });
    anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
  } else if (focus) window.scrollTo({ top: 0, behavior: 'instant' });
}
document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#main').focus();
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  if (link.hash === location.hash) navigate(true);
}));
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  document.querySelector('.navigation').classList.toggle('menu-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
window.addEventListener('hashchange', () => navigate(true));
navigate();
