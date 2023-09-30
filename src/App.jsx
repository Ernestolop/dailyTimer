import useSettings from './hooks/useSettings'
import Header from './components/Header'
import Timer from './components/Timer'
import DailyScrumQuestions from './components/DailyScrumQuestions'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Alert from './components/Alert'
import './index.css'

function App() {

  const { maxTimeSeconds, modal, alert } = useSettings();

  return (
    <>
      {modal && <Modal />}
      {alert?.message && <Alert type={alert.type} message={alert.message} />}
      <div className="app">
        <Header />
        <main className='main'>
          <Timer key={modal} maxTimeSeconds={maxTimeSeconds} />
        </main>
        <DailyScrumQuestions />
        <Footer />
      </div>
    </>
  )
}

export default App
