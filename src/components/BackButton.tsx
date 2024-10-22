// BackButton.tsx
"use client"; // This directive specifies that this component should be rendered on the client side

import React from 'react';
import styles from './BackButton.module.css'; // Ensure this import is correct and the CSS module is properly configured

const BackButton: React.FC = () => {
  return (
    <button className={styles.backButton} onClick={() => window.history.back()}>
      Back
    </button>
  );
};

export default BackButton;