import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-medium uppercase mb-4">ITIN Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/check-eligibility">Check Eligibility</Link>
            </li>
            <li>
              <Link href="/itin-application">ITIN Application</Link>
            </li>
            <li>
              <Link href="/document-preparation">Document Preparation</Link>
            </li>
            <li>
              <Link href="/application-tracking">Application Tracking</Link>
            </li>
            <li>
              <Link href="/renewal">ITIN Renewal</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase mb-4">For Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/nonprofit-partners">Nonprofit Organizations</Link>
            </li>
            <li>
              <Link href="/employer-partners">Employers</Link>
            </li>
            <li>
              <Link href="/partner-resources">Partner Resources</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@growwithvesta.com">hello@growwithvesta.com</a>
            </li>
            <li>
              <a href="tel:+16469206771">+1 (646) 920-6771</a>
            </li>
          </ul>
          <div className="flex space-x-2 mt-4">
            <Link
              href="https://twitter.com/vestaitin"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/vestaitin"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs mt-8">© 2025 Vesta. All rights reserved.</p>
    </footer>
  )
}

