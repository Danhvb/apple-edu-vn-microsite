import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MacFeatures = () => {
  const features = [
    {
      title: "Chip M2/M3",
      description: "Hiệu năng vượt trội cho development, design và machine learning",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070",
    },
    {
      title: "macOS Ventura",
      description: "Hệ điều hành mạnh mẽ với ecosystem hoàn hảo cho sáng tạo",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2070",
    },
    {
      title: "Thời lượng pin cả ngày",
      description: "Lên đến 22 giờ sử dụng liên tục cho việc học và làm việc",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070",
    },
    {
      title: "Màn hình Retina",
      description: "Hiển thị siêu sắc nét với gam màu P3 cho thiết kế chuyên nghiệp",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    },
    {
      title: "Thunderbolt 4",
      description: "Kết nối siêu tốc với màn hình 6K và thiết bị ngoại vi",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067",
    },
    {
      title: "Xcode & Development",
      description: "Công cụ phát triển app iOS/macOS hoàn chỉnh từ Apple",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Tính năng <span className="text-brand-red">Mac</span> cho Giáo dục
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sức mạnh professional cho sinh viên IT, thiết kế và nghiên cứu khoa học
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
            Tìm hiểu thêm về Mac
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MacFeatures;