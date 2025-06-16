
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Apple for
              <span className="text-blue-600 block">Education</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Khơi nguồn sáng tạo và học tập hiệu quả với công nghệ Apple. 
              Mang đến trải nghiệm giáo dục tương tác, cá nhân hóa cho mọi học sinh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Tìm hiểu giải pháp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Xem demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">10M+</div>
                <div className="text-gray-600">Học sinh sử dụng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Trường học tin dùng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Hài lòng giáo viên</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                alt="Học sinh sử dụng iPad trong lớp học"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
