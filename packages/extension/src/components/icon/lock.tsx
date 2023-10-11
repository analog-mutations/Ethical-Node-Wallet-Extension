import React, { FunctionComponent } from "react";
import { IconProps } from "./types";

export const LockIcon: FunctionComponent<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
  color,
}) => {
  return (
    <svg
      style={{ border: `1.5px solid #ededed`, borderRadius: `6px` }}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color || "currentColor"}
        d="M24.448 0.0078125C25.8853 0.35709 27.3989 0.538197 28.76 1.08439C33.2431 2.88109 36.1423 6.187 37.5279 10.8095C37.9835 12.3216 38.1215 13.8783 38.1172 15.4551C38.1057 19.3359 38.1172 23.2168 38.1172 27.0976V27.8408H40.3494C41.2492 27.8408 42.1476 27.8408 43.0459 27.8408C44.0219 27.8408 44.3108 28.1282 44.3122 29.1042C44.3122 34.4416 44.3122 39.778 44.3122 45.1135C44.3122 46.926 44.3841 48.737 43.8968 50.5237C42.6463 55.1232 38.4622 58.5369 33.6988 58.731C31.8662 58.8043 30.0278 58.7597 28.1923 58.7611C22.6642 58.7611 17.1361 58.8158 11.611 58.7453C6.75557 58.6835 3.20099 56.4197 1.02915 52.0602C0.310469 50.6013 0.00143735 49.0288 0 47.4003C0 41.3174 0 35.2355 0 29.1545C0 28.3108 0.402459 27.8954 1.24619 27.8436C1.45604 27.8307 1.66733 27.8436 1.87719 27.8436H31.8892C31.9135 27.7144 31.9303 27.5839 31.9395 27.4527C31.9395 23.1119 31.984 18.7696 31.9035 14.4288C31.8216 9.99743 28.0529 6.30199 23.6229 6.21431C22.0418 6.18269 20.4607 6.08926 18.894 6.51903C17.0838 7.01459 15.4779 8.07286 14.3085 9.54093C13.1391 11.009 12.4668 12.8108 12.3886 14.6861C12.367 15.2711 12.3886 15.859 12.3886 16.477H6.22231C6.10157 14.3497 6.23956 12.28 6.95824 10.2964C8.86992 5.02418 12.5884 1.73551 18.0144 0.37865C18.6885 0.203293 19.3928 0.127113 20.0827 0.0078125H24.448ZM2.07842 29.9321C2.06979 30.1175 2.05973 30.2296 2.05973 30.3432C2.05973 36.0409 2.0626 41.7385 2.06835 47.4362C2.06812 48.0855 2.13897 48.7328 2.27965 49.3666C2.73684 51.4395 3.8863 53.2949 5.53877 54.6274C7.19124 55.9598 9.24819 56.6898 11.3709 56.6971C18.6372 56.7345 25.9031 56.7311 33.1684 56.687C34.161 56.676 35.1455 56.5066 36.0848 56.1854C39.8593 54.8918 42.2223 51.5011 42.2396 47.4103C42.2654 41.7515 42.2467 36.0912 42.2396 30.4323C42.2396 30.2685 42.2151 30.106 42.2022 29.9393L2.07842 29.9321ZM36.0374 27.8077C36.0474 27.6223 36.0632 27.4714 36.0632 27.3204C36.0632 23.247 36.0632 19.1735 36.0632 15.1029C36.0584 14.4344 36.0133 13.7667 35.9281 13.1036C35.3086 8.09581 31.5039 3.80243 26.6083 2.50881C24.918 2.06179 23.2061 2.06036 21.4856 2.0776C16.7006 2.1236 12.9808 4.13158 10.4093 8.17774C9.21201 10.0621 8.59826 12.1535 8.44159 14.4144H10.4754C10.5128 14.1543 10.543 13.93 10.5775 13.7058C10.612 13.4816 10.6436 13.2516 10.6925 13.0274C11.598 8.87342 13.9524 5.9599 18.0489 4.62891C20.2998 3.88867 22.657 3.98641 24.9697 4.28107C29.8266 4.89913 33.8626 9.37937 33.9532 14.2764C34.0337 18.5583 33.9863 22.8431 33.9949 27.1264C33.9949 27.3477 33.9949 27.5677 33.9949 27.8077H36.0374Z"
        fill="#EDEDED"
      />
      <path
        stroke={color || "currentColor"}
        d="M18.5499 47.5195C18.5499 46.716 18.5226 45.9111 18.5585 45.109C18.5767 44.8652 18.5418 44.6203 18.4562 44.3912C18.3706 44.1622 18.2363 43.9544 18.0626 43.7823C17.2813 42.9586 16.7686 41.9171 16.5922 40.7955C16.1926 38.1666 18.4378 35.3968 21.0882 35.1108C24.0937 34.7845 26.6062 36.9434 26.8233 39.8152C26.9512 41.5013 26.3202 42.8826 25.0985 44.0037C24.9696 44.1112 24.8679 44.2474 24.8015 44.4015C24.7351 44.5556 24.7058 44.7231 24.7161 44.8905C24.7291 46.6499 24.7262 48.4106 24.7161 50.1699C24.7161 51.3026 24.4617 51.5455 23.3276 51.5469C22.1936 51.5484 21.071 51.5469 19.9427 51.5469C18.9509 51.5397 18.547 51.1373 18.5412 50.1599C18.5456 49.2788 18.5499 48.3991 18.5499 47.5195ZM22.6693 49.4613C22.6693 47.8026 22.7125 46.1971 22.6521 44.5973C22.6176 43.7047 22.8806 43.1025 23.6252 42.5721C24.6486 41.8419 24.9892 40.7438 24.7233 39.5235C24.4186 38.1235 23.296 37.2237 21.8673 37.1331C20.6053 37.0541 19.3059 37.9064 18.8488 39.1081C18.603 39.7356 18.5729 40.4271 18.7631 41.0737C18.9533 41.7204 19.3531 42.2854 19.8995 42.6799C20.1371 42.838 20.3287 43.0561 20.4549 43.312C20.5811 43.5679 20.6374 43.8527 20.6182 44.1374C20.5938 45.7041 20.6096 47.2722 20.6182 48.8404C20.6182 49.0416 20.6369 49.2428 20.647 49.4613H22.6693Z"
        fill="#EDEDED"
      />
    </svg>
  );
};
