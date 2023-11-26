import { useSettings, useUi } from './hooks';
import { Header, Footer, Modal, Alert } from './components/ui';
import { Timer, DailyScrumQuestions } from './components/app';
import './index.css';

function App() {

  const { maxTimeSeconds } = useSettings();
  const { modal, alert, timerKey } = useUi();

  return (
    <>
      {modal?.title && <Modal />}
      {alert?.message && <Alert type={alert.type} message={alert.message} />}
      <div className="app">
        <Header />
        <main className='main'>
          <Timer key={timerKey} maxTimeSeconds={Number(maxTimeSeconds)} />
        </main>
        <DailyScrumQuestions />
        <Footer />
      </div>
    </>
  )
}

export default App;
