import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          
          {item.href ? (
            <Link 
              to={item.href} 
              className="hover:text-primary transition-colors flex items-center"
            >
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium flex items-center">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;