import React, { useState } from 'react';

const Step1of4 = () => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [selectedSkinGoals, setSelectedSkinGoals] = useState([]);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleCheckboxChange = (goal) => {
    const updatedGoals = [...selectedSkinGoals];
    if (updatedGoals.includes(goal)) {
      updatedGoals.splice(updatedGoals.indexOf(goal), 1);
    } else {
      updatedGoals.push(goal);
    }
    setSelectedSkinGoals(updatedGoals);
  };

  return (
  <div className="div">
  <div className="div-2">
    <div className="div-3">
      <div className="div-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b5f91e5d8c47791a7247d6730ffff83ecd04b34ec883f056ece38595bb88c1?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
          className="img"
        />
        <div className="div-5">Back</div>
      </div>
      <div className="div-6">Take Your Skin Quiz</div>
    </div>
    <div className="div-7">
      <div className="div-8">
        <div className="div-9">Step 1 of 4</div>
        <div className="div-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8c1b30e57e2b1d3ead25465c75acc8d7216b7af05384b8e7a724573596c997?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8c1b30e57e2b1d3ead25465c75acc8d7216b7af05384b8e7a724573596c997?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
            className="img-3"
          />
          <div className="div-11">
            <div className="div-12" />
          </div>
          <div className="div-13" />
        </div>
      </div>
    </div>
    <div className="div-14">
      Help Us give you the best ingredients by telling us about your skin
    </div>
    <div className="div-15">
      <label htmlFor="skinType">Whats your skin type?</label>
      <select id="skinType" name="skinType" className="skin-type-select">
        <option value="" disabled="" selected="">
          Select Skin type
        </option>
        <option value="dry">Dry</option>
        <option value="oily">Oily</option>
        <option value="balanced">Balanced</option>
        <option value="normal">Normal</option>
      </select>
    </div>
    <div className="skin-goal-container">
        <label htmlFor="skinGoal">What are your skin goals?</label>
        <div className={`custom-dropdown ${isDropdownActive ? 'active' : ''}`} id="customDropdown">
          <div className="selected-option" onClick={toggleDropdown}>
            {selectedSkinGoals.length > 0 ? selectedSkinGoals.join(', ') : 'Select Skin goals'}
          </div>
          <div className="dropdown-list" id="dropdownList">
            {/* CODE TO Map through THE skin goals */}
            {['Hydrate', 'Rejuvenate', 'Brighten', 'Calm/Soothe', 'Minimize Redness'].map((goal) => (
              <div className="checkbox-item" key={goal}>
                <input
                  type="checkbox"
                  id={goal.toLowerCase()}
                  name="skinGoal"
                  value={goal}
                  checked={selectedSkinGoals.includes(goal)}
                  onChange={() => handleCheckboxChange(goal)}
                />
                <label htmlFor={goal.toLowerCase()}>{goal}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    <div className="div-15">
      <label htmlFor="skinType">How sensitive is your skin?</label>
      <select id="skinType" name="skinType" className="skin-type-select">
        <option value="" disabled="" selected="">
          Select Skin sensitivity
        </option>
        <option value="Never">Never</option>
        <option value="Rarely">Rarely</option>
        <option value="Sometimes">Sometimes</option>
        <option value="All the time">All the time</option>
      </select>
    </div>
    <div className="div-44">
      <div className="div-45">Back</div>
      <div className="div-46">Next</div>
    </div>
  </div>
</div>;
};
export default Step1of4;

  <style>
    .div {
      padding-top: 16px;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .div-2 {
      align-items: flex-start;
      border-radius: 8px;
      background-color: #fff;
      display: flex;
      width: 662px;
      max-width: 100%;
      flex-direction: column;
      padding: 24px 0 24px 24px;
    }
    @media (max-width: 991px) {
      .div-2 {
        padding-left: 20px;
      }
    }
    .div-3 {
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      display: flex;
      gap: 20px;
    }
    @media (max-width: 991px) {
      .div-3 {
        max-width: 100%;
        flex-wrap: wrap;
      }
    }
    .div-4 {
      border-radius: 6px;
      display: flex;
      gap: 4px;
      margin: auto 0;
      padding: 0 1px;
    }
    .img {
      aspect-ratio: 0.8;
      object-fit: contain;
      object-position: center;
      width: 16px;
      overflow: hidden;
      max-width: 100%;
    }
    .div-5 {
      color: var(--TextColor, #333);
      flex-grow: 1;
      white-space: nowrap;
      font: 500 14px/143% Montserrat, sans-serif;
    }
    @media (max-width: 991px) {
      .div-5 {
        white-space: initial;
      }
    }
    .div-6 {
      color: var(--TextColor, #333);
      text-align: center;
      align-self: stretch;
      flex-grow: 1;
      white-space: nowrap;
      font: 500 18px/27px Montserrat, sans-serif;
    }
    @media (max-width: 991px) {
      .div-6 {
        max-width: 100%;
        white-space: initial;
      }
    }
    .div-7 {
      justify-content: center;
      align-items: center;
      align-self: stretch;
      display: flex;
      margin-top: 16px;
      flex-direction: column;
      padding: 10px 60px;
    }
    @media (max-width: 991px) {
      .div-7 {
        max-width: 100%;
        padding: 0 20px;
      }
    }
    .div-8 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .div-9 {
      color: var(--gray-900, #111827);
      margin: auto 0;
      font: 500 14px/114% Montserrat, sans-serif;
    }
    .div-10 {
      align-items: flex-start;
      align-self: stretch;
      display: flex;
      padding-right: 6px;
      gap: 17px;
    }
    @media (max-width: 991px) {
      .div-10 {
        justify-content: center;
      }
    }
    .img-2 {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 20px;
      overflow: hidden;
      align-self: stretch;
      max-width: 100%;
    }
    .img-3 {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 20px;
      overflow: hidden;
      align-self: stretch;
      max-width: 100%;
    }
    .div-11 {
      border-radius: 50%;
      background-color: #d5f6e7;
      align-self: stretch;
      display: flex;
      aspect-ratio: 1.2;
      flex-direction: column;
      justify-content: center;
      padding: 2px 4px;
    }
    .div-12 {
      border-radius: 50%;
      background-color: var(--Green, #24a86a);
      display: flex;
      height: 16px;
      flex-direction: column;
    }
    .div-13 {
      border-radius: 100px;
      background-color: var(--gray-200, #e5e7eb);
      align-self: center;
      display: flex;
      width: 16px;
      height: 16px;
      flex-direction: column;
      margin: auto 0;
    }
    .div-14 {
      align-self: stretch;
      color: var(--TextColor, #333);
      margin-top: 16px;
      font: 500 16px/24px Montserrat, sans-serif;
    }
    @media (max-width: 991px) {
      .div-14 {
        max-width: 100%;
      }
    }
    .div-15 {
        color: var(--gray-700, #374151);
        align-self: stretch;
        margin-top: 16px;
        font: 500 14px/143% Montserrat, sans-serif;
      }
      
      @media (max-width: 991px) {
        .div-15 {
          max-width: 100%;
        }
      }
      
      .div-15 label {
        display: block;
        margin-bottom: 8px;
      }
      
      .skin-type-select {
        width: 100%;
        padding: 9px 13px;
        font: 400 14px/143% Montserrat, sans-serif;
        border-radius: 6px;
        border: 1px solid var(--gray-300, #d1d5db);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        background-color: var(--white, #fff);
        margin-top: 8px;
      }
      
      .div-16 {
        color: var(--gray-900, #111827);
        white-space: nowrap;
        align-items: start;
        align-self: stretch;
        border-radius: 6px;
        border: 1px solid var(--gray-300, #d1d5db);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        background-color: var(--white, #fff);
        margin-top: 8px;
        justify-content: center;
        padding: 9px 60px 9px 13px;
        font: 400 14px/143% Montserrat, sans-serif;
      }
      
      @media (max-width: 991px) {
        .div-16 {
          white-space: initial;
          max-width: 100%;
          padding-right: 20px;
        }
      }
      
      
      .skin-goal-container {
        margin-top: 16px;
        font: 500 14px/143% Montserrat, sans-serif;
        width: 90%;

        
      }
      
      .custom-dropdown {
        position: relative;
        width: 100%;
        
      }
      
      .selected-option {
        cursor: pointer;
        width: 100%;
        padding: 9px 13px;
        font: 400 14px/143% Montserrat, sans-serif;
        border-radius: 6px;
        border: 1px solid var(--gray-300, #d1d5db);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        background-color: var(--white, #fff);
        margin-top: 8px;
      }
      
      .dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        display: none;
        background-color: white;
        border: 1px solid var(--gray-300, #d1d5db);
        border-top: none;
        border-radius: 0 0 4px 4px;
        width: 100%;


      }
      
      .checkbox-item {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

      }
      
      .checkbox-item input {
        margin-right: 8px;
      }
      
      .checkbox-item label {
        color: var(--gray-700, #374151);
      }
      
      .custom-dropdown.active .dropdown-list {
        display: block;
        
      }

    .div-44 {
      justify-content: space-between;
      align-self: stretch;
      display: flex;
      margin-top: 16px;
      padding-left: 80px;
      gap: 20px;
    }
    @media (max-width: 991px) {
      .div-44 {
        max-width: 100%;
        flex-wrap: wrap;
        padding-left: 20px;
      }
    }
    .div-45 {
      color: var(--gray-400, #9ca3af);
      white-space: nowrap;
      justify-content: center;
      border-radius: 100px;
      border: 1px solid var(--gray-400, #9ca3af);
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
      background-color: var(--white, #fff);
      flex-grow: 1;
      padding: 9px 40px;
      font: 500 16px/150% Montserrat, sans-serif;
    }
    @media (max-width: 991px) {
      .div-45 {
        white-space: initial;
        padding: 0 20px;
      }
    }
    .div-46 {
      color: var(--Whitee, #fff);
      white-space: nowrap;
      justify-content: center;
      border-radius: 100px;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
      background-color: var(--Green, #24a86a);
      flex-grow: 1;
      padding: 9px 41px;
      font: 500 16px/150% Montserrat, sans-serif;
    }
    @media (max-width: 991px) {
      .div-46 {
        white-space: initial;
        padding: 0 20px;
      }
    }
    
  </style>


// ################################################################################################################################
// ############################## DIRECT JSX CODE FROM HTML #######################################################################
// ################################################################################################################################
// ################################################################################################################################


{/* <div className="div">
<div className="div-2">
  <div className="div-3">
    <div className="div-4">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b5f91e5d8c47791a7247d6730ffff83ecd04b34ec883f056ece38595bb88c1?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
        className="img"
      />
      <div className="div-5">Back</div>
    </div>
    <div className="div-6">Take Your Skin Quiz</div>
  </div>
  <div className="div-7">
    <div className="div-8">
      <div className="div-9">Step 1 of 4</div>
      <div className="div-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8c1b30e57e2b1d3ead25465c75acc8d7216b7af05384b8e7a724573596c997?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
          className="img-2"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8c1b30e57e2b1d3ead25465c75acc8d7216b7af05384b8e7a724573596c997?apiKey=4b67c500605a43ffbc74a1ee09f059f5&"
          className="img-3"
        />
        <div className="div-11">
          <div className="div-12" />
        </div>
        <div className="div-13" />
      </div>
    </div>
  </div>
  <div className="div-14">
    Help Us give you the best ingredients by telling us about your skin
  </div>
  <div className="div-15">
    <label htmlFor="skinType">Whats your skin type?</label>
    <select id="skinType" name="skinType" className="skin-type-select">
      <option value="" disabled="" selected="">
        Select Skin type
      </option>
      <option value="dry">Dry</option>
      <option value="oily">Oily</option>
      <option value="balanced">Balanced</option>
      <option value="normal">Normal</option>
    </select>
  </div>
  <div className="skin-goal-container">
    <label htmlFor="skinGoal">What are your skin goals?</label>
    <div className="custom-dropdown" id="customDropdown">
      <div className="selected-option" onclick="toggleDropdown()">
        Select Skin goals
      </div>
      <div className="dropdown-list" id="dropdownList">
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="hydrate"
            name="skinGoal"
            defaultValue="Hydrate"
          />
          <label htmlFor="hydrate">Hydrate</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="rejuvenate"
            name="skinGoal"
            defaultValue="Rejuvenate"
          />
          <label htmlFor="rejuvenate">Rejuvenate</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="brighten"
            name="skinGoal"
            defaultValue="Brighten"
          />
          <label htmlFor="brighten">Brighten</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="calmSoothe"
            name="skinGoal"
            defaultValue="Calm/soothe"
          />
          <label htmlFor="calmSoothe">Calm/soothe</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="minimizeRedness"
            name="skinGoal"
            defaultValue="Minimize Redness"
          />
          <label htmlFor="minimizeRedness">Minimize Redness</label>
        </div>
      </div>
    </div>
  </div>
  <div className="div-15">
    <label htmlFor="skinType">How sensitive is your skin?</label>
    <select id="skinType" name="skinType" className="skin-type-select">
      <option value="" disabled="" selected="">
        Select Skin sensitivity
      </option>
      <option value="Never">Never</option>
      <option value="Rarely">Rarely</option>
      <option value="Sometimes">Sometimes</option>
      <option value="All the time">All the time</option>
    </select>
  </div>
  <div className="div-44">
    <div className="div-45">Back</div>
    <div className="div-46">Next</div>
  </div>
</div>
</div> */}

  