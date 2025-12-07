'use client';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content">
      {children}
    </main>
  );
}
