'use client';

interface IconProps {
  name: string;
  className?: string;
  fill?: number;
  weight?: number;
}

const iconMap: Record<string, string> = {

  'terminal': 'terminal',
  'code': 'code',
  'layers': 'layers',
  'database': 'database',
  'dock': 'dock',
  'cloud': 'cloud',
  'security': 'security',
  'hub': 'hub',
  'verified': 'verified',
  'architecture': 'architecture',
  'dns': 'dns',
  'api': 'api',
  'shield_person': 'shield_person',
  'folder_zip': 'folder_zip',
  'folder_managed': 'folder_managed',
  'folder_open': 'folder_open',
  'settings_ethernet': 'settings_ethernet',
  'devices': 'devices',
  'storage': 'storage',
  'bolt': 'bolt',
  'precision_manufacturing': 'precision_manufacturing',
  'handshake': 'handshake',
  
  'menu': 'menu',
  'close': 'close',
  'arrow_forward': 'arrow_forward',
  'open_in_new': 'open_in_new',
  'check_circle': 'check_circle',
  'calendar_today': 'calendar_today',
  'work': 'work',
  'leaderboard': 'leaderboard',
  'share': 'share',
  'mail': 'mail',
  'call': 'call',
  'location_on': 'location_on',
  'description': 'description',
  'settings_suggest': 'settings_suggest',
  'format_quote': 'format_quote',
  'code_blocks': 'code_blocks',
  'data_object': 'data_object',
  

  'directions_bike': 'directions_bike',
  'coffee': 'coffee',
  'camera': 'camera',
  'menu_book': 'menu_book',
};

export const Icon = ({ name, className = '', fill = 0, weight = 400 }: IconProps) => {
  const iconName = iconMap[name] || name;
  
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{ 
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}` 
      }}
    >
      {iconName}
    </span>
  );
};