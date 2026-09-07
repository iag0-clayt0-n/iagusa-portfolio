const buttons = document.querySelectorAll('[data-filter]');
buttons.forEach(button => button.addEventListener('click', () => {
 const category = button.getAttribute('data-filter');
 buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 document.querySelectorAll('[data-project]').forEach(project => {
  if (project instanceof HTMLElement) project.hidden = category !== 'all' && project.dataset.project !== category;
 });
 const status = document.querySelector('#filter-status');
 const english = document.documentElement.lang === 'en';
 if (status) status.textContent = category === 'all' ? (english ? 'Showing both projects.' : 'Exibindo os dois projetos.') : (english ? 'Showing one project.' : 'Exibindo um projeto.');
}));
