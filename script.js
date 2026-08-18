const projects = {
  1: {
    title: "Multi-Schema Banking Data Platform",
    desc: "A unified analytical pipeline integrating disparate SQLite, MySQL, and PostgreSQL environments using lightweight FastAPI validation layers.",
    bullets: [
      "Engineered clean automated ingestion scripts maintaining strict compliance across diverse schemas.",
      "Created transactional auditing configurations validating consistency constraints for thousands of incoming rows.",
      "Constructed modular target views ensuring high pipeline throughput for visual analytical charts."
    ]
  },
  2: {
    title: "Enterprise Sales Analytics (Australia)",
    desc: "Full performance ledger tracking for a 3-table commercial database holding over 1,000 live transaction rows.",
    bullets: [
      "Authored optimized queries with complex JOINs and partition windows calculating exact margins.",
      "Developed pre-aggregated SQL views linked directly to real-time executive Power BI reporting streams.",
      "Exposed sales trends across multiple operational sectors and regional dynamics."
    ]
  },
  3: {
    title: "MLB Batting Performance Analysis",
    desc: "Engineered database schemas using PostgreSQL 18 to compute complex athletic baseball performance tiers.",
    bullets: [
      "Designed normalized data tables optimized to eliminate historical query lookup drag.",
      "Wrote structured queries with CTEs to segment seasonal positional trends.",
      "Produced statistical summaries used directly in scouting operations."
    ]
  },
  4: {
    title: "Global Population Migration Study",
    desc: "A correlation analytics pipeline parsing demographic transitions and migration trends across 200+ countries.",
    bullets: [
      "Cleaned messy spreadsheets ensuring absolute record integrity for large-scale multi-format matrices.",
      "Calculated correlation indices connecting local economic markers directly to migration numbers.",
      "Exported unified analytics to dashboards tailored for non-technical stakeholders."
    ]
  }
};

function loadProject(id) {
  const p = projects[id];
  document.getElementById('viewer-title').textContent = p.title;
  document.getElementById('viewer-desc').textContent = p.desc;
  const ul = document.getElementById('viewer-bullets');
  ul.innerHTML = p.bullets.map(b => `<li>${b}</li>`).join('');

  document.querySelectorAll('#project-table tr').forEach(r => r.classList.remove('selected'));
  document.querySelectorAll('#project-table tr')[id - 1].classList.add('selected');

  const viewer = document.getElementById('project-viewer');
  viewer.style.opacity = '0';
  viewer.style.transform = 'translateY(6px)';
  requestAnimationFrame(() => {
    viewer.style.transition = 'opacity 0.25s, transform 0.25s';
    viewer.style.opacity = '1';
    viewer.style.transform = 'translateY(0)';
  });
}

function filterDB(cat) {
  document.querySelectorAll('#project-table tr').forEach(r => {
    r.style.display = (cat === 'all' || r.dataset.cat === cat) ? '' : 'none';
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + cat);
  if (activeBtn) activeBtn.classList.add('active');
}

function toggleTheme() {
  const el = document.documentElement;
  el.classList.toggle('dark');
  const isDark = el.classList.contains('dark');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = isDark ? '🌙' : '☀';
}

const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}
//end
