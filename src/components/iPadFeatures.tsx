import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const iPadFeatures = () => {
  const features = [
    {
      title: "Apple Pencil",
      description: "Viết tay tự nhiên như trên giấy với độ trễ thấp và nhận biết lực nhấn",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070",
    },
    {
      title: "Màn hình Liquid Retina",
      description: "Hiển thị sắc nét, màu sắc chân thực cho việc học và sáng tạo",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070",
    },
    {
      title: "Camera Center Stage",
      description: "Tự động theo dõi và giữ bạn trong khung hình khi học online",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=2070",
    },
    {
      title: "Multitasking",
      description: "Chạy nhiều ứng dụng cùng lúc, split view giúp học tập hiệu quả",
      image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=2070",
    },
    {
      title: "AR Learning",
      description: "Thực tế ảo tăng cường mang kiến thức sống động đến tay bạn",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?q=80&w=2070",
    },
    {
      title: "Bàn phím Magic Keyboard",
      description: "Trải nghiệm gõ như laptop với trackpad chính xác",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2070",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Tính năng <span className="text-brand-red">iPad</span> cho Giáo dục
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những tính năng đặc biệt giúp iPad trở thành công cụ học tập lý tưởng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 font-semibold">
            Tìm hiểu thêm về iPad
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default iPadFeatures;