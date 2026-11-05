(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* =================================================================== */
  /* Copy                                                                 */
  /* =================================================================== */
  const UI = {
    pt: {
      skip: 'Pular para o conteúdo', theme: 'Alternar tema claro ou escuro',
      'nav.history': 'Histórico', 'nav.projects': 'Projetos', 'nav.skills': 'Competências',
      'projects.title': 'Projetos', 'projects.intro': 'Fora do suporte, eu crio sites, produtos e jogos. Alguns sites foram vendidos para clientes; outros são projetos meus.', 'p.open': 'Abrir site', 'p.play': 'Jogar no Roblox', 'nav.education': 'Formação', 'nav.contact': 'Contato',
      'hero.kicker': 'Analista de Infraestrutura de TI em Belo Horizonte',
      'hero.lead': 'Mantenho contas, acessos, computadores e chamados funcionando para quem trabalha, em português e espanhol. Mais de 3 anos no ambiente corporativo da Prosegur.',
      'cta.contact': 'Entrar em contato', 'cta.download': 'Baixar currículo em PDF',
      'label.asset': 'Ativo de TI', 'label.name': 'Nome', 'label.role': 'Função', 'label.roleV': 'Analista de Infraestrutura Jr.',
      'label.since': 'Em TI desde', 'label.langs': 'Idiomas', 'label.reprint': 'Imprimir de novo', 'label.hint': 'Arraste a etiqueta',
      summary: 'Comecei como assistente de suporte em 2023 e hoje sou analista de infraestrutura no mesmo cliente. No caminho, passei a administrar Active Directory, Azure e Intune, a escrever scripts que tiram trabalho repetitivo da fila e a atender as áreas da Prosegur na Espanha no idioma delas.',
      'history.title': 'Histórico',
      'history.intro': 'Três cargos no cliente Prosegur, por empresas prestadoras de serviço de TI. Conecte uma porta para ver o que eu fazia.',
      'skills.title': 'Competências',
      'skills.intro': 'Escolha uma etiqueta: as portas e as atividades onde ela foi usada acendem no histórico.',
      'skills.hits': (n, total) => `Usada em ${n} de ${total} cargos. As portas acesas no histórico mostram onde.`,
      'skills.clear': 'Limpar filtro',
      'edu.title': 'Formação', 'lang.title': 'Idiomas',
      'contact.title': 'Imprima sua etiqueta',
      'contact.intro': 'Tem uma vaga ou projeto? Preencha os campos, confira a etiqueta e envie. Seu aplicativo de e-mail abre com a mensagem pronta.',
      'form.name': 'Seu nome', 'form.company': 'Empresa', 'form.subject': 'Assunto', 'form.message': 'Mensagem',
      'form.s.job': 'Vaga de emprego', 'form.s.interview': 'Convite para entrevista', 'form.s.other': 'Outro assunto',
      'form.send': 'Enviar por e-mail', 'form.err': 'Preencha seu nome e a mensagem para enviar.', 'form.opened': 'Mensagem pronta no seu e-mail',
      'cl.head': 'Para: Gabriel Gandra', 'cl.from': 'De', 'cl.company': 'Empresa',
      'cl.phName': 'Seu nome', 'cl.phCompany': 'Sua empresa', 'cl.phMsg': 'Sua mensagem aparece aqui enquanto você digita.',
      'contact.email': 'E-mail', copied: 'E-mail copiado', copyFail: 'Não foi possível copiar. Selecione o endereço manualmente.',
      footer: 'Gabriel Rodrigues Pinto Gandra, Belo Horizonte. Feito à mão com HTML, CSS e JavaScript.', 'footer.top': 'Voltar ao topo',
      stamp: 'Enviado', present: 'atual', allocated: 'alocado na Prosegur', ports: 'Cargos'
    },
    es: {
      skip: 'Saltar al contenido', theme: 'Cambiar tema claro u oscuro',
      'nav.history': 'Historial', 'nav.projects': 'Proyectos', 'nav.skills': 'Competencias',
      'projects.title': 'Proyectos', 'projects.intro': 'Fuera del soporte, creo sitios web, productos y juegos. Algunos sitios se vendieron a clientes; otros son proyectos propios.', 'p.open': 'Abrir sitio', 'p.play': 'Jugar en Roblox', 'nav.education': 'Formación', 'nav.contact': 'Contacto',
      'hero.kicker': 'Analista de Infraestructura TI en Belo Horizonte, Brasil',
      'hero.lead': 'Mantengo cuentas, accesos, equipos y tickets funcionando para quienes trabajan, en portugués y español. Más de 3 años en el entorno corporativo de Prosegur.',
      'cta.contact': 'Contactar', 'cta.download': 'Descargar CV en PDF',
      'label.asset': 'Activo TI', 'label.name': 'Nombre', 'label.role': 'Puesto', 'label.roleV': 'Analista de Infraestructura Jr.',
      'label.since': 'En TI desde', 'label.langs': 'Idiomas', 'label.reprint': 'Imprimir otra vez', 'label.hint': 'Arrastra la etiqueta',
      summary: 'Empecé como asistente de soporte en 2023 y hoy soy analista de infraestructura en el mismo cliente. En el camino pasé a administrar Active Directory, Azure e Intune, a escribir scripts que quitan trabajo repetitivo de la cola y a atender a las áreas de Prosegur en España en su idioma.',
      'history.title': 'Historial',
      'history.intro': 'Tres puestos en el cliente Prosegur, a través de empresas proveedoras de servicios TI. Conecta un puerto para ver lo que hacía.',
      'skills.title': 'Competencias',
      'skills.intro': 'Elige una etiqueta: los puertos y las actividades donde se usó se encienden en el historial.',
      'skills.hits': (n, total) => `Usada en ${n} de ${total} puestos. Los puertos encendidos en el historial muestran dónde.`,
      'skills.clear': 'Quitar filtro',
      'edu.title': 'Formación', 'lang.title': 'Idiomas',
      'contact.title': 'Imprime tu etiqueta',
      'contact.intro': '¿Tienes una vacante o un proyecto? Completa los campos, revisa la etiqueta y envía. Tu aplicación de correo se abre con el mensaje listo.',
      'form.name': 'Tu nombre', 'form.company': 'Empresa', 'form.subject': 'Asunto', 'form.message': 'Mensaje',
      'form.s.job': 'Oferta de empleo', 'form.s.interview': 'Invitación a entrevista', 'form.s.other': 'Otro asunto',
      'form.send': 'Enviar por correo', 'form.err': 'Completa tu nombre y el mensaje para enviar.', 'form.opened': 'Mensaje listo en tu correo',
      'cl.head': 'Para: Gabriel Gandra', 'cl.from': 'De', 'cl.company': 'Empresa',
      'cl.phName': 'Tu nombre', 'cl.phCompany': 'Tu empresa', 'cl.phMsg': 'Tu mensaje aparece aquí mientras escribes.',
      'contact.email': 'Correo', copied: 'Correo copiado', copyFail: 'No se pudo copiar. Selecciona la dirección manualmente.',
      footer: 'Gabriel Rodrigues Pinto Gandra, Belo Horizonte. Hecho a mano con HTML, CSS y JavaScript.', 'footer.top': 'Volver arriba',
      stamp: 'Enviado', present: 'actual', allocated: 'asignado a Prosegur', ports: 'Puestos'
    },
    en: {
      skip: 'Skip to content', theme: 'Switch light or dark theme',
      'nav.history': 'History', 'nav.projects': 'Projects', 'nav.skills': 'Skills',
      'projects.title': 'Projects', 'projects.intro': 'Outside support work, I build websites, products and games. Some sites were sold to clients; others are my own projects.', 'p.open': 'Open site', 'p.play': 'Play on Roblox', 'nav.education': 'Education', 'nav.contact': 'Contact',
      'hero.kicker': 'IT Infrastructure Analyst in Belo Horizonte, Brazil',
      'hero.lead': 'I keep accounts, access, computers and tickets working for the people who rely on them, in Portuguese and Spanish. Over 3 years in Prosegur’s corporate environment.',
      'cta.contact': 'Get in touch', 'cta.download': 'Download résumé (PDF)',
      'label.asset': 'IT asset', 'label.name': 'Name', 'label.role': 'Role', 'label.roleV': 'Junior Infrastructure Analyst',
      'label.since': 'In IT since', 'label.langs': 'Languages', 'label.reprint': 'Print again', 'label.hint': 'Drag the label',
      summary: 'I started as a support assistant in 2023 and today I’m an infrastructure analyst at the same client. Along the way I took over Active Directory, Azure and Intune administration, wrote scripts that take repetitive work off the queue, and started supporting Prosegur’s teams in Spain in their own language.',
      'history.title': 'History',
      'history.intro': 'Three roles at Prosegur, through IT service providers. Plug into a port to see what I did.',
      'skills.title': 'Skills',
      'skills.intro': 'Pick a label: the ports and activities where it was used light up in my history.',
      'skills.hits': (n, total) => `Used in ${n} of ${total} roles. The lit ports in my history show where.`,
      'skills.clear': 'Clear filter',
      'edu.title': 'Education', 'lang.title': 'Languages',
      'contact.title': 'Print your label',
      'contact.intro': 'Have a role or project in mind? Fill in the fields, check the label and send. Your email app opens with the message ready.',
      'form.name': 'Your name', 'form.company': 'Company', 'form.subject': 'Subject', 'form.message': 'Message',
      'form.s.job': 'Job opening', 'form.s.interview': 'Interview invitation', 'form.s.other': 'Something else',
      'form.send': 'Send by email', 'form.err': 'Fill in your name and message to send.', 'form.opened': 'Message ready in your email',
      'cl.head': 'To: Gabriel Gandra', 'cl.from': 'From', 'cl.company': 'Company',
      'cl.phName': 'Your name', 'cl.phCompany': 'Your company', 'cl.phMsg': 'Your message shows up here as you type.',
      'contact.email': 'Email', copied: 'Email copied', copyFail: 'Couldn’t copy. Select the address manually.',
      footer: 'Gabriel Rodrigues Pinto Gandra, Belo Horizonte. Handmade with HTML, CSS and JavaScript.', 'footer.top': 'Back to top',
      stamp: 'Sent', present: 'present', allocated: 'assigned to Prosegur', ports: 'Roles'
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
      ['scripts', { pt: 'Scripts .bat e automação', es: 'Scripts .bat y automatización', en: '.bat and automation scripts' }],
      ['web', { pt: 'Sites e aplicativos web', es: 'Sitios y aplicaciones web', en: 'Websites and web apps' }],
      ['js', 'JavaScript'], ['c', { pt: 'C e C++', es: 'C y C++', en: 'C and C++' }], ['sql', 'SQL (MySQL)'], ['roblox', 'Roblox Studio'],
      ['oracle', { pt: 'Oracle (consultas)', es: 'Oracle (consultas)', en: 'Oracle (queries)' }] ] },
    { group: { pt: 'Documentação', es: 'Documentación', en: 'Documentation' }, items: [
      ['docs', { pt: 'Manuais operacionais', es: 'Manuales operativos', en: 'Operating manuals' }],
      ['office', { pt: 'Word, Excel e PowerPoint', es: 'Word, Excel y PowerPoint', en: 'Word, Excel and PowerPoint' }] ] }
  ];

  const JOBS = [
    { tag: 'P1', color: 'var(--cable-blue)', from: '06/2025', to: null,
      short: { pt: 'Analista de Infraestrutura', es: 'Analista de Infraestructura', en: 'Infrastructure Analyst' },
      title: { pt: 'Analista de Infraestrutura Jr.', es: 'Analista de Infraestructura Jr.', en: 'Junior Infrastructure Analyst' },
      company: 'JDC Consultoria em Informática',
      items: [
        { tags: ['ad', 'azure', 'intune', 'access'],
          pt: 'Administro contas, grupos, dispositivos e políticas com Active Directory, Azure e Microsoft Intune, incluindo licenças, pastas compartilhadas e acesso à rede Wi-Fi corporativa.',
          es: 'Administro cuentas, grupos, dispositivos y políticas con Active Directory, Azure y Microsoft Intune, incluidas licencias, carpetas compartidas y acceso a la red Wi-Fi corporativa.',
          en: 'Manage accounts, groups, devices and policies with Active Directory, Azure and Microsoft Intune, including licences, shared folders and corporate Wi-Fi access.' },
        { tags: ['scripts', 'web'],
          pt: 'Desenvolvo sites, aplicativos e scripts .bat que melhoram fluxos e processos da equipe, reduzem tarefas manuais e diminuem o tempo de atendimento.',
          es: 'Desarrollo sitios web, aplicaciones y scripts .bat que mejoran flujos y procesos del equipo, reducen tareas manuales y acortan el tiempo de atención.',
          en: 'Build websites, apps and .bat scripts that improve team workflows, cut manual work and shorten response times.' },
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
    { tag: 'P2', color: 'var(--cable-yellow)', from: '02/2025', to: '06/2025',
      short: { pt: 'Técnico de Suporte', es: 'Técnico de Soporte', en: 'Support Technician' },
      title: { pt: 'Técnico de Suporte Jr.', es: 'Técnico de Soporte Jr.', en: 'Junior Support Technician' },
      company: 'Fractalia Brasil Serviços Tecnológicos',
      items: [
        { tags: ['ad', 'azure', 'intune', 'access'],
          pt: 'Gestão de dispositivos e acessos com Active Directory, Azure e Intune.',
          es: 'Gestión de dispositivos y accesos con Active Directory, Azure e Intune.',
          en: 'Device and access management with Active Directory, Azure and Intune.' },
        { tags: ['lifecycle', 'format'],
          pt: 'Manutenção do parque de computadores e controle de estoque de equipamentos.',
          es: 'Mantenimiento del parque de equipos y control de inventario.',
          en: 'Hardware maintenance and equipment stock control.' },
        { tags: ['spanish', 'n1n2'],
          pt: 'Suporte bilíngue, em português e espanhol, mantendo a continuidade do atendimento no cliente.',
          es: 'Soporte bilingüe, en portugués y español, manteniendo la continuidad del servicio en el cliente.',
          en: 'Bilingual support in Portuguese and Spanish, keeping service continuity at the client.' }
      ] },
    { tag: 'P3', color: 'var(--cable-green)', from: '02/2023', to: '02/2025',
      short: { pt: 'Assistente de Suporte', es: 'Asistente de Soporte', en: 'Support Assistant' },
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
          pt: 'Consultas e liberações de acesso em Azure, Active Directory e Oracle.',
          es: 'Consultas y habilitación de accesos en Azure, Active Directory y Oracle.',
          en: 'Lookups and access grants in Azure, Active Directory and Oracle.' }
      ] }
  ];

  const PROJECTS = [
    { title: { pt: 'Sites', es: 'Sitios web', en: 'Websites' },
      note: { pt: 'Vendidos para clientes ou mantidos como projetos próprios.', es: 'Vendidos a clientes o mantenidos como proyectos propios.', en: 'Sold to clients or kept as my own projects.' },
      items: [
        { name: 'Aldrin Gandra', url: 'https://www.aldringandra.com.br/', code: 'ALDRINGANDRA.COM.BR',
          tag: { pt: 'Site oficial', es: 'Sitio oficial', en: 'Official site' },
          d: { pt: 'Site oficial de cantor e compositor de Belo Horizonte, com músicas, clipes e contratação de shows.', es: 'Sitio oficial de un cantante y compositor de Belo Horizonte, con música, videoclips y contratación de shows.', en: 'Official site for a Belo Horizonte singer-songwriter, with music, videos and show bookings.' } },
        { name: 'GandraCast', url: 'http://gandracast.com.br/', code: 'GANDRACAST.COM.BR',
          tag: { pt: 'Podcast', es: 'Podcast', en: 'Podcast' },
          d: { pt: 'Site do podcast, com os episódios do YouTube, os cortes para redes sociais e uma página de parcerias para marcas.', es: 'Sitio del podcast, con los episodios de YouTube, los cortes para redes sociales y una página de alianzas para marcas.', en: 'Podcast site with the YouTube episodes, social media clips and a partnerships page for brands.' } },
        { name: 'Go After', url: 'http://goafter.com.br/', code: 'GOAFTER.COM.BR',
          tag: { pt: 'Educação', es: 'Educación', en: 'Education' },
          d: { pt: 'Plataforma completa de aprendizagem on-line para uma escola.', es: 'Plataforma completa de aprendizaje en línea para una escuela.', en: 'A complete online learning platform for a school.' } }
      ] },
    { title: { pt: 'Produtos próprios', es: 'Productos propios', en: 'My own products' },
      note: { pt: 'Desenvolvidos para empreender.', es: 'Desarrollados para emprender.', en: 'Built as business ventures.' },
      items: [
        { name: 'BarbersApp', url: 'https://www.barbersapp.com.br/', code: 'BARBERSAPP.COM.BR',
          tag: { pt: 'Sistema', es: 'Sistema', en: 'SaaS' },
          d: { pt: 'Sistema completo para barbearias: agendamento, programa de fidelidade, cupons, mapa interativo e landing page própria.', es: 'Sistema completo para barberías: reservas, programa de fidelidad, cupones, mapa interactivo y landing page propia.', en: 'All-in-one system for barbershops: booking, loyalty programme, coupons, interactive map and a landing page of their own.' } },
        { name: 'MesaRápida', url: 'https://www.mesarapida.com.br/', code: 'MESARAPIDA.COM.BR',
          tag: { pt: 'Reservas', es: 'Reservas', en: 'Bookings' },
          d: { pt: 'Reserva de mesas em segundos para restaurantes, com organização das mesas e menos faltas (no-show).', es: 'Reserva de mesas en segundos para restaurantes, con organización de mesas y menos ausencias (no-show).', en: 'Table booking in seconds for restaurants, with table management and fewer no-shows.' } }
      ] },
    { title: { pt: 'Jogos no Roblox', es: 'Juegos en Roblox', en: 'Roblox games' },
      note: { pt: 'Por diversão; comecei há pouco tempo.', es: 'Por diversión; empecé hace poco.', en: 'Just for fun; I started recently.' },
      items: [
        { name: 'Caos Burger', game: true, url: 'https://www.roblox.com/pt/games/82373635262098/Caos-Burger', code: 'RBX-82373635262098',
          tag: { pt: 'Terror', es: 'Terror', en: 'Horror' },
          d: { pt: 'De dia, compras num hipermercado coberto de neblina; à noite, o drive-thru da lanchonete. Algo caça você nos dois turnos.', es: 'De día, compras en un hipermercado cubierto de niebla; de noche, el autoservicio de la hamburguesería. Algo te caza en ambos turnos.', en: 'By day, shop in a fog-filled hypermarket; by night, run the burger drive-thru. Something hunts you on both shifts.' } },
        { name: 'Hungry Lake', game: true, url: 'https://www.roblox.com/pt/games/73925819065394/Hungry-Lake-Horror-Fishing', code: 'RBX-73925819065394',
          tag: { pt: 'Pesca e terror', es: 'Pesca y terror', en: 'Horror fishing' },
          d: { pt: 'De 1 a 6 jogadores pescam, negociam com o mercador e precisam pagar ao lago o que é dele antes do anoitecer.', es: 'De 1 a 6 jugadores pescan, comercian con el mercader y deben pagarle al lago lo suyo antes del anochecer.', en: 'One to six players fish, trade with the merchant and must pay the lake its share before nightfall.' } },
        { name: 'Echoes of the Deep', game: true, url: 'https://www.roblox.com/pt/games/73423319870769/Echoes-of-the-Deep-Abyss-Chronicles', code: 'RBX-73423319870769',
          tag: { pt: 'Sobrevivência', es: 'Supervivencia', en: 'Survival' },
          d: { pt: 'Um esquadrão de 1 a 4 mercenários desce em minas abandonadas atrás de cristais e do que mais vive lá embaixo.', es: 'Un escuadrón de 1 a 4 mercenarios baja a minas abandonadas en busca de cristales y de lo que vive allí abajo.', en: 'A squad of one to four mercenaries descends into abandoned mines after crystals, and whatever else lives down there.' } }
      ] }
  ];

  const EDU = [
    { yr: { pt: '2025 – atual', es: '2025 – actual', en: '2025 – present' },
      t: { pt: 'Bacharelado em Ciência da Computação', es: 'Grado en Ciencias de la Computación', en: 'BSc in Computer Science' },
      s: { pt: 'Centro Universitário de Belo Horizonte (UniBH), em andamento', es: 'Centro Universitário de Belo Horizonte (UniBH), en curso', en: 'Centro Universitário de Belo Horizonte (UniBH), in progress' } },
    { yr: '2021 – 2022',
      t: { pt: 'Técnico em Informática, Desenvolvimento Mobile', es: 'Técnico en Informática, Desarrollo Móvil', en: 'IT Technician, Mobile Development' },
      s: { pt: 'Colégio Cotemig, integrado ao Ensino Médio', es: 'Colégio Cotemig, junto con la secundaria', en: 'Colégio Cotemig, alongside high school' } },
    { yr: '2022',
      t: { pt: 'Voluntário no Code Club', es: 'Voluntario en Code Club', en: 'Code Club volunteer' },
      s: { pt: 'Colégio Cotemig, apoio no ensino de programação', es: 'Colégio Cotemig, apoyo en la enseñanza de programación', en: 'Colégio Cotemig, helping teach programming' } },
    { yr: '2020',
      t: { pt: 'Certificado de Espanhol', es: 'Certificado de Español', en: 'Spanish certificate' },
      s: 'Colégio Espanhol Santa Maria Minas' }
  ];

  const LANGS = [
    { n: { pt: 'Português', es: 'Portugués', en: 'Portuguese' }, l: { pt: 'Nativo', es: 'Nativo', en: 'Native' }, v: 5 },
    { n: { pt: 'Espanhol', es: 'Español', en: 'Spanish' }, l: { pt: 'Intermediário-avançado, uso diário no trabalho', es: 'Intermedio-avanzado, uso diario en el trabajo', en: 'Upper-intermediate, used daily at work' }, v: 4 },
    { n: { pt: 'Inglês', es: 'Inglés', en: 'English' }, l: { pt: 'Intermediário', es: 'Intermedio', en: 'Intermediate' }, v: 3 }
  ];

  /* =================================================================== */
  /* State + helpers                                                      */
  /* =================================================================== */
  let lang = 'pt', activeJob = 0, activeSkill = null, panelSeen = false;
  const seen = { skills: false, edu: false, projects: false };
  const tx = (v) => (typeof v === 'string' ? v : v[lang]);
  const t = (k) => UI[lang][k];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const used = new Set(JOBS.flatMap((j) => j.items.flatMap((i) => i.tags)));

  function barcode(sel, text) {
    const svg = $(sel);
    if (!svg || typeof JsBarcode !== 'function') return;
    JsBarcode(svg, text, { format: 'CODE128', displayValue: false, margin: 0, height: 48, width: 2, background: 'transparent', lineColor: '#0A0A0A' });
    const w = svg.getAttribute('width'), h = svg.getAttribute('height');
    svg.setAttribute('viewBox', `0 0 ${parseFloat(w)} ${parseFloat(h)}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.removeAttribute('width'); svg.removeAttribute('height'); svg.removeAttribute('style');
  }
  const ascii = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z0-9 .-]/g, '').trim().replace(/\s+/g, '-');

  /* =================================================================== */
  /* Patch panel                                                          */
  /* =================================================================== */
  function renderPorts() {
    const wrap = $('#ports');
    wrap.setAttribute('aria-label', t('ports'));
    wrap.innerHTML = JOBS.map((j, i) => `
      <button class="port" role="tab" id="port-${i}" aria-controls="jobDetail" aria-selected="${i === activeJob}" tabindex="${i === activeJob ? 0 : -1}" data-i="${i}" style="--c:${j.color}">
        <span class="port-tag">${j.tag} ${j.from.slice(3)}${j.to ? '–' + j.to.slice(5) : '+'}</span>
        <span class="jack-row"><span class="jack"><span class="plug"></span></span><span class="leds"><i></i><i></i></span></span>
        <span class="port-title">${esc(tx(j.short))}</span>
      </button>`).join('');
    markPorts();
  }

  function renderJob(animate) {
    const j = JOBS[activeJob];
    const d = $('#jobDetail');
    d.style.setProperty('--c', j.color);
    d.setAttribute('aria-labelledby', 'port-' + activeJob);
    d.innerHTML = `<div class="${animate ? 'swap' : ''}">
      <div class="job-meta"><h3>${esc(tx(j.title))}</h3><span class="job-dates">${j.from} – ${j.to || t('present')}</span></div>
      <p class="job-company"><b>${esc(j.company)}</b>, ${t('allocated')}</p>
      <ul>${j.items.map((it, i) => `<li style="--i:${i}" data-tags="${it.tags.join(' ')}">${esc(it[lang])}</li>`).join('')}</ul></div>`;
    markItems();
    drawCable(animate);
  }

  function selectJob(i, focus) {
    if (i === activeJob && !focus) return;
    activeJob = i;
    $$('.port').forEach((p, k) => { p.setAttribute('aria-selected', String(k === i)); p.tabIndex = k === i ? 0 : -1; });
    if (focus) $('#port-' + i).focus();
    renderJob(true);
  }

  function drawCable(animate) {
    const wrap = $('#panelWrap'), port = $('#port-' + activeJob), detail = $('#jobDetail'), path = $('#cable');
    if (!port) return;
    const W = wrap.getBoundingClientRect(), jack = $('.jack', port).getBoundingClientRect(), D = detail.getBoundingClientRect();
    const P = $('#ports').getBoundingClientRect();
    const x1 = jack.left + jack.width / 2 - W.left, y0 = jack.bottom - W.top - 4, y1 = P.bottom - W.top + 14;
    const x2 = Math.min(D.left - W.left + 64, D.right - W.left - 40), y2 = D.top - W.top + 2;
    const sag = Math.max(30, (y2 - y1) * .7);
    path.setAttribute('d', `M ${x1} ${y0} L ${x1} ${y1} C ${x1} ${y1 + sag}, ${x2} ${y2 - sag}, ${x2} ${y2}`);
    path.style.stroke = JOBS[activeJob].color;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    if (!panelSeen) { path.style.transition = 'none'; path.style.strokeDashoffset = len; return; }
    if (animate) {
      path.style.transition = 'none'; path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset .8s cubic-bezier(.4,0,.2,1) .15s';
    } else path.style.transition = 'none';
    path.style.strokeDashoffset = 0;
  }

  $('#ports').addEventListener('click', (e) => { const p = e.target.closest('.port'); if (p) selectJob(+p.dataset.i); });
  $('#ports').addEventListener('keydown', (e) => {
    const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in map) { e.preventDefault(); selectJob((activeJob + map[e.key] + JOBS.length) % JOBS.length, true); }
    if (e.key === 'Home') { e.preventDefault(); selectJob(0, true); }
    if (e.key === 'End') { e.preventDefault(); selectJob(JOBS.length - 1, true); }
  });
  let rz; addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => drawCable(false)); });

  /* =================================================================== */
  /* Skills filter                                                        */
  /* =================================================================== */
  function renderSkills() {
    $('#skillGroups').innerHTML = SKILLS.map((g, gi) => `
      <div class="skill-group${seen.skills ? ' in' : ''}" style="--g:${gi}"><h3>${esc(tx(g.group))}</h3><div class="stickers">${g.items.map(([id, label], i) => used.has(id)
        ? `<button type="button" class="sticker" style="--i:${i}" data-skill="${id}" aria-pressed="${activeSkill === id}">${esc(tx(label))}</button>`
        : `<span class="sticker" style="--i:${i}">${esc(tx(label))}</span>`).join('')}</div></div>`).join('');
  }
  function markPorts() { $$('.port').forEach((p, i) => p.classList.toggle('match', !!activeSkill && JOBS[i].items.some((it) => it.tags.includes(activeSkill)))); }
  function markItems() {
    const d = $('#jobDetail');
    d.classList.toggle('filtering', !!activeSkill);
    $$('li[data-tags]', d).forEach((li) => li.classList.toggle('hit', !!activeSkill && li.dataset.tags.split(' ').includes(activeSkill)));
  }
  function applyFilter() {
    $$('.sticker[data-skill]').forEach((s) => s.setAttribute('aria-pressed', String(s.dataset.skill === activeSkill)));
    markPorts(); markItems();
    const note = $('#filterNote');
    if (!activeSkill) { note.textContent = ''; return; }
    const n = JOBS.filter((j) => j.items.some((it) => it.tags.includes(activeSkill))).length;
    note.innerHTML = `${esc(t('skills.hits')(n, JOBS.length))}<button type="button" id="clearFilter">${esc(t('skills.clear'))}</button>`;
  }
  document.addEventListener('click', (e) => {
    const s = e.target.closest('.sticker[data-skill]');
    if (s) {
      activeSkill = activeSkill === s.dataset.skill ? null : s.dataset.skill;
      // if the open role doesn't use the skill, plug into the most recent one that does
      if (activeSkill && !JOBS[activeJob].items.some((it) => it.tags.includes(activeSkill))) {
        const k = JOBS.findIndex((j) => j.items.some((it) => it.tags.includes(activeSkill)));
        if (k >= 0) { activeJob = k; $$('.port').forEach((p, i) => { p.setAttribute('aria-selected', String(i === k)); p.tabIndex = i === k ? 0 : -1; }); renderJob(true); }
      }
      applyFilter();
    }
    if (e.target.id === 'clearFilter') { activeSkill = null; applyFilter(); }
  });

  /* =================================================================== */
  /* Education, languages                                                 */
  /* =================================================================== */
  const ROTS = [-1.2, .8, -.5, 1.1, -.9, .6];
  const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  function renderProjects() {
    let n = 0;
    $('#projectGroups').innerHTML = PROJECTS.map((g) => `
      <div class="project-group${seen.projects ? ' in' : ''}">
        <header><h3>${esc(tx(g.title))}</h3><p>${esc(tx(g.note))}</p></header>
        <div class="project-grid">${g.items.map((p, i) => `
          <a class="project" href="${p.url}" target="_blank" rel="noopener" style="--i:${i};--rot:${ROTS[n++ % ROTS.length]}deg" aria-label="${esc(p.name)}: ${esc(t(p.game ? 'p.play' : 'p.open'))}">
            <div class="label-head"><span>${esc(tx(p.tag))}</span>${ARROW}</div>
            <h4>${esc(p.name)}</h4>
            <p>${esc(tx(p.d))}</p>
            <div class="p-foot"><svg class="barcode" data-code="${p.code}"></svg><span>${p.code}<b>${esc(t(p.game ? 'p.play' : 'p.open'))}</b></span></div>
          </a>`).join('')}</div>
      </div>`).join('');
    $$('#projectGroups svg.barcode').forEach((svg) => {
      if (typeof JsBarcode !== 'function') return;
      JsBarcode(svg, svg.dataset.code, { format: 'CODE128', displayValue: false, margin: 0, height: 30, width: 2, background: 'transparent', lineColor: '#0A0A0A' });
      const w = svg.getAttribute('width'), h = svg.getAttribute('height');
      svg.setAttribute('viewBox', `0 0 ${parseFloat(w)} ${parseFloat(h)}`); svg.setAttribute('preserveAspectRatio', 'none');
      svg.removeAttribute('width'); svg.removeAttribute('height'); svg.removeAttribute('style');
    });
  }

  function renderEdu() {
    $('#eduList').innerHTML = EDU.map((e, i) => `<li class="rv${seen.edu ? ' in' : ''}" style="--d:${i * 0.1}s"><b>${esc(tx(e.t))}</b><span class="yr">${esc(tx(e.yr))}</span><span class="where">${esc(tx(e.s))}</span></li>`).join('');
    $('#langList').innerHTML = LANGS.map((l, r) => `<li style="--r:${r}"><div class="top"><b>${tx(l.n)}</b><span>${esc(tx(l.l))}</span></div>
      <div class="meter" role="img" aria-label="${tx(l.n)}: ${l.v}/5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= l.v ? 'on' : ''}" style="--i:${i}"></i>`).join('')}</div></li>`).join('');
  }

  /* =================================================================== */
  /* Contact label maker                                                  */
  /* =================================================================== */
  const form = $('#contactForm');
  function updateContactLabel() {
    const name = form.name.value.trim(), company = form.company.value.trim(), msg = form.message.value.trim();
    $('#clName').textContent = name; $('#clCompany').textContent = company; $('#clMsg').textContent = msg;
    $('#clName').dataset.ph = t('cl.phName'); $('#clCompany').dataset.ph = t('cl.phCompany'); $('#clMsg').dataset.ph = t('cl.phMsg');
    $('#clSubject').textContent = form.subject.options[form.subject.selectedIndex].text;
    barcode('#contactBarcode', `GG-${(ascii(name) || 'CONTATO').slice(0, 24)}-${new Date().getFullYear()}`);
  }
  const d = new Date();
  $('#clDate').textContent = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  form.addEventListener('input', (e) => {
    if (e.target.getAttribute('aria-invalid') === 'true' && e.target.value.trim()) e.target.setAttribute('aria-invalid', 'false');
    updateContactLabel();
    const cl = $('#contactLabel'); cl.classList.remove('bump'); void cl.offsetWidth; cl.classList.add('bump');
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim(), msg = form.message.value.trim(), company = form.company.value.trim();
    form.name.setAttribute('aria-invalid', String(!name)); form.message.setAttribute('aria-invalid', String(!msg));
    if (!name || !msg) { $('#formError').textContent = t('form.err'); (name ? form.message : form.name).focus(); return; }
    $('#formError').textContent = '';
    const subject = form.subject.options[form.subject.selectedIndex].text + (company ? ' | ' + company : '');
    const body = `${msg}\n\n${name}${company ? '\n' + company : ''}`;
    stampLabel();
    setTimeout(() => { location.href = `mailto:contatogabrielgandra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, 650);
    toast(t('form.opened'));
  });

  /* =================================================================== */
  /* Ticker tape + summary that lights up word by word                    */
  /* =================================================================== */
  function renderTicker() {
    const words = SKILLS.flatMap((g) => g.items.map(([, l]) => tx(l)));
    const run = words.map((w) => `<span>${esc(w)}</span>`).join('');
    $('#ticker').innerHTML = run + run;
  }
  const KEYS = new Set(['active', 'directory', 'azure', 'intune', 'scripts', 'espanha', 'españa', 'spain', 'analista', 'analyst']);
  let words = [];
  function splitSummary() {
    const p = $('#summaryText');
    p.innerHTML = t('summary').split(' ').map((w) => {
      const k = KEYS.has(w.toLowerCase().replace(/[.,;:]/g, '')) ? ' key' : '';
      return `<span class="w${k}">${esc(w)}</span>`;
    }).join(' ');
    words = $$('.w', p);
    litSummary();
  }
  function litSummary() {
    const p = $('#summaryText'); if (!p) return;
    const r = p.getBoundingClientRect(), vh = innerHeight;
    const prog = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35)));
    const n = Math.round(prog * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < n));
  }
  function stampLabel() {
    const cl = $('#contactLabel');
    cl.dataset.stamp = t('stamp');
    cl.classList.remove('sent'); void cl.offsetWidth; cl.classList.add('sent');
    setTimeout(() => cl.classList.remove('sent'), 3500);
  }

  /* =================================================================== */
  /* Language                                                             */
  /* =================================================================== */
  function setLang(next) {
    lang = next;
    root.lang = { pt: 'pt-BR', es: 'es', en: 'en' }[lang];
    $$('[data-i18n]').forEach((el) => { const v = UI[lang][el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-label]').forEach((el) => el.setAttribute('aria-label', UI[lang][el.dataset.i18nLabel]));
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderPorts(); renderJob(false); renderSkills(); renderEdu(); applyFilter(); updateContactLabel();
    renderTicker(); splitSummary(); renderProjects();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* =================================================================== */
  /* Hero: print sequence + draggable label                               */
  /* =================================================================== */
  // Plays even with "reduce motion" on: it's a short, one-off sequence and the centrepiece of the page.
  const feed = $('#feed'), label = $('#assetLabel'), led = $('#printerLed'), pwrap = $('.printer-wrap'), reprint = $('#reprint');
  function print() {
    feed.classList.remove('done', 'printing'); feed.style.removeProperty('--rx'); feed.style.removeProperty('--ry'); label.style.transform = '';
    void feed.offsetWidth;
    led.classList.add('busy'); pwrap.classList.add('printing-now'); feed.classList.add('printing'); reprint.disabled = true;
  }
  label.addEventListener('animationend', (e) => {
    if (e.animationName !== 'feed') return;
    feed.classList.remove('printing'); feed.classList.add('done'); led.classList.remove('busy'); pwrap.classList.remove('printing-now'); reprint.disabled = false;
  });
  // 3D tilt following the pointer once printed
  pwrap.addEventListener('pointermove', (e) => {
    if (reduceMotion || drag || !feed.classList.contains('done') || e.pointerType !== 'mouse') return;
    const r = feed.getBoundingClientRect();
    feed.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - .5) * 14}deg`);
    feed.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - .5) * 12}deg`);
  });
  pwrap.addEventListener('pointerleave', () => { feed.style.removeProperty('--rx'); feed.style.removeProperty('--ry'); });
  $('#reprint').addEventListener('click', print);

  let drag = null;
  label.addEventListener('pointerdown', (e) => {
    if (!feed.classList.contains('done')) return;
    drag = { x: e.clientX, y: e.clientY }; label.setPointerCapture(e.pointerId); label.classList.add('dragging');
  });
  label.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = Math.max(-220, Math.min(220, e.clientX - drag.x)), dy = Math.max(-140, Math.min(260, e.clientY - drag.y));
    label.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * .05}deg)`;
  });
  const release = () => { if (!drag) return; drag = null; label.classList.remove('dragging'); label.style.transform = ''; };
  label.addEventListener('pointerup', release); label.addEventListener('pointercancel', release);

  /* =================================================================== */
  /* Chrome: theme, top bar, nav, copy, toast                             */
  /* =================================================================== */
  $('#themeBtn').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });
  const bar = $('#topbar'), hero = $('.hero');
  const progress = $('#progress');
  const onScroll = () => {
    bar.classList.toggle('scrolled', scrollY > 8);
    bar.classList.toggle('solid', scrollY > hero.offsetHeight - bar.offsetHeight);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    litSummary();
  };

  // Reveal on scroll: section titles print in, content rises, panel boots
  $$('.section-head h2, .h-small').forEach((el) => el.classList.add('wipe'));
  $$('.section-head p, #panelWrap, .maker').forEach((el) => el.classList.add('rv'));
  const revealer = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target; revealer.unobserve(el);
    // titles are fully clipped before they print, so their container is what gets observed
    if (el.classList.contains('wipe-host')) { $$(':scope > .wipe', el).forEach((w) => w.classList.add('in')); return; }
    if (el.id === 'skillGroups') { seen.skills = true; $$('.skill-group', el).forEach((g) => g.classList.add('in')); return; }
    if (el.id === 'projectGroups') { seen.projects = true; $$('.project-group', el).forEach((g) => g.classList.add('in')); return; }
    if (el.id === 'eduList') { seen.edu = true; $$('li', el).forEach((li) => li.classList.add('in')); return; }
    if (el.id === 'langList') { el.classList.add('in'); return; }
    el.classList.add('in');
    if (el.id === 'panelWrap') {
      el.classList.add('booting');
      $$('.port', el).forEach((p, i) => p.style.setProperty('--bd', `${i * 0.15}s`));
      setTimeout(() => { el.classList.remove('booting'); panelSeen = true; drawCable(true); }, 900);
    }
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  $$('.wipe').forEach((w) => w.parentElement.classList.add('wipe-host'));
  $$('.wipe-host, .rv, #projectGroups, #skillGroups, #eduList, #langList').forEach((el) => revealer.observe(el));
  addEventListener('scroll', onScroll, { passive: true });
  const links = $$('.nav a');
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.hash === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  ['historico', 'projetos', 'competencias', 'formacao', 'contato'].forEach((id) => io.observe(document.getElementById(id)));

  const toastEl = $('#toast'); let tt;
  function toast(m) { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove('show'), 2400); }
  $('#copyEmail').addEventListener('click', async (e) => {
    try { await navigator.clipboard.writeText(e.currentTarget.dataset.email); toast(t('copied')); } catch (err) { toast(t('copyFail')); }
  });

  /* =================================================================== */
  /* Start                                                                */
  /* =================================================================== */
  barcode('#assetBarcode', 'GABRIEL-GANDRA');
  let saved = null; try { saved = localStorage.getItem('lang'); } catch (e) {}
  const nav = (navigator.language || 'pt').slice(0, 2);
  setLang(UI[saved] ? saved : UI[nav] ? nav : 'pt');
  onScroll();
  // Start once fonts are in, but never wait more than 1.2s for them.
  let started = false;
  const start = () => {
    if (started) return; started = true;
    root.classList.add('ready'); drawCable(false);
    setTimeout(print, 450);
  };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start, start);
  setTimeout(start, 1200);
})();
