import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Instagram, Linkedin, MessageCircle, ArrowRight, Gift } from "lucide-react";

export function CommunitySection() {
  const platforms = [
    { 
      platform: "Instagram", 
      count: "1.2K", 
      icon: <Instagram className="w-10 h-10" style={{ color: '#00BCD4' }} />,
      description: "Behind-the-scenes content and design tips"
    },
    { 
      platform: "LinkedIn", 
      count: "850", 
      icon: <Linkedin className="w-10 h-10" style={{ color: '#00BCD4' }} />,
      description: "Professional insights and industry updates"
    },
    { 
      platform: "Discord", 
      count: "2.1K", 
      icon: <MessageCircle className="w-10 h-10" style={{ color: '#00BCD4' }} />,
      description: "Real-time chat with UX professionals"
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 
              className="text-4xl md:text-6xl mb-6 tracking-tight"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '700',
                color: '#2C3E50',
                lineHeight: '1.1'
              }}
            >
              Join the Community
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
              Connect with fellow UX designers, get exclusive updates, and access early features before anyone else
            </p>
          </div>

          {/* Community Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-white border shadow-sm hover:shadow-lg transition-all duration-300 group" style={{ borderColor: '#DEE2E6' }}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)' }}>
                      {platform.icon}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div 
                      className="text-3xl"
                      style={{ 
                        fontFamily: 'Montserrat', 
                        fontWeight: '700',
                        color: '#2C3E50'
                      }}
                    >
                      {platform.count}
                    </div>
                    <div 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat', 
                        fontWeight: '600',
                        color: '#2C3E50'
                      }}
                    >
                      {platform.platform}
                    </div>
                    <p 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Inter', 
                        fontWeight: '400',
                        color: '#34495E'
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Offer CTA */}
          <div className="bg-white rounded-2xl p-12 shadow-lg border" style={{ borderColor: '#DEE2E6' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="w-6 h-6" style={{ color: '#00BCD4' }} />
              <span 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontWeight: '600',
                  color: '#00BCD4'
                }}
              >
                Exclusive Community Perks
              </span>
            </div>
            <h3 
              className="text-3xl mb-4"
              style={{ 
                fontFamily: 'Montserrat', 
                fontWeight: '700',
                color: '#2C3E50'
              }}
            >
              Be the First to Know
            </h3>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: '400',
                color: '#34495E',
                lineHeight: '1.5'
              }}
            >
              Waitlist members get exclusive access to beta features, priority support, and special launch pricing
            </p>
            <Button 
              size="lg" 
              className="px-12 py-5 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-0"
              style={{ 
                backgroundColor: '#00BCD4',
                fontFamily: 'Montserrat',
                fontWeight: '600',
                color: 'white',
                height: 'auto',
                minHeight: '52px'
              }}
            >
              Join the Waitlist Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}