import { SvgIcon } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import * as React from "react";

interface IconPropsInterface {
  color?: string
}

export const NewRide: React.FC<IconPropsInterface> = ({ color = "white" }) => (
  <svg
    width={28}
    height={30}
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0003 24.3335C14.264 24.3335 14.5218 24.2553 14.7411 24.1088C14.9604 23.9623 15.1312 23.754 15.2322 23.5104C15.3331 23.2668 15.3595 22.9987 15.308 22.74C15.2566 22.4814 15.1296 22.2438 14.9431 22.0574C14.7567 21.8709 14.5191 21.7439 14.2604 21.6924C14.0018 21.641 13.7337 21.6674 13.4901 21.7683C13.2464 21.8692 13.0382 22.0401 12.8917 22.2594C12.7452 22.4787 12.667 22.7365 12.667 23.0002C12.667 23.3538 12.8075 23.6929 13.0575 23.943C13.3076 24.193 13.6467 24.3335 14.0003 24.3335ZM20.667 24.3335C20.9307 24.3335 21.1885 24.2553 21.4078 24.1088C21.627 23.9623 21.7979 23.754 21.8988 23.5104C21.9997 23.2668 22.0262 22.9987 21.9747 22.74C21.9233 22.4814 21.7963 22.2438 21.6098 22.0574C21.4233 21.8709 21.1858 21.7439 20.9271 21.6924C20.6685 21.641 20.4004 21.6674 20.1567 21.7683C19.9131 21.8692 19.7049 22.0401 19.5584 22.2594C19.4119 22.4787 19.3337 22.7365 19.3337 23.0002C19.3337 23.3538 19.4741 23.6929 19.7242 23.943C19.9742 24.193 20.3134 24.3335 20.667 24.3335ZM20.667 19.0002C20.9307 19.0002 21.1885 18.922 21.4078 18.7755C21.627 18.6289 21.7979 18.4207 21.8988 18.1771C21.9997 17.9334 22.0262 17.6653 21.9747 17.4067C21.9233 17.1481 21.7963 16.9105 21.6098 16.724C21.4233 16.5375 21.1858 16.4106 20.9271 16.3591C20.6685 16.3077 20.4004 16.3341 20.1567 16.435C19.9131 16.5359 19.7049 16.7068 19.5584 16.9261C19.4119 17.1453 19.3337 17.4031 19.3337 17.6668C19.3337 18.0205 19.4741 18.3596 19.7242 18.6096C19.9742 18.8597 20.3134 19.0002 20.667 19.0002ZM14.0003 19.0002C14.264 19.0002 14.5218 18.922 14.7411 18.7755C14.9604 18.6289 15.1312 18.4207 15.2322 18.1771C15.3331 17.9334 15.3595 17.6653 15.308 17.4067C15.2566 17.1481 15.1296 16.9105 14.9431 16.724C14.7567 16.5375 14.5191 16.4106 14.2604 16.3591C14.0018 16.3077 13.7337 16.3341 13.4901 16.435C13.2464 16.5359 13.0382 16.7068 12.8917 16.9261C12.7452 17.1453 12.667 17.4031 12.667 17.6668C12.667 18.0205 12.8075 18.3596 13.0575 18.6096C13.3076 18.8597 13.6467 19.0002 14.0003 19.0002ZM23.3337 3.00016H22.0003V1.66683C22.0003 1.31321 21.8599 0.974069 21.6098 0.72402C21.3598 0.473972 21.0206 0.333496 20.667 0.333496C20.3134 0.333496 19.9742 0.473972 19.7242 0.72402C19.4741 0.974069 19.3337 1.31321 19.3337 1.66683V3.00016H8.66699V1.66683C8.66699 1.31321 8.52652 0.974069 8.27647 0.72402C8.02642 0.473972 7.68728 0.333496 7.33366 0.333496C6.98004 0.333496 6.6409 0.473972 6.39085 0.72402C6.1408 0.974069 6.00033 1.31321 6.00033 1.66683V3.00016H4.66699C3.60613 3.00016 2.58871 3.42159 1.83857 4.17174C1.08842 4.92188 0.666992 5.9393 0.666992 7.00016V25.6668C0.666992 26.7277 1.08842 27.7451 1.83857 28.4953C2.58871 29.2454 3.60613 29.6668 4.66699 29.6668H23.3337C24.3945 29.6668 25.4119 29.2454 26.1621 28.4953C26.9122 27.7451 27.3337 26.7277 27.3337 25.6668V7.00016C27.3337 5.9393 26.9122 4.92188 26.1621 4.17174C25.4119 3.42159 24.3945 3.00016 23.3337 3.00016ZM24.667 25.6668C24.667 26.0205 24.5265 26.3596 24.2765 26.6096C24.0264 26.8597 23.6873 27.0002 23.3337 27.0002H4.66699C4.31337 27.0002 3.97423 26.8597 3.72418 26.6096C3.47413 26.3596 3.33366 26.0205 3.33366 25.6668V13.6668H24.667V25.6668ZM24.667 11.0002H3.33366V7.00016C3.33366 6.64654 3.47413 6.3074 3.72418 6.05735C3.97423 5.80731 4.31337 5.66683 4.66699 5.66683H6.00033V7.00016C6.00033 7.35378 6.1408 7.69292 6.39085 7.94297C6.6409 8.19302 6.98004 8.3335 7.33366 8.3335C7.68728 8.3335 8.02642 8.19302 8.27647 7.94297C8.52652 7.69292 8.66699 7.35378 8.66699 7.00016V5.66683H19.3337V7.00016C19.3337 7.35378 19.4741 7.69292 19.7242 7.94297C19.9742 8.19302 20.3134 8.3335 20.667 8.3335C21.0206 8.3335 21.3598 8.19302 21.6098 7.94297C21.8599 7.69292 22.0003 7.35378 22.0003 7.00016V5.66683H23.3337C23.6873 5.66683 24.0264 5.80731 24.2765 6.05735C24.5265 6.3074 24.667 6.64654 24.667 7.00016V11.0002ZM7.33366 19.0002C7.59737 19.0002 7.85515 18.922 8.07442 18.7755C8.29368 18.6289 8.46458 18.4207 8.5655 18.1771C8.66642 17.9334 8.69282 17.6653 8.64137 17.4067C8.58993 17.1481 8.46294 16.9105 8.27647 16.724C8.09 16.5375 7.85242 16.4106 7.59378 16.3591C7.33514 16.3077 7.06705 16.3341 6.82341 16.435C6.57978 16.5359 6.37154 16.7068 6.22503 16.9261C6.07852 17.1453 6.00033 17.4031 6.00033 17.6668C6.00033 18.0205 6.1408 18.3596 6.39085 18.6096C6.6409 18.8597 6.98004 19.0002 7.33366 19.0002ZM7.33366 24.3335C7.59737 24.3335 7.85515 24.2553 8.07442 24.1088C8.29368 23.9623 8.46458 23.754 8.5655 23.5104C8.66642 23.2668 8.69282 22.9987 8.64137 22.74C8.58993 22.4814 8.46294 22.2438 8.27647 22.0574C8.09 21.8709 7.85242 21.7439 7.59378 21.6924C7.33514 21.641 7.06705 21.6674 6.82341 21.7683C6.57978 21.8692 6.37154 22.0401 6.22503 22.2594C6.07852 22.4787 6.00033 22.7365 6.00033 23.0002C6.00033 23.3538 6.1408 23.6929 6.39085 23.943C6.6409 24.193 6.98004 24.3335 7.33366 24.3335Z"
      fill="white"
    />
  </svg>
);

