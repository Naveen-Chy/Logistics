'use client'
import { Mail, PhoneCall } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TopHeader() {
    return (
        <motion.div
            className="bg-[#222e3a] text-white text-sm py-1 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                {/* Left: Contact Info */}
                <motion.div
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="flex items-center space-x-1">
                        <PhoneCall className="w-4 h-4 text-white" />
                        <span>+91-9953-66-6767</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4 text-white" />
                        <span>info@bullslogistics.in</span>
                    </div>
                </motion.div>

                {/* Right: Social Icons */}
                <motion.div
                    className="flex space-x-3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {[{
                        Icon: FaFacebookF, href: "https://facebook.com", bg: "#3b5998"
                    }, {
                        Icon: FaTwitter, href: "https://twitter.com", bg: "#1DA1F2"
                    }, {
                        Icon: FaYoutube, href: "https://youtube.com", bg: "#FF0000"
                    }, {
                        Icon: FaLinkedinIn, href: "https://linkedin.com", bg: "#0077b5"
                    }].map(({ Icon, href, bg }, idx) => (
                        <motion.a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="p-2 rounded-full transition-colors duration-300"
                            style={{ backgroundColor: bg }}
                        >
                            <Icon className="text-white w-3.5 h-3.5" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}
