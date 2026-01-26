export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flower petals - bajkowy element */}
        <circle cx="20" cy="20" r="6" fill="#C9A0A0" opacity="0.3"/>
        <circle cx="20" cy="13" r="4" fill="#D4A5A5"/>
        <circle cx="27" cy="20" r="4" fill="#D4A5A5"/>
        <circle cx="20" cy="27" r="4" fill="#D4A5A5"/>
        <circle cx="13" cy="20" r="4" fill="#D4A5A5"/>
        <circle cx="24.5" cy="15.5" r="3.5" fill="#E8C4C4"/>
        <circle cx="24.5" cy="24.5" r="3.5" fill="#E8C4C4"/>
        <circle cx="15.5" cy="24.5" r="3.5" fill="#E8C4C4"/>
        <circle cx="15.5" cy="15.5" r="3.5" fill="#E8C4C4"/>
        {/* Center */}
        <circle cx="20" cy="20" r="3" fill="#A77B7B"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-primary tracking-wide">Blaszkovska</span>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Kosmetologia</span>
      </div>
    </div>
  );
}
