/**
 * Lente de camadas: realça o conteúdo de uma camada (back-end, arquitetura, IA)
 * em toda a página e esmaece o resto. Também marca a seção visível no menu.
 * Sem este script o site continua completo — o controle nem aparece (ADR-004).
 */
const root = document.documentElement;
const control = document.querySelector<HTMLElement>('[data-lens-control]');
const lensStatus = document.querySelector<HTMLElement>('[data-lens-status]');

if (control) {
  const buttons = [...control.querySelectorAll<HTMLButtonElement>('[data-lens-value]')];
  control.hidden = false;

  const apply = (value: string) => {
    if (value) root.dataset.lens = value;
    else delete root.dataset.lens;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lensValue === value)));
    if (lensStatus) {
      const btn = buttons.find((b) => b.dataset.lensValue === value);
      lensStatus.textContent = value ? `Realçando a camada ${btn?.textContent?.trim()}.` : 'Mostrando todas as camadas.';
    }
  };

  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const v = b.dataset.lensValue ?? '';
      apply(root.dataset.lens === v ? '' : v);
    }),
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.dataset.lens) apply('');
  });
}

/* Menu: marca a seção em leitura */
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
if (links.length && 'IntersectionObserver' in window) {
  const byId = new Map(links.map((a) => [a.dataset.spy!, a]));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        byId.get(en.target.id)?.setAttribute('aria-current', 'true');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  byId.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}
