import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = {
    engines: {
      icon: <Icon name="Gauge" className="h-6 w-6" />,
      title: "Двигатели",
      description: "Типы и принципы работы моторов",
      skills: [
        { name: "Атмосферный ДВС", level: 95 },
        { name: "Турбированный", level: 90 },
        { name: "Роторный (Ванкель)", level: 75 },
        { name: "Электромотор", level: 85 },
        { name: "Гибридная установка", level: 80 },
      ],
    },
    moto: {
      icon: <Icon name="Bike" className="h-6 w-6" />,
      title: "Мотоциклы",
      description: "Культовые марки и модели",
      skills: [
        { name: "Harley-Davidson", level: 95 },
        { name: "Ducati", level: 90 },
        { name: "Honda CBR", level: 88 },
        { name: "Kawasaki Ninja", level: 85 },
        { name: "BMW GS", level: 82 },
        { name: "Yamaha R1", level: 88 },
      ],
    },
    cars: {
      icon: <Icon name="Car" className="h-6 w-6" />,
      title: "Автомобили",
      description: "Легендарные марки и суперкары",
      skills: [
        { name: "Ferrari", level: 95 },
        { name: "Lamborghini", level: 90 },
        { name: "Porsche", level: 92 },
        { name: "BMW M Series", level: 88 },
        { name: "Mercedes AMG", level: 85 },
        { name: "Ford Mustang", level: 87 },
      ],
    },
    transmission: {
      icon: <Icon name="Settings2" className="h-6 w-6" />,
      title: "Трансмиссии",
      description: "Коробки передач и приводы",
      skills: [
        { name: "Механика (MT)", level: 95 },
        { name: "Автомат (AT)", level: 90 },
        { name: "Робот (AMT/DSG)", level: 85 },
        { name: "Вариатор (CVT)", level: 80 },
        { name: "Полный привод (AWD)", level: 88 },
      ],
    },
    suspension: {
      icon: <Icon name="Layers" className="h-6 w-6" />,
      title: "Подвески",
      description: "Системы подрессоривания и управления",
      skills: [
        { name: "МакФерсон", level: 92 },
        { name: "Многорычажная", level: 90 },
        { name: "Пружинная вилка (мото)", level: 88 },
        { name: "Перевёрнутая вилка", level: 85 },
        { name: "Моноамортизатор", level: 83 },
      ],
    },
    records: {
      icon: <Icon name="Trophy" className="h-6 w-6" />,
      title: "Рекорды скорости",
      description: "Самые быстрые машины и мото в мире",
      skills: [
        { name: "Bugatti Chiron SS (490 км/ч)", level: 100 },
        { name: "Koenigsegg Jesko (487 км/ч)", level: 98 },
        { name: "Kawasaki H2R (400 км/ч)", level: 95 },
        { name: "Dodge Tomahawk (мото)", level: 90 },
        { name: "SSC Tuatara (532 км/ч)", level: 99 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Темы
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что я изучаю</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} ещё</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Нажмите на любую карточку, чтобы узнать подробнее о каждой теме — что я изучил и что мне особенно интересно.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
