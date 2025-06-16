
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Star, Zap, Palette, BookOpen, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";

const IpadEducation = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Học tập tương tác",
      description: "Biến mọi bài học thành trải nghiệm tương tác với touch screen và Apple Pencil"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Sáng tạo không giới hạn",
      description: "Vẽ, chỉnh sửa video, tạo nhạc với các app chuyên nghiệp như Procreate, iMovie"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hiệu suất mạnh mẽ",
      description: "Chip M-series xử lý mượt mà mọi tác vụ từ ghi chú đến render video 4K"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Chia sẻ dễ dàng",
      description: "AirDrop, iCloud giúp chia sẻ bài tập và dự án với bạn bè, giáo viên nhanh chóng"
    }
  ];

  const useCases = [
    {
      title: "Ghi chú thông minh",
      description: "Apple Pencil + GoodNotes = combo hoàn hảo cho ghi chú số. Viết tay tự nhiên, tìm kiếm text, sync đa thiết bị.",
      apps: ["GoodNotes 5", "Notability", "Apple Notes"],
      image: "https://images.unsplash.com/photo-1544531586-fbd91aab0b7d?q=80&w=2070"
    },
    {
      title: "Học lập trình",
      description: "Swift Playgrounds giúp học coding từ cơ bản đến nâng cao. Giao diện thân thiện, học qua game.",
      apps: ["Swift Playgrounds", "Pythonista", "Coding Games"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069"
    },
    {
      title: "Thiết kế & Sáng tạo",
      description: "Từ sketch đến artwork hoàn chỉnh. iPad Pro + Apple Pencil = studio di động cho mọi ý tưởng sáng tạo.",
      apps: ["Procreate", "Adobe Illustrator", "Affinity Designer"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064"
    },
    {
      title: "Thuyết trình chuyên nghiệp",
      description: "Keynote trên iPad giúp tạo slide ấn tượng với animation mượt mà. Present anywhere, anytime.",
      apps: ["Keynote", "PowerPoint", "Prezi"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    }
  ];

  const iPadModels = [
    {
      name: "iPad (10th generation)",
      price: "10,990,000đ",
      originalPrice: "12,990,000đ",
      studentPrice: "10,490,000đ",
      features: ["10.9-inch Liquid Retina display", "A14 Bionic chip", "12MP Wide camera", "USB-C connector"],
      recommended: false,
      badge: null
    },
    {
      name: "iPad Air",
      price: "14,990,000đ", 
      originalPrice: "16,990,000đ",
      studentPrice: "13,990,000đ",
      features: ["10.9-inch Liquid Retina display", "M1 chip", "12MP Wide camera", "Compatible with Apple Pencil (2nd gen)"],
      recommended: true,
      badge: "Phổ biến nhất"
    },
    {
      name: "iPad Pro 11-inch",
      price: "24,990,000đ",
      originalPrice: "26,990,000đ", 
      studentPrice: "22,990,000đ",
      features: ["11-inch Liquid Retina display", "M2 chip", "12MP Wide + 10MP Ultra Wide", "Face ID", "Thunderbolt/USB 4"],
      recommended: false,
      badge: null
    },
    {
      name: "iPad Pro 12.9-inch",
      price: "32,990,000đ",
      originalPrice: "34,990,000đ",
      studentPrice: "29,990,000đ", 
      features: ["12.9-inch Liquid Retina XDR display", "M2 chip", "12MP Wide + 10MP Ultra Wide", "Face ID", "Thunderbolt/USB 4"],
      recommended: false,
      badge: "Pro max"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-brand-red hover:text-brand-red/80">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Về trang chủ</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">iPad for Education</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-brand-red/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 Tablet cho học sinh sinh viên
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                iPad
                <span className="text-brand-red block">Học tập</span>
                <span className="text-gray-800">Thông minh</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Máy tính bảng đa năng nhất thế giới. Học tập hiệu quả, sáng tạo không giới hạn, 
                mang theo mọi lúc mọi nơi. Đặc biệt ưu đãi cho học sinh, sinh viên!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold">
                  Xem giá ưu đãi
                  <Star className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  Xem demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544531586-fbd91aab0b7d?q=80&w=2070" 
                alt="iPad trong học tập"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-2xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tại sao chọn iPad cho học tập?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              iPad không chỉ là tablet, mà là trợ lý học tập thông minh giúp bạn đạt hiệu quả tối đa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-4">
                    <div className="text-brand-red">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              iPad làm được gì trong học tập?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ ghi chú đơn giản đến dự án phức tạp, iPad đáp ứng mọi nhu cầu học tập của bạn
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.apps.map((app, idx) => (
                        <span key={idx} className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-sm font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Giá ưu đãi đặc biệt cho sinh viên
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiết kiệm đến 2,000,000đ khi mua iPad với chương trình giảm giá giáo dục
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iPadModels.map((model, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${model.recommended ? 'ring-2 ring-brand-red' : ''}`}>
                <CardContent className="p-6">
                  {model.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-medium">
                        {model.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-brand-red">{model.studentPrice}</span>
                      <div className="text-sm text-gray-500">
                        <span className="line-through">{model.originalPrice}</span>
                        <span className="ml-2 text-green-600 font-medium">Giá SV/HS</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${model.recommended ? 'bg-brand-red hover:bg-brand-red/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                  >
                    Chọn model này
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              💡 <strong>Lưu ý:</strong> Cần xuất trình thẻ sinh viên/học sinh để được giá ưu đãi
            </p>
            <Button size="lg" variant="outline" className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              Tìm đại lý gần nhất
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng nâng cấp trải nghiệm học tập?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Hãy trải nghiệm iPad ngay hôm nay và cảm nhận sự khác biệt trong học tập
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-brand-red border-white hover:bg-gray-100">
              Đặt lịch trải nghiệm
            </Button>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-red">
                Xem case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IpadEducation;
