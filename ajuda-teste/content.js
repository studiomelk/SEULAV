window.SEULAV_HELP = {
  whatsapp: '5511940845794',
  quickQuestions: [
    'Como começo uma lavagem?',
    'Como usar a secadora?',
    'Preciso colocar sabão?',
    'A roupa saiu muito molhada',
    'Como acompanho o ciclo?',
    'Tive problema no pagamento'
  ],
  guides: {
    lavar: {
      label: 'Lavagem',
      title: 'Guia completo de lavagem',
      intro: 'Da escolha da lavadora até a retirada das roupas, com pagamento e acompanhamento pelo aplicativo.',
      mascot: './lav-especialista.jpg',
      steps: [
        {title:'Escolha uma lavadora disponível', text:'Identifique uma lavadora livre na lavanderia. Confira o número ou QR Code da máquina para selecionar exatamente o equipamento correto no aplicativo.', icon:'washer'},
        {title:'Separe e prepare as roupas', text:'Separe por cor e tipo de tecido e confira as etiquetas. Esvazie bolsos, feche zíperes e evite peças incompatíveis com lavagem em máquina.', icon:'shirt'},
        {title:'Coloque as roupas sem compactar', text:'Distribua as peças soltas no cesto, respeitando a capacidade indicada. Não pressione roupas para tentar colocar mais peças.', icon:'basket'},
        {title:'Feche a porta corretamente', text:'Feche a porta até perceber o travamento. Nunca force a porta se ela estiver bloqueada durante ou logo após um ciclo.', icon:'lock'},
        {title:'Abra o aplicativo SeuLav', text:'No app, escaneie o QR Code ou selecione a identificação da lavadora que você escolheu. Confira o número antes de continuar.', icon:'phone'},
        {title:'Escolha o ciclo e faça o pagamento', text:'Selecione o ciclo adequado e confirme o pagamento no aplicativo. Você não precisa adicionar sabão nem amaciante: a dosagem é automática.', icon:'card'},
        {title:'Inicie e acompanhe pelo aplicativo', text:'Após a confirmação, inicie o ciclo. O andamento e o tempo restante podem ser acompanhados no aplicativo SeuLav.', icon:'play'},
        {title:'Aguarde o fim e retire as roupas', text:'Aguarde o ciclo terminar e a porta ser liberada. Retire as roupas assim que possível para deixar a lavadora disponível para o próximo morador.', icon:'check'}
      ]
    },
    secar: {
      label: 'Secagem',
      title: 'Guia completo de secagem',
      intro: 'Use a secadora com eficiência, respeitando os tecidos e acompanhando o ciclo pelo aplicativo.',
      mascot: './lav-especialista.jpg',
      steps: [
        {title:'Escolha uma secadora disponível', text:'Identifique uma secadora livre e confira o número ou QR Code antes de selecionar o equipamento no aplicativo.', icon:'dryer'},
        {title:'Limpe o filtro de fiapos', text:'Antes do ciclo, confira a tela ou filtro frontal e remova os fiapos acumulados. Um filtro limpo melhora a circulação do ar quente e a eficiência da secagem.', icon:'filter'},
        {title:'Confira as etiquetas das peças', text:'Nem toda roupa pode ir à secadora. Verifique a etiqueta de cada peça e retire itens que não sejam adequados à secagem em máquina.', icon:'tag'},
        {title:'Coloque as roupas soltas', text:'Distribua as roupas sem compactar e deixe espaço para circulação do ar. Como referência operacional, não ultrapasse cerca de 80% do cesto.', icon:'basket'},
        {title:'Selecione a secadora no aplicativo', text:'Escaneie o QR Code ou confirme a identificação da secadora escolhida. Verifique o número do equipamento antes de prosseguir.', icon:'phone'},
        {title:'Escolha o ciclo, pague e inicie', text:'Selecione o ciclo de secagem adequado, confirme o pagamento no app e inicie. Evite ciclos mais fortes do que o necessário para o tecido.', icon:'card'},
        {title:'Acompanhe o ciclo pelo aplicativo', text:'Você pode acompanhar o andamento e o tempo restante pelo aplicativo enquanto aguarda.', icon:'signal'},
        {title:'Aguarde finalizar e retire as roupas', text:'Espere o ciclo e a etapa final de resfriamento terminarem. Retire as roupas após a liberação da porta.', icon:'check'}
      ]
    }
  },
  manuals: [
    {title:'Primeira vez na SeuLav', text:'Entenda o fluxo completo: escolher máquina, usar o app, pagar, iniciar e acompanhar.', target:'lavar', icon:'spark'},
    {title:'Dosagem automática', text:'A lavadora faz a dosagem dos produtos. Não adicione sabão nem amaciante.', target:'dosagem', icon:'drop'},
    {title:'Pagamento e aplicativo', text:'Veja como identificar a máquina, confirmar o pagamento e acompanhar o ciclo.', target:'pagamento', icon:'phone'},
    {title:'Roupa saiu muito molhada', text:'Entenda o que fazer quando a carga fica desbalanceada ao final da lavagem.', target:'encharcada', icon:'alert'},
    {title:'Secagem mais eficiente', text:'Filtro limpo, carga solta e espaço no tambor ajudam a secar melhor.', target:'secagem', icon:'dryer'},
    {title:'Porta travada', text:'Aguarde a liberação e nunca force a porta durante a proteção de segurança.', target:'porta', icon:'lock'}
  ],
  tips: [
    {tag:'Organização', title:'Separe as roupas antes de começar', text:'Separar por cor e tecido ajuda a preservar as peças e facilita a escolha do ciclo.'},
    {tag:'Lavagem', title:'Não leve sabão nem amaciante', text:'A dosagem dos produtos é automática. É mais simples e evita excesso de produto.'},
    {tag:'Secagem', title:'Filtro limpo faz diferença', text:'Retire os fiapos antes da secagem para melhorar o fluxo de ar e o rendimento do ciclo.'},
    {tag:'Aplicativo', title:'Confira o número da máquina', text:'Antes de pagar, confirme se a lavadora ou secadora selecionada no app é a que você escolheu.'},
    {tag:'Praticidade', title:'Acompanhe o tempo no celular', text:'Depois de iniciar, consulte o aplicativo para acompanhar o andamento e se organizar para voltar.'},
    {tag:'Convivência', title:'Retire as roupas ao finalizar', text:'Isso libera o equipamento para o próximo morador e mantém a lavanderia organizada.'}
  ],
  answers: [
    {id:'lavar', keywords:['lavar','lavagem','começar lavagem','iniciar lavagem','como lavar','primeira lavagem'], title:'Como começar uma lavagem', diagnosis:'Você pode fazer todo o processo em poucos passos pelo aplicativo SeuLav.', steps:['Escolha uma lavadora disponível e coloque as roupas.','No app, identifique a máquina, escolha o ciclo e faça o pagamento.','Inicie e acompanhe o tempo restante pelo aplicativo.'], safety:'Não adicione sabão nem amaciante: a dosagem é automática.', guide:'lavar'},
    {id:'secar', keywords:['secar','secagem','secadora','como secar','usar secadora'], title:'Como usar a secadora', diagnosis:'O ponto principal é usar a secadora correta, manter o filtro limpo e não sobrecarregar.', steps:['Escolha a secadora e limpe o filtro de fiapos.','Coloque as roupas soltas, selecione a secadora no app e faça o pagamento.','Inicie e acompanhe o ciclo pelo aplicativo.'], safety:'Confira as etiquetas: nem toda peça pode ir à secadora.', guide:'secar'},
    {id:'dosagem', keywords:['sabao','sabão','amaciante','detergente','produto','produtos','dosagem','levar sabão','colocar sabão','quanto sabão'], title:'Você não precisa colocar produtos', diagnosis:'A SeuLav utiliza dosagem automática dos produtos de lavagem.', steps:['Coloque as roupas normalmente.','Escolha o ciclo e faça o pagamento pelo app.','Inicie a lavagem sem adicionar sabão nem amaciante.'], safety:'Não coloque produtos próprios na máquina.'},
    {id:'encharcada', keywords:['encharcada','muito molhada','roupa molhada','não centrifugou','nao centrifugou','desbalanceou','desbalanceada'], title:'Roupa saiu muito molhada', diagnosis:'A proteção contra desbalanceamento pode reduzir a centrifugação quando o peso fica concentrado em um lado do tambor.', steps:['Aguarde a porta destravar e abra normalmente.','Redistribua as roupas de forma uniforme no cesto.','No app, selecione apenas a centrifugação quando essa opção estiver disponível.'], safety:'Nunca force a porta travada.'},
    {id:'porta', keywords:['porta travada','porta não abre','porta nao abre','não destrava','nao destrava','travou porta'], title:'A porta não abre', diagnosis:'A porta pode permanecer bloqueada enquanto a máquina conclui uma etapa de segurança.', steps:['Aguarde alguns minutos após o fim do ciclo.','Confira no aplicativo se o ciclo realmente terminou.','Se continuar travada, anote o número da máquina e chame o suporte.'], safety:'Não puxe nem force a porta.'},
    {id:'secagem', keywords:['não seca','nao seca','secagem fraca','demora secar','não aquece','nao aquece','filtro','fiapos'], title:'A secagem não está rendendo como esperado', diagnosis:'Filtro com fiapos ou excesso de roupa pode reduzir bastante a circulação de ar.', steps:['Limpe o filtro frontal de fiapos.','Deixe as roupas soltas e reduza a carga se o tambor estiver muito cheio.','Escolha o ciclo adequado e reinicie pelo app se necessário.'], safety:'Respeite as etiquetas das peças e não ultrapasse a capacidade recomendada.', guide:'secar'},
    {id:'pagamento', keywords:['pagamento','pagar','pix','cartao','cartão','app','aplicativo','qr code','qrcode','cobrança','credito','crédito'], title:'Pagamento e ativação pelo aplicativo', diagnosis:'A ativação e o pagamento são feitos pelo aplicativo SeuLav na máquina escolhida.', steps:['Confira o número ou QR Code do equipamento.','Selecione a lavadora ou secadora correta no aplicativo.','Escolha o ciclo, confirme o pagamento e acompanhe a liberação.'], safety:'Antes de pagar, confirme se o número da máquina no app corresponde ao equipamento que você escolheu.'},
    {id:'acompanhar', keywords:['acompanhar','tempo restante','quanto falta','ciclo no app','ver ciclo','notificação','notificacao'], title:'Acompanhe o ciclo pelo aplicativo', diagnosis:'Depois de iniciar, o aplicativo ajuda você a acompanhar o andamento sem precisar ficar ao lado da máquina.', steps:['Abra o aplicativo SeuLav.','Acesse o ciclo que está em andamento.','Confira o tempo restante e volte próximo ao horário de conclusão.'], safety:'Retire as roupas assim que possível após a finalização.'},
    {id:'maquina', keywords:['escolher maquina','escolher máquina','qual maquina','qual máquina','lavadora ou secadora','numero da maquina','número da máquina'], title:'Como escolher a máquina correta', diagnosis:'Primeiro escolha fisicamente uma máquina disponível e depois confirme a mesma identificação no aplicativo.', steps:['Veja se você precisa lavar ou secar e escolha o equipamento livre correspondente.','Confira o número ou QR Code da máquina.','No aplicativo, confirme exatamente essa identificação antes do pagamento.'], safety:'Evite iniciar ou pagar por uma máquina diferente da que você escolheu.'}
  ]
};