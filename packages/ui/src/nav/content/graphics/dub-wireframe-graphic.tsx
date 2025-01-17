import { cn } from "@dub/utils";
import { SVGProps, useId } from "react";

export function DubWireframeGraphic({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="247"
      height="114"
      viewBox="0 0 247 114"
      fill="none"
      className={cn("", className)}
      {...rest}
    >
      <path
        stroke="#fff"
        strokeWidth="0.089"
        d="M147.901 0v113.578M141.661 0v113.578M132.924 0v113.578M108.854 0v113.578M100.116 0v113.578M93.876 0v113.578M85.139 0v113.578M52.509 0v113.578M156.639 0v113.578M189.267 0v113.578m56.79-85.496H0M246.057 43.06H0m246.057 41.544H0"
        opacity="0.3"
      />
      <g opacity="0.5">
        <mask
          id={`${id}-a`}
          width="187"
          height="89"
          x="27"
          y="12"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <ellipse
            cx="120.71"
            cy="56.432"
            fill="#D9D9D9"
            rx="92.717"
            ry="44.041"
          />
        </mask>
        <g stroke="#fff" strokeWidth="0.089" mask={`url(#${id}-a)`}>
          <path d="M147.901 0v113.578M141.661 0v113.578M132.924 0v113.578M108.853 0v113.578M100.116 0v113.578M93.876 0v113.578M85.139 0v113.578M52.509 0v113.578M156.639 0v113.578M189.267 0v113.578m56.789-85.496H-.001M246.056 43.06H-.001m246.057 41.544H-.001" />
        </g>
      </g>
      <g filter={`url(#${id}-b)`} opacity="0.3">
        <path
          fill="#fff"
          fillOpacity="0.077"
          fillRule="evenodd"
          d="M147.733 29.33c0-.787.639-1.426 1.427-1.426h6.094c.788 0 1.427.639 1.427 1.427V46.57a20.77 20.77 0 0 1 11.93-3.745c11.531 0 20.878 9.353 20.878 20.89s-9.347 20.89-20.878 20.89c-11.53 0-20.878-9.353-20.878-20.89zm20.878 46.32c6.588 0 11.93-5.343 11.93-11.936 0-6.592-5.342-11.936-11.93-11.936-6.589 0-11.931 5.344-11.931 11.936 0 6.593 5.342 11.937 11.931 11.937M85.099 29.33c0-.787.639-1.426 1.427-1.426h6.095c.787 0 1.426.639 1.426 1.427v34.166a20 20 0 0 1 0 .436v19.245c0 .788-.639 1.426-1.426 1.426h-6.095a1.426 1.426 0 0 1-1.427-1.426V80.86a20.77 20.77 0 0 1-11.93 3.743c-11.53 0-20.877-9.352-20.877-20.89 0-11.536 9.347-20.889 20.878-20.889 4.435 0 8.548 1.384 11.93 3.744zM73.17 75.652c6.589 0 11.93-5.344 11.93-11.936 0-6.593-5.341-11.937-11.93-11.937s-11.93 5.344-11.93 11.937S66.58 75.65 73.17 75.65m28.27-32.826c-.788 0-1.427.639-1.427 1.427v19.463a20.9 20.9 0 0 0 6.116 14.77 20.87 20.87 0 0 0 29.526 0 20.9 20.9 0 0 0 6.115-14.77h-.001V44.252c0-.788-.639-1.427-1.427-1.427h-6.095c-.787 0-1.426.639-1.426 1.427v19.463a11.94 11.94 0 0 1-3.494 8.44 11.929 11.929 0 0 1-20.366-8.44V44.252c0-.788-.639-1.427-1.426-1.427z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={`url(#${id}-c)`}
        fillOpacity="0.4"
        stroke={`url(#${id}-d)`}
        strokeWidth="0.233"
        d="M93.926 63.996v20.577H85.21v-3.85l-.183.127a20.66 20.66 0 0 1-11.865 3.723c-11.468 0-20.765-9.302-20.765-20.776s9.297-20.776 20.765-20.776a20.66 20.66 0 0 1 11.865 3.723l.183.128V28.098h8.716v35.898Zm53.925-.199V28.098h8.717v18.775l.182-.128a20.66 20.66 0 0 1 11.866-3.724c11.468 0 20.765 9.302 20.765 20.776s-9.297 20.776-20.765 20.776-20.765-9.301-20.765-20.776Zm-6.198 0v.116h.001a20.8 20.8 0 0 1-6.082 14.575 20.757 20.757 0 0 1-29.366 0 20.79 20.79 0 0 1-6.082-14.69V43.02h8.717v20.776a12.047 12.047 0 1 0 24.096 0V43.021h8.716zM73.162 75.851c6.654 0 12.048-5.397 12.048-12.054 0-6.658-5.394-12.055-12.048-12.055S61.114 57.14 61.114 63.797 66.508 75.85 73.162 75.85Zm95.454 0c6.654 0 12.048-5.397 12.048-12.054 0-6.658-5.394-12.055-12.048-12.055s-12.048 5.397-12.048 12.055 5.394 12.054 12.048 12.054Z"
      />
      <circle
        cx="85.073"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="147.866"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="147.866"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="46.665"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="51.781"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="84.806"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="180.426"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="189.496"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="99.957"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="99.957"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="120.888"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="112.516"
        cy="72.247"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="101.586"
        cy="71.782"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="139.959"
        cy="71.782"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="129.494"
        cy="72.247"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="120.888"
        cy="84.806"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="141.82"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="141.82"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="51.781"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="46.665"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="61.118"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="52.281"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="120.889"
          x2="120.889"
          y1="27.982"
          y2="84.689"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id={`${id}-d`}
          x1="120.889"
          x2="120.889"
          y1="27.982"
          y2="84.689"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5B5B" />
          <stop offset="1" stopColor="#757575" />
        </linearGradient>
        <filter
          id={`${id}-b`}
          width="154.246"
          height="73.748"
          x="43.768"
          y="19.38"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.262" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_7_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_7_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-0.991" dy="0.991" />
          <feGaussianBlur stdDeviation="0.496" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.354 0" />
          <feBlend in2="shape" result="effect2_innerShadow_7_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="0.991" dy="-0.991" />
          <feGaussianBlur stdDeviation="0.496" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.84 0 0 0 0 0.84 0 0 0 0 0.84 0 0 0 0.354 0" />
          <feBlend
            in2="effect2_innerShadow_7_2"
            result="effect3_innerShadow_7_2"
          />
          <feGaussianBlur
            result="effect4_foregroundBlur_7_2"
            stdDeviation="0.357"
          />
        </filter>
      </defs>
    </svg>
  );
}