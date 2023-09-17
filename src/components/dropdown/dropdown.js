import React, { useState, useRef, useEffect } from 'react';

import styles from './dropdown.module.scss'

const Dropdown = ({ options , title='drop' , isIcon=false  , onOptionSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        {isIcon ? (<img  src={title} alt='icon' />):{title}}
      </button>
      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {options.map((option, index) => (
            <li key={index} className={styles.dropdownOption}  onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;