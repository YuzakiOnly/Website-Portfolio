"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from "react-icons/io5";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YuzakiOnly",
    icon: IoLogoGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yuzakidesuu_/",
    icon: IoLogoInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/LVTsSxrJfSz3nARn/",
    icon: IoLogoFacebook,
  },
];

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
if (!WEB3FORMS_ACCESS_KEY && process.env.NODE_ENV === "development") {
  console.warn(
    "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in environment variables",
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: t.emailLabel,
      value: "yuzaki@example.com",
      href: "mailto:yuzaki@example.com",
    },
    {
      icon: MapPin,
      label: t.locationLabel,
      value: t.locationValue,
      href: null,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError(t.errorRequired);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Message from ${form.name} - Portfolio Website`,
          from_name: form.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || t.errorMessage);
      }
    } catch (err) {
      setError(t.errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-background py-24" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16 md:mb-20">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.3}
          >
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="block w-8 h-px bg-foreground/30" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                {t.contactTag}
              </span>
            </div>
          </AnimatedContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.4}
          >
            <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
              {t.contactHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.contactHeadlineAccent}
              </span>
            </h2>
          </FadeContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="mt-4 text-sm md:text-base text-foreground/45 font-mono leading-relaxed text-center md:text-left max-w-md">
              {t.contactDescription}
            </p>
          </FadeContent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <FadeContent
            blur
            duration={900}
            ease="ease-out"
            initialOpacity={0}
            delay={0.45}
          >
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-foreground/8 bg-foreground/3 flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest mb-0.5">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm font-mono text-foreground/60 hover:text-emerald-500 transition-colors duration-200"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-mono text-foreground/60">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-foreground/8" />

              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
                  {t.findMeOn}
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 rounded-xl border border-foreground/8 bg-foreground/3 hover:border-emerald-500/30 hover:bg-emerald-500/5 flex items-center justify-center transition-all duration-300"
                      title={s.label}
                    >
                      <s.icon className="w-4 h-4 text-foreground/35 group-hover:text-emerald-500 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.5)] animate-pulse shrink-0" />
                <span className="text-xs font-mono text-emerald-500 tracking-wide">
                  {t.availableLabel}
                </span>
              </div>
            </div>
          </FadeContent>

          <FadeContent
            blur
            duration={900}
            ease="ease-out"
            initialOpacity={0}
            delay={0.55}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-syne">
                  {t.successTitle}
                </h3>
                <p className="text-sm font-mono text-foreground/40 max-w-xs">
                  {t.successMessage}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm font-mono text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-foreground/35 uppercase tracking-widest">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-foreground/3 text-sm font-mono text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-emerald-500/40 focus:bg-emerald-500/2 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-foreground/35 uppercase tracking-widest">
                    {t.emailLabelForm}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-foreground/3 text-sm font-mono text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-emerald-500/40 focus:bg-emerald-500/2 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-foreground/35 uppercase tracking-widest">
                    {t.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/8 bg-foreground/3 text-sm font-mono text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-emerald-500/40 focus:bg-emerald-500/2 transition-all duration-200 resize-none"
                  />
                </div>

                <input
                  type="hidden"
                  name="access_key"
                  value={WEB3FORMS_ACCESS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value={`Message from ${form.name || "Visitor"} - Portfolio Website`}
                />
                <input
                  type="hidden"
                  name="from_name"
                  value={form.name || "Visitor"}
                />

                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 px-8 py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 text-sm font-montserrat cursor-pointer w-full md:w-fit"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.sendingButton}
                    </>
                  ) : (
                    <>
                      {t.sendButton}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-xs font-mono text-red-400 mt-1">{error}</p>
                )}
              </form>
            )}
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
