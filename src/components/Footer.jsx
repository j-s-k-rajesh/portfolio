import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-[#cccccc] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Jami.Siva Krishna Rajesh</h3>
            <p className="text-sm text-[#999]">
              Building clean, responsive React experiences with modern UI styles and bright accent tones.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FF014F] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF014F] transition">About</a></li>
              <li><a href="#skills" className="hover:text-[#FF014F] transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-[#FF014F] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Connect</h4>
            <div className="inline-flex gap-3 text-sm">
              <a href="https://github.com/j-s-k-rajesh/" target="_blank" className="px-3 py-1 border border-[#2a2a2a] rounded-md hover:border-[#FF014F] transition">GitHub</a>
              <a href="https://www.linkedin.com/in/jami-siva-krishna-rajesh-425a852bb/" target="_blank" className="px-3 py-1 border border-[#2a2a2a] rounded-md hover:border-[#FF014F] transition">LinkedIn</a>
              <a href="https://www.instagram.com/j.s.k.rajesh__001/" target='_blank' className="px-3 py-1 border border-[#2a2a2a] rounded-md hover:border-[#FF014F] transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#2a2a2a] pt-6 text-center text-xs text-[#888]">
          © {new Date().getFullYear()} Jami.Siva Krishna Rajesh. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer