import React, { useState, useRef } from 'react';
import { Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface ContactProps {
  lang: Language;
  onOpenBooking: () => void;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const CONTACT_UI_COPY: Record<
  Language,
  {
    sendingBtn: string;
    sentHeading: string;
    sendAnotherBtn: string;
    validationError: string;
    invalidEmailError: string;
    deliveryUnavailableError: string;
    networkError: string;
    whatsappFallbackCta: string;
    whatsappPrefix: string;
  }
> = {
  en: {
    sendingBtn: 'Sending Message...',
    sentHeading: 'Message Sent',
    sendAnotherBtn: 'Send Another Message',
    validationError: 'Please enter your name, email address, and message.',
    invalidEmailError: 'Please enter a valid email address.',
    deliveryUnavailableError:
      'Automated form delivery could not be verified from this environment. Your message was not marked as sent — please try again on the live site or message Greg directly on WhatsApp.',
    networkError:
      'Unable to send your message right now due to a connection or server error. Please try again or contact Greg directly on WhatsApp.',
    whatsappFallbackCta: 'Send This Inquiry via WhatsApp (+507 6503-7828)',
    whatsappPrefix: "Hello Greg, I am contacting you from Greg's Place website:",
  },
  es: {
    sendingBtn: 'Enviando Mensaje...',
    sentHeading: 'Mensaje Enviado',
    sendAnotherBtn: 'Enviar Otro Mensaje',
    validationError: 'Por favor ingrese su nombre, correo electrónico y mensaje.',
    invalidEmailError: 'Por favor ingrese un correo electrónico válido.',
    deliveryUnavailableError:
      'No se pudo confirmar la entrega automática desde este entorno. Su mensaje no se marcó como enviado; intente en el sitio en vivo o escriba directamente a Greg por WhatsApp.',
    networkError:
      'No se pudo enviar su mensaje en este momento por un error de conexión o servidor. Inténtelo de nuevo o contacte a Greg directamente por WhatsApp.',
    whatsappFallbackCta: 'Enviar Esta Consulta por WhatsApp (+507 6503-7828)',
    whatsappPrefix: 'Hola Greg, le escribo desde el sitio web de Greg’s Place:',
  },
  de: {
    sendingBtn: 'Nachricht wird gesendet...',
    sentHeading: 'Nachricht Gesendet',
    sendAnotherBtn: 'Weitere Nachricht Senden',
    validationError: 'Bitte geben Sie Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht ein.',
    invalidEmailError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    deliveryUnavailableError:
      'Die automatische Zustellung konnte in dieser Umgebung nicht bestätigt werden. Ihre Nachricht wurde nicht als gesendet markiert – bitte versuchen Sie es auf der Live-Website erneut oder schreiben Sie Greg per WhatsApp.',
    networkError:
      'Ihre Nachricht konnte aufgrund eines Verbindungs- oder Serverfehlers derzeit nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie Greg direkt per WhatsApp.',
    whatsappFallbackCta: 'Anfrage per WhatsApp senden (+507 6503-7828)',
    whatsappPrefix: "Hallo Greg, ich kontaktiere Sie über die Website von Greg's Place:",
  },
  fr: {
    sendingBtn: 'Envoi en cours...',
    sentHeading: 'Message Envoyé',
    sendAnotherBtn: 'Envoyer un Autre Message',
    validationError: 'Veuillez saisir votre nom, votre adresse e-mail et votre message.',
    invalidEmailError: 'Veuillez saisir une adresse e-mail valide.',
    deliveryUnavailableError:
      "La transmission automatique n'a pas pu être confirmée depuis cet environnement. Votre message n'a pas été marqué comme envoyé — veuillez réessayer sur le site en ligne ou écrire directement à Greg sur WhatsApp.",
    networkError:
      'Impossible d’envoyer votre message pour le moment en raison d’une erreur de connexion ou de serveur. Veuillez réessayer ou contacter Greg directement sur WhatsApp.',
    whatsappFallbackCta: 'Envoyer cette demande par WhatsApp (+507 6503-7828)',
    whatsappPrefix: "Bonjour Greg, je vous contacte depuis le site web de Greg's Place :",
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact: React.FC<ContactProps> = ({ lang, onOpenBooking }) => {
  const t = content[lang].contact;
  const ui = CONTACT_UI_COPY[lang];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const isSubmitting = status === 'submitting';
  const submitted = status === 'success';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current || status === 'submitting') return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg(ui.validationError);
      setStatus('error');
      return;
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setErrorMsg(ui.invalidEmailError);
      setStatus('error');
      return;
    }

    submittingRef.current = true;
    setStatus('submitting');
    setErrorMsg(null);

    try {
      const customEndpoint = (
        import.meta as unknown as { env?: Record<string, string | undefined> }
      ).env?.VITE_CONTACT_FORM_ENDPOINT?.trim();

      if (customEndpoint) {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            phone: trimmedPhone,
            message: trimmedMessage,
            language: lang,
          }),
        });

        if (!response.ok) {
          throw new Error(`Endpoint returned status ${response.status}`);
        }

        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        return;
      }

      // Default: Netlify Forms submission handled on Netlify Edge
      const payload = new URLSearchParams();
      payload.append('form-name', 'contact');
      payload.append('bot-field', botField);
      payload.append('name', trimmedName);
      payload.append('email', trimmedEmail);
      payload.append('phone', trimmedPhone);
      payload.append('message', trimmedMessage);
      payload.append('language', lang);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });

      const responseText = await response.text();
      const hasNetlifyRequestId = Boolean(response.headers.get('x-nf-request-id'));
      const returnedSpaHtml = responseText.includes('id="root"') || responseText.includes('id=\'root\'');

      // Never claim success if an unconfigured SPA server returned 404/405 or raw index.html
      const unconfiguredSpaResponse =
        response.status === 404 ||
        response.status === 405 ||
        (returnedSpaHtml && !hasNetlifyRequestId);

      if (!response.ok || unconfiguredSpaResponse) {
        setErrorMsg(unconfiguredSpaResponse ? ui.deliveryUnavailableError : ui.networkError);
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setBotField('');
    } catch {
      setErrorMsg(ui.networkError);
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  };

  const whatsappUrl = 'https://wa.me/50765037828?text=Hello%20Greg,%20I%20am%20inquiring%20about%20staying%20at%20Greg%27s%20Place%20in%20Albrook';
  const buildWhatsappInquiryUrl = () => {
    const details = [
      ui.whatsappPrefix,
      name.trim() ? `Name: ${name.trim()}` : '',
      email.trim() ? `Email: ${email.trim()}` : '',
      phone.trim() ? `Phone: ${phone.trim()}` : '',
      message.trim() ? `Message: ${message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/50765037828?text=${encodeURIComponent(details)}`;
  };
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Calle+Los+Guayacanes+247+Albrook+Panama+City+Panama';

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] border-b border-[#1B3022]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#8C583E] uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.tag}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B3022] tracking-tight mb-3">
            {t.title}
          </h2>

          <p className="text-[#8C583E] text-lg font-serif italic mb-4">
            {t.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#1B3022]/85 leading-relaxed">
            {t.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Direct Host CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#1B3022]/10 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.addressHeading}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#1B3022]">
                  Greg&apos;s Place in Albrook
                </h3>
                <p className="text-sm text-[#1B3022]/80 mt-1 font-light">
                  Calle Los Guayacanes 247, Albrook, Panama City, Panama
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B3022]/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.phoneHeading}
                </span>
                <a
                  href="tel:+50765037828"
                  className="font-serif text-2xl text-[#1B3022] hover:text-[#C5A059] transition-colors block"
                >
                  +507 6503-7828
                </a>
                <span className="text-xs text-[#1B3022]/70 font-light">
                  {lang === 'fr'
                    ? 'Appel direct & WhatsApp : +507 6503-7828'
                    : lang === 'de'
                    ? 'Direkter Anruf & WhatsApp: +507 6503-7828'
                    : lang === 'en'
                    ? 'Direct call & WhatsApp: +507 6503-7828'
                    : 'Llamada directa y WhatsApp: +507 6503-7828'}
                </span>
              </div>

              <div className="pt-4 border-t border-[#1B3022]/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  {t.hoursHeading}
                </span>
                <p className="text-xs text-[#1B3022]/80 font-light">
                  {t.hoursText}
                </p>
              </div>
            </div>

            {/* Quick Action Direct CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{t.phoneCTA}</span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1B3022]/20 bg-white hover:bg-[#EDEAE4] text-[#1B3022] text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{t.directionsCTA}</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#A68648] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{t.bookingCTA}</span>
              </button>
            </div>
          </div>

          {/* Multilingual Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#1B3022]/10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center" role="status" aria-live="polite">
                <div className="w-14 h-14 bg-[#1B3022]/10 text-[#1B3022] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1B3022] mb-2 font-light">
                  {ui.sentHeading}
                </h3>
                <p className="text-sm text-[#1B3022]/80 max-w-md mb-6 font-light">
                  {t.successMsg}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setErrorMsg(null);
                  }}
                  className="px-6 py-2.5 min-h-[44px] border border-[#1B3022]/20 text-[11px] font-bold uppercase tracking-widest text-[#1B3022] hover:bg-[#EDEAE4] transition-colors"
                >
                  {ui.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="language" value={lang} />
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-bot-field">Do not fill this out:</label>
                  <input
                    id="contact-bot-field"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1"
                    >
                      {t.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (status === 'error') {
                          setStatus('idle');
                          setErrorMsg(null);
                        }
                      }}
                      className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1"
                    >
                      {t.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') {
                          setStatus('idle');
                          setErrorMsg(null);
                        }
                      }}
                      className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059] disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1"
                  >
                    {t.phoneLabel}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059] disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-bold text-[#1B3022] uppercase tracking-wider mb-1"
                  >
                    {t.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (status === 'error') {
                        setStatus('idle');
                        setErrorMsg(null);
                      }
                    }}
                    className="w-full px-4 py-2.5 bg-[#F5F2ED] border border-[#1B3022]/15 text-sm text-[#1B3022] focus:outline-none focus:border-[#C5A059] disabled:opacity-60"
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 bg-[#8C583E]/10 border-l-3 border-[#8C583E] text-xs sm:text-sm text-[#1B3022] space-y-2.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#8C583E] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{errorMsg}</p>
                    </div>
                    <a
                      href={buildWhatsappInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B3022] hover:bg-[#2A4533] text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{ui.whatsappFallbackCta}</span>
                    </a>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B3022] hover:bg-[#2A4533] disabled:bg-[#1B3022]/70 disabled:cursor-not-allowed text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 text-[#C5A059] animate-spin" />
                        <span>{ui.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C5A059]" />
                        <span>{t.sendBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
