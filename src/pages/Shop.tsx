import Navigation from '@/components/Navigation';
import SocialFloat from '@/components/SocialFloat';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Авторский постер "Геометрия"',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/9a30020d-7d33-47d1-a927-358f43be11c1.jpg',
      tag: 'Бестселлер'
    },
    {
      id: 2,
      name: 'Цифровая иллюстрация "Абстракция"',
      price: '1 490 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/5862b830-ee9b-4d2b-9cd8-2c1959756700.jpg',
      tag: 'Новинка'
    },
    {
      id: 3,
      name: 'Набор принтов "Минимализм"',
      price: '4 990 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/dd3a9fd4-7c98-4a87-b7c4-13860605e1ea.jpg',
      tag: 'Набор'
    },
    {
      id: 4,
      name: 'Авторский календарь 2025',
      price: '1 990 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/9a30020d-7d33-47d1-a927-358f43be11c1.jpg',
      tag: 'Ограничено'
    },
    {
      id: 5,
      name: 'Коллекция обоев для телефона',
      price: '490 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/5862b830-ee9b-4d2b-9cd8-2c1959756700.jpg',
      tag: 'Цифровой'
    },
    {
      id: 6,
      name: 'Художественный плакат "Цвет"',
      price: '3 490 ₽',
      image: 'https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/dd3a9fd4-7c98-4a87-b7c4-13860605e1ea.jpg',
      tag: 'Эксклюзив'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialFloat />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Магазин творчества
            </h1>
            <p className="text-xl text-muted-foreground">
              Уникальные авторские работы для вашего пространства и вдохновения
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent/90 backdrop-blur-sm text-accent-foreground">
                      {product.tag}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Star" size={16} className="fill-accent text-accent" />
                      <span>5.0</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 gap-2">
                  <Button className="flex-1 rounded-full group/btn">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center">
            <Icon name="Gift" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Индивидуальный заказ</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Хотите что-то уникальное? Я создам работу специально для вас, 
              учитывая все ваши пожелания и особенности пространства
            </p>
            <Button size="lg" className="rounded-full px-8">
              Заказать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;