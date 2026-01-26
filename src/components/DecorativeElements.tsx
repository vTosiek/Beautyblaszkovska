export function DecorativeElements() {
  return (
    <>
      {/* Top left decorative element */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="30" cy="30" r="3" fill="#D4A5A5"/>
          <circle cx="60" cy="30" r="3" fill="#D4A5A5"/>
          <circle cx="90" cy="30" r="3" fill="#D4A5A5"/>
          <circle cx="30" cy="60" r="3" fill="#E8C4C4"/>
          <circle cx="90" cy="60" r="3" fill="#E8C4C4"/>
          <circle cx="30" cy="90" r="3" fill="#D4A5A5"/>
          <circle cx="60" cy="90" r="3" fill="#D4A5A5"/>
          <circle cx="90" cy="90" r="3" fill="#D4A5A5"/>
        </svg>
      </div>

      {/* Top right flower */}
      <div className="absolute top-32 right-20 opacity-30 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="25" r="8" fill="#E8C4C4"/>
          <circle cx="55" cy="40" r="8" fill="#E8C4C4"/>
          <circle cx="40" cy="55" r="8" fill="#E8C4C4"/>
          <circle cx="25" cy="40" r="8" fill="#E8C4C4"/>
          <circle cx="40" cy="40" r="6" fill="#C9A0A0"/>
        </svg>
      </div>

      {/* Bottom left leaves */}
      <div className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <ellipse cx="30" cy="50" rx="15" ry="25" fill="#D4A5A5" transform="rotate(-30 30 50)"/>
          <ellipse cx="60" cy="50" rx="15" ry="25" fill="#E8C4C4" transform="rotate(30 60 50)"/>
        </svg>
      </div>

      {/* Bottom right decorative circles */}
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="25" cy="25" r="4" fill="#C9A0A0"/>
          <circle cx="50" cy="50" r="6" fill="#D4A5A5"/>
          <circle cx="75" cy="75" r="5" fill="#E8C4C4"/>
        </svg>
      </div>
    </>
  );
}
