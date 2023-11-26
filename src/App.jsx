import { useSettings } from './hooks';
import { Header, Footer, Modal, Alert } from './components/ui';
import { Timer, DailyScrumQuestions } from './components/app';
import './index.css';

function App() {

  const { maxTimeSeconds, modal, alert } = useSettings();

  return (
    <>
      {modal && <Modal />}
      {alert?.message && <Alert type={alert.type} message={alert.message} />}
      <div className="app">
        <Header />
        <main className='main'>
          <Timer key={modal} maxTimeSeconds={Number(maxTimeSeconds)} />
        </main>
        <DailyScrumQuestions />
        <Footer />
      </div>
    </>
  )
}

export default App;