export const Ongoing: React.FC<IconPropsInterface> = ({ color = "white" }) => (

  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M14.25 26.5C17.4989 26.5 20.6147 25.2094 22.9121 22.9121C25.2094 20.6147 26.5 17.4989 26.5 14.25C26.5 11.0011 25.2094 7.88526 22.9121 5.58794C20.6147 3.29062 17.4989 2 14.25 2"
      stroke="#999C9F"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <path
      d="M14.25 2C11.0011 2 7.88526 3.29062 5.58794 5.58794C3.29062 7.88526 2 11.0011 2 14.25C2 17.4989 3.29062 20.6147 5.58794 22.9121C7.88526 25.2094 11.0011 26.5 14.25 26.5"
      stroke="#999C9F"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <path
      d="M9.34961 14.2502L12.0586 16.9591C12.2538 17.1544 12.5704 17.1544 12.7657 16.9591L19.1496 10.5752"
      stroke="#999C9F"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </svg>
);



export const History: React.FC<IconPropsInterface> = ({ color = "white" }) => (
  <svg
    width={26}
    height={28}
    viewBox="0 0 26 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M12.2531 0.666504C8.83493 0.676253 5.55107 1.99839 3.07975 4.35984V1.99984C3.07975 1.64622 2.93928 1.30708 2.68923 1.05703C2.43918 0.80698 2.10004 0.666504 1.74642 0.666504C1.3928 0.666504 1.05366 0.80698 0.80361 1.05703C0.553562 1.30708 0.413086 1.64622 0.413086 1.99984V7.99984C0.413086 8.35346 0.553562 8.6926 0.80361 8.94265C1.05366 9.19269 1.3928 9.33317 1.74642 9.33317H7.74642C8.10004 9.33317 8.43918 9.19269 8.68923 8.94265C8.93928 8.6926 9.07975 8.35346 9.07975 7.99984C9.07975 7.64622 8.93928 7.30708 8.68923 7.05703C8.43918 6.80698 8.10004 6.6665 7.74642 6.6665H4.54642C5.76203 5.38252 7.27776 4.42085 8.95726 3.86802C10.6368 3.31519 12.4273 3.18853 14.1679 3.49944C15.9085 3.81035 17.5445 4.54907 18.9288 5.64916C20.313 6.74924 21.4021 8.17618 22.098 9.80161C22.794 11.427 23.0749 13.2 22.9156 14.9609C22.7563 16.7219 22.1617 18.4156 21.1854 19.8898C20.2091 21.3639 18.8816 22.5723 17.3224 23.4061C15.7632 24.2399 14.0212 24.673 12.2531 24.6665C11.8995 24.6665 11.5603 24.807 11.3103 25.057C11.0602 25.3071 10.9198 25.6462 10.9198 25.9998C10.9198 26.3535 11.0602 26.6926 11.3103 26.9426C11.5603 27.1927 11.8995 27.3332 12.2531 27.3332C15.7893 27.3332 19.1807 25.9284 21.6812 23.4279C24.1817 20.9274 25.5864 17.5361 25.5864 13.9998C25.5864 10.4636 24.1817 7.07223 21.6812 4.57175C19.1807 2.07126 15.7893 0.666504 12.2531 0.666504V0.666504ZM12.2531 8.6665C11.8995 8.6665 11.5603 8.80698 11.3103 9.05703C11.0602 9.30708 10.9198 9.64622 10.9198 9.99984V13.9998C10.9198 14.3535 11.0602 14.6926 11.3103 14.9426C11.5603 15.1927 11.8995 15.3332 12.2531 15.3332H14.9198C15.2734 15.3332 15.6125 15.1927 15.8626 14.9426C16.1126 14.6926 16.2531 14.3535 16.2531 13.9998C16.2531 13.6462 16.1126 13.3071 15.8626 13.057C15.6125 12.807 15.2734 12.6665 14.9198 12.6665H13.5864V9.99984C13.5864 9.64622 13.4459 9.30708 13.1959 9.05703C12.9458 8.80698 12.6067 8.6665 12.2531 8.6665Z"
      fill="#032A47"
    />
  </svg>
);

