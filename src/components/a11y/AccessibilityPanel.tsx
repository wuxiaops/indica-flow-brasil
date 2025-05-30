
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Eye, 
  Contrast, 
  Volume2, 
  Hand, 
  Type, 
  Settings,
  Accessibility
} from 'lucide-react';

interface A11ySettings {
  vlibras: boolean;
  highContrast: boolean;
  screenReader: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicators: boolean;
}

interface AccessibilityPanelProps {
  settings: A11ySettings;
  onSettingsChange: (settings: A11ySettings) => void;
  language: string;
}

const AccessibilityPanel = ({ settings, onSettingsChange, language }: AccessibilityPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const texts = {
    pt: {
      title: 'Acessibilidade',
      vlibras: 'VLibras (Tradutor de Libras)',
      vlibrasDsec: 'Ativa o tradutor de Libras do governo brasileiro',
      highContrast: 'Alto Contraste',
      highContrastDesc: 'Aumenta o contraste para melhor visibilidade',
      screenReader: 'Leitor de Tela',
      screenReaderDesc: 'Otimizações para leitores de tela',
      reducedMotion: 'Animações Reduzidas',
      reducedMotionDesc: 'Reduz animações e transições',
      largeText: 'Texto Ampliado',
      largeTextDesc: 'Aumenta o tamanho da fonte',
      focusIndicators: 'Indicadores de Foco',
      focusIndicatorsDesc: 'Destaca elementos focalizados',
      close: 'Fechar',
      reset: 'Restaurar Padrão'
    },
    en: {
      title: 'Accessibility',
      vlibras: 'VLibras (Sign Language Translator)',
      vlibrasDsec: 'Activates Brazilian government sign language translator',
      highContrast: 'High Contrast',
      highContrastDesc: 'Increases contrast for better visibility',
      screenReader: 'Screen Reader',
      screenReaderDesc: 'Optimizations for screen readers',
      reducedMotion: 'Reduced Motion',
      reducedMotionDesc: 'Reduces animations and transitions',
      largeText: 'Large Text',
      largeTextDesc: 'Increases font size',
      focusIndicators: 'Focus Indicators',
      focusIndicatorsDesc: 'Highlights focused elements',
      close: 'Close',
      reset: 'Reset to Default'
    }
  };

  const t = texts[language as keyof typeof texts];

  const updateSetting = (key: keyof A11ySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    onSettingsChange(newSettings);
    
    // Apply immediate effects
    applyA11ySettings(newSettings);
  };

  const applyA11ySettings = (newSettings: A11ySettings) => {
    const html = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      html.classList.add('reduced-motion');
    } else {
      html.classList.remove('reduced-motion');
    }
    
    // Large text
    if (newSettings.largeText) {
      html.classList.add('large-text');
    } else {
      html.classList.remove('large-text');
    }
    
    // Focus indicators
    if (newSettings.focusIndicators) {
      html.classList.add('enhanced-focus');
    } else {
      html.classList.remove('enhanced-focus');
    }
  };

  const resetToDefault = () => {
    const defaultSettings: A11ySettings = {
      vlibras: false,
      highContrast: false,
      screenReader: false,
      reducedMotion: false,
      largeText: false,
      focusIndicators: true
    };
    onSettingsChange(defaultSettings);
    applyA11ySettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        aria-label={t.title}
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                {t.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* VLibras */}
              <div className="flex items-center space-x-3">
                <Hand className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <Label htmlFor="vlibras" className="text-sm font-medium">
                    {t.vlibras}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.vlibrasDsec}
                  </p>
                </div>
                <Switch
                  id="vlibras"
                  checked={settings.vlibras}
                  onCheckedChange={(checked) => updateSetting('vlibras', checked)}
                />
              </div>

              {/* High Contrast */}
              <div className="flex items-center space-x-3">
                <Contrast className="h-5 w-5 text-purple-600" />
                <div className="flex-1">
                  <Label htmlFor="contrast" className="text-sm font-medium">
                    {t.highContrast}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.highContrastDesc}
                  </p>
                </div>
                <Switch
                  id="contrast"
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => updateSetting('highContrast', checked)}
                />
              </div>

              {/* Screen Reader */}
              <div className="flex items-center space-x-3">
                <Volume2 className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <Label htmlFor="screenReader" className="text-sm font-medium">
                    {t.screenReader}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.screenReaderDesc}
                  </p>
                </div>
                <Switch
                  id="screenReader"
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => updateSetting('screenReader', checked)}
                />
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5 text-orange-600" />
                <div className="flex-1">
                  <Label htmlFor="reducedMotion" className="text-sm font-medium">
                    {t.reducedMotion}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.reducedMotionDesc}
                  </p>
                </div>
                <Switch
                  id="reducedMotion"
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => updateSetting('reducedMotion', checked)}
                />
              </div>

              {/* Large Text */}
              <div className="flex items-center space-x-3">
                <Type className="h-5 w-5 text-red-600" />
                <div className="flex-1">
                  <Label htmlFor="largeText" className="text-sm font-medium">
                    {t.largeText}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.largeTextDesc}
                  </p>
                </div>
                <Switch
                  id="largeText"
                  checked={settings.largeText}
                  onCheckedChange={(checked) => updateSetting('largeText', checked)}
                />
              </div>

              {/* Focus Indicators */}
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-cyan-600" />
                <div className="flex-1">
                  <Label htmlFor="focusIndicators" className="text-sm font-medium">
                    {t.focusIndicators}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.focusIndicatorsDesc}
                  </p>
                </div>
                <Switch
                  id="focusIndicators"
                  checked={settings.focusIndicators}
                  onCheckedChange={(checked) => updateSetting('focusIndicators', checked)}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={resetToDefault}
                  className="flex-1"
                >
                  {t.reset}
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  {t.close}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityPanel;
