
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Heart, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071")'
        }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center bg-brand-red/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Công nghệ học tập thế hệ mới
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Học tập
            <span className="text-brand-red block">Sáng tạo</span>
            <span className="text-white">Thành công</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Khám phá sức mạnh của Apple trong học tập! 
            Từ iPad đến MacBook - công cụ hoàn hảo để bạn học tập hiệu quả, 
            sáng tạo không giới hạn và chuẩn bị cho tương lai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold">
              Bắt đầu khám phá
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Xem trải nghiệm
            </Button>
          </div>
          
          {/* Student benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Học hiệu quả hơn</h3>
              <p className="text-white/80 text-sm">Công nghệ hỗ trợ học tập tối ưu</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Sáng tạo tự do</h3>
              <p className="text-white/80 text-sm">Biến ý tưởng thành hiện thực</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Skill tương lai</h3>
              <p className="text-white/80 text-sm">Chuẩn bị cho thế giới số</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full bg-brand-red rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
