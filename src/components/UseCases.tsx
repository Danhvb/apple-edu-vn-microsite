
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const UseCases = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TỪ MẪU GIÁO ĐẾN LỚP 12",
      description: "Trường Vinschool triển khai iPad cho 15,000 học sinh từ mẫu giáo đến lớp 12. Apple Pencil giúp học sinh viết tay tự nhiên, tương tác với nội dung học tập một cách trực quan và sáng tạo.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
    },
    {
      id: 2,
      title: "SINH VIÊN ĐẠI HỌC",
      description: "Đại học FPT trang bị MacBook Air M2 cho 25,000 sinh viên IT. Hiệu năng mạnh mẽ cho code development, thiết kế UI/UX và machine learning. Thời lượng pin 18 giờ phù hợp cho học tập cả ngày.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
    },
    {
      id: 3,
      title: "GIÁO VIÊN GIẢNG VIÊN",
      description: "Hệ thống trường ĐH Quốc gia Hà Nội sử dụng iPad Pro cho 5,000 giảng viên. Apple Classroom giúp quản lý lớp học hiệu quả, tạo bài giảng tương tác và theo dõi tiến độ học tập của sinh viên.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070",
    }
  ];

  const universities = [
    { name: "Đại học FPT", logo: "🏛️" },
    { name: "Vinschool", logo: "🎓" },
    { name: "ĐH Quốc gia Hà Nội", logo: "🏫" },
    { name: "ĐH Bách khoa Hà Nội", logo: "⚡" },
    { name: "ĐH Kinh tế Quốc dân", logo: "📊" },
    { name: "ĐH Ngoại thương", logo: "🌍" },
    { name: "ĐH Y Hà Nội", logo: "⚕️" },
    { name: "ĐH Sư phạm Hà Nội", logo: "📚" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ Case Studies từ Trường Đại học
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Thành công thực tế từ <span className="text-brand-red">Giáo dục Việt Nam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách các trường học hàng đầu Việt Nam đã triển khai thành công 
            Apple trong giáo dục và đạt được kết quả ấn tượng
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{study.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{study.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* University Logos Slider */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Tin cậy bởi các trường đại học hàng đầu</h3>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-1">
              {universities.map((university, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/4 md:basis-1/6">
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <span className="text-3xl mb-2">{university.logo}</span>
                        <p className="text-sm text-gray-600 text-center font-medium">{university.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
