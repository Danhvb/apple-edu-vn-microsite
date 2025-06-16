
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: "Ghi chú thông minh",
      description: "Viết tay tự nhiên với Apple Pencil, chuyển đổi chữ viết thành text, tìm kiếm nhanh trong ghi chú. Hoàn hảo cho việc ghi chú bài giảng và ôn tập.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
      icon: "✍️",
      features: ["Handwriting recognition", "Smart search", "Cloud sync"],
      rating: 4.9,
      students: "2M+"
    },
    {
      id: 2,
      title: "Sáng tạo video & âm nhạc",
      description: "Tạo video presentation, podcast cho bài tập với iMovie và GarageBand. Học cách kể chuyện qua hình ảnh và âm thanh một cách chuyên nghiệp.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070",
      icon: "🎬",
      features: ["4K video editing", "Multi-track audio", "Pro effects"],
      rating: 4.8,
      students: "1.5M+"
    },
    {
      id: 3,
      title: "Học code thú vị",
      description: "Swift Playgrounds biến việc học lập trình thành trò chơi thú vị. Từ basic đến advanced, xây dựng app thực tế ngay trên iPad và Mac.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
      icon: "💻",
      features: ["Interactive lessons", "Real app building", "Instant feedback"],
      rating: 4.9,
      students: "800K+"
    },
    {
      id: 4,
      title: "Thiết kế đồ họa",
      description: "Procreate, Photoshop và Illustrator trên iPad Pro. Tạo ra artwork, poster, infographic cho project học tập với chất lượng chuyên nghiệp.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071",
      icon: "🎨",
      features: ["Vector graphics", "Digital painting", "Typography"],
      rating: 4.7,
      students: "1.2M+"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ Trải nghiệm thực tế
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Học tập theo cách <span className="text-brand-red">mới mẻ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách sinh viên và học sinh trên khắp Việt Nam đang sử dụng Apple 
            để học tập hiệu quả và sáng tạo hơn mỗi ngày
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={useCase.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {useCase.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.students} học sinh
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(useCase.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{useCase.rating}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {useCase.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 w-full font-semibold">
                    Khám phá ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 font-semibold">
            Xem tất cả cách học mới
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
