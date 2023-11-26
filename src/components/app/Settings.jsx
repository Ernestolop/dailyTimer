import { useState } from 'react';
import { useSettings, useUi } from '../../hooks';
const Settings = () => {

  const { maxTimeSeconds, updateMaxTimeSeconds } = useSettings();
  const { handleModal, handleAlert } = useUi();
  const [maxTimeSecondsInput, setMaxTimeSecondsInput] = useState(maxTimeSeconds);

  const handleSubmit = e => {
    e.preventDefault();
    if (maxTimeSecondsInput < 1 || isNaN(maxTimeSecondsInput)) {
      handleAlert('El tiempo máximo debe ser un número mayor a 0', 'danger');
      return;
    }
    updateMaxTimeSeconds(maxTimeSecondsInput);
    handleModal();
    handleAlert('Configuraciones guardadas correctamente', 'normal');
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form__field">
        <label className='form__label' htmlFor="maxTimeSeconds">Tiempo Máximo Por Miembro del Squad (en segundos)</label>
        <input className='form__input' type="number" id="maxTimeSeconds" name="maxTimeSeconds" value={maxTimeSecondsInput} onChange={e => setMaxTimeSecondsInput(e.target.value)} />
      </div>
      <input type="submit" className="form__submit" value="Guardar Configuraciones" />
    </form>
  )
}

export default Settings;