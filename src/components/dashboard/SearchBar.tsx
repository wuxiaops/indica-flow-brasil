
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SearchBarProps {
  language: string;
}

const SearchBar = ({ language }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const texts = {
    pt: {
      searchPlaceholder: 'Buscar indicações, programas, usuários...',
      filter: 'Filtrar',
      search: 'Buscar'
    },
    en: {
      searchPlaceholder: 'Search referrals, programs, users...',
      filter: 'Filter',
      search: 'Search'
    }
  };

  const t = texts[language as keyof typeof texts];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" variant="outline">
            <Search className="h-4 w-4 mr-2" />
            {t.search}
          </Button>
          <Button type="button" variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            {t.filter}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
