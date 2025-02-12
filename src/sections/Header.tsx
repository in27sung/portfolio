import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-stone-200">
    <div className="container !max-w-full px-4">
      <div className="flex items-center justify-between h-20 py-4">
        <div>
          <a href="/">
            <span className="text-xl font-bold uppercase">Insung H</span>
          </a>
        </div>
        <svg width="24" 
             height="24" 
             viewBox="0 0 24 24" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="15" width="18" height="2" fill="currentColor" />
          <rect x="3" y="7" width="18" height="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  </header>;
};

export default Header;
