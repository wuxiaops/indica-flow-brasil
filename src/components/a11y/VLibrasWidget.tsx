
import React, { useEffect } from 'react';

interface VLibrasWidgetProps {
  enabled: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  avatar?: string;
}

const VLibrasWidget = ({ 
  enabled = true, 
  position = 'bottom-right',
  avatar = 'icaro'
}: VLibrasWidgetProps) => {
  useEffect(() => {
    if (!enabled) return;

    // Remove widget existente se houver
    const existingWidget = document.querySelector('[vw]');
    if (existingWidget) {
      existingWidget.remove();
    }

    // Cria o widget VLibras
    const widget = document.createElement('div');
    widget.setAttribute('vw', '');
    widget.className = 'enabled';
    
    widget.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    
    document.body.appendChild(widget);

    // Carrega o script do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
      // Inicializa o widget após carregar o script
      if (window.VLibras) {
        new window.VLibras.Widget({
          avatar: avatar,
          position: position
        });
      }
    };
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const widgetToRemove = document.querySelector('[vw]');
      if (widgetToRemove) {
        widgetToRemove.remove();
      }
      
      const scriptToRemove = document.querySelector('script[src*="vlibras-plugin.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [enabled, position, avatar]);

  return null; // Este componente não renderiza nada visualmente
};

export default VLibrasWidget;
