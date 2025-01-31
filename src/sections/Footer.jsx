import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-2 text-white-500">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://www.github.com/kaithsuku/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon" tooltip="Download Resume">
          <a href="https://1drv.ms/b/c/025c107187358951/ESvMVxQ4hpNCgDeFLSU7gUsBhwy9FYBqbXmNguIXMOO0pw?e=AfqH9V"  target="_blank" rel="noreferrer">
          <img src="/assets/resume.svg" alt="resume" className="w-1/2 h-1/2 ml-3"/>
          </a>
        </div>
        <div className="social-icon" tooltip="Connect with me on LinkedIn">
          <a
            href="https://www.linkedin.com/in/kaithakkal-suraj-42192118b"
            target="_blank"
            rel="noreferrer"
          
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500"> &copy; Kaith 2025. All rights reserved</p>
    </section>
  );
};

export default Footer;
