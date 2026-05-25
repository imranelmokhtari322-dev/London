import { useState, useEffect, FormEvent } from 'react';
import { PLANS } from '../data';
import { SubscriptionPlan } from '../types';
import { X, ShieldCheck, ShoppingCart, MessageSquare, Mail, Terminal, Lock, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlanId: string | null;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, selectedPlanId, onClose }: CheckoutModalProps) {
  const [planId, setPlanId] = useState<string>('12-months');
  const [deliveryMethod, setDeliveryMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [deviceType, setDeviceType] = useState('firestick');
  const [macAddress, setMacAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPlanId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const currentPlan = PLANS.find(p => p.id === planId) || PLANS[1];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactValue.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div
        id="checkout-modal-content"
        className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl shadow-black/60 p-6 sm:p-8 overflow-hidden"
      >
        {/* Red top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        <button
          id="close-checkout-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-500 hover:text-white hover:bg-neutral-700 transition-all"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="w-5 h-5 text-red-500" />
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">Secure Delivery Activation</h3>
            </div>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Verify your package terms. Accounts are provisioned and delivery links sent over secure encryption lines inside 15 minutes.
            </p>

            {/* Plan selection */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Configure IPTV London Package:</label>
              <select
                id="checkout-plan-selector"
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:border-red-600 font-sans text-xs rounded-lg px-3 py-2 text-white transition-all"
              >
                {PLANS.map((p: SubscriptionPlan) => (
                  <option key={p.id} value={p.id}>{p.name} — {p.price}</option>
                ))}
              </select>
            </div>

            {/* Delivery Method */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Choose Delivery Activation Method:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="delivery-whatsapp-btn"
                  onClick={() => {
                    setDeliveryMethod('whatsapp');
                    setContactValue('');
                  }}
                  className={`py-2 px-3.5 rounded-lg border text-xs font-sans font-medium flex items-center justify-center gap-2 transition-all ${
                    deliveryMethod === 'whatsapp'
                      ? 'bg-red-700 text-white font-semibold border-red-600'
                      : 'bg-neutral-800 text-neutral-400 border-neutral-700 hover:border-neutral-600 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Delivery
                </button>
                <button
                  type="button"
                  id="delivery-email-btn"
                  onClick={() => {
                    setDeliveryMethod('email');
                    setContactValue('');
                  }}
                  className={`py-2 px-3.5 rounded-lg border text-xs font-sans font-medium flex items-center justify-center gap-2 transition-all ${
                    deliveryMethod === 'email'
                      ? 'bg-red-700 text-white font-semibold border-red-600'
                      : 'bg-neutral-800 text-neutral-400 border-neutral-700 hover:border-neutral-600 hover:text-white'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Activation
                </button>
              </div>
            </div>

            {/* Contact Field */}
            {deliveryMethod === 'whatsapp' ? (
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                  UK Mobile / WhatsApp Number (Required):
                </label>
                <input
                  id="input-whatsapp-num"
                  type="tel"
                  required
                  placeholder="e.g. 07700 900077 or +44 ..."
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:border-red-600 text-white placeholder-neutral-600 rounded-lg px-3 py-2.5 text-xs font-mono transition-colors"
                />
                <span className="block font-mono text-[9px] text-neutral-600">Used strictly to stream active Xtream credentials, host URLs, and fast setup links.</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                  Contact Email Address (Required):
                </label>
                <input
                  id="input-email-address"
                  type="email"
                  required
                  placeholder="e.g. yourname@gmail.com"
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:border-red-600 text-white placeholder-neutral-600 rounded-lg px-3 py-2.5 text-xs font-sans transition-colors"
                />
                <span className="block font-mono text-[9px] text-neutral-600">Ensure spelling is exactly correct to avoid automated setup dispatch failures.</span>
              </div>
            )}

            {/* Device + MAC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Active Device:</label>
                <select
                  id="checkout-device-selector"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:border-red-600 font-sans text-xs rounded-lg px-3 py-2 text-white transition-all"
                >
                  <option value="firestick">Amazon Firestick</option>
                  <option value="smart-tv">Samsung/LG TV</option>
                  <option value="apple-tv">Apple TV/iOS</option>
                  <option value="android-box">Android TV/Box</option>
                  <option value="other">Mag/TiviMate/PC</option>
                </select>
              </div>

              {deviceType === 'smart-tv' ? (
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">MAC Address (Optional):</label>
                  <input
                    id="input-mac-address"
                    type="text"
                    placeholder="e.g. 00:1a:3f..."
                    value={macAddress}
                    onChange={(e) => setMacAddress(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-lg px-3 py-1.5 text-xs font-mono uppercase focus:outline-none focus:border-red-600"
                  />
                </div>
              ) : (
                <div className="space-y-1.5 opacity-40 select-none">
                  <label className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">MAC Address Option:</label>
                  <input
                    type="text"
                    disabled
                    placeholder="Not required"
                    className="w-full bg-neutral-900 border border-neutral-800 text-neutral-700 rounded-lg px-3 py-1.5 text-xs font-mono cursor-not-allowed"
                  />
                </div>
              )}
            </div>

            {/* Receipt */}
            <div className="bg-black border border-neutral-800 rounded-xl p-4 space-y-2 font-sans text-xs">
              <div className="flex justify-between items-center text-neutral-400">
                <span>IPTV subscription contract:</span>
                <span className="font-mono text-white">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between items-center text-neutral-400">
                <span>Setup & Activations fee:</span>
                <span className="font-mono text-emerald-400">£0.00 (FREE)</span>
              </div>
              <div className="flex justify-between items-center text-neutral-400">
                <span>Continuous priority streaming gateway:</span>
                <span className="font-mono text-emerald-400">Included</span>
              </div>
              <div className="h-px bg-neutral-800 my-1" />
              <div className="flex justify-between items-center font-bold text-sm text-white pt-1">
                <span>Total single charge:</span>
                <span className="font-mono text-amber-400 select-all">{currentPlan.price}</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              id="submit-checkout-form"
              disabled={isSubmitting}
              className="w-full bg-red-700 hover:bg-red-600 text-white font-sans font-bold text-xs py-3.5 rounded-xl transition-all select-none flex items-center justify-center gap-2 border border-red-600 disabled:opacity-50 shadow-lg shadow-red-950/40"
            >
              <Lock className="w-3.5 h-3.5" />
              {isSubmitting ? 'Generating server credentials...' : `Generate Payment Link & Activate • ${currentPlan.price}`}
            </button>

            <div className="flex items-center gap-1.5 justify-center font-mono text-[9px] text-neutral-600 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-600" />
              <span>TLS CODESET: PEERING LINKS DISPATCHED VIA PRIVATE GATEWAY</span>
            </div>
          </form>
        ) : (
          <div className="space-y-6 text-center py-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2 select-none">
              <h3 className="font-serif text-2xl text-white font-medium">Telemetry Connected!</h3>
              <p className="font-sans text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                Your dispatch protocol is live. We have registered your hardware with target host <strong className="font-mono text-white">ukstream.london</strong>.
              </p>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-4 text-left font-mono text-[10px] text-neutral-400 space-y-1">
              <div className="flex justify-between text-neutral-500">
                <span>PORTAL SYSTEM ID:</span>
                <span>LON-SEC-842</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>PAYMENT DISPATCH LINK:</span>
                <span>READY</span>
              </div>
              <div className="flex justify-between text-amber-400">
                <span>DELIVERY TARGET:</span>
                <span>{contactValue}</span>
              </div>
              <div className="h-px bg-neutral-800 my-1"/>
              <p className="text-[10px] text-neutral-500 leading-relaxed pt-1">
                A secure payment page link has been dispatched to your {deliveryMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}. Please click that link to finalize checkout. Your stream parameters will activate 15 minutes after.
              </p>
            </div>

            <button
              id="confirm-checkout-success-btn"
              onClick={() => {
                setSubmitted(false);
                setContactValue('');
                onClose();
              }}
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-sans font-semibold text-xs py-3 rounded-lg transition-colors border border-neutral-700"
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
