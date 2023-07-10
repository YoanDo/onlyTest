/* eslint-disable import/no-unresolved */

'use client';

import { ThemeProvider } from 'styled-components';
import theme from '@/assets/theme';
import GradientWrapper from '@/components/GradientWrapper';
import Panel from '@/components/Panel';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      {/* normally in _document */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <GradientWrapper>
          <Panel />
        </GradientWrapper>
      </div>
    </ThemeProvider>
  );
}
