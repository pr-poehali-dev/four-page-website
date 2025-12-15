import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
              <AvatarImage src="https://cdn.poehali.dev/projects/faf3acda-dc53-4dd3-a2e8-3489a0f2770e/files/dd3a9fd4-7c98-4a87-b7c4-13860605e1ea.jpg" alt="Автор" />
              <AvatarFallback className="bg-primary/20 text-primary font-bold">АК</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold text-lg font-['Montserrat'] group-hover:text-primary transition-colors">
                Анна Креатив
              </span>
              <span className="text-xs text-muted-foreground">
                Творческий блог
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/"
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              О нас
            </Link>
            <Link
              to="/shop"
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive('/shop')
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Магазин
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
