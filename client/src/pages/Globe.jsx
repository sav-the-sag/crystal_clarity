import "../Globe.css"; // Import the CSS file for styling the globe
import crystal from '../assets/crystal.png'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import AffirmationModal from "../components/AffirmationModal";

function Globe() {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <h2>Affirmation Crystal</h2>
      <div className="app-container">

        <main>
          <div className="globe-container">
              <img src={crystal} alt="Crystal" className="crystal-image" width="250" />
          </div>
          <br />
          <div>
          <button id="generate-button" onClick={handleShow}>
            Generate Affirmation
          </button>
          </div>
          <Modal
            size='md'
            show={showModal}
            onHide={handleClose}
            aria-labelledby='affirmation-modal'>
            <Modal.Body>
              <AffirmationModal handleModalClose={handleClose} />
            </Modal.Body>
          </Modal>

        </main>
      </div>
    </div>
  );
}

export default Globe;
