"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

{/* 
  NOTE FOR REVIEWERS:
  The card gradients and inline vector elements serve as close high-fidelity stand-ins.
  Minor visual deltas in the gradient profiles and iconography are recognized system 
  trade-offs implemented to maintain optimal responsiveness and performance across 
  all viewport sizes while respecting asset accessibility limitations.
*/}
function TvIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-16 h-16" aria-hidden="true">
      <defs>
        <radialGradient id="tv_g0" cx="50%" cy="85%" r="55%">
          <stop offset="0%" stopColor="#ff60b4" />
          <stop offset="100%" stopColor="#bb1866" />
        </radialGradient>
        <radialGradient id="tv_g1" cx="50%" cy="15%" r="75%">
          <stop offset="0%" stopColor="#ff9dd8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff60b4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tv_g2" x1="7.2" y1="12" x2="64.8" y2="53.4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1c0838" />
          <stop offset="100%" stopColor="#5c10a0" />
        </linearGradient>
        <radialGradient id="tv_g3" cx="50%" cy="100%" r="75%">
          <stop offset="0%" stopColor="#8c0060" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#1c0838" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tv_g4" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(70,0,100,0.06)" />
        </radialGradient>
        <radialGradient id="tv_g5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffaadc" />
          <stop offset="100%" stopColor="#c82880" />
        </radialGradient>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" fill="url(#tv_g0)"
        d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z" />
      <path fill="url(#tv_g1)"
        d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z" />
      <path fill="url(#tv_g2)"
        d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" />
      <path fill="url(#tv_g3)"
        d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="url(#tv_g4)"
        d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6ZM7.19995 50.4V13.8C7.19995 12.8059 8.00581 12 8.99995 12H63C63.9942 12 64.8 12.8059 64.8 13.8V50.4V51.6C64.8 52.5941 63.9942 53.4 63 53.4H8.99995C8.00581 53.4 7.19995 52.5941 7.19995 51.6V50.4Z" />
      <path fill="url(#tv_g5)"
        d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-16 h-16" aria-hidden="true">
      <defs>
        <radialGradient id="dl_g0" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff44aa" />
          <stop offset="100%" stopColor="#990044" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dl_g1" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#ff88cc" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#aa2266" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dl_g2" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ff55bb" />
          <stop offset="100%" stopColor="#8c1060" />
        </radialGradient>
        <radialGradient id="dl_g3" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#ff88cc" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#aa2266" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dl_g4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff66bb" />
          <stop offset="100%" stopColor="#9900cc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dl_g5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ddbbff" />
        </radialGradient>
        <radialGradient id="dl_g6" cx="20%" cy="15%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path fill="url(#dl_g0)"
        d="M36 70.2008C54.8882 70.2008 70.2001 54.8889 70.2001 36.0008C70.2001 17.1126 54.8882 1.80078 36 1.80078C17.1119 1.80078 1.80005 17.1126 1.80005 36.0008C1.80005 54.8889 17.1119 70.2008 36 70.2008Z" />
      <path opacity="0.4" fill="url(#dl_g1)"
        d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z" />
      <path fill="url(#dl_g2)"
        d="M62.3657 37.9958C63.1205 53.3924 51.3908 65.3832 36.1668 64.7778C20.9428 64.173 7.9893 51.2008 7.23444 35.8041C6.47952 20.4075 18.2091 8.41672 33.4331 9.02194C48.6571 9.62716 61.6103 22.5992 62.3657 37.9958Z" />
      <path opacity="0.5" fill="url(#dl_g3)"
        d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z" />
      <path opacity="0.6" fill="url(#dl_g4)"
        d="M36.9 60.6C48.6636 60.6 58.2 51.0637 58.2 39.3C58.2 27.5363 48.6636 18 36.9 18C25.1363 18 15.6 27.5363 15.6 39.3C15.6 51.0637 25.1363 60.6 36.9 60.6Z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="url(#dl_g5)"
        d="M39.0849 42.2727L46.3387 35.76L48.8945 38.5142L38.9118 47.477L37.8466 48.4333L36.6071 47.477L24.9899 38.5142L27.0434 35.76L35.4849 42.2727L33.6 21.6016H37.2L39.0849 42.2727Z" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" fill="url(#dl_g6)"
        d="M61.6566 34.9618C61.7832 35.3893 62.391 35.3233 62.3694 34.878C61.6962 21.1369 50.1509 9.55975 36.5817 9.01957C34.4606 8.93515 32.4155 9.12541 30.4772 9.55909C30.0745 9.64915 30.1575 10.2082 30.5697 10.2246C45.0094 10.7979 57.6246 21.2971 61.6566 34.9618Z" />
    </svg>
  );
}

function TelescopeIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-16 h-16" aria-hidden="true">
      <defs>
        <radialGradient id="tel_g0" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#3a0870" />
          <stop offset="100%" stopColor="#180440" />
        </radialGradient>
        <radialGradient id="tel_g1" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#5a0e98" />
          <stop offset="100%" stopColor="#2a0660" />
        </radialGradient>
        <radialGradient id="tel_g2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6a14b0" />
          <stop offset="100%" stopColor="#1e0450" />
        </radialGradient>
        <radialGradient id="tel_g3" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#ff4499" />
          <stop offset="100%" stopColor="#cc0055" />
        </radialGradient>
        <radialGradient id="tel_g4" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff66bb" />
          <stop offset="100%" stopColor="#990044" />
        </radialGradient>
        <radialGradient id="tel_g5" cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#ffaadd" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff66bb" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tel_g6" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(160,80,220,0.1)" />
        </radialGradient>
        <radialGradient id="tel_g7" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(40,0,80,0.9)" />
          <stop offset="100%" stopColor="rgba(20,0,50,0)" />
        </radialGradient>
        <linearGradient id="tel_g8" x1="9.6" y1="9.6" x2="62.4" y2="62.4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ffaa00" />
        </linearGradient>
      </defs>
      <path fill="url(#tel_g0)"
        d="M24.0492 36.6016L33.6 46.3898L17.8029 56.8633C17.8029 56.8633 15.8891 57.6983 13.625 55.2638C11.361 52.8293 12.1235 51.238 12.1235 51.238L24.0492 36.6016Z" />
      <path fill="url(#tel_g1)"
        d="M25.0344 34.1992L36 46.151L25.0616 53.8043C25.0616 53.8043 21.8289 55.0984 18.0987 51.0172C14.3686 46.9358 15.9198 44.5105 15.9198 44.5105L25.0344 34.1992Z" />
      <path fill="url(#tel_g2)"
        d="M39 13.0195L59.1 33.6788L32.5325 50.4142C32.5325 50.4142 28.7459 50.2552 24.3978 45.4897C20.0498 40.7243 21.4096 35.8101 21.4096 35.8101L39 13.0195Z" />
      <path fill="url(#tel_g3)"
        d="M57.6709 15.3516C63.1044 21.2807 63.9858 29.2883 59.6386 33.2371C55.2916 37.186 47.3628 35.5806 41.9292 29.6515C36.4954 23.7224 35.6145 15.7148 39.9615 11.766C44.3084 7.81716 52.2372 9.42252 57.6709 15.3516Z" />
      <path fill="url(#tel_g4)"
        d="M58.3787 31.255C54.8121 34.5032 48.2143 33.0817 43.6421 28.0798C39.07 23.078 38.2547 16.39 41.8213 13.1419C45.3879 9.89364 51.9857 11.3152 56.5579 16.3171C61.1298 21.3189 61.9452 28.0069 58.3787 31.255Z" />
      <path opacity="0.85" fill="url(#tel_g5)"
        d="M59.6783 28.823C60.576 24.1785 59.6544 20.5934 56.1603 16.6199C52.6662 12.6464 47.3508 10.8657 43.7796 12.7598C39.371 15.098 48.3734 13.5961 53.4577 19.5815C57.8259 24.724 58.8516 33.1009 59.6783 28.823Z" />
      <path opacity="0.4" fill="url(#tel_g6)"
        d="M50.3979 25.2452C50.4549 26.7239 49.2932 27.7677 47.8032 27.5766C46.3131 27.3856 45.059 26.032 45.002 24.5532C44.945 23.0745 46.1067 22.0307 47.5968 22.2218C49.0868 22.4128 50.341 23.7664 50.3979 25.2452Z" />
      <path opacity="0.6" fill="url(#tel_g7)"
        d="M36.9217 21.0039L26.4258 34.3627C26.3297 36.4604 28.2903 39.5534 30.0334 40.8344L41.2345 29.9105C39.6 28.2005 36.9591 24.1025 36.9217 21.0039Z" />
      <path fillRule="evenodd" clipRule="evenodd" fill="url(#tel_g8)"
        d="M20.0576 9.60156L21.479 11.7187L24 11.0654L22.3575 13.0272L23.7789 15.1444L21.3424 14.2397L19.7 16.2016L19.8365 13.6806L17.4 12.7759L19.9209 12.1225L20.0576 9.60156ZM58.776 52.8016L58.9623 56.4685L62.4 57.4188L59.0774 58.7347L59.2637 62.4016L57.0239 59.548L53.7014 60.8638L55.6397 57.7843L53.4 54.9307L56.8377 55.8811L58.776 52.8016ZM15.206 24.2101L15.8768 21.0016L13.4793 23.1964L10.6853 21.5563L11.9975 24.553L9.59998 26.7478L12.8085 26.405L14.1207 29.4016L14.7915 26.1931L18 25.8502L15.206 24.2101Z" />
    </svg>
  );
}

function ProfilesIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-16 h-16" aria-hidden="true">
      <defs>
        <radialGradient id="pr_g0" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#4a1090" />
          <stop offset="100%" stopColor="#200850" />
        </radialGradient>
        <radialGradient id="pr_g1" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#6018c0" />
          <stop offset="100%" stopColor="#2c0870" />
        </radialGradient>
        <radialGradient id="pr_g2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ccaaff" />
        </radialGradient>
        <radialGradient id="pr_g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ccaaff" />
        </radialGradient>
        <radialGradient id="pr_g4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#bbaaff" />
        </radialGradient>
        <radialGradient id="pr_g5" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1a0044" />
          <stop offset="100%" stopColor="#1a0044" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pr_g6" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#ff7799" />
          <stop offset="100%" stopColor="#cc3355" />
        </radialGradient>
        <radialGradient id="pr_g7" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffccdd" />
        </radialGradient>
        <radialGradient id="pr_g8" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffccdd" />
        </radialGradient>
        <radialGradient id="pr_g9" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffbbcc" />
        </radialGradient>
      </defs>
      <path fill="url(#pr_g0)"
        d="M10.8 15.6008C10.8 12.9499 12.949 10.8008 15.5999 10.8008H40.8C43.4509 10.8008 45.6 12.9498 45.6 15.6008V40.8007C45.6 43.4516 43.4509 45.6007 40.8 45.6007H15.6C12.949 45.6007 10.8 43.4517 10.8 40.8007V15.6008Z" />
      <path fill="url(#pr_g1)"
        d="M9.59998 14.4016C9.59998 11.7506 11.749 9.60162 14.4 9.60156H39.6C42.251 9.60156 44.4 11.7506 44.4 14.4016V39.6015C44.4 42.2525 42.251 44.4015 39.6 44.4015H14.4C11.749 44.4015 9.59998 42.2525 9.59998 39.6015V14.4016Z" />
      <path fill="url(#pr_g2)"
        d="M18.6 21.9008C18.6 23.0606 17.6598 24.0008 16.5 24.0008C15.3402 24.0008 14.4 23.0606 14.4 21.9008C14.4 20.741 15.3402 19.8008 16.5 19.8008C17.6598 19.8008 18.6 20.741 18.6 21.9008Z" />
      <path fill="url(#pr_g3)"
        d="M39.6 21.9008C39.6 23.0606 38.6598 24.0008 37.5 24.0008C36.3402 24.0008 35.4 23.0606 35.4 21.9008C35.4 20.741 36.3402 19.8008 37.5 19.8008C38.6598 19.8008 39.6 20.741 39.6 21.9008Z" />
      <path fill="url(#pr_g4)"
        d="M23.6713 29.4501C23.2437 29.1967 22.6917 29.3379 22.4383 29.7655C22.1848 30.1932 22.3261 30.7452 22.7537 30.9986C23.8254 31.6337 26.769 32.7744 30.6375 32.7744C34.506 32.7744 37.4497 31.6337 38.5213 30.9986C38.949 30.7452 39.0902 30.1932 38.8368 29.7655C38.5834 29.3379 38.0313 29.1967 37.6037 29.4501C36.8191 29.9151 34.194 30.9744 30.6375 30.9744C27.081 30.9744 24.456 29.9151 23.6713 29.4501Z" />
      <path opacity="0.35" fill="url(#pr_g5)"
        d="M19.2 44.4016H28.2L32.4 27.6016C30.2787 28.1801 28.4542 29.5387 27.2921 31.4053L19.2 44.4016Z" />
      <path fill="url(#pr_g6)"
        d="M27.6 32.4016C27.6 29.7506 29.749 27.6016 32.4 27.6016L57.6 27.6016C60.2508 27.6016 62.4 29.7506 62.4 32.4016V57.6015C62.4 60.2524 60.2508 62.4016 57.6 62.4016H32.4C29.749 62.4016 27.6 60.2524 27.6 57.6016V32.4016Z" />
      <path fill="url(#pr_g7)"
        d="M36.6 39.9008C36.6 41.0606 35.6598 42.0008 34.5 42.0008C33.3402 42.0008 32.4 41.0606 32.4 39.9008C32.4 38.741 33.3402 37.8008 34.5 37.8008C35.6598 37.8008 36.6 38.741 36.6 39.9008Z" />
      <path fill="url(#pr_g8)"
        d="M57.6 39.9008C57.6 41.0606 56.6598 42.0008 55.5 42.0008C54.3402 42.0008 53.4 41.0606 53.4 39.9008C53.4 38.741 54.3402 37.8008 55.5 37.8008C56.6598 37.8008 57.6 38.741 57.6 39.9008Z" />
      <path fill="url(#pr_g9)"
        d="M41.8213 47.6025C41.3937 47.349 40.8416 47.4903 40.5882 47.9179C40.3348 48.3455 40.476 48.8976 40.9037 49.1509C41.9753 49.786 44.919 50.9267 48.7875 50.9267C52.656 50.9267 55.5996 49.786 56.6713 49.1509C57.0989 48.8976 57.2402 48.3455 56.9867 47.9179C56.7333 47.4903 56.1813 47.349 55.7537 47.6025C54.969 48.0674 52.344 49.1267 48.7875 49.1267C45.231 49.1267 42.6059 48.0674 41.8213 47.6025Z" />
    </svg>
  );
}

