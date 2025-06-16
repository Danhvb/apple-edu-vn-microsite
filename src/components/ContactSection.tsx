
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: "",
    contactName: "",
    email: "",
    phone: "",
    position: "",
    studentCount: "",
    currentTech: "",
    interests: "",
    contactMethod: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const supportInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Địa chỉ",
      content: ["Tầng 10, Tòa nhà Vincom Center", "72 Lê Thánh Tôn, Q1, TP.HCM"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Hotline",
      content: ["1800 1568 (Miễn phí)", "+84 28 3827 9999"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: ["education@apple.com.vn", "support@apple.com.vn"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Giờ làm việc",
      content: ["Thứ 2 - Thứ 6: 8:00 - 18:00", "Thứ 7: 9:00 - 17:00"]
    }
  ];

  const resellers = [
    {
      name: "FPT Shop Education",
      specialization: "Giải pháp iPad cho trường học",
      contact: "education@fptshop.com.vn",
      phone: "1900 6601"
    },
    {
      name: "Phong Vũ Education",
      specialization: "Mac Labs và thiết lập STEAM",
      contact: "education@phongvu.vn",
      phone: "1900 2091"
    },
    {
      name: "CellphoneS Education",
      specialization: "Đào tạo giáo viên và hỗ trợ kỹ thuật",
      contact: "education@cellphones.com.vn",
      phone: "1800 2097"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bắt đầu hành trình chuyển đổi số
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Để lại thông tin để nhận tư vấn miễn phí về giải pháp Apple cho trường học của bạn. 
            Đội ngũ chuyên gia sẽ hỗ trợ từ khâu lên kế hoạch đến triển khai.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Đăng ký tư vấn miễn phí
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="institutionName">Tên trường/tổ chức *</Label>
                    <Input
                      id="institutionName"
                      value={formData.institutionName}
                      onChange={(e) => handleInputChange("institutionName", e.target.value)}
                      placeholder="Trường THPT ABC..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Họ và tên liên hệ *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="example@school.edu.vn"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="0123 456 789"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Chức vụ</Label>
                    <Select onValueChange={(value) => handleInputChange("position", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn chức vụ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principal">Hiệu trưởng</SelectItem>
                        <SelectItem value="vice-principal">Phó hiệu trưởng</SelectItem>
                        <SelectItem value="it-manager">Trưởng phòng IT</SelectItem>
                        <SelectItem value="teacher">Giáo viên</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studentCount">Số lượng học sinh</Label>
                    <Select onValueChange={(value) => handleInputChange("studentCount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn quy mô" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Dưới 500</SelectItem>
                        <SelectItem value="500-1000">500 - 1,000</SelectItem>
                        <SelectItem value="1000-2000">1,000 - 2,000</SelectItem>
                        <SelectItem value="over-2000">Trên 2,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentTech">Công nghệ hiện tại đang sử dụng</Label>
                  <Input
                    id="currentTech"
                    value={formData.currentTech}
                    onChange={(e) => handleInputChange("currentTech", e.target.value)}
                    placeholder="Windows laptops, Android tablets..."
                  />
                </div>

                <div>
                  <Label htmlFor="interests">Quan tâm chính</Label>
                  <Select onValueChange={(value) => handleInputChange("interests", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn mối quan tâm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ipad-classroom">iPad cho lớp học</SelectItem>
                      <SelectItem value="mac-lab">Mac Lab cho lập trình</SelectItem>
                      <SelectItem value="steam-solution">Giải pháp STEAM</SelectItem>
                      <SelectItem value="teacher-training">Đào tạo giáo viên</SelectItem>
                      <SelectItem value="management-tools">Công cụ quản lý</SelectItem>
                      <SelectItem value="all">Tất cả</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contactMethod">Phương thức liên hệ ưa thích</Label>
                  <Select onValueChange={(value) => handleInputChange("contactMethod", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn phương thức" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Điện thoại</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="meeting">Họp trực tiếp</SelectItem>
                      <SelectItem value="video-call">Video call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tin nhắn bổ sung</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Chia sẻ thêm về nhu cầu và mục tiêu của trường..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Gửi yêu cầu tư vấn
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Bằng cách gửi form, bạn đồng ý với việc Apple liên hệ để cung cấp thông tin về sản phẩm và dịch vụ.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-300">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-6">
                  {supportInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-blue-600 mr-4 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.content.map((line, idx) => (
                          <p key={idx} className="text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Đối tác ủy quyền
                </h3>
                <div className="space-y-4">
                  {resellers.map((reseller, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-semibold text-gray-900">{reseller.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{reseller.specialization}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-blue-600">
                        <span>{reseller.contact}</span>
                        <span>{reseller.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎯 Cam kết của chúng tôi</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Tư vấn miễn phí trong vòng 24h</li>
                <li>✅ Hỗ trợ triển khai từ A-Z</li>
                <li>✅ Đào tạo giáo viên chuyên nghiệp</li>
                <li>✅ Bảo hành và hỗ trợ kỹ thuật dài hạn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
