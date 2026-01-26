import { Sparkles, Heart } from 'lucide-react';
import { Logo } from './Logo';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/30 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Profesjonalna kosmetologia</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Dominika
              <span className="block text-primary">Błaszkowska</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Kosmetolog specjalizujący się w tworzeniu
              <span className="text-primary font-medium"> indywidualnych planów pielęgnacyjnych</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Umów wizytę
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-accent text-foreground rounded-full hover:bg-accent/80 transition-colors duration-300 border border-border"
            >
              Zobacz ofertę
            </button>
          </div>

          <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground pt-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span>Profesjonalna opieka</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Indywidualne podejście</span>
            </div>
          </div>
        </div>

        {/* Right content - decorative */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629380106682-6736d2c327ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3Njg0NzgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profesjonalna pielęgnacja skóry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-primary/20">
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
}
