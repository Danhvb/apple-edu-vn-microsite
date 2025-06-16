
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const caseStudies = [
    {
      id: 1,
      school: "Trường THPT Chuyên Lê Hồng Phong",
      location: "TP.HCM",
      logo: "🏫",
      challenge: "Tăng cường tương tác trong lớp học online và offline",
      solution: "Triển khai iPad cho 1,200 học sinh với Apple Classroom",
      results: [
        "95% học sinh tham gia tích cực hơn",
        "Giảm 60% thời gian chuẩn bị bài giảng",
        "Nâng cao 35% điểm số trung bình"
      ],
      quote: "Apple đã thay đổi hoàn toàn cách chúng tôi giảng dạy. Học sinh không còn thụ động mà trở thành những người sáng tạo nội dung.",
      author: "Thầy Nguyễn Văn An",
      position: "Hiệu trưởng",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
    },
    {
      id: 2,
      school: "Đại học Công nghệ Thông tin",
      location: "Hà Nội",
      logo: "🎓",
      challenge: "Modernize programming education với công cụ thực tế",
      solution: "Mac Studio labs và Swift curriculum cho 800 sinh viên",
      results: [
        "100% sinh viên làm chủ Swift trong 1 học kỳ",
        "Tăng 50% số dự án app được hoàn thành",
        "90% sinh viên có việc làm ngay sau tốt nghiệp"
      ],
      quote: "Với MacBook và Xcode, sinh viên của chúng tôi không chỉ học lý thuyết mà còn phát triển được những ứng dụng thực tế ngay từ năm đầu.",
      author: "PGS.TS Trần Thị Minh",
      position: "Trưởng khoa CNTT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2087"
    },
    {
      id: 3,
      school: "Trường Quốc tế Việt Úc",
      location: "Hà Nội",
      logo: "🌏",
      challenge: "Tích hợp STEAM education với công nghệ tiên tiến",
      solution: "iPad Pro + Apple Pencil cho tất cả học sinh từ lớp 6-12",
      results: [
        "Tăng 80% dự án STEAM được hoàn thành",
        "100% giáo viên thành thạo công nghệ giảng dạy",
        "Giành 5 giải thưởng quốc tế về giáo dục STEAM"
      ],
      quote: "Apple đã giúp chúng tôi tạo ra một môi trường học tập thực sự sáng tạo, nơi học sinh có thể biến ý tưởng thành hiện thực.",
      author: "Ms. Sarah Johnson",
      position: "Academic Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070"
    }
  ];

  const testimonials = [
    {
      quote: "iPad đã làm cho việc dạy toán trở nên trực quan và thú vị hơn bao giờ hết.",
      author: "Cô Phạm Thu Hà",
      position: "Giáo viên Toán",
      school: "THCS Nguyễn Du",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2087"
    },
    {
      quote: "Học sinh của tôi giờ đây có thể tạo ra những tác phẩm nghệ thuật tuyệt vời trên iPad.",
      author: "Thầy Lê Minh Đức",
      position: "Giáo viên Mỹ thuật",
      school: "THPT Marie Curie",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2087"
    },
    {
      quote: "Schoolwork app giúp tôi theo dõi tiến độ học tập của từng em một cách hiệu quả.",
      author: "Cô Nguyễn Lan Anh",
      position: "Giáo viên Ngữ văn",
      school: "THPT Chu Văn An",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2087"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chia sẻ thực tế từ khách hàng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những câu chuyện thành công và trải nghiệm thực tế từ các trường học 
            đang sử dụng Apple for Education
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Case Studies Thành Công
          </h3>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center mb-6">
                        <span className="text-3xl mr-4">{study.logo}</span>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{study.school}</h4>
                          <p className="text-blue-600 font-medium">{study.location}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">Thách thức:</h5>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">Giải pháp:</h5>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h5 className="font-bold text-gray-900 mb-4">Kết quả đạt được:</h5>
                        <div className="grid md:grid-cols-3 gap-4">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                              <span className="text-green-700 font-semibold text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                        <Quote className="h-8 w-8 text-blue-600 mb-4" />
                        <p className="text-gray-800 italic text-lg mb-4">"{study.quote}"</p>
                        <div className="flex items-center">
                          <img 
                            src={study.image} 
                            alt={study.author}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <p className="font-bold text-gray-900">{study.author}</p>
                            <p className="text-blue-600">{study.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex items-center justify-center p-8">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                        alt="Case study visualization"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Phản hồi từ giáo viên
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-800 italic text-lg mb-6">"{testimonial.quote}"</p>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-blue-600">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Xem thêm case studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
