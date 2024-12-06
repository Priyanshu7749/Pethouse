import React from 'react';

const DefaultAvatar = (props) => {
  return (
    <svg
      enableBackground="new -27 24 100 100"
      height="100px"
      id="unknown"
      viewBox="-27 24 100 100"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g>
          <defs>
            <circle cx={23} cy={74} id="circle" r={50} />
          </defs>
          <use fill="#F5EEE5" overflow="visible" xlinkHref="#circle" />
          <clipPath id="circle_1_">
            <use overflow="visible" xlinkHref="#circle" />
          </clipPath>
          <g clipPath="url(#circle_1_)">
            <defs>
              <path
                d="M36,95.9c0,4,4.7,5.2,7.1,5.8c7.6,2,22.8,5.9,22.8,5.9c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8 c1.3-3.1,3.9-5.5,7.1-6.6c0,0,15.2-3.9,22.8-5.9c2.4-0.6,7.1-1.8,7.1-5.8c0-4,0-10.9,0-10.9h26C36,85,36,91.9,36,95.9z"
                id="shoulders"
              />
            </defs>
            <use fill="#E6C19C" overflow="visible" xlinkHref="#shoulders" />
            <clipPath id="shoulders_1_">
              <use overflow="visible" xlinkHref="#shoulders" />
            </clipPath>
            <path
              clipPath="url(#shoulders_1_)"
              d="M23.2,35c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0 c3.3,0,8.2,0.2,11.4,2c3.3,1.9,7.3,5.6,8.5,12.1c2.4,13.7-2.1,35.4-6.3,42.4c-4,6.7-9.8,9.2-13.5,9.4c0,0-0.1,0-0.1,0 c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-3.7-0.2-9.5-2.7-13.5-9.4c-4.2-7-8.7-28.7-6.3-42.4 c1.2-6.5,5.2-10.2,8.5-12.1c3.2-1.8,8.1-2,11.4-2c0,0,0,0,0,0C23.1,35,23.1,35,23.2,35L23.2,35z"
              fill="#D4B08C"
              id="head-shadow"
            />
          </g>
        </g>
        <path
          d="M22.6,40c19.1,0,20.7,13.8,20.8,15.1c1.1,11.9-3,28.1-6.8,33.7c-4,5.9-9.8,8.1-13.5,8.3 c-0.2,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2,0C18.8,96.8,13,94.6,9,88.7c-3.8-5.6-7.9-21.8-6.8-33.8C2.3,53.7,3.5,40,22.6,40z"
          fill="#F2CEA5"
          id="head"
        />
      </g>
    </svg>
  );
};

export default DefaultAvatar;

