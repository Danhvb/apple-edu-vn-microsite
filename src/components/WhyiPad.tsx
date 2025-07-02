import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const WhyiPad = () => {
  const reasons = [
    {
      title: "Dễ sử dụng cho mọi lứa tuổi",
      description: "Giao diện trực quan, thao tác cảm ứng tự nhiên từ mẫu giáo đến đại học",
      icon: "👶",
      benefits: [
        "Không cần đào tạo phức tạp",
        "Phù hợp với học sinh nhỏ tuổi",
        "Giao diện thân thiện"
      ]
    },
    {
      title: "Tính di động cao",
      description: "Mỏng nhẹ, thời lượng pin cả ngày, dễ dàng mang theo khắp nơi",
      icon: "🎒",
      benefits: [
        "Thay thế sách vở nặng nề",
        "Học mọi lúc mọi nơi",
        "Pin lên đến 10 giờ"
      ]
    },
    {
      title: "Tương tác sáng tạo",
      description: "Apple Pencil và màn hình cảm ứng mang lại trải nghiệm học tập trực quan",
      icon: "✏️",
      benefits: [
        "Viết tay tự nhiên",
        "Vẽ và thiết kế dễ dàng",
        "Tương tác trực tiếp với nội dung"
      ]
    },
    {
      title: "Quản lý lớp học thông minh",
      description: "Apple Classroom giúp giáo viên quản lý và giảng dạy hiệu quả",
      icon: "👩‍🏫",
      benefits: [
        "Điều khiển từ xa các thiết bị",
        "Chia sẻ nội dung instant",
        "Theo dõi tiến độ học tập"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🍎 iPad cho Giáo dục
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Tại sao chọn <span className="text-blue-600">iPad</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            iPad mang đến trải nghiệm học tập tương tác, di động và dễ sử dụng 
            cho học sinh từ mẫu giáo đến đại học
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {reason.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng chuyển đổi số với iPad?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Khám phá cách iPad có thể thay đổi trải nghiệm học tập tại trường của bạn
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold">
            Tư vấn triển khai iPad
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyiPad;