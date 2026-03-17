import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import Icon from "@/components/ui/icon"

interface Article {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  facts: string[]
  fullDescription: string
}

export default function Projects() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const articles: Article[] = [
    {
      id: 1,
      title: "Harley-Davidson: история бунтаря",
      shortDescription: "Как два друга создали легенду американского мотоцикла.",
      description: "История основания, культовые модели и факты о самом узнаваемом мотобренде мира.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley_davidson_1_bg_060702.jpg/1280px-Harley_davidson_1_bg_060702.jpg",
      tags: ["Мотоциклы", "История", "США"],
      facts: [
        "Основан в 1903 году в гараже в Милуоки",
        "Первый мотоцикл имел двигатель объёмом 116 куб. см",
        "Во время Второй мировой войны поставил армии 90 000 мотоциклов",
        "Культовая модель Fat Boy появилась в 1990 году",
        "Звук двигателя V-Twin запатентован как торговая марка",
      ],
      fullDescription:
        "Harley-Davidson — это не просто мотоцикл, это целая философия свободы. В 1903 году два друга, Уильям Харлей и Артур Дэвидсон, построили первый мотоцикл в маленьком деревянном сарае. Сегодня это один из самых узнаваемых брендов в мире. Характерный звук двигателя V-Twin настолько уникален, что компания пыталась его запатентовать. Мотоциклы Harley стали символом американской свободы и бунтарского духа, любимым транспортом байкеров по всему миру.",
    },
    {
      id: 2,
      title: "Ferrari: прыть итальянского жеребца",
      shortDescription: "От гоночных трасс к дорогам — история самого страстного бренда.",
      description: "Как Энцо Феррари создал марку, ставшую синонимом скорости и роскоши.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2016_Ferrari_488_GTB%2C_front_8.21.17.jpg/1280px-2016_Ferrari_488_GTB%2C_front_8.21.17.jpg",
      tags: ["Автомобили", "Суперкары", "Италия"],
      facts: [
        "Энцо Феррари основал компанию в 1939 году",
        "Первый автомобиль Ferrari — 125 S — был выпущен в 1947 году",
        "Логотип с чёрным конём — дань уважения лётчику Франческо Барацке",
        "Ferrari выиграла 16 чемпионатов мира Формулы 1",
        "Производство ограничено: не более 14 000 автомобилей в год",
      ],
      fullDescription:
        "Ferrari — это страсть, скорость и итальянское совершенство в металле. Энцо Феррари сначала гонял сам, потом строил машины для гонщиков, и лишь потом — для обычных (очень богатых) людей. Знаменитый символ — вставший на дыбы чёрный конь на жёлтом фоне — Энцо позаимствовал с фюзеляжа самолёта погибшего лётчика. Ferrari намеренно ограничивает производство, чтобы сохранить эксклюзивность: спрос всегда должен превышать предложение.",
    },
    {
      id: 3,
      title: "Ducati vs Honda: война двух философий",
      shortDescription: "Итальянская страсть против японской надёжности.",
      description: "Сравнение двух мотоциклетных гигантов: подход к инженерии, гонки и культура.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ducati_Panigale_V4_-_EICMA_2017_%2838744973grandprix%29.jpg/1280px-Ducati_Panigale_V4_-_EICMA_2017_%2838744973grandprix%29.jpg",
      tags: ["Мотоциклы", "Сравнение", "MotoGP"],
      facts: [
        "Ducati использует L-образный двигатель Desmodromic",
        "Honda — крупнейший производитель двигателей в мире",
        "Ducati Panigale V4 развивает 214 л.с. в дорожной версии",
        "Honda CBR1000RR-R выдаёт 217 л.с. в версии SP",
        "Ducati выиграла 17 чемпионатов в MotoGP",
      ],
      fullDescription:
        "Ducati и Honda — два разных взгляда на то, каким должен быть идеальный мотоцикл. Итальянцы из Ducati делают ставку на эмоции: звук, вибрацию, характер. Их L-образный двигатель Desmodromic — произведение инженерного искусства, где клапаны управляются принудительно. Honda — это точность, надёжность и технологии. Японцы первыми применили многие решения, ставшие стандартом индустрии. В MotoGP эти две марки годами спорят за первенство, и болельщики делятся на два непримиримых лагеря.",
    },
    {
      id: 4,
      title: "Porsche 911: вечный спортсмен",
      shortDescription: "60 лет эволюции без революции — секрет культового спорткара.",
      description: "Как Porsche 911 оставался актуальным на протяжении шести десятилетий.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/2019_Porsche_911_Carrera_4S_%28992%29%2C_front_8.27.19.jpg/1280px-2019_Porsche_911_Carrera_4S_%28992%29%2C_front_8.27.19.jpg",
      tags: ["Автомобили", "Спорткары", "Германия"],
      facts: [
        "Первый 911 представлен в 1963 году на Франкфуртском автосалоне",
        "Двигатель сзади — уникальная компоновка среди спорткаров",
        "Porsche 911 GT2 RS разгоняется до 100 км/ч за 2,7 секунды",
        "911-й выиграл 24 часа Ле-Мана более 100 раз",
        "Более 70% всех Porsche 911, когда-либо выпущенных, до сих пор на ходу",
      ],
      fullDescription:
        "Porsche 911 — живое опровержение поговорки «всё новое — это хорошо забытое старое». Эта машина остаётся принципиально неизменной уже более 60 лет — и при этом всегда актуальна. Задний мотор создаёт специфическое поведение на дороге, которое одни называют опасным, другие — восхитительным. Каждое поколение 911 быстрее, технологичнее и комфортнее предыдущего, но силуэт легко узнаётся с первого взгляда. Примечательный факт: большинство выпущенных 911-х до сих пор ездят — это лучший показатель качества.",
    },
    {
      id: 5,
      title: "Kawasaki Ninja H2: реактивный мотоцикл",
      shortDescription: "Первый серийный мотоцикл с центробежным нагнетателем.",
      description: "Как Kawasaki создала самый мощный серийный спортбайк в истории.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kawasaki_Ninja_H2R_at_Intermot_2014.jpg/1280px-Kawasaki_Ninja_H2R_at_Intermot_2014.jpg",
      tags: ["Мотоциклы", "Технологии", "Рекорды"],
      facts: [
        "H2R развивает 326 л.с. — рекорд для серийных мотоциклов",
        "Нагнетатель разработан совместно с авиационным подразделением Kawasaki",
        "Разгон 0-300 км/ч занимает менее 12 секунд",
        "Максимальная скорость H2R превышает 400 км/ч",
        "Рама изготовлена из высокопрочной стали методом точечной сварки роботами",
      ],
      fullDescription:
        "Kawasaki Ninja H2 — это машина, в которой авиационные технологии встретились с мотоциклом. Kawasaki Heavy Industries — огромный конгломерат, который строит самолёты, поезда, корабли и мотоциклы. Для H2 авиационное подразделение разработало центробежный нагнетатель — такие стоят на реактивных двигателях. Результат — 200+ л.с. в дорожной версии и 326 л.с. в трековой H2R. Этот мотоцикл разгоняется быстрее спорткаров и входит в поворот так, что физика начинает вызывать сомнения.",
    },
    {
      id: 6,
      title: "Электрокары: революция или хайп?",
      shortDescription: "Разбираем, как устроены электромобили и что ждёт ДВС.",
      description: "Принцип работы электромотора, аккумуляторы и будущее автомобильной отрасли.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2020_Tesla_Model_S_Long_Range_Plus%2C_front_8.6.20.jpg/1280px-2020_Tesla_Model_S_Long_Range_Plus%2C_front_8.6.20.jpg",
      tags: ["Автомобили", "Технологии", "Электро"],
      facts: [
        "Tesla Model S Plaid разгоняется 0-100 км/ч за 2,1 секунды",
        "КПД электромотора — до 95%, ДВС — максимум 40%",
        "Первый электромобиль создан в 1881 году — раньше бензинового",
        "Аккумулятор Tesla весит около 500 кг",
        "Рекорд запаса хода — 1210 км у Mercedes EQS",
      ],
      fullDescription:
        "Электромобили кажутся новинкой, но первый электрический экипаж появился в 1881 году — на 4 года раньше первого бензинового автомобиля Бенца. Электромотор превосходит ДВС по КПД почти в три раза и выдаёт максимальный крутящий момент с нуля оборотов — отсюда феноменальные разгоны Tesla. Главная проблема — аккумуляторы: они тяжёлые, дорогие и медленно заряжаются. Но технологии не стоят на месте: твердотельные батареи обещают изменить всё уже в ближайшие годы.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Статьи
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Статьи и факты</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedArticle === article.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm">{article.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedArticle === article.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-border"
                      >
                        <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-semibold">Интересные факты:</p>
                          {article.facts.map((fact, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Icon name="Zap" className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span>{fact}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedArticle(article)
                          }}
                        >
                          Читать полностью
                          <Icon name="ArrowRight" className="h-4 w-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedArticle !== article.id && (
                    <div className="p-4 flex items-center justify-between border-t border-border">
                      <div className="flex gap-2">
                        {article.tags.slice(0, 2).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedArticle && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedArticle.title}</DialogTitle>
                  <DialogDescription>{selectedArticle.description}</DialogDescription>
                </DialogHeader>
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full aspect-video object-cover rounded-md"
                />
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground">{selectedArticle.fullDescription}</p>
                <div className="space-y-2">
                  <p className="font-semibold">Интересные факты:</p>
                  {selectedArticle.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Zap" className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}