window.SEULAV_HELP = {
  quickQuestions: [
    'Como faço para lavar?',
    'Como faço para secar?',
    'Como escolher a máquina?',
    'Como funciona o pagamento?',
    'Como acompanho o ciclo?',
    'A máquina não iniciou'
  ],
  categories: [
    { id:'guia', icon:'washer', title:'Como usar', subtitle:'Guia completo passo a passo' },
    { id:'manuais', icon:'book', title:'Manuais de uso', subtitle:'Lavagem, secagem e ciclos' },
    { id:'cuidados', icon:'heart', title:'Cuidados com as roupas', subtitle:'Boas práticas para suas peças' },
    { id:'dicas', icon:'spark', title:'Dicas e boas práticas', subtitle:'Melhores resultados no dia a dia' },
    { id:'problemas', icon:'alert', title:'Problemas e soluções', subtitle:'Respostas rápidas para imprevistos' },
    { id:'contato', icon:'chat', title:'Fale com a gente', subtitle:'Não encontrou sua resposta?' }
  ],
  answers: [
    {
      id:'lavar',
      keywords:['lavar','lavagem','como lavar','lavadora','usar lavadora','maquina de lavar','máquina de lavar','iniciar lavagem'],
      title:'Como usar a lavadora',
      short:'Escolha uma lavadora disponível, coloque as roupas, confirme a máquina, escolha o ciclo, efetue o pagamento e inicie.',
      note:'Você não precisa adicionar sabão nem amaciante. A dosagem dos produtos é automática.',
      steps:['Separe as roupas e confira as etiquetas','Escolha uma lavadora disponível e confira sua identificação','Coloque as roupas e feche a porta corretamente','Confirme a lavadora e o ciclo disponível','Efetue o pagamento','Inicie a lavagem','Aguarde o ciclo e acompanhe pelo aplicativo','Retire as roupas ao finalizar']
    },
    {
      id:'secar',
      keywords:['secar','secagem','secadora','como secar','usar secadora','maquina de secar','máquina de secar','roupa molhada'],
      title:'Como usar a secadora',
      short:'Confira se as peças podem ser secas, escolha uma secadora disponível, confirme a máquina, efetue o pagamento e inicie o ciclo.',
      note:'Lavagem e secagem são processos separados. Sempre confira a etiqueta da peça antes de usar a secadora.',
      steps:['Confira as etiquetas das roupas','Escolha uma secadora disponível e confira sua identificação','Coloque as roupas e feche a porta corretamente','Confirme a secadora e escolha o ciclo de secagem','Efetue o pagamento','Inicie a secagem','Aguarde o ciclo e acompanhe pelo aplicativo','Retire as roupas ao finalizar']
    },
    {
      id:'maquina',
      keywords:['escolher maquina','escolher máquina','qual maquina','qual máquina','numero da maquina','número da máquina','identificação','identificacao','lavadora disponivel','secadora disponivel'],
      title:'Como escolher a máquina correta',
      short:'Primeiro escolha se você vai lavar ou secar. Depois identifique uma máquina disponível e confirme o número antes do pagamento.',
      note:'Conferir a identificação da máquina antes de pagar evita iniciar o serviço no equipamento errado.',
      steps:['Escolha entre lavar ou secar','Veja quais máquinas estão disponíveis','Confira o número ou identificação do equipamento','Confirme a mesma máquina no aplicativo ou sistema da unidade','Só então avance para o pagamento']
    },
    {
      id:'dosagem',
      keywords:['sabao','sabão','amaciante','detergente','produto','produtos','dosagem','quanto sabao','levar sabao','colocar sabao','precisa sabão','precisa amaciante'],
      title:'Os produtos são dosados automaticamente',
      short:'Na SeuLav, você não precisa adicionar sabão, detergente ou amaciante manualmente.',
      note:'A máquina faz a dosagem dos produtos automaticamente para você.',
      steps:['Coloque as roupas','Escolha a máquina e o ciclo','Efetue o pagamento','Inicie normalmente']
    },
    {
      id:'ciclo',
      keywords:['ciclo','programa','qual programa','qual ciclo','delicadas','roupas delicadas','brancas','coloridas','pesadas'],
      title:'Como escolher o ciclo',
      short:'Escolha o ciclo de acordo com o tipo de tecido e o nível de cuidado indicado para suas roupas.',
      note:'Confira sempre a etiqueta das peças. Se tiver dúvida sobre uma roupa específica, fale com a equipe antes de iniciar.',
      steps:['Confira a etiqueta','Separe peças delicadas quando necessário','Escolha o ciclo compatível','Não sobrecarregue a máquina']
    },
    {
      id:'pagamento',
      keywords:['pagamento','pagar','pix','cartao','cartão','app','aplicativo','cobrança','cobranca','credito','crédito','como pagar'],
      title:'Pagamento e liberação do ciclo',
      short:'Depois de escolher e confirmar a máquina correta, efetue o pagamento pelo método disponível na sua unidade.',
      note:'Lavagem e secagem são serviços separados. Confirme sempre a máquina selecionada antes de concluir o pagamento.',
      steps:['Escolha entre lavar ou secar','Confirme a identificação da máquina','Escolha o ciclo quando solicitado','Efetue o pagamento','Aguarde a confirmação','Inicie o ciclo']
    },
    {
      id:'acompanhar',
      keywords:['acompanhar','acompanho','app','aplicativo','tempo','quanto falta','terminou','fim do ciclo','ciclo terminou','aguardar','esperar'],
      title:'Acompanhe o ciclo pelo aplicativo',
      short:'Depois de iniciar, aguarde o ciclo. Quando disponível na sua unidade, você pode acompanhar o andamento pelo aplicativo.',
      note:'Volte à lavanderia ao final do ciclo e retire suas roupas para liberar a máquina para o próximo morador.',
      steps:['Inicie o ciclo','Confira o andamento pelo aplicativo','Aguarde a conclusão','Retire as roupas ao finalizar','Deixe a máquina livre para o próximo uso']
    },
    {
      id:'problema',
      keywords:['problema','erro','falha','parou','não funciona','nao funciona','travou','não iniciou','nao iniciou','suporte','pagou e nao iniciou','pagou e não iniciou'],
      title:'Problemas e soluções',
      short:'Se algo não funcionar como esperado, não force o equipamento. Confira a porta e a confirmação do pagamento e anote a identificação da máquina.',
      note:'Se a Central de Ajuda não resolver, envie uma mensagem para a equipe SeuLav com o número da máquina e uma descrição do que aconteceu.',
      steps:['Confira se a porta está bem fechada','Verifique se o pagamento foi confirmado','Confira a identificação da máquina','Anote ou fotografe a mensagem exibida','Envie uma mensagem para a equipe']
    },
    {
      id:'roupas',
      keywords:['roupas','etiqueta','tecido','mancha','roupa branca','roupas brancas','delicada','delicadas','separar roupa','separar roupas'],
      title:'Cuidados antes de iniciar',
      short:'Separe as roupas por cor e tipo de tecido e confira as etiquetas antes de escolher lavagem ou secagem.',
      note:'A etiqueta da peça é a melhor referência para saber se ela pode ser lavada ou seca em máquina.',
      steps:['Separe claras, escuras e coloridas quando necessário','Confira bolsos e objetos soltos','Leia as etiquetas das peças','Evite sobrecarregar o equipamento']
    }
  ],
  guides: {
    lavar: {
      title:'Como lavar',
      intro:'Da escolha da lavadora ao fim do ciclo, veja a sequência completa para usar a SeuLav com tranquilidade.',
      image:'../fundo-roupas-limpas.webp',
      steps:[
        {title:'Prepare suas roupas', text:'Separe por cor e tipo de tecido, confira os bolsos e leia as etiquetas das peças.', icon:'clothes'},
        {title:'Escolha uma lavadora', text:'Veja qual lavadora está disponível e confira o número ou identificação do equipamento antes de continuar.', icon:'washer'},
        {title:'Coloque as roupas', text:'Distribua as roupas sem exceder a capacidade indicada e feche a porta corretamente.', icon:'basket'},
        {title:'Confirme a máquina e o ciclo', text:'No aplicativo ou sistema disponível na unidade, confirme a lavadora escolhida e selecione o ciclo adequado quando solicitado.', icon:'cycle'},
        {title:'Efetue o pagamento', text:'Revise a máquina selecionada e conclua o pagamento pelo método disponível na sua unidade.', icon:'card'},
        {title:'Inicie a lavagem', text:'Após a confirmação, inicie o ciclo. Você não precisa colocar sabão nem amaciante: a dosagem é automática.', icon:'play'},
        {title:'Acompanhe o ciclo', text:'Aguarde a lavagem. Quando disponível na sua unidade, acompanhe o andamento pelo aplicativo.', icon:'phone'},
        {title:'Retire suas roupas', text:'Ao final, retire as peças e deixe a máquina livre para o próximo morador.', icon:'check'}
      ]
    },
    secar: {
      title:'Como secar',
      intro:'Confira as peças, escolha a secadora e acompanhe o ciclo até suas roupas estarem prontas.',
      image:'../fundo-roupas-limpas.webp',
      steps:[
        {title:'Confira as etiquetas', text:'Antes de secar, confirme se cada peça pode ir à secadora e se exige algum cuidado especial.', icon:'tag'},
        {title:'Escolha uma secadora', text:'Veja qual secadora está disponível e confira o número ou identificação do equipamento.', icon:'dryer'},
        {title:'Coloque as roupas', text:'Coloque somente as peças adequadas, sem excesso, e feche a porta corretamente.', icon:'basket'},
        {title:'Confirme a máquina e o ciclo', text:'No aplicativo ou sistema disponível na unidade, confirme a secadora e escolha o ciclo de secagem quando solicitado.', icon:'cycle'},
        {title:'Efetue o pagamento', text:'Revise a secadora selecionada e conclua o pagamento.', icon:'card'},
        {title:'Inicie a secagem', text:'Após a confirmação, inicie o ciclo de secagem.', icon:'play'},
        {title:'Acompanhe o ciclo', text:'Aguarde a secagem e, quando disponível, acompanhe o andamento pelo aplicativo.', icon:'phone'},
        {title:'Retire suas roupas', text:'Retire as peças ao finalizar para liberar a secadora e reduzir amassados desnecessários.', icon:'check'}
      ]
    }
  },
  manuals: [
    {title:'Guia completo de lavagem', subtitle:'Da escolha da lavadora ao fim do ciclo.', target:'lavar', icon:'washer'},
    {title:'Guia completo de secagem', subtitle:'Da escolha da secadora à retirada das roupas.', target:'secar', icon:'dryer'},
    {title:'Escolha da máquina', subtitle:'Como conferir a identificação antes de pagar.', target:'maquina', icon:'number'},
    {title:'Programas e ciclos', subtitle:'Entenda como escolher o ciclo adequado.', target:'ciclo', icon:'cycle'},
    {title:'Pagamento', subtitle:'Confirme a máquina e conclua o pagamento.', target:'pagamento', icon:'card'},
    {title:'Acompanhar pelo aplicativo', subtitle:'Veja como acompanhar o andamento do ciclo.', target:'acompanhar', icon:'phone'},
    {title:'Dosagem automática', subtitle:'Você não precisa adicionar produtos.', target:'dosagem', icon:'drop'},
    {title:'Problemas comuns', subtitle:'O que conferir antes de solicitar atendimento.', target:'problema', icon:'alert'}
  ],
  tips: [
    {title:'Roupas brancas bem cuidadas', text:'Separe peças claras quando necessário e siga as orientações da etiqueta.', image:'../fundo-roupas-limpas.webp', tag:'Roupas brancas'},
    {title:'Cuidados com roupas delicadas', text:'Leia a etiqueta e escolha o ciclo mais adequado ao tecido.', image:'../fundo-roupas-limpas.webp', tag:'Roupas delicadas'},
    {title:'Evite sobrecarregar', text:'Deixe espaço para as roupas se movimentarem e ter um ciclo mais eficiente.', image:'../fundo-roupas-limpas.webp', tag:'Boa prática'},
    {title:'Acompanhe pelo aplicativo', text:'Depois de iniciar, acompanhe o andamento do ciclo pelo aplicativo quando disponível.', image:'../fundo-roupas-limpas.webp', tag:'Praticidade'},
    {title:'Retire ao terminar', text:'Retire suas peças ao final do ciclo e libere a máquina para o próximo morador.', image:'../fundo-roupas-limpas.webp', tag:'Convivência'},
    {title:'Produtos automáticos', text:'Não adicione sabão nem amaciante: a dosagem dos produtos é automática.', image:'../fundo-roupas-limpas.webp', tag:'SeuLav'}
  ]
};