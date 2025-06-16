
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Star, Zap, Code, Video, Music, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const MacEducation = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Lập trình chuyên nghiệp",
      description: "Xcode, VS Code, Terminal - mọi công cụ dev đều chạy mượt mà trên macOS"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Chỉnh sửa video 4K",
      description: "Final Cut Pro, Adobe Premiere - render video nhanh gấp 3 lần PC thường"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Sản xuất âm nhạc",
      description: "Logic Pro với thư viện sound khổng lồ, thu âm chất lượng studio"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hiệu năng vượt trội",
      description: "Chip Apple Silicon mạnh mẽ, pin 18-22h, chạy im lặng không quạt"
    }
  ];

  const macModels = [
    {
      name: "MacBook Air 13-inch M3",
      category: "MacBook Air",
      price: "27,990,000đ",
      studentPrice: "25,190,000đ",
      specs: ["M3 chip", "8GB RAM", "256GB SSD", "18h battery"],
      description: "Siêu nhẹ, siêu mỏng, hoàn hảo cho sinh viên di chuyển nhiều",
      recommended: true,
      badge: "Bestseller",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026"
    },
    {
      name: "MacBook Air 15-inch M3", 
      category: "MacBook Air",
      price: "32,990,000đ",
      studentPrice: "29,690,000đ",
      specs: ["M3 chip", "8GB RAM", "256GB SSD", "18h battery"],
      description: "Màn hình lớn hơn, thoải mái làm việc đa nhiệm",
      recommended: false,
      badge: null,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2087"
    },
    {
      name: "MacBook Pro 14-inch M3",
      category: "MacBook Pro", 
      price: "49,990,000đ",
      studentPrice: "44,990,000đ",
      specs: ["M3 Pro chip", "18GB RAM", "512GB SSD", "Liquid Retina XDR"],
      description: "Cho sinh viên ngành thiết kế, lập trình chuyên sâu",
      recommended: false,
      badge: "Pro",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071"
    },
    {
      name: "MacBook Pro 16-inch M3",
      category: "MacBook Pro",
      price: "62,990,000đ", 
      studentPrice: "56,690,000đ",
      specs: ["M3 Max chip", "36GB RAM", "1TB SSD", "22h battery"],
      description: "Workstation di động, xử lý mọi tác vụ nặng",
      recommended: false,
      badge: "Max Performance",
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132"
    },
    {
      name: "Mac mini M2",
      category: "Mac mini",
      price: "14,990,000đ",
      studentPrice: "13,490,000đ", 
      specs: ["M2 chip", "8GB RAM", "256GB SSD", "Compact design"],
      description: "Desktop nhỏ gọn, hiệu năng cao cho ký túc xá",
      recommended: false,
      badge: "Compact",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2132"
    },
    {
      name: "Mac Studio M2",
      category: "Mac Studio", 
      price: "49,990,000đ",
      studentPrice: "44,990,000đ",
      specs: ["M2 Max chip", "32GB RAM", "512GB SSD", "Pro workflows"],
      description: "Workstation chuyên nghiệp cho render, AI, data science",
      recommended: false,
      badge: "Workstation",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067"
    },
    {
      name: "iMac 24-inch M3",
      category: "iMac",
      price: "34,990,000đ",
      studentPrice: "31,490,000đ",
      specs: ["M3 chip", "8GB RAM", "256GB SSD", "4.5K Retina display"],
      description: "All-in-one đẹp mắt, màn hình sắc nét cho thiết kế",
      recommended: false, 
      badge: "All-in-one",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067"
    }
  ];

  const useCases = [
    {
      title: "Lập trình & Phát triển ứng dụng",
      description: "Xcode cho iOS development, Docker, VS Code, terminal mạnh mẽ. Build app từ ý tưởng đến App Store.",
      tools: ["Xcode", "VS Code", "Terminal", "Git", "Docker"],
      majors: ["Công nghệ thông tin", "Khoa học máy tính", "Phần mềm"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069"
    },
    {
      title: "Thiết kế đồ họa & UI/UX", 
      description: "Adobe Creative Suite, Figma, Sketch chạy mượt mà. Màn hình Retina hiển thị màu sắc chính xác 100%.",
      tools: ["Adobe Creative Suite", "Figma", "Sketch", "Procreate", "Blender"],
      majors: ["Thiết kế đồ họa", "UI/UX Design", "Kiến trúc"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064"
    },
    {
      title: "Chỉnh sửa video & Motion Graphics",
      description: "Final Cut Pro, Adobe Premiere, After Effects. Render 4K nhanh gấp 5 lần, export video YouTube/TikTok.",
      tools: ["Final Cut Pro", "Adobe Premiere", "After Effects", "DaVinci Resolve"],
      majors: ["Truyền thông đa phương tiện", "Film", "Marketing"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070"
    },
    {
      title: "Sản xuất âm nhạc & Podcast",
      description: "Logic Pro với thư viện âm thanh khổng lồ. Thu âm, mix master chất lượng professional từ phòng ký túc xá.",
      tools: ["Logic Pro", "GarageBand", "Pro Tools", "Ableton Live"],
      majors: ["Âm nhạc", "Media", "Journalism"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070"
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
            <h1 className="text-2xl font-bold text-gray-900">Mac for Education</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-brand-red/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powerful. Personal. Portable.
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                Mac
                <span className="text-brand-red block">Sức mạnh</span>
                <span className="text-gray-800">Không giới hạn</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Từ code đầu tiên đến startup triệu đô. Mac đồng hành cùng sinh viên Việt Nam 
                chinh phục mọi thử thách học tập và sự nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold">
                  Xem giá sinh viên
                  <Star className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold">
                  So sánh models
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026" 
                alt="MacBook trong học tập"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-2xl">💻</div>
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
              Tại sao sinh viên chọn Mac?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mac không chỉ là laptop, mà là công cụ sáng tạo giúp bạn biến ý tưởng thành hiện thực
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
              Mac làm được gì cho sinh viên?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ lập trình đến thiết kế, từ research đến startup - Mac đáp ứng mọi nhu cầu học tập
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
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
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tools chính:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool, idx) => (
                          <span key={idx} className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phù hợp với ngành:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.majors.map((major, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {major}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mac Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Chọn Mac phù hợp với bạn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ sinh viên năm nhất đến thạc sĩ, từ basic đến professional - có Mac cho mọi nhu cầu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {macModels.map((mac, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${mac.recommended ? 'ring-2 ring-brand-red' : ''}`}>
                <CardContent className="p-6">
                  {mac.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-medium">
                        {mac.badge}
                      </span>
                    </div>
                  )}
                  
                  <img 
                    src={mac.image} 
                    alt={mac.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="text-center mb-4">
                    <div className="text-sm text-brand-red font-medium mb-1">{mac.category}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{mac.name}</h3>
                    <div className="mb-2">
                      <span className="text-xl font-bold text-brand-red">{mac.studentPrice}</span>
                      <div className="text-xs text-gray-500">
                        <span className="line-through">{mac.price}</span>
                        <span className="ml-1 text-green-600 font-medium">Giá SV</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{mac.description}</p>

                  <div className="space-y-2 mb-6">
                    {mac.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${mac.recommended ? 'bg-brand-red hover:bg-brand-red/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                  >
                    Chọn model này
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              🎓 <strong>Education Pricing:</strong> Tiết kiệm 10% với thẻ sinh viên/giáo viên
            </p>
            <Button size="lg" variant="outline" className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white mr-4">
              So sánh tất cả models
            </Button>
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white">
              Tìm đại lý Apple gần nhất
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Đầu tư cho tương lai. Bắt đầu từ hôm nay.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Mac không chỉ là laptop học tập mà còn là công cụ khởi nghiệp. Nhiều startup triệu đô bắt đầu từ MacBook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-brand-red border-white hover:bg-gray-100">
              Đặt lịch tư vấn
            </Button>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-red">
                Xem thành công của sinh viên
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacEducation;
