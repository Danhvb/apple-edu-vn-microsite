
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Heart, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Công nghệ học tập thế hệ mới
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Học tập
              <span className="text-brand-red block">Sáng tạo</span>
              <span className="text-gray-800">Thành công</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Khám phá sức mạnh của Apple trong học tập! 
              Từ iPad đến MacBook - công cụ hoàn hảo để bạn học tập hiệu quả, 
              sáng tạo không giới hạn và chuẩn bị cho tương lai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold">
                Bắt đầu khám phá
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Xem trải nghiệm
              </Button>
            </div>
            
            {/* Student benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-3">
                  <Target className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Học hiệu quả hơn</h3>
                <p className="text-gray-600 text-sm">Công nghệ hỗ trợ học tập tối ưu</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Sáng tạo tự do</h3>
                <p className="text-gray-600 text-sm">Biến ý tưởng thành hiện thực</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-3">
                  <Zap className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Skill tương lai</h3>
                <p className="text-gray-600 text-sm">Chuẩn bị cho thế giới số</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
                alt="Sinh viên sử dụng MacBook và iPad trong học tập"
                className="rounded-3xl shadow-2xl w-full"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce-slow">
                <div className="text-2xl">📚</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-red text-white p-4 rounded-2xl shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
                <div className="text-2xl">💡</div>
              </div>
            </div>
            {/* Background effects */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gray-800/10 rounded-full blur-3xl opacity-30"></div>
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
