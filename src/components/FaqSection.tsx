import { useState } from 'react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="bg-black py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-neutral-800"
    >
      <div className="text-center space-y-3 mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-1 bg-neutral-900 border border-neutral-700 font-mono text-[9px] text-amber-400 px-2.5 py-0.5 rounded-full uppercase">
          <HelpCircle className="w-2.5 h-2.5" />
          Support Knowledgebase
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase">
          UK Streaming Help & FAQs
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
          Get answers regarding server stability, Saturday 3 PM football blockades, VPN requirements, and quick device setups.
        </p>
      </div>

      <div id="faq-accordion-container" className="space-y-3 text-left">
        {FAQS.map((faq: FAQItem) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              id={`faq-item-container-${faq.id}`}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                id={`faq-trigger-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left font-sans text-sm sm:text-base font-semibold text-white hover:text-amber-400 hover:bg-neutral-800/50 transition-all"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4.5 h-4.5 text-neutral-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4.5 h-4.5 text-neutral-500 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div
                  id={`faq-expanded-content-${faq.id}`}
                  className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-800"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-12 text-center space-y-4">
        <p className="font-mono text-[10px] text-neutral-600">CANNOT DECRYPT A CONGESTION FLAG OR HAVE OTHER CONCERNS?</p>
        <div className="flex justify-center">
          <a
            id="faq-whatsapp-link"
            href="https://wa.me/447400000000"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs bg-red-700 hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2 border border-red-600 shadow-md shadow-red-950/40 active:scale-95"
          >
            Ask UK Helpdesk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
