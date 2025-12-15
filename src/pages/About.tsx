import Navigation from '@/components/Navigation';
import SocialFloat from '@/components/SocialFloat';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const skills = [
    { icon: 'Palette', title: 'Графический дизайн', description: 'Создание визуальной идентичности' },
    { icon: 'Sparkles', title: 'Креативное мышление', description: 'Нестандартные решения' },
    { icon: 'Camera', title: 'Фотография', description: 'Художественная съёмка' },
    { icon: 'Pen', title: 'Иллюстрация', description: 'Цифровое искусство' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialFloat />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Привет! Я Анна
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Креативный дизайнер и художник с авторским почерком. Моя миссия — создавать визуальные истории, 
                которые вдохновляют и вызывают эмоции.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Работаю на стыке традиционного искусства и цифровых технологий, исследую необычные формы 
                и экспериментирую с цветом.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Award" size={24} />
                  <span className="font-semibold">7+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="Users" size={24} />
                  <span className="font-semibold">200+ проектов</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/dd3a9fd4-7c98-4a87-b7c4-13860605e1ea.jpg"
                  alt="Анна Креатив"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Мои навыки</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                      <Icon name={skill.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Открыта для новых творческих проектов и интересных коллабораций. 
              Давайте создадим что-то уникальное вместе!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Icon name="Mail" size={20} />
                Написать письмо
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon name="Instagram" size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;