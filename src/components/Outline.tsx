// Outline.tsx
"use client"; // This directive specifies that this component should be rendered on the client side

import React, { useEffect, useState } from 'react';
import styles from './Outline.module.css';

interface Heading {
  id: string;
  title: string;
}

const Outline: React.FC<{ contentHtml: string }> = ({ contentHtml }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentHtml;

    const extractedHeadings = Array.from(tempDiv.querySelectorAll('h2, h3')).map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id; // Set ID for scrolling
      return { id, title: (heading as HTMLElement).innerText };
    });

    setHeadings(extractedHeadings);
  }, [contentHtml]);

  return (
    <aside className={styles.outline}>
      <h2>Outline</h2>
      <ul>
        {headings.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Outline;