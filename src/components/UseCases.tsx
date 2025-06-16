
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: "Lớp học tương tác",
      description: "Sử dụng iPad và Apple Pencil để tạo ra môi trường học tập tương tác, giúp học sinh tham gia tích cực vào bài học thông qua các ứng dụng giáo dục đa dạng.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      icon: "📱",
      features: ["Ghi chú trực tiếp", "Chia sẻ màn hình", "Bài tập tương tác"]
    },
    {
      id: 2,
      title: "Sáng tạo nội dung",
      description: "Học sinh tạo video, podcast và presentation với iMovie, GarageBand và Keynote, phát triển kỹ năng sáng tạo và thuyết trình từ sớm.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      icon: "🎬",
      features: ["Chỉnh sửa video", "Thu âm podcast", "Thiết kế slides"]
    },
    {
      id: 3,
      title: "Học lập trình",
      description: "Swift Playgrounds giúp học sinh học coding một cách thú vị và trực quan, từ những khái niệm cơ bản đến phát triển ứng dụng thực tế.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070",
      icon: "💻",
      features: ["Swift Playgrounds", "Coding challenges", "App development"]
    },
    {
      id: 4,
      title: "Nghệ thuật số",
      description: "Procreate và các ứng dụng sáng tạo khác biến iPad thành studio nghệ thuật di động, cho phép học sinh thể hiện tài năng và ý tưởng sáng tạo.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
      icon: "🎨",
      features: ["Digital painting", "Graphic design", "3D modeling"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ứng dụng thực tế trong giáo dục
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách Apple đang chuyển đổi phương pháp giảng dạy và học tập 
            tại các trường học trên toàn Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={useCase.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {useCase.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {useCase.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Xem tất cả use cases
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
