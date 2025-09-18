import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-warm">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-serif font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="btn-moroccan">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">
              <Search className="mr-2 h-5 w-5" />
              Browse Shop
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
