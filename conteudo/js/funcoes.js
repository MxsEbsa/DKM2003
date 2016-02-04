var verificar_inicio_cnd;
var txtLvl = 0;

var sound = new Howl({  urls: ['media/ambiente.mp3','media/ambiente.ogg'], loop: true, volume: 0.4, onend: function() { tocar_sound();}});
var textNarrador = new Howl({  urls: ['media/DMT2_03_Narrador.mp3','media/DMT2_03_Narrador.ogg'],  sprite: {    text1: [0, 12000],    text2: [12000, 9500],    text3: [22000, 4000], text4: [26000, 7900], text5: [34000, 5500], text6: [40000, 13500], text7: [53000, 7900], text8: [61000, 9500] , text9: [71000, 4700], text10: [76000, 4950], text11: [81000, 6500], text12: [88000, 3900], text13: [92000, 9999]   }});
var textNarrador2 = new Howl({  urls: ['media/DMT2_03_Narrador_20_24.mp3','media/DMT2_03_Narrador_20_24.ogg'],  sprite: {    text1: [0, 18000],    text2: [18000, 3500], text3: [22000, 6000], text4: [28000, 14900], text5: [43000, 3700] }});
var textMenino = new Howl({  urls: ['media/DMT2_03_Menino.mp3','media/DMT2_03_Menino.ogg'],  sprite: {    text1: [0, 12000],    text2: [12000, 7500], text3: [20000, 5500], text4: [26000, 11500]  }});
var textMenino2 = new Howl({  urls: ['media/DMT2_03_Menino_25_27.mp3','media/DMT2_03_Menino_25_27.ogg'],  sprite: {    text1: [0, 4200], text2: [4100, 14500], text3: [19100, 4500], text4: [23000, 6500]  }});
var textMenina = new Howl({  urls: ['media/DMT2_03_Menina.mp3','media/DMT2_03_Menina.ogg'],  sprite: {    text1: [0, 13000],    text2: [13000, 8600], text3: [22000, 5500], text4: [28000, 12000]  }});
var textMenina2 = new Howl({  urls: ['media/DMT2_03_Menina_25_27.mp3','media/DMT2_03_Menina_25_27.ogg'],  sprite: {    text1: [0, 4200],    text2: [4100, 15000], text3: [19100, 4500], text4: [23300, 6500]  }});
var acert = new Howl({  urls: ['media/acerto.mp3','media/acerto.ogg']});

// Configurações dos textos do botão de ajuda... Se houver mais de um texto do botão de ajuda, no arquivo FUNÇÕES.JS de desenvolvimento insira apenas a variavel "txtLvl = NUMERO DO TEXTO DO BOTÃO DE AJUDA QUE APARECERÁ, no local da função de desenvolvimento do projeto.
function tocar_sound(){
	sound.stop();
	sound.play();
}

function textosInstrucoes(txtLvl){
	
	if(txtLvl == 0){
		$("#instrucoes").html("Decifre as mensagens e clique no local onde é possível encontrar os itens que precisa comprar.");
	}else if(txtLvl == 1){
		$("#instrucoes").html("");
	}else if(txtLvl == 2){
		$("#instrucoes").html("");
	}
}

// JIMBOE
function engine(tipo){
	
	// Busca ID do HTML
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");

	// Cria os elementos
	var	
	header = document.createElement("div"),
	iconHeader = document.createElement("div"),
	tituloHeader = document.createElement("h1"),
	btnOptions = document.createElement("div"),
	activeOptions = document.createElement("div"),
	listOptions = document.createElement("ul"),
	instrucoes = document.createElement("div"),
	setaInstrucoes = document.createElement("div"),
	overlayOptions = document.createElement("div");
		
	// Seta as Classes e variáveis	
	header.setAttribute("id","header");
	iconHeader.setAttribute("class", "img"+config.genero+" icon");
	btnOptions.setAttribute("id","btnOptions");
	activeOptions.setAttribute("class","actionOptions");
	listOptions.setAttribute("id","navOptions");
	instrucoes.setAttribute("id","instrucoes");
	setaInstrucoes.setAttribute("class","seta");
	overlayOptions.setAttribute("class","overlayOptions");
		
	var
	btnStartCapa = $("#capa .acoes div:first-child"),
	subHeader = $(".subheader");
	subHeaderText = $(".subheader p");
	botaoPop = $(".btnFechaPopUp, .btnFechaSmall, .btnFechaSmallFinaliza"),
	jnlFeed = $(".feedback, .feedsmall"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
		
	// Create DOM
	tituloNavegador.html(config.ano+" - "+config.titulo);
	init.insertBefore(header, conteudo);
	init.appendChild(overlayOptions);
	header.appendChild(iconHeader);
	header.appendChild(tituloHeader);
	header.appendChild(btnOptions);
	btnOptions.appendChild(activeOptions);
	instrucoes.appendChild(setaInstrucoes);
	header.appendChild(instrucoes);
	tituloHeader.innerHTML = config.titulo;
	iconHeader.style.backgroundImage = config.genero;
	
	if(tipo == "matematica"){
		$("body").css({background:config.matematica.bck});
		iconHeader.style.backgroundColor = config.matematica.cp4;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cs1);	
		subHeader.css({"background-color":config.matematica.cs1, width:"335px"});
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.matematica.cs1);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
		jnlFeed.css("border", "5px solid "+config.matematica.cs1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp4;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cs1);	
		subHeader.css({"background-color":config.portugues.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.portugues.cs4);
		jnlFeed.css("border", "5px solid "+config.portugues.cs4);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp4;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		botaoPop.css("background-color",config.geografia.cs4);
		btnStartCapa.css("background-color",config.geografia.cs1);	
		subHeader.css({"background-color":config.geografia.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		jnlFeed.css("border", "5px solid "+config.geografia.cs4);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp4;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cs1);	
		subHeader.css({"background-color":config.ciencias.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.ciencias.cs4);
		jnlFeed.css("border", "5px solid "+config.ciencias.cs4);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp4;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cs1);	
		subHeaderText.text(config.ano);
		subHeader.css({"background-color":config.historia.cs1, width:"110px"});	
		botaoPop.css("background-color",config.historia.cs4);
		jnlFeed.css("border", "5px solid "+config.historia.cs4);
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
// Configura Objeto
var config = {
	create: function(){
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},
	titulo: "A viagem",
	tipo: "Pnld 2016",
	colecao: "Jimboe",
	ano: "MATEMÁTICA | 2º Ano",
	genero: "home", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		//bck: "url(img/background-matematica.gif) repeat center",
		bck: "url(img/akpalo_textura_matematica.png) repeat center",
		btnOptions: "url(img/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		bck: "url(img/background-ciencias.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/background-historia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsGeografia.png) no-repeat bottom right"
	}
}

$(window).resize(function(){
	updateScale();
});



// Executa esta função "start" após o carregamento das imagens
function start(){
	config.create(); // Seta as propriedades principais do Objeto e executa
	//Variáveis da capa
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	// Variáveis do menu Opções do Objeto
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: ""
	}
	
	//Carrega Capa
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-220px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
			
	
// --------------------------- Botões Padrões
	// Inicia Objeto
	capa.botaoIniciar.on("click",function(){
		sound.stop().play();
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				aViagem.init();
			});
		},800);
	});
	
	function iniciar_funcoes_oed(){
		textNarrador.play("text1");
		console.log("OED iniciado!")
		sound.stop().play();
		
		//capa.cabecalho.css({marginTop:"-380px"});
		//capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		//capa.botaoCredito.css({marginLeft:"250px"});
		//setTimeout(function(){
			//capa.imagem.fadeOut(300,function(){
				//$(this).remove();
				aViagem.init();
			//});
		//},800);
	}
	
	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	      //startGame.init();
		  iniciar_funcoes_oed();
	      clearInterval(verificar_inicio_cnd);
		  setTimeout(function(){ document.querySelector("#cobertura_oed_inicio").style.width="0px"; }, 3000);
	    }
	  }, 1000);
	}	
	
	
	
	// Ativa créditos
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},25000, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},25000, "linear");
			},25000);
			
		});
	});
	
	//Fecha os créditos
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});


	// Abre opções do Objeto
	opcoes.tool.on({
		click:function(){
			if(opcoes.ativo == 0){
				textosInstrucoes(txtLvl);
				$(this).parent().css("box-shadow","-5px -25px 10px rgba(0,0,0,.5)");
				$(this).css("opacity",".3");
				opcoes.cntInstrucoes.removeClass("animated rotateOutUpRight");
				opcoes.cntInstrucoes.show().addClass("animated rotateInDownRight");
				opcoes.ativo = 1;
			}else{
				$(this).parent().css("box-shadow","none");
				$(this).css("opacity","1");
				opcoes.cntInstrucoes.removeClass("animated rotateInDownRight");
				opcoes.cntInstrucoes.addClass("animated rotateOutUpRight");
				opcoes.ativo = 0;
			}
		}
	});
	
	opcoes.overlay.on({
		click: function(){
			opcoes.tool.removeClass("opened").css({backgroundPosition:"11px 15px"});
			opcoes.botoes.hide();
			opcoes.menu.background.css({height:"78px", backgroundPosition:"bottom"});
			$(".overlayOptions").hide();
			if($(".seta").is(":visible")){
				opcoes.cntInstrucoes.css({
				width:"0px",
				opacity:"0"
				});
				$(".seta").fadeOut(200);
				$("#instrucoes p").remove();
			}
		}
		
	});
	// Botão Volta pra capa
	opcoes.menu.atualizar.on("click",function(){
		//location.href="index.html"
		sessionStorage.setItem('reiniciar_oed', 'sim');
	});
	// INIT GAME
	
	var aViagem = {


		game1: {

			stilo: function(){
				var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas');
				for ( var i = 0; i<respostas.length; i++ ){
					$(respostas).eq(i).children('li').eq(0).css({
						'margin-left':'0'
					});
				}
			},

			verificaRespostaSuperMercado: function(){

				$('.placas.SuperMercadoPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');

					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);


						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupSuperMercadoAvance').fadeIn(1000).on('click', function(){
									$('.superMercadoNoClick').show();
									$('.padariaNoClick').hide();
								});

								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenina.stop().play("text4");
								},800);
							},1000);
						},6000);
					}else{
						
						$('.placas.SuperMercadoPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.SuperMercadoPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						else if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}	



				});		

			},

			verificaRespostaPadaria: function(){
				

				$('.placas.PadariaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');

					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'

						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupPadariaAvance').fadeIn(1000).on('click', function(){
									$('.padariaNoClick').show();
									$('.oficinaMecanicaNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text5");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.PadariaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.PadariaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								//window.location.href = 'index.html';
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

							

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}		

				});		

			},

			verificaRespostaMecanica: function(){
				

				$('.placas.MecanicaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
						if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'280px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupOficinaMecanicaAvance').fadeIn(1000).on('click', function(){
										$('.oficinaMecanicaNoClick').show();
										$('.postoDeGasolinaNoClick').hide();
									});
									setTimeout(function(){
										textNarrador.stop().play("text7");
									},800);
								},1000);
							},6000);

						}else{
						
						$('.placas.MecanicaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.MecanicaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

							

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}	



				});		

			},



			verificaRespostaPostoDeGasolina: function(){
				

				$('.placas.PostoDeGasolinaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){
						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupPostoDeGasolinaAvance').fadeIn(1000).on('click', function(){
									$('.postoDeGasolinaNoClick').show();
									$('.lojaDeMalasNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text10");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.PostoDeGasolinaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.PostoDeGasolinaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop().play("text9");
								},1300);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}

				});		

			},


			verificaRespostaLojaDeMalas: function(){
				

				$('.placas.LojaDeMalasPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupLojaDeMalasAvance').fadeIn(1000).on('click', function(){
									$('.lojaDeMalasNoClick').show();
									$('.lojaDeAnimaisNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text13");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.LojaDeMalasPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.LojaDeMalasPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop().play("text12");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},

			verificaRespostaLojaDeAnimais: function(){
				

				$('.placas.LojaDeAnimaisPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupLojaDeAnimaisAvance').fadeIn(1000).on('click', function(){
									$('.lojaDeAnimaisNoClick').show();
									$('.suaCasaNoClick').hide();
								});
								setTimeout(function(){
									textNarrador2.stop().play("text3");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.LojaDeAnimaisPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.LojaDeAnimaisPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador2.stop().play("text2");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

							
							},6000);
						}
					}

				});		

			},

			verificaRespostaSuaCasa: function(){
				

				$('.placas.SuaCasaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupSuaCasaAvance').fadeIn(1000).on('click', function(){
									$('.suaCasaNoClick').show();
									$('.casaDosAvosNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenina2.stop().play("text1");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.SuaCasaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.SuaCasaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador2.stop().play("text5");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},


			verificaRespostaCasaDosAvos: function(){
				

				$('.placas.CasaDosAvosPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenina.stop();
							textMenina2.stop().play("text4");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								setTimeout(function(){
									/*window.location.href = 'index.html';*/
									sessionStorage.setItem('reiniciar_oed', 'sim');
								},700);
							},1000);
						},6000);

					}else{
						
						$('.placas.CasaDosAvosPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.CasaDosAvosPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenina2.stop();
								textMenina.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenina2.stop().play("text3");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},







			placasAnimation: function(){
				var placas = $('.placa');
				for ( var i = 0; i<placas.length; i++ ){

					placas.eq(i).css({
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					});
					placas.eq(i).stop().animate({
						'top':  placas.eq(i).siblings('.cordenadas').css('top'),
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					},1000,'easeOutBounce');
				}
				$('.superMercadoNoClick').hide();

				$('.eventsupermercado').one('click', function(){
					// $('.superMercadoNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text2");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaSuperMercado();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.padariaNoClick').hide();
				});
				$('.eventSuaCasa').one('click', function(){
					// $('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador2.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaSuaCasa();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.casaDosAvosNoClick').hide();
				});
				$('.eventPadaria').one('click', function(){
					// $('.padariaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaPadaria();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.oficinaMecanicaNoClick').hide();
				});
				$('.eventMecanica').one('click', function(){
					// $('.oficinaMecanicaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text6");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaMecanica();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.postoDeGasolinaNoClick').hide();
				});
				$('.eventPostoDeGasolina').one('click', function(){
					// $('.postoDeGasolinaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text8");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaPostoDeGasolina();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.lojaDeMalasNoClick').hide();
				});
				$('.eventLojaDeMalas').one('click', function(){
					// $('.lojaDeMalasNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text11");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaLojaDeMalas();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.lojaDeAnimaisNoClick').hide();
				});
				$('.eventLojaDeAnimais').one('click', function(){
					// $('.lojaDeAnimaisNoClick').show();
					acert.stop().play();
					textNarrador2.stop().play("text1");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaLojaDeAnimais();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.suaCasaNoClick').hide();
				});
				$('.eventCasaDosAvos').one('click', function(){
					$('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador.stop();
					textNarrador2.stop();
					textMenina2.stop().play("text2");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaRespostaCasaDosAvos();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
				});
			},

			init: function(){
				$('.game1').fadeIn(500);
				$('#navOptions').children('li.btnOption.btnInstrucoes').css('display','block');
				textNarrador.stop();
				textNarrador2.stop();
				textMenina.stop().play("text1");
				$('.game1 .popupBG').fadeIn(1000);

				$('.game1 .popupBG .close').on('click', function(){
					textMenino.stop();
					textMenino2.stop();
					textMenina.stop();
					textMenina2.stop();
					$(this).parent().fadeOut(1000);
					setTimeout(function(){
						aViagem.game1.placasAnimation();
					},1300);
				});

				$('.game1 .popupSuperMercadoAvance .close, .game1 .popupPadariaAvance .close, .game1 .popupOficinaMecanicaAvance .close, .game1 .popupPostoDeGasolinaAvance .close, .game1 .popupLojaDeMalasAvance .close, .game1 .popupLojaDeAnimaisAvance .close, .game1 .popupSuaCasaAvance .close').on('click', function(){
						textNarrador.stop();
						textNarrador2.stop();
						textMenino.stop();
						textMenino2.stop();
						textMenina.stop();
						textMenina2.stop();
						textNarrador.stop();
						textNarrador2.stop();
					$(this).parent().fadeOut(1000);
				});
			}
		},






































		// GAME 2
		game2: {

			stilo: function(){
				var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas');
				for ( var i = 0; i<respostas.length; i++ ){
					$(respostas).eq(i).children('li').eq(0).css({
						'margin-left':'0'
					});
				}
			},

			verificaRespostaSuperMercado: function(){

				$('.placas.SuperMercadoPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');

					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupSuperMercadoAvance').fadeIn(1000).on('click', function(){
									$('.superMercadoNoClick').show();
									$('.padariaNoClick').hide();
								});

								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenino.stop().play("text4");
								},800);
							},1000);
						},6000);
					}else{
						
						$('.placas.SuperMercadoPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.SuperMercadoPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						else if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}	



				});		

			},

			verificaRespostaPadaria: function(){
				

				$('.placas.PadariaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');

					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupPadariaAvance').fadeIn(1000).on('click', function(){
									$('.padariaNoClick').show();
									$('.oficinaMecanicaNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text5");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.PadariaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.PadariaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

							

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}		

				});		

			},

			verificaRespostaMecanica: function(){
				

				$('.placas.MecanicaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
						if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'280px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupOficinaMecanicaAvance').fadeIn(1000).on('click', function(){
										$('.oficinaMecanicaNoClick').show();
										$('.postoDeGasolinaNoClick').hide();
									});
									setTimeout(function(){
										textNarrador.stop().play("text7");
									},800);
								},1000);
							},6000);

						}else{
						
						$('.placas.MecanicaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.MecanicaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

							

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}	



				});		

			},



			verificaRespostaPostoDeGasolina: function(){
				

				$('.placas.PostoDeGasolinaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){
						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupPostoDeGasolinaAvance').fadeIn(1000).on('click', function(){
									$('.postoDeGasolinaNoClick').show();
									$('.lojaDeMalasNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text10");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.PostoDeGasolinaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.PostoDeGasolinaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop().play("text9");
								},1300);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								

							},6000);
						}
					}

				});		

			},


			verificaRespostaLojaDeMalas: function(){
				

				$('.placas.LojaDeMalasPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupLojaDeMalasAvance').fadeIn(1000).on('click', function(){
									$('.lojaDeMalasNoClick').show();
									$('.lojaDeAnimaisNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop().play("text13");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.LojaDeMalasPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.LojaDeMalasPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop().play("text12");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},

			verificaRespostaLojaDeAnimais: function(){
				

				$('.placas.LojaDeAnimaisPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupLojaDeAnimaisAvance').fadeIn(1000).on('click', function(){
									$('.lojaDeAnimaisNoClick').show();
									$('.suaCasaNoClick').hide();
								});
								setTimeout(function(){
									textNarrador2.stop().play("text3");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.LojaDeAnimaisPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.LojaDeAnimaisPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador2.stop().play("text2");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

							
							},6000);
						}
					}

				});		

			},

			verificaRespostaSuaCasa: function(){
				

				$('.placas.SuaCasaPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupSuaCasaAvance').fadeIn(1000).on('click', function(){
									$('.suaCasaNoClick').show();
									$('.casaDosAvosNoClick').hide();
								});
								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenino2.stop().play("text1");
								},800);
							},1000);
						},6000);

					}else{
						
						$('.placas.SuaCasaPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.SuaCasaPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador2.stop().play("text5");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},


			verificaRespostaCasaDosAvos: function(){
				

				$('.placas.CasaDosAvosPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					var respostas = $('.game2 .placas .pergunta .conteudo ul.respostas li');
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);
						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'280px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textNarrador.stop();
							textNarrador2.stop();
							textMenino2.stop();
							textMenino2.stop().play("text4");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								setTimeout(function(){
									/*window.location.href = 'index.html';*/
									sessionStorage.setItem('reiniciar_oed', 'sim');
								},700);
							},1000);
						},6000);

					}else{
						
						$('.placas.CasaDosAvosPai .pergunta .conteudo .acertos ul.cabecas li:first-child').remove();
						var life = $('.placas.CasaDosAvosPai .pergunta .conteudo .acertos ul.cabecas li');

						if ( life.length <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'270px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textNarrador.stop();
								textNarrador2.stop();
								textMenino2.stop();
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								/*window.location.href = 'index.html';*/
								sessionStorage.setItem('reiniciar_oed', 'sim');
							},11000);
						}

						if ( life.length >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								
								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'28%',
									'top':'38%'
								},1500, 'easeOutBack');

								setTimeout(function(){
									textNarrador.stop();
									textNarrador2.stop();
									textMenino2.stop().play("text3");
								},1500);
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								
							},6000);
						}
					}

				});		

			},







			placasAnimation: function(){
				var placas = $('.placa');
				for ( var i = 0; i<placas.length; i++ ){
					placas.eq(i).css({
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					});
					placas.eq(i).stop().animate({
						'top':  placas.eq(i).siblings('.cordenadas').css('top'),
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					},1000,'easeOutBounce');
				}
				$('.superMercadoNoClick').hide();

				$('.eventsupermercado').one('click', function(){
					// $('.superMercadoNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text2");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaSuperMercado();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.padariaNoClick').hide();
				});
				$('.eventSuaCasa').one('click', function(){
					// $('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador2.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaSuaCasa();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.casaDosAvosNoClick').hide();
				});
				$('.eventPadaria').one('click', function(){
					// $('.padariaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaPadaria();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.oficinaMecanicaNoClick').hide();
				});
				$('.eventMecanica').one('click', function(){
					// $('.oficinaMecanicaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text6");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaMecanica();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.postoDeGasolinaNoClick').hide();
				});
				$('.eventPostoDeGasolina').one('click', function(){
					// $('.postoDeGasolinaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text8");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaPostoDeGasolina();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.lojaDeMalasNoClick').hide();
				});
				$('.eventLojaDeMalas').one('click', function(){
					// $('.lojaDeMalasNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text11");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaLojaDeMalas();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.lojaDeAnimaisNoClick').hide();
				});
				$('.eventLojaDeAnimais').one('click', function(){
					// $('.lojaDeAnimaisNoClick').show();
					acert.stop().play();
					textNarrador2.stop().play("text1");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaLojaDeAnimais();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					// $('.suaCasaNoClick').hide();
				});
				$('.eventCasaDosAvos').one('click', function(){
					$('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador.stop();
					textNarrador2.stop();
					textMenino2.stop().play("text2");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game2.verificaRespostaCasaDosAvos();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
				});
			},

			init: function(){
				$('.game2').fadeIn(500);
				$('#navOptions').children('li.btnOption.btnInstrucoes').css('display','block');
				textNarrador.stop();
				textNarrador2.stop();
				textMenino.stop().play("text1");
				$('.game2 .popupBG').fadeIn(1000);

				$('.game2 .popupBG .close').on('click', function(){
					textMenino.stop();
					textMenino2.stop();
					textMenina.stop();
					textMenina2.stop();
					$(this).parent().fadeOut(1000);
					setTimeout(function(){
						aViagem.game2.placasAnimation();
					},1300);
				});

				$('.game2 .popupSuperMercadoAvance .close, .game2 .popupPadariaAvance .close, .game2 .popupOficinaMecanicaAvance .close, .game2 .popupPostoDeGasolinaAvance .close, .game2 .popupLojaDeMalasAvance .close, .game2 .popupLojaDeAnimaisAvance .close, .game2 .popupSuaCasaAvance .close').on('click', function(){
					textNarrador.stop();
					textNarrador2.stop();
					textMenino.stop();
					textMenino2.stop();
					textMenina.stop();
					textMenina2.stop();
					textNarrador.stop();
					textNarrador2.stop();
					$(this).parent().fadeOut(1000);
				});
			}
		},


		modal: {
			telaPreta: function(){
				setTimeout(function(){
					$('.telaPreta').fadeIn('slow');
					$('#navOptions').children('li.btnOption.btnInstrucoes').css('display','none');
				},100);
				aViagem.modal.popup();
			},

			popup: function(){
				var menina = document.getElementsByClassName('gameMenina')[0];
				var menino = document.getElementsByClassName('gameMenino')[0];
				setTimeout(function(){
					$('.popup').fadeIn(500);
					setTimeout(function(){
						//textNarrador.stop().play("text1");
					},1000);
				},200);

				setTimeout(function(){
					$('.popup .text').fadeIn('slow');
				},1300);

				$(menina).bind({
				  click: function() {
				  	$(this).parent().fadeOut('slow');
					$('.telaPreta').fadeOut('slow');
					textNarrador.stop("text1");
					setTimeout(function(){
						aViagem.game1.init();
					},500);
				  },
				  mouseenter: function() {
				    $(this).addClass('anim');
				  },
				  mouseleave: function(){
				  	$(this).removeClass('anim');
				  }
				});

				$(menino).bind({
				  click: function() {
				  	$(this).parent().fadeOut('slow');
					$('.telaPreta').fadeOut('slow');
					textNarrador.stop("text1");
					setTimeout(function(){
						aViagem.game2.init();
					},500);
				  },
				  mouseenter: function() {
				     $(this).addClass('anim');
				  },
				  mouseleave: function(){
				  	$(this).removeClass('anim');
				  }
				});

				
			}
		},

		init: function(){
			aViagem.modal.telaPreta();
			aViagem.game1.stilo();
			aViagem.game2.stilo();
		}
	};

	// FIM GAME
	
// Final
// document.getElementsByClassName('testeSom')[0].onclick = function(){
// 	textMenina.stop().play("text3");
// }

}

	function iniciar_com_tap(){
	//alert("Tap");
	//startGame.init();
	sound.stop();
	sound.play();
	//
	//clearInterval(verificar_inicio_cnd);
}