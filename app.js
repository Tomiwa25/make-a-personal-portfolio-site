/**
 * Modern Software Engineer Portfolio Application Logic
 */

(function () {
  'use strict';

  // 1. DATA INITIALIZATION & OVERRIDES
  let activeData = { ...window.portfolioData };

  // Load custom overrides from localStorage if present
  try {
    const savedOverrides = localStorage.getItem('portfolio_user_customizations');
    if (savedOverrides) {
      const parsed = JSON.parse(savedOverrides);
      activeData.personal = { ...activeData.personal, ...parsed.personal };
      if (parsed.personal && parsed.personal.bioFirstPara) {
        activeData.personal.bio[0] = parsed.personal.bioFirstPara;
      }
    }
  } catch (err) {
    console.warn('Could not load localStorage customizations', err);
  }

  // 2. DOM ELEMENTS
  const navBrandName = document.getElementById('nav-brand-name');
  const heroName = document.getElementById('hero-name');
  const heroRole = document.getElementById('hero-role');
  const heroTagline = document.getElementById('hero-tagline');
  const heroAvailability = document.getElementById('hero-availability');
  const heroEmailDisplay = document.getElementById('hero-email-display');
  const heroGithub = document.getElementById('hero-github');
  const heroLinkedin = document.getElementById('hero-linkedin');
  const codeSnippetName = document.getElementById('code-snippet-name');
  const codeLocation = document.getElementById('code-location');
  const footerName = document.getElementById('footer-name');
  const currentYearSpan = document.getElementById('current-year');
  const statsCounterBar = document.getElementById('stats-counter-bar');
  const aboutBioContainer = document.getElementById('about-bio-container');
  const skillsGrid = document.getElementById('skills-grid');
  const skillCategoryTabs = document.getElementById('skill-category-tabs');
  const skillSearchInput = document.getElementById('skill-search-input');
  const projectsGrid = document.getElementById('projects-grid');
  const projectFilterTabs = document.getElementById('project-filter-tabs');
  const experienceTimeline = document.getElementById('experience-timeline');
  const educationContainer = document.getElementById('education-container');
  const certificationsContainer = document.getElementById('certifications-container');
  const contactEmailVal = document.getElementById('contact-email-val');
  const contactLocationVal = document.getElementById('contact-location-val');
  const contactGithub = document.getElementById('contact-github');
  const contactLinkedin = document.getElementById('contact-linkedin');

  // Modals & UI Controls
  const archModal = document.getElementById('arch-modal');
  const closeArchModalBtn = document.getElementById('close-arch-modal');
  const closeArchBtnAction = document.getElementById('close-arch-btn-action');
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeCta = document.getElementById('hero-resume-cta');
  const experienceResumeLink = document.getElementById('experience-resume-link');
  const closeResumeModal = document.getElementById('close-resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');
  const printableCvContent = document.getElementById('printable-cv-content');

  // Customizer
  const customizerModal = document.getElementById('customizer-modal');
  const openCustomizerBtn = document.getElementById('open-customizer-btn');
  const closeCustomizerModal = document.getElementById('close-customizer-modal');
  const customizerForm = document.getElementById('customizer-form');
  const resetDefaultsBtn = document.getElementById('reset-defaults-btn');

  // Theme & Mobile Menu
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Set current year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. TOAST NOTIFICATION UTILITY
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Copy to clipboard helper
  function copyToClipboard(text, label = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label);
    }).catch(() => {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(label);
    });
  }

  // 4. RENDER PERSONAL INFORMATION
  function renderPersonalInfo() {
    const p = activeData.personal;

    if (navBrandName) navBrandName.textContent = p.name;
    if (heroName) heroName.textContent = p.name;
    if (heroRole) heroRole.textContent = p.role;
    if (heroTagline) heroTagline.textContent = p.tagline;
    if (heroAvailability) heroAvailability.textContent = p.availability;
    if (heroEmailDisplay) heroEmailDisplay.textContent = p.email;
    if (footerName) footerName.textContent = p.name;
    if (contactEmailVal) contactEmailVal.textContent = p.email;
    if (contactLocationVal) contactLocationVal.textContent = p.location;
    if (codeLocation) codeLocation.textContent = p.location;
    if (codeSnippetName) codeSnippetName.textContent = `"${p.name}"`;

    if (heroGithub) heroGithub.href = p.github;
    if (contactGithub) contactGithub.href = p.github;
    if (heroLinkedin) heroLinkedin.href = p.linkedin;
    if (contactLinkedin) contactLinkedin.href = p.linkedin;

    // Render Stats
    if (statsCounterBar && p.stats) {
      statsCounterBar.innerHTML = p.stats.map(stat => `
        <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 text-center hover:border-brand-500/30 transition">
          <p class="font-mono text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
            ${stat.value}
          </p>
          <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">${stat.label}</p>
        </div>
      `).join('');
    }

    // Render About Bio
    if (aboutBioContainer && p.bio) {
      aboutBioContainer.innerHTML = p.bio.map(paragraph => `
        <p class="text-sm sm:text-base leading-relaxed text-slate-300">${paragraph}</p>
      `).join('');
    }
  }

  // 5. RENDER SKILLS MATRIX
  let currentSkillCategory = 'all';
  let currentSkillSearch = '';

  function renderSkillTabs() {
    if (!skillCategoryTabs) return;
    const categories = activeData.skills.categories;

    const tabsHtml = `
      <button class="skill-tab-btn ${currentSkillCategory === 'all' ? 'active bg-brand-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'} px-3.5 py-1.5 rounded-lg text-xs font-medium transition" data-category="all">
        All Skills
      </button>
      ${categories.map(cat => `
        <button class="skill-tab-btn ${currentSkillCategory === cat.id ? 'active bg-brand-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'} px-3.5 py-1.5 rounded-lg text-xs font-medium transition" data-category="${cat.id}">
          ${cat.name}
        </button>
      `).join('')}
    `;
    skillCategoryTabs.innerHTML = tabsHtml;

    skillCategoryTabs.querySelectorAll('.skill-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentSkillCategory = btn.getAttribute('data-category');
        renderSkillTabs();
        renderSkills();
      });
    });
  }

  function renderSkills() {
    if (!skillsGrid) return;
    let allSkills = [];

    activeData.skills.categories.forEach(cat => {
      cat.items.forEach(item => {
        allSkills.push({ ...item, categoryId: cat.id, categoryName: cat.name });
      });
    });

    // Filter by Category
    if (currentSkillCategory !== 'all') {
      allSkills = allSkills.filter(s => s.categoryId === currentSkillCategory);
    }

    // Filter by Search Query
    if (currentSkillSearch.trim() !== '') {
      const q = currentSkillSearch.toLowerCase().trim();
      allSkills = allSkills.filter(s => s.name.toLowerCase().includes(q) || s.categoryName.toLowerCase().includes(q));
    }

    if (allSkills.length === 0) {
      skillsGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
          <p class="text-sm">No skills found matching "${currentSkillSearch}".</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    skillsGrid.innerHTML = allSkills.map(skill => {
      return `
        <div class="glass-panel p-3.5 sm:p-4 rounded-xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="p-1.5 rounded-lg bg-brand-500/10 text-brand-400">
              <i data-lucide="${skill.icon || 'code'}" class="w-4 h-4"></i>
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
              ${skill.level}
            </span>
          </div>
          <div>
            <h4 class="font-semibold text-xs sm:text-sm text-white truncate" title="${skill.name}">${skill.name}</h4>
            <p class="text-[11px] font-mono text-cyan-400/80 mt-0.5">${skill.years} exp</p>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // 6. RENDER FEATURED PROJECTS
  let currentProjectCategory = 'all';

  function renderProjects() {
    if (!projectsGrid) return;
    let list = activeData.projects;

    if (currentProjectCategory !== 'all') {
      list = list.filter(p => p.category === currentProjectCategory);
    }

    projectsGrid.innerHTML = list.map(project => `
      <div class="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-brand-500/40 transition">
        
        <!-- Project Card Top Gradient Banner -->
        <div class="h-32 sm:h-36 bg-gradient-to-r ${project.gradient || 'from-brand-600 to-cyan-600'} p-5 relative flex flex-col justify-between overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          
          <div class="flex items-center justify-between z-10">
            <span class="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20">
              ${project.category}
            </span>
            ${project.highlight ? `
              <span class="px-2.5 py-1 rounded-md bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                ${project.highlight}
              </span>
            ` : ''}
          </div>

          <div class="z-10">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
              ${project.title}
            </h3>
          </div>
        </div>

        <!-- Project Card Body -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          
          <div class="space-y-3">
            <p class="text-sm text-slate-300 leading-relaxed">${project.shortDescription}</p>

            <!-- Impact Metric Highlight Callout -->
            <div class="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              <i data-lucide="zap" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>${project.impact}</span>
            </div>

            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${project.tags.map(t => `
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Project Actions / Buttons -->
          <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <button class="open-arch-btn text-xs font-mono text-brand-400 hover:text-brand-300 flex items-center gap-1.5 transition" data-project-id="${project.id}">
              <i data-lucide="layers" class="w-3.5 h-3.5"></i>
              <span>Architecture Deep Dive</span>
            </button>

            <div class="flex items-center gap-2">
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition">
                <i data-lucide="github" class="w-3.5 h-3.5"></i>
                <span>Code</span>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-medium flex items-center gap-1.5 transition">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Demo</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    `).join('');

    // Attach listeners to architecture breakdown buttons
    projectsGrid.querySelectorAll('.open-arch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        openArchitectureModal(pId);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function openArchitectureModal(projectId) {
    const project = activeData.projects.find(p => p.id === projectId);
    if (!project || !project.architecture) return;

    document.getElementById('arch-modal-title').textContent = project.title;
    document.getElementById('arch-modal-problem').textContent = project.architecture.problem;
    document.getElementById('arch-modal-solution').textContent = project.architecture.solution;

    const featuresList = document.getElementById('arch-modal-features');
    featuresList.innerHTML = project.architecture.keyFeatures.map(f => `
      <li class="text-xs sm:text-sm text-slate-300">${f}</li>
    `).join('');

    archModal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  // 7. RENDER WORK EXPERIENCE
  function renderExperience() {
    if (!experienceTimeline) return;

    experienceTimeline.innerHTML = activeData.experience.map((exp, idx) => `
      <div class="relative group">
        <!-- Node Dot on Timeline -->
        <div class="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-500 group-hover:scale-125 transition-transform"></div>

        <div class="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 hover:border-brand-500/30 transition">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h3 class="text-lg font-bold text-white">${exp.role}</h3>
              <p class="text-sm font-semibold text-brand-400">${exp.company} <span class="text-xs text-slate-400 font-normal">(${exp.type})</span></p>
            </div>
            <div class="text-xs font-mono text-cyan-400 flex items-center gap-1 sm:self-start mt-1 sm:mt-0">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              <span>${exp.period}</span>
              <span class="text-slate-500 mx-1">•</span>
              <span>${exp.location}</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${exp.summary}</p>

          <!-- Key Quantifiable Achievements -->
          <ul class="space-y-2 list-none text-xs sm:text-sm text-slate-300">
            ${exp.achievements.map(ach => `
              <li class="flex items-start gap-2.5">
                <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${ach}</span>
              </li>
            `).join('')}
          </ul>

          <!-- Stack Tags -->
          <div class="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
            ${exp.skills.map(s => `
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // 8. RENDER EDUCATION & CERTS
  function renderEducationAndCerts() {
    if (educationContainer && activeData.education) {
      educationContainer.innerHTML = activeData.education.map(edu => `
        <div class="glass-panel p-5 rounded-xl border border-white/10 space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h4 class="text-white font-bold text-sm sm:text-base">${edu.degree}</h4>
              <p class="text-xs font-semibold text-brand-400">${edu.institution}</p>
            </div>
            <span class="text-xs font-mono text-cyan-400">${edu.period}</span>
          </div>
          ${edu.honors ? `<p class="text-xs text-emerald-300 font-mono">${edu.honors}</p>` : ''}
          ${edu.highlights ? `<p class="text-xs text-slate-400 leading-relaxed">${edu.highlights}</p>` : ''}
        </div>
      `).join('');
    }

    if (certificationsContainer && activeData.certifications) {
      certificationsContainer.innerHTML = activeData.certifications.map(cert => `
        <div class="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            </div>
            <span class="text-xs sm:text-sm font-semibold text-white">${cert.name}</span>
          </div>
          <span class="text-xs font-mono text-slate-400">${cert.year}</span>
        </div>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // 9. RENDER ATS-READY PRINTABLE RESUME (CV)
  function renderPrintableResume() {
    if (!printableCvContent) return;

    const p = activeData.personal;
    const exp = activeData.experience;
    const edu = activeData.education;
    const certs = activeData.certifications;
    const projects = activeData.projects;

    // Collect all skill names categorized
    const skillSummary = activeData.skills.categories.map(c => {
      return `<strong>${c.name}:</strong> ` + c.items.map(i => i.name).join(', ');
    }).join(' | ');

    printableCvContent.innerHTML = `
      <!-- Header -->
      <div class="border-b-2 border-slate-900 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start">
        <div>
          <h1 class="text-3xl font-extrabold tracking-tight text-slate-950">${p.name}</h1>
          <p class="text-base font-semibold text-indigo-700 mt-1">${p.role}</p>
        </div>
        <div class="text-xs text-slate-600 sm:text-right mt-3 sm:mt-0 space-y-0.5 font-mono">
          <p>${p.email} • ${p.phone}</p>
          <p>${p.location}</p>
          <p>${p.linkedin} • ${p.github}</p>
        </div>
      </div>

      <!-- Professional Summary -->
      <div>
        <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">Professional Summary</h2>
        <p class="text-xs leading-relaxed text-slate-700">${p.bio.join(' ')}</p>
      </div>

      <!-- Technical Skills Matrix -->
      <div>
        <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">Technical Core Competencies</h2>
        <div class="space-y-1 text-xs text-slate-700 leading-normal">
          ${activeData.skills.categories.map(c => `
            <div>
              <span class="font-bold text-slate-900">${c.name}:</span>
              <span>${c.items.map(i => i.name).join(', ')}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Work Experience -->
      <div>
        <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">Work Experience</h2>
        <div class="space-y-4">
          ${exp.map(job => `
            <div>
              <div class="flex justify-between items-baseline text-xs">
                <span class="font-bold text-slate-900 text-sm">${job.role}</span>
                <span class="font-mono text-slate-600">${job.period}</span>
              </div>
              <div class="flex justify-between items-baseline text-xs text-indigo-800 font-semibold mb-1">
                <span>${job.company}</span>
                <span class="font-mono text-slate-500">${job.location}</span>
              </div>
              <p class="text-xs text-slate-600 mb-1 italic">${job.summary}</p>
              <ul class="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                ${job.achievements.map(ach => `<li>${ach}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Key Projects -->
      <div>
        <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">Featured Engineering Projects</h2>
        <div class="space-y-2 text-xs">
          ${projects.slice(0, 3).map(pj => `
            <div>
              <div class="flex justify-between items-baseline">
                <span class="font-bold text-slate-900">${pj.title}</span>
                <span class="font-mono text-slate-500">${pj.category}</span>
              </div>
              <p class="text-slate-700 text-xs">${pj.shortDescription} — <span class="font-semibold text-emerald-800">Impact: ${pj.impact}</span></p>
              <p class="text-[11px] font-mono text-slate-500">Tech Stack: ${pj.tags.join(', ')}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Education & Credentials -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-1.5">Education</h2>
          ${edu.map(e => `
            <div class="text-xs text-slate-800">
              <p class="font-bold">${e.degree}</p>
              <p class="text-slate-600">${e.institution} (${e.period})</p>
              ${e.honors ? `<p class="text-indigo-700 text-[11px]">${e.honors}</p>` : ''}
            </div>
          `).join('')}
        </div>

        <div>
          <h2 class="text-xs font-bold tracking-widest uppercase text-slate-900 border-b border-slate-300 pb-1 mb-1.5">Certifications</h2>
          ${certs.map(c => `
            <div class="text-xs text-slate-800 flex justify-between">
              <span>${c.name}</span>
              <span class="font-mono text-slate-500">${c.year}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 10. ATTACH EVENT LISTENERS
  function setupEventListeners() {
    // Resume Modals
    const openResume = () => {
      renderPrintableResume();
      resumeModal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    };
    if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
    if (heroResumeCta) heroResumeCta.addEventListener('click', openResume);
    if (experienceResumeLink) experienceResumeLink.addEventListener('click', openResume);
    if (closeResumeModal) closeResumeModal.addEventListener('click', () => resumeModal.classList.add('hidden'));

    // Print Resume Button
    if (printResumeBtn) {
      printResumeBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Arch Modal Close
    if (closeArchModalBtn) closeArchModalBtn.addEventListener('click', () => archModal.classList.add('hidden'));
    if (closeArchBtnAction) closeArchBtnAction.addEventListener('click', () => archModal.classList.add('hidden'));

    // Close modals on clicking backdrop
    window.addEventListener('click', (e) => {
      if (e.target === archModal) archModal.classList.add('hidden');
      if (e.target === resumeModal) resumeModal.classList.add('hidden');
      if (e.target === customizerModal) customizerModal.classList.add('hidden');
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        archModal.classList.add('hidden');
        resumeModal.classList.add('hidden');
        customizerModal.classList.add('hidden');
      }
    });

    // Copy Email Buttons
    const heroCopyEmailBtn = document.getElementById('hero-copy-email-btn');
    if (heroCopyEmailBtn) {
      heroCopyEmailBtn.addEventListener('click', () => {
        copyToClipboard(activeData.personal.email, `Copied ${activeData.personal.email} to clipboard!`);
      });
    }

    const copyContactEmailBtn = document.getElementById('copy-contact-email-btn');
    if (copyContactEmailBtn) {
      copyContactEmailBtn.addEventListener('click', () => {
        copyToClipboard(activeData.personal.email, `Copied ${activeData.personal.email} to clipboard!`);
      });
    }

    // Search Skill Filter
    if (skillSearchInput) {
      skillSearchInput.addEventListener('input', (e) => {
        currentSkillSearch = e.target.value;
        renderSkills();
      });
    }

    // Project category buttons
    if (projectFilterTabs) {
      projectFilterTabs.querySelectorAll('.project-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          projectFilterTabs.querySelectorAll('.project-tab-btn').forEach(b => {
            b.classList.remove('active', 'bg-brand-600', 'text-white');
            b.classList.add('bg-white/5', 'text-slate-300');
          });
          btn.classList.add('active', 'bg-brand-600', 'text-white');
          btn.classList.remove('bg-white/5', 'text-slate-300');

          currentProjectCategory = btn.getAttribute('data-category');
          renderProjects();
        });
      });
    }

    // Theme Toggle
    if (themeToggleBtn) {
      const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcons(savedTheme);

      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('portfolio_theme', next);
        updateThemeIcons(next);
      });
    }

    function updateThemeIcons(theme) {
      if (theme === 'dark') {
        if (themeIconMoon) themeIconMoon.classList.remove('hidden');
        if (themeIconSun) themeIconSun.classList.add('hidden');
      } else {
        if (themeIconMoon) themeIconMoon.classList.add('hidden');
        if (themeIconSun) themeIconSun.classList.remove('hidden');
      }
    }

    // Mobile Menu
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const email = document.getElementById('sender-email').value;
        const subject = document.getElementById('sender-subject').value;
        const message = document.getElementById('sender-message').value;

        // Prefill mailto trigger
        const mailtoUrl = `mailto:${activeData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoUrl;

        showToast("Opening email client! Thanks for reaching out.");
        contactForm.reset();
      });
    }

    // Customizer Modal
    if (openCustomizerBtn && customizerModal) {
      openCustomizerBtn.addEventListener('click', () => {
        document.getElementById('edit-name').value = activeData.personal.name || '';
        document.getElementById('edit-role').value = activeData.personal.role || '';
        document.getElementById('edit-tagline').value = activeData.personal.tagline || '';
        document.getElementById('edit-email').value = activeData.personal.email || '';
        document.getElementById('edit-location').value = activeData.personal.location || '';
        document.getElementById('edit-github').value = activeData.personal.github || '';
        document.getElementById('edit-linkedin').value = activeData.personal.linkedin || '';
        document.getElementById('edit-bio').value = (activeData.personal.bio && activeData.personal.bio[0]) || '';

        customizerModal.classList.remove('hidden');
      });
    }

    if (closeCustomizerModal) {
      closeCustomizerModal.addEventListener('click', () => customizerModal.classList.add('hidden'));
    }

    if (customizerForm) {
      customizerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const customObj = {
          personal: {
            name: document.getElementById('edit-name').value.trim(),
            role: document.getElementById('edit-role').value.trim(),
            tagline: document.getElementById('edit-tagline').value.trim(),
            email: document.getElementById('edit-email').value.trim(),
            location: document.getElementById('edit-location').value.trim(),
            github: document.getElementById('edit-github').value.trim(),
            linkedin: document.getElementById('edit-linkedin').value.trim(),
            bioFirstPara: document.getElementById('edit-bio').value.trim()
          }
        };

        // Merge to activeData
        activeData.personal = { ...activeData.personal, ...customObj.personal };
        if (customObj.personal.bioFirstPara) {
          activeData.personal.bio[0] = customObj.personal.bioFirstPara;
        }

        // Save
        localStorage.setItem('portfolio_user_customizations', JSON.stringify(customObj));
        customizerModal.classList.add('hidden');

        // Re-render
        renderPersonalInfo();
        renderPrintableResume();
        showToast('Portfolio details updated live!');
      });
    }

    if (resetDefaultsBtn) {
      resetDefaultsBtn.addEventListener('click', () => {
        if (confirm("Reset all info back to original defaults?")) {
          localStorage.removeItem('portfolio_user_customizations');
          activeData = JSON.parse(JSON.stringify(window.portfolioData));
          renderPersonalInfo();
          renderPrintableResume();
          customizerModal.classList.add('hidden');
          showToast('Reset to original portfolio data.');
        }
      });
    }
  }

  // 11. INITIAL BOOTSTRAP
  function init() {
    renderPersonalInfo();
    renderSkillTabs();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducationAndCerts();
    renderPrintableResume();
    setupEventListeners();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
