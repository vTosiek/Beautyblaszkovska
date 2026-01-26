import { Award, Heart, Smile, Star } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1664549761426-6a1cb1032854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY4NDc4MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Zabieg kosmetologiczny"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/40 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
                <span className="text-sm text-primary font-medium">O mnie</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Passion for Beauty
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jestem Dominika Błaszkowska, certyfikowanym kosmetologiem z pasją do pielęgnacji skóry. 
                Moją misją jest pomaganie kobietom w odkrywaniu naturalnego piękna poprzez 
                <span className="text-primary font-medium"> indywidualne plany pielęgnacyjne</span>, 
                dostosowane do potrzeb każdej cery.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certyfikacje</h3>
                  <p className="text-sm text-muted-foreground">Profesjonalne szkolenia</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pasja</h3>
                  <p className="text-sm text-muted-foreground">Miłość do kosmetologii</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zadowolenie</h3>
                  <p className="text-sm text-muted-foreground">Setki szczęśliwych klientek</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Jakość</h3>
                  <p className="text-sm text-muted-foreground">Najwyższe standardy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
