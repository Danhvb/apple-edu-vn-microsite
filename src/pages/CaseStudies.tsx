
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Users, BookOpen, Trophy, Laptop, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      category: "Từ mẫu giáo đến lớp 12",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-500",
      cases: [
        {
          title: "Trường Tiểu học Nguyễn Du - TP.HCM",
          challenge: "Tăng cường tương tác trong lớp học và phát triển kỹ năng sáng tạo cho học sinh",
          solution: "Triển khai iPad cho 600 học sinh lớp 3-5 với ứng dụng GarageBand và Keynote",
          results: [
            "90% học sinh tham gia tích cực hơn trong giờ học",
            "Tăng 40% khả năng thuyết trình của học sinh",
            "Phát triển 200+ dự án sáng tạo trong năm học"
          ],
          quote: "Các em không còn ngại thể hiện ý kiến. iPad đã giúp các em tự tin hơn và sáng tạo hơn.",
          student: "Em Nguyễn Minh An - Lớp 5A",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
        },
        {
          title: "Trường THPT Chuyên Lê Hồng Phong - TP.HCM", 
          challenge: "Nâng cao hiệu quả học tập môn STEM và chuẩn bị cho kỳ thi quốc tế",
          solution: "iPad Pro + Apple Pencil cho 300 học sinh khối 10-12, tích hợp Swift Playgrounds",
          results: [
            "95% học sinh thành thạo lập trình cơ bản",
            "Giành 5 giải thưởng quốc tế về STEM",
            "100% học sinh vào được đại học mong muốn"
          ],
          quote: "iPad giúp em học toán và lý dễ dàng hơn nhờ các app mô phỏng 3D. Em có thể vẽ công thức và xem kết quả ngay lập tức.",
          student: "Em Trần Thị Bảo - Lớp 12A1",
          image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032"
        }
      ]
    },
    {
      category: "Sinh viên đại học",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-brand-red",
      cases: [
        {
          title: "Đại học Bách Khoa Hà Nội - Khoa CNTT",
          challenge: "Hiện đại hóa phương pháp học lập trình và phát triển ứng dụng mobile",
          solution: "MacBook Pro cho 500 sinh viên + iPad cho testing, curriculum Swift và Xcode",
          results: [
            "100% sinh viên làm chủ Swift trong 1 học kỳ",
            "80 ứng dụng được phát hành lên App Store",
            "95% sinh viên có việc làm ngay sau tốt nghiệp"
          ],
          quote: "MacBook giúp em code mượt mà, không lag. Xcode chạy cực nhanh, em có thể focus 100% vào việc học thay vì chờ đợi.",
          student: "Sinh viên Phạm Đức Anh - K65 CNTT",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
        },
        {
          title: "Đại học Kiến trúc TP.HCM",
          challenge: "Nâng cao khả năng thiết kế và thuyết trình dự án kiến trúc",
          solution: "iPad Pro 12.9 inch + Apple Pencil cho 400 sinh viên ngành Kiến trúc",
          results: [
            "Giảm 70% thời gian hoàn thiện bản vẽ",
            "90% sinh viên thành thạo thiết kế số",
            "50 dự án được trưng bày quốc tế"
          ],
          quote: "iPad Pro với Apple Pencil như một tờ giấy vô hạn. Em có thể vẽ, chỉnh sửa và thuyết trình mọi lúc mọi nơi.",
          student: "Sinh viên Lê Thị Hương - K20 Kiến trúc",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
        }
      ]
    },
    {
      category: "Giảng viên / Giáo viên",
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-500",
      cases: [
        {
          title: "Thầy Nguyễn Văn Minh - Giáo viên Vật lý",
          challenge: "Làm cho môn Vật lý trở nên sinh động và dễ hiểu hơn",
          solution: "iPad + Apple TV cho phép chiếu bài giảng tương tác và thí nghiệm mô phỏng",
          results: [
            "85% học sinh yêu thích môn Vật lý hơn",
            "Tăng 30% điểm trung bình lớp",
            "Tiết kiệm 50% thời gian chuẩn bị bài giảng"
          ],
          quote: "iPad giúp tôi biến những khái niệm vật lý phức tạp thành những hình ảnh sinh động. Học sinh hiểu bài nhanh hơn rất nhiều.",
          student: "Thầy Nguyễn Văn Minh - THPT Nguyễn Thái Học",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2087"
        },
        {
          title: "Cô Trần Thị Lan - Giảng viên Đại học FPT",
          challenge: "Quản lý và theo dõi tiến độ học tập của 200+ sinh viên",
          solution: "MacBook Air + Schoolwork app để quản lý bài tập và đánh giá",
          results: [
            "100% bài tập được nộp đúng hạn",
            "Tiết kiệm 60% thời gian chấm bài",
            "Tăng cường tương tác với sinh viên"
          ],
          quote: "Schoolwork giúp tôi theo dõi từng sinh viên một cách chi tiết. Tôi biết chính xác ai cần hỗ trợ và hỗ trợ như thế nào.",
          student: "Cô Trần Thị Lan - Giảng viên FPT",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2087"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-brand-red hover:text-brand-red/80">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Về trang chủ</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Case Studies</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-red/5 to-brand-red/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Câu chuyện thành công
            <span className="text-brand-red block">Từ thực tế</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách Apple đã thay đổi cuộc sống học tập và giảng dạy của hàng nghìn 
            học sinh, sinh viên và giáo viên trên toàn Việt Nam
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {caseStudies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-full mb-4`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
              </div>

              <div className="space-y-12">
                {category.cases.map((caseStudy, caseIndex) => (
                  <Card key={caseIndex} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-8 lg:p-12">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
                          
                          <div className="mb-6">
                            <h4 className="font-bold text-brand-red mb-2">Thách thức:</h4>
                            <p className="text-gray-600">{caseStudy.challenge}</p>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-bold text-brand-red mb-2">Giải pháp:</h4>
                            <p className="text-gray-600">{caseStudy.solution}</p>
                          </div>

                          <div className="mb-8">
                            <h4 className="font-bold text-brand-red mb-4">Kết quả:</h4>
                            <div className="space-y-3">
                              {caseStudy.results.map((result, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <Trophy className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gray-50 border-l-4 border-brand-red p-6 rounded-r-lg">
                            <p className="text-gray-800 italic text-lg mb-4">"{caseStudy.quote}"</p>
                            <p className="font-bold text-brand-red">{caseStudy.student}</p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <img 
                            src={caseStudy.image} 
                            alt={caseStudy.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bạn cũng muốn tạo nên câu chuyện thành công?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi tư vấn giải pháp Apple phù hợp với nhu cầu học tập của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ipad-education">
              <Button size="lg" variant="outline" className="bg-white text-brand-red border-white hover:bg-gray-100">
                <Laptop className="mr-2 h-5 w-5" />
                Khám phá iPad
              </Button>
            </Link>
            <Link to="/mac-education">
              <Button size="lg" variant="outline" className="bg-white text-brand-red border-white hover:bg-gray-100">
                <Palette className="mr-2 h-5 w-5" />
                Khám phá Mac
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
