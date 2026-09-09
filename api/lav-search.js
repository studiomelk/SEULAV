const KNOWLEDGE = [
  {keys:['sabao','sabão','amaciante','detergente','produto','dosagem'], answer:'Diagnóstico: a SeuLav utiliza dosagem automática.\n\n1. Coloque as roupas normalmente.\n2. Escolha o ciclo e faça o pagamento no app.\n3. Inicie sem adicionar sabão nem amaciante.\n\nImportante: não coloque produtos próprios na máquina.'},
  {keys:['encharcada','muito molhada','não centrifugou','nao centrifugou','desbalanceada','desbalanceamento'], answer:'Causa provável: a proteção contra desbalanceamento pode ter reduzido a centrifugação.\n\n1. Aguarde a porta destravar.\n2. Redistribua as roupas de forma uniforme no cesto.\n3. Se disponível, selecione a centrifugação pelo app.\n\nSegurança: nunca force a porta travada.'},
  {keys:['porta travada','porta não abre','porta nao abre','não destrava','nao destrava'], answer:'Causa provável: a máquina ainda está concluindo uma etapa de segurança.\n\n1. Aguarde alguns minutos após o fim do ciclo.\n2. Confira no app se o ciclo realmente terminou.\n3. Se continuar travada, anote o número da máquina e chame o suporte.\n\nSegurança: não force a porta.'},
  {keys:['não seca','nao seca','secagem fraca','filtro','fiapos','não aquece','nao aquece'], answer:'Causa provável: filtro com fiapos ou excesso de roupa pode reduzir a circulação de ar.\n\n1. Limpe o filtro frontal de fiapos.\n2. Deixe as roupas soltas e reduza a carga se estiver muito cheia.\n3. Escolha o ciclo adequado e reinicie se necessário.\n\nConfira sempre as etiquetas das peças.'},
  {keys:['pagamento','pagar','pix','cartão','cartao','aplicativo','app','qr code','qrcode'], answer:'O pagamento e a ativação são feitos pelo aplicativo SeuLav.\n\n1. Escolha fisicamente a lavadora ou secadora.\n2. Confira o número ou QR Code da máquina no app.\n3. Escolha o ciclo, confirme o pagamento e acompanhe a liberação.\n\nAntes de pagar, confirme se a máquina selecionada é a correta.'},
  {keys:['acompanhar','tempo restante','quanto falta','ciclo no app'], answer:'Depois de iniciar, você pode acompanhar o ciclo pelo aplicativo SeuLav.\n\n1. Abra o app.\n2. Acesse o ciclo em andamento.\n3. Confira o tempo restante e volte próximo ao fim.\n\nRetire as roupas assim que possível após a finalização.'}
];
function normalize(t=''){return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function fallback(query){const q=normalize(query);for(const item of KNOWLEDGE){if(item.keys.some(k=>q.includes(normalize(k)))) return item.answer}return null}
module.exports = async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Método não permitido'});
  const {query,condominio,maquina}=req.body||{};
  if(!query||!String(query).trim()) return res.status(400).json({error:'A dúvida é obrigatória.'});
  const local=fallback(String(query));
  const key=process.env.OPENROUTER_API_KEY;
  if(!key){
    if(local) return res.status(200).json({success:true,answer:local,source:'local'});
    return res.status(404).json({success:false,fallbackToWhatsapp:true});
  }
  const system=`Você é o Lav, assistente virtual inteligente e acolhedor da SeuLav (a lavanderia do seu condomínio). Oriente moradores de forma concisa e segura.
REGRAS INVIOLÁVEIS:
1. O morador JAMAIS deve adicionar sabão ou amaciante; a dosagem é automática.
2. Se a roupa sair encharcada, explique desbalanceamento: aguardar destravar, redistribuir as roupas e usar centrifugação no app quando disponível. Nunca forçar a porta.
3. Para secagem eficiente, o filtro frontal de fiapos deve estar limpo e o tambor não deve passar de cerca de 80% da capacidade.
4. Ativação e pagamento acontecem pelo App SeuLav usando a identificação/QR Code da máquina.
5. Depois de iniciar, o usuário pode acompanhar o ciclo pelo aplicativo.
FORMATO: diagnóstico provável em 1 linha; 2 ou 3 passos numerados; alerta de segurança se aplicável; se não souber com segurança, diga que prefere encaminhar ao suporte humano. Não invente informações.`;
  try{
    const r=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'HTTP-Referer':'https://seulav.com.br','X-Title':'SeuLav Central de Ajuda','Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENROUTER_MODEL||'google/gemini-2.5-flash',messages:[{role:'system',content:system},{role:'user',content:`Condomínio: ${condominio||'Geral'}; Máquina: ${maquina||'Não informada'}; Dúvida: ${query}`}],temperature:.2,max_tokens:320})});
    if(!r.ok){if(local)return res.status(200).json({success:true,answer:local,source:'local'});return res.status(502).json({success:false,fallbackToWhatsapp:true})}
    const data=await r.json();
    const answer=data?.choices?.[0]?.message?.content;
    if(answer)return res.status(200).json({success:true,answer,source:'ai'});
    if(local)return res.status(200).json({success:true,answer:local,source:'local'});
    return res.status(404).json({success:false,fallbackToWhatsapp:true});
  }catch(e){if(local)return res.status(200).json({success:true,answer:local,source:'local'});return res.status(500).json({success:false,fallbackToWhatsapp:true})}
}