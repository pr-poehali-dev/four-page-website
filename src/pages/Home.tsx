import Navigation from '@/components/Navigation';
import SocialFloat from '@/components/SocialFloat';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Искусство минимализма в дизайне',
      excerpt: 'Как создавать значимое через простоту форм и цвета',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/9a30020d-7d33-47d1-a927-358f43be11c1.jpg',
      category: 'Дизайн',
      date: '15 декабря 2024'
    },
    {
      id: 2,
      title: 'Творческий процесс: от идеи до воплощения',
      excerpt: 'Мой личный подход к работе над креативными проектами',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/5862b830-ee9b-4d2b-9cd8-2c1959756700.jpg',
      category: 'Процесс',
      date: '12 декабря 2024'
    },
    {
      id: 3,
      title: 'Цвет как инструмент эмоций',
      excerpt: 'Психология цвета и её применение в творческих работах',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/dd3a9fd4-7c98-4a87-b7c4-13860605e1ea.jpg',
      category: 'Теория',
      date: '10 декабря 2024'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialFloat />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Творчество без границ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делюсь вдохновением, процессом и уникальными работами в мире креативного дизайна
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="px-6 pb-6">
                  <Button variant="ghost" className="w-full group/btn">
                    <span>Читать далее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Подписывайтесь на обновления</h2>
            <p className="text-muted-foreground mb-8">
              Получайте свежие статьи и эксклюзивный контент прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-border focus:border-primary outline-none transition-colors"
              />
              <Button size="lg" className="rounded-full px-8">
                Подписаться
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;