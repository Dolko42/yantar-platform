"use client";

import React from "react";
import {
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const SignButton: React.FC = () => {
  return (
    <>
      <SignedIn>
        {/* <Link
          href="/dashboard"
          className={`group cursor-pointer flex h-8 w-1/2 md:w-1/4 items-center justify-center gap-[6px] rounded px-4 bg-skin-subtle transition`}
        >
          <span>
            <svg className="h-[18px] w-[18px]">
              <path
                d="M17.0252 2.07708V16.8744C17.0163 16.9248 17.0091 16.9759 16.9978 17.0256C16.9439 17.2649 16.8277 17.4689 16.6498 17.6376C16.4026 17.8718 16.105 17.9753 15.7676 17.9753C10.9425 17.9753 6.1177 17.9753 1.29258 17.9753C1.27612 17.9753 1.25967 17.9757 1.24321 17.9753C0.924003 17.9647 0.642513 17.8594 0.41108 17.6359C0.155647 17.3887 0.0356445 17.0856 0.0356445 16.7297C0.0366731 11.8936 0.0363303 7.05786 0.0363303 2.22177C0.0363303 2.19709 0.0363303 2.1724 0.037016 2.14771C0.0565592 1.59056 0.453252 1.11981 0.99909 1.00564C1.05223 0.994664 1.10572 0.985407 1.15921 0.975464C6.07518 0.975464 10.9912 0.975464 15.9071 0.975464C15.9603 0.98575 16.0134 0.995007 16.0666 1.00598C16.5733 1.11158 16.9511 1.52507 17.0118 2.03937C17.0132 2.05205 17.0204 2.0644 17.0252 2.07674V2.07708ZM1.26344 7.65855C1.24561 7.72781 1.24424 16.6741 1.26207 16.752H15.8067V7.65855H1.26344ZM7.32423 6.43453H15.806V2.20223C15.6778 2.1844 7.38149 2.19057 7.32423 2.20806V6.43453ZM6.10055 6.43522V2.19846H1.25487V6.43488H6.10021L6.10055 6.43522ZM7.31669 12.5454C7.29852 13.4701 6.5857 14.2484 5.64249 14.3231C5.16659 14.3608 4.73527 14.2309 4.36292 13.9302C3.91411 13.5678 3.69297 13.0895 3.67445 12.508C3.26885 12.506 2.86804 12.506 2.46723 12.508C2.44769 13.5105 3.01135 14.6999 4.22235 15.2629C5.41037 15.8153 6.81268 15.5424 7.70892 14.5895C8.60037 13.6419 8.79066 12.2255 8.17693 11.082C7.86561 10.5019 7.41166 10.0661 6.81988 9.77711C6.4057 9.57482 5.96752 9.47504 5.50123 9.47539V10.6857C6.5353 10.6977 7.33623 11.5439 7.31669 12.545V12.5454ZM12.161 9.48087H10.9658C10.9493 9.61493 10.9555 15.4817 10.972 15.5417H12.1658C12.1826 15.4062 12.1768 9.53779 12.161 9.48087ZM13.3994 15.5393H14.5943C14.6114 15.4309 14.6066 12.5728 14.5888 12.5111H13.3957C13.3795 12.6191 13.3843 15.4796 13.3998 15.5393H13.3994Z"
                className={`fill-[#6366f1] group-hover:fill-[#000aff] transition`}
              />
            </svg>
          </span>
          <span
            className={`text-xs text-skin-muted group-hover:text-skin-base transition`}
          >
            Dashboard
          </span>
        </Link> */}
        <SignOutButton redirectUrl="/">
          <div
            className={`group cursor-pointer flex h-8 w-full lg:w-1/2 md:w-1/4 items-center justify-center gap-[6px] rounded px-2 bg-skin-subtle transition`}
          >
            <span>
              <svg className="h-[18px] w-[18px]">
                <path
                  d="M7.01587 0.070861L14.7302 0.0708617C15.071 0.0712031 15.3979 0.20677 15.6389 0.447815C15.88 0.688858 16.0155 1.01569 16.0159 1.35658L16.0159 16.7851C16.0155 17.126 15.88 17.4529 15.6389 17.6939C15.3979 17.935 15.071 18.0705 14.7302 18.0709L7.01587 18.0709C6.67498 18.0705 6.34815 17.935 6.10711 17.6939C5.86606 17.4529 5.7305 17.126 5.73016 16.7851L5.73016 14.8566L7.01587 14.8566L7.01587 16.7851L14.7302 16.7851L14.7302 1.35658L7.01587 1.35658L7.01587 3.28515L5.73016 3.28515L5.73016 1.35658C5.7305 1.01569 5.86606 0.688857 6.10711 0.447814C6.34815 0.206769 6.67498 0.0712024 7.01587 0.070861ZM3.04815 8.428L5.35344 6.12272L4.44444 5.21372L0.587298 9.07086L4.44444 12.928L5.35344 12.019L3.04815 9.71372L12.1587 9.71372L12.1587 8.428L3.04815 8.428Z"
                  className={`fill-[#6366f1] group-hover:fill-[#000aff] transition`}
                />
              </svg>
            </span>
            <span
              className={`text-xs text-skin-muted group-hover:text-skin-base transition`}
            >
              Sign out
            </span>
          </div>
        </SignOutButton>
      </SignedIn>

      <SignedOut>
        <SignUpButton forceRedirectUrl="/onboarding">
          <div
            className={`group cursor-pointer flex h-8 w-full lg:w-1/2 md:w-1/4 items-center justify-center gap-[6px] rounded px-4 bg-skin-subtle transition`}
          >
            <span>
              <svg className="h-[18px] w-[18px]">
                <path
                  d="M16.209 15.2204C17.1329 14.1097 17.7755 12.7931 18.0824 11.3818C18.3893 9.9705 18.3515 8.50612 17.9722 7.11253C17.5929 5.71893 16.8832 4.43712 15.9032 3.37552C14.9233 2.31392 13.7018 1.50377 12.3422 1.0136C10.9826 0.523424 9.52488 0.367654 8.09229 0.559462C6.6597 0.75127 5.29442 1.28501 4.11193 2.11554C2.92945 2.94607 1.96456 4.04895 1.29889 5.33088C0.633212 6.61281 0.286335 8.03608 0.287601 9.48029C0.288087 11.5798 1.02854 13.612 2.37902 15.2204L2.36616 15.2313C2.41119 15.2853 2.46265 15.3316 2.50897 15.385C2.56687 15.4512 2.62927 15.5135 2.6891 15.5778C2.86923 15.7732 3.05451 15.9609 3.24879 16.137C3.30797 16.191 3.36909 16.2411 3.42892 16.2926C3.63478 16.47 3.84643 16.6384 4.0658 16.7952C4.09411 16.8145 4.11984 16.8396 4.14814 16.8595V16.8518C5.65486 17.9112 7.45228 18.4798 9.29468 18.4798C11.1371 18.4798 12.9345 17.9112 14.4412 16.8518V16.8595C14.4695 16.8396 14.4946 16.8145 14.5236 16.7952C14.7423 16.6377 14.9546 16.47 15.1604 16.2926C15.2203 16.2411 15.2814 16.1904 15.3406 16.137C15.5348 15.9602 15.7201 15.7732 15.9003 15.5778C15.9601 15.5135 16.0218 15.4512 16.0804 15.385C16.1261 15.3316 16.1782 15.2853 16.2232 15.2307L16.209 15.2204ZM9.29403 4.33798C9.8666 4.33798 10.4263 4.50763 10.9024 4.82546C11.3784 5.1433 11.7495 5.59506 11.9686 6.1236C12.1877 6.65214 12.245 7.23374 12.1333 7.79484C12.0216 8.35594 11.7459 8.87134 11.3411 9.27587C10.9362 9.6804 10.4204 9.95589 9.85881 10.0675C9.29725 10.1791 8.71517 10.1218 8.18619 9.9029C7.65722 9.68397 7.20509 9.31322 6.88699 8.83754C6.56889 8.36187 6.39911 7.80262 6.39911 7.23053C6.39911 6.46338 6.70411 5.72765 7.24701 5.18519C7.78992 4.64273 8.52625 4.33798 9.29403 4.33798ZM4.152 15.2204C4.16316 14.3764 4.50644 13.5707 5.10756 12.9777C5.70868 12.3846 6.51932 12.0519 7.36408 12.0514H11.224C12.0688 12.0519 12.8794 12.3846 13.4805 12.9777C14.0816 13.5707 14.4249 14.3764 14.4361 15.2204C13.0252 16.4908 11.1933 17.1938 9.29403 17.1938C7.3948 17.1938 5.5629 16.4908 4.152 15.2204Z"
                  className={`fill-[#6366f1] group-hover:fill-[#000aff] transition`}
                />
              </svg>
            </span>
            <span
              className={`text-xs text-skin-muted group-hover:text-skin-base transition`}
            >
              Sign up
            </span>
          </div>
        </SignUpButton>
      </SignedOut>
    </>
  );
};
export default SignButton;
