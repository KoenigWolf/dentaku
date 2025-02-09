// src/components/Display.js
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="relative p-4 mb-6 bg-gray-800 rounded-xl">
    <div className="overflow-hidden">
      <p className="overflow-x-auto font-mono text-5xl tracking-wider text-right text-white whitespace-nowrap scrollbar-hide" 
         style={{ 
           textOverflow: 'ellipsis',
           maxWidth: '100%',
           direction: 'rtl',
           padding: '0.25rem'
         }}>
        {value}
      </p>
    </div>
    <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-l from-gray-800 via-transparent to-gray-800" 
         style={{ opacity: 0.2 }} />
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired
};

Display.displayName = 'Display';

export default React.memo(Display);