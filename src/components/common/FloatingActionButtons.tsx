'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingActionButtons.module.css';

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Hiển thị nút scroll to top khi cuộn xuống hơn 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.floatingButtons}>
      {/* Nút Zalo */}
      <a
        href="https://zalo.me/0971770946"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionButton}
        aria-label="Chat qua Zalo"
        title="Chat qua Zalo"
        style={{ background: '#0068FF' }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          {/* Chat Bubble Background */}
          <path
            d="M32 8C18.745 8 8 17.462 8 29.111c0 6.212 3.057 11.773 7.839 15.574-.336.858-1.404 3.882-1.603 4.502-.261.813.376.799.789.581.29-.153 4.705-2.527 6.24-3.354 1.808.323 3.715.502 5.735.502 13.255 0 24-9.462 24-21.111S45.255 8 32 8z"
            fill="white"
          />
          {/* Text "Zalo" */}
          <text
            x="32"
            y="34"
            textAnchor="middle"
            fill="#0068FF"
            fontSize="14"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            Zalo
          </text>
        </svg>
      </a>

      {/* Nút gọi điện */}
      <a
        href="tel:0971770946"
        className={styles.actionButton}
        aria-label="Gọi điện thoại"
        title="Gọi: 0971.770.946"
        style={{ background: 'linear-gradient(135deg, #34C759 0%, #30B350 100%)' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* Nút Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`${styles.actionButton} ${showScrollTop ? styles.visible : styles.hidden}`}
        aria-label="Cuộn lên đầu trang"
        title="Cuộn lên đầu trang"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #8a5b42 100%)' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