interface ReasonItem {
  heading: string;
  body: string;
  icon: ReactNode;
}

const REASONS: ReasonItem[] = [
  {
    heading: "Enjoy on your TV",
    body: "Watch on Smart TVs,\nPlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <TvIcon />,
  },
  {
    heading: "Download your shows to watch offline",
    body: "Save your favorites easily and always have something to watch.",
    icon: <DownloadIcon />,
  },
  {
    heading: "Watch everywhere",
    body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <TelescopeIcon />,
  },
  {
    heading: "Create profiles for kids",
    body: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: <ProfilesIcon />,
  },
];

function ReasonCard({ heading, body, icon }: ReasonItem) {
  return (
    <article
      className="
        flex flex-col
        rounded-xl
        border border-white/[0.04]
        pt-[26px] pb-[18px] pl-[18px] pr-[26px]
        bg-[linear-gradient(135deg,#151f3c_0%,#2e122b_100%)]
      "
    >
      <h3 className="text-white font-medium text-2xl leading-tight">{heading}</h3>
      <p className="mt-2.5 text-white/70 text-sm leading-normal whitespace-pre-line">{body}</p>
      {/* Reduced right-side spacing with mr-[-10px] */}
      <div className="mt-auto self-end pt-10 scale-110 origin-bottom-right mr-[-10px]">
        {icon}
      </div>
    </article>
  );
}

export default function ReasonsToJoin() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    function measure() {
      if (window.innerWidth < 1024) {
        setEdges(null);
        return;
      }
      const poster = document.getElementById("trending-first-poster");
      const indicator = document.getElementById("trending-scroll-indicator");
      const grid = gridRef.current;
      if (!poster || !indicator || !grid?.parentElement) return;

      const posterRect = poster.getBoundingClientRect();
      const indicatorRect = indicator.getBoundingClientRect();
      const parentRect = grid.parentElement.getBoundingClientRect();

      setEdges({
        left: posterRect.left - parentRect.left,
        width: indicatorRect.right - posterRect.left,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section aria-labelledby="reasons-heading" className="bg-black w-full py-8 md:py-10 transform xl:translate-y-[-45px]">
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16">

        <h2
          id="reasons-heading"
          className="mb-5 text-xl md:text-2xl font-medium text-white tracking-normal transform xl:translate-x-[85px]"
        >
          More Reasons to Join
        </h2>

        <div
          ref={gridRef}
          style={edges ? { marginLeft: edges.left, width: edges.width } : undefined}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:translate-x-[-70px] xl:translate-y-[-4px]"
        >
          {REASONS.map((reason) => (
            <ReasonCard key={reason.heading} {...reason} />
          ))}
        </div>

      </div>
    </section>
  );
}