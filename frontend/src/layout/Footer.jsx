import React from "react";
import Button from "../components/ui/Button";

export default function Footer() {
  return (
    <>
      <footer className="hc-Background--secondary">
        <div className="flex flex-col py-20 md:flex-row">
          <div className="flex grow flex-col">
            <p className="font-bold">Join our newsletter</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <form>
            <div className="relative mr-8 flex flex-col items-start">
              <input
                className="my-3 min-h-16 min-w-full rounded-full py-2 pl-6 md:my-0 md:min-w-[24rem]"
                type="email"
                name="email"
                maxLength="256"
                placeholder="Enter your email"
                required
              ></input>
              <Button
                className="left-64 top-1 min-w-full md:absolute md:min-w-fit"
                type="submit"
                data-wait="Please wait..."
              >
                Get Started
              </Button>
              <p className="pt-3 text-fs-xs">
                By clicking Sign Up you're confirming that you agree with our
                Terms and Conditions.
              </p>
            </div>
          </form>
        </div>

        <div className="siteMap grid grid-flow-row grid-cols-1 justify-evenly gap-6 border-b-2 border-b-white pb-20 md:grid-cols-3 lg:grid-cols-6">
          <svg className="inline-flex h-9 max-w-48 md:col-span-3 lg:col-span-1">
            <path
              d="M0.5 31.7372V17.7234C0.5 17.5651 0.556633 17.412 0.659664 17.2918L7.00394 9.89018C7.25304 9.59957 7.69574 9.57956 7.97004 9.84651L24.8459 26.2703C25.2749 26.6878 25.9937 26.3682 25.9712 25.77L25.712 18.901C25.7056 18.7325 25.6353 18.5728 25.5153 18.4543L12.4151 5.51182C12.1534 5.25329 12.1521 4.83118 12.4122 4.57107L16.1188 0.864442C16.3759 0.607367 16.792 0.605177 17.0518 0.859532L32.3008 15.7908C32.4282 15.9156 32.5 16.0864 32.5 16.2647V31.7372C32.5 32.1035 32.2031 32.4004 31.8368 32.4004H21.6614C21.4882 32.4004 21.3218 32.3326 21.1979 32.2115L7.92727 19.2425C7.50732 18.8321 6.80052 19.1296 6.80052 19.7168V26.8081C6.80052 26.991 6.87602 27.1658 7.00919 27.2911L11.22 31.2542C11.6574 31.6659 11.3661 32.4004 10.7655 32.4004H1.16321C0.79693 32.4004 0.5 32.1035 0.5 31.7372Z"
              fill="#078939"
              stroke="#F7FCF9"
              strokeWidth="0.331606"
            ></path>
            <path
              d="M40.32 23.4004L46.56 9.40039H49.76L56.02 23.4004H52.62L47.5 11.0404H48.78L43.64 23.4004H40.32ZM43.44 20.4004L44.3 17.9404H51.5L52.38 20.4004H43.44ZM57.2525 23.4004V12.6404H60.3725V23.4004H57.2525ZM58.8125 11.1404C58.2392 11.1404 57.7725 10.9737 57.4125 10.6404C57.0525 10.3071 56.8725 9.89372 56.8725 9.40039C56.8725 8.90706 57.0525 8.49372 57.4125 8.16039C57.7725 7.82706 58.2392 7.66039 58.8125 7.66039C59.3858 7.66039 59.8525 7.82039 60.2125 8.14039C60.5725 8.44706 60.7525 8.84706 60.7525 9.34039C60.7525 9.86039 60.5725 10.2937 60.2125 10.6404C59.8658 10.9737 59.3992 11.1404 58.8125 11.1404ZM63.2681 23.4004V12.6404H66.2481V15.6804L65.8281 14.8004C66.1481 14.0404 66.6615 13.4671 67.3681 13.0804C68.0748 12.6804 68.9348 12.4804 69.9481 12.4804V15.3604C69.8148 15.3471 69.6948 15.3404 69.5881 15.3404C69.4815 15.3271 69.3681 15.3204 69.2481 15.3204C68.3948 15.3204 67.7015 15.5671 67.1681 16.0604C66.6481 16.5404 66.3881 17.2937 66.3881 18.3204V23.4004H63.2681ZM74.9642 15.0404H81.7042V17.5604H74.9642V15.0404ZM75.2042 20.8004H82.8242V23.4004H71.9842V9.40039H82.5642V12.0004H75.2042V20.8004ZM88.7436 23.5604C87.8236 23.5604 86.9369 23.4537 86.0836 23.2404C85.2436 23.0137 84.5769 22.7337 84.0836 22.4004L85.1236 20.1604C85.6169 20.4671 86.1969 20.7204 86.8636 20.9204C87.5436 21.1071 88.2103 21.2004 88.8636 21.2004C89.5836 21.2004 90.0903 21.1137 90.3836 20.9404C90.6903 20.7671 90.8436 20.5271 90.8436 20.2204C90.8436 19.9671 90.7236 19.7804 90.4836 19.6604C90.2569 19.5271 89.9503 19.4271 89.5636 19.3604C89.1769 19.2937 88.7503 19.2271 88.2836 19.1604C87.8303 19.0937 87.3703 19.0071 86.9036 18.9004C86.4369 18.7804 86.0103 18.6071 85.6236 18.3804C85.2369 18.1537 84.9236 17.8471 84.6836 17.4604C84.4569 17.0737 84.3436 16.5737 84.3436 15.9604C84.3436 15.2804 84.5369 14.6804 84.9236 14.1604C85.3236 13.6404 85.8969 13.2337 86.6436 12.9404C87.3903 12.6337 88.2836 12.4804 89.3236 12.4804C90.0569 12.4804 90.8036 12.5604 91.5636 12.7204C92.3236 12.8804 92.9569 13.1137 93.4636 13.4204L92.4236 15.6404C91.9036 15.3337 91.3769 15.1271 90.8436 15.0204C90.3236 14.9004 89.8169 14.8404 89.3236 14.8404C88.6303 14.8404 88.1236 14.9337 87.8036 15.1204C87.4836 15.3071 87.3236 15.5471 87.3236 15.8404C87.3236 16.1071 87.4369 16.3071 87.6636 16.4404C87.9036 16.5737 88.2169 16.6804 88.6036 16.7604C88.9903 16.8404 89.4103 16.9137 89.8636 16.9804C90.3303 17.0337 90.7969 17.1204 91.2636 17.2404C91.7303 17.3604 92.1503 17.5337 92.5236 17.7604C92.9103 17.9737 93.2236 18.2737 93.4636 18.6604C93.7036 19.0337 93.8236 19.5271 93.8236 20.1404C93.8236 20.8071 93.6236 21.4004 93.2236 21.9204C92.8236 22.4271 92.2436 22.8271 91.4836 23.1204C90.7369 23.4137 89.8236 23.5604 88.7436 23.5604ZM100.149 23.5604C98.8819 23.5604 97.8953 23.2404 97.1886 22.6004C96.4819 21.9471 96.1286 20.9804 96.1286 19.7004V10.2604H99.2486V19.6604C99.2486 20.1137 99.3686 20.4671 99.6086 20.7204C99.8486 20.9604 100.175 21.0804 100.589 21.0804C101.082 21.0804 101.502 20.9471 101.849 20.6804L102.689 22.8804C102.369 23.1071 101.982 23.2804 101.529 23.4004C101.089 23.5071 100.629 23.5604 100.149 23.5604ZM94.4686 15.2804V12.8804H101.929V15.2804H94.4686ZM111.04 23.4004V21.3004L110.84 20.8404V17.0804C110.84 16.4137 110.633 15.8937 110.22 15.5204C109.82 15.1471 109.2 14.9604 108.36 14.9604C107.787 14.9604 107.22 15.0537 106.66 15.2404C106.113 15.4137 105.647 15.6537 105.26 15.9604L104.14 13.7804C104.727 13.3671 105.433 13.0471 106.26 12.8204C107.087 12.5937 107.927 12.4804 108.78 12.4804C110.42 12.4804 111.693 12.8671 112.6 13.6404C113.507 14.4137 113.96 15.6204 113.96 17.2604V23.4004H111.04ZM107.76 23.5604C106.92 23.5604 106.2 23.4204 105.6 23.1404C105 22.8471 104.54 22.4537 104.22 21.9604C103.9 21.4671 103.74 20.9137 103.74 20.3004C103.74 19.6604 103.893 19.1004 104.2 18.6204C104.52 18.1404 105.02 17.7671 105.7 17.5004C106.38 17.2204 107.267 17.0804 108.36 17.0804H111.22V18.9004H108.7C107.967 18.9004 107.46 19.0204 107.18 19.2604C106.913 19.5004 106.78 19.8004 106.78 20.1604C106.78 20.5604 106.933 20.8804 107.24 21.1204C107.56 21.3471 107.993 21.4604 108.54 21.4604C109.06 21.4604 109.527 21.3404 109.94 21.1004C110.353 20.8471 110.653 20.4804 110.84 20.0004L111.32 21.4404C111.093 22.1337 110.68 22.6604 110.08 23.0204C109.48 23.3804 108.707 23.5604 107.76 23.5604ZM121.184 23.5604C119.917 23.5604 118.93 23.2404 118.224 22.6004C117.517 21.9471 117.164 20.9804 117.164 19.7004V10.2604H120.284V19.6604C120.284 20.1137 120.404 20.4671 120.644 20.7204C120.884 20.9604 121.21 21.0804 121.624 21.0804C122.117 21.0804 122.537 20.9471 122.884 20.6804L123.724 22.8804C123.404 23.1071 123.017 23.2804 122.564 23.4004C122.124 23.5071 121.664 23.5604 121.184 23.5604ZM115.504 15.2804V12.8804H122.964V15.2804H115.504ZM130.483 23.5604C129.256 23.5604 128.176 23.3204 127.243 22.8404C126.323 22.3604 125.61 21.7071 125.103 20.8804C124.596 20.0404 124.343 19.0871 124.343 18.0204C124.343 16.9404 124.59 15.9871 125.083 15.1604C125.59 14.3204 126.276 13.6671 127.143 13.2004C128.01 12.7204 128.99 12.4804 130.083 12.4804C131.136 12.4804 132.083 12.7071 132.923 13.1604C133.776 13.6004 134.45 14.2404 134.943 15.0804C135.436 15.9071 135.683 16.9004 135.683 18.0604C135.683 18.1804 135.676 18.3204 135.663 18.4804C135.65 18.6271 135.636 18.7671 135.623 18.9004H126.883V17.0804H133.983L132.783 17.6204C132.783 17.0604 132.67 16.5737 132.443 16.1604C132.216 15.7471 131.903 15.4271 131.503 15.2004C131.103 14.9604 130.636 14.8404 130.103 14.8404C129.57 14.8404 129.096 14.9604 128.683 15.2004C128.283 15.4271 127.97 15.7537 127.743 16.1804C127.516 16.5937 127.403 17.0871 127.403 17.6604V18.1404C127.403 18.7271 127.53 19.2471 127.783 19.7004C128.05 20.1404 128.416 20.4804 128.883 20.7204C129.363 20.9471 129.923 21.0604 130.563 21.0604C131.136 21.0604 131.636 20.9737 132.063 20.8004C132.503 20.6271 132.903 20.3671 133.263 20.0204L134.923 21.8204C134.43 22.3804 133.81 22.8137 133.063 23.1204C132.316 23.4137 131.456 23.5604 130.483 23.5604ZM141.38 23.5604C140.46 23.5604 139.574 23.4537 138.72 23.2404C137.88 23.0137 137.214 22.7337 136.72 22.4004L137.76 20.1604C138.254 20.4671 138.834 20.7204 139.5 20.9204C140.18 21.1071 140.847 21.2004 141.5 21.2004C142.22 21.2004 142.727 21.1137 143.02 20.9404C143.327 20.7671 143.48 20.5271 143.48 20.2204C143.48 19.9671 143.36 19.7804 143.12 19.6604C142.894 19.5271 142.587 19.4271 142.2 19.3604C141.814 19.2937 141.387 19.2271 140.92 19.1604C140.467 19.0937 140.007 19.0071 139.54 18.9004C139.074 18.7804 138.647 18.6071 138.26 18.3804C137.874 18.1537 137.56 17.8471 137.32 17.4604C137.094 17.0737 136.98 16.5737 136.98 15.9604C136.98 15.2804 137.174 14.6804 137.56 14.1604C137.96 13.6404 138.534 13.2337 139.28 12.9404C140.027 12.6337 140.92 12.4804 141.96 12.4804C142.694 12.4804 143.44 12.5604 144.2 12.7204C144.96 12.8804 145.594 13.1137 146.1 13.4204L145.06 15.6404C144.54 15.3337 144.014 15.1271 143.48 15.0204C142.96 14.9004 142.454 14.8404 141.96 14.8404C141.267 14.8404 140.76 14.9337 140.44 15.1204C140.12 15.3071 139.96 15.5471 139.96 15.8404C139.96 16.1071 140.074 16.3071 140.3 16.4404C140.54 16.5737 140.854 16.6804 141.24 16.7604C141.627 16.8404 142.047 16.9137 142.5 16.9804C142.967 17.0337 143.434 17.1204 143.9 17.2404C144.367 17.3604 144.787 17.5337 145.16 17.7604C145.547 17.9737 145.86 18.2737 146.1 18.6604C146.34 19.0337 146.46 19.5271 146.46 20.1404C146.46 20.8071 146.26 21.4004 145.86 21.9204C145.46 22.4271 144.88 22.8271 144.12 23.1204C143.374 23.4137 142.46 23.5604 141.38 23.5604Z"
              fill="#078939"
            ></path>
          </svg>
          <div>
            <p className="font-bold">Page</p>
            <ul>
              <li>Home v1</li>
              <li>Home v2</li>
              <li>Properties</li>
              <li>Properties Single</li>
              <li>New listing</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Page</p>
            <ul>
              <li>Price reduced</li>
              <li>Land</li>
              <li>Construction</li>
              <li>Shared ownership</li>
              <li>Rent</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Page</p>
            <ul>
              <li>Sell</li>
              <li>About Us</li>
              <li>Agent (CMS)</li>
              <li>Blog</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Page</p>
            <ul>
              <li>Product/Shop</li>
              <li>Contact Us</li>
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Demo</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Page</p>
            <ul>
              <li>Instructions</li>
              <li>404 Not Found</li>
              <li>Protected Password</li>
              <li>Changelog</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Licenses</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col py-8 lg:flex-row">
          <div className="order-2 flex grow flex-col gap-6 md:flex-row lg:order-1">
            <p className="order-2 md:order-1">
              © 2024 Created by AirDokan & Powered by Webflow.
            </p>
            <a className="underline underline-offset-1 md:order-2" href="#">
              Privacy Policy
            </a>
            <a className="underline underline-offset-1 md:order-3" href="#">
              Terms of Service
            </a>
            <a className="underline underline-offset-1 md:order-4" href="#">
              Cookies Settings
            </a>
          </div>
          <div className="order-1 mb-6 flex space-x-3 lg:order-2 lg:mb-0">
            <svg
              className="size-7"
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                  <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"></path>
                </g>
              </g>
            </svg>
            <svg
              className="size-7"
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                  <path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401 C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"></path>
                </g>
              </g>
            </svg>
            <svg
              className="size-7"
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                  <path d="M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12 c-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6 c0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5 c-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7 c0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z"></path>
                </g>
              </g>
            </svg>
            <svg
              className="size-7"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                  <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect>
                  <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>
                  <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path>
                </g>
              </g>
            </svg>
            <svg
              className="size-7"
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                  <path d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}
