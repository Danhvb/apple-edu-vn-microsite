import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const WhyMac = () => {
  const reasons = [
    {
      title: "Hiệu năng đỉnh cao",
      description: "Chip Apple Silicon M2/M3 mang lại sức mạnh vượt trội cho mọi tác vụ",
      icon: "⚡",
      benefits: [
        "Xử lý nhanh mọi ứng dụng",
        "Compile code trong tích tắc",
        "Render video 4K mượt mà"
      ]
    },
    {
      title: "Ecosystem hoàn hảo",
      description: "Tích hợp seamless với iPhone, iPad, và các dịch vụ iCloud",
      icon: "🔗",
      benefits: [
        "Handoff giữa các thiết bị",
        "Universal Clipboard",
        "iCloud Drive đồng bộ"
      ]
    },
    {
      title: "Công cụ phát triển chuyên nghiệp",
      description: "Xcode, Terminal, và các tools development mạnh mẽ sẵn có",
      icon: "🛠️",
      benefits: [
        "Xcode cho iOS/macOS development",
        "Terminal với Unix commands",
        "Homebrew package manager"
      ]
    },
    {
      title: "Bảo mật & Riêng tư",
      description: "macOS với architecture bảo mật hàng đầu và privacy-first",
      icon: "🔒",
      benefits: [
        "FileVault encryption",
        "Secure Boot process",
        "App sandboxing"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            💻 Mac cho Giáo dục
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Tại sao chọn <span className="text-brand-red">Mac</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mac mang đến sức mạnh professional cho sinh viên IT, thiết kế và các ngành 
            đòi hỏi hiệu năng cao
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white/5 backdrop-blur-sm border border-white/10" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {reason.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Sẵn sàng nâng tầm khả năng với Mac?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Khám phá cách Mac có thể thay đổi cách bạn học và sáng tạo
          </p>
          <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 font-semibold">
            Tư vấn triển khai Mac
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMac;