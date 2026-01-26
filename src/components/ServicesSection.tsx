import { Sparkles, Droplet, Sun, Moon, Star, Heart } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Plany pielęgnacyjne',
      description: 'Indywidualnie dopasowane plany pielęgnacji skóry, stworzone specjalnie dla Twoich potrzeb i typu cery.',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Droplet,
      title: 'Nawilżanie',
      description: 'Zabiegi głęboko nawilżające, przywracające skórze zdrowy blask i młody wygląd.',
      color: 'bg-secondary/20',
      iconColor: 'text-primary',
    },
    {
      icon: Sun,
      title: 'Pielęgnacja dzienna',
      description: 'Kompleksowa pielęgnacja dzienna dostosowana do Twojego trybu życia i potrzeb skóry.',
      color: 'bg-accent',
      iconColor: 'text-primary',
    },
    {
      icon: Moon,
      title: 'Pielęgnacja nocna',
      description: 'Specjalistyczne zabiegi regenerujące wykorzystujące naturalny rytm odnowy skóry.',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Star,
      title: 'Anti-aging',
      description: 'Zaawansowane zabiegi przeciwstarzeniowe z wykorzystaniem najnowszych metod pielęgnacji.',
      color: 'bg-secondary/20',
      iconColor: 'text-primary',
    },
    {
      icon: Heart,
      title: 'Konsultacje',
      description: 'Profesjonalne konsultacje kosmetologiczne z analizą skóry i doborem odpowiednich zabiegów.',
      color: 'bg-accent',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 bg-background">
      {/* Background decorations */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Oferta</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Moja oferta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj pełen zakres usług kosmetologicznych dostosowanych do Twoich indywidualnych potrzeb
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gotowa na przemianę?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Umów się na konsultację i stwórzmy razem indywidualny plan pielęgnacyjny idealny dla Twojej skóry
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Umów konsultację
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
