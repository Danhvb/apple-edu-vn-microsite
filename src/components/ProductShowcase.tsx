
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProductShowcase = () => {
  const iPadModels = [
    {
      name: "iPad (10th Gen)",
      price: "Từ 10,990,000₫",
      educationPrice: "9,490,000₫",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070",
      features: [
        "Màn hình Liquid Retina 10.9 inch",
        "Chip A14 Bionic mạnh mẽ",
        "Hỗ trợ Apple Pencil (1st gen)",
        "Camera 12MP với Center Stage",
        "Touch ID bảo mật"
      ],
      bestFor: "Lý tưởng cho học sinh tiểu học và THCS"
    },
    {
      name: "iPad Air",
      price: "Từ 14,990,000₫",
      educationPrice: "13,490,000₫",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070",
      features: [
        "Màn hình Liquid Retina 10.9 inch",
        "Chip M1 hiệu năng cao",
        "Hỗ trợ Apple Pencil (2nd gen)",
        "Camera 12MP Ultra Wide",
        "Touch ID và Face ID"
      ],
      bestFor: "Phù hợp cho học sinh THPT và sinh viên",
      popular: true
    },
    {
      name: "iPad Pro",
      price: "Từ 24,990,000₫",
      educationPrice: "22,490,000₫",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070",
      features: [
        "Màn hình Liquid Retina XDR",
        "Chip M2 Pro cực mạnh",
        "Apple Pencil Pro với haptic feedback",
        "Camera system chuyên nghiệp",
        "Thunderbolt / USB 4"
      ],
      bestFor: "Dành cho thiết kế và lập trình chuyên nghiệp"
    }
  ];

  const macModels = [
    {
      name: "MacBook Air M2",
      price: "Từ 27,990,000₫",
      educationPrice: "25,190,000₫",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      features: [
        "Chip M2 8-core CPU",
        "Màn hình Liquid Retina 13.6 inch",
        "Thời lượng pin 18 giờ",
        "Camera FaceTime HD 1080p",
        "Bàn phím Magic Keyboard"
      ],
      bestFor: "Hoàn hảo cho sinh viên và giáo viên"
    },
    {
      name: "MacBook Pro M2",
      price: "Từ 34,990,000₫",
      educationPrice: "31,490,000₫",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      features: [
        "Chip M2 Pro/Max",
        "Màn hình Liquid Retina XDR",
        "Thời lượng pin 22 giờ",
        "Hệ thống âm thanh 6 loa",
        "Cổng Thunderbolt 4"
      ],
      bestFor: "Dành cho phát triển app và content creation"
    }
  ];

  const software = [
    {
      name: "Schoolwork",
      description: "Tạo và phân phối bài tập, theo dõi tiến độ học sinh",
      icon: "📚",
      free: true
    },
    {
      name: "Classroom",
      description: "Quản lý lớp học, chia sẻ nội dung và kiểm soát thiết bị",
      icon: "🏫",
      free: true
    },
    {
      name: "Swift Playgrounds",
      description: "Học lập trình Swift một cách thú vị và tương tác",
      icon: "💻",
      free: true
    },
    {
      name: "Everyone Can Code",
      description: "Chương trình giảng dạy lập trình toàn diện",
      icon: "🎓",
      free: true
    },
    {
      name: "Everyone Can Create",
      description: "Hướng dẫn sáng tạo với video, âm nhạc, nhiếp ảnh",
      icon: "🎨",
      free: true
    },
    {
      name: "Apple School Manager",
      description: "Quản lý thiết bị, ứng dụng và tài khoản tập trung",
      icon: "⚙️",
      free: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sản phẩm & Giải pháp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sản phẩm Apple được thiết kế đặc biệt cho giáo dục, 
            với giá ưu đãi dành cho trường học
          </p>
        </div>

        {/* iPad Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">iPad for Education</h3>
            <p className="text-lg text-gray-600">Thiết bị học tập đa năng, mang sức mạnh máy tính trong thân hình siêu mỏng</p>
          </div>
          
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-1">
              {iPadModels.map((model, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${model.popular ? 'border-2 border-blue-500' : ''}`} style={{animationDelay: `${index * 150}ms`}}>
                      {model.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                          Phổ biến nhất
                        </Badge>
                      )}
                      <CardContent className="p-8">
                        <img 
                          src={model.image} 
                          alt={model.name}
                          className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h4>
                        <div className="mb-4">
                          <p className="text-gray-500 line-through">{model.price}</p>
                          <p className="text-2xl font-bold text-blue-600">{model.educationPrice}</p>
                          <p className="text-sm text-green-600 font-medium">Giá giáo dục</p>
                        </div>
                        <p className="text-blue-600 font-medium mb-4">{model.bestFor}</p>
                        <ul className="space-y-2 mb-6">
                          {model.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Tìm hiểu thêm
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Mac Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mac for Education</h3>
            <p className="text-lg text-gray-600">Sức mạnh đỉnh cao cho phát triển app, thiết kế và nghiên cứu</p>
          </div>
          
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-1">
              {macModels.map((model, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2">
                  <div className="p-1">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                      <CardContent className="p-8">
                        <img 
                          src={model.image} 
                          alt={model.name}
                          className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h4>
                        <div className="mb-4">
                          <p className="text-gray-500 line-through">{model.price}</p>
                          <p className="text-2xl font-bold text-blue-600">{model.educationPrice}</p>
                          <p className="text-sm text-green-600 font-medium">Giá giáo dục</p>
                        </div>
                        <p className="text-blue-600 font-medium mb-4">{model.bestFor}</p>
                        <ul className="space-y-2 mb-6">
                          {model.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Xem cấu hình
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Software Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Phần mềm & Dịch vụ</h3>
            <p className="text-lg text-gray-600">Bộ công cụ phần mềm miễn phí hỗ trợ giảng dạy và học tập hiệu quả</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{app.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{app.name}</h4>
                      {app.free && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Miễn phí
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ưu đãi đặc biệt cho giáo dục
            </h3>
            <p className="text-lg text-red-100 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full font-bold">Giảm giá lên đến 10%</span> cho tất cả sản phẩm Apple khi mua cho trường học. 
              Tư vấn miễn phí về triển khai và đào tạo.
            </p>
            <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 px-8 py-4 font-bold">
              Nhận báo giá cho trường học
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
