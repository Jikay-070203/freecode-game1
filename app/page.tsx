"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GameEngine } from "@/components/game-engine"
import {
  Heart,
  Briefcase,
  DollarSign,
  Users,
  Activity,
  Zap,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  const [gameStarted, setGameStarted] = useState(false)

  if (gameStarted) {
    return <GameEngine />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-emerald-200 to-cyan-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-10 w-10 text-yellow-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            FreeCode - Game
          </h1>
            {/* 👉 Đưa nút bắt đầu lên ngay dưới tiêu đề */}
  <div className="mt-6">
    <Button
      size="lg"
      className="text-lg px-10 py-6 rounded-full 
                bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-300
                text-gray-900 font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform"
      onClick={() => setGameStarted(true)}
    >
      🌱 Bắt đầu cuộc hành trình
    </Button>
    <p className="text-sm text-gray-700 mt-4">
      Bạn sẽ bắt đầu ở tuổi 25, vừa ra trường và chuẩn bị bước vào đời
    </p>
  </div>
        </header>

        {/* Game Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Thể loại",
              icon: Activity,
              desc: "Mô phỏng - Lựa chọn tình huống - Nhập vai",
              color: "from-sky-300 to-blue-400",
            },
            {
              title: "Thời lượng",
              icon: Zap,
              desc: "5-6 phút (8 vòng chơi)",
              color: "from-yellow-200 to-orange-300",
            },
            {
              title: "Chủ đề",
              icon: Users,
              desc: "Ý thức xã hội & vấn đề hôn nhân của giới trẻ",
              color: "from-pink-300 to-purple-400",
            },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className={`border-0 shadow-lg hover:scale-105 transition-transform bg-gradient-to-r ${item.color} text-white`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon className="h-6 w-6" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Overview */}
        <Card className="mb-16 bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-800">
              Chỉ số trong game
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Mỗi quyết định ảnh hưởng đến 6 chỉ số chính của cuộc sống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Tài chính (FIN)",
                  desc: "Tiền bạc, nhà cửa, chi tiêu",
                  icon: DollarSign,
                  color: "text-green-500",
                },
                {
                  title: "Sự nghiệp (CAR)",
                  desc: "Thăng tiến, học hành, công việc",
                  icon: Briefcase,
                  color: "text-blue-500",
                },
                {
                  title: "Hạnh phúc (HAP)",
                  desc: "Thoải mái, vui vẻ cá nhân",
                  icon: Heart,
                  color: "text-pink-500",
                },
                {
                  title: "Gia đình (FAM)",
                  desc: "Gắn kết vợ/chồng, con cái",
                  icon: Users,
                  color: "text-yellow-500",
                },
                {
                  title: "Sức khỏe (HEA)",
                  desc: "Thể lực, tinh thần",
                  icon: Activity,
                  color: "text-emerald-500",
                },
                {
                  title: "Căng thẳng (STR)",
                  desc: "Áp lực cuộc sống (cao là xấu)",
                  icon: Zap,
                  color: "text-red-500",
                },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/70 hover:bg-white/90 transition"
                  >
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                    <div>
                      <h3 className="font-semibold text-gray-800">{stat.title}</h3>
                      <p className="text-sm text-gray-600">{stat.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-16 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 border-0 shadow-lg backdrop-blur-xl text-gray-900">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              Ý nghĩa triết học
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <Badge
                variant="secondary"
                className="bg-yellow-300 text-black px-4 py-1 text-sm"
              >
                Mác - Lênin
              </Badge>
              <p className="italic text-lg">
                "Tồn tại xã hội quyết định ý thức xã hội"
              </p>
            </div>
            <Separator className="bg-gray-400/50" />
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="p-6 rounded-lg bg-white/80 hover:bg-white transition">
                <h4 className="font-bold mb-2">Mâu thuẫn</h4>
                <p>Kinh tế - tình cảm, sự nghiệp - sức khỏe</p>
              </div>
              <div className="p-6 rounded-lg bg-white/80 hover:bg-white transition">
                <h4 className="font-bold mb-2">Biện chứng</h4>
                <p>Mỗi lựa chọn tăng cái này nhưng giảm cái kia</p>
              </div>
              <div className="p-6 rounded-lg bg-white/80 hover:bg-white transition">
                <h4 className="font-bold mb-2">Quy luật</h4>
                <p>Lượng - chất: từ độc thân → cưới → có con</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Start Game */}
        <div className="text-center">
          <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Trải nghiệm hành trình từ 25 đến 41 tuổi <br />
            Nơi mỗi quyết định đều có thể thay đổi tương lai của bạn.
          </p>
        </div>
      </div>
    </div>
  )
}
