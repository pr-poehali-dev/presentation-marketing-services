import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'marketing',
      title: 'Маркетинговая стратегия',
      icon: 'Target',
      items: [
        'Анализ рынка и определение ЦА',
        'Построение воронки продаж',
        'Разработка стратегии позиционирования',
        'Анализ конкурентов и УТП'
      ]
    },
    {
      id: 'branding',
      title: 'Брендирование',
      icon: 'Palette',
      items: [
        'Нейминг и логотип',
        'Фирменный стиль',
        'Брендбук и гайдлайн',
        'Легенда бренда'
      ]
    },
    {
      id: 'digital',
      title: 'Digital-маркетинг',
      icon: 'Globe',
      items: [
        'Разработка сайтов',
        'SEO-оптимизация',
        'UX/UI дизайн',
        'Прототипирование в Figma'
      ]
    },
    {
      id: 'smm',
      title: 'SMM и контент',
      icon: 'MessageCircle',
      items: [
        'Контент-план',
        'Продакшн фото/видео',
        'Ведение соцсетей',
        'Контент-маркетинг'
      ]
    },
    {
      id: 'ads',
      title: 'Реклама',
      icon: 'Megaphone',
      items: [
        'Таргетированная реклама',
        'Контекстная реклама',
        'PR-стратегия',
        'Медиапланирование'
      ]
    },
    {
      id: 'crm',
      title: 'CRM-системы',
      icon: 'Settings',
      items: [
        'Настройка CRM',
        'Интеграция с инструментами',
        'Автоматизация процессов',
        'Аналитика и отчетность'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Полный цикл',
      description: 'Все услуги в одном месте - от стратегии до реализации'
    },
    {
      icon: 'TrendingUp',
      title: 'Результат',
      description: 'Измеримые KPI и рост продаж ваших клиентов'
    },
    {
      icon: 'Users',
      title: 'Опыт',
      description: 'Команда экспертов с опытом 30+ лет в бизнесе'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрый запуск проектов и оперативная поддержка'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Внимание */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm bg-blue-50 text-blue-700 border-blue-200">
              Маркетинговое агентство полного цикла
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ваш бизнес<br />
              <span className="text-blue-600">растет?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Превратим ваши идеи в прибыльную стратегию.<br />
              Полный цикл маркетинга — от анализа до результата.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Icon name="ArrowRight" className="ml-2" size={20} />
              Получить стратегию
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть кейсы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Средний рост продаж</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30 дней</div>
              <div className="text-gray-600">До первых результатов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Интерес */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для роста вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`transition-all duration-300 hover:shadow-lg border-2 cursor-pointer ${
                  activeService === service.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                }`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeService === service.id ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {activeService !== service.id && (
                    <div className="text-sm text-gray-500 flex items-center">
                      <Icon name="ChevronDown" size={16} className="mr-1" />
                      Нажмите для подробностей
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Желание */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Преимущества работы с нашим агентством
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до результата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Анализ', description: 'Изучаем ваш бизнес и рынок' },
              { step: '02', title: 'Стратегия', description: 'Разрабатываем план действий' },
              { step: '03', title: 'Реализация', description: 'Воплощаем стратегию в жизнь' },
              { step: '04', title: 'Результат', description: 'Отслеживаем и оптимизируем' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Действие */}
      <section className="py-20 px-4 text-white bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить продажи?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и получите персональную стратегию развития вашего бизнеса
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-blue-500">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={24} />
              <span className="text-lg">+7 (964) 439-43-69</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={24} />
              <span className="text-lg">info@yurkevich-media</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" size={24} />
              <span className="text-lg">Москва, Россия</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}