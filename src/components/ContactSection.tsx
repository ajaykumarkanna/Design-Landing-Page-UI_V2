import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowRight, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 
                className="text-4xl md:text-5xl mb-6 tracking-tight"
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontWeight: '700',
                  color: '#2C3E50',
                  lineHeight: '1.1'
                }}
              >
                Ready to Transform Your UX Workflow?
              </h2>
              <p 
                className="text-xl mb-8"
                style={{ 
                  fontFamily: 'Inter', 
                  fontWeight: '400',
                  color: '#34495E',
                  lineHeight: '1.5'
                }}
              >
                Join the waitlist now and be among the first to experience the future of UX design productivity.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)' }}>
                    <Clock className="w-5 h-5" style={{ color: '#00BCD4' }} />
                  </div>
                  <span style={{ fontFamily: 'Inter', color: '#34495E' }}>
                    Expected launch: Q2 2024
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)' }}>
                    <Mail className="w-5 h-5" style={{ color: '#00BCD4' }} />
                  </div>
                  <span style={{ fontFamily: 'Inter', color: '#34495E' }}>
                    Get exclusive updates and early access
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Waitlist Form */}
            <Card className="bg-white border shadow-xl" style={{ borderColor: '#DEE2E6' }}>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 
                    className="text-2xl mb-2"
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontWeight: '600',
                      color: '#2C3E50'
                    }}
                  >
                    Join the Waitlist
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Inter', 
                      fontWeight: '400',
                      color: '#34495E'
                    }}
                  >
                    Be the first to know when we launch
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-3">
                    <Label 
                      htmlFor="name" 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Inter', 
                        fontWeight: '500',
                        color: '#34495E'
                      }}
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="bg-white border-2 p-4 rounded-lg transition-all duration-200 focus:border-[#00BCD4] focus:ring-0"
                      style={{ 
                        borderColor: '#DEE2E6',
                        fontFamily: 'Inter'
                      }}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label 
                      htmlFor="email" 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Inter', 
                        fontWeight: '500',
                        color: '#34495E'
                      }}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white border-2 p-4 rounded-lg transition-all duration-200 focus:border-[#00BCD4] focus:ring-0"
                      style={{ 
                        borderColor: '#DEE2E6',
                        fontFamily: 'Inter'
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label 
                      htmlFor="company" 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Inter', 
                        fontWeight: '500',
                        color: '#34495E'
                      }}
                    >
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-white border-2 p-4 rounded-lg transition-all duration-200 focus:border-[#00BCD4] focus:ring-0"
                      style={{ 
                        borderColor: '#DEE2E6',
                        fontFamily: 'Inter'
                      }}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-5 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-0"
                    style={{ 
                      backgroundColor: '#00BCD4',
                      fontFamily: 'Montserrat',
                      fontWeight: '600',
                      color: 'white',
                      height: 'auto',
                      minHeight: '52px'
                    }}
                  >
                    Secure My Spot
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  
                  <p className="text-xs text-center" style={{ fontFamily: 'Inter', color: '#6C757D' }}>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}