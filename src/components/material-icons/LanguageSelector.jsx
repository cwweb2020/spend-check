import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const LanguageSelector = ({ langTitle, screenWidth }) => {
  const [active, setActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);

    // Aquí puedes agregar lógica adicional, como cambiar el idioma en tu aplicación.
    // Por ejemplo, puedes usar una biblioteca de internacionalización (i18n).
  };

  const habdleSelect = () => {
    setActive(!active);
  };
  const dinamicClass = active ? 'active' : '';

  return (
    <div className="language-selector">
      <span onClick={habdleSelect} className="language-title">
        {langTitle} &nbsp;{' '}
        <IoIosArrowDown
          style={{
            transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: active ? 'all 300ms' : active === false ? 'all 300ms' : '',
          }}
        />
      </span>
      <ul style={{ bottom: screenWidth < 900 && '130%', top: screenWidth < 900 && 'unset' }} className={`${dinamicClass} `}>
        <li>spanish</li>
        <hr />
        <li>english</li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
