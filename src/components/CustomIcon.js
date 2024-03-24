import React from 'react';

const CustomIcon = () => {
  return (
    <div className="absolute top-0 left-0 p-4">
      {/* Use the img tag with src pointing to your .ico file */}
      <img src="/favicon.ico" alt="Custom Icon" className="h-8 w-8" />
    </div>
  );
};

export default CustomIcon;
