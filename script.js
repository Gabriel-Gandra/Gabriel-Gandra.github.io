(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ------------------------------------------------------------------ */
  /* Content                                                             */
  /* ------------------------------------------------------------------ */
  const UI = {
    pt: {
      skip: 'Pular para o conteúdo',
      'nav.history': 'Histórico', 'nav.skills': 'Competências', 'nav.education': 'Formação', 'nav.contact': 'Contato',
      'cta.download': 'Baixar currículo', 'cta.open': 'Abrir chamado', 'cta.history': 'Ver histórico',
      'hero.hello': 'Olá, eu sou',
      'hero.role': 'Analista de Infraestrutura de TI em Belo Horizonte',
      'hero.lead': 'Cuido de quem usa a tecnologia da empresa: contas, acessos, computadores e chamados, em português e espanhol. Há mais de 3 anos no ambiente corporativo da Prosegur.',
      't.s.new': 'Novo', 't.s.progress': 'Em atendimento', 't.s.resolved': 'Resolvido',
      't.title': 'Procura-se analista de infraestrutura de TI',
      't.f.requester': 'Solicitante', 't.f.category': 'Categoria', 't.f.priority': 'Prioridade', 't.f.assignee': 'Atribuído a',
      't.v.requester': 'Sua empresa', 't.v.category': 'Infraestrutura e suporte', 't.v.priority': 'Alta',
      't.res.label': 'Nota de resolução',
      't.res.text': 'Profissional encontrado: 3+ anos em TI corporativa, Active Directory, Azure e Intune, atendimento bilíngue. Disponível para entrevista.',
      't.replay': 'Reabrir chamado',
      'facts.years': 'anos em TI corporativa', 'facts.roles': 'cargos no mesmo cliente, de assistente a analista', 'facts.lang': 'suporte diário para áreas da Espanha',
      'history.title': 'Histórico de atendimento',
      'history.intro': 'Trajetória contínua no cliente Prosegur, por meio de empresas prestadoras de serviço de TI.',
      'skills.title': 'Competências',
      'skills.intro': 'Escolha uma competência para ver no histórico onde ela foi usada.',
      'skills.hits': n => n === 1 ? '1 atividade no histórico usa esta competência.' : `${n} atividades no histórico usam esta competência.`,
      'skills.clear': 'Limpar filtro',
      'edu.title': 'Formação', 'lang.title': 'Idiomas',
      'contact.title': 'Abrir chamado',
      'contact.intro': 'Tem uma vaga ou projeto? Preencha os campos e seu aplicativo de e-mail abre com a mensagem pronta.',
      'contact.email': 'E-mail', 'contact.location': 'Localização',
      'form.name': 'Seu nome', 'form.company': 'Empresa', 'form.subject': 'Assunto', 'form.message': 'Mensagem',
      'form.s.job': 'Vaga de emprego', 'form.s.interview': 'Convite para entrevista', 'form.s.other': 'Outro assunto',
      'form.send': 'Enviar por e-mail',
      'form.err': 'Preencha seu nome e a mensagem para enviar.',
      'form.opened': 'Mensagem pronta no seu e-mail',
      'copied': 'E-mail copiado', 'copyFail': 'Não foi possível copiar. Selecione o endereço manualmente.',
      footer: 'Gabriel Rodrigues Pinto Gandra. Feito com HTML, CSS e JavaScript.', 'footer.top': 'Voltar ao topo',
      present: 'Atual', allocated: 'alocado na Prosegur', current: 'Cargo atual'
    },
    es: {
      skip: 'Saltar al contenido',
      'nav.history': 'Historial', 'nav.skills': 'Competencias', 'nav.education': 'Formación', 'nav.contact': 'Contacto',
      'cta.download': 'Descargar CV', 'cta.open': 'Abrir ticket', 'cta.history': 'Ver historial',
      'hero.hello': 'Hola, soy',
      'hero.role': 'Analista de Infraestructura TI en Belo Horizonte, Brasil',
      'hero.lead': 'Me ocupo de quienes usan la tecnología de la empresa: cuentas, accesos, equipos y tickets, en portugués y español. Más de 3 años en el entorno corporativo de Prosegur.',
      't.s.new': 'Nuevo', 't.s.progress': 'En curso', 't.s.resolved': 'Resuelto',
      't.title': 'Se busca analista de infraestructura TI',
      't.f.requester': 'Solicitante', 't.f.category': 'Categoría', 't.f.priority': 'Prioridad', 't.f.assignee': 'Asignado a',
      't.v.requester': 'Tu empresa', 't.v.category': 'Infraestructura y soporte', 't.v.priority': 'Alta',
      't.res.label': 'Nota de resolución',
      't.res.text': 'Profesional encontrado: más de 3 años en TI corporativa, Active Directory, Azure e Intune, atención bilingüe. Disponible para entrevista.',
      't.replay': 'Reabrir ticket',
      'facts.years': 'años en TI corporativa', 'facts.roles': 'puestos en el mismo cliente, de asistente a analista', 'facts.lang': 'soporte diario a áreas de España',
      'history.title': 'Historial de atención',
      'history.intro': 'Trayectoria continua en el cliente Prosegur, a través de empresas proveedoras de servicios TI.',
      'skills.title': 'Competencias',
      'skills.intro': 'Elige una competencia para ver en el historial dónde se utilizó.',
      'skills.hits': n => n === 1 ? '1 actividad del historial usa esta competencia.' : `${n} actividades del historial usan esta competencia.`,
      'skills.clear': 'Quitar filtro',
      'edu.title': 'Formación', 'lang.title': 'Idiomas',
      'contact.title': 'Abrir ticket',
      'contact.intro': '¿Tienes una vacante o un proyecto? Completa los campos y tu aplicación de correo se abrirá con el mensaje listo.',
      'contact.email': 'Correo', 'contact.location': 'Ubicación',
      'form.name': 'Tu nombre', 'form.company': 'Empresa', 'form.subject': 'Asunto', 'form.message': 'Mensaje',
      'form.s.job': 'Oferta de empleo', 'form.s.interview': 'Invitación a entrevista', 'form.s.other': 'Otro asunto',
      'form.send': 'Enviar por correo',
      'form.err': 'Completa tu nombre y el mensaje para enviar.',
      'form.opened': 'Mensaje listo en tu correo',
      'copied': 'Correo copiado', 'copyFail': 'No se pudo copiar. Selecciona la dirección manualmente.',
      footer: 'Gabriel Rodrigues Pinto Gandra. Hecho con HTML, CSS y JavaScript.', 'footer.top': 'Volver arriba',
      present: 'Actual', allocated: 'asignado a Prosegur', current: 'Puesto actual'
    },
    en: {
      skip: 'Skip to content',
      'nav.history': 'History', 'nav.skills': 'Skills', 'nav.education': 'Education', 'nav.contact': 'Contact',
      'cta.download': 'Download résumé', 'cta.open': 'Open a ticket', 'cta.history': 'See history',
      'hero.hello': 'Hi, I’m',
      'hero.role': 'IT Infrastructure Analyst in Belo Horizonte, Brazil',
      'hero.lead': 'I look after the people who use a company’s technology: accounts, access, computers and tickets, in Portuguese and Spanish. Over 3 years in Prosegur’s corporate environment.',
      't.s.new': 'New', 't.s.progress': 'In progress', 't.s.resolved': 'Resolved',
      't.title': 'Looking for an IT infrastructure analyst',
      't.f.requester': 'Requester', 't.f.category': 'Category', 't.f.priority': 'Priority', 't.f.assignee': 'Assigned to',
      't.v.requester': 'Your company', 't.v.category': 'Infrastructure and support', 't.v.priority': 'High',
      't.res.label': 'Resolution note',
      't.res.text': 'Match found: 3+ years in corporate IT, Active Directory, Azure and Intune, bilingual support. Available for interviews.',
      't.replay': 'Reopen ticket',
      'facts.years': 'years in corporate IT', 'facts.roles': 'roles at the same client, from assistant to analyst', 'facts.lang': 'daily support for teams in Spain',
      'history.title': 'Service history',
      'history.intro': 'Continuous track record at Prosegur, through IT service provider companies.',
      'skills.title': 'Skills',
      'skills.intro': 'Pick a skill to see where it was used in my history.',
      'skills.hits': n => n === 1 ? '1 activity in my history uses this skill.' : `${n} activities in my history use this skill.`,
      'skills.clear': 'Clear filter',
      'edu.title': 'Education', 'lang.title': 'Languages',
      'contact.title': 'Open a ticket',
      'contact.intro': 'Have a role or project in mind? Fill in the fields and your email app opens with the message ready.',
      'contact.email': 'Email', 'contact.location': 'Location',
      'form.name': 'Your name', 'form.company': 'Company', 'form.subject': 'Subject', 'form.message': 'Message',
      'form.s.job': 'Job opening', 'form.s.interview': 'Interview invitation', 'form.s.other': 'Something else',
      'form.send': 'Send by email',
      'form.err': 'Fill in your name and message to send.',
      'form.opened': 'Message ready in your email',
      'copied': 'Email copied', 'copyFail': 'Couldn’t copy. Select the address manually.',
      footer: 'Gabriel Rodrigues Pinto Gandra. Built with HTML, CSS and JavaScript.', 'footer.top': 'Back to top',
      present: 'Present', allocated: 'assigned to Prosegur', current: 'Current role'
    }
  };

  const SKILLS = [
    { group: { pt: 'Identidade e dispositivos', es: 'Identidad y dispositivos', en: 'Identity and devices' }, items: [
      ['ad', 'Active Directory'], ['azure', 'Microsoft Azure'], ['intune', 'Microsoft Intune'],
      ['access', { pt: 'Acessos e licenças', es: 'Accesos y licencias', en: 'Access and licences' }] ] },
    { group: { pt: 'Suporte e atendimento', es: 'Soporte y atención', en: 'Support and service' }, items: [
      ['n1n2', { pt: 'Suporte N1/N2', es: 'Soporte N1/N2', en: 'Tier 1/2 support' }], ['helix', 'BMC Helix ITSM'], ['teams', 'Microsoft Teams'],
      ['spanish', { pt: 'Atendimento em espanhol', es: 'Atención en español', en: 'Support in Spanish' }] ] },
    { group: { pt: 'Infraestrutura', es: 'Infraestructura', en: 'Infrastructure' }, items: [
      ['windows', 'Windows'], ['linux', 'Linux'],
      ['format', { pt: 'Formatação e migração', es: 'Formateo y migración', en: 'Imaging and migration' }],
      ['lifecycle', { pt: 'Ciclo de vida de ativos', es: 'Ciclo de vida de activos', en: 'Asset lifecycle' }],
      ['printers', { pt: 'Impressoras Zebra e Lexmark', es: 'Impresoras Zebra y Lexmark', en: 'Zebra and Lexmark printers' }], ['ocs', 'OCS Inventory'] ] },
    { group: { pt: 'Programação e dados', es: 'Programación y datos', en: 'Programming and data' }, items: [
      ['scripts', { pt: 'Scripts de automação', es: 'Scripts de automatización', en: 'Automation scripts' }],
      ['js', 'JavaScript'], ['c', 'C e C++'], ['sql', 'SQL (MySQL)'], ['oracle', { pt: 'Oracle (consultas)', es: 'Oracle (consultas)', en: 'Oracle (queries)' }] ] },
    { group: { pt: 'Documentação', es: 'Documentación', en: 'Documentation' }, items: [
      ['docs', { pt: 'Manuais operacionais', es: 'Manuales operativos', en: 'Operating manuals' }],
      ['office', { pt: 'Word, Excel e PowerPoint', es: 'Word, Excel y PowerPoint', en: 'Word, Excel and PowerPoint' }] ] }
  ];

  const JOBS = [
    { current: true, from: '06/2025', to: null,
      title: { pt: 'Analista de Infraestrutura Jr.', es: 'Analista de Infraestructura Jr.', en: 'Junior Infrastructure Analyst' },
      company: 'JDC Consultoria em Informática',
      items: [
        { tags: ['ad', 'azure', 'intune', 'access'],
          pt: 'Administro contas, grupos, dispositivos e políticas com Active Directory, Azure e Microsoft Intune, incluindo licenças, pastas compartilhadas e acesso à rede Wi-Fi corporativa.',
          es: 'Administro cuentas, grupos, dispositivos y políticas con Active Directory, Azure y Microsoft Intune, incluidas licencias, carpetas compartidas y acceso a la red Wi-Fi corporativa.',
          en: 'Manage accounts, groups, devices and policies with Active Directory, Azure and Microsoft Intune, including licences, shared folders and corporate Wi-Fi access.' },
        { tags: ['scripts'],
          pt: 'Desenvolvo scripts e projetos de automação que reduzem tarefas manuais e o volume de chamados recorrentes.',
          es: 'Desarrollo scripts y proyectos de automatización que reducen tareas manuales y el volumen de tickets recurrentes.',
          en: 'Build automation scripts and projects that cut manual work and the volume of recurring tickets.' },
        { tags: ['spanish', 'n1n2'],
          pt: 'Presto suporte técnico em espanhol para áreas da Prosegur na Espanha.',
          es: 'Brindo soporte técnico en español a áreas de Prosegur en España.',
          en: 'Provide technical support in Spanish to Prosegur teams in Spain.' },
        { tags: ['format', 'windows', 'lifecycle'],
          pt: 'Conduzo projetos de renovação do parque: atualização de máquinas, desativação de equipamentos, formatação e migração de dados.',
          es: 'Dirijo proyectos de renovación del parque: actualización de equipos, baja de dispositivos, formateo y migración de datos.',
          en: 'Run hardware refresh projects: machine upgrades, device decommissioning, imaging and data migration.' },
        { tags: ['lifecycle', 'docs'],
          pt: 'Gerencio o ciclo de vida dos ativos (estoque, coleta e reatribuição de equipamentos) e escrevo manuais operacionais para a equipe.',
          es: 'Gestiono el ciclo de vida de los activos (inventario, recogida y reasignación de equipos) y redacto manuales operativos para el equipo.',
          en: 'Manage the asset lifecycle (stock, collection and reassignment of equipment) and write operating manuals for the team.' },
        { tags: ['helix', 'teams', 'printers', 'n1n2'],
          pt: 'Atendo usuários por Teams, telefone, presencialmente e pelo BMC Helix ITSM; instalo softwares e impressoras Zebra, Lexmark e matriciais.',
          es: 'Atiendo a usuarios por Teams, teléfono, en persona y mediante BMC Helix ITSM; instalo software e impresoras Zebra, Lexmark y matriciales.',
          en: 'Support users via Teams, phone, in person and through BMC Helix ITSM; install software and Zebra, Lexmark and dot-matrix printers.' }
      ] },
    { from: '02/2025', to: '06/2025',
      title: { pt: 'Técnico de Suporte Jr.', es: 'Técnico de Soporte Jr.', en: 'Junior Support Technician' },
      company: 'Fractalia Brasil Serviços Tecnológicos',
      items: [
        { tags: ['ad', 'azure', 'intune', 'lifecycle', 'spanish', 'access'],
          pt: 'Gestão de dispositivos e acessos com AD, Azure e Intune, manutenção do parque, controle de estoque e suporte bilíngue no cliente.',
          es: 'Gestión de dispositivos y accesos con AD, Azure e Intune, mantenimiento del parque, control de inventario y soporte bilingüe en el cliente.',
          en: 'Device and access management with AD, Azure and Intune, hardware maintenance, stock control and bilingual support on site.' }
      ] },
    { from: '02/2023', to: '02/2025',
      title: { pt: 'Assistente de Suporte de TI', es: 'Asistente de Soporte TI', en: 'IT Support Assistant' },
      company: 'Telefônica Infraestrutura e Segurança',
      items: [
        { tags: ['n1n2', 'windows'],
          pt: 'Suporte N1 e N2 em sistemas, computadores e periféricos, com diagnóstico e resolução de incidentes.',
          es: 'Soporte N1 y N2 en sistemas, equipos y periféricos, con diagnóstico y resolución de incidentes.',
          en: 'Tier 1 and 2 support for systems, computers and peripherals, diagnosing and resolving incidents.' },
        { tags: ['n1n2'],
          pt: 'Atendimento a usuários por chamados e telefone, com comunicação clara e resolutiva.',
          es: 'Atención a usuarios por tickets y teléfono, con comunicación clara y resolutiva.',
          en: 'User support through tickets and phone, with clear, solution-focused communication.' },
        { tags: ['azure', 'ad', 'oracle', 'access'],
          pt: 'Consultas e liberações em Azure, Active Directory e Oracle.',
          es: 'Consultas y habilitaciones en Azure, Active Directory y Oracle.',
          en: 'Lookups and access grants in Azure, Active Directory and Oracle.' }
      ] }
  ];

  const EDU = [
    { yr: { pt: '2025 – atual', es: '2025 – actual', en: '2025 – present' },
      t: { pt: 'Bacharelado em Ciência da Computação', es: 'Grado en Ciencias de la Computación', en: 'BSc in Computer Science' },
      s: { pt: 'Centro Universitário de Belo Horizonte (UniBH), em andamento', es: 'Centro Universitário de Belo Horizonte (UniBH), en curso', en: 'Centro Universitário de Belo Horizonte (UniBH), in progress' } },
    { yr: { pt: '2021 – 2022', es: '2021 – 2022', en: '2021 – 2022' },
      t: { pt: 'Técnico em Informática, Desenvolvimento Mobile', es: 'Técnico en Informática, Desarrollo Móvil', en: 'IT Technician, Mobile Development' },
      s: { pt: 'Colégio Cotemig, integrado ao Ensino Médio', es: 'Colégio Cotemig, integrado con la secundaria', en: 'Colégio Cotemig, alongside high school' } },
    { yr: { pt: '2022', es: '2022', en: '2022' },
      t: { pt: 'Voluntário no Code Club', es: 'Voluntario en Code Club', en: 'Code Club volunteer' },
      s: { pt: 'Colégio Cotemig, apoio no ensino de programação', es: 'Colégio Cotemig, apoyo en la enseñanza de programación', en: 'Colégio Cotemig, helping teach programming' } },
    { yr: { pt: '2020', es: '2020', en: '2020' },
      t: { pt: 'Certificado de Espanhol', es: 'Certificado de Español', en: 'Spanish certificate' },
      s: { pt: 'Colégio Espanhol Santa Maria Minas', es: 'Colégio Espanhol Santa Maria Minas', en: 'Colégio Espanhol Santa Maria Minas' } }
  ];

  const LANGS = [
    { n: { pt: 'Português', es: 'Portugués', en: 'Portuguese' }, l: { pt: 'Nativo', es: 'Nativo', en: 'Native' }, v: 5 },
    { n: { pt: 'Espanhol', es: 'Español', en: 'Spanish' }, l: { pt: 'Intermediário-avançado, uso diário no trabalho', es: 'Intermedio-avanzado, uso diario en el trabajo', en: 'Upper-intermediate, used daily at work' }, v: 4 },
    { n: { pt: 'Inglês', es: 'Inglés', en: 'English' }, l: { pt: 'Intermediário', es: 'Intermedio', en: 'Intermediate' }, v: 3 }
  ];

  /* ------------------------------------------------------------------ */
  /* Rendering                                                           */
  /* ------------------------------------------------------------------ */
  let lang = 'pt';
  let activeSkill = null;
  const tx = (v) => (typeof v === 'string' ? v : v[lang]);
  const t = (k) => UI[lang][k];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const usage = {};
  JOBS.forEach((j) => j.items.forEach((it) => it.tags.forEach((tag) => { usage[tag] = (usage[tag] || 0) + 1; })));

  function renderTimeline() {
    $('#timeline').innerHTML = JOBS.map((j) => `
      <li class="entry${j.current ? ' current' : ''}">
        <div class="entry-when"><b>${j.from} – ${j.to || t('present')}</b>${j.current ? t('current') : ''}</div>
        <div>
          <h3>${esc(tx(j.title))}</h3>
          <p class="company">${esc(j.company)}, ${t('allocated')}</p>
          <ul>${j.items.map((it) => `<li data-tags="${it.tags.join(' ')}">${esc(it[lang])}</li>`).join('')}</ul>
        </div>
      </li>`).join('');
  }

  function renderSkills() {
    $('#skillGroups').innerHTML = SKILLS.map((g) => `
      <div class="skill-group">
        <h3>${esc(tx(g.group))}</h3>
        <div class="chips">${g.items.map(([id, label]) => usage[id]
          ? `<button type="button" class="chip" data-skill="${id}" data-used aria-pressed="${activeSkill === id}">${esc(tx(label))}</button>`
          : `<span class="chip">${esc(tx(label))}</span>`).join('')}</div>
      </div>`).join('');
  }

  function renderEdu() {
    $('#eduList').innerHTML = EDU.map((e) => `<li><b>${esc(tx(e.t))}</b><span class="yr">${tx(e.yr)}</span><span>${esc(tx(e.s))}</span></li>`).join('');
    $('#langList').innerHTML = LANGS.map((l) => `
      <li><div class="top"><b>${tx(l.n)}</b><span>${esc(tx(l.l))}</span></div>
      <div class="meter" role="img" aria-label="${tx(l.n)}: ${l.v}/5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= l.v ? 'on' : ''}"></i>`).join('')}</div></li>`).join('');
  }

  function applyFilter() {
    const tl = $('#timeline');
    const note = $('#filterNote');
    $$('.chip[data-skill]').forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.skill === activeSkill)));
    if (!activeSkill) { tl.classList.remove('filtering'); $$('li[data-tags]', tl).forEach((li) => li.classList.remove('hit')); note.textContent = ''; return; }
    tl.classList.add('filtering');
    let n = 0;
    $$('li[data-tags]', tl).forEach((li) => { const hit = li.dataset.tags.split(' ').includes(activeSkill); li.classList.toggle('hit', hit); if (hit) n++; });
    note.innerHTML = `${t('skills.hits')(n)} <a href="#historico">${t('nav.history')}</a> <a href="#" id="clearFilter">${t('skills.clear')}</a>`;
  }

  function setLang(next) {
    lang = next;
    root.lang = { pt: 'pt-BR', es: 'es', en: 'en' }[lang];
    $$('[data-i18n]').forEach((el) => { const v = UI[lang][el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const st = $('#ticketStatus');
    $('.status-text', st).textContent = t('t.s.' + st.dataset.state);
    renderTimeline(); renderSkills(); renderEdu(); applyFilter();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  /* ------------------------------------------------------------------ */
  /* Ticket sequence (the one orchestrated moment on the page)           */
  /* ------------------------------------------------------------------ */
  const ticket = $('#ticket');
  const status = $('#ticketStatus');
  const bar = $('#ticketBar');
  let timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));

  function setState(s) {
    ticket.dataset.state = s; status.dataset.state = s;
    $('.status-text', status).textContent = t('t.s.' + s);
  }
  function runTicket() {
    timers.forEach(clearTimeout); timers = [];
    if (reduceMotion) { ticket.classList.add('filled'); bar.style.width = '100%'; setState('resolved'); return; }
    ticket.classList.remove('filled'); bar.style.transition = 'none'; bar.style.width = '0'; setState('new');
    later(() => ticket.classList.add('filled'), 500);
    later(() => { setState('progress'); bar.style.transition = 'width 1.8s cubic-bezier(.4,0,.2,1)'; bar.style.width = '100%'; }, 1400);
    later(() => setState('resolved'), 3300);
  }

  /* ------------------------------------------------------------------ */
  /* Interactions                                                        */
  /* ------------------------------------------------------------------ */
  const toast = $('#toast');
  let toastTimer;
  function showToast(msg) { toast.textContent = msg; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2400); }

  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip[data-skill]');
    if (chip) { activeSkill = activeSkill === chip.dataset.skill ? null : chip.dataset.skill; applyFilter(); return; }
    if (e.target.id === 'clearFilter') { e.preventDefault(); activeSkill = null; applyFilter(); }
  });

  $$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  $('#replay').addEventListener('click', runTicket);

  $('#themeBtn').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  $('#copyEmail').addEventListener('click', async (e) => {
    try { await navigator.clipboard.writeText(e.currentTarget.dataset.email); showToast(t('copied')); }
    catch (err) { showToast(t('copyFail')); }
  });

  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.name.value.trim(), msg = f.message.value.trim(), company = f.company.value.trim();
    f.name.setAttribute('aria-invalid', String(!name));
    f.message.setAttribute('aria-invalid', String(!msg));
    if (!name || !msg) { $('#formError').textContent = t('form.err'); (name ? f.message : f.name).focus(); return; }
    $('#formError').textContent = '';
    const subject = `${f.subject.options[f.subject.selectedIndex].text}${company ? ' | ' + company : ''}`;
    const body = `${msg}\n\n${name}${company ? '\n' + company : ''}`;
    window.location.href = `mailto:contatogabrielgandra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(t('form.opened'));
  });

  // top bar border + active nav link
  const topbar = $('.topbar');
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const links = $$('.nav a');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['historico', 'competencias', 'formacao', 'contato'].forEach((id) => io.observe(document.getElementById(id)));

  /* ------------------------------------------------------------------ */
  /* Start                                                               */
  /* ------------------------------------------------------------------ */
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const browser = (navigator.language || 'pt').slice(0, 2);
  setLang(UI[saved] ? saved : (UI[browser] ? browser : 'pt'));
  requestAnimationFrame(() => requestAnimationFrame(() => { root.classList.add('ready'); runTicket(); }));
})();
