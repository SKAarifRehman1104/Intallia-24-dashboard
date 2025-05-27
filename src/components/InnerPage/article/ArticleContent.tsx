
import React from 'react';

interface ArticleContentProps {
  title?: string;
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ title, content }) => {
  return (
    <article className="w-full max-w-full mt-8">
      {title && (
        <h2 className="text-gray-800 text-xl font-medium mb-4">
          {title}
        </h2>
      )}
      <div className="text-gray-600 text-base leading-7">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};
