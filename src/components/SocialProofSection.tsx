import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Finally! A workspace that actually understands how UX designers work. The AI meeting notes are a game-changer.",
      author: "Sarah Chen",
      role: "Senior UX Designer at Spotify",
      rating: 5
    },
    {
      quote: "I've been waiting for something like this for years. The client tracking alone saves me 5+ hours per week.",
      author: "Marcus Rodriguez", 
      role: "UX Lead at Airbnb",
      rating: 5
    },
    {
      quote: "The UX Suite eliminated all the friction from my workflow. It's like having a personal assistant for design work.",
      author: "Emily Thompson",
      role: "Principal Designer at Google",
      rating: 5
    }
  ];

  const stats = [
    { number: "2,847", label: "Designers on Waitlist" },
    { number: "95%", label: "Would Recommend" },
    { number: "40+", label: "Hours Saved Monthly" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-6xl mb-6 tracking-tight"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '700',
                color: '#2C3E50',
                lineHeight: '1.1'
              }}
            >
              Loved by UX Professionals
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: '400',
                color: '#34495E',
                lineHeight: '1.5'
              }}
            >
              Join thousands of designers who are already transforming their workflow
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-5xl mb-2"
                  style={{ 
                    fontFamily: 'Montserrat', 
                    fontWeight: '700',
                    color: '#00BCD4'
                  }}
                >
                  {stat.number}
                </div>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'Inter', 
                    fontWeight: '500',
                    color: '#34495E'
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border shadow-sm hover:shadow-lg transition-all duration-300" style={{ borderColor: '#DEE2E6' }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#00BCD4' }} />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 mb-4" style={{ color: '#00BCD4' }} />
                  <p 
                    className="text-base mb-6"
                    style={{ 
                      fontFamily: 'Inter', 
                      fontWeight: '400',
                      color: '#34495E',
                      lineHeight: '1.6'
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p 
                      className="font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat', 
                        fontWeight: '600',
                        color: '#2C3E50'
                      }}
                    >
                      {testimonial.author}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Inter', 
                        fontWeight: '400',
                        color: '#34495E'
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)', border: '1px solid #00BCD4' }}>
              <span className="text-sm" style={{ fontFamily: 'Inter', fontWeight: '500', color: '#00BCD4' }}>
                ⚡ Early Bird Special: 50% Off First Year
              </span>
            </div>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-0"
              style={{ 
                backgroundColor: '#00BCD4',
                fontFamily: 'Montserrat',
                fontWeight: '600',
                color: 'white',
                height: 'auto',
                minHeight: '56px'
              }}
            >
              Secure Your Spot
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <p className="text-sm mt-4" style={{ fontFamily: 'Inter', color: '#34495E' }}>
              Limited time offer • Only 153 spots remaining
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}