import React, { CSSProperties } from "react";

export function Button({
  styles,
  handleClick,
}: {
  styles?: CSSProperties;
  handleClick: () => void;
}) {
  return (
    <button
      style={{
        width: "4rem",
        height: "4rem",
        background: "#ffffff",
        boxShadow:
          "0px 1px 4px rgba(16, 24, 40, 0.06),0px 0px 4px 1px rgba(16, 24, 40, 0.1)",
        border: "none",
        borderRadius: "100%",
        flex: "none",
        order: 0,
        flexGrow: 0,
        cursor: "pointer",
        ...styles,
      }}
      onClick={handleClick}
    >
      <svg
        width="42"
        height="38"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.2549 11.7966C29.1355 12.0809 30.9579 12.665 32.6521 13.5265C32.5906 11.9374 32.2385 8.95217 30.3118 5.94313C29.4516 4.59921 27.6913 1.8569 24.2572 0.698005C21.8576 -0.106754 19.7999 0.234899 19.4057 0.330244C18.0848 0.648087 16.8284 1.18942 15.6913 1.93068C12.1 4.27799 10.8797 7.917 10.5185 9.18373C9.08806 13.3221 9.08806 17.8182 10.5185 21.9566C12.0692 25.6013 13.4992 28.5343 16.171 31.196C17.8107 30.6094 19.3239 29.7186 20.6305 28.5706C19.2257 27.2777 16.1311 24.0598 15.0852 18.9986C14.9553 18.3675 14.0894 13.9158 15.8018 9.96806C16.8273 7.60826 19.0103 4.87276 21.9089 5.40284C25.6597 6.08841 27.1455 11.3869 27.2549 11.7966Z"
          fill="url(#paint0_linear_234_542)"
        />
        <path
          d="M27.2549 11.7966C29.1355 12.0809 30.9579 12.665 32.6521 13.5265C32.5906 11.9374 32.2385 8.95217 30.3118 5.94313C29.4516 4.59921 27.6913 1.8569 24.2572 0.698005C21.8576 -0.106754 19.7999 0.234899 19.4057 0.330244C18.0848 0.648087 16.8284 1.18942 15.6913 1.93068C12.1 4.27799 10.8797 7.917 10.5185 9.18373C9.08806 13.3221 9.08806 17.8182 10.5185 21.9566C12.0692 25.6013 13.4992 28.5343 16.171 31.196C17.8107 30.6094 19.3239 29.7186 20.6305 28.5706C19.2257 27.2777 16.1311 24.0598 15.0852 18.9986C14.9553 18.3675 14.0894 13.9158 15.8018 9.96806C16.8273 7.60826 19.0103 4.87276 21.9089 5.40284C25.6597 6.08841 27.1455 11.3869 27.2549 11.7966Z"
          fill="url(#paint1_linear_234_542)"
        />
        <path
          d="M41.9255 26.2085C42.0487 27.7161 41.8856 29.2333 41.4447 30.6807C40.4717 33.2539 38.5302 34.7771 37.417 35.5036C35.535 36.538 33.4599 37.1766 31.3202 37.3798C26.9826 37.7793 23.6647 36.2447 22.3032 35.5092C23.9845 34.5691 25.5062 33.37 26.8117 31.9565C28.2307 32.2629 29.6878 32.3559 31.1345 32.2323C33.7425 32.0053 36.2446 30.8702 36.8439 28.0916C36.9302 27.3472 36.8998 26.594 36.7539 25.8589C36.379 24.002 35.2351 22.4276 33.8166 21.2052C32.4846 20.0588 30.9248 19.1882 29.3126 18.4969C28.0399 17.951 26.7182 17.4856 25.3407 17.2926C23.9826 17.1019 22.5732 17.0656 21.2025 17.0588C20.9169 17.0588 20.6317 17.0588 20.3468 17.0588C18.7109 17.0909 17.078 17.2125 15.4555 17.4231C15.2864 15.7165 15.3531 13.9949 15.6537 12.3063C25.9081 10.8035 35.267 13.5991 39.5807 20.128C40.4911 21.515 41.4607 23.4923 41.9255 26.2085Z"
          fill="url(#paint2_linear_234_542)"
        />
        <path
          d="M41.9255 26.2085C42.0487 27.7161 41.8856 29.2333 41.4447 30.6807C40.4717 33.2539 38.5302 34.7771 37.417 35.5036C35.535 36.538 33.4599 37.1766 31.3202 37.3798C26.9826 37.7793 23.6647 36.2447 22.3032 35.5092C23.9845 34.5691 25.5062 33.37 26.8117 31.9565C28.2307 32.2629 29.6878 32.3559 31.1345 32.2323C33.7425 32.0053 36.2446 30.8702 36.8439 28.0916C36.9302 27.3472 36.8998 26.594 36.7539 25.8589C36.379 24.002 35.2351 22.4276 33.8166 21.2052C32.4846 20.0588 30.9248 19.1882 29.3126 18.4969C28.0399 17.951 26.7182 17.4856 25.3407 17.2926C23.9826 17.1019 22.5732 17.0656 21.2025 17.0588C20.9169 17.0588 20.6317 17.0588 20.3468 17.0588C18.7109 17.0909 17.078 17.2125 15.4555 17.4231C15.2864 15.7165 15.3531 13.9949 15.6537 12.3063C25.9081 10.8035 35.267 13.5991 39.5807 20.128C40.4911 21.515 41.4607 23.4923 41.9255 26.2085Z"
          fill="url(#paint3_linear_234_542)"
        />
        <path
          d="M24.7665 32.8157C29.8869 28.4219 31.5298 22.8873 32.0585 20.7909C30.6071 19.8435 29.0535 19.0614 27.4269 18.4595C27.043 20.2404 25.4251 26.7102 19.4946 30.3424C18.017 31.2389 16.4032 31.8906 14.716 32.272C12.9239 32.5992 11.087 32.5992 9.29487 32.272C7.13917 31.6284 6.3154 30.4071 6.06701 29.9894C4.60291 27.5195 5.69785 23.4197 9.29487 20.5162C8.81692 18.6412 8.61768 16.7065 8.70353 14.7739C5.22207 16.6849 2.50114 19.7244 0.99222 23.3879C0.739278 24.145 -0.671273 28.5797 1.75674 32.6648C3.22768 34.7147 4.82623 35.8168 5.99979 36.4309C11.2922 39.2039 18.6298 37.7532 24.7665 32.8157Z"
          fill="url(#paint4_linear_234_542)"
        />
        <path
          d="M24.7665 32.8157C29.8869 28.4219 31.5298 22.8873 32.0585 20.7909C30.6071 19.8435 29.0535 19.0614 27.4269 18.4595C27.043 20.2404 25.4251 26.7102 19.4946 30.3424C18.017 31.2389 16.4032 31.8906 14.716 32.272C12.9239 32.5992 11.087 32.5992 9.29487 32.272C7.13917 31.6284 6.3154 30.4071 6.06701 29.9894C4.60291 27.5195 5.69785 23.4197 9.29487 20.5162C8.81692 18.6412 8.61768 16.7065 8.70353 14.7739C5.22207 16.6849 2.50114 19.7244 0.99222 23.3879C0.739278 24.145 -0.671273 28.5797 1.75674 32.6648C3.22768 34.7147 4.82623 35.8168 5.99979 36.4309C11.2922 39.2039 18.6298 37.7532 24.7665 32.8157Z"
          fill="url(#paint5_linear_234_542)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_234_542"
            x1="12.8925"
            y1="5.13859"
            x2="40.4004"
            y2="32.2669"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50BEBA" />
            <stop offset="1" stopColor="#1C0F90" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_234_542"
            x1="7.39719"
            y1="37.8225"
            x2="36.403"
            y2="19.2248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#450E81" />
            <stop offset="0.995673" stopColor="#4A1A7F" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_234_542"
            x1="12.8925"
            y1="5.13859"
            x2="40.4004"
            y2="32.2669"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50BEBA" />
            <stop offset="1" stopColor="#1C0F90" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_234_542"
            x1="7.39719"
            y1="37.8225"
            x2="36.403"
            y2="19.2248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#450E81" />
            <stop offset="0.995673" stopColor="#4A1A7F" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_234_542"
            x1="12.8925"
            y1="5.13859"
            x2="40.4004"
            y2="32.2669"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#50BEBA" />
            <stop offset="1" stopColor="#1C0F90" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_234_542"
            x1="7.39719"
            y1="37.8225"
            x2="36.403"
            y2="19.2248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#450E81" />
            <stop offset="0.995673" stopColor="#4A1A7F" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
