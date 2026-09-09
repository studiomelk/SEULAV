window.SEULAV_HELP = {
  quickQuestions: [
    'Como lavar?',
    'Como secar?',
    'Qual ciclo escolher?',
    'Como iniciar?',
    'Pagamento',
    'Roupas delicadas'
  ],
  categories: [
    { id:'lavar', icon:'shirt', title:'Como lavar e secar', subtitle:'Passo a passo completo' },
    { id:'manuais', icon:'book', title:'Manuais de uso', subtitle:'Guias simples e organizados' },
    { id:'cuidados', icon:'heart', title:'Cuidados com as roupas', subtitle:'O que pode e o que evitar' },
    { id:'dicas', icon:'bulb', title:'Dicas e boas práticas', subtitle:'Melhores resultados' },
    { id:'problemas', icon:'alert', title:'Problemas e soluções', subtitle:'Respostas rápidas' },
    { id:'contato', icon:'chat', title:'Fale com a gente', subtitle:'Não encontrou sua resposta?' }
  ],
  answers: [
    {
      id:'lavar',
      keywords:['lavar','lavagem','como lavar','lavadora','iniciar lavagem','roupa suja'],
      title:'Como lavar suas roupas',
      short:'É simples: separe as roupas, coloque na lavadora, escolha o ciclo, faça o pagamento e inicie.',
      note:'Você não precisa adicionar sabão nem amaciante. A dosagem dos produtos é automática.',
      steps:['Separe as roupas por cor e tipo de tecido','Coloque as roupas sem exceder a capacidade indicada','Escolha o ciclo adequado','Faça o pagamento conforme a unidade','Inicie a lavagem','Retire as roupas ao finalizar']
    },
    {
      id:'secar',
      keywords:['secar','secagem','secadora','como secar','roupa molhada'],
      title:'Como secar suas roupas',
      short:'Após a lavagem, coloque apenas roupas adequadas à secagem, escolha o ciclo, faça o pagamento e inicie.',
      note:'A secagem é um processo separado da lavagem. Sempre confira a etiqueta da peça antes de secar.',
      steps:['Confira as etiquetas das roupas','Coloque as roupas na secadora','Escolha o ciclo de secagem','Faça o pagamento','Inicie e acompanhe o tempo','Retire as roupas ao finalizar']
    },
    {
      id:'dosagem',
      keywords:['sabao','sabão','amaciante','detergente','produto','produtos','dosagem','quanto sabao','levar sabao','colocar sabao'],
      title:'Os produtos são dosados automaticamente',
      short:'Na SeuLav, você não precisa adicionar sabão, detergente ou amaciante manualmente.',
      note:'A máquina faz a dosagem dos produtos automaticamente para você.',
      steps:['Coloque as roupas','Escolha o ciclo','Faça o pagamento','Inicie normalmente']
    },
    {
      id:'ciclo',
      keywords:['ciclo','programa','qual programa','qual ciclo','delicadas','roupas delicadas','brancas','coloridas'],
      title:'Como escolher o ciclo',
      short:'Escolha o ciclo de acordo com o tipo de tecido, quantidade de roupas e nível de cuidado necessário.',
      note:'Se a peça for delicada, confira a etiqueta antes de lavar ou secar. Em caso de dúvida, use um ciclo mais suave.',
      steps:['Confira a etiqueta','Separe peças delicadas','Escolha o ciclo compatível','Evite sobrecarregar o tambor']
    },
    {
      id:'pagamento',
      keywords:['pagamento','pagar','pix','cartao','cartão','app','aplicativo','cobrança','cobranca'],
      title:'Pagamento e início do ciclo',
      short:'Faça o pagamento pelo método disponível na sua unidade e, após a confirmação, inicie o ciclo.',
      note:'Lavagem e secagem são serviços separados e podem exigir ativações distintas.',
      steps:['Escolha o serviço','Confirme a máquina','Realize o pagamento','Aguarde a confirmação','Inicie o ciclo']
    },
    {
      id:'problema',
      keywords:['problema','erro','falha','parou','não funciona','nao funciona','travou','não iniciou','nao iniciou','suporte'],
      title:'Problemas e soluções',
      short:'Se algo não funcionar como esperado, não force o equipamento. Anote a identificação da máquina e fale com a equipe SeuLav.',
      note:'Se a Central de Ajuda não resolver, envie uma mensagem pelo atendimento para que possamos analisar o caso.',
      steps:['Confira se a porta está bem fechada','Verifique se o pagamento foi confirmado','Anote o número da máquina','Descreva o que aconteceu','Envie uma mensagem para a equipe']
    }
  ],
  guides: {
    lavar: {
      title:'Como lavar',
      intro:'Passo a passo para roupas limpas, bem cuidadas e uma experiência simples.',
      steps:[
        ['Separe as roupas','Separe por cor e tipo de tecido. Confira as etiquetas das peças antes de iniciar.'],
        ['Coloque as roupas','Distribua as roupas dentro da lavadora sem exceder a capacidade indicada.'],
        ['Escolha o ciclo','Selecione o programa mais adequado ao tipo de roupa.'],
        ['Faça o pagamento','Conclua o pagamento pelo método disponível na unidade.'],
        ['Inicie a lavagem','Confirme o ciclo e inicie. A dosagem dos produtos é automática.'],
        ['Retire ao finalizar','Retire as roupas assim que o ciclo terminar para liberar a máquina.']
      ]
    },
    secar: {
      title:'Como secar',
      intro:'Use a secadora com segurança e cuide melhor das suas roupas.',
      steps:[
        ['Confira as etiquetas','Nem toda peça pode ir à secadora. Verifique a etiqueta antes de usar.'],
        ['Coloque as roupas','Evite excesso de roupas para permitir boa circulação de ar.'],
        ['Escolha o ciclo','Selecione o programa de secagem compatível com os tecidos.'],
        ['Faça o pagamento','Conclua o pagamento do serviço de secagem.'],
        ['Inicie a secagem','Inicie o ciclo e acompanhe o tempo indicado.'],
        ['Retire as roupas','Retire as roupas ao finalizar para evitar amassados desnecessários.']
      ]
    }
  },
  manuals: [
    ['Passo a passo da lavagem','Guia completo para iniciar e concluir uma lavagem.','lavar'],
    ['Passo a passo da secagem','Veja como utilizar a secadora com segurança.','secar'],
    ['Programas e ciclos','Entenda como escolher o ciclo adequado.','ciclo'],
    ['Dosagem automática','Saiba por que você não precisa colocar produtos.','dosagem'],
    ['Cuidados com os tecidos','Boas práticas para roupas delicadas, brancas e coloridas.','cuidados'],
    ['Problemas comuns','O que conferir antes de solicitar atendimento.','problema']
  ],
  tips: [
    ['Separe por cor e tecido','Separar roupas antes da lavagem ajuda a preservar cores e acabamentos.'],
    ['Não sobrecarregue','Uma carga equilibrada melhora o resultado e ajuda a cuidar das peças.'],
    ['Confira as etiquetas','A etiqueta informa se a peça pode ser lavada ou seca em máquina.'],
    ['Retire ao terminar','Retirar as roupas logo após o ciclo ajuda a reduzir amassados.'],
    ['Produtos automáticos','Não adicione sabão nem amaciante: a dosagem já é automática.'],
    ['Deixe a máquina livre','Ao concluir, retire suas peças para que outro morador possa utilizar.']
  ]
};