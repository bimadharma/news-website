import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '@/data/footerData';
// Gunakan icon dari lucide-react
import {
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t-[4px] border-[#177BC7] mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="block relative w-48 h-12">
              <Image 
                src="/uploads/news/logo.png" 
                alt="Human Initiative" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-black/90 text-justify">
              {footerData.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-[#177BC7] hover:scale-110 transition-transform">
                <Globe strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link href="#" className="text-[#177BC7] hover:scale-110 transition-transform">
                <Mail strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link href="#" className="text-[#177BC7] hover:scale-110 transition-transform">
                <Phone strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link href="#" className="text-[#177BC7] hover:scale-110 transition-transform">
                <MapPin strokeWidth={2} className="w-7 h-7" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-base mb-6">{footerData.locations.title}</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-[15px] mb-1">{footerData.locations.pusat.title}</h5>
                <div className="text-[13px] leading-relaxed text-black/80">
                  {footerData.locations.pusat.address.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-bold text-[15px] mb-1">{footerData.locations.operasional.title}</h5>
                <div className="text-[13px] leading-relaxed text-black/80">
                  {footerData.locations.operasional.address.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-base mb-6">{footerData.contact.title}</h4>
            <div className="text-[13px] space-y-1.5 text-black/80">
              <div>{footerData.contact.phone}</div>
              <div>{footerData.contact.fax}</div>
              <div>{footerData.contact.whatsapp}</div>
              <div>
                <Link href="#" className="underline hover:text-[#177BC7]">
                  {footerData.contact.email}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t-[1.5px] border-[#177BC7]">
        <div className="container mx-auto px-6 py-4 text-center">
          <span className="text-[#177BC7] text-sm font-medium">
            {footerData.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}