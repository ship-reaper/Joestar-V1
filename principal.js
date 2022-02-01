const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const Joestar = nueva WAConnection();
const qrcode = require("qrcode-terminal");
constante {
  cekBienvenido,
  cek antienlace,
  cekmala palabra,
  cekantidelete,
  cekDetect
} = require('./funciones/grupo');
constante {
  getCustomBienvenido,
  getCustomBye
} = require('./funciones/bienvenido')
const fs = require("fs");
const pulgar = fs.readFileSync('./temp/joestar.jpg')
const { getBuffer } = require('./library/buscador')
const { semana, hora, tanggal} = require("./biblioteca/funciones");
const { color } = require("./library/color");
la función asíncrona comienza() {
	Joestar.autoReconnect = ReconnectMode.onConnectionLost;
	Joestar.versión = [2, 2140, 6];
	Joestar.logger.level = 'advertir';
	Joestar.on('qr', () => {
	console.log(color('[QR]','white'), color('Escanee el codigo QR para conectar'));
	});

	fs.existsSync('./whatsapp/sessions.json') && Joestar.loadAuthInfo('./whatsapp/sessions.json');
	
	espera Joestar.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./whatsapp/sessions.json', JSON.stringify(Joestar.base64EncodedAuthInfo(), null, '\t'));
  enlace = 'https://chat.whatsapp.com/F2vCvhtry6P0sZa08CXsVC'
  Joestar.query({ json:["acción", "invitar", `${enlace.reemplazar('https://chat.whatsapp.com/F2vCvhtry6P0sZa08CXsVC','')}`]})
    //llamada por que
    // ¡esto puede tardar unos minutos si tiene millas de conversaciones!! Joestar.on('chats-received', async ({ hasNewChats }) => {
    	Joestar.on('chats-received', async ({ hasNewChats }) => {
        console.log(`‣ Tú tienes ${Joestar.chats.length} chats, nuevos chats disponibles: ${hasNewChats}`);

const  no leído  =  esperar  Joestar . cargar todos los mensajes no leídos  ( ) ;
        consola _ log  ( "‣ Tú tienes"  +  unread . length  +  "mensajes no leídos" ) ;
    } ) ;
    // llamado cuando WA envía chats
    // ¡esto puede tardar unos minutos si tiene millas de contactos!
    Joestar . en ( 'contactos-recibidos' ,  ( )  =>  {
        consola _ log ( '‣ Tú tienes '  +  Objeto . claves ( Joestar . contactos ) . longitud  +  'contactos' ) ;
    } ) ;
    
    //--- Bienvenida y Despedida
  Joestar . on ( 'actualización-de-participantes-del-grupo' ,  asíncrono  ( anu )  =>  {
      esBienvenido  =  cekBienvenido ( anu . jid ) ;
      if ( es Bienvenido  ===  verdadero )  {
      	
      prueba  {
	      ppimg  =  esperar  Joestar . getProfilePicture ( ` $ { anu . participantes [ 0 ] . split ( '@' ) [ 0 ] } @c.us` ) ;
	    }  atrapar  {
	      ppimg  =  'https://i.ibb.co/Jr6JBJQ/Profile-Joestar.jpg' ;
	    } 
	
      mdata  =  esperar  Joestar . groupMetadata ( anu . jid ) ;
      if  ( anu . acción  ==  'agregar' )  {
        num  =  anu . participantes [ 0 ] ;
          
	    let nombre de  usuario  =  Joestar . obtenerNombre ( num )
        let  about  =  ( await  Joestar . getStatus ( num ) . catch ( consola . error )  ||  { } ) . estado  ||  ''
        let  miembro  =  mdata . participantes _ longitud
        let  etiqueta  =  '@' + num . dividir ( '@' ) [ 0 ]
	    let  buff  =  esperar  getBuffer ( ppimg ) ;
	    deje  descrip = mdata  . descripción 
	    let  welc  =  esperar  getCustomWelcome ( mdata . id )
	    capt  =  bienvenido . reemplazar ( '@usuario' ,  etiqueta ) . reemplazar ( '@nombre' , nombre de  usuario ) . reemplazar ( '@bio' ,  acerca de ) . reemplazar ( '@fecha' ,  tanggal ) . reemplazar ( '@desc' ,  descrip ) . reemplazar ( '@grupo' ,  mdata . asunto ) ;
	      Joestar . send2ButtonLoc ( mdata . id ,  buff ,  capt ,  'No hay aun ekisde' ,  '⦙☰ MENU' ,  '/menu' ,  '⏍ INFO GP' ,  ' /infogp' ,  falso ,  {
	      información de contexto : {  
            mencionadoJid : Joestar . analizarMención ( capt )
	      } 
	    } ) ;
        }  else  if  ( anu . acción  ==  'quitar' )  {
        num  =  anu . participantes [ 0 ] ;
        let nombre de  usuario  =  Joestar . obtenerNombre ( num )
        let  about  =  ( await  Joestar . getStatus ( num ) . catch ( consola . error )  ||  { } ) . estado  ||  ''
        let  miembro  =  mdata . participantes _ longitud
        let  etiqueta  =  '@' + num . dividir ( '@' ) [ 0 ]
        let  buff  =  esperar  getBuffer ( ppimg ) ;
        let  bye  =  await  getCustomBye ( mdata.id ) ; _ _
        Capt  =  adiós . reemplazar ( '@usuario' ,  etiqueta ) . reemplazar ( '@nombre' , nombre de  usuario ) . reemplazar ( '@bio' ,  acerca de ) . reemplazar ( '@fecha' ,  tanggal ) . reemplazar ( '@grupo' ,  mdata . asunto ) ;
        Joestar . sendButtonLoc ( mdata . id ,  buff ,  capt ,  'https://chat.whatsapp.com/ExjchY0Oad50BDbvKVimIi' ,  '👋🏻' ,  'unde' ,  false ,  {
	      información de contexto : { 
            mencionadoJid : Joestar . analizarMención ( capt )
	      } 
	    } ) ;
	//--
      }
  }
} ) ;

//--antidelete
Joestar . on ( 'mensaje-eliminar' ,  asíncrono  ( m )  =>  {
    si  ( m . clave . fromMe )  return ;
    let  isAntidelete  =  cekAntidelete ( m . clave . remoteJid ) ;
    if  ( es Antidelete  ===  falso )  return ;
    m _ mensaje  =  ( Objeto . claves ( m . mensaje ) [ 0 ]  ===  'ephemeralMessage' ) ? m _ mensaje _ mensaje efímero . mensaje : m . mensaje ;
    const  Tipo  =  Objeto . teclas ( m . mensaje ) [ 0 ] ;
    espera  Joestar . responder ( m . clave . remoteJid ,
    ━━━━Π𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀Π━━━━
    
    *▢ Nombre :* @ ${ m . participante _ dividir `@` [ 0 ] } 
*▢ Hora :* ${ hora }

━━━━Π𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀Π━━━━

` . recortar ( ) ,  m . mensaje ,  {
      información de contexto : {
        mencionadoJid : [ m . participante ]
      }
    }) ;
    Joestar . copyNForward ( m . key . remoteJid ,  m . message ) . atrapar ( e  =>  consola . log ( e ,  m ) ) ;
  } ) ;
    
//---bloqueo automático de llamas
Joestar . en ( "CB:Llamar" ,  json  =>  {
  dejar  llamar ;
  llamando  =  JSON . analizar ( JSON . stringify ( json ) ) ;
  llamar  =  llamando [ 1 ] . desde ;
  Joestar . sendMessage ( call ,  `* ${ Joestar . user . name } * No hagas llamadas al bot, tu número se bloqueará automáticamente` ,  MessageType . text ) . luego ( ( )  =>  Joestar .blockUser ( call , "add " ) ) ; 
} ) ;


}

/**
 * Uncache si hay un cambio de archivo
* @param { cadena } módulo Nombre o ruta del módulo
* @param { función } cb <opcional>
 */
 
función  nocache ( módulo ,  cb  =  ( )  =>  {  } )  {
  consola _ log ( "‣ Modulo" ,  `' ${ module } '` ,  "se está revisando si hay cambios" ) ;
  fs . watchFile ( requiere . resolver ( módulo ) ,  asíncrono  ( )  =>  {
    await  uncache ( requiere . resolve ( módulo ) ) ;
    cb ( módulo ) ;
    } ) ;
    }
    
    
    /**
 * Desbloquear un módulo
* @param { cadena } módulo Nombre o ruta del módulo
 */
función  uncache ( módulo  =  '.' )  {
  devolver  nueva  Promesa ( ( resolver ,  rechazar )  =>  {
    prueba  {
      eliminar  requiere . caché [ requerir . resolver ( módulo ) ] ;
      resolver ( ) ;
      }  atrapar  ( e )  {
        rechazar ( e ) ;
        }
        } ) ;
        }
        
        requerir ( './index.js' ) ;
        nocache ( './index.js' ,  module  =>  console.log ( color ( `Index.js Se actualizó! ` ) ) ) ) ;


Joestar . en ( 'actualización de chat' ,  asíncrono  ( mensaje )  =>  {
require ( './index.js' ) ( Joestar ,  mensaje ) ;
} ) ;

comienza ( ) ;