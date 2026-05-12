"use client";

import Image from "next/image";

const logosRow1 = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
];

const logosRow2 = [
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export function PartnersLogo() {
  return (
    <section className="w-full py-24 bg-kx-surface-950 overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 mb-16 text-center">
        <p className="text-muted-foreground font-medium text-lg tracking-wide uppercase font-mono text-xs">
          Working with teams across AU, UAE, KSA and beyond
        </p>
      </div>
      
      {/* Marquee Row 1 */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-56 h-20 mx-8 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt="Partner Logo" className="max-w-[120px] max-h-12 object-contain filter brightness-0 invert" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="flex w-full overflow-hidden mt-12 group">
        <div className="flex w-max animate-[marquee-reverse_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...logosRow2, ...logosRow2].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-56 h-20 mx-8 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img src={logo} alt="Partner Logo" className="max-w-[120px] max-h-12 object-contain filter brightness-0 invert" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}} />
    </section>
  );
}