/*export const Logo: React.FC<IconPropsInterface> = ({ color = "white" }) => (
  <svg
    width={99}
    height={50}
    viewBox="0 0 99 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={99} height={50} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_30_4"
          transform="translate(0 0.212907) scale(0.00073046 0.00144631)"
        />
      </pattern>
      <image
        id="image0_30_4"
        width={1369}
        height={397}
        xlinkHref="data:image/png;base64,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tZ1zXUwzrSpXY4yUYVUaME7G84OQtZD9H+9jQkdLxuV+Gcei80dc2cdeplWnmcKRaMeaod1WDr+c4/vQzkQjcAUeJjgXLBeyRlhFcfZiApn3Arv37/Tsq9Unuqu//9Gy3MxbcVPfyPb0JT65/s69oh5f5POJ+YcgvCXXUjIQtsJaZnrI8vjycv+ik1orVnpf6GuvtLnn+LOt9mnZRy3bosZxt+6r2m1rXL7qefxZ2/yaaOenLDeDxt6ro8df4+9HO4+OqtlIYzdTiBOl3bLXTYvjb9U3UedeLQlWmcEvv/zi02owiVkfpBSFrA9Bb472iDChzBK09uqf6N/AnOkboo3LnMce7QZo9Dkq4w2hsXffsUcNNe85rpUflswQ4qzabtHPXVnmBx5SQj8CV8hnhRXqxSHrw6IrPmoec9SwdfTE7Ei7RA8lMoYmq4/LEtFr4x69zlNCmrXH3tFjiPIQMHrdRv/ESFSrttve953hXJVpLluLYJUVCVwhphW3/agSsr4VfWJ2zZ7jNmkhK+OSFrKGiT0Ze0SVeZXuKPee81ZvN97L9MkoyEroCmPYS7lByAoAAAAQgdAV2hCqnhOyAgAAAMsQvMJxQtXPCVkBAACAZQld4T2B6n2ErAAAAABvCF5ZhUC1HiErAAAAwA7CVzITqLYlZAUAAAAoIHwlEmHqGEJWAAAAgEYEsLQgSI1HyAoAAAAwiBCWS4So+QhZAQAAAAITxM5FgDonISsAAADAJASyYwhOEbICAAAAsHxAKyilhJAVAAAAAKDAF40HAAAAAHA/ISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAEABISsAAAAAQAEhKwAAAABAASErAAAAAMC9Hh4e/j9GyeAioDm+xgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);*/

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'logo',
);




