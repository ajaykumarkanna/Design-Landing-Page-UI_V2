import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Zap, Target, ArrowRight } from "lucide-react";

export function HeroSection() {
  const features = [
    {
      icon: <Sparkles className="w-12 h-12" style={{ color: '#00BCD4' }} />,
      title: "AI-powered meeting notes that write themselves",
      description: "Automatically capture and organize meeting insights with intelligent AI assistance that learns your workflow patterns"
    },
    {
      icon: <Target className="w-12 h-12" style={{ color: '#00BCD4' }} />,
      title: "Frictionless client & project tracking",
      description: "Keep clients and projects organized effortlessly in one unified workspace designed for UX professionals"
    },
    {
      icon: <Zap className="w-12 h-12" style={{ color: '#00BCD4' }} />,
      title: "Designed for your UX workflow",
      description: "Built specifically for design professionals who value efficiency, clarity, and seamless collaboration"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)', border: '1px solid #00BCD4' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#00BCD4' }} />
              <span className="text-sm" style={{ fontFamily: 'Inter', fontWeight: '500', color: '#00BCD4' }}>
                Early Access • Limited Spots Available
              </span>
            </div>
            
            <h1 
              className="text-6xl md:text-8xl mb-8 tracking-tight"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '700',
                color: '#2C3E50',
                lineHeight: '1.1'
              }}
            >
              The UX Suite
            </h1>
            <p 
              className="text-2xl md:text-4xl mb-12 max-w-4xl mx-auto"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: '400',
                color: '#34495E',
                lineHeight: '1.4'
              }}
            >
              The only Notion OS you'll ever need as a UX designer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
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
                Join the Waitlist
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <p className="text-sm text-center sm:text-left" style={{ fontFamily: 'Inter', color: '#34495E' }}>
                🚀 <strong>2,847</strong> designers already joined
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)' }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 
                    className="text-xl mb-6"
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontWeight: '600',
                      color: '#2C3E50',
                      lineHeight: '1.3'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-base"
                    style={{ 
                      fontFamily: 'Inter', 
                      fontWeight: '400',
                      color: '#34495E',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p 
              className="text-xl max-w-4xl mx-auto mb-8"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: '400',
                color: '#34495E',
                lineHeight: '1.6'
              }}
            >
              Stop juggling tabs and templates. Finally, a single, AI-powered workspace that manages clients, projects, and your time with the simplicity you deserve.
            </p>
            <Button 
              size="lg" 
              className="px-10 py-5 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-0"
              style={{ 
                backgroundColor: '#2C3E50',
                fontFamily: 'Montserrat',
                fontWeight: '600',
                color: 'white',
                height: 'auto',
                minHeight: '52px'
              }}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}