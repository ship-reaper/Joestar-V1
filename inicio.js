consola _ log ( '✅ Iniciando...' )
let  { spawn }  =  require ( 'child_process' )
dejar  ruta  =  requerir ( 'ruta' )
let  fs  =  requerir ( 'fs' )
dejar  paquete  =  requerir ( './paquete.json' )
const  CFonts   =  requerir ( 'cfonts' )

/*CFonts.say(`'${paquete.nombre}' Por @${paquete.autor.nombre || paquete.autor}`, {
      fuente: 'paleta',
      Alinear al centro',
      colores: ['verde'],
});*/

CFuentes . decir ( 'JOESTAR' ,  {
  fuente : 'paleta' ,
  alinear : 'centro' ,
  degradado : [ 'rojo' ,  'magenta' ]
} )
CFuentes . say ( `Joestar-bot Por JOESTAR` ,  {
  fuente : 'consola' ,
  alinear : 'centro' ,
  colores : [ 'Azul ]
} )

var  se está ejecutando  =  falso ;
/**
 * Iniciar un archivo js
* @param { String } archivo `ruta/al/archivo`
 */
 inicio de función ( archivo )  {
  si  ( se está ejecutando )  devuelve ;
  se está ejecutando  =  verdadero ;
  let  args  =  [ ruta . unirse ( __dirname ,  archivo ) , ... proceso . argv . rebanada ( 2 ) ] ;
  let  p  =  generar ( proceso . argv [ 0 ] ,  args ,  {
    stdio : [ 'heredar' ,  'heredar' ,  'heredar' ,  'ipc' ]
  } ) ;
  pág . en ( 'mensaje' ,  datos  =>  {
    consola _ registro ( '[RECIBIDO]' ,  datos ) ;
    cambiar  ( datos )  {
      caso  'restablecer' :
        pág . matar ( ) ;
        se está ejecutando  =  falso ;
        empezar _ aplicar ( esto ,  argumentos ) ;
        descanso
      caso  'tiempo de actividad' :
        pág . enviar ( proceso . tiempo de actividad ( ) ) ;
        descanso
    }
  } ) ;
  pág . en ( 'salir' ,  código  =>  {
    se está ejecutando  =  falso ;
    consola _ error ( 'Salió con código:' ,  código ) ;
    si  ( código  ===  0 )  volver ;
    fs . watchFile ( argumentos [ 0 ] ,  ( )  =>  {
      fs . unwatchFile ( argumentos [ 0 ] ) ;
      inicio ( archivo ) ;
    } ) ;
  } ) ;

}

inicio ( 'principal.js' ) ;