import useSettings from "../hooks/useSettings";
import Settings from "./Settings";
import ShortcutsGuide from "./ShortcutsGuide";

const ModalAdd = () => {

    const { handleModal, modalContent } = useSettings();

    const { title, type } = modalContent;

    document.addEventListener('keydown', e => {
        if (e.key === 'x') {
            handleModal();
        }
    })

    return (
        <div className='modal'>
            <svg onClick={e => handleModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 modal__close">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <section className="modal__content">
                <h1 className="modal__title">{title}</h1>
                {
                    type == "settings" && <Settings /> ||
                    type == "shortcuts" && <ShortcutsGuide />
                }
            </section>
        </div>
    )
}

export default ModalAdd;