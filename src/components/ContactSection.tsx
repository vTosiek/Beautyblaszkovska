import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
                <span className="text-sm text-primary font-medium">Kontakt</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Skontaktuj się ze mną
              </h2>
              <p className="text-lg text-muted-foreground">
                Chętnie odpowiem na Twoje pytania i pomogę w umówieniu wizyty
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <a 
                href="https://instagram.com/kosmetologia_blaszkovska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                  <p className="text-muted-foreground">@kosmetologia_blaszkovska</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">kontakt@blaszkovska.pl</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+48 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Lokalizacja</h3>
                  <p className="text-muted-foreground">Gdańsk, Polska</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image & CTA */}
          <div className="relative">
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1623882151192-5c6e32a99462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2ODQ3ODA2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kosmetyki"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <p className="text-foreground font-medium mb-4">
                  Śledź mnie na Instagramie, aby być na bieżąco z najnowszymi trendami w kosmetologii
                </p>
                <a 
                  href="https://instagram.com/kosmetologia_blaszkovska" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Obserwuj na Instagram</span>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/30 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo />
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6">
                <a 
                  href="https://instagram.com/kosmetologia_blaszkovska" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2026 Blaszkovska. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}