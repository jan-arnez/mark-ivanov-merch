import React from 'react';
import Heading from '../global/Heading';

const PostsSection = () => {
  return (
    <div className="w-full py-8 h-full min-h-screen flex xl:flex-row flex-col items-center">
      <Heading title="Objave" number="05" />
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="aspect-4/5 w-full bg-stone-200">Post 1</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 2</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 3</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 4</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 5</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 6</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 7</div>
          <div className="aspect-4/5 w-full bg-stone-200">Post 8</div>
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
