import { useEffect, useState } from 'react';

const useEnglishWords = () => {
  const [englishWords, setEnglishWords] = useState(new Set());

  useEffect(() => {
    fetch('/words_alpha.txt')
      .then(res => res.text())
      .then(text => {
        const words = text.split('\n').map(w => w.trim().toLowerCase());
        setEnglishWords(new Set(words));
      });
  }, []);

  return englishWords;
};
