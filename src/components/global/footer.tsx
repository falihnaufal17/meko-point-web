import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { logoMekoPointLight } from "@/assets";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#1e4d8b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Kontak Section */}
          <div>
           <div className="mb-4 flex items-center gap-2">
              <Image 
                src={logoMekoPointLight} 
                alt="Meko Point Logo" 
                width={260}
                height={57}
                priority
                className="w-[260px] h-[57px]"
              />
            </div>
            <h3 className="my-4 text-2xl font-bold">{t("Contact")}</h3>
           <div className="space-y-3 text-xl">
              <div className="flex items-start gap-4">
                <MapPin className="mt-[3px] h-[30px] w-[30px] flex-shrink-0" style={{ opacity: 1 }} />
                <div>{t('address')}</div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="mt-[3px] h-[30px] w-[30px] flex-shrink-0" style={{ opacity: 1 }} />
                <span>+62 856 8888 9999</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="mt-[3px] h-[30px] w-[30px] flex-shrink-0" style={{ opacity: 1 }} />
                <span>mekopoint@gmail.com</span>
              </div>
            </div>
           <div className="mt-15 mb-4 flex gap-5">
              <a href="#" className="rounded border-2 border-white w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10">
                <span className="sr-only">WhatsApp</span>
                <Phone className="h-5 w-5" style={{ opacity: 1 }} />
              </a>
              <a href="#" className="rounded border-2 border-white w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10">
                <Facebook className="h-5 w-5" style={{ opacity: 1 }} />
              </a>
              <a href="#" className="rounded border-2 border-white w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10">
                <Instagram className="h-5 w-5" style={{ opacity: 1 }} />
              </a>
            </div>
          </div>

          {/* Info Kontak Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">{t("contactInfo")}</h3>
            <div className="space-y-2 text-base">
              <div>{t("address")}</div>
              <p>+62 856 8888 9999</p>
              <p>mekopoint@gmail.com</p>
            </div>
          </div>

          {/* Produk Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">{t("Product")}</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/gis-ordering" className="hover:underline">{t("qrOrdering")}</Link></li>
              <li><Link href="/sistem-pos" className="hover:underline">{t("systemPOS")}</Link></li>
              <li><Link href="/manajemen-inventory" className="hover:underline">{t("inventoryManagement")}</Link></li>
              <li><Link href="/pitur" className="hover:underline">{t("features")}</Link></li>
              <li><Link href="/harga" className="hover:underline">{t("price")}</Link></li>
            </ul>
          </div>

          {/* Perusahaan Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">{t("company")}</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/tentang-kami" className="hover:underline">{t("aboutUs")}</Link></li>
              <li><Link href="/misi" className="hover:underline">{t("mission")}</Link></li>
              <li><Link href="/karir" className="hover:underline">{t("career")}</Link></li>
              <li><Link href="/dukungan" className="hover:underline">{t("support")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          {/* Mobile: Links above border */}
          <div className="flex flex-col items-center gap-4 text-base sm:hidden">
            <div className="flex gap-6">
              <Link href="/syarat-dan-ketentuan" className="hover:underline">{t("Terms and Conditions")}</Link>
              <Link href="/kebijakan-privasi" className="hover:underline">{t("privacy policy")}</Link>
            </div>
          </div>
          
          {/* Border */}
          <div className="border-t border-white/20 pt-6 mt-4 sm:mt-0">
            {/* Desktop: Links and Copyright in one row */}
            <div className="hidden sm:flex items-center justify-between gap-4 text-base">
              <div className="flex gap-6">
                <Link href="/syarat-dan-ketentuan" className="hover:underline">{t("Terms and Conditions")}</Link>
                <Link href="/kebijakan-privasi" className="hover:underline">{t("privacy policy")}</Link>
              </div>
              <p>{t("Copyright")}</p>
            </div>
            
            {/* Mobile: Copyright below border */}
            <div className="flex justify-center text-base sm:hidden">
              <p>{t("Copyright")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;