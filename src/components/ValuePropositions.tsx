
import { Card, CardContent } from "@/components/ui/card";

const ValuePropositions = () => {
  const studentValues = [
    {
      icon: "🎯",
      title: "Học hiệu quả hơn",
      description: "Ghi nhớ bài học tốt hơn với các app tương tác và visualization tools",
      stat: "85% cải thiện hiệu quả học"
    },
    {
      icon: "🚀",
      title: "Tăng tính sáng tạo",
      description: "Biến ý tưởng thành video, music, app, artwork với bộ công cụ Apple",
      stat: "3x tăng project sáng tạo"
    },
    {
      icon: "💪",
      title: "Kỹ năng tương lai",
      description: "Học coding, design, digital marketing - những skill hot nhất thị trường",
      stat: "95% sẵn sàng cho công việc"
    },
    {
      icon: "⏰",
      title: "Tiết kiệm thời gian",
      description: "Sync mọi thứ qua Cloud, học mọi lúc mọi nơi, quản lý deadline hiệu quả",
      stat: "50% tiết kiệm thời gian"
    }
  ];

  const practicalValues = [
    {
      icon: "💰",
      title: "Giá student ưu đãi",
      description: "Giảm giá đặc biệt cho sinh viên, học sinh với Apple Education Store",
      highlight: "Tiết kiệm đến 10%"
    },
    {
      icon: "🔒",
      title: "Bảo mật tuyệt đối",
      description: "Face ID, Touch ID, dữ liệu được mã hóa end-to-end, an toàn tuyệt đối",
      highlight: "100% secure"
    },
    {
      icon: "🔋",
      title: "Pin cả ngày",
      description: "MacBook Air 18 giờ, iPad 10 giờ - học từ sáng đến tối không lo hết pin",
      highlight: "All-day battery"
    },
    {
      icon: "🌐",
      title: "Hệ sinh thái hoàn hảo",
      description: "iPhone, iPad, Mac, Apple Watch sync hoàn hảo - handoff, airdrop, universal clipboard",
      highlight: "Seamless ecosystem"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-4">
            💎 Tại sao chọn Apple?
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Lợi ích <span className="text-brand-red">vượt trội</span> cho sinh viên
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apple không chỉ là công nghệ, mà là người bạn đồng hành giúp bạn 
            học tập thông minh và sáng tạo hơn mỗi ngày
          </p>
        </div>

        {/* Student Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lợi ích học tập
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{value.description}</p>
                  <div className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold">
                    {value.stat}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practical Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lợi ích thực tế
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{value.description}</p>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                    {value.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sẵn sàng thay đổi cách học?
            </h3>
            <p className="text-gray-600 mb-6">
              Hàng triệu sinh viên trên thế giới đã chọn Apple. Đến lượt bạn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-brand-red">92%</div>
                <div className="text-gray-600 text-sm">Sinh viên hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brand-red">4.8★</div>
                <div className="text-gray-600 text-sm">Đánh giá trung bình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brand-red">24/7</div>
                <div className="text-gray-600 text-sm">Hỗ trợ kỹ thuật</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
