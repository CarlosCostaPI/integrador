const quizData = [
	{
		question: `  I – Creio que possa colaborar para um trabalho em equipe da seguinte forma: `,

		a_1: 'A geração de idéias é um dos meus pontos fortes.',
		a_2: 'Enxergo facilmente novas oportunidades bem como as aproveito.',
		a_3: 'Sou bom em identificar o valor da contribuição de cada pessoa para o alcance do objetivo.',
		a_4: 'Sou bastante rígido e rigoroso quando preciso fazer com que as coisas aconteçam.',
		a_5: 'Consigo oferecer opções racionais e não tendenciosas para resolução de problemas.',
		a_6: 'Gosto de trabalhar com um grande número de pessoas.',
		a_7: 'Tenho a capacidade de ver se uma idéia ou plano se aplica a um determinado problema.',
		a_8: 'As pessoas sabem que as tarefas que assumo serão concluídas.',
		a_9: 'Considero minha experiência e conhecimento técnico meus pontos mais fortes.',
		a_10: 'Meus comentários tanto gerais quantos específicos são bem recebidos pela equipe.'
	},
	{
		question: ' II – Se tenho alguma falha no trabalho em equipe, isso quer dizer que eu:',
		a_1: 'Fico tão envolvido com as idéias que estou tendo que perco a noção do que está acontecendo.',
		a_2: 'Tenho uma tendência a falar bastante quando surge um novo assunto nas reuniões da equipe.',
		a_3: 'Geralmente sou generoso demais com aqueles que externam um ponto de vista válido, porém não muito claro.',
		a_4: 'Às vezes sou visto como autoritário quando lido com assuntos importantes.',
		a_5: 'Minha ânsia em busca de resultados atrapalha o meu relacionamento com colegas.',
		a_6: 'Sinto dificuldades em liderar um projeto talvez porque me sinta super-responsável por um ambiente harmonioso na equipe.',
		a_7: 'Não fico muito à vontade a não ser que as reuniões sejam bem estruturadas e bem conduzidas.',
		a_8: 'Reluto em expressar minha opinião para propostas ou planos que estejam incompletos ou insuficientemente detalhados.',
		a_9: 'Reluto em contribuir, a menos que eu conheça muito bem o assunto em discussão.',
		a_10: 'Tendo a subestimar a importância de minhas próprias contribuições.'
	},
	{
		question: 'III – Quando estou envolvido em um projeto com outras pessoas:',
		a_1: 'Eu normalmente contribuo com idéias originais.',
		a_2: 'Eu sou ágil em enxergar a possibilidade de novas idéias e novos empreendimentos.',
		a_3: 'Eu consigo influenciar as pessoas sem fazer pressão sobre elas.',
		a_4: 'Eu gosto de chamar a atenção dos membros da equipe para que o grupo não perca tempo ou perca de vista o objetivo principal.',
		a_5: 'Eu creio que minha capacidade de julgamento ajuda a escolher as decisões corretas.',
		a_6: 'Eu estou sempre disposto a sugerir algo visando ao interesse comum.',
		a_7: 'As pessoas podem confiar na minha capacidade de organizar o trabalho.',
		a_8: 'Eu geralmente sou eficiente em prevenir erros e omissões que impactariam no sucesso da operação.',
		a_9: 'Eu tento manter meu senso de profissionalismo.',
		a_10: 'As pessoas podem estar certas de que serei o mais natural possível.'
	},
	{
		question: 'IV – Minha forma de abordagem em relação ao grupo é a seguinte:',
		a_1: 'Eu prefiro evitar o óbvio e buscar idéias ainda não exploradas.',
		a_2: 'Eu sou aquele que geralmente faz contatos com pessoas fora do grupo.',
		a_3: 'Eu não hesito em mudar de idéia se o grupo optar por uma decisão diferente da que defendo.',
		a_4: 'Eu não reluto em questionar as opiniões dos outros nem de defender as minhas idéias.',
		a_5: 'Eu geralmente consigo achar um argumento para refutar proposições sem fundamento.',
		a_6: 'Eu tenho interesse em conhecer melhor meus colegas.',
		a_7: 'Eu creio que tenho talento para implementar algo desde que haja um plano a ser colocado em prática.',
		a_8: 'Eu trago um toque de perfeccionismo para qualquer trabalho que eu desempenhe.',
		a_9: 'Eu contribuo quando sei do que estou falando.',
		a_10: 'Eu gosto do lado social das relações de trabalho.'
	},
	{
		question: 'V – Eu tenho satisfação em um trabalho, pois:',
		a_1: 'Eu consigo achar oportunidades de expandir minha imaginação.',
		a_2: 'Eu tenho oportunidades de conhecer novas pessoas com idéias distintas.',
		a_3: 'Eu faço com que as pessoas concordem com as prioridades e objetivos.',
		a_4: 'Eu tenho uma forte influência nas decisões da equipe.',
		a_5: 'Eu gosto de analisar situações e decidir diante das opções possíveis.',
		a_6: 'Eu me sinto bem quando estou criando bons relacionamentos.',
		a_7: 'Eu me interesso em achar soluções práticas para os problemas.',
		a_8: 'Eu me realizo quando posso dedicar minha total atenção à tarefa.',
		a_9: 'Eu sinto que estou usando minhas qualificações e habilidades como vantagem.',
		a_10: 'Eu normalmente acho um trabalho que me dê a chance de me expressar.'
	},
	{
		question: 'VI – Se me passarem uma tarefa difícil, repentinamente, com tempo limitado e pessoas desconhecidas:',
		a_1: 'Eu gosto de elaborar a solução sozinho para depois vender a idéia ao grupo.',
		a_2: 'Eu motivaria o debate com o objetivo de estimular novas idéias e para dar continuidade ao trabalho.',
		a_3: 'Eu acharia uma forma de reduzir o tamanho da tarefa, estabelecendo como cada pessoa poderia melhor contribuir para sua execução.',
		a_4: 'Eu tomaria à frente dos trabalhos, caso o grupo não estivesse apresentando progressos.',
		a_5: 'Eu creio que permaneceria tranqüilo e manteria minha capacidade de pensar objetivamente.',
		a_6: 'Eu estaria pronto para trabalhar com pessoas que mostrassem atitudes mais positivas.',
		a_7: 'Apesar de gerar conflitos, eu faria pressão para realizar o que fosse necessário.',
		a_8: 'Meu senso natural de urgência ajudaria a garantir que não haveria atrasos.',
		a_9: 'Eu gosto de ler o máximo possível sobre o assunto da tarefa.',
		a_10: 'Eu normalmente obtenho sucesso apesar das circunstâncias.'
		
	},
	{
		question: 'VII – No tocante aos problemas vivenciados quando trabalho em grupo:',
		a_1: 'Às vezes tenho dificuldade em expor assuntos complexos.',
		a_2: 'Eu tendo a demonstrar tédio se eu não estiver ativamente engajado em um grupo bem motivado.',
		a_3: 'Eu tenho consciência de que eu delego aos outros as coisas que eu não posso realizar.',
		a_4: 'Estou pronto a reagir quando as pessoas impedem o progresso do trabalho',
		a_5: 'Algumas pessoas me criticam por ser muito racional.',
		a_6: 'Eu hesito em expressar minha opinião na frente de pessoas difíceis e poderosas.',
		a_7: 'Eu acho difícil começar uma atividade se os objetivos não forem claros.',
		a_8: 'Meu desejo de atentar para os detalhes importantes do trabalho nem sempre é bem vindo pelo grupo.',
		a_9: 'Eu sinto que às vezes que eu estou desperdiçando meu tempo com o grupo e poderia executar melhor o trabalho sozinho.',
		a_10: 'Eu acho que os outros não me dão oportunidade suficiente para dizer tudo que quero dizer.'
	}
];
let j0 = 0,
	j1 = 0,
	j2 = 0,
	j3 = 0,
	j4 = 0,
	j5 = 0,
	j6 = 0,
	j7 = 0,
	j8 = 0,
	j9 = 0;

var table;
const emailUser = localStorage.getItem('email');
const userFirstNameLocal = localStorage.getItem('userFirstName');
const userLastNameLocal = localStorage.getItem('userLastName');
let totalGrades = [ ...Array(quizData.length) ];
let currentCunt = 0;
const container = document.querySelector('.container');
const question = document.getElementById('question');
const a1text = document.getElementById('1_text');
const a2text = document.getElementById('2_text');
const a3text = document.getElementById('3_text');
const a4text = document.getElementById('4_text');
const a5text = document.getElementById('5_text');
const a6text = document.getElementById('6_text');
const a7text = document.getElementById('7_text');
const a8text = document.getElementById('8_text');
const a9text = document.getElementById('9_text');
const a10text = document.getElementById('10_text');
const sumOfInputs = document.getElementById('sumOfInputs');
const btn = document.getElementById('btn');
const headerforinputs = document.querySelectorAll('.headerforinput');
const inputs = document.querySelectorAll('.inputRange');

inputs.forEach((x, i) => {
	x.addEventListener('input', () => {
		headerforinputs[i].innerText = x.value;
		makeSum();
	});
});
function makeSum(){
	let cunt = 0;
	inputs.forEach((x, i) => {
		cunt += Number(x.value);
	});
	sumOfInputs.innerText = cunt;
	if (cunt != 10) {
		btn.disabled = true;
	} else {
		btn.disabled = false;
	}
}

loadQuiz();

function loadQuiz(){
	const currentData = quizData[currentCunt];
	question.innerText = currentData.question;
	a1text.innerText = currentData.a_1;
	a2text.innerText = currentData.a_2;
	a3text.innerText = currentData.a_3;
	a4text.innerText = currentData.a_4;
	a5text.innerText = currentData.a_5;
	a6text.innerText = currentData.a_6;
	a7text.innerText = currentData.a_7;
	a8text.innerText = currentData.a_8;
	a9text.innerText = currentData.a_9;
	a10text.innerText = currentData.a_10;
}

btn.addEventListener('click', () => {
	if (currentCunt < quizData.length) {
		totalGrades[currentCunt] = new Object();
		inputs.forEach((x, i) => {
			totalGrades[currentCunt][`a${i}`] = x.value;
		});
		currentCunt++;

		if (currentCunt < quizData.length) {
			loadQuiz();
		}

		inputs.forEach((x, i) => {
			x.value = 0;
			headerforinputs[i].innerText = x.value;
		});

		makeSum();
	}
	if (currentCunt === quizData.length) {
		//Mostra resultados

		totalGrades.forEach((x, i) => {
			j0 += Number(x.a0);
			j1 += Number(x.a1);
			j2 += Number(x.a2);
			j3 += Number(x.a3);
			j4 += Number(x.a4);
			j5 += Number(x.a5);
			j6 += Number(x.a6);
			j7 += Number(x.a7);
			j8 += Number(x.a8);
			j9 += Number(x.a9);
		});
		table = document.createElement('table');

		var rowHead1 = document.createTextNode('PL');
		var rowHead2 = document.createTextNode('RI');
		var rowHead3 = document.createTextNode('CO');
		var rowHead4 = document.createTextNode('SH');
		var rowHead5 = document.createTextNode('ME');
		var rowHead6 = document.createTextNode('TW');
		var rowHead7 = document.createTextNode('IM');
		var rowHead8 = document.createTextNode('CF');
		var rowHead9 = document.createTextNode('SP');
		var rowHead10 = document.createTextNode('DR');
		var trrowH = document.createElement('tr');
		var tdrowH1 = document.createElement('td');
		var tdrowH2 = document.createElement('td');
		var tdrowH3 = document.createElement('td');
		var tdrowH4 = document.createElement('td');
		var tdrowH5 = document.createElement('td');
		var tdrowH6 = document.createElement('td');
		var tdrowH7 = document.createElement('td');
		var tdrowH8 = document.createElement('td');
		var tdrowH9 = document.createElement('td');
		var tdrowH10 = document.createElement('td');
		tdrowH1.appendChild(rowHead1);
		tdrowH2.appendChild(rowHead2);
		tdrowH3.appendChild(rowHead3);
		tdrowH4.appendChild(rowHead4);
		tdrowH5.appendChild(rowHead5);
		tdrowH6.appendChild(rowHead6);
		tdrowH7.appendChild(rowHead7);
		tdrowH8.appendChild(rowHead8);
		tdrowH9.appendChild(rowHead9);
		tdrowH10.appendChild(rowHead10);

		var thRH = document.createElement('th');

		var thRHH = document.createTextNode(`Tabela de respostas`);

		thRH.appendChild(thRHH);
		trrowH.appendChild(thRH);
		trrowH.appendChild(tdrowH1);
		trrowH.appendChild(tdrowH2);
		trrowH.appendChild(tdrowH3);
		trrowH.appendChild(tdrowH4);
		trrowH.appendChild(tdrowH5);
		trrowH.appendChild(tdrowH6);
		trrowH.appendChild(tdrowH7);
		trrowH.appendChild(tdrowH8);
		trrowH.appendChild(tdrowH9);
		trrowH.appendChild(tdrowH10);

		table.appendChild(trrowH);

		totalGrades.forEach((x, i, a) => {
			var th1 = document.createElement('th');
			let bakhshha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', ];
			var header1 = document.createTextNode(`${bakhshha[i]}`);

			th1.appendChild(header1);

			var tr = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
			var td6 = document.createElement('td');
			var td7 = document.createElement('td');
			var td8 = document.createElement('td');
			var td9 = document.createElement('td');
			var td10 = document.createElement('td');

			var text1 = document.createTextNode(x.a0);
			var text2 = document.createTextNode(x.a1);
			var text3 = document.createTextNode(x.a2);
			var text4 = document.createTextNode(x.a3);
			var text5 = document.createTextNode(x.a4);
			var text6 = document.createTextNode(x.a5);
			var text7 = document.createTextNode(x.a6);
			var text8 = document.createTextNode(x.a7);
			var text9 = document.createTextNode(x.a8);
			var text10 = document.createTextNode(x.a9);

			td1.appendChild(text1);
			td2.appendChild(text2);
			td3.appendChild(text3);
			td4.appendChild(text4);
			td5.appendChild(text5);
			td6.appendChild(text6);
			td7.appendChild(text7);
			td8.appendChild(text8);
			td9.appendChild(text9);
			td10.appendChild(text10);

			tr.appendChild(th1);

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			tr.appendChild(td8);
			tr.appendChild(td9);
			tr.appendChild(td10);
			table.appendChild(tr);
		});
		var text1 = document.createTextNode(j0);
		var text2 = document.createTextNode(j1);
		var text3 = document.createTextNode(j2);
		var text4 = document.createTextNode(j3);
		var text5 = document.createTextNode(j4);
		var text6 = document.createTextNode(j5);
		var text7 = document.createTextNode(j6);
		var text8 = document.createTextNode(j7);
		var text9 = document.createTextNode(j8);
		var text10 = document.createTextNode(j9);
		var trj = document.createElement('tr');
		var tdj1 = document.createElement('td');
		var tdj2 = document.createElement('td');
		var tdj3 = document.createElement('td');
		var tdj4 = document.createElement('td');
		var tdj5 = document.createElement('td');
		var tdj6 = document.createElement('td');
		var tdj7 = document.createElement('td');
		var tdj8 = document.createElement('td');
		var tdj9 = document.createElement('td');
		var tdj10 = document.createElement('td');
		tdj1.appendChild(text1);
		tdj2.appendChild(text2);
		tdj3.appendChild(text3);
		tdj4.appendChild(text4);
		tdj5.appendChild(text5);
		tdj6.appendChild(text6);
		tdj7.appendChild(text7);
		tdj8.appendChild(text8);
		tdj9.appendChild(text9);
		tdj10.appendChild(text10);

		var thj = document.createElement('th');

		var thjj = document.createTextNode(`Total`);

		thj.appendChild(thjj);
		trj.appendChild(thj);
		trj.appendChild(tdj1);
		trj.appendChild(tdj2);
		trj.appendChild(tdj3);
		trj.appendChild(tdj4);
		trj.appendChild(tdj5);
		trj.appendChild(tdj6);
		trj.appendChild(tdj7);
		trj.appendChild(tdj8);
		trj.appendChild(tdj9);
		trj.appendChild(tdj10);
		

		table.appendChild(trj);
		console.log(table);

		container.style.height = '100%';
		container.style.width = '1200px';
				var i=0;
		var j = [];
		j.push(j0);
		j.push(j1);
		j.push(j2);
		j.push(j3);
		j.push(j4);
		j.push(j5);
		j.push(j6);
		j.push(j7);
		j.push(j8);
		j.push(j9);
		var lista = [];
		lista.push(0);
		var maior = 1;
		
		while(i<10){
			console.log(j[i]);
			if(j[i]>=maior){
				if(j[i]>maior){
					lista[0] = i;
					console.log(j[i]>maior);
					maior=j[i];
				}else{
					lista.push(i);
				}
			}
			i++;
		}
		console.log(lista);
		container.innerHTML = ` <h2> </h2> `;
		for(i=0; i<lista.length;i++){
			posicao = lista[i];
			console.log(posicao);
			if(posicao == 0){
				container.innerHTML += `  <div style="margin-bottom:0px;">
                <h4 style="text-align: center;"> PLANTS – PL (Pensador) <img src="imagem1.png" alt="image1"></h4>
                <p style="text-align: justify;font-size:15px; margin-bottom:0px;">
                    <b>Características:</b> Plants são inovadores e inventores e podem ser altamente criativos.
					Ele é a fonte da originalidade, o elemento criativo que é essencial para o sucesso.
					Com tendência a ser introvertido, o pensador é sério e idealista.
					Independente e visionário com uma boa imaginação, prefere trabalhar sozinho e com grande
					concentração. </p>
                <p style="text-align: justify;font-size:15px; margin-bottom:0px;">
                    <b>Função:</b> O papel principal de um PL é gerar novas propostas e 
					resolver problemas complexos. PLs são geralmente necessários no estágio inicial de um
					projeto ou quando um projeto não está progredindo. PLs geralmente imprimem sua marca 
					como fundadores de empresas ou como geradores de novos produtos. Muitos PLs em um grupo,
					contudo, podem ser contraproducentes, já que eles tendem a gastar seu tempo reforçando suas
					próprias idéias e em combate uns com os outros. </p>
        </div> `;
			}else if(posicao==1){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> RESOURCE INVESTIGATOR – RI (Investigador de Recursos) <img src="imagem2.png" alt="image2"></h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Fonte criativa, porém com caráter bastante diferente do anterior.
					O investigador de recursos é uma pessoa extrovertida, articuladora e cheia de recursos
					com uma forte atração por desafios. Esta é a pessoa que ultrapassa as fronteiras da
					equipe em busca de recursos – cheia de energia. Amigável e comunicativo, ele está por
					dentro de diferentes assuntos e conhece pessoas dentro e fora da organização.  Ele adora 
					negociar e argumentar. <br><br>Por outro lado, os Ris podem ficar desestimulados assim que as
					novidades acabarem. Querem sempre estar fazendo algo novo diferente do último trabalho completado.
					Eles muitas vezes são difíceis de serem encontrados, porque estão sempre ocupados em busca de
					encontrar e aproveitar uma boa oportunidade. </p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> RIs são bons em explorar e desenvolver idéias e buscar recursos fora do grupo. Eles
					são os melhores membros do grupo para estabelecer contatos externos e executar possíveis
					negociações. </p>
        </div> `;
			}else if(posicao==2){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> CO-ORDINATORS – CO (Coordenador) <img src="imagem3.png" alt="image3"> </h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> A característica que distingue o coordenador dos outros papéis é sua habilidade
					em motivar os outros a trabalharem em busca de um objetivo comum. Controlador da equipe, ele tem
					tendência à introversão, porém com capacidade de direcionar os outros a um propósito comum. É uma
					pessoa preocupada com o lado pessoal do grupo e com o engajamento de todos na tarefa a ser
					desempenhada, além de garantir que todos sejam igualmente considerados importantes. São confiáveis
					e compreensivos, dirigidos por valores que são colocados de forma gentil. Eles reconhecem os talentos
					pessoais e tentam mostrá-los a equipe. Além disso, possuem grande habilidade em resolver conflitos.<br>
					Por outro lado, a equipe pode depositar demasiada confiança sobre ele e sobrecarregá- lo. O
					Coordenador pode passar o tempo todo tentando satisfazer as pessoas o que é algo um tanto complicado.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> Coordenadores são bem aproveitados quando tem como tarefa liderar uma equipe com distintas habilidades
					e características pessoais. Eles desempenham melhor este papel quando lidam com colegas de mesmo nível
					hierárquico do que com subordinados. Seu lema é “consulta com controle” e eles normalmente acreditam
					em resolver os problemas calmamente. Em algumas equipes eles tendem a bater de frente com os Shapers
					(Articuladores) devido aos distintos estilos de gestão.</p>
        </div> `;
			}else if(posicao==3){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> SHAPERS – SH (Articulador) <img src="imagem4.png" alt="image4"></h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Se o coordenador é o controlador da equipe, o Shaper é o ditador. Ele é
					orientado à tarefa e preparado para mover montanhas para atingir seus objetivos. Além de ser 
					extrovertido, desafiador, direto e franco. O grande benefício deste membro da equipe é motivar
					pessoas em torno de um objetivo comum. Pode ser também persuasivo e preparado para negociar e 
					assumir compromissos a fim de garantir o andamento das atividades.<br><br> Por outro lado, pode ofender 
					as pessoas. De forma rápida, pode esquecer de dar as devidas explicações, pode se tornar impaciente
					e ditador. Se não for bastante ágil, a falta de planejamento pode resultar em problemas. O que quer
					que aconteça, trabalhar com o Shaper é divertido.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> SHs geralmente são bons gerentes porque eles produzem ações e eles têm sucesso
					mesmo sob pressão. Eles são excelentes em injetar vida nas equipes e são muito úteis onde
					complicações políticas tendem a reduzir o progresso dos trabalhos; SHs tendem a levantar os
					problemas e tomar a dianteira dos trabalhos. Este papel cai bem àqueles que precisam fazer mudanças
					necessárias e não se importam em tomar decisões impopulares. Como o nome indica, eles tentam impor
					um padrão às atividades e discussões do grupo.</p>
        </div> `;
			}else if(posicao==4){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> MONITOR EVALUATOR – ME (Analista) <img src="imagem5.png" alt="image5"></h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Personalidade reservada com ar de calma e estabilidade. É o pensador quieto
					e analítico. Não são produtores de grandes idéias, mas gostam de ter tempo para analisar questões
					a fundo. Estas são as pessoas que vão manter os pés da equipe no chão. Vão identificar problemas
					potenciais, mas não necessariamente suas soluções. Este é o membro da equipe com uma vasta memória
					de todos os aspectos do projeto. Um bom ME está raramente errado.<br><br> Por outro lado, pode não ter um
					enfoque claro e retardar o andamento da equipe a fim de evitar certos riscos. Não gostam de riscos.
					Podem levar muito tempo em suas considerações e perder de vista os objetivos finais.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> MEs são melhor indicados para analisar problemas e avaliar idéias e sugestões.
					Eles são muito bons para equilibrar os custos e benefícios das opções. Para muitos que estão 
					fora da equipe, o ME pode aparentar ser áspero, enfadonho, ou mesmo muito crítico. Muitos MEs
					ocupam postos estratégicos e prosperam exercendo tarefas de alto nível. O trabalho ideal para um
					ME é aquele que seu sucesso ou fracasso depende em um pequeno número de decisões críticas.</p>
        </div> `;
			}else if(posicao==5){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> TEAM WORKERS – TW (Facilitador) <img src="imagem6.png" alt="image6"></h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> O TW é o membro mais leal da equipe. Está preocupado com a harmonia e os
					bons relacionamentos dentro da equipe. Extrovertido, está preparado para cooperar e buscar novas
					táticas. Eles têm uma grande capacidade para flexibilidade e adaptação a diferentes situações e
					pessoas. Respeita os outros e dá a devida atenção à comunicação de planos, idéias e sentimentos
					dentro da equipe. Uma excelente pessoa para elevar o espírito da equipe.<br><br> Por outro lado, os TWs 
					podem não ser decisivos e focados o suficiente para controlar a execução de uma tarefa. Tentam evitar
					conflito e escondem problemas debaixo do tapete ao invés de enfrentá-los. Costumam assumir que
					conhecem bem o que é melhor para os outros membros da equipe e podem se tornar desagradáveis –
					excessivamente educados e cuidadosos. (‘smothering’).</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> O papel do TW é prevenir problemas interpessoais que surgem dentro de um trabalho
					em equipe e, portanto, fazer com que todos os membros da equipe contribuam efetivamente.
					Sem gostar de fricções, eles vão aos extremos para evitar isto. Não é incomum para os TWs se
					tornarem gerentes seniores especialmente se a gerência média é dominada por Shapers (Articuladores).
					Isto cria um clima em que as habilidades sensitivas e diplomáticas de um TW se tornam um verdadeiro
					ativo, especialmente sob um regime gerencial onde surgem conflitos ou precisam ser artificialmente
					suprimidos. Gerentes TW não são vistos como ameaças e, portanto os mais aceitos e desejados para ter
					como subordinado. Team Workers tem um efeito lubrificante nas equipes.  O moral do grupo é melhor e
					as pessoas parecem cooperar melhor quando os TWs participam de um grupo.</p>
        </div> `;
			}else if(posicao==6){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> IMPLEMENTERS – IM (Implementador) <img src="imagem7.png" alt="image7"> </h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Os implementadores têm um senso prático de lidar com
					problemas e desafios, além de dispor de um bom autocontrole e disciplina. Como líder, o implementador
					tende a ser extrovertido, mas gosta de ter uma estrutura organizada para trabalhar. Este é o 
					planejador lógico, a pessoa que transforma as idéias e as estratégias em planos de trabalho. Esta é a
					pessoa que coleta os recursos certos na hora e no local certo. Leal e organizado, prefere a ordem
					tradicional hierárquica. Provê a estabilidade necessária em uma equipe.<br><br> Por outro lado, podem ser 
					inflexíveis. Mudanças bruscas ou oportunidades inesperadas podem deixá-los insatisfeitos. Eles podem
					também não ser tão amigáveis e não mostrar apreciação pelo trabalho dos outros.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> IMs são úteis para um grupo por sua confiabilidade e capacidade para
					implementação. Eles são bem sucedidos porque são eficientes e porque eles têm percepção para
					aquilo que é exeqüível e relevante. Eles só realizam as tarefas que querem fazer e evitam aquelas
					que eles acreditam ser desinteressantes. Por outro lado, um IM fará o que precisa ser feito. Bons
					IMs geralmente progridem ao alto gerenciamento pela qualidade de suas habilidades de organização
					e competência em lidar com as tarefas necessárias.</p>
        </div> `;
			}
			else if(posicao==7){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> COMPLETER FINISHERS – CF (Realizador) <img src="imagem8.png" alt="image8"> </h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Realizadores têm uma grande capacidade para acompanhamento de atividades e
					projetos e atenção aos detalhes.  Eles são improváveis de começar algo que não sabem como poderão
					concluir. Estas são as pessoas que consideram como falha o fato de não conseguir entregar um trabalho
					no tempo previsto. Introvertidos, estes membros de equipe são cuidadosos e super esforçados até mesmo
					com os detalhes. Pensadores podem ter idéias maravilhosas, Shapers podem vendê-las de forma adequada,
					mas não têm a mesma habilidade que os realizadores para concretizá- las. Gostam da abordagem
					tradicional, hierárquica e de ordem e organização.<br><br> Por outro lado, quando um pensador apresenta 
					uma idéia brilhante, o realizador pode ignorá-la ou rejeitá-la – todos os esforços devem estar
					concentrados na concretização da tarefa, deixando de lado quaisquer inovações que possam atrapalhar
					o andamento das atividades. Podem ignorar as implicações a longo prazo em favor da ordem do dia e 
					ignorar relações interpessoais.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> CFs são valorizados onde as tarefas demandam alta concentração e alto grau de precisão.
					Os Realizadores criam um senso de urgência na equipe e são bons cumpridores de etapas. Em gestão
					eles sobressaem pelo alto padrão que normalmente aspiram e pela preocupação com a precisão e o
					detalhe.</p>
        </div> `;
			}else if(posicao==8){
				container.innerHTML += `  <div>
                <h4 style="text-align: center;"> SPECIALIST – SP (Especialista) <img src="imagem9.png" alt="image9"></h4>
                <p style="text-align: justify;font-size:15px;">
                    <b>Características:</b> Características: Os especialistas são indivíduos dedicados que têm orgulho em
					possuir o conhecimento técnico e as habilidades técnicas. Suas prioridades são manter o alto padrão
					profissional e defender sua área de concentração. É a pessoa certa a ser consultada sobre assuntos 
					específicos do trabalho que está sendo desenvolvido. Geralmente introvertido, como o pensador, está
					sempre atento a detalhes de seu domínio de conhecimento, querendo saber mais e mais para aplicá-lo
					de forma coerente. Membro confiável e suporte essencial para a equipe.<br><br> Por outro lado, podem não
					mostrar nenhum interesse pela tarefa geral que está sendo desenvolvida. Podem não opinar ou contribuir
					com assuntos não vinculados diretamente à sua especialidade ou grande área de interesse.</p>
                <p style="text-align: justify;font-size:15px;">
                    <b>Função:</b> SPs tem um papel indispensável a desempenhar em algumas equipes. Eles detêm a 
					habilidade para desenvolver o trabalho. Como gerentes, eles dão suporte, pois eles conhecem mais
					sobre o assunto que qualquer um outro e podem geralmente ser chamados a tomar decisões baseados
					em sua larga experiência.</p>
        </div> `;
			}
			
		}
		container.innerHTML += `<br> </p><br><button method="post" onclick="sendEmails()" id="btn" >Enviar resultados </button>`
		//container.innerHTML = ` <h2 style='text-align:left;'> Você concluiu o teste <br> Envie a carta-resposta ao seu supervisor </h2><br> <p>  Nome e Sobrenome <strong> ${userFirstNameLocal} ${userLastNameLocal} </strong>  <br> Seu endereço de email  <strong> ${emailUser} </strong>  <br> </p><br><button method="post" onclick="sendEmails()" id="btn" >Enviar resultados </button> `;
		document.querySelector('.container2').appendChild(table);
	}
});

function sendEmails(){
	html2canvas(document.querySelector('table')).then(function(canvas){
		var anchorTag = document.createElement('a');
		document.body.appendChild(anchorTag);

		anchorTag.download = 'result.jpg';
		anchorTag.href = canvas.toDataURL();

		anchorTag.target = '_blank';
		anchorTag.click();
	});
	container.style.height = '200px';
	container.style.padding = '60px 20px';
	container.innerHTML = ' <h2>  Aguarde até que o e-mail seja enviado  </h2>';
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'teste@gmail.com',
		Password: 'teste',
		To: 'teste@gmail.com',
		From: `teste@gmail.com`,

		Subject: `${userFirstNameLocal} ${userLastNameLocal}`,
		Body: `  <strong> ${userFirstNameLocal} ${userLastNameLocal} </strong>  Nome e Sobrenome
        <br>
        ${emailUser}  : e-mail do usuário
                <br>
            ${table.innerHTML}
         `
	}).then((message) => {
		window.open('index3.html', '_self');
		alert(`Resultados enviados com sucesso`);
	});
}
