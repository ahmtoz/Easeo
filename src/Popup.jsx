import { useState } from 'react';
import '../src/styles/popup.css';

/* eslint-disable no-undef */
function Popup() {
  const [selectedType, setSelectedType] = useState(null);

  const handleApply = async () => {
    if (!selectedType) {
      alert('Please select a color blindness type');
      return;
    }

    try {
      // Get the active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Send message to content script
      chrome.tabs.sendMessage(tab.id, {
        action: 'applyColorBlind',
        type: selectedType
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
          alert('Error applying styles. Please refresh the page and try again.');
        } else {
          console.log('Styles applied successfully');
        }
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error applying styles. Please refresh the page and try again.');
    }
  };

  const handleRemove = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      chrome.tabs.sendMessage(tab.id, {
        action: 'removeColorBlind'
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
        } else {
          setSelectedType(null);
          console.log('Styles removed successfully');
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="popup-container">
      <h3>Easeo</h3>
      <div className='popup-options'>
        <div className="option">
          <div className="option-info">
            <img src="" alt="IMG1" />
            <span>Protanopia</span>
          </div>
          <input 
            type="radio" 
            name="colorBlindType" 
            id="protanopia"
            checked={selectedType === 'protanopia'}
            onChange={() => setSelectedType('protanopia')}
          />
        </div>
        <div className="option">
          <div className="option-info">
            <img src="" alt="IMG2" />
            <span>Tritanopia</span>
          </div>
          <input 
            type="radio" 
            name="colorBlindType" 
            id="tritanopia"
            checked={selectedType === 'tritanopia'}
            onChange={() => setSelectedType('tritanopia')}
          />
        </div>
        <div className="option">
          <div className="option-info">
            <img src="" alt="IMG3" />
            <span>Deuteranopia</span>
          </div>
          <input 
            type="radio" 
            name="colorBlindType" 
            id="deuteranopia"
            checked={selectedType === 'deuteranopia'}
            onChange={() => setSelectedType('deuteranopia')}
          />
        </div>
      </div>
      <div className="popup-buttons">
        <button type='button' onClick={handleApply}>Apply</button>
        <button type='button' onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

/* eslint-enable no-undef */
export default Popup;
