
import { Card, CardContent } from "@/components/ui/card";

const ValuePropositions = () => {
  const educationalValues = [
    {
      icon: "🎯",
      title: "Tăng cường sự tham gia",
      description: "Học sinh tích cực hơn với các hoạt động học tập tương tác và thú vị",
      stat: "85% tăng engagement"
    },
    {
      icon: "📈",
      title: "Cải thiện kết quả học tập",
      description: "Nâng cao hiệu quả học tập thông qua phương pháp giảng dạy cá nhân hóa",
      stat: "40% cải thiện điểm số"
    },
    {
      icon: "💡",
      title: "Phát triển kỹ năng số",
      description: "Chuẩn bị học sinh cho tương lai với các kỹ năng công nghệ thiết yếu",
      stat: "100% sẵn sàng tương lai"
    },
    {
      icon: "👨‍🏫",
      title: "Hỗ trợ giáo viên",
      description: "Công cụ mạnh mẽ giúp giáo viên tạo ra những bài học sinh động và hiệu quả",
      stat: "95% giáo viên hài lòng"
    }
  ];

  const technicalValues = [
    {
      icon: "🔒",
      title: "Bảo mật tối đa",
      description: "Bảo vệ dữ liệu và quyền riêng tư của học sinh với công nghệ bảo mật hàng đầu",
      highlight: "GDPR & SOC 2 Compliant"
    },
    {
      icon: "⚙️",
      title: "Quản lý dễ dàng",
      description: "Apple School Manager giúp IT quản lý thiết bị và ứng dụng một cách hiệu quả",
      highlight: "Tiết kiệm 70% thời gian IT"
    },
    {
      icon: "🔗",
      title: "Tích hợp liền mạch",
      description: "Dễ dàng tích hợp với hệ thống giáo dục và phần mềm hiện tại của trường",
      highlight: "200+ tích hợp sẵn có"
    },
    {
      icon: "🛠️",
      title: "Hỗ trợ toàn diện",
      description: "Đào tạo, hỗ trợ kỹ thuật và tư vấn triển khai từ Apple và đối tác ủy quyền",
      highlight: "24/7 support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giá trị mang lại cho giáo dục
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apple for Education không chỉ là công nghệ, mà là giải pháp toàn diện 
            thay đổi cách chúng ta dạy và học
          </p>
        </div>

        {/* Educational Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giá trị giáo dục
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {value.stat}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giá trị kỹ thuật
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {value.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
