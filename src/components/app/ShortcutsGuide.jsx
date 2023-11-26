const ShortcutsGuide = () => {
  return (
    <div className="shortcuts">
      <ul className='shortcuts__list'>
        <li className='shortcuts__item'>
          <strong>Iniciar:</strong> Presiona la tecla <code>espacio</code> para comenzar el temporizador.
        </li>
        <li className='shortcuts__item'>
          <strong>Pausar:</strong> Presiona la tecla <code>p</code> para detener temporalmente el temporizador.
        </li>
        <li className='shortcuts__item'>
          <strong>Resetear:</strong> Presiona la tecla <code>Escape</code> para reiniciar el temporizador a cero.
        </li>
        <li className='shortcuts__item'>
          <strong>Reiniciar:</strong> Presiona la tecla <code>Enter</code> para reiniciar el temporizador desde cero.
        </li>
        <li className='shortcuts__item'>
          <strong>Cerrar Modales:</strong> Presiona la tecla <code>x</code> para cerrar cualquier modal.
        </li>
      </ul>
      <p className='shortcuts__note'>
        <em>Nota: En dispositivos móviles el Timer se maneja a tráves de botones.</em>
      </p>
    </div>
  )
}

export default ShortcutsGuide;