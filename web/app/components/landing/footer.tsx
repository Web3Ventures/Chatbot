import React from "react";
import SiteLogo from "@/app/components/base/logo/logo-site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <SiteLogo className="size-10" />

            <p className="mt-4 max-w-xs ">
              ChatBotX is a platform that provides a suite of AI-powered tools
              for businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="font-medium ">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Email
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium ">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="font-medium ">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Live Chat{" "}
                  </a>
                </li>
              </ul>
            </div> */}
            {/* 
            <div>
              <p className="font-medium ">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Accessibility{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Returns Policy{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    {" "}
                    Hiring Statistics{" "}
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <p className="text-xs ">&copy; 2024. ChatBotX. All rights reserved.</p>
      </div>
    </footer>
  );
}
